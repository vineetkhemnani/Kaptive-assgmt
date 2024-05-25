import { DataGrid } from '@mui/x-data-grid'
import data from './constants/data.js'
import { Box } from '@mui/material'

const columns = [
  {
    field: 'Overhead',
    headerName: 'CashFlow',
    width: 240,
    sortable: false,
    disableColumnMenu: true,
    cellClassName: 'cashflow-cell',
  },
  {
    field: 'Jan',
    headerName: 'January',
    width: 150,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
  {
    field: 'Feb',
    headerName: 'February',
    width: 150,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
  {
    field: 'March',
    headerName: 'March',
    width: 150,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
  {
    field: 'April',
    headerName: 'April',
    width: 150,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
  {
    field: 'May',
    headerName: 'May',
    width: 150,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
  {
    field: 'June',
    headerName: 'June',
    width: 150,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
  {
    field: 'July',
    headerName: 'July',
    width: 150,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
  {
    field: 'August',
    headerName: 'August',
    width: 150,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
  {
    field: 'September',
    headerName: 'September',
    width: 150,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
  {
    field: 'October',
    headerName: 'October',
    width: 150,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
  {
    field: 'November',
    headerName: 'November',
    width: 150,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
  {
    field: 'December',
    headerName: 'December',
    width: 150,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
]

const rows = data.Sheet1.map((item, index) => ({
  id: index + 1,
  ...item,
}))

const FinancialSummaryTable = ({currency}) => {
  return (
    <>
    
      <h3>CashFlow-1</h3>
      <Box
        style={{ height: 650, width: 1000, overflowX: 'auto' }}
        sx={{
          width: '100%',
          '& .MuiDataGrid-main': {
            fontSize: '12px',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#b9d5ff91',
            color: '#1a3e72',
            fontSize: '14px',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
          },
          '& .cashflow-cell': {
            color: 'black',
            fontWeight: '600',
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Box>
    </>
  )
}

export default FinancialSummaryTable
