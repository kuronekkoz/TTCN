import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, name, description) {
  return { id, name, description };
}

const rows = [
  createData(1, "Trinh Viet Hoang", "ababa"),
  createData(2, "Ice cream sandwich", "asdfsadfhjk"),
  createData(3, "Eclair", "sdfkjhasdjkfh8wer"),
];

export default function ServiceBoard() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Tên dịch vụ</TableCell>
            <TableCell align="left">Mô tả</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
