// import { object, string, number, parse } from 'valibot';
// import * as React from 'react';
// import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import { useState } from 'react';
// import { safeParse } from 'valibot';
// import { productSchema } from '../Validation/productValidation';
// import { toast } from 'react-toastify';
// import { useContext } from 'react';
// import { useAuth } from "../Context/AuthProvider";



// // const productSchema = object({
// //   title: string('Title is required'),
// //   price: number('Price must be a number'),
// //   category: string('Category is required'),
// //   image: string('Image is required'),
// //   description: string('Description is required'),
// // });


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





// export default function AddForm({prod, setProd ,setDrawerOpen}) {
//   const { user } = useAuth();
//   // console.log(setDrawerOpen,"======");
  
//   // console.log(onclose,"--------------------???");
    
//   const [item, setItem] = useState({
//     title: "",
//     price: "",
//     category: "",
//     image: "",
//     description: ""
//   })
  

//   // console.log(item,"------------->>")

// const handleAddButton = async (e) => {
//     e.preventDefault(); 
//    const result = safeParse(productSchema, {
//     ...item,
//     price: Number(item.price), // ensure price is a number
//   });

//   // If validation fails, show error toast and stop
//   if (!result.success) {
//     const firstError = Object.values(result.issues)[0];
//     toast.error(firstError.message);
//     return;
//   }
    
//   try{
//     const token = localStorage.getItem("token");
//     const validatedProduct = parse(productSchema, {
//   ...item,
//   price: Number(item.price),
// });
// console.log("Validated Product to be sent:", validatedProduct);
// console.log("Token:", token);

 
// const res = await axios.post('http://localhost:2000/product/add', validatedProduct, {

//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     console.log("API response:", res.data);
//     setProd([...prod, {...res.data.data,auth: user}]);
       
//     setDrawerOpen(false);
//     toast.success("Product added successfully!!");

//  } catch (error) {
//   console.error("Error adding product:", error);

//   if (error.response && error.response.status === 422) {
    
//     const validationErrors = error.response.data.errors;
//     const errorMsgs = validationErrors.map(err => err.msg).join(", ");
//     toast.error(`Validation failed: ${errorMsgs}`);
//   } else if (error.message?.includes("Validation")) {
//     toast.error("Valibot validation failed. Please check your inputs.");
//   } else if (error.response) {
//     toast.error(error.response.data.error || "Failed to add product.");
//   } else {
//     toast.error("Something went wrong. Check form and token.");
//   }
// }

// }

//    const handleChange = (e) =>{
//     const {name,value} = e.target 
//     setItem({...item,[name]:value});

//    }



//   return (
//     <Box
//       component="form" onSubmit={handleAddButton} 
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
//         <BootstrapInput defaultValue="" id="bootstrap-input" value={item.image} name='image' onChange={handleChange} />
//       </FormControl>
//       <FormControl variant="standard">
//         <InputLabel style={{ color: "black", fontSize: "23px" }} shrink htmlFor="bootstrap-input">
//           Description
//         </InputLabel>

//         <BootstrapInput defaultValue="" id="bootstrap-input" value={item.description} name='description'onChange={handleChange} multiline rows={4} sx={{ '& .MuiInputBase-input': { width: '21ch' } }} />
//       </FormControl>
//       <Button type="submit" style={{ backgroundColor: 'green' }} variant="contained" >
//         Add Product
//       </Button>

//     </Box>
//   );
// }

// import { object, string, number, parse } from 'valibot';
// import * as React from 'react';
// import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import { useState } from 'react';
// import { safeParse } from 'valibot';
// import { productSchema } from '../Validation/productValidation';
// import { toast } from 'react-toastify';
// import { useAuth } from "../Context/AuthProvider";

// const CssTextField = styled(TextField)({
//   '& label.Mui-focused': { color: '#A0AAB4' },
//   '& .MuiInput-underline:after': { borderBottomColor: '#B2BAC2' },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': { borderColor: '#E0E3E7' },
//     '&:hover fieldset': { borderColor: '#B2BAC2' },
//     '&.Mui-focused fieldset': { borderColor: '#6F7E8C' },
//   },
// });

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': { marginTop: theme.spacing(3) },
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

// export default function AddForm({ prod, setProd, setDrawerOpen }) {
//   const { user } = useAuth();

