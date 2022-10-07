import React, { useState } from "react";
import axios from "axios";
import ListiningForm from "../../listinings/ListiningFrorm";
// import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const ContainerMain = (props) => {
  // const [formData, setFormData] = useState({
  //   sale_type: "",
  //   home_type: "HOME",
  //   city: "Lahore",
  //   state:"Punjab",
  //   price: "50000",
  //   area_size: "3",
  //   area_type: "MARLA",
  //   bedrooms: "1",
  //   bathrooms: "1",
  //   keywords: "",
  // });

  // const {
  //   sale_type,
  //   home_type,
  //   city,
  //   state,
  //   price,
  //   area_size,
  //   area_type,
  //   bedrooms,
  //   bathrooms,
  //   keywords,
  // } = formData;

//   const [loading, setLoading] = useState(false);

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });
// console.log(formData,'check data');
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
// console.log(formData,'line 39  data check print');
//     setLoading(true);
//     axios.post(`${process.env.REACT_APP_API_URL}
//         http://127.0.0.1:8000/api/listings/search`,
//         {
//           sale_type,
//           home_type,
//           city,
//           state,
//           price,
//           area_size,
//           area_type,
//           bedrooms,
//           bathrooms,
//           keywords,
//         },
//         config
//       )
//       .then((res) => {
//         console.log(res.data);
//         setLoading(false);
//         props.setListings(res.data);
//         window.scrollTo(0, 0);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//         window.scrollTo(0, 0);
//       });
//   };

  return (
    <>
      <ListiningForm />
    </>
    // <>
    //   <div className="container-main-page"></div>
    //   <div className="container-main-page-content mt-4">
    //     <form onSubmit={(e) => onSubmit(e)}>
    //       <h3 className="text-center text-white ">Search Properties in Pakistan</h3>
    //       <div className="row  justify-content-center ">
    //         <ul className="donate-now">
    //           <li>
    //             <input
    //               type="radio"
    //               id="a25"
    //               name="sale_type"
    //               onChange={(e) => onChange(e)}
    //               value="For sale"
    //             />
    //             <label htmlFor="a25">Rent</label>
    //           </li>
    //           <li>
    //             <input
    //               type="radio"
    //               id="a75"
    //               //   checked="checked"

    //               name="sale_type"
    //               onChange={(e) => onChange(e)}
    //               value="For Rent"
    //             />
    //             <label htmlFor="a75">Buy</label>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="row">
    //         <div className="col-6 col-md-4 my-1">
    //           <label className="form-field-label" htmlFor="home_type">
    //             Home Type
    //           </label>
    //           <select
    //             name="home_type"
    //             id="home_type"
    //             className="custom-select form-control-lg"
    //             onChange={(e) => onChange(e)}
    //             value={home_type}
    //           >
    //             <option>Home</option>
    //             <option>Flat</option>
    //             <option>Form House</option>
    //           </select>
    //         </div>
    //         <div className="col-6 col-md-4 my-1">
    //           <label className="form-field-label" htmlFor="city">
    //             City
    //           </label>
    //           <select
    //             id="city"
    //             className="custom-select form-control-lg"
    //             onChange={(e) => onChange(e)}
    //             value={city}
    //             name="city"
    //           >
    //             <option>Lahore</option>
    //             <option>Karachi</option>
    //             <option>Islamabad</option>
    //           </select>
    //         </div>
    //         <div className="col-6 col-md-4 my-1">
    //           <label className="form-field-label" htmlFor="state">
    //             State
    //           </label>
    //           <select
    //             id="state"
    //             className="custom-select form-control-lg"
    //             onChange={(e) => onChange(e)}
    //             value={state}
    //             name="state"
    //           >
    //             <option>Punjab</option>
    //             <option>Sindh</option>
    //             <option>KPK</option>
    //             <option>Balochistan</option>
    //           </select>
    //         </div>
    //         <div className="col-6 col-md-4 my-1">
    //           <label className="form-field-label" htmlFor="price">
    //             Price
    //           </label>
    //           <select
    //             className="custom-select form-control-lg"
    //             onChange={(e) => onChange(e)}
    //             value={price}
    //             name="price"
    //             id="price"
    //           >
    //             <option>50000</option>
    //             <option>1000000</option>
    //             <option>2000000</option>
    //           </select>
    //         </div>
    //         <div className="col-6 col-md-4 my-1">
    //           <label className="form-field-label" htmlFor="area_type">
    //             Area Type
    //           </label>
    //           <select
    //             id="area_type"
    //             className="custom-select form-control-lg"
    //             onChange={(e) => onChange(e)}
    //             value={area_type}
    //             name="area_type"
    //           >
    //             <option>MARLA</option>
    //           </select>
    //         </div>

    //         <div className="col-6 col-md-4 my-1">
    //           <label className="form-field-label" htmlFor="area_size">
    //             Area Size
    //           </label>
    //           <select
    //             id="area_size"
    //             className="custom-select form-control-lg"
    //             onChange={(e) => onChange(e)}
    //             value={area_size}
    //             name="area_size"
    //           >
    //             <option>1 MARLA</option>
    //             <option>3 MARLA</option>
    //             <option>5 MARLA</option>
    //             <option>7 MARLA</option>
    //             <option>10 MARLA</option>
    //           </select>
    //         </div>
    //         <div className="col-6 col-md-4 my-1">
    //           <label className="form-field-label" htmlFor="bedrooms">
    //             Bedrooms
    //           </label>
    //           <select
    //             className="custom-select form-control-lg"
    //             onChange={(e) => onChange(e)}
    //             value={bedrooms}
    //             name="bedrooms"
    //           >
    //             <option>2</option>
    //             <option>3</option>
    //             <option>4</option>
    //           </select>
    //         </div>
    //         <div className="col-6 col-md-4 my-1">
    //           <label className="form-field-label" htmlFor="bathrooms">
    //             Bathrooms
    //           </label>
    //           <select
    //             className="custom-select form-control-lg"
    //             onChange={(e) => onChange(e)}
    //             value={bathrooms}
    //             name="bathrooms"
    //           >
    //             <option>1</option>
    //             <option>2</option>
    //             <option>3</option>
    //             <option>4</option>
    //           </select>
    //         </div>
    //         <div className="col-6 col-md-4 my-1">
    //           <div className="">
    //             <label className="form-field-label" htmlFor="keywords">
    //               Keywords
    //             </label>
    //             <br />
    //             <input
    //               className="form-control"
    //               name="keywords"
    //               type="text"
    //               onChange={(e) => onChange(e)}
    //               value={keywords}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="text-center m-1">
    //         <button className="text-center btn btn-find ">Save</button>
    //       </div>
    //     </form>
    //   </div>
    // </>
  );
};
ContainerMain.propTypes = {
  setListings: PropTypes.func.isRequired,
};
export default ContainerMain;
