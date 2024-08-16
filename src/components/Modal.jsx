import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog className="min-w-[30rem] z-20 bg-stone-700 dark:bg-slate-400 text-stone-100 rounded-md p-4" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;
