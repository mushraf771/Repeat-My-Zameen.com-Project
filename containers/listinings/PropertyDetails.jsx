import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router';
// import ContainerMain from '../components/content/ContainerMain'
// import GetApp from '../features/GetApp'
import Blogs from '../features/Blogs'
// import OurPartners from '../features/OurPartners'
// import HomeType from './detailtypes/HomeType';
// import ShopType from './detailtypes/ShopType';
import '../../css/property_details.css'
import { useReactToPrint } from 'react-to-print';
import { useSelector, useDispatch } from 'react-redux'
import { AddFavorite, RemoveFavorite } from '../../actions/index'
const ListingDetails = (props) => {
    const [listing, setlisting] = useState({});
    const [agent, setagent] = useState({});
    const [price, setprice] = useState(0);
    // let data = (listing.main_image)
    const addFav = useSelector((e) => e.AddFav)
    console.log(addFav, 'add fav');
    // console.warn(myState);
    // console.log(data);
    const dispatch = useDispatch();
    // console.log(data);
    // cost [image, setimage] = useState('https://media.zameen.com/thumbnails/150584619-800x600.webp')
    // const [image, setimage] = useState(data);
    // console.log(image,'img check', setimage);
    // console.log(listing.main_image);
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const params = useParams()
    // console.log(params.id, 'line 15  he bhi ji dekh lo');
    useEffect(() => {
        // const params = useParams()
        const slug = params.id;
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.get(`/properties/${slug}/`, config).then(
            res => {
                setlisting(res.data);
                // console.log(listing, 'line 26 he details page ki');
                setprice(numberWithCommas(res.data.price))
                // console.log(price, 'line 29 he details price page ki');
            }
        ).catch(err => {
            console.log(err);
        })
    })
    useEffect(() => {
        const id = listing.agent;
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };
        if (id) {
            axios.get(`/agents/${id}/`, config)
                .then(res => {
                    setagent(res.data);
                })
                .catch(err => {
                });
        }
    }, [listing.agent]);
    const displayInteriorImages = () => {
        let images = [];
        images.push(
            <div className="container ">
                <div key={1} className='row'>
                    {
                        listing.photo_1 ? (
                            <div className="col-6 col-md-3"><img src={listing.photo_1} className="property_images" alt="" /></div>
                        ) : null
                    }

                    {
                        listing.photo_2 ? (
                            <div className="col-6 col-md-3"><img src={listing.photo_2} className="property_images" alt="" /></div>
                        ) : null
                    }
                    {
                        listing.photo_3 ? (
                            <div className="col-6 col-md-3"><img src={listing.photo_3} className="property_images" alt="" /></div>
                        ) : null
                    }
                    {
                        listing.photo_4 ? (
                            <div className="col-6 col-md-3"><img src={listing.photo_4} className="property_images" alt="" /></div>
                        ) : null
                    }
                    {
                        listing.photo_5 ? (
                            <div className="col-6 col-md-3"><img src={listing.photo_5} className="property_images" alt="" /></div>
                        ) : null
                    }
                    {
                        listing.photo_6 ? (
                            <div className="col-6 col-md-3"><img src={listing.photo_6} className="property_images" alt="" /></div>
                        ) : null
                    }
                    {
                        listing.photo_7 ? (
                            <div className="col-6 col-md-3"><img src={listing.photo_7} className="property_images" alt="" /></div>
                        ) : null
                    }
                    {
                        listing.photo_8 ? (
                            <div className="col-6 col-md-3"><img src={listing.photo_8} className="property_images" alt="" /></div>
                        ) : null
                    }
                </div>

            </div>
        );
        return images;
    };
    
    const HomeType =
        (
            <div className="container ">
                <h2 className="heading text-left">Property <span>Details</span></h2>
                <div className='row my-3'>
                    <div className='col-12 col-md-4 '>
                        <ul className='propertydetail__list'>
                            <li className='propertydetail__list__item'><i className="fas fa-landmark"></i> &nbsp; Home Type: {listing.home_type}</li>
                            <li className='propertydetail__list__item'><i className="fas fa-hand-holding-usd"></i> &nbsp; Price: ${price}</li>
                            <li className='propertydetail__list__item'><i className="fas fa-bed"></i> &nbsp; Bedrooms: {listing.bedrooms}</li>
                            <li className='propertydetail__list__item'><i className="fas fa-bath"></i> &nbsp;Bathrooms: {listing.bathrooms}</li>
                            <li className='propertydetail__list__item'> <i className="fas fa-chart-area"></i>&nbsp; Size: {listing.area_size} {listing.area_type}</li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-4'>
                        <ul className='propertydetail__list'>
                            <li className='propertydetail__list__item'><i className="fas fa-handshake"></i>&nbsp; Sale Type: {listing.sale_type}</li>
                            <li className='propertydetail__list__item'> <i className="fas fa-map-marker-alt"></i> &nbsp; Address: {listing.address}</li>
                            <li className='propertydetail__list__item'> <i className="fas fa-city"></i>&nbsp; City: {listing.city}</li>
                            <li className='propertydetail__list__item'> <i className="fas fa-globe-asia"></i>&nbsp; State: {listing.state}</li>

                        </ul>
                    </div>
                    <div className="col-12 col-md-4  ">
                        <p className=' text-left  propertydetail__description'><i className="fas fa-poll-h"></i> &nbsp; Description : {listing.description}</p>
                    </div>
                </div>

            </div>
        )
    const ShopType =
        (
            <div className="container">
                <h2 className="heading text-left">Property <span>Details</span></h2>
                <div className='row my-3'>
                    <div className='col-12 col-md-4 '>
                        <ul className='propertydetail__list'>
                            <li className='propertydetail__list__item text-uppercase'><i className="fas fa-handshake"></i>&nbsp; Sale Type : {listing.sale_type}</li>
                            <li className='propertydetail__list__item'> <i className="fas fa-chart-area"></i>&nbsp; Size : {listing.area_size} {listing.area_type}</li>
                            <li className='propertydetail__list__item'> <i className="fas fa-chart-area"></i>&nbsp; Shop Type : {listing.shop_type} {listing.property_type}</li>
                            <li className='propertydetail__list__item'><i className="fas fa-hand-holding-usd"></i> &nbsp; Price: ${price}</li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-4'>
                        <ul className='propertydetail__list'>
                            <li className='propertydetail__list__item'> <i className="fas fa-map-marker-alt"></i> &nbsp; Address : {listing.address}</li>
                            <li className='propertydetail__list__item'> <i className="fas fa-city"></i>&nbsp; City : {listing.city}</li>
                            <li className='propertydetail__list__item'> <i className="fas fa-globe-asia"></i>&nbsp; State : {listing.state}</li>

                        </ul>
                    </div>
                    <div className="col-12 col-md-4 ">
                        <p className='propertydetail__description'><i className="fas fa-poll-h"></i> &nbsp; Description : {listing.description}</p>
                    </div>
                </div>
            </div>
        );
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <>
            <Helmet>
                <title> Zamee.com |</title>
                <meta name='description' content='listing details'></meta>
            </Helmet>

            <div className="container  property_detail-container " >
                <h2 className="headings   my-3">Top <span>{listing.property_type} </span></h2>
                <div className=" border row">
                    <div className="col-12 col-md-9">

                        <div className='property-detail_main-head my-2'>
                            <div className="property-detail_main-title ">
                                <h1 className='listingdetail__title'>{listing.title}</h1>
    
                                <h4 className='align-self-end'>{listing.city}, {listing.state}</h4>
                            </div>
                            <div className="property-detail_main-icon">
                                {addFav !== false ? <i className="fa fa-heart add_success" onClick={() => dispatch(RemoveFavorite())}></i> : <i className="fa fa-heart" onClick={() => dispatch(AddFavorite())}></i>}   
                                <i className="fa fa-share"></i>
                                <i className="fa fa-print" onClick={handlePrint}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" ref={componentRef}>
                    <div className="row  ">
                        <div className="col-12 col-md-9   property-detail_main ">
                            <div className=" img-div-9"><img className='property-detail_main_img' src={listing.main_image} alt='main img not found' />
                            </div></div>
                        <div className="col-12 col-md-3 ">
                            <div className="property_agent_container">
                                <div className='text-center mx-auto mt-4 mt-md-0'>
                                    <img className='property_agent_img' src={agent.photo} alt='' />
                                </div>
                                <div className="">
                                    <h5 className='listingdetail__agent'>Name: {agent.name}</h5>
                                    <p className='listingdetail__contact'><i className="fas fa-phone"></i> &nbsp;<a href={"tel:" + agent.phone}>Tel : {agent.phone}</a> </p>
                                    <p className='listingdetail__contact'> <i className="fas fa-envelope"></i>&nbsp;  <a href={"mailto:" + agent.email}>Email :{agent.email} </a></p>
                                    <p className='listingdetail__about '><i className="fas fa-poll-h"></i> &nbsp; About : {agent.description}</p>
                                </div>
                            </div>
                        </div>
                    </div><div className="py-3">
                    {listing.property_type === 'Shop' ? ShopType : HomeType}</div>
                    <div className="container pb-3">
                        <h2 className="heading text-left ">Property<span> Images</span></h2>
                        {displayInteriorImages()}
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <Blogs />
            </div>
        </>
    )
}
export default ListingDetails;