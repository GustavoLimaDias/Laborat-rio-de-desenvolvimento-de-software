import { Box, Typography, Stack, Chip, Link, Paper } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import projects from '../data/projects'

export default function Projects() {
  return (
    <Box>
      <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
        PROJETOS
      </Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: 28, md: 36 }, mb: 1 }}>
        Linha do tempo de projetos
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 5, maxWidth: 640 }}>
        Do mais antigo ao mais recente. Cada entrada representa um sistema construído,
        com as tecnologias envolvidas e o repositório correspondente.
      </Typography>

      <Stack sx={{ position: 'relative' }}>
        {/* linha vertical da timeline */}
        <Box
          sx={{
            position: 'absolute',
            left: 7,
            top: 8,
            bottom: 8,
            width: '2px',
            bgcolor: 'divider',
          }}
        />
        <Stack spacing={4}>
          {projects.map((project) => (
            <Box key={project.id} sx={{ position: 'relative', pl: 5 }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 6,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  bgcolor: 'background.default',
                  border: '2px solid',
                  borderColor: 'primary.main',
                }}
              />
              <Paper
                variant="outlined"
                sx={{ p: 3, bgcolor: 'background.paper', borderColor: 'divider' }}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ sm: 'center' }}
                  spacing={1}
                >
                  <Typography variant="h3" sx={{ fontSize: 18 }}>
                    {project.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.secondary', fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {project.date}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ mt: 1.5, color: 'text.primary' }}>
                  {project.description}
                </Typography>

                {project.image && (
                  <Box
                    component="img"
                    src={project.image}
                    alt={`Captura de tela do projeto ${project.name}`}
                    sx={{ width: '100%', borderRadius: 1, mt: 2, border: '1px solid', borderColor: 'divider' }}
                  />
                )}

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
                  {project.tech.map((t) => (
                    <Chip
                      key={t}
                      label={t}
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

                <Link
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 2,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 13,
                    color: 'secondary.main',
                  }}
                >
                  <GitHubIcon fontSize="small" /> Ver repositório
                </Link>
              </Paper>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}
