import { Box, Stack, Typography, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

// TODO: atualize com seus links reais
const SOCIAL_LINKS = {
  github: 'https://github.com/seu-usuario',
  linkedin: 'https://linkedin.com/in/seu-usuario',
  email: 'mailto:seuemail@example.com',
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 3,
        px: { xs: 2, md: 4 },
        mt: 8,
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography
          variant="caption"
          sx={{ color: 'text.secondary', fontFamily: "'IBM Plex Mono', monospace" }}
        >
          © {new Date().getFullYear()} Gustavo Lima Dias — build v1.0
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            aria-label="GitHub"
            sx={{ color: 'text.secondary' }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            aria-label="LinkedIn"
            sx={{ color: 'text.secondary' }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton
            href={SOCIAL_LINKS.email}
            size="small"
            aria-label="E-mail"
            sx={{ color: 'text.secondary' }}
          >
            <EmailIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  )
}
