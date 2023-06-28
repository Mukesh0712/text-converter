import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Text Converter" />
      <div className="container my-4">
        <TextForm heading="Enter the Text" />
      </div>
    </>
  );
}

export default App;
