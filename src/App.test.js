import { render, screen } from '@testing-library/react';
import App from './App';
import Main from './assets/components/Main';

test('renders Reload Data button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Reload Data/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders Main', () => {
  render(<Main />);
  const element = screen.getByTestId(/Overview/i);
  expect(element).toBeInTheDocument();
})
