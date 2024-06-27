import Row from "./Row";
import "./style.css";

const Go = () => {
  return (
    <div className="go-board">
      {Array.from({ length: 13 }, (_, i) => (
        <Row key={i} rowIndex={i} />
      ))}
    </div>
  );
};

export default Go;