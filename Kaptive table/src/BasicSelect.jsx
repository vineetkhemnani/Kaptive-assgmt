import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function BasicSelect({
  currency,
  setCurrency,
  decimal,
  setDecimal,
}) {
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value)
  }
  const handleDecimalChange = (event) => {
    setDecimal(event.target.value)
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          my: 2,
        }}
      >
        <FormControl fullWidth sx={{ maxWidth: 120, mx: 2 }}>
          <InputLabel id="demo-simple-select-label">Decimal</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={decimal}
            label="Decimal"
            onChange={handleDecimalChange}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ maxWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            label="Currency"
            onChange={handleCurrencyChange}
          >
            <MenuItem value={1}>Rupees</MenuItem>
            <MenuItem value={100}>Euros</MenuItem>
            <MenuItem value={83}>Dollars</MenuItem>
          </Select>
        </FormControl>
        {/* {console.log(currency)} */}
      </Box>
    </>
  )
}
