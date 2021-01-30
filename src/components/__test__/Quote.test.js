import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer'; // ES6
import Quote from '../Quote';

describe('Display Quote page', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter><Quote /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
