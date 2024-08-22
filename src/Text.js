import React from 'react';

export default function Text(props){
    return(
        <div className='text-url'>
            <p className='light-black'>Text / URL</p>
            <p className='grey-text'>Include text or a URL you want the QR code to lead to</p>
            <input 
                type='text' 
                className='input-url' 
                onChange={props.fun}
                name = 'text'
                // value = {props.data.text}
            />    
        </div>
    )
}

