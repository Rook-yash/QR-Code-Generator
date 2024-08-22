import React from 'react';

export default function Choosing(props){
    return(
        <div className='choosing'>
            <form className='color-sec'>
                <label htmlFor='choose-color' className='light-black'>Main Color</label>
                <input 
                    type='color' 
                    id='choose-color'
                    name = 'main_color'
                    value = {props.value.main_color}
                    onChange={props.fun}
                />
                <p className='grey-text'>{props.value.main_color}</p>
            </form>
            <form className='color-sec'>
                <label htmlFor='choose-color' className='light-black'>Background Color</label>
                <input 
                    type='color' 
                    id='choose-color'
                    name = 'back_color'
                    value = {props.value.back_color}
                    onChange={props.fun}
                />
                <p className='grey-text'>{props.value.back_color}</p>
            </form>
        </div>
    )
}