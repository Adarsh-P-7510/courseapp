import axios from 'axios'
import React, { useState } from 'react'

const AddCourse = () => {
    const [data,setdata]=useState(
        {
            "coursetitle":"",
            "coursedescription":"",
            "date":"",
            "duration":"",
            "venue":"",
            "trainer":""
            
        }
        
    )
    const inputhandler=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})}
        const readvalue=()=>{
            axios.post("http://localhost:8087/Addcourse",data).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("successful")
                    } else {
                        alert("error")
                        
                    }
                    
                }

            ).catch()
            
            
        }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">coursetitle</label>
                            <input type="text" className="form-control" name='coursetitle' value={data.coursetitle} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">coursedescription</label>
                            <input type="text" className="form-control" name='coursedescription' value={data.coursedescription} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">date</label>
                            <input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">duration</label>
                            <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">venue</label>
                            <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">trainer</label>
                            <input type="text" className="form-control" name='trainer' value={data.trainer} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readvalue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCourse