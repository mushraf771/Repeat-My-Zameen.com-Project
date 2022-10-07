
import brand_1 from "../../assets/img/brands/brand-1.png";
import brand_2 from "../../assets/img/brands/brand-2.png";
import brand_3 from "../../assets/img/brands/brand-3.png";
import brand_4 from "../../assets/img/brands/brand-4.png";
import Slider from "react-slick";
const TitaniumAgency = () => {
  const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
centerPadding: "10px",
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
    autoplaySpeed: 4500,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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
      {" "}
      <div className="container section_a text-center mx-auto">
        <div className="spacer"></div>
        <div className="heading">
          <h3 className="heading p-3 text-center">
            <span>Titanium </span> Agencies
          </h3>
        </div>

        <Slider {...settings} className="mx-auto">
          <div className="mx-auto">
            <div className="col-12 mx-auto item project-card text-center">
              <div className="mx-auto text-center ">
                <img className=" mx-auto" src={brand_2} alt="Card p" />
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className=" item col-12 project-card">
              <div className="mx-auto text-center">
                <img className=" mx-auto" src={brand_1} alt="Cd imag ap" />
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="col-12 item project-card">
              <div className="mx-auto text-center">
                <img className="mx-auto " src={brand_3} alt="Cars img" />
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="col-12  item project-card">
              <div className="mx-auto text-center">
                <img className="mx-auto " src={brand_4} alt="Card cap" />
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className=" item col-12 project-card">
              <div className="mx-auto text-center">
                <img className="mx-auto " src={brand_1} alt="Cd imag ap" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default TitaniumAgency
