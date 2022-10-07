import { Link } from 'react-router-dom'
import '../../css/features.css'
const SearchHistory = () => {
  return (
    <div className="py-3"><div className="container-fluid">
    <div className="spacer"></div>
    <div className="container">
        <div className="heading text-center m-2"><i className="fa-solid fa-clock-rotate-left"></i> &nbsp; Your Last <span>Searches</span>
        </div>
        <div className="spacer"></div>
        <div className="row ">
            {/* <!-- 1st row --> */}
            <div className="col-12 col-md-4 cols-history-search">
                <Link to="" className="">
                    <div className="history-search-box">
                        <div className="">
                            <span className="search-title"> you searched it</span> <br/>
                            <span className="search-cat">all Houses</span>
                        </div>
                        <div className="search-arrow text-center"> <i className="fa-solid fa-angle-right"></i></div>
                    </div>
                </Link>
            </div>

            {/* <!-- 2nd row --> */}
            <div className="col-12 col-md-4 cols-history-search ">
                <Link to="" className="">
                    <div className="history-search-box">
                        <div className="">

                            <span className="search-title"> you searched it</span> <br/>
                            <span className="search-cat">all Houses</span>
                        </div>
                        <div className="search-arrow text-center"> <i className="fa-solid fa-angle-right"></i></div>
                    </div>
                </Link>
            </div>
            {/* <!-- 3rd row --> */}
            <div className="col-12 col-md-4  cols-history-search">
                <Link to="" className="">
                    <div className="history-search-box">
                        <div className="">

                            <span className="search-title"> you searched it</span> <br/>
                            <span className="search-cat">all Houses</span>
                        </div>
                        <div className="search-arrow text-center"> <i className="fa-solid fa-angle-right"></i></div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default SearchHistory