// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Cards from './Cards'
// import RightDrawer from './Drawer'

// const Product = () => {
//   const [listItem, setListItem] = useState([])
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [addDrawerOpen, setAddDrawerOpen] = useState(false);
//   const [editDrawerOpen, setEditDrawerOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;


//   const productlist = () => {
//     axios.get("http://localhost:2000/product/all", { withCredentials: true }).then((res) => {
//       console.log(res.data, "response from backend")
//   console.log("Response:", res.data);  
//   setListItem(res.data);               
// })

//       .catch((err) => {
//   console.error("Error fetching from backend:", err.message);
//   if (err.response) {
//     console.error("Response data:", err.response.data);
//     console.error("Status code:", err.response.status);
//     console.error("Headers:", err.response.headers);
//   } else if (err.request) {
//     console.error("No response received:", err.request);
//   } else {
//     console.error("Error", err.message);
//   }
// });

//   }


//   useEffect(() => {
//     productlist()
//   }, [])


//   const handleAddClick = () => {
//     setEditingProduct(null);
//     setAddDrawerOpen(true);
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setEditDrawerOpen(true);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = listItem.slice(indexOfFirstItem, indexOfLastItem);


//   return (
//     <>
//       <div style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
//         <h1>All Products</h1>
//         <button style={{ backgroundColor: "blue", color: "white" }} onClick={handleAddClick}>ADD PRODUCT</button>
//       </div>



//       <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', marginLeft: "90px", marginRight: "90px", gap: '20px' }}>
//         <Cards data={currentItems}
//           onEdit={handleEditClick}
//           setProd={setListItem} />
//       </div>



//       <div style={{ textAlign: 'center', marginTop: '30px' }}>

//         <button
//           onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           style={{
//             margin: '0 5px ',
//             width: '40px',
//             height: '40px',
//             borderRadius: '50%',
//             backgroundColor: '#f0f0f0',
//             border: '1px solid #ccc',
//             fontSize: '25px',
//             cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
//           }}
//         >
//           &#x2039;
//         </button>

//         {Array.from({ length: Math.ceil(listItem.length / itemsPerPage) }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => setCurrentPage(index + 1)}
//             style={{
//               margin: '0 5px',
//               padding: '5px 12px',
//               backgroundColor: currentPage === index + 1 ? '#ccc' : 'white',
//               color: 'black',
//               border: 'solid 1px #ccc',
//               borderRadius: '50%',
//               cursor: 'pointer'
//             }}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={() =>
//             setCurrentPage(prev => Math.min(prev + 1, Math.ceil(listItem.length / itemsPerPage)))
//           }
//           disabled={currentPage === Math.ceil(listItem.length / itemsPerPage)}
//           style={{
//             width: '40px',
//             height: '40px',
//             borderRadius: '50%',
//             backgroundColor: '#f0f0f0',
//             border: '1px solid #ccc',
//             fontSize: '25px',
//             cursor: currentPage === Math.ceil(listItem.length / itemsPerPage) ? 'not-allowed' : 'pointer'
//           }}
//         >
//           &#x203A;
//         </button>
//       </div>


//       <RightDrawer
//         addDrawerOpen={addDrawerOpen}
//         setAddDrawerOpen={setAddDrawerOpen}
//         editDrawerOpen={editDrawerOpen}
//         setEditDrawerOpen={setEditDrawerOpen}
//         prod={listItem}
//         setProd={setListItem}
//         productToEdit={editingProduct}
//       />
//     </>
//   )
// }

// export default Product

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'
import RightDrawer from './Drawer'

const Product = () => {
  const [listItem, setListItem] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [addDrawerOpen, setAddDrawerOpen] = useState(false);
  const [editDrawerOpen, setEditDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const productlist = () => {
    axios.get("http://localhost:2000/product/all", { withCredentials: true })
      .then((res) => {
        // console.log("response from backend:", res.data);
        // console.log("Type of data:", typeof res.data.data);
        // console.log("Is array:", Array.isArray(res.data.data));
 
        if (Array.isArray(res.data.data)) {
          setListItem(res.data.data);  
        } else {
          console.error("Expected array but got:", res.data.data);
          setListItem([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching from backend:", err.message);
        if (err.response) {
          console.error("Response data:", err.response.data);
          console.error("Status code:", err.response.status);
          console.error("Headers:", err.response.headers);
        } else if (err.request) {
          console.error("No response received:", err.request);
        } else {
          console.error("Error", err.message);
        }
      });
  }

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
  const currentItems = Array.isArray(listItem) ? listItem.slice(indexOfFirstItem, indexOfLastItem) : [];

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
        <h1>All Products</h1>
        <button style={{ backgroundColor: "pink", color: "#C2185B" }} onClick={handleAddClick}>
          ADD PRODUCT
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', marginLeft: "90px", marginRight: "90px", gap: '20px',alignItems: 'stretch' }}>
        <Cards
          data={currentItems}
          onEdit={handleEditClick}
          setProd={setListItem}
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{
            margin: '0 5px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            fontSize: '25px',
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
            fontSize: '25px',
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
  );
};

export default Product;
