import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";
import Button from "@material-ui/core/Button";
import Topbar from "./Topbar";
import MainArea from "./MainArea";

class Home extends React.Component {
  handleLogout = e => {
    e.preventDefault();
    console.log("Here we are logging out");
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    const { isLoggingOut, logoutError } = this.props;
    console.log(this.props);
    console.log("Here we are", isLoggingOut);
    return (
      <React.Fragment>
        <Topbar handleLogout={this.handleLogout} />
        <MainArea />
        <Button onClick={this.handleLogout}>Logout</Button>
        {isLoggingOut && <p>Logging out....</p>}
        {logoutError && <p>Error logging out</p>}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Home);
