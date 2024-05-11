import { render, screen } from '@testing-library/react';
import App from './App';
import Dingolfi from "./components/Dingolfi";
import { BrowserRouter } from 'react-router-dom';

it('renders learn react link', () => {
  render( <BrowserRouter>
  <Dingolfi />
</BrowserRouter>);
  const linkElement = screen.getByText(/Welcome , Bhai or Behanooo.../i);
  expect(linkElement).toBeInTheDocument();
});
