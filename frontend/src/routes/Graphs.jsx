import newPlot from "../assets/newplot.png";
import newPlot1 from "../assets/newplot(1).png";
import newPlot2 from "../assets/newplot(2).png";
import newPlot3 from "../assets/newplot(3).png";
import newPlot4 from "../assets/newplot(4).png";
import newPlot5 from "../assets/newplot(5).png";
import newPlot6 from "../assets/newplot(6).png";
import newPlot7 from "../assets/newplot(7).png";

import "./graphs.scss";

export default function GraphsImages() {
  return (
    <div className="dashboard">
      <div className="name">Women++ Dashboard</div>
      <div className="graphs-images">
        <img src={newPlot} />
        <img src={newPlot1} />
        <img src={newPlot2} />
        <img src={newPlot3} />
        <img src={newPlot4} />
        <img src={newPlot5} />
        <img src={newPlot6} />
        <img src={newPlot7} />
      </div>
      <button className="button-donate">Donate Now</button>
    </div>
  );
}
