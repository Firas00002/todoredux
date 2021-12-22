import React, { useState } from 'react'
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');


const Edit = () => {
    const [modalIsOpen, setIsOpen] = React.useState (false);
    const {todo} = useSelector(state => state)
    const [edit, setEdit] = useState(todo.action)

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div>
            <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form>
              <label >Edit task:</label>
              <input type="text" value={edit} onChange={(e)=>setEdit(e.target.value)}/>
              <button>confirme</button>
              <button onClick={()=>closeModal()}>cancel</button>
          </form>
      </Modal>
        </div>
    )
}

export default Edit
