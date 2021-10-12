import React from 'react';

const List =({title,link,src,des})=>
{
    return (
        <>
       
       
        <div className="  p-5 sm:p-6 sm:m-8 ">
        <div className=" w-full sm:w-2/3 shadow-md bg-gray-50 pr-2 ... flex-col ...  cursor-pointer bg-cover bg-center rounded hover:shadow-2xl   md:h-full md: w-3/4 md: pl-8 ...md: pr-4 ...">
            <a href={link} target="_blank" rel="noopener noreferrer">
           <div className = "pt-6 ....  text-sm sm:text-lg font-black text-justify	" > <h3>{title}</h3> </div>
            <div className=" md:flex md:space-x-4 ... p-4 ">
            <div className = "pr-4 ..."> <img srcset={src} className=" text-center object-none h-28 w-full ... md:h-32 md:w-32" alt="image not found"/></div>  
            <div className = "md:w-full hidden md:block"><p>{des}</p></div>
          
            </div>
            </a>
        </div>
        </div>
        
        </>
    );
}
export default List;