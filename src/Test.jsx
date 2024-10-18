import { useEffect, useMemo, useRef, useState } from 'react'
import styles from './Test.module.scss'
const Test = () => {
  const [counter, setCounter] = useState(0)
  const [step, setStep] = useState('')
  const myRef = useRef()
  const [calcValue, setCalcValue] = useState(1)

  const calculateSmth = (value) => {
    for(let i = 0; i < 1000000000; i++) {
      console.log('calc');
      return value*2
    }
  }
  const myResult = useMemo(() => calculateSmth(calcValue), [calcValue])


useEffect(() => {
  console.log('componentDidMount');
  myRef.current.focus()
  
  
}, [])

  const handleChangeStep = (e) => {
    setStep(+ e.target.value)
    
    

  }
  const handleIncrement = () => {
    setCounter(prev => prev + step)
    

  }
  const handleDecrement = () => {
    setCounter(prev => prev - step)
  }
  const handleReset = () => {
    setCounter(0)
    setStep(0)
    myRef.current.focus()
  }

  

  return (
    <div className={styles.testContainer} >
      <h1 onClick={() => setCalcValue(prev => prev + 1)} >Res: {myResult}</h1>
      <input ref={myRef}  placeholder='change step' value={step} onChange={handleChangeStep}/>
      <h2>{counter}</h2>
      <div>
        <button onClick={handleDecrement}>minus</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleIncrement}>plus</button>
      </div>
    </div>
  )
}

export default Test