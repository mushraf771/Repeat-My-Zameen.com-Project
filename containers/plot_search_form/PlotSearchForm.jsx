import { React, useState } from 'react'
import axios from 'axios'
import { RotatingLines } from 'react-loader-spinner'
import PropTypes from 'prop-types'
const PlotSearchForm = (props) => {
    const [formData, setFormData] = useState({
    
        city: "Lahore",
        state: "Punjab",
        price: "50000+",
        area_size: "3",
        area_type: "MARLA",
        plot_type:"Commercial"
    })
    const { city, state, price, area_size, area_type, plot_type,
         } = formData;
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
        axios.post(`/listings/plotsearch`, {
            city, state, price, area_size, area_type, plot_type
            
        }, config).then(res => {
            setLoading(false);
            console.log(res.data, 'line 37 res.data checking  To Set ');
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
                  <h3 className="text-center text-white ">Search For Plots in Pakistan</h3>
                  <div className="row">
                      <div className="col-6 col-md-4 my-1">
                          <label className="form-field-label" htmlFor="plot_type">
                              Plots Type
                          </label>
                          <select
                              name="plot_type"
                              id="plot_type"
                              className="custom-select form-control"
                              onChange={(e) => onChange(e)}
                              value={plot_type}
                          >
                              <option>Commercial</option>
                              <option>Residential</option>
                              <option>Industrial</option>
                              <option>Agricultural</option>
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
                              <RotatingLines width="100" strokeColor="#FF5733"  />
                          </div> :
                          <button className="text-center mx-auto btn btn-find ">Save</button>
                      }
                  </div>
              </form>
          </div></div>
  )
}
PlotSearchForm.propTypes = {
    setListings: PropTypes.func.isRequired
};

export default PlotSearchForm