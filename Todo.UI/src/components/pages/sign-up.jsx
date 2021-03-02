import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useActions } from '../../hooks/use-actions';

const SignUpPage = () => {
  const { registerUser } = useActions();
  const history = useHistory();
  const { loading, error, user } = useSelector(({ auth }) => auth);

  const [name, setName] = useState('John');
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('123');

  useEffect(() => {
    if (!!user) {
      history.push('/');
    }
  }, [user]);

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    registerUser({ name, email, password });
  };

  return (
    <div>
      <div>Sign Up</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            type="text"
            value={name}
            onChange={handleOnChangeName}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            type="text"
            value={email}
            onChange={handleOnChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={handleOnChangePassword}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
        <div>
          <Link to="/sign-in">Have an account? Sign In</Link>
        </div>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default SignUpPage;
