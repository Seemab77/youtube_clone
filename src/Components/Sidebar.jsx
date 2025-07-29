// src/components/Sidebar.jsx
import React from 'react'
import { Stack, Button, Box } from '@mui/material'
import { categories }         from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction={{ xs: 'row', md: 'column' }}
    spacing={1}
    sx={{
      // Always prevent wrapping—everything lives in one line/column
      flexWrap:    'nowrap',

      // On mobile, allow horizontal scrolling
      overflowX:   { xs: 'auto', md: 'hidden' },
      overflowY:   'hidden',

      // Hide native scrollbars in WebKit & Firefox
      '&::-webkit-scrollbar':     { display: 'none' },
      msOverflowStyle:            'none', 
      scrollbarWidth:             'none',

      // A little padding & a divider on XS
      px:           { xs: 1,    md: 0 },
      py:           { xs: 1,    md: 0 },
      borderBottom: { xs: '1px solid #3d3d3d', md: 'none' },

      // Keep the desktop height full
      height:       { xs: 'auto', md: '95%' },

      // Center row pills on mobile
      justifyContent: { xs: 'flex-start', md: 'flex-start' }
    }}
  >
    {categories.map((cat) => {
      const isSelected = cat.name === selectedCategory
      return (
        <Button
          key={cat.name}
          size="small"
          onClick={() => setSelectedCategory(cat.name)}
          sx={{
            flexShrink:     0, // never shrink the pill
            display:        'flex',
            alignItems:     'center',
            textTransform:  'none',
            borderRadius:   '50px',
            backgroundColor: isSelected ? '#FC1503' : 'transparent',
            px:             { xs: 1, md: 2 },
            py:             { xs: 0.5, md: 1 },
            minWidth:       { xs: 'auto', md: 120 }
          }}
        >
          {/* Icon always red unless selected */}
          <Box
            component="span"
            sx={{
              color: isSelected ? '#fff' : 'red',
              mr:    1
            }}
          >
            {cat.icon}
          </Box>

          {/* Text always white */}
          <Box
            component="span"
            sx={{
              color:   '#fff',
              opacity: isSelected ? 1 : 0.8
            }}
          >
            {cat.name}
          </Box>
        </Button>
      )
    })}
  </Stack>
)

export default Sidebar
