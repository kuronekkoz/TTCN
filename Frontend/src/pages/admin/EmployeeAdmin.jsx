//EmployeeAdmin

import React, { useState, useEffect } from "react";
import employeeApi from "../../api/employeeApi";
import Table from "@mui/material/Table";
import {
  Box,
  Button,
  InputLabel,
  Modal,
  Paper,
  Tab,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const EmployeeAdmin = () => {
  const [employees, setEmployees] = useState([]);
  const [openEmployeeModal, setOpenEmployeeModal] = useState(false);
  const [openDeleteEmployeeModal, setOpenDeleteEmployeeModal] = useState(false);

  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));

  const fetchEmployeeList = async () => {
    try {
      const response = await employeeApi.getAllEmployee(true);
      console.log(response);
      setEmployees(response.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployeeList();
  }, []);

  const createEmployee = async () => {
    try {
      const response = await employeeApi.createEmployee(
        { fullName, description, image },
        loginInfo?.accessToken
      );
      console.log(response);
      fetchEmployeeList();
    } catch (error) {
      console.log(error);
    }
  };

  const updateEmployee = async () => {
    try {
      const response = await employeeApi.updateService(
        id,
        { fullName, description, image },
        loginInfo?.accessToken
      );
      console.log(response);
      fetchEmployeeList();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async () => {
    try {
      const response = await employeeApi.deleteEmployee(
        id,
        loginInfo?.accessToken
      );
      console.log(response);
      fetchEmployeeList();
    } catch (error) {
      console.log(error);
    }
  };

  const editEmployeeButton = (employee) => {
    return (
      <Button
        variant="text"
        color="success"
        onClick={() => {
          setModalTitle("Edit employee");
          setId(employee.id);
          setFullName(employee.fullName);
          setDescription(employee.description);
          setImage(employee.image);
          setOpenEmployeeModal(true);
        }}
      >
        Chỉnh sửa
      </Button>
    );
  };

  const deleteEmployeeButton = (employee) => {
    return (
      <Button
        variant="text"
        color="error"
        onClick={() => {
          setModalTitle("Delete employee");
          setId(employee.id);
          setFullName(employee.fullName);
          setImage(employee.image);
          setOpenDeleteEmployeeModal(true);
        }}
      >
        Xóa
      </Button>
    );
  };

  const closeEmployeeModals = () => {
    setFullName("");
    setDescription("");
    setImage("");
    setOpenEmployeeModal(false);
    setOpenDeleteEmployeeModal(false);
  };

  const modalStyle = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    top: "50%",
    left: "50%",
    height: "fit-content",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="text-xl font-bold pb-4">Danh sách nhân viên</div>
        <Button
          sx={{ fontWeight: "bold" }}
          variant="contained"
          color="primary"
          onClick={() => {
            setModalTitle("Thêm nhân viên");
            setOpenEmployeeModal(true);
          }}
        >
          {" "}
          Thêm{" "}
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ typography: "subtitle1", fontWeight: "bold" }}
                align="center"
              >
                ID
              </TableCell>
              <TableCell
                sx={{ typography: "subtitle1", fontWeight: "bold" }}
                align="center"
              >
                Họ và tên
              </TableCell>
              <TableCell
                sx={{ typography: "subtitle1", fontWeight: "bold" }}
                align="center"
              >
                Mô tả
              </TableCell>
              <TableCell
                sx={{ typography: "subtitle1", fontWeight: "bold" }}
                align="center"
              >
                Hình ảnh
              </TableCell>
              <TableCell
                sx={{ typography: "subtitle1", fontWeight: "bold" }}
                align="center"
              >
                Tạo bởi
              </TableCell>
              <TableCell
                sx={{ typography: "subtitle1", fontWeight: "bold" }}
                align="center"
              >
                Hành động
              </TableCell>
              <TableCell
                sx={{ typography: "subtitle1", fontWeight: "bold" }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.fullName}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">
                  <img src={row.image} alt="" />
                </TableCell>
                <TableCell align="center">
                  {row.employeeCreatedBy?.username}
                </TableCell>
                <TableCell>
                  {editEmployeeButton(row)} {deleteEmployeeButton(row)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={openEmployeeModal}
        onClose={() => closeEmployeeModals()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <InputLabel sx={{ typography: "subtitle1", fontWeight: "bold" }}>
            {modalTitle}
          </InputLabel>
          <TextField
            label="Họ và tên"
            variant="outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
            label="Mô tả"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <TextField
            label="Ảnh"
            variant="outlined"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            rows={4}
          />
          <Button
            sx={{ fontWeight: "bold", marginTop: "1rem" }}
            variant="contained"
            color="primary"
            onClick={() => {
              if (id === "") {
                createEmployee();
                closeEmployeeModals();
              } else {
                updateEmployee();
                closeEmployeeModals();
              }
            }}
          >
            Đăng kí
          </Button>
        </Box>
      </Modal>

      {/* Delete confirmation modal */}
      <Modal
        open={openDeleteEmployeeModal}
        onClose={() => closeEmployeeModals()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography sx={{ typography: "subtitle1", fontWeight: "bold" }}>
            Bạn có chăc muốn xóa nhân viên {id}?
          </Typography>
          <div className="flex flex-row justify-around w-full">
            <Button
              sx={{ fontWeight: "bold", marginTop: "1rem" }}
              variant="contained"
              color="primary"
              onClick={() => closeEmployeeModals()}
            >
              {" "}
              No{" "}
            </Button>
            <Button
              sx={{ fontWeight: "bold", marginTop: "1rem" }}
              variant="contained"
              color="error"
              onClick={() => {
                deleteEmployee();
                closeEmployeeModals();
              }}
            >
              {" "}
              Yes{" "}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default EmployeeAdmin;
