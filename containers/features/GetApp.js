import { Link } from "react-router-dom"
import '../../css/getapp.css'
const GetApp = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="get-app-container">
          <div className="get-container-app-main">
            <div className="lazyload-wrapper ">
              <div className="main-div">
                <div className="main-text">
                  <div className="get-the-zameen-app">Get the Zameen App</div>
                  <div className="get-the-zameen-app-text">
                    Buy and Rent Property faster and better using our app.
                  </div>
                </div>
                <div className="get-app-icon">
                  <div className="div-icon">
                    <Link
                      to="https://itunes.apple.com/us/app/zameen/id903880271?mt=8"
                      title="Open iTunes to Download and Install this App"
                      aria-label="Open ITunes to Download and Install this App"
                    >
                      <div className="div-icon-a"></div>
                    </Link>
                    <Link
                      to="https://play.google.com/store/apps/details?id=com.zameen.zameenapp"
                      title="Open Google Play to Download and Install this App"
                      aria-label="Open Google Play to Download and Install this App"
                    >
                      <div className="div-icon-a-a"></div>
                    </Link>
                  </div>
                  <div className="qr-main">
                    <div className="qr-div">
                      <div className="qr-get-text">
                        Scan the QR code to get the app
                      </div>
                      <div className="qr-icon-arrow"></div>
                    </div>
                    <div className="qr-icon-qr"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </section>
    </>
  );
}

export default GetApp