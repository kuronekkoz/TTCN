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
import appointmentApi from "../../api/appoimentApi";

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

const AppointmentAdmin = () => {
  const [userData, setUserData] = React.useState({});
  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [status, setStatus] = useState("");
  const [comming, setComming] = useState("");

  const handleClickOpen = (item) => {
    setOpen(true);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setOpen(false);
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
  useEffect(() => {
    const storedUserData = localStorage.getItem("loginInfo");
    const fecthApi = async (accessToken) => {
      const res = await appointmentApi.getAllAppointment(accessToken);
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

  const handleSubmitStatus = async (event) => {
    event.preventDefault();
    try {
      const res = await appointmentApi.updateAppointment(
        selectedItem.id,
        { status: status },
        userData.accessToken
      );
      toast.success("Cập nhật thành công");
      const res2 = await appointmentApi.getAllAppointment(userData.accessToken);
      setRows(res2.data.data);
    } catch (error) {
      toast.error("Cập nhật thất bại");
    }
  };
  const handleSubmitComming = async (event) => {
    event.preventDefault();
    try {
      const res = await appointmentApi.updateAppointment(
        selectedItem.id,
        { isComming: comming },
        userData.accessToken
      );
      toast.success("Cập nhật thành công");
      const res2 = await appointmentApi.getAllAppointment(userData.accessToken);
      setRows(res2.data.data);
    } catch (error) {
      toast.error("Cập nhật thất bại");
    }
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleChangeComming = (event) => {
    setComming(event.target.value);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Generic</TableCell>
            <TableCell>Order Time</TableCell>
            <TableCell>Service name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Comming</TableCell>
            <TableCell>Created at</TableCell>
            <TableCell>Updated by</TableCell>
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
                {row.fullName}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.address}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.phoneNumber}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.generic}
              </TableCell>
              <TableCell component="th" scope="row">
                {dayjs(row.appointmentTime).format("LLLL")}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.serviceInfo.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.status}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.isComming}
              </TableCell>
              <TableCell component="th" scope="row">
                {dayjs(row.createdAt).format("LLLL")}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.accountInfo.username}
              </TableCell>
              <TableCell component="th" scope="row">
                <Button variant="outlined" onClick={() => handleClickOpen(row)}>
                  Update
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={13} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={11}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              selectprops={{
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
          <DialogContentText>Update status & comming</DialogContentText>
          <Box
            sx={{ minWidth: 500 }}
            component="form"
            onSubmit={handleSubmitStatus}
            className="flex justify-center items-center mb-3"
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleChangeStatus}
              >
                <MenuItem value={1}>Active</MenuItem>
                <MenuItem value={0}>Deactive</MenuItem>
              </Select>
            </FormControl>
            <DialogActions>
              <Button type="submit" variant="outlined">
                Update
              </Button>
            </DialogActions>
          </Box>
          <Box
            sx={{ minWidth: 500 }}
            component="form"
            onSubmit={handleSubmitComming}
            className="flex justify-center items-center"
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Comming</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={comming}
                label="Comming"
                onChange={handleChangeComming}
              >
                <MenuItem value={1}>Comming</MenuItem>
                <MenuItem value={0}>No Comming</MenuItem>
              </Select>
            </FormControl>
            <DialogActions>
              <Button type="submit" variant="outlined">
                update
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default AppointmentAdmin;
