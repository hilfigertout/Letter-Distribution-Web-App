import {useState} from 'react';
import './App.css';
import InputForm from './InputForm';
import DisplayLetters from './displayLetters';
import PageHeader from './pageHeader';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  const [textEntered, setTextEntered] = useState("");
  const [letterCount, setLetterCount] = useState({});
  const [expectedCount, setExpectedCount] = useState({});

  return (
    <Router>
      <div className="App">
        <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <PageHeader />
        <Routes>
          <Route path="/" element={<InputForm 
                                    textEntered={textEntered} 
                                    setTextEntered={setTextEntered} 
                                    setLetterCount = {setLetterCount}
                                    setExpectedCount={setExpectedCount}/>} />
          <Route path="/word-count" element={<DisplayLetters 
                                              inputString={textEntered} 
                                              letterCount={letterCount}
                                              expectedCount={expectedCount}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
