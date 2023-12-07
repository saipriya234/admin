import { Button } from "@mui/material";
import { useState } from "react";
import AddComponent from "./components/AddComponent";
import EditComponent from "./components/EditComponent";
const App = () => {
  const [addSelect, setAddSelect] = useState<boolean>(true);
  const [editSelect, setEditSelect] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => {
          setAddSelect(true), setEditSelect(false);
        }}
      >
        Add
      </Button>
      <Button
        onClick={() => {
          setAddSelect(false), setEditSelect(true);
        }}
      >
        Edit
      </Button>
      {addSelect && <AddComponent />}
      {editSelect && <EditComponent />}
    </>
  );
};

export default App;
