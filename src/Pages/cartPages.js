// import { Box, Typography, IconButton, Button, Divider } from "@mui/material";
// import { Add, Remove, Delete } from "@mui/icons-material";
// import { useCart } from "../Context/cartProvider";

// export default function CartPage() {
//   const { items, addToCart, decreaseQty, removeFromCart, total, clearCart } = useCart();

//   return (
//     <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
//       <Typography variant="h4" gutterBottom>Cart</Typography>

//       {items.length === 0 ? (
//         <Typography>Your cart is empty.</Typography>
//       ) : (
//         <>
//           {items.map(p => (
//             <Box key={p._id || p.id} sx={{ display: "flex", alignItems: "center", gap: 2, py: 1 }}>
//               <img src={p.image} alt={p.title} style={{ width: 64, height: 64, objectFit: "contain" }} />
//               <Box sx={{ flex: 1 }}>
//                 <Typography variant="subtitle1">{p.title}</Typography>
//                 <Typography variant="body2">₹{p.price}</Typography>
//               </Box>
//               <IconButton onClick={() => decreaseQty(p._id || p.id)}><Remove /></IconButton>
//               <Typography>{p.qty || 1}</Typography>
//               <IconButton onClick={() => addToCart(p)}><Add /></IconButton>
//               <IconButton onClick={() => removeFromCart(p._id || p.id)}><Delete /></IconButton>
//             </Box>
//           ))}

//           <Divider sx={{ my: 2 }} />

//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <Typography variant="h6">Total: ₹{total.toFixed(2)}</Typography>
//             <Button color="error" variant="outlined" onClick={clearCart}>Clear Cart</Button>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// }


// import { Box, Typography, IconButton, Button, Divider } from "@mui/material";
// import { Add, Remove, Delete } from "@mui/icons-material";
// import { useCart } from "../Context/cartProvider";

// export default function CartPage() {

//   const { cartItems = [], addToCart, decreaseQty, removeFromCart, total = 0, clearCart } = useCart() || {};
//   return (
//     <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
//       <Typography variant="h4" gutterBottom>Cart</Typography>

//       {items.length === 0 ? (
//         <Typography>Your cart is empty.</Typography>
//       ) : (
//         <>
//           {items.map(p => (
//             <Box
//               key={p._id || p.id}
//               sx={{ display: "flex", alignItems: "center", gap: 2, py: 1 }}
//             >
//               <img
//                 src={p.image}
//                 alt={p.title}
//                 style={{ width: 64, height: 64, objectFit: "contain" }}
//               />
//               <Box sx={{ flex: 1 }}>
//                 <Typography variant="subtitle1">{p.title}</Typography>
//                 <Typography variant="body2">₹{p.price}</Typography>
//               </Box>
//               <IconButton onClick={() => decreaseQty?.(p._id || p.id)}>
//                 <Remove />
//               </IconButton>
//               <Typography>{p.qty || 1}</Typography>
//               <IconButton onClick={() => addToCart?.(p)}>
//                 <Add />
//               </IconButton>
//               <IconButton onClick={() => removeFromCart?.(p._id || p.id)}>
//                 <Delete />
//               </IconButton>
//             </Box>
//           ))}

//           <Divider sx={{ my: 2 }} />

//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <Typography variant="h6">Total: ₹{total.toFixed(2)}</Typography>
//             <Button color="error" variant="outlined" onClick={clearCart}>
//               Clear Cart
//             </Button>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// }

import { Box, Typography, IconButton, Button, Divider } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useCart } from "../Context/cartProvider";

export default function CartPage() {
  const { cartItems = [], addToCart, decreaseQty, removeFromCart, total = 0, clearCart } = useCart() || {};

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
      <Typography variant="h4" gutterBottom>Cart</Typography>

      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          {cartItems.map(p => (
            <Box
              key={p._id || p.id}
              sx={{ display: "flex", alignItems: "center", gap: 2, py: 1 }}
            >
              <img
                src={p.image}
                alt={p.title}
                style={{ width: 64, height: 64, objectFit: "contain" }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1">{p.title}</Typography>
                <Typography variant="body2">₹{p.price}</Typography>
              </Box>
              <IconButton onClick={() => decreaseQty?.(p._id || p.id)}>
                <Remove />
              </IconButton>
              <Typography>{p.qty || 1}</Typography>
              <IconButton onClick={() => addToCart?.(p)}>
                <Add />
              </IconButton>
              <IconButton onClick={() => removeFromCart?.(p._id || p.id)}>
                <Delete />
              </IconButton>
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6">Total: ₹{total.toFixed(2)}</Typography>
            <Button color="error" variant="outlined" onClick={clearCart}>
              Clear Cart
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
