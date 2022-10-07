import { Link } from "react-router-dom";
import pic_1 from "../../assets/img/pic-1.png";
import pic_2 from "../../assets/img/pic-2.png";
import pic_3 from "../../assets/img/pic-3.png";
import pic_4 from "../../assets/img/pic-4.png";
import Slider from "react-slick";
import '../../css/agents.css'
const Agents = () => {
const settings = {
  className: "autoplay",
  centerMode: true,
  infinite: true,
  autoplay: true,
  centerPadding: "-5px",
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 800,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
return (
  <>
    <section className="agents container" id="agents">
      <h1 className="heading text-center">
      
        Professional <span>agents</span>{" "}
      </h1>
      <div className="spacer60"></div>
      <Slider {...settings} className=" box-container align-items-center ">
        <div>
          <div className="box mx-auto">
            <Link to="#" className="fas fa-envelope"></Link>
            <Link to="#" className="fas fa-phone"></Link>
            <img src={pic_1} alt="a" className="text-center mx-auto" />
            <h3>john deo</h3>
            <span>agent</span>
            <div className="share">
              <Link to="#" className="fab fa-facebook-f"></Link>
              <Link to="#" className="fab fa-twitter"></Link>
              <Link to="#" className="fab fa-instagram"></Link>
              <Link to="#" className="fab fa-linkedin"></Link>
            </div>
          </div>
        </div>
        <div>
          <div className="box mx-auto">
            <Link to="#" className="fas fa-envelope"></Link>
            <Link to="#" className="fas fa-phone"></Link>
            <img src={pic_2} alt="b" className="mx-auto" />
            <h3>john deo</h3>
            <span>agent</span>
            <div className="share">
              <Link to="#" className="fab fa-facebook-f"></Link>
              <Link to="#" className="fab fa-twitter"></Link>
              <Link to="#" className="fab fa-instagram"></Link>
              <Link to="#" className="fab fa-linkedin"></Link>
            </div>
          </div>
        </div>
        <div>
          <div className="box mx-auto">
            <Link to="#" className="fas fa-envelope"></Link>
            <Link to="#" className="fas fa-phone"></Link>
            <img src={pic_3} alt="c" className="mx-auto" />
            <h3>john deo</h3>
            <span>agent</span>
            <div className="share">
              <Link to="#" className="fab fa-facebook-f"></Link>
              <Link to="#" className="fab fa-twitter"></Link>
              <Link to="#" className="fab fa-instagram"></Link>
              <Link to="#" className="fab fa-linkedin"></Link>
            </div>
          </div>
        </div>
        <div>
          <div className="box mx-auto">
            <Link to="#" className="fas fa-envelope"></Link>
            <Link to="#" className="fas fa-phone"></Link>
            <img src={pic_4} alt="d" className="mx-auto"/>
            <h3>john deo</h3>
            <span>agent</span>
            <div className="share">
              <Link to="#" className="fab fa-facebook-f"></Link>
              <Link to="#" className="fab fa-twitter"></Link>
              <Link to="#" className="fab fa-instagram"></Link>
              <Link to="#" className="fab fa-linkedin"></Link>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  </>
);
};
export default Agents;