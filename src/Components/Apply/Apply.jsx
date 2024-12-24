import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../LocalStorage/LocalStorage";
import { useLoaderData } from "react-router-dom";
import Appliedjobs from "./Appliedjobs";


const Apply = () => {
    const values=useLoaderData()
    const[localdata,setLocalData]=useState([])
    console.log(localdata)
   
    useEffect(()=>{
        const data=getDataFromLocalStorage()
        const emptyArray=[]
       for(const da of data){
        const filterData= values.find(value=>value._id===da)
        emptyArray.push(filterData)
       }
       setLocalData(emptyArray)
         

        
    
    },[])
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-center mt-20 font-bold text-4xl border border-b-indigo-500 shadow-lg bg-gradient-to-r from-indigo-500 text-white py-3 rounded-xl">Applied Jobs</h2>
            <div>
                {
                    localdata.map(local=><Appliedjobs key={local._id} local={local}></Appliedjobs>)
                }
            </div>
            
        </div>
    );
};

export default Apply;