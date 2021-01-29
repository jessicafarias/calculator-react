import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import Home from '../Home';
import TestRenderer from 'react-test-renderer';

describe('Display Home.js', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter> <Home /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});