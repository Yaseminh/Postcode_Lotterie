

import './App.css'

import Table from "./components/users/Table.tsx";
const data = [
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco2' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco3' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco4' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco5' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco6' },
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco2' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco3' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco4' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco5' },
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco2' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco3' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco4' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco5' },
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco2' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco3' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco4' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco5' },
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco2' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco3' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco4' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco5' },
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco2' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco3' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco4' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco5' },
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco2' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco3' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco4' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco5' },
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco2' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco3' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco4' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco5' },
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco2' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco3' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco4' },
    { name: 'Jane Smith', age: 25, city: 'San Francisco5' }
    // more data...
];
function App() {

  return (
      <Table list={data} headers={['name', 'age', 'city']} rows={78} />
  )
}

export default App
