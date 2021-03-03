import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useActions } from '../../hooks/use-actions';
import { REGISTER_USER_ERROR } from '../../state/action-types';
import { SButtonPrimary, SHeading } from '../styled';

const SButton = styled(SButtonPrimary)`
  margin: 1rem 0;
`;

const SignUpPage = () => {
  const { registerUser } = useActions();
  const history = useHistory();
  const { loading, error, user } = useSelector(({ auth }) => auth);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    if (!name || !email || !password)
      return dispatch({
        type: REGISTER_USER_ERROR,
        payload: 'Fields may not be empty',
      });

    registerUser({ name, email, password });
  };

  return (
    <div>
      <SHeading>Sign Up</SHeading>
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
        <SButton type="submit" onClick={handleSubmit}>
          Sign Up
        </SButton>
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
