import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '@/components/features/Hero/HeroSection';

describe('Hero Component', () => {
  it('renders hero section correctly', () => {
    render(<Hero />);
    
    // Check if main heading is present
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('handles newsletter subscription', async () => {
    render(<Hero />);
    
    // Find email input and subscribe button
    const emailInput = screen.getByPlaceholderText(/email/i);
    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });
    
    // Simulate user input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(subscribeButton);
    
    // Check for success message
    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
  });
});
