import React from 'react';

function Header() {
    return(
        <div>
            {/* Header Section Begin */}
    <header className="header-section">
      <div className="top-nav">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul className="tn-left">
                <li><i className="fa fa-phone"></i> 0672222864</li>
                <li><i className="fa fa-envelope"></i> seabreeze2004@gmail.com</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="tn-right">
                <div className="top-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-tripadvisor"></i></a>
                  <a href="#"><i className="fa fa-instagram"></i></a>
                </div>
                <a href="/rooms" className="bk-btn">Booking Now</a>
                <div className="language-option">
                  <img src="../assets/img/flag.jpg" alt="Language Flag" />
                  <span>EN <i className="fa fa-angle-down"></i></span>
                  <div className="flag-dropdown">
                    <ul>
                      <li><a href="#">Zi</a></li>
                      <li><a href="#">Fr</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="logo">
                <a href="./">
                  <img src="../assets/img/half.png" alt="Logo" />
                  <img src="../assets/img/sea.jpeg" alt="Logo" />
                </a>
              </div>
            </div>
            
            <div className="col-lg-10">
              <div className="nav-menu">
                <nav className="mainmenu">
                  <ul>
                    <li className="active"><a href="./">Home</a></li>
                    <li><a href="./rooms">Rooms</a></li>
                    {/* <li><a href="./contact">About Us</a></li> */}
                    <li><a href="./blog">About Us</a>
                    </li>
                    <li><a href="./news">News</a></li>
                    <li><a href="./contact">Contact</a></li>
                  </ul>
                </nav>
                <div className="nav-right search-switch">
                  <i className="icon_search"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Header End */}
        </div>
    )
}

export default Header;