import {useState} from 'react';
import './index.css';
import InputForm from './InputForm';
import DisplayLetters from './DisplayLetters';
import PageHeader from './PageHeader';
import { Backdrop, CircularProgress } from '@mui/material';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  const allowedLetters = "abcdefghijklmnopqrstuvwxyz"; //List of all allowed characters
  //Real Frequencies of "J" and "Z" were boosted by 0.0001 to ensure that all these frequencies sum to 1. 
  const realFrequencies = [0.0812, 0.0149, 0.0271, 0.0432, 0.1202, 0.0230, 0.0203, 0.0592, 0.0731, 0.00105 , 0.0069, 0.0398 , 0.0261, 0.0695, 0.0768, 0.0182, 0.0011, 0.0602, 0.0628, 0.0910, 0.0288, 0.0111, 0.0209, 0.0017, 0.0211, 0.00075]

  const defaultLC = {}
  for (let i = 0; i < allowedLetters.length; i++) {
    defaultLC[allowedLetters.slice(i, i+1)] = 0;
  }
  
  const [textEntered, setTextEntered] = useState("");
  const [letterCount, setLetterCount] = useState(defaultLC);
  const [expectedCount, setExpectedCount] = useState(defaultLC);
  const [isPending, setIsPending] = useState(false);



  return (
    <Router>
      <div className="App">
        <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <PageHeader />
        <Backdrop sx={{color: "fff", zIndex: (theme) => theme.zIndex.drawer + 1}}
          open={isPending}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Routes>
          <Route path="/" element={<InputForm 
                                    allowedLetters={allowedLetters}
                                    realFrequencies={realFrequencies}
                                    textEntered={textEntered} 
                                    setTextEntered={setTextEntered} 
                                    setLetterCount = {setLetterCount}
                                    setExpectedCount={setExpectedCount}
                                    isPending={isPending}
                                    setIsPending={setIsPending} />} 
          />
          <Route path="/word-count" element={<DisplayLetters 
                                              inputString={textEntered} 
                                              letterCount={letterCount}
                                              expectedCount={expectedCount}/>} 
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
