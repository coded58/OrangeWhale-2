import "./styles.css";
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <div className="left">
      <header className="header">
        <Link to="/">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_1_5" fill="white">
              <rect width="50" height="50" rx="5" />
            </mask>
            <rect
              width="50"
              height="50"
              rx="5"
              fill="#E19133"
              stroke="#5496F9"
              strokeOpacity="0.29"
              strokeWidth="16"
              mask="url(#path-1-inside-1_1_5)"
            />
          </svg>
        </Link>
        <div className="header-details">
          <p>OrangeWhale</p>
          <span>Growth & Marketing</span>
        </div>
      </header>
    </div>
  );
};

export default Left;
