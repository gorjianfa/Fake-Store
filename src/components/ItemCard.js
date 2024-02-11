
import React from "react"; 
import trashImg from "../assets/image/trash.svg";
import laptop1 from "../assets/image/1.webp";
import laptop2 from "../assets/image/2.webp";
import laptop3 from "../assets/image/3.webp";
import laptop4 from "../assets/image/4.webp";
import laptop5 from "../assets/image/5.webp";
import laptop6 from "../assets/image/6.webp";
import laptop7 from "../assets/image/7.webp";
import laptop8 from "../assets/image/8.webp";
import laptop9 from "../assets/image/9.webp";



const initialList = [
    {
        title: 'لپ تاپ 15.6 اینچی لنوو مدل V15 G2 IJL-Celeron N4500 8GB 512SSD - کاستومشده',
         price: '12.399.000',
        img: laptop1, description: '',
        category: '', id: '0',
      },
      {
        title: 'لپ تاپ 15.6 اینچی لنوو مدل ThinkBook 15 G4 IAP-i5 1235U 8GB 512SSD MX550',
        price: '27.500.000 ',
       img: laptop2, description: '',
       category: '', id: '1',
      },
      {
        title: 'لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550',
        price: ' 29.670.000',
       img: laptop9, description: '',
       category: '', id: '2',
      },
       {
        title: 'لپ تاپ 13 اینچی اپل مدل MacBook Air MGND3 2020',
        price: '44.700.000',
       img:laptop3 , description: '',
       category: '', id: '3',
      },
       {
        title: 'لپ تاپ 15.6 اینچی لنوو مدل LOQ 15IRH8-i5 12450H 8GB 512SSD RTX2050',
        price: '32.800.000 ',
       img: laptop4, description: '',
       category: '', id: '4',
      },
       {
        title: 'لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HC-i5 11400H 16GB 512SSD RTX3050 - کاستوم شده',
        price: '44.000.000',
       img: laptop5, description: '',
       category: '', id: '5',
      }, 
      {
        title: 'لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Slim 3 15IRH8-i5 8GB 512SSD',
        price: '23.400.000',
       img: laptop6, description: '',
       category: '', id: '6',
      },
       {
        title: 'لپ تاپ 16 اینچی ایسوس مدل Vivobook 16 R1605ZA-MB117-i5 1235U 8GB 512SSD',
        price: '27.500.000',
       img: laptop7, description: '',
       category: '', id: '7',
      },
       {
        title: 'لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Gaming 3 15IHU6-i5 8GB 512SSD RTX2050',
        price: '31.600.000',
       img: laptop8, description: '',
       category: '', id: '8',
      },{
        title: 'لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HC-i5 11400H 16GB 512SSD RTX3050 - کاستوم شده',
        price: '44.000.000',
       img: laptop9, description: '',
       category: '', id: '9',
      }, 
  ];
const App = () => {
    const getOut =()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
    }




    const [list, setList] = React.useState(initialList);
  
    function handleRemove(id) {
      const newList = list.filter((item) => item.id !== id);
  
      setList(newList);
    }
  
    return (
      <div className="flex-coulmn  bg-items">
        {list.map(function(item)  {
            return(
          
            <div className='card w-50 d-flex justify-content-center m-1 p-3 ' onClick={getOut}>
          <div className='d-flex flex-column '>
            <img src={item.img}  className='img d-flex justify-content-center'/>
          <span className='h5'>{item.title}</span>
          <div className="">   <span className='h6'>{item.price} تومان</span>
           <img src={trashImg} alt="" className="btn"  onClick={() => handleRemove(item.id)} />
            </div> 
          </div>
             
            
            </div>
          
     ) })}
      </div>
    );
  };
  export default App;