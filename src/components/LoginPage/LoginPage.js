import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import instaOnPhone from "../../images/instaOnPhone.jpeg";
import instaLogo from "../../images/instaLogo.png";
import "../LoginPage.css";
import fb from "../../images/fb.png";
import both from "../../images/Both.png";
import googleplay from "../../images/GooglePlay.png"
import microsoft from "../../images/Microsoft.png"
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage_main">
              <div>
                <img src={instaOnPhone} alt="" width="450" />
              </div>
              <div>
              <div>
                <div className="loginpage_rightcomponent">
                  <img className="loginpage_logo" src={instaLogo} alt="" />
                  <div className="loginPage_signin">
                    <input
                      className="loginpage_text"
                      type="text"
                      placeholder="Phone number,username or email"
                    />
                    <input
                      className="loginpage_text"
                      type="password"
                      placeholder="Password"
                    />
                    <button className="login_button">Sign In</button>
                  </div>
                  <div className="login_ordiv">
                    <div className="login_divider"></div>
                    <div className="login_or">OR</div>
                    <div className="login_divider"></div>
                  </div>
                  <div className="login_fb">
                    <img width="15px" src={fb} style={{ marginRight: "5px" }} />
                    Login with Facebook
                  </div>
                  <div className="login_forgot">Forgot Password</div>
                </div>
              </div>
              <div className="loginpage_signupoption">
                <div className="loginPage_signin">
                  Don't have an account? SignUp
                </div>
                <div className="loginPage_downloadSection">
                
                  Get the app.
                
                  </div>
              </div>
              <div>
              <img width="400px" src={both} style={{marginTop:5}}  />
              </div>
              
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}
export default LoginPage;
