import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import TranslateIcon from '@mui/icons-material/Translate'
import { useLanguage } from '../context/LanguageContext'

const NAV_ITEMS = [
  { to: '/', label: { pt: 'Sobre Mim', en: 'About' } },
  { to: '/projetos', label: { pt: 'Projetos', en: 'Projects' } },
  { to: '/experiencias', label: { pt: 'Experiências', en: 'Experience' } },
  { to: '/contato', label: { pt: 'Contato', en: 'Contact' } },
]

export default function Header() {
  const { lang, toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)

  const navLinkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#F2A93B' : '#E7EAEE',
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 13,
    letterSpacing: '0.04em',
    borderBottom: isActive ? '2px solid #F2A93B' : '2px solid transparent',
    paddingBottom: 4,
  })

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: 'background.default', borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        <Typography
          component={NavLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'text.primary',
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          gustavo<Box component="span" sx={{ color: 'primary.main' }}>.</Box>dev
        </Typography>

        <Stack direction="row" spacing={4} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} style={navLinkStyle} end={item.to === '/'}>
              {item.label[lang]}
            </NavLink>
          ))}
          <Button
            onClick={toggleLang}
            startIcon={<TranslateIcon fontSize="small" />}
            size="small"
            sx={{ color: 'text.secondary', fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </Button>
        </Stack>

        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: 'inline-flex', md: 'none' }, color: 'text.primary' }}
          aria-label="Abrir menu de navegação"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 240, bgcolor: 'background.paper', height: '100%' }}
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <List>
            {NAV_ITEMS.map((item) => (
              <ListItemButton key={item.to} component={NavLink} to={item.to} end={item.to === '/'}>
                <ListItemText
                  primary={item.label[lang]}
                  primaryTypographyProps={{ fontFamily: "'IBM Plex Mono', monospace" }}
                />
              </ListItemButton>
            ))}
            <ListItemButton onClick={toggleLang}>
              <ListItemText primary={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'} />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
