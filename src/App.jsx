import { useState } from 'react'
import BasicSelect from './BasicSelect'
import FinancialSummaryTable from './FinancialSummaryTable'
import Footer from './Footer'
import BarCharts from './BarCharts'
import LeftDrawer from './LeftDrawer'
import { Box, Container } from '@mui/material'
import Header from './Header'

const App = () => {
  const [currency, setCurrency] = useState(1)
  const [decimal, setDecimal] = useState(0)
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box className="no-print" sx={{ width: '15%' }}>
          <LeftDrawer />
        </Box>

        <Container
          sx={{
            width: '85%',
            '@media print': {
              width: '100%',
            },
          }}
        >
          <Header />
          <BarCharts />
          <BasicSelect
            currency={currency}
            setCurrency={setCurrency}
            decimal={decimal}
            setDecimal={setDecimal}
          />
          <FinancialSummaryTable currency={currency} decimal={decimal} />
        </Container>
      </Box>
      <Footer />
    </>
  )
}
export default App
