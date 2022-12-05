function Modal(props) {
  function cancelHandler() {
    props.cancel();
  }

  function confirmHandler() {
    props.confirm();
  }

  return (
    <div className="modal">
      <p>
        <b>Please Fill Form Below!</b>
      </p>
      <div className="info">
        <label>Material: </label>
        <input type={"text"} className={"inputBox"} />
        <label>QTY: </label>
        <input type={"number"} className={"inputBox"} />
        <label>Nilai: </label>
        <input type={"number"} className={"inputBox"} />
      </div>
      <br />
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
