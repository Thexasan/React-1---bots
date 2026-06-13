import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import { useState } from "react";
import img2 from "./assets/images/image copy.png";
import img1 from "./assets/images/image.png";
import UserItem from "./components/UserItem";

const App = () => {
  const [users, setUsers] = useState([{ id: 1, name: "Hasan", age: 25, avatar: img1 }, { id: 2, name: "Mirsadat", age: 18, avatar: img2 }])
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [age, setAge] = useState('')
  const [search, setSearch] = useState('')


  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }
  const handleClose = () => {
    setOpen(false);
  }

  const addUser = () => {
    let newUser = {
      id: Date.now(),
      name,
      age,
      avatar
    }
    setUsers((prev) => [...prev, newUser])
    setOpen(false)
    setName("")
    setAvatar("")
    setAge("")
  }

  const searchedUsers = users.filter((e)=> e.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>

      <TextField type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

      <Button variant="outlined" onClick={() => {
        setOpen(true)
      }}>Open dialog </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">
          Add Modal
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <TextField value={avatar} onChange={(e) => setAvatar(e.target.value)} id="outlined-basic" label="Avatar" variant="outlined" />
          <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={age} onChange={(e) => setAge(e.target.value)} id="outlined-basic" label="Age" variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Disagree
          </Button>
          <Button onClick={addUser}>Agree</Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center  ', flexWrap: 'wrap', gap: 5 }}>
        {users.length > 0 ? searchedUsers.map((user) => (
          <UserItem key={user.id} user={user} deleteUser={deleteUser} />
        )) : <Box><Typography sx={{ color: 'black', fontSize: '20px' }}>NOt found Users</Typography></Box>}
      </Box>

    </>
  );
}

export default App;
