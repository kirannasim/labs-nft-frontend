import React from 'react'
import '../../assets/scss/home/node.scss'
import computerImage from '../../assets/images/computer.png'

const Node = () => {
  return (
    <div className="node--container">
      <div className="row node--container__wrapper">
        <div className="col-12 col-xxl-7 content--container">
          <h3>Look Labs</h3>
          <h2>Node License</h2>
          <p className="bb_18_light">
            The Gala Network is supported by users, just like you, who operate
            Gala Nodes from their home computers. By buying a license to operate
            a Gala Node, you open up opportunities to receive rewards for your
            contribution to the network.
          </p>
          <button type="button" className="btn btn-primary">
            <span className="bb_18">buy now</span>
          </button>
        </div>

        <div className="col-xxl-5 image--container d-none d-xl-block">
          <img src={computerImage} />
        </div>
      </div>

      <p>
        <a
          className="btn btn-primary"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Link with href
        </a>
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button with data-target
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </div>
  )
}

export default Node
