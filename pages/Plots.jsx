// import PlotSearchForm from '../containers/plot_search_form/PlotSearchForm'
import SearchHistory from '../containers/features/SearchHistory';
import PopularLocationPlots from '../containers/features/PopularLocationPlots';
import PopularPropertyCity from '../containers/features/PopularPropertyCity';
import Agents from '../containers/features/Agents';
import PlotSearchForm from '../containers/listinings/PlotSearchForm';
import { React, useState } from 'react'
import { Helmet } from 'react-helmet'
import Pagination from '../containers/listinings/Pagination'
import Listinings from '../containers/listinings/Listinings'

const Plots = () => {
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
        <title>Zameen-Plots</title>
        <meta name='description'
          content='Zameen-Plots' />
      </Helmet>
      <PlotSearchForm  setListings={setListings}/>
      <div className="">
        <SearchHistory/>
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
        <PopularLocationPlots/>
      </div>
      <div className="">
        <PopularPropertyCity/>
      </div>
      <div className="">
        <Agents/>
      </div>
    </>
  )
}

export default Plots