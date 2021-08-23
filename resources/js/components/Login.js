import { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { login } from '../actions/auth';
import Alert from './Alert';
import { Redirect } from 'react-router-dom';

const Login = ({ login, isAuthenticated }) => {
  let pageName = 'Log In';

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  }

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <h1 className="text-5xl font-bold text-center mb-5">{pageName}</h1>
      <Alert />
      <form id="login" onSubmit={onSubmit}>
        <div className="form row">
        <label htmlFor="email" className="form label">Email:</label>
        <input
            name="email"
            id="email"
            type="email"
            placeholder="your@email.com"
            className="form input"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form row">
        <label htmlFor="email" className="form label">Password:</label>
        <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            className="form input"
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <button type="submit" className="form submit">{pageName}</button>
      </form>
    </>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);