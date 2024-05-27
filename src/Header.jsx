import { Box, Button, Container } from '@mui/material'
const Header = () => {
  return (
    <Container className="no-print" sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
      <Box>
        <Button
          size="small"
          sx={{ color: 'black', fontWeight: 'bold', fontSize: '12px' }}
        >
          Summary
        </Button>
        <Button
          size="small"
          sx={{ color: 'black', fontWeight: 'bold', fontSize: '12px' }}
        >
          Balance Sheet
        </Button>
        <Button
          size="small"
          sx={{ color: 'black', fontWeight: 'bold', fontSize: '12px' }}
        >
          Income Statement
        </Button>
        <Button size="small" sx={{ fontWeight: 'bold', fontSize: '12px' }}>Cashflow
        </Button>
        {/* <Button ></Button> */}
      </Box>
      <Box>
        <Button size="small" sx={{ fontWeight: 'bold', fontSize: '12px' }}>
          Normal View
        </Button>
        <Button
          size="small"
          sx={{ color: 'black', fontWeight: 'bold', fontSize: '12px' }}
        >
          Growth View
        </Button>
        <Button
          size="small"
          sx={{ color: 'black', fontSize: '12px' }}
        >
          Period From
        </Button>
        <Button
          size="small"
          sx={{ color: 'black', fontSize: '12px' }}
        >
          Period To
        </Button>
      </Box>
    </Container>
  )
}
export default Header
