import { React } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const ShopCard = (props) => {
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    return (
        <>
            <section className="featured container " id="featured">
                <div className="property-box-container  my-1">
                    <div className=" my-1 my-md-0  py-1">
                        <div className="box">
                            <div className="image-container">
                                <img src={props.photo_main} alt="aa" />
                                <div className="info">
                                    <h3>3 days ago</h3>
                                    <h3>{props.sale_type}</h3>
                                </div>
                                <div className="icons">
                                    <Link to="#" className="fas fa-film">
                                        <h3>1</h3>
                                    </Link>
                                    <Link to="#" className="fas fa-camera">
                                        <h3>4</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className="content">
                                <div className="price">
                                    <h3>PKR{numberWithCommas(props.price)}</h3>
                                    <Link to="#" className="fas fa-heart"></Link>
                                    <Link to="#" className="fas fa-envelope"></Link>
                                    <Link to="#" className="fas fa-phone"></Link>
                                </div>
                                <div className="location">
                                    <h3>{props.title}</h3>
                                    <p>{props.address}, {props.city}, {props.state}</p>
                                </div>
                                <div className="details">
                                    <h3>

                                        <i className="fas fa-expand"></i>&nbsp; {props.area_size} Marla
                                    </h3>
                                    <h3>

                                        <i class="fas fa-store-alt"></i>&nbsp; {props.shop_type}
                                    </h3>
                                </div>
                                <div className="buttons">
                                    <Link to={`/listing_details/${props.slug}`} className="btn">
                                        request info
                                    </Link>
                                    <Link to={`/listing_details/${props.slug}`} className="btn">
                                        view details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
ShopCard.propTypes = {
    title: PropTypes.string.isRequired,
    photo_main: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.string.isRequired,
    sale_type: PropTypes.string.isRequired,
    home_type: PropTypes.string.isRequired,
    area_size: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
};

export default ShopCard