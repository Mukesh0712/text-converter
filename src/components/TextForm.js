import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const addText = (e) => {
        setText(e.target.value);
    }

    const toUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const toLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }


    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea value={text} onChange={addText} className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button className="btn btn-primary" onClick={toUppercase}>Covert to Uppercase</button>
                <button className="btn btn-primary mx-4" onClick={toLowercase}>Covert to Lowercase</button>
            </div>

            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2 className="my-3">Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
