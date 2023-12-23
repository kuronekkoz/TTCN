import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, name, email, sdt, time, dichVu) {
  return { id, name, email, sdt, time, dichVu };
}

const rows = [
  createData(
    1,
    "Trinh Viet Hoang",
    "trinhviethoang@gmail.com",
    "0382751836",
    24,
    "xét nghiệm"
  ),
  createData(2, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Cupcake", 305, 3.7, 67, 4.3),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Board() {
  const handleOnClickOk = (id) => {
    console.log(id);
  };
  const handleOnClickNo = (id) => {
    console.log(id);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Họ và tên</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">Số điện thoại</TableCell>
            <TableCell align="right">Thời gian đặt khám</TableCell>
            <TableCell align="right">Dịch vụ</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.sdt}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.dichVu}</TableCell>
              <TableCell align="right" className="cursor-pointer">
                <button
                  className="border bg-blue-500 text-white text-xl w-14 hover:bg-dark-blue"
                  onClick={() => handleOnClickOk(row.id)}
                >
                  yes
                </button>
              </TableCell>
              <TableCell align="left" className="cursor-pointer">
                <button
                  className="border bg-red-500 text-white text-xl  w-14"
                  onClick={() => handleOnClickNo(row.id)}
                >
                  no
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
