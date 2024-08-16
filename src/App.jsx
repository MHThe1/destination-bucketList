import { useState, useRef, useEffect } from 'react';

import Header from './components/Header';
import { ThemeMode } from './components/ToggleTheme';
import Footer from './components/Footer';
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from './data.js';
import { sortPlacesByDistance } from "./loc.js";



const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map((id) => 
  AVAILABLE_PLACES.find((place) => place.id === id)
).filter(place => place !== undefined);



function App() {

  const modal = useRef();
  const selectedPlace = useRef();
  const [availablePlaces, setAvaiablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);

      setAvaiablePlaces(sortedPlaces);
    });
  }, [])

  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current)))
  }


  return (
    <div className={ThemeMode() ? "dark" : ""}>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>
      <main className="font-quicksand font-smooth-antialiased flex min-h-screen flex-col bg-neutral-100 dark:bg-neutral-900 text-stone-900 dark:text-stone-100">

        <Header />

        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />

        <Footer />
      </main>
    </div>
  );
}

export default App;
