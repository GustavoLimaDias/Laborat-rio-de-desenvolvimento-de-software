import { Box, Typography, Stack, Chip, Paper } from '@mui/material'
import experience from '../data/experience'

export default function Experience() {
  return (
    <Box>
      <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
        EXPERIÊNCIAS
      </Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: 28, md: 36 }, mb: 4 }}>
        Trajetória profissional
      </Typography>

      <Stack spacing={3}>
        {experience.map((exp) => (
          <Paper
            key={exp.id}
            variant="outlined"
            sx={{ p: 3, bgcolor: 'background.paper', borderColor: 'divider' }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ sm: 'flex-start' }}
              spacing={1}
            >
              <Box>
                <Typography variant="h3" sx={{ fontSize: 18 }}>
                  {exp.role}
                </Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main', mt: 0.5 }}>
                  {exp.company}
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  fontFamily: "'IBM Plex Mono', monospace",
                  whiteSpace: 'nowrap',
                }}
              >
                {exp.period}
              </Typography>
            </Stack>

            <Typography variant="body2" sx={{ mt: 2, color: 'text.primary', lineHeight: 1.7 }}>
              {exp.description}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
              {exp.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    bgcolor: 'background.default',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                />
              ))}
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  )
}
