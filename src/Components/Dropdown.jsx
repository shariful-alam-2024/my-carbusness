import React from 'react'

function Dropdown() {
  return (
    <>
    <h1  className="text-center">Which vehicles you are looking for? </h1>
   <div className="d-flex justify-content-center align-items-center ">
   
    <div className="dropdown">
       <div className="text-center">
       <label className=''>type</label>
       <div className="">
       <span className='dropbtn'> article
           <i className="bi bi-caret-down m-4" ></i>
           </span>
           <div className="vr myDom"></div>
       </div>
       </div>
       
           
           <div className="dropdown-content">
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
           </div>
    </div>
    
    <div className="dropdown">
       <div className="text-center">
       <label>Make</label>
       <div className="">
       <span className='dropbtn'>Infiniti
           <i className="bi bi-caret-down m-4" ></i>
           </span>
           <div className="vr myDom"></div>
       </div>
       </div>
       
           
           <div className="dropdown-content">
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
           </div>
    </div>
    <div className="dropdown">
    <div className="">
       <span className='dropbtn'>Year
           <i className="bi bi-caret-down m-4" ></i>
           </span>
           <div className="vr myDom"></div>
       </div>
           <div className="dropdown-content">
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
           </div>
    </div>
    <div className="dropdown">
    <div className="">
       <span className='dropbtn'>Model
           <i className="bi bi-caret-down m-4" ></i>
           </span>
           <div className="vr myDom"></div>
       </div>
           <div className="dropdown-content">
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
           </div>
    </div>
    <div className="dropdown">
       <div className="">
       <span className='dropbtn'>price
           <i className="bi bi-caret-down m-4" ></i>
           </span>
           <div className="vr myDom"></div>
       </div>
           <div className="dropdown-content">
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
            <a href="http://">sign up</a>
           </div>
    </div>


    <button className='btn btn-primary fa-search '><span><i className="bi bi-search"></i>  search</span></button>


   </div>

    
      
    </>
  )
}

export default Dropdown
