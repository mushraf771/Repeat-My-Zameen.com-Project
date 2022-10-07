import '../../css/features.css'
const PopularPropertyCity = () => {
  return (
    <>
      <section className="container city-location">
        {/* <div className="spacer"></div>
        <div className="mb-2">
          <h3 className="heading p-2 text-center">Popular <span>Locations</span></h3>
        </div> */}
        {/* <div className="spacer60"></div> */}
        <div className="heading">
          <h4 className="heading-city  text-left">Popular Cities to Buy Properties</h4>
        </div>
        <hr />
        <div className="row links-row">
          <div className="col-12 col-md-4 cold">
            <div className="link-heading">Houses</div>
            <ul className="list-unstyled">
              <li className=""><a href="/Houses_Property/Lahore-1-1.html"
                title="Houses for sale in Lahore">Houses for sale in Lahore<span
                  className="">(31,317)</span></a></li>
              <li className=""><a href="/Houses_Property/Karachi-2-1.html"
                title="Houses for sale in Karachi">Houses for sale in Karachi<span
                  className="">(19,069)</span></a></li>
              <li className=""><a href="/Houses_Property/Islamabad-3-1.html"
                title="Houses for sale in Islamabad">Houses for sale in Islamabad<span
                  className="">(11,629)</span></a></li>
              <li className=""><a href="/Houses_Property/Rawalpindi-41-1.html"
                title="Houses for sale in Rawalpindi">Houses for sale in Rawalpindi<span
                  className="">(9,861)</span></a></li>
              <li className=""><a href="/Houses_Property/Peshawar-17-1.html"
                title="Houses for sale in Peshawar">Houses for sale in Peshawar<span
                  className="">(2,780)</span></a></li>
              <li className=""><a href="/Houses_Property/Multan-15-1.html"
                title="Houses for sale in Multan">Houses for sale in Multan<span
                  className="">(2,868)</span></a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 cold">
            <div className="spacer "></div>
            <ul className="list-unstyled mgb">
              <li className=""><a href="/Houses_Property/Sargodha-778-1.html"
                title="Houses for sale in Sargodha">Houses for sale in Sargodha<span
                  className="">(487)</span></a></li>
              <li className=""><a href="/Houses_Property/Faisalabad-16-1.html"
                title="Houses for sale in Faisalabad">Houses for sale in Faisalabad<span
                  className="">(2,629)</span></a></li>
              <li className=""><a href="/Houses_Property/Sahiwal-782-1.html"
                title="Houses for sale in Sahiwal">Houses for sale in Sahiwal<span
                  className="">(460)</span></a></li>
              <li className=""><a href="/Houses_Property/Sialkot-480-1.html"
                title="Houses for sale in Sialkot">Houses for sale in Sialkot<span
                  className="">(822)</span></a></li>
              <li className=""><a href="/Houses_Property/Quetta-18-1.html"
                title="Houses for sale in Quetta">Houses for sale in Quetta<span
                  className="">(233)</span></a></li>
              <li className=""><a href="/Houses_Property/Abbottabad-385-1.html"
                title="Houses for sale in Abbottabad">Houses for sale in Abbottabad<span
                  className="">(488)</span></a></li>

            </ul>
          </div>
          <div className="col-12 col-md-4 cold">
            <div className="link-heading">Flats And Appartments</div>
            <ul className="list-unstyled">
              <li className=""><a href="/Houses_Property/Gujranwala-327-1.html"
                title="Houses for sale in Gujranwala">Houses for sale in Gujranwala<span
                  className="">(1,516)</span></a></li>
              <li className=""><a href="/Houses_Property/Murree-36-1.html"
                title="Houses for sale in Murree">Houses for sale in Murree<span
                  className="">(85)</span></a></li>
              <li className=""><a href="/Houses_Property/Bahawalpur-23-1.html"
                title="Houses for sale in Bahawalpur">Houses for sale in Bahawalpur<span
                  className="">(907)</span></a></li>
              <li className=""><span className="_9e83dab2"><a
                href="/all-cities/pakistan-1-9.html">View all Cities</a></span></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default PopularPropertyCity;