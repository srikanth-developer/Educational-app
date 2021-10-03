import React, { useEffect, useState } from 'react'
import EducationalForm from './EducationalForm'
import EducationalTable from './EducationalTable'

function EducationalComponent() {
    const [employedata, setemployedata] = useState({
        Institution:'',
        Course:'',
        PassingYear:'',
        Percentage:''
    })
    const [show, setshow] = useState(false)
 /*    const [showtype, setshowtype] = useState({
        add:false,
        edit:false
    }) */
    //function created in parent
    const getModal=(input)=>{
        if(input){
            console.log('inside true',input);
            setshow(input)
        }
        else{
            console.log('inside false',input);
            setshow(input)
            
        }
        
      }
      
     
    return (
        <div>
            <EducationalTable data={()=>getModal(true)}/>
        <EducationalForm show={show}  data={()=>getModal(false)}/>
        </div>
    )
}

export default EducationalComponent
