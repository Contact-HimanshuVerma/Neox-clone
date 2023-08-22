// Modal.js
import React from "react";

const Modal = ({ src, onClose }) => {
  return (
    <div className="fixed inset-0 z-[30000] p-12 flex items-center justify-center bg-black bg-opacity-90">
      <span
        className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
        onClick={onClose}
      >
        &times;
      </span>
      <img
        className="max-w-full max-h-full rounded-lg"
        src={src}
        alt="gallery"
      />
    </div>
  );
};

export default Modal;
