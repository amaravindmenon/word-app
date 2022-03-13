import React, { useState } from 'react'

function Form() {
    const onhandler = (e) => {
        setText(e.target.value);
        // console.log(e.target.value)
    }

    const toUpper = () => {
        console.log(text.toUpperCase())
        setText(text.toUpperCase())
    }
    const toLower = () => {
        console.log(text.toLowerCase())
        setText(text.toLowerCase())
    }
    const toTitleCase = () => {
        setText(text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '));
    };

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>Enter text To Change </h1></label>
                    <textarea className="form-control" value={text} onChange={onhandler} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <div className="container" >
                <button type="button" onClick={toUpper} className="btn btn-primary mx-3">UpperCase</button>
                <button type="button" onClick={toLower} className="btn btn-primary mx-3">LowerCase</button>
                <button type="button" onClick={toTitleCase} className="btn btn-primary mx-3">Capitalize 1st word</button>
                <h3>Word Counts</h3>
                <h4>{text.length} letters and {text.split(' ').length - 1} words</h4>

            </div>

        </>
    )
}

export default Form