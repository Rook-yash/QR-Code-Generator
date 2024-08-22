import React from 'react';

export default function Sizing(props){
    return(
        <div className='sizee'>
            <form className='sizee1'>
                <p>Size</p>
                <p className='grey-text range-size'>{props.value.size} x {props.value.size}</p>
                <input 
                    type='range' 
                    className='range-adjust' 
                    id = 'bcc'
                    min={100} 
                    max={450} 
                    step={10}
                    name='size' 
                    value = {props.value.size} 
                    onChange={props.fun}  
                />
            </form>
            <form className='sizee1'>
                <p>Margin</p>
                <p className='grey-text range-size'>{props.value.margin}px</p>
                <input 
                    type='range' 
                    className='range-adjust' 
                    min={1} 
                    max={100} 
                    step={1}
                    name='margin' 
                    value = {props.value.margin} 
                    onChange={props.fun}    
                />
            </form>
        </div>
    )
}