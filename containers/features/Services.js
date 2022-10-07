import { Link } from 'react-router-dom'

import s_1 from '../../assets/img/s-1.png'
import s_2 from "../../assets/img/s-2.png";
import s_3 from "../../assets/img/s-3.png";
const Services = () => {
  return (
    <>
    
    <div className="services container">
        <h1 className="heading text-center" > our <span>services</span> </h1>
<div className="spacer"></div>
        <div className="box-container">

            <section className="services" id="services">
                <div className="row">
                    <div className="col-12 col-md-4  my-md-0">
                        <div className="box-container">
                            <div className="box">
                                <img src={s_1} alt="aaa"/>
                                <h3>buying home</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio ipsa ab cum
                                    error
                                    quas fuga
                                    ad?
                                    Perspiciatis, autem officiis?</p>
                                <Link to="#" className="service-btn-more">learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 my-3 my-md-0">
                        <div className="box-container">
                            <div className="box">
                                <img src={s_2} alt="nnnn"/>
                                <h3>Selling home</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio ipsa ab cum
                                    error
                                    quas fuga
                                    ad?
                                    Perspiciatis, autem officiis?</p>
                                <Link to="#" className="service-btn-more">learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 my-3 my-md-0">
                        <div className="box-container">
                            <div className="box">
                                <img src={s_3} alt="ddd"/>
                                <h3>Rent home</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio ipsa ab cum
                                    error
                                    quas fuga
                                    ad?
                                    Perspiciatis, autem officiis?</p>
                                <Link to="#" className="service-btn-more">learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    </>
  );
}

export default Services