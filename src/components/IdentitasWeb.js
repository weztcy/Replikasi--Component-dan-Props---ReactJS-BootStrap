import { Container, Row, Col } from "react-bootstrap";
import LogoKebumen from "../assets/images/bpbd_kebumenkab_go_id_080421-link-e5ff52022553bb33e47f15e243aabc4e.png";

function IdentitasWeb() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center text-white" style={{ marginTop: "45px" }}>
            <img
              src={LogoKebumen}
              style={{ width: "20%", marginBottom: "15px" }}
            />
            <p style={{ marginBottom: "0px" }}>WEBSITE RESMI</p>
            <p style={{ marginBottom: "0px" }}>
              Badan Penanggulangan Bencana Daerah
            </p>
            <p>KABUPATEN KEBUMEN</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IdentitasWeb;