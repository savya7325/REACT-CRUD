import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'
import RightDrawer from './Drawer'

const Product = () => {
  const [listItem, setListItem] = useState([])
  // const [prodToEdit, setProdToEdit] = useState(null);
// const [listItems, setListItems] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [addDrawerOpen, setAddDrawerOpen] = useState(false);
const [editDrawerOpen, setEditDrawerOpen] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 8;


  const productlist = () => {
    const response = axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data, "response from api")
      setListItem(res.data)
    })
  }

  // const toggleDrawer = () => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  //   setDrawerOpen(true);
  // };

  useEffect(() => {
    productlist()
  }, [])


  const handleAddClick = () => {
  setEditingProduct(null);
  setAddDrawerOpen(true);  
};

  const handleEditClick = (product) => {
    setEditingProduct(product); 
    setEditDrawerOpen(true);
  };

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = listItem.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
        <h1>All Products</h1>
        <button style={{ backgroundColor: "blue", color: "white" }} onClick={handleAddClick}>ADD PRODUCT</button>
      </div>



      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', marginLeft: "90px", marginRight: "90px", gap: '20px' }}>
        <Cards data={currentItems} 
          onEdit={handleEditClick}
         setProd={setListItem} />
      </div>
       
      

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        
         <button
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    style={{
      margin: '0 5px ',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      fontSize:'25px',
      cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
    }}
  >
    &#x2039; 
  </button>

  {Array.from({ length: Math.ceil(listItem.length / itemsPerPage) }, (_, index) => (
    <button
      key={index + 1}
      onClick={() => setCurrentPage(index + 1)}
      style={{
        margin: '0 5px',
        padding: '5px 12px',
        backgroundColor: currentPage === index + 1 ? '#ccc' : 'white',
        color: 'black',
        border: 'solid 1px #ccc',
        borderRadius: '50%',
        cursor: 'pointer'
      }}
    >
      {index + 1}
    </button>
  ))}
   <button
    onClick={() =>
      setCurrentPage(prev => Math.min(prev + 1, Math.ceil(listItem.length / itemsPerPage)))
    }
    disabled={currentPage === Math.ceil(listItem.length / itemsPerPage)}
    style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      fontSize:'25px',
      cursor: currentPage === Math.ceil(listItem.length / itemsPerPage) ? 'not-allowed' : 'pointer'
    }}
  >
    &#x203A; 
  </button>
</div>


       <RightDrawer
        addDrawerOpen={addDrawerOpen}
        setAddDrawerOpen={setAddDrawerOpen}
        editDrawerOpen={editDrawerOpen}
        setEditDrawerOpen={setEditDrawerOpen}
        prod={listItem}
        setProd={setListItem}
        productToEdit={editingProduct}
      />
    </>
  )
}

export default Product