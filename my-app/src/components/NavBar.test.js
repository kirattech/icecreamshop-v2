import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

test('renders learn react link', () => {
  const navBar = render( <NavBar /> );
  
  expect(navBar).toMatchSnapshot(); 
});