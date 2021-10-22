import React,{Fragment,useEffect,useState} from 'react';
import List from './List';

const Data =({link,search}) =>
{
    const [datas,setdata]=useState([]);
    const [result,setresult] = useState('');
    const [open,setopen] = useState(false);
    
    

    
    const getadata = async () =>
    {
        try {
                
            const res = await fetch(`https://newsportalfordatascience.herokuapp.com/feeds/${link}`)
            const jsondata = await res.json();
            if(search!= "")
            {
             var d = jsondata.filter(checkdata);
             
             function checkdata(e)
             {
                return Object.values(e).join(" ").toLowerCase().includes(search.toLowerCase());
             }
            
            setdata(d)
            if(d=="")
            {
             setresult("RESULT NOT FOUND");
            
            }else
            {
                setresult("RESULT FOR "+search);
            }
            setopen(true);
            }else{
                setdata(jsondata);
                setopen(false);
            }
             
        } catch (error) {
    console.log(error.message)
        }
    }
    useEffect(()=>
    {
        getadata();
    })
    return (
         <Fragment className="bg-black">
               <div className = {`font-black text-lg w-screen ${(result=="RESULT NOT FOUND") ? "h-screen":"h-auto"} ${open ? "block":"hidden"}`} >
                   {result}
                </div>
                <br>
                </br>

            {datas.map(data =>(
              <List  title={data['title']} des={data['description']} link={data['link']} src = {data['src']}/>
              
            ))}
        
                     
            
         </Fragment>
    );
}
export default Data;
