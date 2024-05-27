import {
  Box,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  Divider,
  Typography,
  Avatar,
  Container
} from '@mui/material'
import { FaChartBar } from 'react-icons/fa'
import { TbTableShare } from 'react-icons/tb'
import { BiSolidReport } from 'react-icons/bi'
import { MdOutlineLogout } from 'react-icons/md'

const LeftDrawer = () => {
  return (
    <Box
      className="gradient-1 " //apply gradient
      sx={{
        width: '100%',
        mr: 2,
        minHeight: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent:'space-between'
      }}
    >
      <Box sx={{width:'85%'}}>

      <Typography
        color="white"
        sx={{
          fontWeight: '900',
          ml: 3,
          pt: 3,
          fontSize: '30px',
          letterSpacing: '-1px',
        }}
        >
        PLSE
      </Typography>
      <List sx={{ width: '100%', ml: 2 }}>
        <ListItem
          disablePadding
          sx={{
            color: 'white',
            '&:hover': {
              background: '#7d80f3',
            },
            borderRadius: '5px',
            width: '100%',
          }}
        >
          <ListItemButton sx={{ paddingLeft: 1 }}>
            <ListItemIcon sx={{ minWidth: '25px' }}>
              <FaChartBar color="white" />
            </ListItemIcon>
            <ListItemText primary="Charts" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            color: 'white',
            '&:hover': {
              background: '#7d80f3',
            },
            borderRadius: '5px',
            width: '100%',
          }}
        >
          <ListItemButton sx={{ paddingLeft: 1 }}>
            <ListItemIcon sx={{ minWidth: '25px' }}>
              <TbTableShare color="white" />
            </ListItemIcon>
            <ListItemText primary="Tables" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            color: 'white',
            '&:hover': {
              background: '#7d80f3',
            },
            borderRadius: '5px',
            width: '100%',
          }}
        >
          <ListItemButton sx={{ paddingLeft: 1 }}>
            <ListItemIcon sx={{ minWidth: '25px' }}>
              <BiSolidReport color="white" />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            color: 'white',
            '&:hover': {
              background: '#7d80f3',
            },
            borderRadius: '5px',
            width: '100%',
          }}
        >
          <ListItemButton sx={{ paddingLeft: 1 }}>
            <ListItemIcon sx={{ minWidth: '25px' }}>
              <BiSolidReport color="white" />
            </ListItemIcon>
            <ListItemText primary="Forecast" />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
      <Divider
        sx={{ mt: 10, bgcolor: 'white', width: '85%', alignSelf: 'center' }}
        />

      <Box>
        {/* user */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            background: '#7d80f3',
            m: 1,
            px: 1,
            color: 'white',
            fontSize: '12px',
            borderRadius: '5px',
          }}
        >
          <Avatar />
          <Container>
            <p>Abhishek Lohia</p>
            <p>User</p>
          </Container>
        </Box>

          {/* logout */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            background: '#7d80f3',
            m: 1,
            px: 1,
            color: 'white',
            fontSize: '14px',
            borderRadius: '5px',
            width: '80%',
          }}
        >
          <MdOutlineLogout />
          <Container>
            <p>Logout</p>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default LeftDrawer
