import * as React from "react";
import PropTypes, { element } from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TableHead,
} from "@mui/material";
import dayjs from "dayjs";
import { useEffect } from "react";
import adminApi from "../../api/adminApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-toastify";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function AccountAdmin() {
  const [rows, setRows] = React.useState([]);
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [status, setStatus] = React.useState();
  const handleClickOpen = (item) => {
    setOpen(true);
    setSelectedItemId(item);
    setStatus(item.status);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  useEffect(() => {
    const storedUserData = localStorage.getItem("loginInfo");
    const fecthApi = async (accessToken) => {
      const res = await adminApi.getAllAccounts(accessToken);
      setRows(res.data.data);
    };
    if (storedUserData) {
      const accessToken = JSON.parse(storedUserData).accessToken;
      setUserData(JSON.parse(storedUserData));
      fecthApi(accessToken);
    } else {
      navigate("/login");
    }
  }, []);
  const handleSubmitAdd = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const account = {
      username: data.get("username"),
      password: data.get("password"),
    };
    try {
      const res = await adminApi.registerAccount(account, userData.accessToken);
      toast.success("Đăng ký thành công");
      const resGetAllData = await adminApi.getAllAccounts(userData.accessToken);
      setRows(resGetAllData.data.data);
      setOpenAdd(false);
    } catch (error) {
      toast.error("Đăng ký thất bại");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(status);
    try {
      const res = await adminApi.changeStatusAccount(
        selectedItemId.id,
        { status: status },
        userData.accessToken
      );
      toast.success("Cập nhật thành công");
      const resGetAllData = await adminApi.getAllAccounts(userData.accessToken);
      setRows(resGetAllData.data.data);
      setOpen(false);
    } catch (error) {
      toast.error("Cập nhật thất bại");
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={6}>
              <Button variant="outlined" onClick={handleClickOpenAdd}>
                Add
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created at</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.role}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.status === 1 ? "Active" : "Deactive"}
              </TableCell>
              <TableCell component="th" scope="row">
                {dayjs(row.createdAt).format("LLLL")}
              </TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => handleClickOpen(row)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={5}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              selectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change status</DialogTitle>
        <DialogContent>
          <DialogContentText>Update status account</DialogContentText>
          <Box sx={{ minWidth: 500 }} component="form" onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value={1}>Active</MenuItem>
                <MenuItem value={0}>Deactive</MenuItem>
              </Select>
            </FormControl>
            <DialogActions>
              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
      <Dialog open={openAdd} onClose={handleCloseAdd}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>Create new account</DialogContentText>
          <Box
            component="form"
            onSubmit={handleSubmitAdd}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="User Name"
              type="text"
              name="username"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              name="password"
              type="password"
              fullWidth
              variant="standard"
            />
            <Button type="submit" variant="outlined">
              Add
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </TableContainer>
  );
}
