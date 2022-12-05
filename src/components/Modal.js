function Modal(props) {
  function cancelHandler() {
    props.cancel();
  }

  function confirmHandler() {
    props.confirm();
  }

  return (
    <div className="modal">
      <p> Are You Sure?</p>
      <label>Name: </label>
      <input type={"text"} />
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
