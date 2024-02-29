import { Toaster } from 'react-hot-toast';
import './App.css'
import Location from './Components/Location'

function App() {

  return (
    <>
      <Toaster position="top-right" />
      <Location />
    </>
  );
}

export default App
