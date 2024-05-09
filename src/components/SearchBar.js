import { Card, Form, Row, Col } from "react-bootstrap";
import React from "react";

function SearchBar() {
  return (
    <div style={{ marginBottom: "18px" }}>
      <Card className="ps-4 w-100">
        <p className="fs-3" style={{ margin: "5px 0px -10px 7px" }}>
          Cari Berita _______________
        </p>
        <div
          className="d-flex align-items-center"
          style={{ margin: "20px 0px 15px 8px" }}
        >
          <Form inline>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Ketik dan enter..."
                  className=" mr-sm-2"
                  style={{ width: "308px" }}
                />
              </Col>
            </Row>
          </Form>
        </div>
      </Card>
    </div>
  );
}

export default SearchBar;