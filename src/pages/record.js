import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { Box, Button, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { RecordTable } from "src/sections/record/record-table";
import { applyPagination } from "src/utils/apply-pagination";
import { RecordSearch } from "src/sections/record/record-search";

const now = new Date();

const data = [
  {
    id: "5e887ac47eed253091be10cb",
    avatar: "/assets/avatars/avatar-carson-darrin.png",
    variance:"0.22969",
    status:"Accepted",
    date:"25-8-2023",
    userId: "0028",
    name: "Raees",
   
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    avatar: "/assets/avatars/avatar-fran-perez.png",
    variance:"0.28779",
    status:"Accepted",
    date:"25-8-2023",
    userId: "0022",
    name: "Ebad",
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    avatar: "/assets/avatars/avatar-fran-perez.png",
    variance:"0.28459",
    status:"Accepted",
    date:"25-8-2023",
    userId: "0025",
    name: "Mursaleen",
    
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    avatar: "/assets/avatars/avatar-fran-perez.png",
    variance:"0.28936",
    status:"Rejected",
    date:"25-8-2023",
    userId: "0095",
    name: "zeshan",
    
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    avatar: "/assets/avatars/avatar-fran-perez.png",
    variance:"0.28899",
    status:"Accepted",
    date:"25-8-2023",
    userId: "0075",
    name: "Mursaleen",
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    avatar: "/assets/avatars/avatar-fran-perez.png",
    variance:"0.26539",
    status:"Accepted",
    date:"25-8-2023",
    userId: "0065",
    name: "Akbar",
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    avatar: "/assets/avatars/avatar-fran-perez.png",
    variance:"0.28899",
    status:"Rejected",
    date:"25-8-2023",
    userId: "0035",
    name: "Yonus",
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    avatar: "/assets/avatars/avatar-fran-perez.png",
    variance:"0.25484",
    status:"Rejected",
    date:"25-8-2023",
    userId: "0085",
    name: "Ali",
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
        <title>Record | Admin Panel</title>
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
                <Typography variant="h4">Tshirt Records</Typography>
              </Stack>
            </Stack>
            <RecordSearch/>
            {/* <CompaniesSearch /> */}
            <RecordTable
              count={data.length}
              items={customers}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              page={page}
              rowsPerPage={rowsPerPage}
            />

          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
