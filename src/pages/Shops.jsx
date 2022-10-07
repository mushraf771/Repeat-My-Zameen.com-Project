
import ShopSearchForm from '../containers/shop_search/ShopSearchForm';
import SearchHistory from '../containers/features/SearchHistory';
import PopularPropertRent from '../containers/features/PopularPropertyRent';
import PopularPropertyCity from '../containers/features/PopularPropertyCity';
import TitaniumAgency from '../containers/features/TitaniumAgency';
import Blogs from '../containers/features/Blogs';
import { React, useState } from 'react'
import { Helmet } from 'react-helmet'
import Pagination from '../containers/listinings/Pagination'
import Listinings from '../containers/listinings/Listinings'

const Shops = () => {
  const [Listings, setListings] = useState([]);
  const [CurrentPage, SetCurrentPage] = useState(1);
  const [ListingsPerPage, setListingsPerPage] = useState(6);
  const [Active, SetActive] = useState(1);
  // console.warn(Listings, '  +  ', CurrentPage);
  const IndexOfLastListing = CurrentPage * ListingsPerPage;
  const IndexOfFirstListing = IndexOfLastListing - ListingsPerPage;
  const CurrentListings = Listings.slice(IndexOfFirstListing, IndexOfLastListing)
  // console.warn(setListings,setListingsPerPage);
  console.log(CurrentListings, 'listins of current listiings');
  const VisitPage = (page) => {
    SetCurrentPage(page);
    SetActive(page);
  };
  const Pervious_Number = (page) => {
    if (CurrentPage !== 1) {
      SetCurrentPage(CurrentPage - 1);
      SetActive(CurrentPage - 1);
    }
  }
  const Next_Number = (page) => {
    if (CurrentPage !== Math.ceil(Listings.length / 6)) {
      SetCurrentPage(CurrentPage + 1);
      SetActive(CurrentPage + 1);
    }
  }
  return (
    <>
      <Helmet>
        <title>Zameen-Shops</title>
        <meta name='description'
          content='Zameen-Shops' />
      </Helmet>
      <ShopSearchForm setListings={setListings} />
      <div className="">
        <SearchHistory />
      </div>
      <div className="container  my-1 py-1">
        <Listinings listings={CurrentListings} />
      </div>
      <div className="container  my-1 py-1">
        <div className="row mx-auto text-center">
          {
            Listings.length !== 0 ? (
              < Pagination itemsPerPage={ListingsPerPage} count={Listings.length}
                visitPage={VisitPage}
                previous={Pervious_Number}
                next={Next_Number}
                active={Active}
                setActive={SetActive}
                setListingsPerPage={setListingsPerPage}
              />
            ) : null}
        </div>
      </div>
      <div className="">
        <PopularPropertRent/>
      </div>
      <div className="">
        <PopularPropertyCity />
      </div>
      <div className="">
        <TitaniumAgency />
      </div>
      <div className="">
        <Blogs/>
      </div>
    </>
  )
}

export default Shops;