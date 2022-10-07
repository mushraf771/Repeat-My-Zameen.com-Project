import React from 'react'
const Blogs = () => {
  return (
    <>
      <section className="container blog ">
        <div className="">
          <h3 className="heading p-3 text-center">
            Recent from <span>the Blog</span>
          </h3>
        </div>
        {/* <!-- col-md- 2 column projects list --> */}
        <div className="row container mx-auto p-4  ">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch my-sm-2">
                <div className="card pb-3">
                  <img
                    className="card-img-top"
                    src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2022/04/Cover-1440x625-1.jpg"
                    alt="ard ima ap"
                  />
                  <div className="equal-height">
                    <div className="card-body">
                      <h4 className="blog-card-heading">
                        All You Need to Know About Karachi Circular Railway
                      </h4>
                      <p className="blog-card-text">
                        Latest Updates on KCRKarachi Circular Railway
                        TimingsKarachi Circular Railway RouteBrief History of
                        KCRKCR Progress Update (March,...
                      </p>
                    </div>
                  </div>
                  <a href="#!" className="text-center   ">
                    <div className="">
                      <i className="text-bold"> Read more</i>
                    </div>
                  </a>
                </div>

                {/* <!--CARD HERE--> */}
              </div>
              <div className="col-lg-4 d-flex align-items-stretch my-sm-2">
                
                <div className="card pb-3">
                  <img
                    className="card-img-top"
                    src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2019/04/kcrcover1.jpg"
                    alt="Car imge cp/"
                  />
                  <div className="equal-height">
                    <div className="card-body">
                      <h4 className="blog-card-heading">
                        All You Need to Know About Karachi Circular Railway
                      </h4>
                      <p className="blog-card-text">
                        Latest Updates on KCRKarachi Circular Railway
                        TimingsKarachi Circular Railway RouteBrief History of
                        KCRKCR Progress Update (March,...
                      </p>
                    </div>
                  </div>
                  <a href="#!" className="text-center  ">
                    <div className=" text-center">
                      <i className="text-bold"> Read more</i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-items-stretch my-sm-2">
                <div className="card pb-3">
                  <div className="equal-height">
                    <img
                      className="card-img-top"
                      src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2021/02/Blog-Cover-02-02-2121-img.jpg"
                      alt="Cad ie cp"
                    />
                    <div className="card-body">
                      <h4 className="blog-card-heading">
                        What Do The Government Development Schemes In Punjab?
                      </h4>
                      <p className="blog-card-text">
                        PM’s Multi-Billion Rupee South Punjab Development
                        Package The multi-billion rupee South Punjab
                        developme...The multi-billion rupee
                      </p>
                    </div>
                  </div>
                  <a href="#!" className="text-center">
                    <div className=" text-center">
                      <i className="text-bold"> Read more</i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end section blog  --> */}
        </div>
      </section>
    </>
  );
}

export default Blogs