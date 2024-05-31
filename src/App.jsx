import { useState } from 'react'
import BasicSelect from './BasicSelect'
import FinancialSummaryTable from './FinancialSummaryTable'
import Footer from './Footer'
import BarCharts from './BarCharts'
import LeftDrawer from './LeftDrawer'
import { Box, Container } from '@mui/material'
import Header from './Header'
import FinancialSummary from './FinancialSummary'

const App = () => {
  // global states to manage currency and decimals
  const [currency, setCurrency] = useState(1)
  const [decimal, setDecimal] = useState(0)
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {/* 2 boxes for left drawer and tables */}
        <Box className="no-print" sx={{ width: '15%' }}>
          <LeftDrawer />
        </Box>

        <Container
          sx={{
            width: '85%',
            // when printing take 100% of page width with default margin
            '@media print': {
              width: '100%',
            },
          }}
        >
          <Header />
          <BarCharts />
          {/* select boxes for currency and decimals */}
          <BasicSelect
            currency={currency}
            setCurrency={setCurrency}
            decimal={decimal}
            setDecimal={setDecimal}
          />
          {/* main financial summary table */}
          {/* <FinancialSummaryTable currency={currency} decimal={decimal} /> */}
          
          <Box style={{ height: 650, width: 'auto' }}>
            <FinancialSummary decimal={decimal} currency={currency}/>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
export default App
