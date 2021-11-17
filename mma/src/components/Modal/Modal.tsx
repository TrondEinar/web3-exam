import React from "react"
import ReactDOM from "react-dom"


interface ModalProps {
    onBackdropCLick: () => void;
}

const Modal: React.FC <ModalProps> = ({onBackdropCLick, children}) => {
    return ReactDOM.createPortal(<div onClick={onBackdropCLick}>
        
    </div>, document.getElementById("modal-root")!);
}

export default Modal