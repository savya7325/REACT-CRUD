// import * as React from 'react';
// import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import { useState,useEffect } from 'react';



// const CssTextField = styled(TextField)({
//   '& label.Mui-focused': {
//     color: '#A0AAB4',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: '#B2BAC2',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: '#E0E3E7',
//     },
//     '&:hover fieldset': {
//       borderColor: '#B2BAC2',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#6F7E8C',
//     },
//   },
// });

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   '& .MuiInputBase-input': {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: '#F3F6F9',
//     border: '1px solid',
//     borderColor: '#E0E3E7',
//     fontSize: 16,
//     width: 'auto',
//     padding: '10px 12px',
//     transition: theme.transitions.create([
//       'border-color',
//       'background-color',
//       'box-shadow',
//     ]),

//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       boxShadow: ` ${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//       borderColor: theme.palette.primary.main,
//     },
//     ...theme.applyStyles('dark', {
//       backgroundColor: '#1A2027',
//       borderColor: '#2D3843',
//     }),
//   },
// }));


// export default function EditForm({ setDrawerOpen, prod, setProd,editItem }) {
//   const [item, setItem] = useState({
//     title: '',
//     price: '',
//     category: '',
//     image: '',
//     description: ''
//   });
//     useEffect(() => {
//     if (editItem) {
//       setItem(editItem);
//     }
//   }, [editItem]);


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setItem({ ...item, [name]: value });
//   };

//   const handleEditButton = () => {
//     axios.put('https://fakestoreapi.com/products/1', item).then((res) => {
//       console.log(res.data, 'response from API');
//       setProd(updateList); 
//       setDrawerOpen(false);
//     });
//   };



//       return (
//     <Box
//       component="form"
//       noValidate
//       sx={{
//         display: 'grid', gridTemplateColumns: { sm: '1fr' }, gap: 2, maxwidth: '500px',
//         margin: '0px auto',
//         padding: '20px',
//         border: '1px solid rgb(204, 204, 204)',
//         borderradius: '10px',
//         backgroundcolor: ' rgb(249, 249, 249)',
//         boxshadow: 'rgba(0, 0, 0, 0.1) 0px 2px 5px'
//       }}
//     >
//       <h1>Add Product</h1>
//       <FormControl variant="standard">
//         <InputLabel style={{ color: "black", fontSize: "23px" }} shrink htmlFor="bootstrap-input">
//           Title
//         </InputLabel>
//         <BootstrapInput defaultValue="" id="bootstrap-input" value={item.title} name='title' onChange={handleChange}/>
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel style={{ color: "black", fontSize: "23px" }} shrink htmlFor="bootstrap-input">
//           Price
//         </InputLabel>
//         <BootstrapInput defaultValue="" id="bootstrap-input" type='number' value={item.price} name='price' onChange={handleChange} />
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel style={{ color: "black", fontSize: "23px" }} shrink htmlFor="bootstrap-input">
//           category
//         </InputLabel>
//         <BootstrapInput defaultValue="" id="bootstrap-input" value={item.category} name='category' onChange={handleChange} />
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel style={{ color: "black", fontSize: "23px" }} shrink htmlFor="bootstrap-input">
//           Image
//         </InputLabel>
//         <BootstrapInput defaultValue="" id="bootstrap-input" value={item.imageUrl} name='image' onChange={handleChange} />
//       </FormControl>
//       <FormControl variant="standard">
//         <InputLabel style={{ color: "black", fontSize: "23px" }} shrink htmlFor="bootstrap-input">
//           Description
//         </InputLabel>

//         <BootstrapInput defaultValue="" id="bootstrap-input" value={item.description} name='description'onChange={handleChange} multiline rows={4} sx={{ '& .MuiInputBase-input': { width: '21ch' } }} />
//       </FormControl>

//       <Button style={{ backgroundColor: 'green' }} variant="contained" onClick={handleEditButton}>
//   Update Product
// </Button>
//       {/* <Button style={{ backgroundColor: 'green' }} variant="contained" onClick={handleAddButton}>
//         Add Product
//       </Button> */}

//     </Box>

//   )
// }










import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#F3F6F9',
    border: '1px solid',
    borderColor: '#E0E3E7',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function EditForm({ setDrawerOpen, prod, setProd, productToEdit }) {
  const [item, setItem] = useState({
    title: '',
    price: '',
    category: '',
    image: '',
    description: ''
  });

 
  useEffect(() => {
    if (productToEdit) {
      setItem(productToEdit);
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem(prev => ({ ...prev, [name]: value }));
  };

  const handleEditButton = () => {
    axios.put(`https://fakestoreapi.com/products/${item.id}`, item)
      .then((res) => {
        console.log(res.data, 'response from API');

        
        const updatedList = prod.map(p =>
          p.id === res.data.id ? res.data : p
        );
        setProd(updatedList);
        setDrawerOpen(false);
      })
      .catch(err => console.error("Update failed", err));
  };

  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr' },
        gap: 2,
        width: '400px',
        padding: '20px',
      }}
    >
      <h1>Edit Product</h1>

      <FormControl variant="standard">
        <InputLabel shrink>Title</InputLabel>
        <BootstrapInput
          name="title"
          value={item.title}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel shrink>Price</InputLabel>
        <BootstrapInput
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel shrink>Category</InputLabel>
        <BootstrapInput
          name="category"
          value={item.category}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel shrink>Image URL</InputLabel>
        <BootstrapInput
          name="image"
          value={item.image}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel shrink>Description</InputLabel>
        <BootstrapInput
          name="description"
          value={item.description}
          onChange={handleChange}
        />
      </FormControl>

      <Button
        style={{ backgroundColor: 'green' }}
        variant="contained"
        onClick={handleEditButton}
      >
        Update Product
      </Button>
    </Box>
  );
}

