import React, { Component } from "react";
import "./NavBar.css";
import Grid from "@material-ui/core/Grid";
import insta_logo from "../../images/instaLogo.png";
import home from "../../images/home.jpeg";
import message from "../../images/message.png";
import findd from "../../images/findd.jpeg";
import react from "../../images/react.png";
import Avatar from '@material-ui/core/Avatar';
import dp from "../../images/profile.jpg";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="navbar_barContent">
          <Grid container>
            <Grid item xs={2}>hgfff</Grid>
            <Grid item xs={3}>
              <img className="navbar_logo" src={insta_logo} width="105px"/>
            </Grid>
            <Grid item xs={3}>
              <input text="text" className="navbar_searchBar" placeholder="Search"/>
            </Grid>
            <Grid item xs={3} style={{"display":"flex"}}>
              <img src={home} width="30px" height="30px"/>
              <img src={message} width="45px" height="45px"/>
              <img src={findd} width="25px" height="25px"/>
              <img src={react} width="45px" height="45px"/>
              <Avatar src={dp}className="navbar_img" style={{"maxHeight":"30px","maxwidth":"30px"}}/>
            </Grid>
            <Grid item xs={1}>

            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default NavBar;
