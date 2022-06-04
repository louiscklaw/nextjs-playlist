import { Paper, Stack } from '@mui/material'
import Container from '@mui/material/Container'
import * as React from 'react'
import { useState } from 'react'

import BottomList from '../components/BottomList'
import NavMenu from '../components/NavMenu'

export default function Work() {
  let [mobile_menu_open, setMobileMenuOpen] = useState(false)

  return (
    <Paper elevation={0}>
      <Stack spacing={25}>
        <NavMenu setMobileMenuOpen={setMobileMenuOpen} />
        <BottomList />
      </Stack>
    </Paper>
  )
}
