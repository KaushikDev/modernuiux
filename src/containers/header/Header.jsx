import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="ai__header section__padding" id="home">
      <div className="ai__header-content">
        <h1 className="gradient__text">
          Let's build something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          unde quo, voluptate ea perferendis, aut iure sunt laudantium, in
          exercitationem nisi accusantium iusto. Beatae harum doloribus
          explicabo sapiente necessitatibus aliquid maxime ea neque animi,
          minima aperiam vero cumque, laboriosam maiores veritatis autem nam
          quibusdam tempora nihil qui fugiat.
        </p>
        <div className="ai__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="ai__header-content__people">
          <img src={people} alt="people" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            unde quo.
          </p>
        </div>
      </div>
      <div className="ai__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
