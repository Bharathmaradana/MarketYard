import React, { useEffect, useState } from "react";
import "./css/style.css";
import { ImHome } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdNotificationsNone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiAddToQueue } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import axios from "axios";
// import down from "./download (1).jfif";
// import down1 from "./download (2).jfif";
// import down2 from "./download.jfif";
function Farmer() {
  const [dataset, setdataset] = useState([]);
  const [count, setcount] = useState(0);
  const images = ["./carrot.jpeg", "./beatroot.jpeg"];
  useEffect(() => {
    axios.get("http://localhost:5004/kisan/" + `123`).then((res) => {
      console.log(res.data);
      setdataset(res.data);
    });
  },[]);
  let h = 0;
  console.log(dataset);
  return (
    <div>
      <div className="market-nav">
        <h1
          style={{
            padding: "30px",
            fontFamily: "Copperplate",
            color: "black",
          }}
        >
          Money Yard
        </h1>
        <div className="navbutton">
          <button
            style={{ height: "50px", width: "120px", borderRadius: "10px" }}
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="sidebar">
        <a href="/farmer">
          <div className="sidebar-child">
            <ImHome style={{ marginRight: "10px" }} />
            <b>Home</b>
          </div>
        </a>
        <a href="/search">
          <div className="sidebar-child">
            <BiSearchAlt2 style={{ marginRight: "10px" }} />
            <b>Search</b>
          </div>
        </a>
        {/* <a><div className="sidebar-child">
                    <TbMessageCircle style={{marginRight:'10px'}}/><b>Messages</b>
                </div></a> */}
        <a href="/Profile">
          <div className="sidebar-child">
            <CgProfile style={{ marginRight: "10px" }} /> <b>Profile</b>
          </div>
        </a>

        <a href="/Addproduct">
          <div className="sidebar-child">
            <BiAddToQueue style={{ marginRight: "10px" }} /> <b>Add Product</b>
          </div>
        </a>
        <a href="/Addproducts">
          <div className="sidebar-child">
            <MdAdd style={{ marginRight: "10px" }} /> <b>Add Post</b>
          </div>
        </a>
      </div>
      <div className="main-body">
        {dataset.length > 0
          ? dataset.map((k, index) => {
              return (
                <div className="post">
                  <div className="post-content">
                    <div className="post_1">
                      <div className="post_2">
                        <h5>seller</h5>
                        <img
                          src="ap.png"
                          style={{
                            borderRadius: "50%",
                            height: "70px",
                            width: "70px",
                            borderColor: "red",
                          }}
                        />
                      </div>
                      <div
                        className="post_3"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "20px",
                        }}
                      >
                        <h6>{k.name}</h6>
                        <h6>
                          <span className="post_4">
                            Maharastra | Solapur | Solapur south
                          </span>
                        </h6>
                        <h6>Water melon(other)</h6>
                        <h6>
                          <span>Quality (60 tONNES)</span>
                        </h6>
                      </div>
                      <div className="post_5">
                        <h6>{k.date}</h6>
                        <h5
                          style={{
                            width: "10px",
                            height: "5px",
                            color: "white",
                            fontSize: "15px",
                            marginLeft: "45px",
                          }}
                        >
                          NEW
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="post-img">
                    <img
                      src={images[h % images.length]}
                      style={{
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "250px",
                        width: "480px",
                      }}
                    />
                    {(h += 1)}
                    <footer>
                      <h5>CONTACT ME</h5>
                      <a href="tel:+917569967428" className="call-btn">
                        {" "}
                        <button
                          className="btn btn-primary"
                          style={{ color: "orange" }}
                        >
                          CALL
                        </button>
                      </a>
                    </footer>
                  </div>
                </div>
              );
            })
          : null}
        <div className="post">
          <div className="post-content">
            <div className="post_1">
              <div className="post_2">
                <h5>seller</h5>
                <img
                  src="ap.png"
                  style={{
                    borderRadius: "50%",
                    height: "70px",
                    width: "70px",
                    borderColor: "red",
                  }}
                />
              </div>
              <div
                className="post_3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <h6>santaji Deshmukh</h6>
                <h6>
                  <span className="post_4">
                    Maharastra | Solapur | Solapur south
                  </span>
                </h6>
                <h6>Water melon(other)</h6>
                <h6>
                  <span>Quality (60 tONNES)</span>
                </h6>
              </div>
              <div className="post_5">
                <h6>17/02/2022</h6>
                <h5
                  style={{
                    width: "10px",
                    height: "5px",
                    color: "white",
                    fontSize: "15px",
                    marginLeft: "45px",
                  }}
                >
                  NEW
                </h5>
              </div>
            </div>
          </div>
          <div className="post-img">
            <footer>
              <h5>CONTACT ME</h5>
              <a href="tel:+917569967428" className="call-btn">
                {" "}
                <button className="btn btn-primary" style={{ color: "orange" }}>
                  CALL
                </button>
              </a>
            </footer>
          </div>
        </div>
        <div className="post">
          <div className="post-content">
            <div className="post_1">
              <div className="post_2">
                <h5>seller</h5>
                <img
                  src="ap.png"
                  style={{
                    borderRadius: "50%",
                    height: "70px",
                    width: "70px",
                    borderColor: "red",
                  }}
                />
              </div>
              <div
                className="post_3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <h6>santaji Deshmukh</h6>
                <h6>
                  <span className="post_4">
                    Maharastra | Solapur | Solapur south
                  </span>
                </h6>
                <h6>Water melon(other)</h6>
                <h6>
                  <span>Quality (60 tONNES)</span>
                </h6>
              </div>
              <div className="post_5">
                <h6>17/02/2022</h6>
                <h5
                  style={{
                    width: "10px",
                    height: "5px",
                    color: "white",
                    fontSize: "15px",
                    marginLeft: "45px",
                  }}
                >
                  NEW
                </h5>
              </div>
            </div>
          </div>
          <div className="post-img">
            <footer>
              <h5>CONTACT ME</h5>
              <a href="tel:+917569967428">
                {" "}
                <button style={{ color: "orange" }}>CALL</button>
              </a>
            </footer>
          </div>
        </div>
        <div className="msp">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <b style={{ fontSize: "20px" }}>Commodity </b>{" "}
            <b style={{ fontSize: "20px" }}>2022-2023</b>{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>Paddy</b> <b>2040</b>{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>Jowar </b> <b>2990</b>{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>Bajra </b> <b>2350</b>{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>Ragi </b> <b>3578</b>{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>Moong </b> <b>7755</b>{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>Cotton </b> <b>6080</b>{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>Barley </b> <b>1635</b>{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>Toria </b> <b>6458</b>{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>Jute </b> <b>4758</b>{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>Copra </b> <b>6566</b>{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>Gram </b> <b>5230</b>{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>Wheat </b> <b>2015</b>{" "}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Farmer;
