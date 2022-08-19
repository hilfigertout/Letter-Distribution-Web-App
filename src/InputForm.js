import React, {useState} from 'react';
import DisplayLetters from './displayLetters.js';
import Button from '@mui/material/Button';
import {Box} from '@mui/material';
import {TextField} from  "@mui/material"
import {useNavigate} from 'react-router-dom';

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


const InputForm = ({textEntered, setTextEntered, setLetterCount, setExpectedCount}) => {

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        let [newLetterCount, newExpectedCount] = countLetters(textEntered);
        setLetterCount(newLetterCount);
        setExpectedCount(newExpectedCount);
        setIsPending(false);
        navigate("/word-count")
    };

    const handleChange = (event) => {
        setTextEntered(event.target.value);
    };

    return (
        <div className="inputForm"> 
            <Box 
            sx={{ m : 4, border: 0}}
            component = "form"
            autoComplete="off"
            onSubmit={handleSubmit}
            >  
                <TextField 
                margin="normal"
                border="0"
                multiline
                rows={6}
                id="input-string"
                label="Enter String Here"
                value={textEntered}
                fullWidth
                variant="outlined"
                onChange={handleChange}
                />
                {!isPending 
                ?
                <Button 
                type="submit"
                variant="contained"
                sx={{mt: 3, mb: 2}}>
                    Count Letters
                </Button> 
                :
                <Button
                disabled
                type="submit"
                variant="contained"
                sx={{mt: 3, mb: 2}}>
                    Counting...
                </Button>
                }
            </Box>
        </div>
     );
}
 
export default InputForm;