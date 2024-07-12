import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit} from "react-icons/fa";
import { toast } from "react-toastify"; 

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 900px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``; 

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px){
        ${(props) => props.onlyweb && "display: none"}
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px){
        ${(props) => props.onlyweb && "display: none"}
    }
`;

const Grid = ({ users, setUsers, setOnEdit }) => {    
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (tar_id) => {
        await axios
            .delete("http://localhost:8800/" + tar_id)
            .then(({data}) => {
                const newArray = users.filter((user) => user.tar_id !== tar_id);

                setUsers(newArray);
                toast.success(data);
            })
            .catch(({data}) => toast.error(data));

        setOnEdit(null);
    };
    const formatter = (date) => {
        const dateA = new Date(date);
        const day = dateA.getDate();
        const month = dateA.getMonth() + 1;
        const year = dateA.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Responsável</Th>
                    <Th>Tarefa</Th>
                    <Th onlyweb>Data final</Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.tar_resp}</Td>
                        <Td width="30%">{item.tar_tarefa}</Td>
                        <Td alignCenter width="20%">{formatter(item.tar_datafinal)}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit onClick={() => handleEdit(item)} color="#02316E" />
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(item.tar_id)} color="#02316E" />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;
