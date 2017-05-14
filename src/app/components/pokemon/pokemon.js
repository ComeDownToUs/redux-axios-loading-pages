import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { loginUser } from '../../actions/actions';
import AuthPresenter from './auth-presenter'

const form = reduxForm({
  form: 'login',
  validate
});


const inputIcons = field => {
  if(field.type==="email"){
    return (<i className="fa fa-envelope"></i>);
  }
  else if (field.type==="password"){
    return (<i className="fa fa-key"></i>);
  }
  else{
    return (<i className="fa"></i>);
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


function validate(formProps) {
  const errors = {};
  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }
  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }
  return errors;
}

class Login extends Component {
  handleFormSubmit(formProps) {

    this.props.loginUser(formProps);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>
          <span>
            Error!
            {this.props.errorMessage}
          </span>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <AuthPresenter
      >
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="columns">
            <div className="column">
              {this.renderAlert()}
              <Field name="email" component={renderField} type="email" placeholder="Email"/>
              <Field name="password" component={renderField} type="password" placeholder="Password"/>
            </div>
          </div>
          <button
            type="submit"
            className={"button is-primary is-inverted is-outlined"+(this.props.isFetching ? 'is-loading':'')+""}>
            Login
          </button>
        </form>
        <a href="/register">No Account? Register here</a>
      </AuthPresenter>
    );
  }
}

PokeList.propTypes = {
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func,
  isFetching: PropTypes.bool
};

const mapStateToProps = (state) => ({
  errorMessage: state.auth.error,
  message: state.auth.message
});

export default connect(mapStateToProps, {  });
