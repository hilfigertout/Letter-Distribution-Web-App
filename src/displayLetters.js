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

    return (
    <div className="display-letters">
        <h4> <span className="greater">Green:</span> more than 105% of expected</h4>
        <h4> <span className="less">Red:</span> less than 95% of expected</h4>
        <h4> <span className="equal">Light Gray:</span> close to expected</h4>
        <h4> <span className="zero">Dark Gray:</span> no observed instances of this letter</h4>
        <table>
            <thead>
                <tr>
                    <th>Letter</th>
                    <th>Count</th>
                    <th>Expected Count</th>
                </tr>
            </thead>
            <tbody>
                {
                Object.keys(letterCount).map((letter) => (
                    <tr className={rowClass(letterCount[letter], expectedCount[letter])} key={letter}>
                        <td>{letter}</td>
                        <td>{letterCount[letter]}</td>
                        <td>{expectedCount[letter].toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <p>Expected letters calculated from <a href="http://pi.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html">Cornell University Frequency Table</a>.</p>
        <h3>String Entered</h3>
        <p>{inputString}</p>
    
    </div> 
    );
}
 
export default DisplayLetters;