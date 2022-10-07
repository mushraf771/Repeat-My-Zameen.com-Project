import React from 'react'
// import HomeSearchForm from '../containers/homes_component/HomeSearchForm'
// css
import '../css/homes.css'
import SearchHistory from '../containers/features/SearchHistory';
// import TitaniumAgency from '../containers/features/TitaniumAgency';
import PopularLocationHomes from '../containers/features/PopularLocationHomes'
import PopularPropertyCity from '../containers/features/PopularPropertyCity';
import Agents from '../containers/features/Agents';
// import Services from '../containers/features/Services';
import Blogs from '../containers/features/Blogs';
// import HomeSearchForm from '../waste/HomeSearchForm';
import ListingHome from '../containers/listinings/ListingHome';
const Homes = () => {
  return (
    <>
      <ListingHome/>
      <div className="">
      <SearchHistory/>
      </div>
      <div className="py-2">
    <PopularLocationHomes/>
      </div>
      <div className="py-2">
  <PopularPropertyCity/>
      </div>
      <div className="pb-4">
        <Blogs />
      </div>
      {/* <div className="pb-4">
        <TitaniumAgency />
      </div> */}
      <div className="py-2">
        <Agents />
      </div>
      {/* <div className="py-2">
  <Services/>
      </div> */}

    </>
  )
}

export default Homes