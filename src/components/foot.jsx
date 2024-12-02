import React from "react";


function Footer() {
    return(
        <div>
     {/* Footer Section Begin */}
     <footer className="footer-section">
      <div className="container">
        <div className="footer-text">
          <div className="row">
            <div className="col-lg-4">
              <div className="ft-about">
                <div className="logo">
                  <a href="#">
                    <img src="../../assets/img/footer-logo.png" alt="" />
                  </a>
                </div>
                <p> Has all you can eat · Has outdoor seating <br /> · High chairs available</p>
                <div className="fa-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-tripadvisor"></i></a>
                  <a href="#"><i className="fa fa-instagram"></i></a>
                  <a href="#"><i className="fa fa-youtube-play"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="ft-contact">
                <h6>Contact Us</h6>
                <ul>
                  <li>067 22 22 864</li>
                  <li>seabreeze2004@gmail.com</li>
                  <li>Seabreeze Restaurant & Gust in <br/>430 Beach Road Sainthamaruthu 8 </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 offset-lg-1">
              <div className="ft-contact">
                <h6>Contact Us</h6>
                <ul>
                  <li>(94) 077 367 0136</li>
                  <li>halfmoonatp@gmail.com</li>
                  <li>Half Moon Beach Resort Central Road Addapallam </li>
                </ul>
              </div>
            </div>


            
            <div className="col-lg-3 offset-lg-3">
              <div className="ft-newslatter">
                <h6>New latest</h6>
                <p>Get the latest updates and offers.</p>
                <form action="#" className="fn-form">
                  <input type="text" placeholder="Email" />
                  <button type="submit"><i className="fa fa-send"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <ul>
                <li><a href="/contact">Contact</a></li>
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Environmental Policy</a></li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="co-text">
                <p>
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="#" target="_blank" rel="noopener noreferrer">TechMos</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* Footer Section End */}

    {/* Search Model Begin */}
    <div className="search-model">
      <div className="search-close-switch">+</div>
      <form className="search-model-form">
        <input type="text" id="search-input" placeholder="Search here..." />
      </form>
    </div>
    {/* Search Model End */}
        </div>
    )
}

export default Footer;