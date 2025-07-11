import React from 'react';
import Drawer from '@mui/material/Drawer';
import AddForm from './Form';
import EditForm from './EditForm';

export default function RightDrawer({
  addDrawerOpen,
  setAddDrawerOpen,
  editDrawerOpen,
  setEditDrawerOpen,
  prod,
  setProd,
  productToEdit
}) {
  return (
    <>

      <Drawer anchor="right" open={editDrawerOpen} onClose={() => setEditDrawerOpen(false)}>
        <EditForm
          setDrawerOpen={setEditDrawerOpen}
          prod={prod}
          setProd={setProd}
          productToEdit={productToEdit}
        />
      </Drawer>

      <Drawer anchor="right" open={addDrawerOpen} onClose={() => setAddDrawerOpen(false)}>
        <AddForm
          setDrawerOpen={setAddDrawerOpen}
          prod={prod}
          setProd={setProd}
        />
      </Drawer>
    </>
  );
}
