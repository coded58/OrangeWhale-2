import "./styles.css";

const Card = ({ title, digits }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <span>{digits}</span>
    </div>
  );
};

export default Card;
