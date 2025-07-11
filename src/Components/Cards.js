
import react, { useEffect } from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function MediaCard({data,setProd, onEdit}) {
 
  console.log(data.data, 'data from props');
  console.log(onEdit,'message')

  // useEffect(() => {
  //   if ( data.data && data.data.length > 0){
  //     setProd(data.data)
  //   }
  // },[data.data])

  const handleDelete =(id) =>{
    console.log("btn clicked" ,id);
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(deletedItem => {
       console.log(data)
    const updateList = data.filter(item => item.id !== id);
    setProd (prevList => prevList.filter(item => item.id !== id));    
  })
  .catch(error =>{
    console.log("delete failed",error);
  });

};


  return (
    data.map((item,id) => {
   
      return (    
        
        <Card key={item.id} sx={{ maxWidth: 300, margin: 2, textAlign: 'center' ,border:'1px solid  #ccc',borderRadius: '10px',
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

          <img src={item.image} style={{height:'150px' ,width:'150px' ,objectFit:'contain' ,display:'block',margin:'10px auto' }} >
          </img>

          <CardContent>
            <Typography variant="body1" color='green' fontSize='35px'>
              ₹{item.price}
            </Typography>
            <Typography variant="body2" color="black" sx={{marginBottom:1}}>
              {item.category}
            </Typography>
     
          <Link to={`/product/view/${item.id}`} style={{ textDecoration: 'none' }}>
              <button
                style={{
                  backgroundColor: "blue",
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
 
         <div style={{ display: 'flex', gap: '10px', padding: '0 10px 10px 10px', justifyContent: 'center' }}>

  <button
    style={{
      backgroundColor: "red",
      color: "white",
      border: "none",
      flex: 1,
      padding: '8px 0',
      borderRadius: '4px'
    }}
    onClick={()=>handleDelete(item.id)}

  >
    Delete
  </button>
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