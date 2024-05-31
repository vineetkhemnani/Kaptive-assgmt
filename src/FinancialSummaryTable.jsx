import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import data from './constants/data.js'
import { Box, Button } from '@mui/material'

const columns = [
  {
    field: 'Overhead',
    headerName: 'CashFlow',
    width: 200,
    sortable: false,
    disableColumnMenu: true,
    cellClassName: 'cashflow-cell',
    headerClassName: 'cashflow',
  },
  {
    field: 'Jan',
    headerName: 'January',
    width: 150,
  },
  {
    field: 'Feb',
    headerName: 'February',
    width: 150,
  },
  {
    field: 'March',
    headerName: 'March',
    width: 150,
  },
  {
    field: 'April',
    headerName: 'April',
    width: 150,
  },
  {
    field: 'May',
    headerName: 'May',
    width: 150,
  },
  {
    field: 'June',
    headerName: 'June',
    width: 150,
  },
  {
    field: 'July',
    headerName: 'July',
    width: 150,
  },
  {
    field: 'August',
    headerName: 'August',
    width: 150,
  },
  {
    field: 'September',
    headerName: 'September',
    width: 150,
  },
  {
    field: 'October',
    headerName: 'October',
    width: 150,
  },
  {
    field: 'November',
    headerName: 'November',
    width: 150,
  },
  {
    field: 'December',
    headerName: 'December',
    width: 150,
  },
]

const rows = data.Sheet1.map((item, index) => ({
  id: index + 1,
  ...item,
}))

const FinancialSummaryTable = ({ currency, decimal }) => {
  // Utility function to add valueFormatter to specific columns
  const applyValueFormatter1 = (columns) => {
    return columns.map((column) => {
      if (column.field !== 'Overhead') {
        return {
          ...column,
          valueFormatter: ({ value }) => (value / currency).toFixed(decimal),
        }
      }
      return column
    })
  }

  const formattedColumns = applyValueFormatter1(columns)

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h3>CashFlow Summary-1</h3>
        <Button
          variant="contained"
          color="primary"
          className="no-print"
          onClick={handlePrint}
          sx={{ height: '40px' }}
        >
          Print
        </Button>
      </Box>

      <Box
        style={{ height: 650, width: 'auto' }}
        sx={{
          width: '100%',
          '& .MuiDataGrid-main': {
            fontSize: '10px',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#b9d5ff91',
            color: '#1a3e72',
            fontSize: '12px',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
          },
          // '& .cashflow-cell': {
          //   color: 'black',
          //   fontWeight: '600',
          //   position: 'sticky',
          //   left: 0,
          //   background: 'white',
          //   zIndex: 1,
          //   boxShadow: '2px 0 5px -2px rgba(0,0,0,0.2)', // Optional shadow for better visibility
          // },
          // '& .cashflow': {
          //   position: 'sticky',
          //   left: 0,
          //   zIndex: 1, // Ensure it is above the cells
          //   background: '#b9d5ff91',
          //   boxShadow: '2px 0 5px -2px rgba(0,0,0,0.2)', // Optional shadow for better visibility
          // },
        }}
      >
        <DataGrid
          rows={rows}
          columns={formattedColumns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          disableColumnMenu
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              printOptions: {
                allColumns: true, // Ensure all columns are included in the print
              },
            },
          }}
          sx={{
            '@media print': {
              '.MuiDataGrid-main': { margin: '5px', fontSize: '10px' },
            },
          }}
        />
      </Box>
    </>
  )
}

export default FinancialSummaryTable
