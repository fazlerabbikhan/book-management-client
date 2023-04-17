import './App.css';
import { Routes, Route } from "react-router-dom";
import Booklist from './components/Booklist';
import EntryForm from './components/EntryForm';

function App() {
  return (
    <div className='mx-60'>
      <Routes>
        <Route path="/" element={<EntryForm />} />
        <Route path="/booklist" element={<Booklist />}/>
      </Routes>
    </div>
  );
}

export default App;
