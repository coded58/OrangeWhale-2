import "./styles.css";

const Table = ({ title, content, icon }) => {
  return (
    <div className="table">
      <div className="icon">{icon}</div>
      <div className="table-content">
        <p>{title}</p>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default Table;
