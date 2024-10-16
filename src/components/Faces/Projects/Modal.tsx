import React from 'react';
import './Modal.css'; // Asegúrate de importar el CSS

interface ModalProps {
  title: string;
  tools: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, tools, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center modal-background">
      <div className="modal-content">
        <h2 className="modal-title text-2xl font-bold mb-4">{title}</h2>
        <div className="flex justify-center text-4xl space-x-4 mb-4">
          {tools}
        </div>
        <button
          className="modal-close-button mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
