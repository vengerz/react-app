import {useState} from 'react'
function ButtonCompo() {
    function clickAlert(){
        alert("Alert Msg")
    }
    const[count , setCount] = useState(0);
    function addCount(){
        setCount(count + 1)
    }
    function reduceCount(){
        setCount(count - 1)
    }
  return (
    <>
    <div>ButtonComponent</div>
    <button onClick={clickAlert}>Click</button>
    <button onClick={addCount}>เพิ่ม</button>
    <button onClick={reduceCount}>ลบ</button>
    <div>{count}</div>
    </>
  )
}

export default ButtonCompo