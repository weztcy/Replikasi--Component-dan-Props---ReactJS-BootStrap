import { Card } from "react-bootstrap";
import Image1 from "../assets/images/istockphoto-1456284778-612x612.jpg";
import Image2 from "../assets/images/icon-person-icon-design-symbol-avatar-silhouette-character-cartoon-head-png-clipart.jpg";
import React from "react";

function BeritaSekunder() {
  const beritas = [
    {
      kategori: "Berita Terbaru",
      judul: "PENANGANAN BENCANA TIM GABUNGAN",
      tanggal: "31 Januari 2024",
      penulis: "Marsudi",
      isi: "SOBAT TANGGUH MIMIN KASIH INFO TERKINI......UNTUK SEPUTAR KEJADIAN BENCANA DI KABUPATEN KEBUMEN SELASA, 30/1/2024 Hujan lebat dan cuaca ekstrem masih terjadi di beberapa desa...",
    },
    {
      kategori: "Berita Terbaru",
      judul: "TEBING JALAN LONGSOR",
      tanggal: "29 Januari 2024",
      penulis: "Marsudi",
      isi: "(25/1/2024) Tebing jalan longsor arah Kajoran-Peniron Km 6, atau jalur penghubung Kecamatan Pejagoan dengan Kecamatan Karanggayam Kebumen. Informasi dari pihak pemdes setempat adanya laporan dari jalan...",
    },
  ];
  return (
    <div className="row">
      {beritas.map((berita, index) => (
        <div key={index}>
          <Card
            className="ps-4 w-80"
            style={{ height: "200px", margin: "12px" }}
          >
            <div className="d-flex align-items-center">
              <Card.Img
                variant="top"
                src={Image1}
                style={{
                  maxWidth: "159px",
                  maxHeight: "159px",
                  marginTop: "4px",
                  marginRight: "10px",
                }}
              />
              <div>
                <Card.Body>
                  <Card.Title>{berita.judul}</Card.Title>
                  <br />
                  <Card.Subtitle className="mb-2 text-muted">
                    <div>
                      <img
                        src={Image2}
                        style={{ width: "30px", marginRight: "10px" }}
                      ></img>
                      <span style={{ marginRight: "20px" }}>
                        {berita.penulis}
                      </span>{" "}
                      <span style={{ marginRight: "20px" }}>
                        {berita.tanggal}
                      </span>{" "}
                      <span># {berita.kategori}</span>
                    </div>
                  </Card.Subtitle>
                  <Card.Text>{berita.isi}</Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default BeritaSekunder;