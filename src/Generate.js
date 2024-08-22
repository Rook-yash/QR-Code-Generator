import React from 'react'

export default function Generate(props){
    return(
        <button 
            className='generate-button'
            name='generate'
            value={props.value.generate}
            onClick={props.fun}
        >
            Generate QR Code
        </button>
    )
}