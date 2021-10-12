import React,{Fragment,useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Data from './Data';
import { Tab,Transition,Dialog} from '@headlessui/react';
import axios from 'axios';



const Nav = ()=>
{ 
  const [search,setSearch] = useState('');
  const [search_data,setData] = useState('');
  const [email,setemail]=useState('');
  const[data,setdata] = useState(["data","ml","cc","ai","dl","iot"])
  const [index,setIndex] = useState(0);
  const [side,setside]=useState(false);
  const [close,setclose]=useState(true);
  const [exist,setexist] = useState('');
       
   const em = (e) =>
       {
           setemail(e.target.value);
           
                    
        } 
  
  
        const sch = (e) =>
        { if(e.target.value == "")
           {
                setData('');
          }
          setSearch(e.target.value);
        } 

              function set ()
              {
                  setside(!side);
                  setData(search);
                
              }
              const idex = (e) =>
              {
                setside(!side);
                setSearch('');
                setIndex(e.target.value);
                console.log(e.target.value);
              }
              const s = ()=>
              {
                setSearch('');
                setData('');
              }
              
              const cl = ()=>
              {
                setclose(false);
              }
              const sumit =async(e)=>
              {
                      e.preventDefault();
                      
                      try{
                      const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ title: email })
                    };
                   const res = await fetch('http://localhost:5000/email_id', requestOptions);
                   const jsondata = await res.json();
                  setexist(jsondata);
                  if(jsondata=="exist")
                  {
                      
                  }else{
                    setclose(false);
                  }
                 
                  }
                  catch(error)
                  {
                      console.log(error.message);
                  }
                 
                  
              }
 
    return(
        <> 
        <div className="  block xl:hidden bg-gray-900  p-2 transition duration-300 ease-in-out ">
            <div className=" h-full p-2 space-x-4 ...  pr-8 ... ">
                      <div className="text-3xl font-semibold  ">
                        <span className="text-red-600">D</span>
                        <span className="text-blue-600">S</span>
                           <div className="float-right ...">
                              <button className=" focus:outline  " onClick={set}>
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                             </svg> </button>
                       </div>
                    <span className="text-sm pl-2 ... text-white">   NEWS PORTAL </span>
              </div>
          </div>
            
    </div>
          
          
   <Tab.Group defaultIndex={0}>
            <div className="sticky top-0 ... hidden xl:block  transition duration-300 ease-in-out">
   
        <Tab.List className=" flex pt-1 ... pb-1 ... bg-gray-900 text-white shadow-lg h-full ">
              <Tab disabled>
                    <div className="float:left text-xl font-semibold pr-8 ... ">
                      <div className="text-3xl font-black  "><span className="text-red-600">D</span><span className="text-blue-600">S</span>
                      </div>
                      <span className="text-sm pl-2 ... text-white">   NEWS PORTAL </span>
                              </div>
                      </Tab>
                  
                    <div className="p-2 space-x-2 ...">
                        
                    
           <Tab as={Fragment}>
         {({ selected }) => (
           <button onClick={s}
             className={
               selected ? 'bg-gray-700 text-white rounded-md ' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md'
             }
           >
             <div><i className=" px-3 py-2 topnav-icons fa fa-home w3-left w3-bar-item w3-button text-white text-2xl pl-2 ... pr-3 ..." ></i></div>
           </button>
         )}
       </Tab>
       <Tab as={Fragment}>
         {({ selected }) => (
           <button onClick={s}
             className={
               selected ? 'bg-gray-700 text-white  rounded-md' : 'text-gray-300'
             }
           >
            <div className=" px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white">MACHINE LEARNING</div>
           </button>
         )}
       </Tab>
       <Tab as={Fragment}>
         {({ selected }) => (
            <button onClick={s}
            className={
              selected ? 'bg-gray-700 text-white  rounded-md' : 'text-gray-300'
            }
          >
           <div className=" px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white">CLOUD COMPUTING</div>
          </button>
         )}
       </Tab>
       <Tab as={Fragment}>
         {({ selected }) => (
           <button onClick={s}
           className={
             selected ? 'bg-gray-700 text-white  rounded-md' : 'text-gray-300'
           }
         >
          <div className=" px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white">ARTIFICIAL INTELLIGENCE</div>
         </button>
         )}
       </Tab>
       
       <Tab as={Fragment}>
         {({ selected }) => (
          <button onClick={s}
          className={
            selected ? 'bg-gray-700 text-white  rounded-md' : 'text-gray-300'
          }
        >
         <div className=" px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white">DEEP LEARNING</div>
        </button>
         )}
       </Tab>
       <Tab as={Fragment}>
         {({ selected }) => (
          <button onClick={s}
          className={
            selected ? 'bg-gray-700 text-white  rounded-md' : 'text-gray-300'
          }
        >
         <div className=" px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white">IOT</div>
        </button>
         )}
       </Tab>
         
       <div className="float-right pt-1 ... pl-8 ... ">
          <div className="border-2 border-black"> 
          

              <input type="text" onChange={(e) => sch(e)} value={search} className="px-5 py-2 outline-none text-black font-bold border-r-2 border-black  bg-white focus:bg-gray-100" placeholder="Search.." name="search"/>
                  <button onClick={set} type="submit" ><i className="fa fa-search bg-white text-black px-3 py-3 hover:bg-gray-600"></i></button>
            </div>
        </div>
           
         </div>
         
      
      
         
         
       </Tab.List>
       
      
       </div>
       
       <Tab.Panels>
       <div className=" flex ">
            <div className="fixed inset-y-0 left-0   top-0 transition duration-300 ease-in-out ">
                <Transition appear show={side} as={Fragment}>
                      <div className="  block xl:hidden  bg-gray-900 text-white h-full w-60 sm:w-68 space-y-6 py-7 px-1  inset-y-0 left-0 transform relative translate-x-0 transition duration-200 ease-in-out " >
                
                            <div className="   flex-cols space-x-4 ... text-base sm:text-xl font-semibold ">
                                <div className="pl-3 ...">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="  h-6 w-6 text-white" onClick={set} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                                    </svg> 
                                    </div>
                                    <div className="text-3xl font-semibold  "><span className="text-red-600">D</span><span className="text-blue-600">S</span>
                                  
                                    <span className=" text-xs  pl-2 ... text-white">   NEWS PORTAL </span>
                                  </div>
                </div>

                    
               
                 <nav className="text-sm sm:text-base  flex-cols  ">
                        <div className="bg-white flex h-8 w-45 items-center rounded-full shadow-xl"> 
          

                        <input type="text" onChange={(e) => sch(e)} value={search} className="rounded-l-full px-2  text-gray-700 leading-tight focus:outline-none" placeholder="Search.." name="search"/>
                        <div className="p-5 sm:p-2">

                        <button onClick={set} class="bg-white  rounded-full   focus:outline-none w-5 h-5 flex items-center justify-center">          
                                          <i className="fa fa-search text-gray-900 hover:text-gray-700 "></i></button>
                          </div>
                         </div>
               
                  <br></br>
                   
                   <li onClick={(e) => idex(e)} value="0" className={`hover:bg-gray-600 rounded px-4 py-2.5 cursor-default block ${(index==0) ? "bg-gray-600":""}`}>Home</li>
                   <li  onClick={(e) => idex(e)} value="1" className={`hover:bg-gray-600 rounded px-4 py-2.5 cursor-default block ${(index==1) ? "bg-gray-600":""}`}>MACHINE LEARNING</li> 
                   <li  onClick={(e) => idex(e)} value="2" className={`hover:bg-gray-600 rounded px-4 py-2.5 cursor-default block ${(index==2) ? "bg-gray-600":""}`}>CLOUD COMPUTING</li>  
                   <li  onClick={(e) => idex(e)} value="3" className={`hover:bg-gray-600 rounded px-4 py-2.5 cursor-default block ${(index==3) ? "bg-gray-600":""}`}>ARTIFICIAL INTELLIGENCE </li>     
                   <li  onClick={(e) => idex(e)} value="4" className={`hover:bg-gray-600 rounded px-4 py-2.5 cursor-default block ${(index==4) ? "bg-gray-600":""}`}>DEEP LEAARNING</li>   
                   <li  onClick={(e) => idex(e)} value="5" className={`hover:bg-gray-600 rounded px-4 py-2.5 cursor-default block ${(index==5) ? "bg-gray-600":""}`}>IOT</li>   
                 </nav>
                 </div>
                 </Transition></div>
           <div className= " pt-8 ...flex-1 bg-gray-200 hidden xl:block transition duration-300 ease-in-out">
             <Tab.Panel></Tab.Panel>
           <Tab.Panel><div className ="p-2"><Data link ="data" search={search_data} /></div></Tab.Panel>
           <Tab.Panel><div className ="p-2"><Data link ="ml"  search={search_data}/></div></Tab.Panel>
           <Tab.Panel><div className ="p-2"><Data link ="cc" search={search_data} /></div></Tab.Panel>
           <Tab.Panel><div className ="p-2"><Data link ="ai"  search={search_data}/></div></Tab.Panel>
           <Tab.Panel><div className ="p-2"><Data link ="dl" search={search_data}  /></div></Tab.Panel>
           <Tab.Panel><div className ="p-2"><Data link ="iot" search={search_data}/></div></Tab.Panel>
            </div>

           <div className ="p-2  pt-8 ...flex-1 bg-gray-200 block xl:hidden transition duration-300 ease-in-out">
             <Data link ={data[index]} search={search_data}/></div>

           </div>
           <Transition appear show={close} as={Fragment}>
                      <div className={` p-8 bg-gray-900 w-screen h-full sm:h-64 ... fixed bottom-0 ... `}>
                      <div>
                        <button onClick={cl}>
                        <svg xmlns="http://www.w3.org/2000/svg"  className="float-right rounded hover:bg-red-900 h-6 w-6 text-white cursor pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>   </button>
                          </div>
                          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 ">We’ve got more coming...</h1>
                          <p className="mb-8 sm:mb-10 leading-relaxed text-white">
                          Want to hear from us when we add new feed? Sign up for our portal and we'll email you every time we release a feed.
                          </p>
                          <form onSubmit={(e)=>sumit(e)}>
                          <div className="flex-cols sm:flex sm:space-x-4 ... sm:space-y-0 ... space-y-4 ...">
                              <div className="">
                                  <input type="email" value={email} onChange={(e)=>em(e)} className="block  px-3 py-2 sm:px-5 sm:py-3 sm:text-sm bg-gray-700 text-gray-200 rounded-lg placeholder-gray-400 focus:bg-white focus:text-gray-900 focus:outline-none" placeholder="Email address"/>
                                  
                                <div className={`${(exist=="exist")?"block text-red-600":"hidden"}`}>Email already exist</div>
                             
                              </div>
                              <div className="p-1 sm:p-0">
                              <div className="text-center w-48  sm:w-24 bg-blue-400 hover:text-blue-400 py-3  hover:bg-white  block text-sm font-semibold  rounded-lg text-white  focus:outline-none   ">     
                                  <button  className="pl-1 hover:text-blue-400" type="submit">Subscribe</button>
                            </div>
                            </div>    
                          </div>
                          </form>
                      </div>
                      </Transition>

           
          
           
         </Tab.Panels>
    
     </Tab.Group>
            
        
        
        </>
    );
}
export default Nav;
