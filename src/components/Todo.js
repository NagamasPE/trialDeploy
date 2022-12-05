import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalOpen, setModalOpen] = useState(false);

  function deleteHandler() {
    // console.log(props.text);
    setModalOpen(true);
  }

  function closeModalHandler() {
    setModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="action">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {
        modalOpen && (
          <Modal cancel={closeModalHandler} confirm={closeModalHandler} />
        ) /* {modalOpen ? <Modal /> : null} */
      }
      {modalOpen && <Backdrop close={closeModalHandler} />}
    </div>
  );
}

export default Todo;
