export default function Places({ title, places, fallbackText, onSelectPlace }) {
  return (
    <section className="max-w-[85rem] mx-auto my-8 p-4 border-2 border-[#0d373e] rounded-md">
      <h2 className="font-quicksand text-center font-bold text-xl text-cyan-700 dark:text-cyan-400">{title}</h2>
      {places.length === 0 && <p className='fallback-text'>{fallbackText}</p>}
      {places.length > 0 && (
        <ul className="max-w-[80rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto my-8 p-1 list-none">
          {places.map((place) => (
            <li 
              key={place.id} 
              className="relative flex flex-col bg-[#1f1c2c] rounded-md shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] 
              animate-[slide-up-fade-in_0.3s_ease-out_forwards] 
              hover:shadow-[0_0_8px_4px_rgba(255,217,0,0.6)] hover:rounded-md 
              even:hover:-rotate-6 odd:hover:rotate-6 transition-transform duration-300">
              <button
                className="bg-transparent border-none p-0 transition-all ease-in-out duration-200"
                onClick={() => onSelectPlace(place.id)}>
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={place.image.src} alt={place.image.alt} />
                <h3
                  className="font-raleway font-normal text-0.9rem absolute bottom-0 right-4 mb-4 text-stone-950 bg-[#feee86] rounded-md p-0.5 shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                  {place.title}
                </h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
