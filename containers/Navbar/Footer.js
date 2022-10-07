import { Link } from 'react-router-dom'
// css
import '../../css/footer.css'
const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="">
                <ul className="list-unstyled ">
                  <li className="footer-li  ">
                    <h4 className="footer-li-head ">Company</h4>
                  </li>
                  <li className="footer-li ">
                    <Link
                      to="/about/aboutus.html"
                      className=""
                      aria-label="About us"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="footer-li ">
                    <Link
                      to="{% url 'contact' %}"
                      className=""
                      aria-label="Contact us"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li className="footer-li ">
                    <Link
                      to="https://jobs.zameen.com/"
                      className=""
                      aria-label="Jobs"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li className="footer-li ">
                    <Link
                      to="/help/index.html"
                      className=""
                      aria-label="Help and support"
                    >
                      Help &amp; Support
                    </Link>
                  </li>
                  <li className="footer-li ">
                    <Link
                      to="/advertise/index.html"
                      className=""
                      aria-label="Advertise on zameen"
                    >
                      Advertise on Zameen
                    </Link>
                  </li>
                  <li className="footer-li ">
                    {" "}
                    <Link
                      to="/terms.html"
                      className=""
                      aria-label="Terms"
                    >
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- 2nd row --> */}
            <div className="col-12 col-md-3">
              <div className="">
                <ul className="list-unstyled ">
                  <li className="footer-li  ">
                    <h4 className="footer-li-head">Connect</h4>
                  </li>
                  <li className="footer-li ">
                    <Link to="/blog/" className="" aria-label="Blog">
                      Blog
                    </Link>
                  </li>
                  <li className="footer-li ">
                    <Link to="/news" className="" aria-label="News">
                      News
                    </Link>
                  </li>
                  <li className="footer-li ">
                    <Link to="/forum/" className="" aria-label="Forum">
                      Forum
                    </Link>
                  </li>
                  <li className="footer-li ">
                    <Link
                      to="https://expo.zameen.com"
                      className=""
                      aria-label="Expo"
                    >
                      Expo
                    </Link>
                  </li>
                  <li className="footer-li ">
                    <Link
                      to="/agents.html"
                      className=""
                      aria-label="Real estate agents"
                    >
                      Real Estate Agents
                    </Link>
                  </li>
                  <li className="footer-li ">
                    <Link
                      to="/add_property_single.html"
                      className=""
                      aria-label="Add property"
                    >
                      Add Property
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- 3rd row --> */}
            <div className="col-12 col-md-3">
              <div className="">
                <ul className="list-unstyled ">
                  <li className="footer-li ">
                    <h4 className="footer-li-head">Head Office</h4>
                  </li>
                  <li className="footer-li d-flex ">
                    <div>
                      <i className="fa-solid fa-location-dot px-2"></i>
                    </div>
                    <div className="">
                      Pearl One, 94-B/I, MM Alam Road,
                      <br />
                      Gulberg III, Lahore, Pakistan
                    </div>
                  </li>
                  <li className="footer-li d-flex my-2">
                    <div>
                      <i className="fa-solid fa-phone px-2"></i>
                    </div>
                    <div className=" _02e9ff75 _27fee0c9">
                      0800-ZAMEEN (92633)
                    </div>
                  </li>
                  <li className="footer-li d-flex my-2 ">
                    <div>
                      <i className="fa-solid fa-envelope px-2"></i>
                    </div>
                    <div className="">
                      {" "}
                      <Link
                        to="/contactus.html"
                        className=""
                        aria-label="Email us"
                      >
                        Email Us
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- 4th row --> */}
            <div className="col-12 col-md-3">
              <div className="">
                <ul className="list-unstyled ">
                  <li className="footer-li  ">
                    <h4 className="footer-li-head">Roshan Digital Account</h4>
                  </li>
                  <li className="footer-li  ">
                    <Link to="/partners/roshan-digital-account" className="">
                      <img
                        src="https://zameen-assets-prod-static.s3-eu-west-1.amazonaws.com/legacy/images/roshan_digital_acct_logo1_1.svg"
                        className="px-4 w-150 roshan-digital"
                        alt="roshan"
                      />
                    </Link>
                  </li>
                  <li className="footer-li ">
                    <h4 className=" footer-li-head pt-3">Get Connected</h4>
                  </li>
                  <li className="footer-li d-flex flex-wrap  ">
                    <div>
                      <Link
                        to="https://www.facebook.com/ZameenPK"
                        title="Follow us on Facebook"
                        aria-label="Follow us on facebook"
                      >
                        <div className=" footer-icon">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="https://www.instagram.com/zameenpk"
                        title="Follow us on Instagram"
                        aria-label="Follow us on instagram"
                      >
                        <div className="footer-icon">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="https://www.youtube.com/channel/UCd5zTrqwM1lSd1KyeEZcswA"
                        title="Follow us on YouTube"
                        aria-label="Follow us on youtube"
                      >
                        <div className="footer-icon">
                          <img
                            src="https://thumbs.dreamstime.com/b/youtube-round-icon-logo-white-background-editable-vector-illustration-youtube-icon-logo-141050377.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="https://twitter.com/ZameenProperty"
                        title="Follow us on Twitter"
                        aria-label="Follow us on twitter"
                      >
                        <div className="footer-icon">
                          <img
                            src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-94339974C6-seeklogo.com.png"
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          <h4 className="text-center footer-li">
        ©Copyright 2007 - 2022 @ChMushrafKhan All Rights Reserved
          </h4>
      </footer>
    </>
  );
}

export default Footer