import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Box, Button, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CustomersTable } from "src/sections/customer/customers-table";
import { CustomerSearch } from "src/sections/customer/customer-search";
import { applyPagination } from "src/utils/apply-pagination";


const data = [
  { 

    
    id: "5e887ac47eed253091be10cb",
    address: {
      city: "Mobile",
      country: "Mobile",
      state: "Mobile",
    },
    type:"Mobile User",
    email: "ram@gmail.com",
    name: "Rameez",
    phone: "304-428-3097",
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
   type:"Desktop User",
    email: "Ebad@gmail.com",
    name: "Ebad",
    phone: "712-351-5711",
  },
  {
    id: "5e887b7602bdbc4dbb234b27",
    email: "raees@gmail.com",
    type:"Mobile User",
    name: "Raees ",
    phone: "770-635-2682",
  },
  {
    id: "5e86809283e28b96d2d38537",
  //  avatar:"/assets/avatars/white-shirt.jpeg",
    email: "umer@gmail.com",
    type:"Mobile User",
    name: "Umer",
    phone: "908-691-3242",
  },
  {
    id: "5e86809283e28b96d2d34537",
  //  avatar:"/assets/avatars/white-shirt.jpeg",
    email: "kamran@gmail.com",
    type:"Dektop User",
    name: "Kamran",
    phone: "908-691-3242",
  },
  {
    id: "5e86809283e28b96d2d38527",
  //  avatar:"/assets/avatars/white-shirt.jpeg",
    email: "dawood@gmail.com",
    type:"Mobile User",
    name: "Dawood ",
    phone: "908-691-3242",
  },
  {
    id: "5e86809283e28b96d2d38527",
  //  avatar:"/assets/avatars/white-shirt.jpeg",
    email: "mursaleen@gmail.com",
    type:"Mobile User",
    name: "Mursaleen ",
    phone: "908-691-3242",
  },
  {
    id: "5e86809283e28b96d2d38536",
  //  avatar:"/assets/avatars/white-shirt.jpeg",
    email: "imran@gmail.com",
    type:"Dektop User",
    name: "Imran ",
    phone: "908-691-3242",
  },
  {
    id: "5e86809283e28b96d2d38538",
  //  avatar:"/assets/avatars/white-shirt.jpeg",
    email: "hassan@gmail.com",
    type:"Dektop User",
    name: "Hassan ",
    phone: "908-691-3242",
  },

 
  
 
 
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

const useCustomerIds = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  return (
    <>
      <Head>
        <title>Users | Admin panel</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4"> All Users</Typography>
                <Stack alignItems="center" direction="row" spacing={1}></Stack>
              </Stack>
            </Stack>
{/* <CustomerSearch/> */}
            <CustomersTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
