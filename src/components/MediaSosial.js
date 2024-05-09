import React from "react";
import Card from "react-bootstrap/Card";
import Facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";
import Youtube from "../assets/images/youtube.png";

function MediaSosial() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Card style={{ height: "115px" }} className="ps-4">
        <Card.Text className="fs-5" style={{ margin: "20px 0px 5px 8px" }}>
          Media Sosial_______
        </Card.Text>
        <span style={{ margin: "0px 10px" }}>
          <a href="https://www.facebook.com">
            <Card.Img
              variant="top"
              src={Facebook}
              style={{ width: "15%", marginRight: "15px" }}
            />
          </a>
          <a href="https://www.twitter.com">
            <Card.Img
              variant="top"
              src={Twitter}
              style={{ width: "15%", marginRight: "15px" }}
            />
          </a>
          <a href="https://www.instagram.com">
            <Card.Img
              variant="top"
              src={Instagram}
              style={{ width: "15%", marginRight: "15px" }}
            />
          </a>
          <a href="https://www.youtube.com">
            <Card.Img variant="top" src={Youtube} style={{ width: "15%" }} />
          </a>
        </span>
      </Card>
    </div>
  );
}

export default MediaSosial;