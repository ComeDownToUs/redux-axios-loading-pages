import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import '../../scss/dashboard.scss';

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  renderContent() {
    if(this.props.content) {
      return (
        <p>{this.props.content}</p>
      );
    }
  }

  handleLogout(){
    this.props.logoutUser();
  }

  render() {
    return (
      <div className="dashboard">
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
            </a>
          </div>

          <div className="nav-center">
            <a className="nav-item">
              <span className="icon">
                <i className="fa fa-github"></i>
              </span>
            </a>
            <a className="nav-item">
              <span className="icon">
                <i className="fa fa-twitter"></i>
              </span>
            </a>
          </div>

          <div className="nav-right nav-menu">

            <div className="nav-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button"  onClick={this.handleLogout.bind(this)} >
                    <span>Logout</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </nav>
        {this.renderContent()}
        <div className="hero is-primary is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="column">
              sddfs
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  content: PropTypes.func,
  protectedTest: PropTypes.func,
  logoutUser: PropTypes.func
};

const mapStateToProps = ((state) => {
  return { content: state.auth.content };
});

export default connect(mapStateToProps, actions)(Dashboard);
