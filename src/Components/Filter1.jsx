const Type1 =()=>{
      <div className="down">
            <div>
                  <span className="text-start font-medium">Type</span>
                  <button>Article
                  <i className="bi bi-caret-down m-4" ></i>
                  </button>
                  <div className="vr"></div>
            </div>
      </div>
}



const Make =()=>{
      <div className="down">
            <div>
                  <span className="text-start font-medium">Make</span>
                  <button>Infiniti
                  <i className="bi bi-caret-down m-4" ></i>
                  </button>
                  <div className="vr"></div>
            </div>
      </div>
}




const Year =()=>{
      <div className="down">
            <div>
                 
                  <button>Year
                  <i className="bi bi-caret-down m-4" ></i>
                  </button>
                  <div className="vr"></div>
            </div>
      </div>
}


const Model =()=>{
      <div className="down">
            <div>
                 
                  <button>Model
                  <i className="bi bi-caret-down m-4" ></i>
                  </button>
                  <div className="vr"></div>
            </div>
      </div>
}


const Price =()=>{
      <div className="down">
            <div>
                 
                  <button>price
                  <i className="bi bi-caret-down m-4" ></i>
                  </button>
                  <div className="vr"></div>
            </div>
      </div>
}


const FilterSearch =()=>{
      return(
            <>
            <div className="">
                   <Type1></Type1>
                   <Make></Make>
                   <Model></Model>
                   <Year></Year>
                   <Price></Price>
    
            </div>
            
            </>
      )
}

export default FilterSearch