//   const [item, setItem] = useState({
//     title: "",
//     price: "",
//     category: "",
//     image: "",
//     description: ""
//   });

//   const handleAddButton = async (e) => {
//     e.preventDefault();

//     const result = safeParse(productSchema, {
//       ...item,
//       price: Number(item.price),
//     });

//     if (!result.success) {
//       const firstError = Object.values(result.issues)[0];
//       toast.error(firstError.message);
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const validatedProduct = parse(productSchema, {
//         ...item,
//         price: Number(item.price),
//       });

//       const res = await axios.post(
//         'http://localhost:2000/product/add',
//         validatedProduct,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       //  Update state immediately so UI refreshes without reload
//       setProd([...prod, { ...res.data.data, auth: user }]);

//       //  Clear form after submit
//       setItem({
//         title: "",
//         price: "",
//         category: "",
//         image: "",
//         description: ""
//       });

//       setDrawerOpen(false);
//       toast.success("Product added successfully!!");
//     } catch (error) {
//       console.error("Error adding product:", error);
//       if (error.response && error.response.status === 422) {
//         const validationErrors = error.response.data.errors;
//         const errorMsgs = validationErrors.map(err => err.msg).join(", ");
//         toast.error(`Validation failed: ${errorMsgs}`);
//       } else if (error.message?.includes("Validation")) {
//         toast.error("Valibot validation failed. Please check your inputs.");
//       } else if (error.response) {
//         toast.error(error.response.data.error || "Failed to add product.");
//       } else {
//         toast.error("Something went wrong. Check form and token.");
//       }
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setItem({ ...item, [name]: value });
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleAddButton}
//       noValidate
//       sx={{
//         display: 'grid',
//         gridTemplateColumns: { sm: '1fr' },
//         gap: 2,
//         maxwidth: '500px',
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
//         <InputLabel style={{ color: "black", fontSize: "23px" }} shrink>
//           Title
//         </InputLabel>
//         <BootstrapInput value={item.title} name='title' onChange={handleChange} />
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel style={{ color: "black", fontSize: "23px" }} shrink>
//           Price
//         </InputLabel>
//         <BootstrapInput type='number' value={item.price} name='price' onChange={handleChange} />
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel style={{ color: "black", fontSize: "23px" }} shrink>
//           Category
//         </InputLabel>
//         <BootstrapInput value={item.category} name='category' onChange={handleChange} />
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel style={{ color: "black", fontSize: "23px" }} shrink>
//           Image
//         </InputLabel>
//         <BootstrapInput value={item.image} name='image' onChange={handleChange} />
//       </FormControl>

//       <FormControl variant="standard">
//         <InputLabel style={{ color: "black", fontSize: "23px" }} shrink>
//           Description
//         </InputLabel>
//         <BootstrapInput
//           value={item.description}
//           name='description'
//           onChange={handleChange}
//           multiline
//           rows={4}
//           sx={{ '& .MuiInputBase-input': { width: '21ch' } }}
//         />
//       </FormControl>

//       <Button
//         type="submit"
//         style={{ backgroundColor: 'green' }}
//         variant="contained"
//       >
//         Add Product
//       </Button>
//     </Box>
//   );
// }


// import { object, string, number, parse, safeParse } from 'valibot';
// import * as React from 'react';
// import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import axios from 'axios';
// import { useState } from 'react';
// import { productSchema } from '../Validation/productValidation';
// import { toast } from 'react-toastify';
// import { useAuth } from "../Context/AuthProvider";

// const CssTextField = styled(TextField)({
//   '& label.Mui-focused': { color: '#A0AAB4' },
//   '& .MuiInput-underline:after': { borderBottomColor: '#B2BAC2' },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': { borderColor: '#E0E3E7' },
//     '&:hover fieldset': { borderColor: '#B2BAC2' },
//     '&.Mui-focused fieldset': { borderColor: '#6F7E8C' },
//   },
// });

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': { marginTop: theme.spacing(3) },
//   '& .MuiInputBase-input': {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: '#F3F6F9',
//     border: '1px solid',
//     borderColor: '#E0E3E7',
//     fontSize: 16,
//     padding: '10px 12px',
//     transition: theme.transitions.create([
//       'border-color',
//       'background-color',
//       'box-shadow',
//     ]),
//     fontFamily: [
//       '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',
//       '"Helvetica Neue"', 'Arial', 'sans-serif',
//       '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//       borderColor: theme.palette.primary.main,
//     },
//     ...theme.applyStyles?.('dark', {
//       backgroundColor: '#1A2027',
//       borderColor: '#2D3843',
//     }),
//   },
// }));

// export default function AddForm({ prod, setProd, setDrawerOpen }) {
//   const { user } = useAuth();

//   const [item, setItem] = useState({
//     title: "",
//     price: "",
//     category: "",
//     image: "",
//     description: ""
//   });
//   const [formErrors, setFormErrors] = useState({}); 

//   const handleAddButton = async (e) => {
//     e.preventDefault();

//     const result = safeParse(productSchema, {
//       ...item,
//       price: Number(item.price),
//     });

//     if (!result.success) {
//       const errors = {};
//       result.issues.forEach(issue => {
//         errors[issue.path?.[0]] = issue.message;
//       });
//       setFormErrors(errors);
//       return;
//     }
//  setFormErrors({});
//     try {
//       const token = localStorage.getItem("token");
//       const validatedProduct = parse(productSchema, {
//         ...item,
//         price: Number(item.price),
//       });

//       const res = await axios.post(
//         'http://localhost:2000/product/add',
//         validatedProduct,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const newProduct = res.data.data;

      
//       setProd(prev => [...prev, { ...newProduct, auth: user?.id || user?._id }]);

    
//       setItem({
//         title: "", price: "", category: "", image: "", description: ""});

//       setDrawerOpen(false);
//       toast.success("Product added successfully!!");
//      } catch (error) {
//   //   console.error("Error adding product:", error);
//   //   if (error.response && error.response.status === 422) {
//   //     const errorMsgs = error.response.data.errors.map(err => err.msg).join(", ");
//   //     toast.error(`Validation failed: ${errorMsgs}`);
//   //   } else if (error.response) {
//   //     toast.error(error.response.data.error || "Failed to add product.");
//   //   } else {
//   //     toast.error("Something went wrong. Check form and token.");
//   //   }
//   // }
//    console.error("Error adding product:", error);
//       toast.error(error.response?.data?.error || "Something went wrong");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setItem({ ...item, [name]: value });
//       setFormErrors(prev => ({ ...prev, [name]: "" })); 
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleAddButton}
//       noValidate
//       sx={{
//         display: 'grid',
//         gap: 2,
//         maxWidth: '500px',
//         margin: '0 auto',
//         padding: '20px',
//         border: '1px solid #ccc',
//         borderRadius: '10px',
//         backgroundColor: 'rgb(249, 249, 249)',
//         boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 5px'
//       }}
//     >
//       <h1>Add Product</h1>

