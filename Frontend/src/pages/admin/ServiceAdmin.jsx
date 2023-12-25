import { useState, useEffect } from "react";
import serviceApi from "../../api/serviceApi";
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

const ServiceAdmin = () => {
  const [services, setServices] = useState([]);
  const [openServiceModal, setOpenServiceModal] = useState(false);
  const [openDeleteServiceModal, setOpenDeleteServiceModal] = useState(false);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));

  const fetchServiceList = async () => {
    try {
      const response = await serviceApi.getAllService(true);
      console.log(response);
      setServices(response.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServiceList();
  }, []);

  const createService = async () => {
    try {
      const response = await serviceApi.createService(
        { name, description, content },
        loginInfo?.accessToken
      );
      console.log(response);
      fetchServiceList();
    } catch (error) {
      console.log(error);
    }
  };

  const updateService = async () => {
    try {
      const response = await serviceApi.updateService(
        id,
        { name, description, content },
        loginInfo?.accessToken
      );
      console.log(response);
      fetchServiceList();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteService = async () => {
    try {
      const response = await serviceApi.deleteService(
        id,
        loginInfo?.accessToken
      );
      console.log(response);
      fetchServiceList();
    } catch (error) {
      console.log(error);
    }
  };

  const editServiceButton = (service) => {
    return (
      <Button
        variant="text"
        color="success"
        onClick={() => {
          setModalTitle("Edit Service");
          setId(service.id);
          setName(service.name);
          setDescription(service.description);
          setContent(service.content);
          setOpenServiceModal(true);
        }}
      >
        Edit
      </Button>
    );
  };

  const deleteServiceButton = (service) => {
    return (
      <Button
        variant="text"
        color="error"
        onClick={() => {
          setModalTitle("Delete Service");
          setId(service.id);
          setName(service.name);
          setDescription(service.description);
          setContent(service.content);
          setOpenDeleteServiceModal(true);
        }}
      >
        Delete
      </Button>
    );
  };

  const closeServiceModals = () => {
    setName("");
    setDescription("");
    setContent("");
    setOpenServiceModal(false);
    setOpenDeleteServiceModal(false);
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
        <div className="text-xl font-bold pb-4">Service Admin</div>
        <Button
          sx={{ fontWeight: "bold" }}
          variant="contained"
          color="primary"
          onClick={() => {
            setModalTitle("Add Service");
            setOpenServiceModal(true);
          }}
        >
          {" "}
          Add{" "}
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
                align="left"
              >
                Name
              </TableCell>

              <TableCell
                sx={{ typography: "subtitle1", fontWeight: "bold" }}
                align="center"
              >
                Description
              </TableCell>
              <TableCell
                sx={{ typography: "subtitle1", fontWeight: "bold" }}
                align="center"
              >
                Created By
              </TableCell>
              <TableCell
                sx={{ typography: "subtitle1", fontWeight: "bold" }}
                align="center"
              >
                Status
              </TableCell>
              <TableCell
                sx={{ typography: "subtitle1", fontWeight: "bold" }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                {/* <TableCell align="left">{row.content}</TableCell> */}
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="center">
                  {row.servicesCreatedBy?.username}
                </TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell>
                  {editServiceButton(row)} {deleteServiceButton(row)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={openServiceModal}
        onClose={() => closeServiceModals()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <InputLabel sx={{ typography: "subtitle1", fontWeight: "bold" }}>
            {modalTitle}
          </InputLabel>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="Content"
            variant="outlined"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
          />
          <Button
            sx={{ fontWeight: "bold", marginTop: "1rem" }}
            variant="contained"
            color="primary"
            onClick={() => {
              if (id === "") {
                createService();
                closeServiceModals();
              } else {
                updateService();
                closeServiceModals();
              }
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>

      {/* Delete confirmation modal */}
      <Modal
        open={openDeleteServiceModal}
        onClose={() => closeServiceModals()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography sx={{ typography: "subtitle1", fontWeight: "bold" }}>
            Are you sure you want to delete service {id}?
          </Typography>
          <div className="flex flex-row justify-around w-full">
            <Button
              sx={{ fontWeight: "bold", marginTop: "1rem" }}
              variant="contained"
              color="primary"
              onClick={() => closeServiceModals()}
            >
              {" "}
              No{" "}
            </Button>
            <Button
              sx={{ fontWeight: "bold", marginTop: "1rem" }}
              variant="contained"
              color="error"
              onClick={() => {
                deleteService();
                closeServiceModals();
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

export default ServiceAdmin;
