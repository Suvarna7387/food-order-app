import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className=" foot ">
          <div>
            <br />
            <h1
              style={{ marginLeft: "36%", color: "aqua", fontFamily: "Sofia" }}
            >
              Prisha restaurant
            </h1>
            <p style={{ marginLeft: "17%" }}>
              Address:Pune , 412207
             Email:prishrestro@123
            </p>
            <div
              className="blink"
              style={{ marginLeft: "40%",  color: "bisque" }}
            >
              <i
                class="fa-solid fa-phone fa-xl"
                style={{ marginLeft: "2%" }}
              ></i>
              <i
                class="fa-solid fa-envelope fa-xl"
                style={{ marginLeft: "2%" }}
              ></i>
              <i
                class="fa-brands fa-instagram fa-xl"
                style={{ marginLeft: "2%" }}
              ></i>
              <i
                class="fa-brands fa-facebook-square fa-xl"
                style={{ marginLeft: "2%" }}
              ></i>
            </div>
            <h4 className="blink" style={{ marginLeft: "78%", color: "white" }}>
              @copywrite -Suvarna Keskar
            </h4>
            <br />
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
