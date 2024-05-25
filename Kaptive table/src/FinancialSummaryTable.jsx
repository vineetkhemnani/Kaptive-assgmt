import { DataGrid } from '@mui/x-data-grid'
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
  },
  {
    field: 'Jan',
    headerName: 'January',
    width: 140,
  },
  {
    field: 'Feb',
    headerName: 'February',
    width: 140,
  },
  {
    field: 'March',
    headerName: 'March',
    width: 140,
  },
  {
    field: 'April',
    headerName: 'April',
    width: 140,
  },
  {
    field: 'May',
    headerName: 'May',
    width: 140,
  },
  {
    field: 'June',
    headerName: 'June',
    width: 140,
  },
  {
    field: 'July',
    headerName: 'July',
    width: 140,
  },
  {
    field: 'August',
    headerName: 'August',
    width: 140,
  },
  {
    field: 'September',
    headerName: 'September',
    width: 140,
  },
  {
    field: 'October',
    headerName: 'October',
    width: 140,
  },
  {
    field: 'November',
    headerName: 'November',
    width: 140,
  },
  {
    field: 'December',
    headerName: 'December',
    width: 140,
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
        <h3>CashFlow-1</h3>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePrint}
          sx={{ height: '40px' }}
        >
          Print
        </Button>
      </Box>

      <Box
        style={{ height: 650, width: 1000, overflowX: 'auto' }}
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
          '& .cashflow-cell': {
            color: 'black',
            fontWeight: '600',
          },
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
          disableColumnMenu="true"
        />
      </Box>
    </>
  )
}

export default FinancialSummaryTable
