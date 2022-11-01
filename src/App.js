import userEvent from '@testing-library/user-event'
import react,{useState,useEffect} from 'react'

function App(){
  const [data,setData] = useState({
    name:'',
    number:'',
    count:0,
    checkin:'',
    checkout:''
  })


  // const {name,number}=dat
  function setme(){
      data.checkin = new Date().toLocaleTimeString()
  }
  const changeHandler = e =>{
      
      setData({...data,[e.target.name]:e.target.value}) 
  }
  const submitHandler = e =>{
    alert('vehicle details are added successfully....')
    e.preventDefault();
    data.count+=1
    var today = new Date().toLocaleTimeString()
    data.checkout = today
    console.log(data) 
  }
  useEffect(
    ()=>{
      setme();
    },[submitHandler]
  )

  return(
    <div align="center" >
      <h1  >Parking app</h1>
      {/* <h3>This is count {data}</h3> */}
      
        <label>Enter the number (number plate) : </label><br/><br/>
        <input type="text" name="number"  onChange={changeHandler} required></input><br/><br/>
        <label>Enter the driver name : </label><br/><br/>
        <input type="text" name="name" onChange={changeHandler} required></input><br/><br/> 
        <button onClick={submitHandler}>Submit details</button>  
        <h4 >Count is : {data.count}</h4>
        
        <h4>Last checkin time : {data.checkin} <br/> Last checkout time : {data.checkout}</h4>
    </div>
  )
}
export default App