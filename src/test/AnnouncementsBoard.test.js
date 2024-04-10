import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../App';

describe('AnnouncementsBoard Component', () => {
  test('should allow a user to add an announcement', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New announcement' } });
    fireEvent.click(screen.getByText('Добавить объявление'));
    expect(screen.getByText('New announcement')).toBeInTheDocument();
  });
});
