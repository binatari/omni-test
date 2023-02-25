import { Box } from '@mui/material'
import React from 'react'

const Layout = ({children}) => {
  return (
   <Box bgcolor={'#F6F6F6'} minHeight={'100vh'} >
    {children}
   </Box>
  )
}

export default Layout