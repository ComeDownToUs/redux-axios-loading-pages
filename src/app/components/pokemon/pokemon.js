import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemon, getOnePokemon } from '../../actions/actions';
import PokeFrame from './pokeframe';


class Pokemon extends Component {

  constructor(props){
    super(props);
    this.props.getOnePokemon(1);
  }

  render() {

    return (
      <PokeFrame>
        <div> Name {this.props.pokename}</div>
        <div> Stats:

        </div>
      </PokeFrame>
    );
  }
}

Pokemon.propTypes = {
  errorMessage: PropTypes.string,
  isFetching: PropTypes.bool,
  getOnePokemon: PropTypes.func

};

const mapStateToProps = (state) => ({
  errorMessage: state.poke.error,
  message: state.poke.message,
  pokename: state.poke.pokename,
  pokedata: state.poke.pokedata,
  pokestats: state.poke.pokestats
});

export default connect(mapStateToProps, {getOnePokemon})(Pokemon);
