import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';



const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});

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
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: ` ${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
      borderColor: '#2D3843',
    }),
  },
}));





export default function AddForm({prod, setProd ,setDrawerOpen}) {
  console.log(setDrawerOpen,"======");
  
  console.log(onclose,"--------------------???");
    
  const [item, setItem] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
    description: ""
  })
  console.log(item,"------------->>")

  const handleAddButton = () => {
    const response = axios.post('https://fakestoreapi.com/products',item).then((res) => {
      console.log(res.data, "response from api")

      setProd([...prod, res.data]);
     
      setDrawerOpen(false)

      toast.success("Product added successfully!!")


    })
  }
   const handleChange = (e) =>{
    const {name,value} = e.target 
    setItem({...item,[name]:value});

   }



  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'grid', gridTemplateColumns: { sm: '1fr' }, gap: 2, maxwidth: '500px',
        margin: '0px auto',
        padding: '20px',
        border: '1px solid rgb(204, 204, 204)',
        borderradius: '10px',
        backgroundcolor: ' rgb(249, 249, 249)',
        boxshadow: 'rgba(0, 0, 0, 0.1) 0px 2px 5px'
      }}
    >
      <h1>Add Product</h1>
      <FormControl variant="standard">
        <InputLabel style={{ color: "black", fontSize: "23px" }} shrink htmlFor="bootstrap-input">
          Title
        </InputLabel>
        <BootstrapInput defaultValue="" id="bootstrap-input" value={item.title} name='title' onChange={handleChange}/>
      </FormControl>

      <FormControl variant="standard">
        <InputLabel style={{ color: "black", fontSize: "23px" }} shrink htmlFor="bootstrap-input">
          Price
        </InputLabel>
        <BootstrapInput defaultValue="" id="bootstrap-input" type='number' value={item.price} name='price' onChange={handleChange} />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel style={{ color: "black", fontSize: "23px" }} shrink htmlFor="bootstrap-input">
          category
        </InputLabel>
        <BootstrapInput defaultValue="" id="bootstrap-input" value={item.category} name='category' onChange={handleChange} />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel style={{ color: "black", fontSize: "23px" }} shrink htmlFor="bootstrap-input">
          Image
        </InputLabel>
        <BootstrapInput defaultValue="" id="bootstrap-input" value={item.imageUrl} name='image' onChange={handleChange} />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel style={{ color: "black", fontSize: "23px" }} shrink htmlFor="bootstrap-input">
          Description
        </InputLabel>

        <BootstrapInput defaultValue="" id="bootstrap-input" value={item.description} name='description'onChange={handleChange} multiline rows={4} sx={{ '& .MuiInputBase-input': { width: '21ch' } }} />
      </FormControl>
      <Button style={{ backgroundColor: 'green' }} variant="contained" onClick={handleAddButton}>
        Add Product
      </Button>

    </Box>
  );
}