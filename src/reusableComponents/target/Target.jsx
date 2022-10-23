import "./styles.css";

const Target = ({ title, achieved, range }) => {
  return (
    <div className="target-card">
      <div className="left-target">
        <p>{title}</p>
        <span>{achieved}</span>
      </div>
      <div className="right-target">
        <div className="range"></div>
        <p>{range}%</p>
      </div>
    </div>
  );
};

export default Target;
