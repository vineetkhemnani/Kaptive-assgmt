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

  // currency change handler
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value)
  }

  // decimal change handler
  const handleDecimalChange = (e) => {
    setDecimal(e.target.value)
  }

  return (
    <>
    {/* box layout for decimal and currency */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          my: 2,
        }}
      >
        {/* decimal box */}
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

        {/* form control for currency exchange */}
        <FormControl fullWidth sx={{ maxWidth: 160 }}>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            label="Currency"
            onChange={handleCurrencyChange}
          >
            <MenuItem value={1}>INR (Rupees)</MenuItem>
            <MenuItem value={100}>EURO (Euros)</MenuItem>
            <MenuItem value={83}>USD (Dollars)</MenuItem>
            <MenuItem value={105.78}>GBP (Pound)</MenuItem>
          </Select>
        </FormControl>
        {/* {console.log(currency)} */}
      </Box>
    </>
  )
}
