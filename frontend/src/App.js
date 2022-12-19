import './App.css';
import DisplayTasks from './components/DisplayTasks';
import FormTask from './components/FormTask';
import HomePage from './components/HomePage';
import ImportantTask from './components/Important';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
<Router>
  <Routes>
  <Route exact path="/" element={<HomePage /> } />
  <Route exact path="/FormTask" element={<FormTask />} />
  <Route exact path="/DisplayTasks" element={<DisplayTasks />} />
  <Route exact path="/Important" element={<ImportantTask />} />

  </Routes>
</Router>




       
       {/* <FormTask />  
      <DisplayTasks /> */}
       

    </div>
  );
}

export default App;
