import { Card } from "react-bootstrap";
import Image1 from "../assets/images/live-breaking-news-template-style_23-2148509656.avif";
import Image2 from "../assets/images/icon-person-icon-design-symbol-avatar-silhouette-character-cartoon-head-png-clipart.jpg";

function BeritaUtama() {
  const beritas = [
    {
      kategori: "Berita Terbaru",
      judul: "KOLABORASI TIM GABUNGAN DALAM PENANGANAN BENCANA TANAH LONGSOR",
      tanggal: "12 Februari 2024",
      penulis: "Marsudi",
      isi: "(11/2/2024) Kolaborasi antara Dinas PUPR dan BPBD Kebumen dengan dukungan Pemdes Pesuningan, Kecamatan Prembun. Penggunaan alat berat seperti ekskavator telah sangat membantu dalam proses penanganan tanah gerak di lokasi tersebut. Dengan koordinasi yang baik antara berbagai pihak terkait, penanganan ini dapat berjalan lancar dan efisien. Selain itu, melibatkan Pemdes Pesuningan sebagai bagian dari tim juga memberikan dampak positif dalam mempercepat penyelesaian masalah ini. Pada tanggal 11 Februari 2024, tercatat bahwa penanganan tanah gerak telah mencapai 20%, menunjukkan progres yang positif dalam penyelesaian masalah ini. Semoga kerja sama yang baik antara Dinas PUPR, BPBD Kebumen, dan Pemdes Pesuningan terus berlanjut sehingga tujuan akhir untuk menjaga keamanan dan keselamatan masyarakat dapat tercapai dengan baik.",
    },
  ];
  return (
    <div>
      {beritas.map((berita, index) => (
        <Card
          key={index}
          className="mb-4 bg-white text-white"
          style={{ margin: "12px", marginTop: "0px" }}
        >
          <Card.Img src={Image1} />
          <Card.ImgOverlay>
            <div style={{ margin: "20px" }}>
              <Card.Title style={{ marginBottom: "0px" }}>
                {berita.judul}
              </Card.Title>
              <br />
              <Card.Text>
                <img
                  src={Image2}
                  style={{ width: "30px", marginRight: "10px" }}
                ></img>
                <span style={{ marginRight: "20px" }}>{berita.penulis}</span>{" "}
                <span style={{ marginRight: "20px" }}>{berita.tanggal}</span>{" "}
                <span># {berita.kategori}</span>
              </Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      ))}
    </div>
  );
}

export default BeritaUtama;