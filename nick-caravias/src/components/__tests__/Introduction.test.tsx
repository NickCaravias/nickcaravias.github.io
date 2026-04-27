import { render, screen } from '@testing-library/react';
import Introduction from '../Introduction';

describe('Introduction', () => {
  it('renders without crashing', () => {
    render(<Introduction />);
  });

  it('displays the intro text', () => {
    render(<Introduction />);
    expect(screen.getByText(/software engineer/i)).toBeInTheDocument();
  });
});
