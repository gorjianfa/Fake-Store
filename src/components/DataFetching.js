import React , {useState,useEffect} from 'react'
import axios from 'axios'
import trashImg from "../assets/image/trash.svg";

function DataFetching() {

    function handleRemove(id) {
        const newList = posts.filter((post) => post.id !== id);
    
        setposts(newList);
      }


    const[posts,setposts]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res)
            setposts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
  return (
    <div>
      <ul>
        {posts.map(post=>(<div key={post.id}>
            <div className='card w-75  margin-l  margin-b p-3 ' >
          <div className='d-flex flex-column '>
         
          <span className='h3'>{post.title}</span>
          <p className='h6'>{post.description}</p>
          <div className="d-flex">   <span className='h6'>{post.price} تومان</span>
           <img src={trashImg} alt="" className="btn"  onClick={() => handleRemove(post.id)} />
            </div> 
          </div>
             
            
            </div>
        </div>))}
      </ul>
    </div>
  )
}

export default DataFetching
