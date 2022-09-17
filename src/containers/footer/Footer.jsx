import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="ai__footer section__padding">
      <div className="ai__footer-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, odit.
        </h1>
      </div>
      <div className="ai__footer-btn">
        <p>Request early access!!</p>
      </div>
      <div className="ai__footer-links">
        <div className="ai__footer-links-logo">
          <img src={gpt3Logo} alt="logo" />
          <p>copyright asdfasdfadfs. All rights reserved.</p>
        </div>
        <div className="ai__footer-links_div">
          <h4>Links</h4>
          <p>Contact</p>
          <p>Social</p>
          <p>Testimonials</p>
          <p>Explore</p>
        </div>
        <div className="ai__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="ai__footer-links_div">
          <h4>Get in touch</h4>
          <p>Some Alley</p>
          <p>Wheretown</p>
          <p>012-2323-2323</p>
          <p>info@test.tt</p>
        </div>
      </div>
      <div className="ai__footer-copyright">
        <p>&copy; 2022. Piyush Kaushik. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
