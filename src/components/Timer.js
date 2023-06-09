import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';


export default function Timer() {

  const [min, setMin] = useState(25);
  const [sec, setSec] = useState(0);
  const time = useRef(1500); // min * 60
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000)

    return () => clearInterval(timerId.current);
  }, [])

  useEffect(() => {
    if(time.current <= 0) {
      console.log('타이머 종료');
      clearInterval(timerId.current);
    }
  }, [sec])

  const startTimer = () =>{
    console.log('start')
  }
  const resetTimer = () =>{
    console.log('reset')
  }

  return(
    <>
    <div>25분 동안 중요한 할일을 끝내보세요!</div>
    <div>{min}:{sec}</div>

    <div>
      <form>
        <input type='text' value='분' onChange={min}></input>
        <input type='text' value='초' onChange={sec}></input>
        <input type='button' value='start' onClick={startTimer}></input>
        <input type='button' value='reset' onClick={resetTimer}></input>
      </form>
      <div>{min} 분 {sec} 초 남음</div>
    </div>
    </>
  )
}