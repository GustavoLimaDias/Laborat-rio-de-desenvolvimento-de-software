import { Box, Stack, Typography } from '@mui/material'

const pulseKeyframes = {
  '@keyframes pulse': {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.35 },
  },
}

/**
 * Barra de status inspirada em painéis de controle industrial (HMI).
 * É o "elemento de assinatura" da identidade visual: reforça o universo
 * profissional do Gustavo (sistemas industriais / backend) sem exagero.
 */
export default function SystemStatusBar() {
  return (
    <Box
      sx={{
        ...pulseKeyframes,
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        px: { xs: 2, md: 4 },
        py: 0.75,
      }}
    >
      <Stack
        direction="row"
        spacing={{ xs: 2, md: 4 }}
        alignItems="center"
        sx={{
          overflowX: 'auto',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12,
          color: 'text.secondary',
          whiteSpace: 'nowrap',
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: 'success.main',
              animation: 'pulse 2.4s ease-in-out infinite',
            }}
          />
          <Typography component="span" variant="inherit" sx={{ color: 'success.main' }}>
            STATUS: ONLINE
          </Typography>
        </Stack>
        <Typography component="span" variant="inherit">
          ROLE: Backend Developer Intern @ Vallourec
        </Typography>
        <Typography component="span" variant="inherit" sx={{ display: { xs: 'none', sm: 'inline' } }}>
          STACK: Node.js · APIs · SQL · Integração Industrial
        </Typography>
        <Typography component="span" variant="inherit" sx={{ display: { xs: 'none', md: 'inline' } }}>
          LOCATION: Belo Horizonte, BR
        </Typography>
      </Stack>
    </Box>
  )
}
