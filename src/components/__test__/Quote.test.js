import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import Quote from '../Quote';
import TestRenderer from 'react-test-renderer'; // ES6

describe('Display Quote page', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter><Quote /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});