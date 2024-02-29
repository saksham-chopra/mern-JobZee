import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <section className='page notfound'>
          <div className="content">
            <img src="https://media.istockphoto.com/vectors/error-page-not-found-vector-id962223846?k=6&m=962223846&s=612x612&w=0&h=FmE7jhtdf9FHMFR8m336RnNaCFFEGDZo-xqB-v3CN1M=" alt="notfound" />
            <Link to={'/'}>RETURN TO HOME PAGE</Link>
          </div>
        </section>
    </>
  )
}

export default NotFound