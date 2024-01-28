import { render, screen } from '@testing-library/react';
import App from './App';
import { defaultData } from './Pages/ReserveTable';
import BookingForm from './components/BookingForm';
import CTA from './components/CTA';

test('renders Little Lemon', () => {
  render(<App />);
  const linkElement = screen.getByText(/Little Lemon/);
  expect(linkElement).toBeInTheDocument();

  const reserve_button = screen.getByText(/Reserve a table/)
  expect(reserve_button).toBeInTheDocument();
});

test('Checks reserve a table button', () => {
  render(<App><CTA /></App>);
  const reserve_button = screen.getByText(/Reserve a table/)
  expect(reserve_button).toBeInTheDocument();
});


test('Checks fieds in form', () => {
  render(<BookingForm data={defaultData} onChange={(data) => data} />)
  const dateField = screen.getByText(/Date:/)
  expect(dateField).toBeInTheDocument()

  const timeField = screen.getByText(/Time:/)
  expect(timeField).toBeInTheDocument();

  const noOfPersons = screen.getByText(/No. of Persons:/)
  expect(noOfPersons).toBeInTheDocument();

  const occassion = screen.getByText(/Occassion/)
  expect(occassion).toBeInTheDocument();
})