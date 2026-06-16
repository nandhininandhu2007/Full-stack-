import React, { useEffect } from 'react'

const Effects = () => {
    const [count,setCount]=useState(0);

    //useEffect(callBack function,dependency array);
    //useEffect(()=>{ },[]);

    useEffect(()=>{
        console.log("component Re-render")
    },[count])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.jeson())
        .then((users)=>setData(users))
    },[])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <h1>{like}</h1>
      <button onClick={()=>setLike(like+1)}>❤️</button>
    </div>
  )
}

export default Effects
