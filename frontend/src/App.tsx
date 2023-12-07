//this is for formik form
// import { Button } from "@mui/material";
// import { useState } from "react";
// import AddComponent from "./components/AddComponent";
// import EditComponent from "./components/EditComponent";
// const App = () => {
//   const [addSelect, setAddSelect] = useState<boolean>(true);
//   const [editSelect, setEditSelect] = useState<boolean>(false);

//   return (
//     <>
//       <Button
//         onClick={() => {
//           setAddSelect(true), setEditSelect(false);
//         }}
//       >
//         Add
//       </Button>
//       <Button
//         onClick={() => {
//           setAddSelect(false), setEditSelect(true);
//         }}
//       >
//         Edit
//       </Button>
//       {addSelect && <AddComponent />}
//       {editSelect && <EditComponent />}
//     </>
//   );
// };

// export default App;

//this is for reat-hook-form

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Edit from "./components/React-edit";
import Add from "./components/React-add";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add />}>
            Add
          </Route>
          <Route path="/edit" element={<Edit />}>
            Edit
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
