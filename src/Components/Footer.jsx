 const Footer = () => {
      return (
        <footer className="container footer-container d-flex gap-1">
          <p>
            <span className="fw-bold">Privacy Policy</span>
            <span className="fw-bold ps-4">Term of Use</span>
            <span className="ps-4 opacity-80">© 2021 All rights reserved</span>
          </p>
          <div className="d-flex gap-3 align-items-center">
            <p className="d-flex gap-1 align-items-center">
              <img src="/icon.png" style={{ width: "10px", height:"12px",}} alt="" />
              <span>English</span>
            </p>
            <p className="d-flex gap-1 align-items-center">...
              
              <span>USD</span>
            </p>
          </div>
        </footer>
      );
    };

    export default Footer