import React from "react";
import Modal from "react-modal";

interface IProps {
  isOpen: boolean;
  setIsOpen: any;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    overflow: "hidden",
    width: "90%",
    height: "80%",
    minWidth: "300px",
    borderRadius: "12px",
    transform: "translate(-50%, -50%)",
    background: "transparent",
    border: "0px",
    padding: 0,
  },
  overlay: {
    backgroundColor: "rgba(72, 72, 72, 0.8)",
  },
};

const ModalContainer: React.FC<IProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      style={customStyles}
      onRequestClose={() => setIsOpen(false)}
    >
      {children}
    </Modal>
  );
};

export default ModalContainer;
