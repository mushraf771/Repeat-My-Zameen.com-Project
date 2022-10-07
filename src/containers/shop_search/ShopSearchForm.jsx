import { React, useState } from 'react'
import axios from 'axios'
import { RotatingLines } from 'react-loader-spinner'
import PropTypes from 'prop-types'
const ShopSearchForm = (props) => {
    const [formData, setFormData] = useState({
        sale_type: "",
        city: "Lahore",
        state: "Punjab",
        price: "50000+",
        area_size: "3",
        area_type: "MARLA",
        shop_type:"General Store"
    })
    const { sale_type, city, state, price, area_size, area_type,shop_type,
         } = formData;
    // console.warn(formData);
    const [Loading, setLoading] = useState(false);
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData, 'check data 26 on change');
    const onSubmit = e => {
        e.preventDefault()
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        setLoading(true);
        axios.post(`/properties/shopsearch/`, {
            sale_type, city, state, price, area_size, area_type,
        shop_type,
        }, config).then(res => {
            console.log(res.data, ' shop search form line 37 res.data checking  To Set ');
            setLoading(false);
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
                  <h3 className="text-center text-white ">Search For Shops in Pakistan</h3>
                  <div className="row  justify-content-center ">
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
                          <label className="form-field-label" htmlFor="shop_type">
                              Shop Type
                          </label>
                          <select
                              name="shop_type"
                              id="shop_type"
                              className="custom-select form-control"
                              onChange={(e) => onChange(e)}
                              value={shop_type}
                          >
                              <option>General Store</option>
                              <option>Medical Store</option>
                              <option>Cosmetics Shop</option>
                              <option>General Store</option>
                              <option>Mobile Shop</option>
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
                  </div>
                  <div className="text-right mx-auto my-2">
                      {Loading ?
                          <div className='listingform__loader text-center mx-auto'>
                              <RotatingLines width="100" strokeColor="#FF5733" />
                          </div> :
                          <button className="text-center mx-auto btn btn-find ">Save</button>
                      }
                  </div>
              </form>
          </div></div>
  )
}
ShopSearchForm.propTypes = {
    setShopListings: PropTypes.func.isRequired
};

export default ShopSearchForm