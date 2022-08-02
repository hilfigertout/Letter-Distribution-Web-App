const DisplayLetters = ({inputString, letterCount, expectedCount}) => {    

    return (
    <div className="display-letters">
        <table>
            <tr>
                <th>Letter</th>
                <th>Count</th>
                <th>Expected Count</th>
            </tr>
            {
            Object.keys(letterCount).map((letter) => (
                <tr>
                    <td>{letter}</td>
                    <td>{letterCount[letter]}</td>
                    <td>{expectedCount[letter].toFixed(2)}</td>
                </tr>
            ))}
        </table>
        <p>Expected letters calculated from <a href="http://pi.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html">Cornell University Frequency Table</a>.</p>
        <h3>String Entered</h3>
        <p>{inputString}</p>
    
    </div> 
    );
}
 
export default DisplayLetters;