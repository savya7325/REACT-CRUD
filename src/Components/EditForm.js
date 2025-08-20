
// import * as React from 'react';
// import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import { useState, useEffect } from 'react';

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
//     ].join(','),
//     '&:focus': {
//       boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//       borderColor: theme.palette.primary.main,
//     },
//   },
// }));

// export default function EditForm({ setDrawerOpen, prod, setProd, productToEdit }) {
//   const [item, setItem] = useState({
//     title: '',
//     price: '',
//     category: '',
//     image: '',
//     description: ''
//   });

 
//   useEffect(() => {
//     if (productToEdit) {
//       setItem(productToEdit);
//     }
//   }, [productToEdit]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setItem(prev => ({ ...prev, [name]: value }));
//   };

//   const handleEditButton = (e) => {
//       e.preventDefault();
//      const token = localStorage.getItem("token");
//     axios.put(`http://localhost:2000/product/update/${item._id}`, item,{
//        headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => {
//         console.log(res.data, 'response from API');
//         const updatedList = prod.map(p =>
//           p.id === res.data.data._id ? res.data.data : p
//         );
//         setProd(updatedList);
//         setDrawerOpen(false);
//       })
//       .catch(err => console.error("Update failed", err));
// };
//   return (
//     <Box
//       component="form" onSubmit={handleEditButton}
//       noValidate
//       sx={{
//         display: 'grid',
//         gridTemplateColumns: { sm: '1fr' },
//         gap: 2,
//         width: '400px',
//         padding: '20px',
//       }}
//     >
//       <h1>Edit Product</h1>

//       <FormControl variant="standard">
//         <InputLabel shrink>Title</InputLabel>
//         <BootstrapInput
//           name="title"
//           value={item.title}
//           onChange={handleChange}
//         />
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel shrink>Price</InputLabel>
//         <BootstrapInput
//           type="number"
//           name="price"
//           value={item.price}
//           onChange={handleChange}
//         />
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel shrink>Category</InputLabel>
//         <BootstrapInput
//           name="category"
//           value={item.category}
//           onChange={handleChange}
//         />
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel shrink>Image URL</InputLabel>
//         <BootstrapInput
//           name="image"
//           value={item.image}
//           onChange={handleChange}
//         />
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel shrink>Description</InputLabel>
//         <BootstrapInput
//           name="description"
//           value={item.description}
//           onChange={handleChange}
//         />
//       </FormControl>

//       <Button type="submit"
//         style={{ backgroundColor: '#C2185B' }}
//         variant="contained">
//         Update Product
//       </Button>
//     </Box>
//   );
// }

// import * as React from 'react';
// import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import { useState, useEffect } from 'react';

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
//     ].join(','),
//     '&:focus': {
//       boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//       borderColor: theme.palette.primary.main,
//     },
//   },
// }));

// export default function EditForm({ setDrawerOpen, prod, setProd, productToEdit }) {
//   const [item, setItem] = useState({
//     title: '',
//     price: '',
//     category: '',
//     image: '',
//     description: ''
//   });

//   // ✅ Auto-fill product details when editing
//   useEffect(() => {
//     if (productToEdit) {
//       setItem(productToEdit);
//     }
//   }, [productToEdit]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setItem(prev => ({ ...prev, [name]: value }));
//   };

//   // ✅ File upload handler
//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await axios.post("http://localhost:2000/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       });

//       // Save uploaded image URL into state
//       setItem(prev => ({ ...prev, image: res.data.url }));
//     } catch (err) {
//       console.error("Image upload failed", err);
//     }
//   };

//   const handleEditButton = (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");

//     axios.put(`http://localhost:2000/product/update/${item._id}`, item, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => {
//         console.log(res.data, 'response from API');
//         const updatedList = prod.map(p =>
//           p._id === res.data.data._id ? res.data.data : p  // ✅ fixed from p.id → p._id
//         );
//         setProd(updatedList);
//         setDrawerOpen(false);
//       })
//       .catch(err => console.error("Update failed", err));
//   };

//   return (
//     <Box
//       component="form" onSubmit={handleEditButton}
//       noValidate
//       sx={{
//         display: 'grid',
//         gridTemplateColumns: { sm: '1fr' },
//         gap: 2,
//         width: '400px',
//         padding: '20px',
//       }}
//     >
//       <h1>Edit Product</h1>

//       <FormControl variant="standard">
//         <InputLabel shrink>Title</InputLabel>
//         <BootstrapInput
//           name="title"
//           value={item.title}
//           onChange={handleChange}
//         />
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel shrink>Price</InputLabel>
//         <BootstrapInput
//           type="number"
//           name="price"
//           value={item.price}
//           onChange={handleChange}
//         />
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel shrink>Category</InputLabel>
//         <BootstrapInput
//           name="category"
//           value={item.category}
//           onChange={handleChange}
//         />
//       </FormControl>

//       {/* File Upload */}
//       <FormControl variant="standard">
//         <InputLabel shrink>Upload Image</InputLabel>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//         />
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel shrink>Description</InputLabel>
//         <BootstrapInput
//           name="description"
//           value={item.description}
//           onChange={handleChange}
//         />
//       </FormControl>

//       <Button type="submit"
//         style={{ backgroundColor: '#C2185B' }}
//         variant="contained">
//         Update Product
//       </Button>
//     </Box>
//   );
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
    _id: "",         // ✅ include _id
    title: "",
    price: "",
    category: "",
    description: "",
  });
  const [file, setFile] = useState(null);

  // ✅ Auto-fill product details when editing
  useEffect(() => {
    if (productToEdit) {
      setItem({
        _id: productToEdit._id || "",
        title: productToEdit.title || "",
        price: productToEdit.price || "",
        category: productToEdit.category || "",
        description: productToEdit.description || "",
      });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Store file in state (don’t upload yet)
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleEditButton = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const formData = new FormData();
      formData.append("title", item.title);
      formData.append("price", item.price);
      formData.append("category", item.category);
      formData.append("description", item.description);

      // ✅ Only add file if user chose new one
      if (file) {
        formData.append("image", file);
      }

      const res = await axios.put(
        `http://localhost:2000/product/update/${item._id}`, // ✅ now has id
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data, "response from API");

      // ✅ Update product list in UI
      const updatedList = prod.map((p) =>
        p._id === res.data.data._id ? res.data.data : p
      );

      setProd(updatedList);
      setDrawerOpen(false);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleEditButton}
      noValidate
      sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr" },
        gap: 2,
        width: "400px",
        padding: "20px",
      }}
    >
      <h1>Edit Product</h1>

      <FormControl variant="standard">
        <InputLabel shrink>Title</InputLabel>
        <BootstrapInput name="title" value={item.title} onChange={handleChange} />
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

      {/* File Upload */}
      <FormControl variant="standard">
        <InputLabel shrink>Upload Image</InputLabel>
        <input type="file" accept="image/*" onChange={handleFileChange} />
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
        type="submit"
        style={{ backgroundColor: "#C2185B" }}
        variant="contained"
      >
        Update Product
      </Button>
    </Box>
  );
}
