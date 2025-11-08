import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';
import { posts } from '../mock/data'

const users = [
    { name: "Alice", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "Editor" },
];

export default function PostTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Post</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Sharing time</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Publish Status</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{user.post}</TableCell>
                                <TableCell>{user.type}</TableCell>
                                <TableCell>{user.sharingTime}</TableCell>
                                <TableCell>{user.status}</TableCell>
                                <TableCell>{user.publishStatus}</TableCell>
                                <TableCell>{user.author}</TableCell>
                                <TableCell>{user.actions}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={users.length}
                page={page}
                onPageChange={(e, newPage) => setPage(newPage)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value))}
            />
        </Paper>
    );
}
