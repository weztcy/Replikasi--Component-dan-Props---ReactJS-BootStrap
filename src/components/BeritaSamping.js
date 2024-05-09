import { Card } from "react-bootstrap";
import Image1 from "../assets/images/820026_1200.jpg";
import React from "react";

function BeritaSamping() {
  const beritas = [
    {
      kategori: "Rilis",
      judul:
        "Laporan Singkat Pemeriksaan Gerakan Tanah Di Desa Kenteng, Kecamatan Sempor, Kabupaten Kebumen, Provinsi Jawa Tengah",
      tanggal: "",
      penulis: "",
      isi: "",
    },
    {
      kategori: "Berita Terbaru",
      judul:
        "BMKG mengajak masyarakat agar lebih teliti dan cerdas dengan marak isu HOAX seputar Gempa Bumi di Lombok",
      tanggal: "",
      penulis: "",
      isi: "",
    },
    {
      kategori: "Berita Terbaru",
      judul:
        "FGD Penyusunan Petaris Bencana Kekeringan di Kabupaten Kebumen Tahun 2017",
      tanggal: "",
      penulis: "",
      isi: "",
    },
    {
      kategori: "Berita Terbaru",
      judul:
        "17 Kecamatan di Kebumen Terdampak Bencana Banjir, Angin dan Tanah Longsor",
      tanggal: "",
      penulis: "",
      isi: "",
    },
    {
      kategori: "Rilis",
      judul:
        "Prakiraan Wilayah Potensi Tejadi Gerakan Tanah Pada Bulan Februari 2018 Kabupaten Kebumen",
      tanggal: "",
      penulis: "",
      isi: "",
    },
    {
      kategori: "Berita Terbaru",
      judul: "Relawan Kebumen Digembleng Basarnas Jateng di Waduk Sempor",
      tanggal: "",
      penulis: "",
      isi: "",
    },
  ];
  return (
    <div className="row">
      <div style={{ marginBottom: "15px" }}>
        <span
          className="fs-4"
          style={{
            marginRight: "20px",
            color: "blue",
            textDecoration: "underline",
          }}
        >
          POPULER
        </span>
        <span className="fs-4">TERBARU</span>
      </div>
      {beritas.map((berita, index) => (
        <div key={index}>
          <Card className="ps-4 w-100" style={{ marginBottom: "10px" }}>
            <div className="d-flex align-items-center">
              <Card.Img
                variant="top"
                src={Image1}
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />{" "}
              {/* Atur lebar dan tinggi maksimal gambar */}
              <div>
                <Card.Body>
                  <Card.Title className="fs-6">{berita.judul}</Card.Title>
                  <Card.Text>{berita.kategori}</Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default BeritaSamping;