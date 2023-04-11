import React from "react";
import "./css/style.css";

function Mediator() {
      return (
        <div>
            <div className="state-main">
              <div className="state">
                <h5><b>Andhra Pradesh</b><br/></h5>
                <img style={{width:'200px',height:'200px',marginTop:'10px'}} src="ap.png" alt=''/>
              </div >
              <div className="state">
                <h5><b>Telangana</b><br/></h5>
                <img style={{width:'200px',height:'200px',marginTop:'10px'}} src="telangana.png" alt=''/>
              </div>
              <div className="state">
                <h5><b>Odisha</b><br/></h5>
                <img style={{width:'200px',height:'200px',marginTop:'10px'}} src="odisha.png" alt=''/>
              </div>
              <div className="state">
                <h5><b>Tamil Nadu</b><br/></h5>
                <img style={{width:'200px',height:'200px',marginTop:'10px'}} src="tn.png" alt=''/>
              </div>
              <div className="state">
                <h5><b>Delhi</b><br/></h5>
                <img style={{width:'200px',height:'200px',marginTop:'10px'}} src="delhi.png" alt=''/>
              </div>
            </div>
        </div>
      );
}
    
export default Mediator;