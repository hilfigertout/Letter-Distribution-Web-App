import clsx from 'clsx';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/system";
import {Button, Divider} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DisplayLetters = ({inputString, letterCount, expectedCount}) => {   

    const parseRows = (letterCount, expectedCount) => {
        const rows = [];
        let i = 0;
        for (const letter in letterCount) {
            let observed = letterCount[letter]
            let expected = expectedCount[letter]
            let proportionDiff = (observed - expected)/expected
            rows.push({id: i, letter: letter, count: observed, expectedCount: expected, percentDifference: (100*proportionDiff)})
            i++;
        }
        return rows;
    };

    let totalLetters = 0;
    for (const letter in letterCount) {
        totalLetters += letterCount[letter];
    }

    const navigate = useNavigate();


    const columns = [
        { field: 'letter', headerName: 'Letter', width: 70},
        { field: 'count', headerName: 'Observed Count', type: 'number', flex: 1,},
        { field: 'expectedCount', headerName: 'Expected Count', type: 'number', flex: 1},
        { field: 'percentDifference', headerName: 'Percent Difference (%)', type: 'number', flex: 1,
            cellClassName: (params) => {
                return(clsx('super-app', {
                    zero: (isNaN(params.value) || params.value === -100),
                    low: (params.value < -5 && params.value !== -100),
                    equal: (params.value >= -5 && params.value <= 5),
                    high: params.value > 5,  
                }))
            }}
    ];

    const rows = parseRows(letterCount, expectedCount);

    return (
        <div className="display-letters">
            <h3>Total Letters: {totalLetters}</h3>
            <Box 
            sx={{
                height: 600, width: "70%", margin: "auto",
                '& .super-app.zero': {
                    backgroundColor: '#000'
                },
                '& .super-app.low': {
                    backgroundColor: 'rgb(254, 136, 136)'
                },
                '& .super-app.equal': {
                    backgroundColor: '#ddd'
                }, 
                '& .super-app.high': {
                    backgroundColor: 'rgb(110, 252, 174)'
                },
                }}>
                <DataGrid 
                rows={rows}
                columns={columns}
                pageSize={Object.keys(letterCount).length}
                disableSelectionOnClick
                hideFooter
                />
            </Box>
            <p>Expected count calculated from the <a href="http://pi.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html" target="_blank" rel="noreferrer">Cornell University English Letter Frequency Table</a>.</p>
            <p>Percent difference is 100*(observed - expected)/expected</p>
            <Button onClick={() => navigate("/")}>Back to String Input</Button>
            <Divider role="presentation">String Entered</Divider>
            <p>{inputString}</p>
        </div> 
        );
}
 
export default DisplayLetters;