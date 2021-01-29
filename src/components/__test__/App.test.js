import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import App from '../App';
import TestRenderer from 'react-test-renderer'; // ES6

describe('Display App.js', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});