import { useImperativeHandle, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ({ children, open }) {
  const dialog = useRef();

  return createPortal(
    <dialog className="modal" open={open}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
