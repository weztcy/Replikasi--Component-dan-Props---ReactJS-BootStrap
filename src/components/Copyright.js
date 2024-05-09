import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Copyright() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          © 2024. Yohanes Dimas Pratama - A11.2021.13254
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="https://dinus.ac.id/en/">Universitas Dian Nuswantoro</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Copyright;