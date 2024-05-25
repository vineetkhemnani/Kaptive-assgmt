import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'
import FinancialSummaryTable from './FinancialSummaryTable'

export default function BasicSelect({currency,setCurrency}) {

  const handleChange = (event) => {
    setCurrency(event.target.value)
  }

  return (
    <Box sx={{ width: '10%', my: 4 }}>
      <FormControl fullWidth sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="Currency"
          onChange={handleChange}
        >
          <MenuItem value={1}>Rupees</MenuItem>
          <MenuItem value={100}>Euros</MenuItem>
          <MenuItem value={83}>Dollars</MenuItem>
        </Select>
      </FormControl>
      {console.log(currency)}
    </Box>
  )
}
