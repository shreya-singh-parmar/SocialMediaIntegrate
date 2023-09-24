import React from 'react'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="img/social6.jfif" alt="" width="58" height="42" className="d-inline-block align-text-top" />
            <span className='p-2 text-center text-white'> Make Connnetion</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/">ACTIVE_USERS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active font-2 text-white" aria-current="page" href="/">FAQS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/">CONTACT</a>
              </li>
              <a
                class=" d-flex align-items-center hidden-arrow text-white"
                href="/"
              >
              <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="35"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                /></a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}