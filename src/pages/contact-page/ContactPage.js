import "./contact-page.scss";

const ContactPage = () => {
  return (
    <div className="contact">
      <h1 className="contact-title">CONTACT DETAILS:</h1>
      <p className="contact-text">Email - frank_od123@yahoo.com</p>
      <div className="contact-container">
        <a className="contact-text" href="https://github.com/frankod123">
          GitHub
        </a>
        <a
          className="contact-text"
          href="https://www.linkedin.com/in/francis-o-donnell-bourke/"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
