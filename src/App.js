import React from 'react';
import Choosing from './Choosing'
import Text from './Text'
import Sizing from './Sizing' 
import Format from './Format'
import Generate from './Generate'
import Goback from './Goback'

export default function App(){
    const [data , setData] = React.useState(
        { 
            text : '' , 
            main_color : '#000000' ,
            back_color : '#ffffff' , 
            size : 200 , 
            margin : 5 , 
            format : 'PNG' , 
            generate : false,
            url : ''
        }
    )
    function change(event){
        console.log(typeof(event.target.name))
        setData((prev) => {
            return{
                ...prev ,
                [event.target.name] : event.target.name === "generate" ? !prev.generate : event.target.value
            }
        })
    }
    React.useEffect(() => {
        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${data.size}x${data.size}&data=${data.text ? data.text : 'Example'}&margin=${data.margin}&format=${data.format}&color=${data.main_color.substring(1)}&bgcolor=${data.back_color.substring(1)}`)
        .then((prev) => {data.url = prev.url})
    },[data])

    console.log(data.back_color)
    
    if(!data.generate){
        return(
            <div className='main'>
                <h1 className='generate'>Generate your QR Code</h1>
                <p className='grey-text size bc'>Adjust the settings below to make your QR code look as you want</p>
                
                <Text 
                    fun = {change}
                    value = {data}
                />
    
                <Choosing 
                    fun = {change}
                    value  ={data}
                />
    
                <Sizing 
                    fun = {change}
                    value = {data}
                />
                
                <p className='light-black image'>Image Format</p>
                
                <Format 
                    fun = {change}
                    value = {data}
                />
                
                <Generate 
                    fun = {change}
                    value = {data}
                />
            </div>
        )
    }
    else{
        if(data.text){
            return(
                <div className='main'>
                    <h1 className='generate'>Your QR Code is ready!</h1>
                    <p className='grey-text'>Scan this image to see it in action</p>
    
                    <img
                        src= {data.url}
                    />
    
                    <p className='grey-text save'>Right click on the image and select <strong className='strong'>"Save image As"</strong> to download the file</p>
                    <p className='grey-text'>Or need to make some changes?</p>
    
                    < Goback 
                        fun = {change}
                        value = {data}
                    />
                </div>
            )
        }
        else{
            data.generate = false ;
            return(
                <div className='main'>
                    <h1 className='generate'>Generate your QR Code</h1>
                    <p className='grey-text size bc'>Adjust the settings below to make your QR code look as you want</p>
                    
                    <Text 
                        fun = {change}
                        value = {data}
                    />
        
                    <Choosing 
                        fun = {change}
                        value  ={data}
                    />
        
                    <Sizing 
                        fun = {change}
                        value = {data}
                    />
                    
                    <p className='light-black image'>Image Format</p>
                    
                    <Format 
                        fun = {change}
                        value = {data}
                    />
                    
                    <Generate 
                        fun = {change}
                        value = {data}
                    />
                    <div className='warnings'>
                        <p className='red'>*Please include text or a URL</p>
                        <p className='grey-text'>*You can also customize the colors by clicking on the color palette</p>
                    </div>
                </div>
            )
        }
    }
    
}