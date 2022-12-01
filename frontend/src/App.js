import './App.css';
import DisplayTasks from './components/DisplayTasks';
import FormTask from './components/FormTask';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <FormTask />
      <DisplayTasks />
      
    </div>
  );
}

export default App;
