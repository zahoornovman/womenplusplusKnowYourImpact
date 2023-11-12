import "./header.scss";
import logo from "../assets/Brand.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };
  return (
    <header className="header">
      <div className="header-left">
        {/* <div className="brand-image"> */}
        <img src={logo} alt="" />
        {/* </div> */}

        {/* <div>Know your Impact</div> */}
      </div>
      <div className="header-right">
        <div className="header-right-left">
          <div className="home-page" onClick={handleOnClick}>HomePage</div>
          <div className="profit-orgs">Our Non-Profits</div>
          <div className="mission">Our Mission</div>
        </div>
        <div className="header-right-right">Reach Us</div>
      </div>
    </header>
  );
}
