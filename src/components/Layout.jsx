import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SystemStatusBar from './SystemStatusBar'

export default function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <SystemStatusBar />
      <Box component="main" sx={{ flex: 1, px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 } }}>
        <Box sx={{ maxWidth: 960, mx: 'auto' }}>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