//       {['title', 'price', 'category', 'image', 'description'].map((field, idx) => (
//         <FormControl variant="standard" key={idx}>
//           <InputLabel style={{ color: "black", fontSize: "23px" }} shrink>
//             {field.charAt(0).toUpperCase() + field.slice(1)}
//           </InputLabel>
//           <BootstrapInput
//             type={field === 'price' ? 'number' : 'text'}
//             value={item[field]}
//             name={field}
//             onChange={handleChange}
//             multiline={field === 'description'}
//             rows={field === 'description' ? 4 : undefined}
//           />
          
//         </FormControl>
//       ))}

//       <Button
//         type="submit"
//         style={{ backgroundColor: 'green' }}
//         variant="contained"
//       >
//         Add Product
//       </Button>
//     </Box>
//   );
// }


import { object, string, number, parse, safeParse } from 'valibot';
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';
import { productSchema } from '../Validation/productValidation';
import { toast } from 'react-toastify';
import { useAuth } from "../Context/AuthProvider";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': { color: '#A0AAB4' },
  '& .MuiInput-underline:after': { borderBottomColor: '#B2BAC2' },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: '#E0E3E7' },
    '&:hover fieldset': { borderColor: '#B2BAC2' },
    '&.Mui-focused fieldset': { borderColor: '#6F7E8C' },
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': { marginTop: theme.spacing(3) },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#F3F6F9',
    border: '1px solid',
    borderColor: '#E0E3E7',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    fontFamily: [
      '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',
      '"Helvetica Neue"', 'Arial', 'sans-serif',
      '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    ...theme.applyStyles?.('dark', {
      backgroundColor: '#1A2027',
      borderColor: '#2D3843',
    }),
  },
}));

