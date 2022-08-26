import Button from '@mui/material/Button';
import {Box} from '@mui/material';
import {TextField} from  "@mui/material"
import {useNavigate} from 'react-router-dom';

const countLetters = (inputString, allowedLetters, realFrequencies) => {
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


const InputForm = ({allowedLetters, realFrequencies, textEntered, setTextEntered, setLetterCount, setExpectedCount, isPending, setIsPending}) => {


    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        let [newLetterCount, newExpectedCount] = countLetters(textEntered, allowedLetters, realFrequencies);
        setLetterCount(newLetterCount);
        setExpectedCount(newExpectedCount);
        setIsPending(false);
        navigate("/count")
    };

    const handleChange = (event) => {
        setTextEntered(event.target.value);
    };

    return (
        <div className="inputForm">
            <p>Type in a string, and this webpage will count the occurrences of each letter and compare it to the frequency of letters across the English language.</p> 
            <Box 
            sx={{ margin : "auto", border: 0, width: "50%"}}
            component = "form"
            autoComplete="off"
            onSubmit={handleSubmit}
            >  
                <TextField 
                margin="normal"
                border="0"
                multiline
                rows={12}
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