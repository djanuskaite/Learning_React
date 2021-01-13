import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext} from './context'

const Modal = () => {
  const {isModalOpen,closeModal} = useGlobalContext();

  return (
    // we set functionality to open the modal
  <div className={`${
    isModalOpen ? 'modal-overlay show-modal' :
    'modal-overlay'
    }`}>
    <div className='modal-container'>
      <h3>Modal Content</h3>
  {/* functionality to close the modal */}
      <button className='close-modal-btn' onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  </div>
  );
}

export default Modal
