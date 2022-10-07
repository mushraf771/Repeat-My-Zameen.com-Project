import { React, useState } from 'react'
import axios from 'axios'
import { RotatingLines } from 'react-loader-spinner'
import PropTypes from 'prop-types'
const HomeSearchForm = (props) => {
    const [formData, setFormData] = useState({
        sale_type: "",
        home_type: "HOME",
        city: "Lahore",
        state: "Punjab",
        price: "50000+",
        area_size: "3",
        area_type: "MARLA",
        bedrooms: "1+",
        bathrooms: "1+",
        keywords: "",
    })
    const { sale_type, home_type, city, state, price, area_size, area_type,
        bedrooms,
        bathrooms,
        keywords, } = formData;
    // console.warn(formData);
    const [Loading, setLoading] = useState(false);
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData, 'check data 26 on change');
    const onSubmit = e => {
        e.preventDefault()
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        setLoading(true);
        axios.post(`/listings/search`, {
            sale_type, home_type, city, state, price, area_size, area_type,
            bedrooms,
            bathrooms,
            keywords
        }, config).then(res => {
            setLoading(false);
            // console.log(res.data, 'line 37 res.data checking  To Set ');
            props.setListings(res.data);
            window.scrollTo(0, 0);
        }).catch(err => {
            setLoading(false);
            window.scrollTo(0, 0);
        })
    }
    return (
        <div><div className="container-main-page"></div>
            <div className="container-main-page-content">
                <form onSubmit={(e) => onSubmit(e)}>
                    <h3 className="text-center text-white ">Search Properties in Pakistan</h3>
                    <div className="row  justify-content-center radio-donate-now ">
                        <ul className="donate-now">
                            <li>
                                <input
                                    type="radio"
                                    id="a25"
                                    name="sale_type"
                                    onChange={(e) => onChange(e)}
                                    value="For sale"
                                />
                                <label htmlFor="a25">Rent</label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="a75"
                                    name="sale_type"
                                    onChange={(e) => onChange(e)}
                                    value="For Rent"
                                    defaultChecked
                                />
                                <label htmlFor="a75">Buy</label>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-4 my-1">
                            <label className="form-field-label" htmlFor="home_type">
                                Home Type
                            </label>
                            <select
                                name="home_type"
                                id="home_type"
                                className="custom-select form-control"
                                onChange={(e) => onChange(e)}
                                value={home_type}
                            >
                                <option>Home</option>
                                <option>Flat</option>
                                <option>Form House</option>
                            </select>
                        </div>
                        <div className="col-6 col-md-4 my-1">
                            <label className="form-field-label" htmlFor="city">
                                City
                            </label>
                            <select
                                id="city"
                                className="custom-select form-control"
                                onChange={(e) => onChange(e)}
                                value={city}
                                name="city"
                            >
                                <option>Lahore</option>
                                <option>Islamabad</option>
                                <option>Karachi</option>
                                <option>Multan</option>
                            </select>
                        </div>
                        <div className="col-6 col-md-4 my-1">
                            <label className="form-field-label" htmlFor="state">
                                State
                            </label>
                            <select
                                id="state"
                                className="custom-select form-control"
                                onChange={(e) => onChange(e)}
                                value={state}
                                name="state"
                            >
                                <option>Punjab</option>
                                <option>Sindh</option>
                                <option>KPK</option>
                                <option>Balochistan</option>
                            </select>
                        </div>
                        <div className="col-6 col-md-4 my-1">
                            <label className="form-field-label" htmlFor="price">
                                Price
                            </label>
                            <input
                                className=" form-control"
                                onChange={(e) => onChange(e)}
                                value={price}
                                name="price"
                                id="price"
                                type="number"
                            />
                        </div>
                        <div className="col-6 col-md-4 my-1">
                            <label className="form-field-label" htmlFor="area_type">
                                Area Type
                            </label>
                            <select
                                id="area_type"
                                className="custom-select form-control"
                                onChange={(e) => onChange(e)}
                                value={area_type}
                                name="area_type"
                            >
                                <option>Marla</option>
                                <option>Kanal</option>
                                <option>SQFT</option>
                            </select>
                        </div>

                        <div className="col-6 col-md-4 my-1">
                            <label className="form-field-label" htmlFor="area_size">
                                Area Size
                            </label>
                            <input
                                id="area_size"
                                className=" form-control"
                                onChange={(e) => onChange(e)}
                                value={area_size}
                                name="area_size"
                                type='number'
                            />
                        </div>
                        <div className="col-6 col-md-4 my-1">
                            <label className="form-field-label" htmlFor="bedrooms">
                                Bedrooms
                            </label>
                            <select
                                className="custom-select form-control"
                                onChange={(e) => onChange(e)}
                                value={bedrooms}
                                name="bedrooms"
                            >
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                                <option>6+</option>
                            </select>
                        </div>
                        <div className="col-6 col-md-4 my-1">
                            <label className="form-field-label" htmlFor="bathrooms">
                                Bathrooms
                            </label>
                            <select
                                className="custom-select form-control"
                                onChange={(e) => onChange(e)}
                                value={bathrooms}
                                name="bathrooms"
                            >
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                                <option>6+</option>
                            </select>
                        </div>
                        <div className="col-6 col-md-4 my-1">

                            <div className="">
                                <label className="form-field-label" htmlFor="keywords">
                                    Search By Keywords
                                </label>
                                <br />
                                <input
                                    className="form-control"
                                    name="keywords"
                                    type="text"
                                    onChange={(e) => onChange(e)}
                                    value={keywords}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-right mx-auto my-2">
                        {Loading ?
                            <div className='listingform__loader text-center mx-auto'>
                                <RotatingLines width="100" strokeColor="#FF5733" />
                            </div> :
                            <button className="text-center mx-auto btn btn-find ">Save</button>
                        }
                    </div>
                    {/* <div className="text-center m-1">
                        
                    </div> */}
                </form>
            </div></div>
    )
}
HomeSearchForm.propTypes = {
    setListings: PropTypes.func.isRequired
};

export default HomeSearchForm