import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PokeFrame from './pokeframe';
import { getPokemon, getOnePokemon } from '../../actions/actions';
import '../../../scss/pokelist.scss';


class PageNumbers extends Component{
  constructor(props){
    super(props);
  };
  render() {
    const {pokeindex, pokecount, onClick, getPokemon, isFetching} = this.props;

    return (
      <div>
        <nav className="pagination is-right">
          <a
            className={`pagination-previous button
              ${(pokeindex > 1)? '':'disabled'}
              ${(isFetching)? ' disabled':''}`}
            onClick={() => onClick((pokeindex-2)*20)}>Previous</a>
          <a
            className={`pagination-next button
              ${(pokeindex < pokecount-1)? '':''}
              ${(isFetching)? ' disabled':''}`}
            onClick={() => onClick((pokeindex)*20)}
            >Next page </a>
          <ul className="pagination-list">
            <li>
            <a
              className={`pagination-link button
                ${(isFetching)? ' disabled is-loading':''}`}>
                Page {pokeindex} of {pokecount}
              </a>
            </li>
          </ul>
        </nav>
      </div>);
  }
};

const pokeCard = ({name}, isFetching) => (
  <a href={'pokemon/'+name}
    className={`${(isFetching)? ' is-loading':''}`}
    >
    <div className='hero'>
      <div className='hero-body'>
        <p className='pokename'>
          {`${(isFetching)? '...':name}`}
        </p>
      </div>
    </div>
  </a>
);

class PokeList extends Component {

  constructor(props){
    super(props);
    this.props.getPokemon(0);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>
          <span>
            Error!
            {this.props.errorMessage==='Unauthorized' ?
              'Login failed': 'Unknown error'}
          </span>
        </div>
      );
    }
  }

  render() {
    const { pokeindex, getPokemon, isFetching } = this.props;
    const pokecount = Math.ceil(this.props.pokecount / 20);
    const onClick = (pokeindex) => {
      return(
        this.props.getPokemon(pokeindex)
      );
    };
    const _list = this.props.pokelist.map((pokemon, key) => (
        <div className={`column is-3`}  key={key}>
          {pokeCard(pokemon, isFetching)}
        </div>
      ));
    return (
        <PokeFrame>
          <PageNumbers
            pokecount={pokecount}
            onClick={onClick}
            pokeindex={pokeindex}
            getPokemon={getPokemon}
            isFetching={isFetching}/>
          <div className='columns is-multiline'>
            {_list}
          </div>
        </PokeFrame>
    );
  }
}

PageNumbers.PropTypes = {
  onClick: PropTypes.func,
  pokecount: PropTypes.number,
  pokeindex: PropTypes.number,
  getPokemon: PropTypes.func,
  isFetching: PropTypes.bool
}

PokeList.propTypes = {
  errorMessage: PropTypes.string,
  isFetching: PropTypes.bool,
  getPokemon: PropTypes.func
};

const mapStateToProps = (state) => ({
  errorMessage: state.poke.error,
  message: state.poke.message,
  pokelist: state.poke.pokelist,
  pokedata: state.poke.pokedata,
  pokeindex: state.poke.pokeindex,
  pokecount: state.poke.pokecount,
  isFetching: state.poke.isFetching
});

export default connect(mapStateToProps, { getPokemon})(PokeList);
