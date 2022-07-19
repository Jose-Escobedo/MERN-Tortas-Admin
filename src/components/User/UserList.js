import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../seedData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";

const UserList = () => {
  const useStyles = makeStyles({
    dataGrid: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 3,
      border: 0,
      color: "white",
      minHeight: "50vh",
      padding: "5px 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      width: "1000px",
    },
  });
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <UserListContainer className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </UserListContainer>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <UserListContainer>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </UserListContainer>
        );
      },
    },
  ];

  const classes = useStyles();

  return (
    <UserListContainer className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        className={classes.dataGrid}
      />
    </UserListContainer>
  );
};

const UserListContainer = styled.div`
  .userList {
    flex: 4;
  }

  .userListUser {
    display: flex;
    align-items: center;
  }

  .userListImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  .userListEdit {
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
  }

  .userListDelete {
    color: red;
    cursor: pointer;
  }
`;
export default UserList;
