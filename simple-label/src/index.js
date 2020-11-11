import React from 'react';
import ReactDOM from 'react-dom';

const labelName = "Password";

const App = () => {
    const buttonStyle = { backgroundColor: 'blue', color: 'white' };
    return (
        <>
            <label className="label" for="password">{labelName}</label>
            <input id="password" type="password"></input>
            <button style={buttonStyle}>Submit</button>
        </>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));