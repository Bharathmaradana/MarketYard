import React from "react";
import "./css/style.css";
import { ImHome } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdNotificationsNone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiAddToQueue } from "react-icons/bi";
import { MdAdd } from "react-icons/md";

function Profile() {
  return (
    <div>
      <div className="market-nav">
        <h1
          style={{ padding: "30px", fontFamily: "Copperplate", color: "black" }}
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
        <div className="profile-body">
          <img src="user.jpg" alt="" />
        </div>
        <div className="profile-cards">
          <div
            className="post"
            style={{ marginLeft: "60px", marginBottom: "30px" }}
          >
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
            <div className="post-img">.</div>
          </div>
          <div
            className="post"
            style={{ marginLeft: "60px", marginBottom: "30px" }}
          >
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
            <div className="post-img">.</div>
          </div>
          <div
            className="post"
            style={{ marginLeft: "60px", marginBottom: "30px" }}
          >
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
            <div className="post-img">.</div>
          </div>
          <div
            className="post"
            style={{ marginLeft: "60px", marginBottom: "30px" }}
          >
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
            <div className="post-img">.</div>
          </div>
          <div
            className="post"
            style={{ marginLeft: "60px", marginBottom: "30px" }}
          >
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
            <div className="post-img">.</div>
          </div>
          <div className="post" style={{ marginLeft: "60px" }}>
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
            <div className="post-img">.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
