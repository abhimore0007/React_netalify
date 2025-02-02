import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';

test('renders Projects section', () => {
  render(<Projects />);
  const linkElement = screen.getByText(/Project 1: Portfolio Website/i);
  expect(linkElement).toBeInTheDocument();
});
