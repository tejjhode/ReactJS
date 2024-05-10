import { useEffect,useState } from "react";

function planetInfo(planet){
    let name=planet;
    const[data,setData]=useState({})
    useEffect(()=>{
        fetch('https://api.api-ninjas.com/v1/planets?name=' + name)
        .then((res)=>res.json())
        .then((res)=> setData(res[planet]))
    },[planet])
    return data;
}
export default planetInfo