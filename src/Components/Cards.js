import React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/cartProvider';


export default function MediaCard({data,setProd, onEdit}) {
    const user = JSON.parse(localStorage.getItem("user")); 
    console.log("Logged-in user from localStorage:", user);

 
  // console.log(data.data, 'data from props');
  // console.log(onEdit,'message')


const handleDelete = (id) => {
    const token = localStorage.getItem("token");
  // console.log("Deleting from backend:", id);
  fetch(`http://localhost:2000/product/${id}`, {
  method: 'DELETE',
   headers: {
      Authorization: `Bearer ${token}`,
    },
  credentials: 'include',

  })
    .then(response => response.json())
    .then(deletedItem => {
      const updatedList = data.filter(item => item._id !== id);
      setProd(updatedList);
      alert("Product deleted successfully");
    })
    
    .catch(error => {
      console.error("Delete failed", error);
      alert("Delete failed. You may not have admin permission.");
    });
    
};
 const { addToCart } = useCart();

console.log("Logged in user role:", user?.role);


  return (
    data.map((item,id) => {
  //    console.log("User ID:", user?._id);
  // console.log("Item Auth ID:", item.auth?._id);
  console.log("User ID:", user?.id || user?._id);
console.log("Item Auth ID:", item.auth?._id || item.auth);

      return (    
        
        <Card key={item._id} sx={{ maxWidth: 300, margin: 1, textAlign: 'center' ,border:'1px solid  #ccc',borderRadius: '10px',
            boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
            padding: '10px',display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'}}>
          
          <CardContent>
            <Typography variant="h5" component="div" sx={{overflow:'hidden',
             textOverflow:'ellipsis', 
             maxWidth:'216px', 
             height: '58px',
            display:'-webkit-box',
           webkitLineClamp:'2',
           WebkitBoxOrient: 'vertical'}}
           >
              {item.title}
            </Typography>
          </CardContent>

          {/* <CardMedia
            component="img"
            image={item.image}
            alt={item.title}
            sx={{
              height: 300,width: 'auto', marginLeft: 'auto',marginRight: 'auto' }}
          /> */}

          <img src={item.image} alt={item.title || "product image"}  style={{height:'150px' ,width:'150px' ,objectFit:'contain' ,display:'block',margin:'10px auto' }} >
          </img>

          <CardContent>
            <Typography variant="body1" color='green' fontSize='35px'>
              ₹{item.price}
            </Typography>
            <Typography variant="body2" color="black" sx={{marginBottom:1}}>
              {item.category}
            </Typography>
     
          <Link to={`/product/view/${item._id}`} style={{ textDecoration: 'none' }}>
              <button
                style={{
                  backgroundColor: "pink",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "8px 12px",
                  width: "100%",
                  marginBottom: "10px",
                  cursor: "pointer"
                }}
              >
                View Product
              </button>
</Link>

          </CardContent>
         
          <button
  style={{
    backgroundColor: "#C2185B",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "8px 12px",
    width: "100%",
    marginBottom: "10px",
    cursor: "pointer",
  }}
  onClick={() => addToCart(item)}
>
  Add to Cart
</button>
 
         <div style={{ display: 'flex', gap: '10px', padding: '0 10px 10px 10px', justifyContent: 'center' }}>
          
{(user?.role === "admin" || String(user?.id) === String(item.auth?._id || item.auth))&& (
  <button
    style={{
      backgroundColor: "red",
      color: "white",
      border: "none",
      flex: 1,
      padding: '8px 0',
      borderRadius: '4px'
    }}
    onClick={()=>handleDelete(item._id)}

  >
    
    Delete
  </button>
)}
{(user?.role === "admin" || String(user?.id) === String(item.auth?._id || item.auth))&& (
  <button
    style={{
      backgroundColor: "green",
      color: "white",
      border: "none",
      flex: 1,
      padding: '8px 0',
      borderRadius: '4px'
    }} 
    onClick={() => onEdit(item)}
  >
    Edit
  </button>
    )}
    
</div>
        </Card>
        
      );
    })
  );
}



// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard( data ) {
//       console.log(data.data,'data from props')
//   return (
//     data.data.length > 0 && (
//         data.data.map((item,index) => {

//             console.log(item,"items")
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{height: 300, width: 200 }}
//         image={item.image}
//       />
//       <CardContent>
//         <Typography>
//             {item.title}
//         </Typography>
        
//          <Typography>
//             {item.price}
//         </Typography>
//          <Typography>
//             {item.category}
//         </Typography>
//       </CardContent>

//     </Card>
//         )
// })
//     )
//   );
// }