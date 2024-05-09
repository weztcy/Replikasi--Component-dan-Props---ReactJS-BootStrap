import Card from "react-bootstrap/Card";
import imagekepalapelaksana from "../assets/images/0808a62da3ebe5895b7be03e493ea504.jpeg";
function KepalaPelaksana() {
  return (
    <Card style={{ height: "400px", marginBottom: "30px" }}>
      <Card.Img variant="top" src={imagekepalapelaksana} width="10px" />
      <Card.Body class="text-center">
        <Card.Text style={{ marginTop: "10px" }}>
          Kepala Pelaksana <br />
          Badan Penanggulangan
          <br /> Bencana Daerah
        </Card.Text>
        <Card.Text>Drs UDY CAHYONO, M.Si</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default KepalaPelaksana;