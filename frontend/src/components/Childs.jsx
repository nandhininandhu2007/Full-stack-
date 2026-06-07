import React from 'react'

const Childs = ({name,age,marks,person}) => {
  return (
    <>
    <div>{name}</div>
    <div>{age}</div>
    {marks.map((val,i)=>(
        <p key={i}>{`${i + 1} :${val}`}</p>
    ))}
    <div>
        <h1>User</h1>
        <p>Nme : {person.name}</p>
        <p>Department :
            {person.dept.map((v)=>(
                <>
                <b>{v}</b>
                <b>{" "}</b>
                </>
            ))}
        </p>
    </div>
    </>
  )
}

export default Childs




//import React from 'react'

//const Childs = (props) => {
// return (
// <>
// //<div>{props.name}</div>
// //<div>{props.age}</div>
// </>

//)
//}

//export default Childs
