import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2 className="font-raleway font-bold text-xl">Are you sure?</h2>
      <p className="font-semibold text-1.15rem max-w-[38ch] mt-2 text-804242 mx-auto">
        Do you really want to remove this place?
      </p>
      <div id="confirmation-actions" className="mt-4 flex justify-end gap-4">
        <button onClick={onCancel} className="bg-transparent border-none p-0 font-raleway text-1rem">
          No
        </button>
        <button onClick={onConfirm} className="cursor-pointer font-raleway text-1rem py-2 px-6 bg-stone-400 text-stone-800 hover:bg-stone-500 hover:text-stone-300
                                              hover:scale-90 border-collapse rounded-md bg-5d0909 shadow-[0_1px_4px_rgba(0,0,0,0.4)] hover:bg-3e0505">
          Yes
        </button>
      </div>
      <ProgressBar className="bg-blue-500 h-full rounded-md" timer={TIMER} />
    </div>
  );
}
