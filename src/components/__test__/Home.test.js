import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer'; // ES6
import Home from '../Home';

describe('Display Home page', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter><Home /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
