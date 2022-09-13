import Feature from "./../../components/feature/Feature";
import "./whatAi.css";

const WhatAI = () => {
  return (
    <div className="ai__whatai section__margin" id="wai">
      <div className="ai__whatai-feature">
        <Feature
          title="waht is AI?"
          text="loremasdfladf asdfjlasdjf lajkladsfjlajdsf aldsjfasldfu alkjsofg alkjslfjlagf loremasdfladf asdfjlasdjf lajkladsfjlajdsf aldsjfasldfu alkjsofg alkjslfjlagf loremasdfladf asdfjlasdjf lajkladsfjlajdsf aldsjfasldfu alkjsofg alkjslfjlagf loremasdfladf asdfjlasdjf lajkladsfjlajdsf aldsjfasldfu alkjsofg alkjslfjlagf loremasdfladf asdfjlasdjf lajkladsfjlajdsf aldsjfasldfu alkjsofg alkjslfjlagf"
        />
      </div>
      <div className="ai__whatai-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination.
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="ai__whatai-container">
        <Feature
          title="Chatbots"
          text="loremasdfladf asdfjlasdjf lajkladsfjlajdsf aldsjfasldfu alkjsofg alkjslfjlagf"
        />
        <Feature
          title="Knowledgebase"
          text="loremasdfladf asdfjlasdjf lajkladsfjlajdsf aldsjfasldfu alkjsofg alkjslfjlagf"
        />
        <Feature
          title="Education"
          text="loremasdfladf asdfjlasdjf lajkladsfjlajdsf aldsjfasldfu alkjsofg alkjslfjlagf"
        />
      </div>
    </div>
  );
};

export default WhatAI;
