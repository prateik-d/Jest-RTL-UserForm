import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import App from './App';

test('can received a new user and show it on list', () => {
  render(<App />);
  
  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('pra');
  user.click(emailInput);
  user.keyboard('jane@jane.com');
  
  user.click(button);

  
  const name = screen.getByRole('textbox', { name: 'pra' });
  
  const email = screen.getByRole('textbox', { name: 'jane@jane.com' });
  
  // screen.logTestingPlaygroundURL();

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
