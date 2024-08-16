import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);
  

  return createPortal(
    <dialog 
      className="w-5/6 sm:w-3/6 md:w-3/6 lg:w-2/6 xl:w-2/8 2xl:w-[35rem] z-20 bg-slate-800 text-stone-100 rounded-md p-4" 
      ref={dialog}
      >
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
