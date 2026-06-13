import { Box, Typography } from "@mui/material";
import { useState } from "react";
import img2 from "./assets/images/image copy.png";
import img1 from "./assets/images/image.png";
import UserItem from "./components/UserItem";

const App = () => {
  const [users, setUsers] = useState([{ id: 1, name: "Hasan", age: 25, avatar: img1 }, { id: 2, name: "Mirsadat", age: 18, avatar: img2 }])

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center  ', flexWrap: 'wrap', gap: 5 }}>
        {users.length > 0 ? users.map((user) => (
          <UserItem key={user.id} user={user} deleteUser={deleteUser} />
        )) : <Box><Typography sx={{ color: 'black', fontSize: '20px' }}>NOt found Users</Typography></Box>}
      </Box>

    </>
  );
}

export default App;
