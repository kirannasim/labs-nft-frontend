import React from 'react'
import bannerImgage from '../../assets/images/banner.png'
import '../../assets/scss/home/banner.scss'

const Topbar = () => {
  return (
    <div className="banner--container">
      <div className="row">
        <div className="banner--left col-xxl-6 col-12 d-flex flex-column align-items-xxl-start align-items-center">
          <h3>Blockchain Games</h3>
          <h2>Enginnered</h2>
          <p className="BB_34">To Be Social, Exciting & Time Efficient</p>
          <p className="Bb_22">
            The WorkGenius Platform holds over 350,000 registered freelancers
            (“Geniuses”) providing professional services across.
          </p>
          <button type="button" className="btn btn-primary btn-learn">
            Learn More
          </button>
        </div>
        <div className="banner--right col-xxl-6 col-12">
          <img src={bannerImgage} alt="Banner Image" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
