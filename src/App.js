// Import React hooks
import {
  useState,
  useRef
} from "react";
// Import CSS file
import "./App.css";

// Define App component
function App() {
  // Initialize input and result reference hooks
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  // Initialize state for result with initial value 0
  const [result, setResult] = useState(0);

  // Define plus function to add input value to result
  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  // Define minus function to subtract input value from result
  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  // Define times function to multiply input value with result
  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  // Define divide function to divide result by input value
  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  // Define resetInput function to reset input value
  function resetInput(e) {
    e.preventDefault();
    Number(inputRef.current.value = 0);
    // Can be simplified to 
    // inputRef.current.value = 0;
  };

  // Define resetResult function to reset result value
  function resetResult(e) {
    setResult(0)
  };

  // Render App component
  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {/* Display the current total */}
          My result : {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        {/* Add and display the subtract button */}
        <button onClick={minus}>minus</button>
        {/* Add and display the multiply button */}
        <button onClick={times}>times</button>
        {/* Add and display the divide button */}
        <button onClick={divide}>divide</button>
        {/* Add and display the resetInput button */}
        <button onClick={resetInput}>reset input</button>
        {/* Add and display the resetResult button */}
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

// Export App component
export default App;
