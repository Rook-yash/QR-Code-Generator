import React from 'react';

export default function Format(props){
    return(
        <div className='all-buttons'>
            <div className='buttons-format'>
                <input 
                    type='radio' 
                    id='PNG'
                    name='format' 
                    value= 'PNG'  
                    onChange={props.fun}
                    checked = {props.value.format === 'PNG'}
                />
                <label htmlFor='PNG' className='lele'>PNG</label>
            </div>
            <div className='buttons-format'>
                <input 
                    type='radio' 
                    id='GIF'
                    name='format'
                    value= 'GIF'
                    onChange={props.fun}
                    checked = {props.value.format === 'GIF'}
                />
                <label htmlFor='GIF' className='lele'>GIF</label>
            </div>
            <div className='buttons-format'>
                <input 
                    type='radio' 
                    id='JPEG'
                    name='format'
                    value='JPEG'
                    onChange={props.fun}
                    checked = {props.value.format === 'JPEG'}
                />
                <label htmlFor='JPEG' className='lele'>JPEG</label>
            </div>
            <div className='buttons-format'>
                <input 
                    type='radio' 
                    id='JPG'
                    name='format'
                    value='JPG'
                    onChange={props.fun}
                    checked = {props.value.format === 'JPG'}
                />
                <label htmlFor='JPG' className='lele'>JPG</label>
            </div>
            <div className='buttons-format'>
                <input 
                    type='radio' 
                    id='SVG'
                    name='format'
                    value='SVG'
                    onChange={props.fun}
                    checked = {props.value.format === 'SVG'}
                />
                <label htmlFor='SVG' className='lele'>SVG</label>
            </div>
        </div>
    )
}