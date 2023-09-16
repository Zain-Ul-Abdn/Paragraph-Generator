import React from 'react'
import './main.css'
import { useState } from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';

export default function main() {
    
    function handleGenerate() {
        let para = document.querySelector(".para-input")
        let cpybtn = document.querySelector('.copy')
        if(para.value > 0){

            setText(< LoremIpsum p={para.value} />);
            cpybtn.classList.remove('d-none')
            
        }
        else{
            cpybtn.classList.add('d-none')
            setText('Dummy Text Goes Here')
            return;
        }
    }

    function handleCopy() {
        let content = document.querySelector('.content')
        navigator.clipboard.writeText(content.innerHTML)
    }

    const [text, setText] = new useState("Dummy Text Goes Here");

    return (
        <div className='container my-5 p-3 '>
            <input type="number" className='form-control para-input d-inline' placeholder='Number Of Paragraph' />
            <button onClick={handleGenerate} className='generate btn bg-primary mx-sm-3'>Generate</button>
            <div className="card bg-primary">
                <button onClick={handleCopy} type="button" className=" copy btn btn-outline-info d-none"><i className="fa-sharp fa-regular fa-copy"></i></button>
                <div className="content card-body">
                    {text}
                </div>
            </div>


        </div>
    )
}

