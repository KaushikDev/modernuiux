import Feature from "../../components/feature/Feature";

import "./features.css";

const featuresData = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil explicabo facilis ipsum iusto tempore repellendus atque molestias voluptatem aliquid aut.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil explicabo facilis ipsum iusto tempore repellendus atque molestias voluptatem aliquid aut.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil explicabo facilis ipsum iusto tempore repellendus atque molestias voluptatem aliquid aut.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil explicabo facilis ipsum iusto tempore repellendus atque molestias voluptatem aliquid aut.",
  },
];

const Features = () => {
  return (
    <div className="ai__features section__padding" id="features">
      <div className="ai__features-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          error maiores itaque consectetur debitis repellat laborum animi minus
          quae dolorum. Recusandae officiis molestiae mollitia esse assumenda
          tenetur cupiditate ipsum consequuntur?
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="ai__features-container">
        {featuresData.map((item, index) => (
          <Feature
            key={item.title + index}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
