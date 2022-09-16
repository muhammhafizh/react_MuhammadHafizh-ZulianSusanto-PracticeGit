import './App.css';
import ListItem from './components/ListSection';
import Header from './components/Navbar';
import { users } from './UserContext';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      {users.map(user => <ListItem userList={user} />)}
    </div>
  );
}

export default App;