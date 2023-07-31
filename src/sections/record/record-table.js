import PropTypes from "prop-types";
import { format } from "date-fns";
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { getInitials } from "src/utils/get-initials";
import { RecordSearch } from "./record-search";

export const RecordTable = (props) => {
    const {
        count = 0,
        items = [],
        onDeselectAll,
        onDeselectOne,
        onPageChange = () => { },
        onRowsPerPageChange,
        onSelectAll,
        onSelectOne,
        page = 0,
        rowsPerPage = 0,
        selected = [],
    } = props;

    const selectedSome = selected.length > 0 && selected.length < items.length;
    const selectedAll = items.length > 0 && selected.length === items.length;

    return (
        <Card>
            <Scrollbar>
                <Box sx={{ minWidth: 800 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>User ID</TableCell>
                                <TableCell>User Name</TableCell>
                                <TableCell>Shirt Status</TableCell>
                                <TableCell>Variance</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((customer) => {
                                const isSelected = selected.includes(customer.id);

                                return (
                                    <TableRow hover key={customer.id} selected={isSelected}>
                                        <TableCell>
                                            <Stack alignItems="center" direction="row" spacing={2}>
                                                {/* <Avatar src={customer.avatar}>{getInitials(customer.name)}</Avatar> */}
                                                <Typography variant="subtitle2">{customer.userId}</Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>{customer.name}</TableCell>
                                        <TableCell> {customer.status} </TableCell>
                                        <TableCell>{customer.variance}</TableCell>
                                        <TableCell>{customer.date}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </Scrollbar>
            <TablePagination
                component="div"
                count={count}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
};

RecordTable.propTypes = {
    count: PropTypes.number,
    items: PropTypes.array,
    onDeselectAll: PropTypes.func,
    onDeselectOne: PropTypes.func,
    onPageChange: PropTypes.func,
    onRowsPerPageChange: PropTypes.func,
    onSelectAll: PropTypes.func,
    onSelectOne: PropTypes.func,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    selected: PropTypes.array,
};
