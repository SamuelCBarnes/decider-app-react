import { useRef, useState, useContext } from "react";
import { MyContext } from '../context';
import { ToastContainer, toast } from "react-toastify";

const Initial = () => {
  const context = useContext(MyContext);
  const textInput = useRef();
  const [showNext, setShowNext] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = () => {
    if (textInput.current.value.length > 5) setShowNext(true)
    else setShowNext(false);
  }

  const handleSubmit = () => {
    const value = textInput.current.value;

    if (value.length > 100) {
toast.error("Question is too long", {position: toast.POSITION.BOTTOM_CENTER})
      // setShowError(true)
      return false
    }
context.goTo(1);  
context.question(value)
}

  return (
    <div>
      <h1>Ask a Question</h1>
      <input
        ref={textInput}
        onChange={handleChange}
        name="question" type="text" className="form-control" />

      {showNext &&
        <button className="btn animate__animated animate__fadeIn" onClick={handleSubmit}>Next</button>
      }
      {/* {showError && <div className="error">The Question is too long</div> */}
      <div class="containerbackground">
            8
        </div>
    </div>
  );
};

export default Initial;
