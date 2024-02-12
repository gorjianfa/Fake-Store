import React, { useState, useEffect } from "react";
import axios from "axios";
import trashImg from "../assets/image/trash.svg";

const App = () => {
  

  const [posts, setposts] = useState([]);
  
  
   
    
//useEffect(()=>{
  //axios.delete('https://fakestoreapi.com/products/6',{
  //  method:"DELETE"
//}).then((res)=>{console.log(res);setposts(res.data)}) .catch((err) => {console.log(err);});})



  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setposts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="flex-coulmn   bg-items max-width pt-3 ">
      {posts.map((post) => (
        <div key={post.id}>
          <div className="card w-75  margin-l  margin-b p-3 ">
            <div className="d-flex flex-column ">
              <span className="h3 ellipsis">{post.title}</span>
               <p className="h6 ellipsis ">{post.description}</p> 
              <div className="d-flex">
                {" "}
                <span className="h6">{post.price} $</span>
                <img
                  src={trashImg}
                  alt=""
                  className="btn"
                
               />  
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;
