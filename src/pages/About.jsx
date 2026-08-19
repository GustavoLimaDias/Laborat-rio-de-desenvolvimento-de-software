import { Box, Typography, Stack, Chip } from '@mui/material'
import { useLanguage } from '../context/LanguageContext'

const content = {
  pt: {
    eyebrow: 'SOBRE MIM',
    heading: 'Gustavo Lima Dias',
    subheading: 'Backend Developer · Sistemas Industriais',
    paragraphs: [
      'Sou estudante de Engenharia de Software na PUC Minas e atualmente estagiário na Vallourec, onde atuo com soluções tecnológicas aplicadas a ambientes industriais.',
      'Minha experiência é focada em desenvolvimento backend e integração de sistemas industriais, trabalhando diretamente com sistemas reais e ambientes de produção. No meu papel atual, contribuo com projetos envolvendo desenvolvimento de APIs e integração de endpoints, sistemas de rastreamento industrial, configuração de drivers e suporte a sistemas, e integração com equipamentos industriais internacionais (sistemas de marcação).',
      'Através dessa experiência, desenvolvi uma base sólida em desenvolvimento backend, bancos de dados e boas práticas de engenharia de software, sempre buscando construir soluções confiáveis, eficientes e escaláveis.',
      'Sou altamente adaptável e reconhecido pela capacidade de aprendizado rápido, resolução de problemas e trabalho em equipe, especialmente em ambientes dinâmicos e desafiadores como o setor industrial.',
    ],
    goalLabel: 'OBJETIVO',
    goal:
      'Crescer como desenvolvedor backend, contribuindo para projetos de impacto, resolvendo problemas reais e evoluindo técnica e profissionalmente.',
    tags: ['Backend Development', 'APIs', 'Integração de Sistemas', 'Bancos de Dados', 'Arquitetura de Software'],
  },
  en: {
    eyebrow: 'ABOUT ME',
    heading: 'Gustavo Lima Dias',
    subheading: 'Backend Developer · Industrial Systems',
    paragraphs: [
      "I am a Software Engineering student at PUC Minas and currently an intern at Vallourec, where I work on technology solutions applied to industrial environments.",
      'My experience is focused on backend development and industrial systems integration, working directly with real-world systems and production environments. In my current role, I contribute to projects involving API development and endpoint integration, industrial tracking systems, driver configuration and system support, and integration with international industrial equipment (marking systems).',
      'Through this experience, I have developed a strong foundation in backend development, databases, and software engineering best practices, always aiming to build reliable, efficient, and scalable solutions.',
      'I am highly adaptable and recognized for my fast learning, problem-solving skills, and teamwork, especially in dynamic and challenging environments like the industrial sector.',
    ],
    goalLabel: 'GOALS',
    goal:
      'My goal is to grow as a backend developer, contributing to impactful projects, solving real-world problems, and continuously evolving both technically and professionally.',
    tags: ['Backend Development', 'APIs', 'System Integration', 'Databases', 'Software Architecture'],
  },
}

export default function About() {
  const { lang } = useLanguage()
  const c = content[lang]

  return (
    <Box>
      <Typography
        variant="overline"
        sx={{ color: 'primary.main', display: 'block', mb: 1 }}
      >
        {c.eyebrow}
      </Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: 32, md: 44 }, mb: 1 }}>
        {c.heading}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: 16, color: 'secondary.main', mb: 4, fontWeight: 400 }}>
        {c.subheading}
      </Typography>

      <Stack spacing={2.5} sx={{ maxWidth: 720 }}>
        {c.paragraphs.map((p, i) => (
          <Typography key={i} variant="body1" sx={{ color: 'text.primary', lineHeight: 1.75 }}>
            {p}
          </Typography>
        ))}
      </Stack>

      <Box
        sx={{
          mt: 5,
          p: 3,
          border: '1px solid',
          borderColor: 'divider',
          borderLeft: '3px solid',
          borderLeftColor: 'primary.main',
          bgcolor: 'background.paper',
          maxWidth: 720,
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.secondary' }}>
          {c.goalLabel}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {c.goal}
        </Typography>
      </Box>

      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 4 }}>
        {c.tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              color: 'text.secondary',
            }}
          />
        ))}
      </Stack>
    </Box>
  )
}
