import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="ai__possibility section__padding" id="possibility">
      <div className="ai__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="ai__possibility-content">
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          facere placeat debitis eius temporibus sint.
        </p>
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
      </div>
    </div>
  );
};

export default Possibility;
