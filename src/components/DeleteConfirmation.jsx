export default function DeleteConfirmation({ onConfirm, onCancel }) {
  return (
    <div id="delete-confirmation">
      <h2 className="font-raleway text-1.5rem text-5d0909">Are you sure?</h2>
      <p className="text-center text-1.15rem max-w-[38ch] m-0 text-804242 mx-auto">Do you really want to remove this place?</p>
      <div id="confirmation-actions"
         className="mt-4 flex justify-end gap-4">
        <button onClick={onCancel} className="bg-transparent border-none p-0 font-raleway text-1rem text-5d0909">
          No
        </button>
        <button onClick={onConfirm} className="cursor-pointer font-raleway text-1rem py-2 px-6 border-none rounded-md bg-5d0909 text-white shadow-[0_1px_4px_rgba(0,0,0,0.4)] hover:bg-3e0505">
          Yes
        </button>
      </div>
    </div>
  );
}
