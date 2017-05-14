import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemon, getOnePokemon } from '../../actions/actions';


const pageNumbers = (index, count) => {
  if(count<7){
    return "all";
  }else if(index<3){
    return "first three, ellipsis, last"
  }else if(index>count-3){
    return "first, ellipsis, last three"
  }else{
    return "first, ellipsis, three, ellipsis, last"
  }
};

const renderField = field => {
  const {input, meta, ...custom} = field;
  return (
    <div>
      <p className="control has-icons-left has-icons-right">
        <input
          className="input"
          placeholder={custom.placeholder}
          type={custom.type}
          {...field.input} />
        <span className="icon is-small is-left">
          {inputIcons(field)}

        </span>
        <span className={"icon is-small is-right "+((meta.touched&&meta.error) ? "error":"")}>
          <i className="fa fa-check "></i>
        </span>
          {meta.touched && meta.error && <span className="error">{meta.error}</span>}

      </p>
    </div>
  );
};


class PokeList extends Component {

  constructor(props){
    super(props);
    this.props.getPokemon(0);
  }
  handleFormSubmit(index) {

    this.props.getPokemon(index);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>
          <span>
            Error!
            {this.props.errorMessage==="Unauthorized" ?
              "Login failed": "Unknown error"}
          </span>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
        <div> this.props </div>
    );
  }
}

PokeList.propTypes = {
  errorMessage: PropTypes.string,
  handleClick: PropTypes.func,
  isFetching: PropTypes.bool,
  getPokemon: PropTypes.func
};

const mapStateToProps = (state) => ({
  errorMessage: state.poke.error,
  message: state.poke.message,
  pokelist: state.poke.pokelist,
  pokecount: state.poke.pokecount
});

export default connect(mapStateToProps, { getPokemon })(PokeList);
