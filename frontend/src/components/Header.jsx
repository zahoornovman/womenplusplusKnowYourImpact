import "./header.scss";
import logo from "../assets/Brand.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div>
          <img src={logo} alt="" />
        </div>

        <div>Know your Impact</div>
      </div>
      <div className="header-right">
        <div className="header-right-left">
          <div>HomePage</div>
          <div>Our Non-Profits</div>
          <div>Our Mission</div>
        </div>
        <div className="header-right-right">Reach Us</div>
      </div>
    </header>
  );
}
