import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import Button from '../Button';

describe('Display Home.js', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter><Button name="AC" /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
