import React from "react";
import Card from "react-bootstrap/Card";

function TweetSaran() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Card style={{ height: "340px" }} className="ps-4">
        <Card.Text className="fs-5" style={{ margin: "20px 0px 10px 8px" }}>
          Tweet Saran________
        </Card.Text>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ width: "165px", height: "200px", marginLeft: "12px" }}
          ></textarea>
          <label for="floatingTextarea" style={{ margin: "0px 15px" }}>
            Saran anda...
          </label>
          <button
            type="button"
            class="btn btn-primary"
            style={{ margin: "15px 0px 0px 110px" }}
          >
            Tweet
          </button>
        </div>
      </Card>
    </div>
  );
}

export default TweetSaran;