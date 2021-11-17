import React, { Children } from "react"
import ReactDOM from "react-dom"
import ModalItem from "./ModalItem";


interface ModalProps {
    onBackdropCLick: () => void;
}
//  Her skal det egt stå {children} istedet for <span>, men bare for å vise at det kommer ut på nettsiden npr man trykker på "se mer" knappen
const Modal: React.FC <ModalProps> = ({onBackdropCLick}, children) => {
    return ReactDOM.createPortal(<div onClick={onBackdropCLick}>
        <span> hei </span> 
    </div>, document.getElementById("modal-root")!);
}

export default Modal