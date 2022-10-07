import React from 'react'
// import HomeSearchForm from '../containers/homes_component/HomeSearchForms'
// css
import '../css/homes.css'
// import SearchHistory from '../containers/features/SearchHistory';
import TitaniumAgency from '../containers/features/TitaniumAgency';
import  CityList from '../containers/features/CityList'
import Agents from '../containers/features/Agents';
import Services from '../containers/features/Services';
import Blogs from '../containers/features/Blogs';
import ListingHome from '../containers/listinings/ListingHome';
// import ListiningForm from '../containers/listinings/ListiningForm';
const Home = () => {
  return (
    <>
      <div className="mx-auto">
      <ListingHome/></div>
      <div className="pb-4">
        <TitaniumAgency />
      </div>
      <div className="py-2">
        <Services />
      </div>
      <div className="py-2">
        <Agents />
      </div>
      <div className="py-2">
        <CityList />
      </div>
      <div className="pb-4">
        <Blogs />
      </div>
    </>
  )
}

export default Home