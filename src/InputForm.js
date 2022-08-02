import {useState} from 'react';
import DisplayLetters from './displayLetters.js'

const countLetters = (inputString) => {
    const allowedLetters = "abcdefghijklmnopqrstuvwxyz";
    //Real Frequencies of "J" and "Z" were boosted slightly to ensure that these frequencies sum to 1. 
    const realFrequencies = [0.0812, 0.0149, 0.0271, 0.0432, 0.1202, 0.0230, 0.0203, 0.0592, 0.0731, 0.00105 , 0.0069, 0.0398 , 0.0261, 0.0695, 0.0768, 0.0182, 0.0011, 0.0602, 0.0628, 0.0910, 0.0288, 0.0111, 0.0209, 0.0017, 0.0211, 0.00075]
    let letterCount = {}
    let expectedCount = {}
    let numLetters = 0;
    for (let i = 0; i < allowedLetters.length; i++) {
        letterCount[allowedLetters.slice(i, i+1)] = 0;
    }
    let remainingInput = inputString;
    while (remainingInput.length > 0) {
        let nextChar = remainingInput.slice(0, 1).toLowerCase();
        if (allowedLetters.includes(nextChar)) {
            letterCount[nextChar] = letterCount[nextChar] + 1;
            numLetters = numLetters + 1;
        }
        remainingInput = remainingInput.slice(1);
    }
    for (let i = 0; i < allowedLetters.length; i++) {
        expectedCount[allowedLetters.slice(i, i+1)] = numLetters * realFrequencies[i];
    }

    return [letterCount, expectedCount ];
}


const InputForm = () => {

    const [textEntered, setTextEntered] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [letterCount, setLetterCount] = useState({});
    const [expectedCount, setExpectedCount] = useState({});
    const [counted, setCounted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        let [newLetterCount, newExpectedCount] = countLetters(textEntered);
        setLetterCount(newLetterCount);
        setExpectedCount(newExpectedCount);
        console.log(letterCount);
        setCounted(true);
        setIsPending(false);
    };

    return ( 
        <div className="input-form">
            <h2>Letter Count</h2>
            {!counted && <form onSubmit={handleSubmit}>
                <label>Enter your text here</label>
                <textarea
                required 
                value={textEntered}
                onChange={(e) => setTextEntered(e.target.value)}></textarea>
                { !isPending ? <button>Count letters</button> : <button disabled>Counting...</button> }
             </form>
            }
            {counted && <DisplayLetters inputString={textEntered} letterCount={letterCount} expectedCount={expectedCount} />}
        </div>
     );
}
 
export default InputForm;