export default function AddForm({ prod, setProd, setDrawerOpen }) {
  const { user } = useAuth();

  const [item, setItem] = useState({
    title: "",
    price: "",
    category: "",
    image: null,
    description: ""
  });
  const [formErrors, setFormErrors] = useState({}); 

  // Simple per-field check (can be expanded)
  const validateField = (name, value) => {
  let message = "";

  if (name === "title" && !value.trim()) {
    message = "Title is required";
  } else if (name === "price" && (value === "" || isNaN(Number(value)))) {
    message = "Price must be a number";
  } else if (name === "category" && !value.trim()) {
    message = "Category is required";
  } else if (name === "description" && !value.trim()) {
    message = "Description is required";
  } else if (name === "image" && !value) {
    message = "Image file is required";
  }

  setFormErrors((prev) => ({ ...prev, [name]: message }));
  return message === "";
};


  const handleAddButton = async (e) => {
    e.preventDefault();
    
    // Validate all fields first
    let isValid = true;
    Object.keys(item).forEach((field) => {
      const valid = validateField(field, item[field]);
      if (!valid) isValid = false;
    });
    if (!isValid) return;

    const result = safeParse(productSchema, {
      ...item,
      price: Number(item.price),
    });

    if (!result.success) {
      const errors = {};
      result.issues.forEach(issue => {
        errors[issue.path?.[0]] = issue.message;
      });
      setFormErrors(errors);
      return;
    }

    // setFormErrors({});
    try {
      const token = localStorage.getItem("token");
     
      console.log("Sending token:", token);

      // const validatedProduct = parse(productSchema, {
      //   ...item,
      //   price: Number(item.price),
      // });

      // const res = await axios.post(
      //   'http://localhost:2000/product/add',
      //   validatedProduct,
      //   { headers: { Authorization: `Bearer ${token}` },
      //  }
      // );
     const formData = new FormData();
  formData.append("title", item.title);
   formData.append("price", item.price);
   formData.append("category", item.category);
   formData.append("description", item.description);
   if (item.image) formData.append("image", item.image); // actual file

   const res = await axios.post(
     "http://localhost:2000/product/add",
     formData,
     {
       headers: {
         "Content-Type": "multipart/form-data",
         Authorization: `Bearer ${token}`,
       },
     }
   );

      const newProduct = res.data.data;
      setProd(prev => [...prev, { ...newProduct, auth: user?.id || user?._id }]);
      setItem({
        title: "", price: "", category: "", image:null, description: ""
      });
      setDrawerOpen(false);
      toast.success("Product added successfully!!");
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error(error.response?.data?.error ||   error.response?.data?.message || "Something went wrong");
    }
  };

 const handleChange = (e) => {
  const { name, value, files } = e.target;

  setItem((prev) => ({
    ...prev,
    [name]: files ? files[0] : value
  }));

  setFormErrors((prev) => ({ ...prev, [name]: "" }));
};


  return (
    <Box
      component="form"
      onSubmit={handleAddButton}
      noValidate
      sx={{
        display: 'grid',
        gap: 2,
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 5px'
      }}
    >
      <h1>Add Product</h1>

      {['title', 'price', 'category', 'image', 'description'].map((field, idx) => (
        <FormControl variant="standard" key={idx}>
          <InputLabel style={{ color: "black", fontSize: "23px" }} shrink>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </InputLabel>
           {field === "image" ? (
      <TextField
        type="file"
        accept="image/*"
        name="image"
        onChange={handleChange}
        style={{ marginTop: "10px" }}
      />
    ) : (
          <BootstrapInput
            type={field === 'price' ? 'number' : 'text'}
            value={item[field]}
            name={field}
            onChange={handleChange}
            onBlur={(e) => validateField(field, e.target.value)}
            multiline={field === 'description'}
            rows={field === 'description' ? 4 : undefined}
            required
            style={{border: formErrors[field] ? "2px solid red" : undefined}}
          />
    )}
          {formErrors[field] && (
            <span style={{ color: "red", fontSize: "0.85rem" }}>
              {formErrors[field]}
            </span>
          )}

          
          
        </FormControl>
      ))}

      <Button
        type="submit"
        style={{ backgroundColor: '#C2185B' }}
        variant="contained"
      >
        Add Product
      </Button>
    </Box>
  );
}
