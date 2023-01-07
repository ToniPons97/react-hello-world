import FilteredList from "./components/FilteredList";

function App() {
  const users = [
    {
      id: 1,
      name: 'John Lennon',
      age: 40},
    {
      id: 2,
      name: 'Paul Mccartney',
      age: 80
    },
    {
      id: 3,
      name: 'George Harrison',
      age: 58
    },
    {
      id: 4,
      name: 'Ringo Starr',
      age: 82
    },
    {
      id: 5,
      name: 'Peter Parker',
      age: 16
    },
    {
      id: 6,
      name: 'Abhimanyu Mishra',
      age: 14
    },
    {
      id: 7,
      name: 'Wei Yi',
      age: 13
    }, 
    {
      id: 8,
      name: 'Magnus Carlsen',
      age: 13
    },
    {
      id: 9,
      name: 'Billy Preston',
      age: 59
    }
  ];
  return <FilteredList users={users}/>
}

export default App;
