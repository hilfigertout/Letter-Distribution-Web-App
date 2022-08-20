import clsx from 'clsx';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/system";

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


    const columns = [
        { field: 'letter', headerName: 'Letter', width: 70},
        { field: 'count', headerName: 'Observed Count', type: 'number', flex: 1},
        { field: 'expectedCount', headerName: 'Expected Count', type: 'number', flex: 1},
        { field: 'percentDifference', headerName: 'Percent Difference (%)', type: 'number', flex: 1,
            cellClassName: (params) => {
                return(clsx('super-app', {
                    zero: params.value === -100,
                    low: (params.value < -5 && params.value !== -100),
                    equal: (params.value >= -5 && params.value <= 5),
                    high: params.value > 5,  
                }))
            }}
    ];

    const rows = parseRows(letterCount, expectedCount);

    return (
        <div className="display-letters">
            <Box 
            sx={{
                height: 600, width: "60%", margin: "auto",
                '& .super-app.zero': {
                    backgroundColor: '#aaa'
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
                pageSize={26}
                rowsPerPageOptions={[26]}
                disableSelectionOnClick
                hideFooter
                />
                <p>Expected letters calculated from <a href="http://pi.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html">Cornell University Frequency Table</a>.</p>
                <h3>String Entered</h3>
                <p>{inputString}</p>
            </Box>
        
        </div> 
        );
}
 
export default DisplayLetters;