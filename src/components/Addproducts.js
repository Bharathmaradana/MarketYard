import React, { useState } from "react";
import "./css/style.css";
import { ImHome } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdNotificationsNone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiAddToQueue } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import axios from "axios";
function Addproducts() {
  const [first, setfirst] = useState({
    name: "",
    img: "",
    expectedprice: "",
    quantity: "",
    date: "",
    msp: "",
  });
  const changedata = (e) => {
    setfirst({ ...first, [e.target.name]: e.target.value });
    console.log(first);
  };
  const submitdata = async () => {
    axios.post("http://localhost:5004/farmer/123", first).then((res) => {
      console.log(res.data);
      if (res.data == "successfully stored") {
        alert("succefully posted your post");
        window.location.reload(false);
      }
      console.log("something");
    });
  };
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
        <div className="add_1">
          <div className="add_2" style={{ justifyContent: "space-between" }}>
            <h1>ADD A PRODUCT</h1>
            <div className="form-control">
              <div class="input-group" style={{ marginTop: "10%" }}>
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    NAME
                  </span>
                </div>
                <input
                  type="text"
                  name="name"
                  onChange={changedata}
                  class="form-control"
                />
              </div>
              <div class="input-group" style={{ marginTop: "10%" }}>
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    IMAGE
                  </span>
                </div>
                <input
                  type="file"
                  name="image"
                  onChange={changedata}
                  class="form-control"
                />
              </div>
              <div class="input-group" style={{ marginTop: "10%" }}>
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    Expected Price
                  </span>
                </div>
                <input
                  type="text"
                  name="expectedprice"
                  onChange={changedata}
                  class="form-control"
                />
              </div>
              <div class="input-group" style={{ marginTop: "10%" }}>
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    Quantity
                  </span>
                </div>
                <input
                  type="text"
                  name="quantity"
                  onChange={changedata}
                  class="form-control"
                />
              </div>
              <div class="input-group" style={{ marginTop: "10%" }}>
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    DATE
                  </span>
                </div>
                <input
                  type="date"
                  name="date"
                  onChange={changedata}
                  class="form-control"
                />
              </div>
              <div class="input-group" style={{ marginTop: "10%" }}>
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    MSP
                  </span>
                </div>
                <input
                  type="text"
                  name="msp"
                  onChange={changedata}
                  class="form-control"
                />
              </div>
              <button class="btn btn-primary" onClick={submitdata}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div className="msp">
          <h1>MINIMUM SUPPORT PRICE</h1>
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

export default Addproducts;
