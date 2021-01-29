import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';
import TestRenderer from 'react-test-renderer'; // ES6

describe('Display Navbar', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});