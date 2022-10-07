import Card from './Card'
import React from 'react';
// import PropTypes from 'prop-types'
const Listinings = ({ listings }) => {
    const getListinings = () => {
        let ListingOnPage = [];
        let result = [];
        // console.log(result, 'line 7 listings check data listining comming or not');
        listings.map((listing, i) => {
            // console.warn(listing.main_image);
            return ListingOnPage.push(
                <Card
                    key={i}
                    title={listing.title}
                    photo_main={listing.main_image}
                    address={listing.address}
                    city={listing.city}
                    state={listing.state}
                    price={listing.price}
                    sale_type={listing.sale_type}
                    home_type={listing.home_type}
                    bedrooms={listing.bedrooms}
                    bathrooms={listing.bathrooms}
                    area_size={listing.area_size}
                    slug={listing.slug}
                />
            );
        });
        for (let i = 0; i < listings.length; i += 3) {
            result.push(
                <div className="row bg-light">
                    <div className="col-12 col-sm-6 col-md-4  ">
                        {ListingOnPage[i]}
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 ">
                        {ListingOnPage[i + 1] ? ListingOnPage[i + 1] : null}
                    </div>
                    <div className="col-12 col-sm-6  col-md-4 ">
                        {ListingOnPage[i + 2] ? ListingOnPage[i + 2] : null}
                    </div>
                </div>
            );
        }return result;
    };
    return (
        <>
            <div className=""> {getListinings()} </div>
        </>
    )
};
export default Listinings;