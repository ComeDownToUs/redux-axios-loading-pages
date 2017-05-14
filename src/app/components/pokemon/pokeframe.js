// login and register screen layout
// basically a default "gonna have to log in if you wanna use this"
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../scss/pokeframe.scss';

class PokeFrame extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='hero is-fullheight is-primary'>
        <div className="hero-body">
          <div className="container has-text-centered">
            {this.props.children}
          </div>
        </div>
      </div>);
  }
}

export default PokeFrame;
