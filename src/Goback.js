import React from 'react';

export default function Goback(props){
    props.value.text = ''
    return(
        <button 
            className='generate-button'
            name='generate'
            onClick={props.fun}
            value={props.value.generate}
        >
            Go back
        </button>
    )
}