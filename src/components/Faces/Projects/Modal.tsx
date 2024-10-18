import React from 'react';
import './Modal.css'; // Asegúrate de importar el CSS

interface ModalProps {
  title: string;
  description: string; // Nueva propiedad para la descripción
  tools: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, tools, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center modal-background">
      <div className="modal-content">
        <h2 className="modal-title text-2xl font-bold mb-4">{title}</h2>
        <p className="modal-description text-sm mb-4">{description}</p> 
        
        <div className="grid icon-grid mb-4">
          {tools}
        </div>

        <button
          className="modal-close-button mt-4"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;

