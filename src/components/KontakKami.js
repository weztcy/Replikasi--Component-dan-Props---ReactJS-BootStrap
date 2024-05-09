import { Container, Row, Col } from "react-bootstrap";
import Alamat from "../assets/images/apple-arcade.png";
import Telpon from "../assets/images/mobile.png";
import Fax from "../assets/images/color-swatch.png";
import Email from "../assets/images/inbox.png";

function KontakKami(props) {
  return (
    <div>
      <Container>
        <Row className="justify-content-center align-items-start">
          <Col className="text-white" style={{ margin: "35px 0px 0px 62px" }}>
            <h3>Kontak Kami</h3>
            <h3 style={{ margin: "-20px 0px 27px 0px" }}>____</h3>
            <a
              href="#"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={Alamat} alt="Alamat" style={{ width: "9%" }} />
                <p style={{ margin: "0px 0px 0px 15px" }}>
                  Jl. Arungbinang No 13 Kebumen
                </p>
              </div>
            </a>
            <a
              href="#"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={Telpon} alt="Telpon" style={{ width: "9%" }} />
                <p style={{ margin: "0px 0px 0px 15px" }}>
                  0287-381240 | 08112646112
                </p>
              </div>
            </a>
            <a
              href="#"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={Fax} alt="Fax" style={{ width: "9%" }} />
                <p style={{ margin: "0px 0px 0px 15px" }}>0287-3870807</p>
              </div>
            </a>
            <a
              href="#"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={Email} alt="Email" style={{ width: "9%" }} />
                <p style={{ margin: "0px 0px 0px 15px" }}>
                  bpbdkebumenkab@gmail.com
                </p>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default KontakKami;