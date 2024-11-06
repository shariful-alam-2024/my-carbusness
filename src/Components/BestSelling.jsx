import { Col, Row } from "react-bootstrap";


const bestSellingItems = [
  {
    img: "/logo5.png",
    name: "Subaru",
    price: "$40k",
  },
  {
    img: "/logo1.png",
    name: "Volkswagen",
    price: "$15k",
  },
  {
    img: "/Bitmap.png",
    name: "Toyota",
    price: "$27k",
  },
  {
    img: "/logo2.png",
    name: "Mercedes-Benz",
    price: "$60k",
  },
  {
    img: "/Bit.png",
    name: "Hyundai",
    price: "$30k",
  },
  {
    img: "/logo4.png",
    name: "Infiniti",
    price: "$54k",
  },
];

 const BestSelling = () => {
  return (
    <div className="container" style={{ paddingTop: "86px" }}>
      

      <Row
        style={{ paddingTop: "50px" }}
        className="d-flex justify-content-center"
      >
        {bestSellingItems.map(({ img, name, price }, i) => (
          <Col md={4} key={i}>
            <div className="vw-ad">
              <img
                src={img}
                alt="Volkswagen Logo"
                className="vw-logo w-[100px]"
              />
              <div>
                <div className="vw-text">{name}</div>
                <div className="vw-price">from {price}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default BestSelling