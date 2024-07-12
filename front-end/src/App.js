import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars";

const Container = styled.div`
  width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Task = styled.div`
  width: 100%;
  margin: 20px auto;
  max-height: 450px;
  overflow-x: hidden;
`;

const Title = styled.h2`
  font-family: "Kanit", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 1.8em;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  
  const getUsers = async() => {
    try{
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.tar_resp > b.tar_resp ? 1 : -1)));
    } catch (error){
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

   return (
     <div>
       <Container>
         <Title>Bloco de tarefas</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
       </Container>
       <Task>
          <Scrollbars style={{ width: '100%', height: '430px' }}>
            <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
          </Scrollbars>
       </Task>
       <ToastContainer autoClose={3000} position={"bottom-left"} />
       <GlobalStyle />
     </div>
    );
}

 export default App;
