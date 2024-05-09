import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IdentitasWeb from "./IdentitasWeb";
import StatistikPengunjung from "./StatistikPengunjung";
import KontakKami from "./KontakKami";
import Copyright from "./Copyright";

function Footer() {
  return (
    <Container fluid>
      <Row
        className="justify-content-center align-items-start"
        style={{ backgroundColor: "#1C1F2E", height: "315px" }}
      >
        <Col>
          <IdentitasWeb />
        </Col>
        <Col>
          <KontakKami />
        </Col>
        <Col>
          <StatistikPengunjung
            hariini="175"
            kemarin="615"
            bulanini="5179"
            tahunini="55981"
            semuawaktu="386886"
          />
        </Col>
      </Row>
      <Copyright />
    </Container>
  );
}

export default Footer;