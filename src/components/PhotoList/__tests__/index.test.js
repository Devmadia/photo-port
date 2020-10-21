import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '../'

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};


afterEach(cleanup)

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<PhotoList />);
  });

  it('renders', () => {
    const { asFragment } = render(<PhotoList />)
    expect(asFragment()).toMatchSnapshot()
  });
});
