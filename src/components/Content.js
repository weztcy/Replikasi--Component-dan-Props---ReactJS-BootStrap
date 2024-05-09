import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KepalaPelaksana from "./KepalaPelaksana";
import BeritaUtama from "./BeritaUtama";
import BeritaSekunder from "./BeritaSekunder";
import BeritaLainnya from "./BeritaLainnya";
import BeritaSamping from "./BeritaSamping";
import BeritaTerkini from "./BeritaTerkini";
import SearchBar from "./SearchBar";
import BtnLihatSemua from "./BtnLihatSemua";
import MediaSosial from "./MediaSosial";
import TweetSaran from "./TweetSaran";

function Content() {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-start">
        <Col md={2}>
          <KepalaPelaksana />
          <MediaSosial />
          <TweetSaran />
        </Col>
        <Col>
          <BeritaUtama />
          <h4 style={{ marginBottom: "0px" }} className="text-center">
            --- Berita Lainnya ---
          </h4>
          <br />
          <BeritaSekunder />
          <BeritaLainnya />
          <BtnLihatSemua />
        </Col>
        <Col md={3}>
          <SearchBar />
          <BeritaTerkini />
          <BeritaSamping />
        </Col>
      </Row>
    </Container>
  );
}

export default Content;