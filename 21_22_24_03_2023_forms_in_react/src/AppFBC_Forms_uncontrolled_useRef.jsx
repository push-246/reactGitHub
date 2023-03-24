//uncontrolled forms using function based useref
import React ,{useRef} from 'react'

const App = () => {
    let userRef = useRef();
    let passRef = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(userRef.current.value , passRef.current.value);
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder='USERNAME' ref={userRef}/>
        <br />
        <input type="text" name="" id="" placeholder='PASSWORD' ref={passRef}/>
        <br />
        <button>SUBMIT</button>
    </form>
  )
}

export default App