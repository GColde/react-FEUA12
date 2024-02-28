import "./FuncDiv.css";
import FuncButton from "./FuncButton";
const FuncDiv = ({ wordForButton }) => {
  return (
    <div>
      <h3>Random button</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni
        soluta facere.
      </p>
      <FuncButton buttonWords={wordForButton} />
    </div>
  );
};

export default FuncDiv;
