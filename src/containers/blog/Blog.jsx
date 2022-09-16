import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="ai__blog section__padding" id="blog">
      <div className="ai__blog-heading">
        <h1 className="gradient__text">We are blogging about it.</h1>
      </div>
      <div className="ai__blog-container">
        <div className="ai__blog-container__groupA">
          <Article
            imgUrl={blog01}
            date="sep 16, 2022"
            title="What the impact on AI on normal humans?"
          />
        </div>
        <div className="ai__blog-container__groupB">
          <Article
            imgUrl={blog02}
            date="sep 16, 2022"
            title="What the impact on AI on normal humans?"
          />
          <Article
            imgUrl={blog03}
            date="sep 16, 2022"
            title="What the impact on AI on normal humans?"
          />
          <Article
            imgUrl={blog04}
            date="sep 16, 2022"
            title="What the impact on AI on normal humans?"
          />
          <Article
            imgUrl={blog05}
            date="sep 16, 2022"
            title="What the impact on AI on normal humans?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
