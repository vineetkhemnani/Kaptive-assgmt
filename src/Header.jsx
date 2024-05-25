import { Box, Button, Container } from '@mui/material'
const Header = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box>
        <Button size="small" variant="outlined">
          Summary
        </Button>
        <Button size="small" variant="outlined">
          Balance Sheet
        </Button>
        <Button size="small" variant="outlined">
          Income Statement
        </Button>
        <Button size="small" variant="outlined">
          Cashflow
        </Button>
        {/* <Button variant="outlined"></Button> */}
      </Box>
      <Box>
        <Button size="small" variant="outlined">
          Normal View
        </Button>
        <Button size="small" variant="outlined">
          Growth View
        </Button>
        <Button size="small" variant="outlined">
          Period From
        </Button>
        <Button size="small" variant="outlined">
          Period To
        </Button>
      </Box>
    </Container>
  )
}
export default Header
