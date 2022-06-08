import React, { useEffect, useState } from 'react';

const UseEffact = () => {

    const [image, setImage] = useState(null);

    useEffect(()=>{

        fetch("https://dog.ceo/api/breeds/image/rendom").then(Response => Response.json())
        .then(data => data.message)
       
    },[])
  return (
    <div>
       {image && <img src={image} alt=""></img>}
    </div>
  )
}

export default UseEffact;