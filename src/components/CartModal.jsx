import React, { useRef, useEffect } from "react";
import "./CartModal.css";

export default function CartModal({ show, onClose, children }) {
  const ref = useRef();

  useEffect(() => {
    if (show) {
      ref?.current.modal("show");
    }
  }, [ref?.current, show]);

  return (
    <div ref={ref} className="modal show" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
