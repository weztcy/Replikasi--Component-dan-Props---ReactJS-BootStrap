import { Container, Row, Col } from "react-bootstrap";

function StatistikPengunjung(props) {
  return (
    <div>
      <Container>
        <Row className="justify-content-center align-items-start">
          <Col className="text-white" style={{ margin: "35px 0px 0px 62px" }}>
            <h3>Statistik Pengunjung</h3>
            <h3 style={{ margin: "-20px 0px 30px 0px" }}>____</h3>

            <table style={{ marginLeft: "" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      paddingRight: "90px",
                      paddingBottom: "7px",
                      fontWeight: "normal",
                    }}
                  >
                    &#8651; Hari Ini
                  </th>
                  <td
                    style={{
                      paddingLeft: "90px",
                      textAlign: "right",
                      fontWeight: "normal",
                    }}
                  >
                    {props.hariini}
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      paddingRight: "90px",
                      paddingBottom: "7px",
                      fontWeight: "normal",
                    }}
                  >
                    &#8651; Kemarin
                  </th>
                  <td
                    style={{
                      paddingLeft: "90px",
                      textAlign: "right",
                      fontWeight: "normal",
                    }}
                  >
                    {props.kemarin}
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      paddingRight: "90px",
                      paddingBottom: "7px",
                      fontWeight: "normal",
                    }}
                  >
                    &#8651; Bulan Ini
                  </th>
                  <td
                    style={{
                      paddingLeft: "90px",
                      textAlign: "right",
                      fontWeight: "normal",
                    }}
                  >
                    {props.bulanini}
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      paddingRight: "90px",
                      paddingBottom: "7px",
                      fontWeight: "normal",
                    }}
                  >
                    &#8651; Tahun Ini
                  </th>
                  <td
                    style={{
                      paddingLeft: "90px",
                      textAlign: "right",
                      fontWeight: "normal",
                    }}
                  >
                    {props.tahunini}
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      paddingRight: "90px",
                      paddingBottom: "7px",
                      fontWeight: "normal",
                    }}
                  >
                    &#8651; Semua Waktu
                  </th>
                  <td
                    style={{
                      paddingLeft: "90px",
                      textAlign: "right",
                      fontWeight: "normal",
                    }}
                  >
                    {props.semuawaktu}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr></tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StatistikPengunjung;