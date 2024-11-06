import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='navbar navbar-expand-lg '>
      <div className='container '>
           <a href="http://"> <img src="Img/Logo.jpg" alt="" className="" /></a>
            <button className='navbar navbar-toggler' data-bs-toggle='collapse' data-bs-target='#NavbarToggler'>
                  <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse" id='NavbarToggler'>
              <ul className='navbar-nav ms-auto gap-3   '>
                  <li className="nav-item ">
                        <a href="http://" className='nav-link'>Used Cars</a>
                  </li>
                  <li className="nav-item">
                        <a href="http://"  className='nav-link' >Auctions</a>
                  </li>
                  <li className="nav-item">
                        <a href="http://"   className='nav-link'>New Cars</a>
                  </li>
                  <li className="nav-item">
                        <a href="http://"   className='nav-link'>Sell Cars</a>
                  </li>
                  <li className="nav-item">
                        <a href="http://"   className='nav-link'>Local Dealers</a>
                  </li>
                  <li className="nav-list">
                        <a href="http://"   className='nav-link'>Support</a>
                  </li>
                  <li className="nav-list">
                        <a href="http://"   className='nav-link NavbarButton'>
                        <i className="bi bi-person-fill person-fill"></i>
                        
                         <span>Sign up</span></a>
                  </li>
              </ul>
            </div>
      </div>

    </nav>
      
    </>
  )
}

export default Navbar
