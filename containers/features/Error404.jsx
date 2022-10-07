import React from 'react'
import { Link } from 'react-router-dom'
import gif404 from '../../assets/img/giphy.gif'
const Error404 = () => {
  return (
      <>
          <div className="error_page_not_found container">
              <img alt='error 404' src={gif404}></img><h1 className="error-text text-center"> Error 404 Page Not Found ! <br /><Link to='/' className=" mt-3 btn btn-success"> Back to Home</Link></h1>
          </div>
      </>
  )
}

export default Error404