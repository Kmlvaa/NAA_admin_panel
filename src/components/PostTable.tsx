import { useEffect, useState } from 'react';
import { posts, type Post } from '../mock/data'
import { format } from "date-fns";
import { BsTrash3 } from 'react-icons/bs';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    MenuItem,
    Select,
    IconButton,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface PostTableProps {
    filteredPosts: Post[];
}

export default function PostTable({filteredPosts}: PostTableProps) {
    const [rowsPerPage, setRowsPerPage] = useState(() => {
        const saveRow = localStorage.getItem('rowsPerPage');
        return saveRow ? Number(saveRow) : 5;
    });
    const [page, setPage] = useState(() => {
        const saved = localStorage.getItem('postTablePage');
        return saved ? Number(saved) : 1;
    });

    useEffect(() => {
        localStorage.setItem('postTablePage', String(page));
        localStorage.setItem('rowsPerPage', String(rowsPerPage));
        setPage(1);
    }, [page, rowsPerPage, filteredPosts]);

    const totalPages = Math.ceil(filteredPosts.length / rowsPerPage);

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(1);
    };
    const displayedPosts = filteredPosts.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <Paper className="relative h-auto flex flex-col">
            <TableContainer className="flex-1 overflow-auto">
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell><p className='text-[#243C7B] font-semibold'>Post</p></TableCell>
                            <TableCell><p className='text-[#243C7B] font-semibold text-center'>Type</p></TableCell>
                            <TableCell><p className='text-[#243C7B] font-semibold text-center'>Sharing time</p></TableCell>
                            <TableCell><p className='text-[#243C7B] font-semibold text-center'>Status</p></TableCell>
                            <TableCell><p className='text-[#243C7B] font-semibold text-center'>Publish Status</p></TableCell>
                            <TableCell><p className='text-[#243C7B] font-semibold text-center'>Author</p></TableCell>
                            <TableCell><p className='text-[#243C7B] font-semibold text-center'>Actions</p></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {displayedPosts.map((post, idx) => (
                            <TableRow key={idx}>
                                <TableCell>
                                    <div className='flex flex-row gap-2'>
                                        <img src={post.image} alt='post image' className='w-32 h-24 rounded-xl' />
                                        <div className='w-40 text-start h-24'>
                                            <div className='font-semibold text-lg truncate'>{post.title}</div>
                                            <div className='line-clamp-3 text-[#787486]'>{post.description}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={`px-3 py-1 rounded-lg text-center w-fit m-auto ${post.type === 'News' ? 'bg-[#C4DEFF] text-[#243C7B]' : 'bg-[#F3E8FF] text-[#8200DB]'}`}>
                                        {post.type}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className='text-center font-semibold'>{format(new Date(post.sharingTime), "dd/MM/yyyy")}</div>
                                    <div className="text-[#787486] text-xs text-center">
                                        {format(new Date(post.sharingTime), "hh:mm a")}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={`px-3 py-1 rounded-lg text-center w-fit m-auto flex flex-row items-center gap-1 ${post.status === 'Active' ? 'bg-[#E7FFE1] text-[#145E00]' : 'bg-[#FDEEEE] text-[#D82C2C]'}`}>
                                        <div className={`w-1 h-1 rounded-full ${post.status === 'Active' ? 'bg-[#145E00]' : 'bg-[#D82C2C]'}`}></div>
                                        <p>{post.status}</p>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className='px-3 py-1 rounded-lg text-center w-fit m-auto flex flex-row items-center gap-1'>
                                        <div className={`w-1 h-1 rounded-full ${post.publishStatus === 'Published' ? 'bg-[#1DB100]' : 'bg-[#D82C2C]'}`}></div>
                                        <p>{post.publishStatus}</p>
                                    </div>
                                </TableCell>
                                <TableCell>{post.author}</TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        {post.actions?.map((Icon, index) => (
                                            <Icon key={index} className={`w-4 h-4 cursor-pointer ${Icon === BsTrash3 ? 'text-[#D82C2C] hover:text-[#ea7878]' : 'text-[#243C7B] hover:text-[#5577cd]'}`} />
                                        ))}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* Pagination */}
            <div className="flex items-center justify-center gap-8 p-4">
                <div className="flex items-center gap-2">
                    <IconButton
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                    >
                        <ChevronLeft />
                    </IconButton>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${page === i + 1 ? 'bg-[#243C7B] text-white' : 'text-black hover:bg-gray-200'
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <IconButton
                        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                    >
                        <ChevronRight />
                    </IconButton>
                </div>
                <div className="flex items-center gap-2">
                    <span>Page</span>
                    <Select value={rowsPerPage} onChange={handleChangeRowsPerPage} size="small">
                        {[5, 10, 15, 20].map((num) => (
                            <MenuItem key={num} value={num}>
                                {num}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </div>
        </Paper>
    );
}
