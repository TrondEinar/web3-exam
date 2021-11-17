import React from "react"
import Modal from "./Modal"
import ModalItem from "./ModalItem";


interface BaseModalWrapperProps{
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
    
    if(!isModalVisible){
        return null     }

    return(
    
    <Modal onBackdropCLick={onBackdropClick}>
    
          {ModalItem}
        
    </Modal>);
}

export default BaseModalWrapper