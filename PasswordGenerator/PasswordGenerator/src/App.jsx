import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [ length , setLength ] = useState(8)
  const [ numberAllowed , setNumberAllowed ] = useState(false)
  const [ charAllowed , setCharAllowed ] = useState(false)
  const [ password , setPassword ] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "01234567890"
    if(charAllowed) str += "!@#$%^&*()_+{|:"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [ length, numberAllowed, charAllowed, setPassword])

  const copyToClip = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText([password])
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const passRef = useRef(null);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600'>
        <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyToClip}>Copy </button>
        </div>
        <div className='flex pt-4 gap-x-2 text-white'>
          <div className='flex item-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className=' cursor-pointer ' onChange={(e)=>{setLength(e.target.value)}}/>
            <label> Length : {length}</label>
          </div>
          <div className='flex item-center gap-x-2'>
            <input type="checkbox" defaultChecked={charAllowed} id='characterInput'  onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
            <label htmlFor="characterInput">Character</label>
          </div>
          <div className='flex item-center gap-x-2'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput'  onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
            <label htmlFor="numberInput">Number</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
