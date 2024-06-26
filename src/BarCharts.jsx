import { useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { axisClasses } from '@mui/x-charts/ChartsAxis'
import { Box, Button, Container, Typography } from '@mui/material'
import data from './constants/data'

const chartSetting = {
  yAxis: [
    {
      label: 'Cashflow',
    },
  ],
  width: 1100,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
    margin: 2,
  },
}

const valueFormatter = (value) => `${value} rupees`

// Number of items per page
const itemsPerPage = 4

export default function BarCharts() {
  const [page, setPage] = useState(0)

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0))
  }

  const getPaginatedData = (data, page) => {
    const startIndex = page * itemsPerPage
    return data.Sheet1.slice(startIndex, startIndex + itemsPerPage)
  }

  const paginatedData = getPaginatedData(data, page)
  console.log(paginatedData.length)

  return (
    <Box>
      <BarChart
        dataset={paginatedData}
        xAxis={[{ scaleType: 'band', dataKey: 'Overhead' }]}
        series={[
          { dataKey: 'Jan', label: 'January', valueFormatter },
          { dataKey: 'Feb', label: 'February', valueFormatter },
          { dataKey: 'March', label: 'March', valueFormatter },
          { dataKey: 'April', label: 'April', valueFormatter },
          { dataKey: 'May', label: 'May', valueFormatter },
          { dataKey: 'June', label: 'June', valueFormatter },
          { dataKey: 'July', label: 'July', valueFormatter },
          { dataKey: 'August', label: 'August', valueFormatter },
          { dataKey: 'September', label: 'September', valueFormatter },
          { dataKey: 'October', label: 'October', valueFormatter },
          { dataKey: 'November', label: 'November', valueFormatter },
          { dataKey: 'December', label: 'December', valueFormatter },
        ]}
        // Adjustments for legend (default is at top)
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'left' },
            padding: 0,
          },
        }}
        {...chartSetting}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 2,
          alignItems: 'center',
          height: 2,
        }}
      >
        <Button
          className="no-print"
          onClick={handlePrevPage}
          disabled={page === 0}
        >
          Previous
        </Button>
        <Typography
          sx={{
            '@media print': {
              width: '100%',
              textAlign:'center'
            },
          }}
        >
          Page {page + 1}
        </Typography>
        <Button
          className="no-print"
          onClick={handleNextPage}
          disabled={paginatedData.length < itemsPerPage}
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}
