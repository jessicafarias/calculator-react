import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import Calculator from '../Calculator';
import TestRenderer from 'react-test-renderer'; // ES6

describe('Display Calculator page', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter><Calculator /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});