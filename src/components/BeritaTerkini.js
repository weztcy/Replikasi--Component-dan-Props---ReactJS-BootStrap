import { Card } from "react-bootstrap";
import Image1 from "../assets/images/News-rafiki.png";
import React from "react";

function BeritaTerkini() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Card className="ps-4 w-100">
        <p className="fs-3" style={{ margin: "5px 0px -10px 7px" }}>
          Kebumen Terkini ________
        </p>
        <div className="d-flex align-items-center">
          <Card.Img
            variant="top"
            src={Image1}
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
          <div>
            <Card.Body>
              <Card.Title className="fs-6">
                Baca Berita Seputar Kabupaten Kebumen Disini
              </Card.Title>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default BeritaTerkini;