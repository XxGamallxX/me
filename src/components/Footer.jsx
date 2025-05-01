






const Footer = () => {
    return (
      <div className="container-fluid d-flex align-items-center  my-Vh75 my-BgColorblue">
        <div className="w-75 mx-auto">
          <ul className="list-unstyled  ">
            <li className="lh-lg"><a href="#home" className="text-decoration-none text-white " >Report a Problem</a></li>
            <li className="lh-lg"><a href="#about" className="text-decoration-none text-white " >FAQs</a></li>
            <li className="lh-lg"><a href="#services" className="text-decoration-none text-white " >Privacy Policy</a></li>
            <li className="lh-lg"><a href="#contact" className="text-decoration-none text-white " >Terms & Conditions</a></li>
            <li className="lh-lg"><a href="#contact" className="text-decoration-none text-white " >Contact Us</a></li>           
          </ul>
          <div className="flex">
            <a href=""><img  src="./Rafeeq/instagram.png" alt="instagram link" /></a>
            <a href="" className="mx-4"><img src="./Rafeeq/facebook.png" alt="facebook link" /></a>
            <a href=""><img src="./Rafeeq/linkedin.png" alt="linkedin link" /></a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;