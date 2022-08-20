import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/system";

const DisplayLetters = ({inputString, letterCount, expectedCount}) => {   
    const rowClass = (observed, expected) => {
        const relativeError = (observed - expected) / expected;
        if (observed === 0) {
            return("zero")
        }
        else if (relativeError > 0.05) {
            return ("greater")
        }
        else if (relativeError < -0.05) {
            return ("less")
        }
        else {
            return ("equal")
        }
    } 

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
        { field: 'percentDifference', headerName: 'Percent Difference (%)', type: 'number', flex: 1}
    ];

    const rows = parseRows(letterCount, expectedCount);

    console.log(rows);
    console.log(columns);

    return (
        <div className="display-letters">
            <Box sx={{height: 600, width: "60%", margin: "auto"}}>
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


    // return (
    // <div className="display-letters">
    //     <h4> <span className="greater">Green:</span> more than 105% of expected</h4>
    //     <h4> <span className="less">Red:</span> less than 95% of expected</h4>
    //     <h4> <span className="equal">Light Gray:</span> close to expected</h4>
    //     <h4> <span className="zero">Dark Gray:</span> no observed instances of this letter</h4>
    //     <table>
    //         <thead>
    //             <tr>
    //                 <th>Letter</th>
    //                 <th>Count</th>
    //                 <th>Expected Count</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {
    //             Object.keys(letterCount).map((letter) => (
    //                 <tr className={rowClass(letterCount[letter], expectedCount[letter])} key={letter}>
    //                     <td>{letter}</td>
    //                     <td>{letterCount[letter]}</td>
    //                     <td>{expectedCount[letter].toFixed(2)}</td>
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>
    //     <p>Expected letters calculated from <a href="http://pi.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html">Cornell University Frequency Table</a>.</p>
    //     <h3>String Entered</h3>
    //     <p>{inputString}</p>
    
    // </div> 
    // );
}
 
export default DisplayLetters;