import { Card } from "react-bootstrap";
import Image1 from "../assets/images/360_F_255739172_533jjNvdeTQFm1gtkDcPyd3RSKTMe5Ta.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BeritaSekunder() {
  const beritas = [
    {
      kategori: "Berita Terbaru",
      judul:
        "PENANGANAN BENCANA TANAH LONGSOR DI DESA KEDUNGGONG KECAMATAN SADANG",
      tanggal: "07 Februari 2024",
      penulis: "Marsudi",
      isi: "(06/2) Selasa, tebing setinggi puluhan meter di Desa Kedunggong Kecamatan Sadang yang sudah mengalami 2 kali longsoran sejak tahun 2024 masih berpotensi longsor. Pemerintah Kabupaten (PEMKAB) Kebumen melalui BPBD dan DPUPR sedang menangani longsoran tersebut dengan cara menyingkirkan material dan dilakukan penyemprotan agar material di atas tebing bisa berkurang.",
    },
    {
      kategori: "Berita Terbaru",
      judul: "TANAH LONGSOR DESA SIDOTOTO KECAMATAN PADURESO",
      tanggal: "01 Februari 2024",
      penulis: "Marsudi",
      isi: "Dalam menghadapi cuaca ekstrem dan bencana alam, percepatan penanganan menjadi sangat penting untuk meminimalisir kerugian dan dampak yang lebih besar. Di Kabupaten Kebumen, BPBD bekerja keras untuk meningkatkan efektivitas penanganan bencana. Haryono Wahyudi, S.T,. M.T., selaku kepala Pelaksana Bpbd Kab Kebumen, melakukan survey lokasi kejadian bencana di Desa Sidototo Kecamatan Padureso. Namun, penanganan bencana tidak hanya menjadi tanggung jawab lembaga pemerintahan saja. Masyarakat yang bermukim di daerah rawan bencana juga harus turut berperan aktif dalam meminimalisir risiko bencana. Oleh karena itu, BPBD Kebumen juga memberikan solusi dan saran kepada masyarakat dalam menghadapi bencana alam. Kerjasama dan koordinasi antara BPBD dan Muspika Padureso juga sangat penting dalam mempercepat penanganan bencana di wilayah Kecamatan Padureso. Tujuan utama dari koordinasi tersebut adalah untuk membahas langkah-langkah yang efektif dalam menghadapi bencana alam. Semua upaya ini dilakukan untuk memastikan keselamatan dan kesejahteraan masyarakat Kabupaten Kebumen terjaga dengan baik.",
    },
  ];
  const renderBeritaCards = () => {
    return beritas.map((b, index) => (
      <Col key={index} xs={12} md={6} className="mb-4">
        <Card className="bg-light text-white">
          <Card.Img src={Image1} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{b.judul}</Card.Title>
            <Card.Text>
              <p>
                {b.penulis} {b.tanggal} # {b.kategori}
              </p>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Col>
    ));
  };
  return (
    <Container>
      <Row>{renderBeritaCards()}</Row>
    </Container>
  );
}

export default BeritaSekunder;