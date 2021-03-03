import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Header from './header';
import { useActions } from '../hooks/use-actions';

jest.mock('../hooks/use-actions');

describe('Header', () => {
  useActions.mockImplementation(() => ({ signOutUser: jest.fn() }));

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render', () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should call signoutUser when Log Out button clicked', () => {
    const component = render(<Header />);
    fireEvent.click(component.getByText('Log Out'));
  });
});
