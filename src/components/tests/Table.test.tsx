import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from '../users/Table';

const data = [
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco' },
];

test('renders table with correct headers and data', () => {
    render(<Table list={data} headers={['name', 'age', 'city']} rows={2} />);

    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('age')).toBeInTheDocument();
    expect(screen.getByText('city')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();
});
