import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer'; // ES6
import Calculator from '../Calculator';

describe('Display Calculator page', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter><Calculator /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
