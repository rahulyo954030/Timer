import React from 'react'
import "./Timer.css"
import { useEffect } from 'react'
import { useState } from 'react'


const Timer = () => {

    const [seconds,setSeconds] = useState(0)
    const [mins,setMins] = useState(0)

    var timer;

    useEffect(()=>{
        timer = setInterval(()=>{
            setSeconds(seconds+1)

            if(seconds==59){
                setMins(mins+1)
                setSeconds(0)
            }

        },1000)
        return ()=> clearInterval(timer)
    })
    const restart =()=>{
        setMins(0)
        setSeconds(0)
    }
    const stop =()=>{
        clearInterval(timer)
    }
   
  return (
    <div className='container'>
        <div className='timer'>
        <div >{mins<10?"0"+mins:mins} : {seconds<10?"0"+seconds:seconds}</div>
        <div>
            <button onClick={restart}>Restart</button>
            <button onClick={stop}>Stop</button>
        </div>
        </div>
    </div>
  )
}

export default Timer