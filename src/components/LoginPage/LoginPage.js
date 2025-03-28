import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import instaOnPhone from '../../images/instaOnPhone.jpeg';
import instaLogo from '../../images/instaLogo.png';
import '../LoginPage.css';
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
            <div className="loginpage_main">
                <div>
                    <img src={instaOnPhone} alt="" width="450"/>
                </div>
            <div>
            <div className="loginpage_rightcomponent">
            <img className="loginpage_logo" src={instaLogo} alt="" />
            <div className="loginPage_signin">
              <input className="loginpage_text" type="text"/>
              <input className="loginpage_text" type="password"/>
              <button className="login_button">Sign In</button>

              </div>
          
             
            </div>
            </div>
            </div>
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default LoginPage;
