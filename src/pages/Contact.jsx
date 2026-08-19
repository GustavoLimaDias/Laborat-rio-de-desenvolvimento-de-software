import { useState } from 'react'
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  IconButton,
  Paper,
  Alert,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import SendIcon from '@mui/icons-material/Send'

// TODO: atualize com seus dados reais de contato
const CONTACT_LINKS = [
  { icon: EmailIcon, label: 'E-mail', href: 'mailto:seuemail@example.com' },
  { icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/55XXXXXXXXXXX' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/seu-usuario' },
  { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/seu-usuario' },
]

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Informe seu nome.'
    if (!form.email.trim()) {
      next.email = 'Informe seu e-mail.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Informe um e-mail válido.'
    }
    if (!form.message.trim()) next.message = 'Escreva uma mensagem.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    try {
      // TODO (Sprint 02/03): integrar com um serviço de envio de e-mail real,
      // por exemplo EmailJS (https://www.emailjs.com/) ou um endpoint backend próprio.
      // Exemplo com EmailJS:
      // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
      console.log('Formulário de contato enviado:', form)
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <Box>
      <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
        CONTATO
      </Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: 28, md: 36 }, mb: 1 }}>
        Vamos conversar
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4, maxWidth: 560 }}>
        Fale comigo por qualquer um dos canais abaixo ou envie uma mensagem direto por aqui.
      </Typography>

      <Stack direction="row" spacing={1.5} sx={{ mb: 5 }}>
        {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
          <IconButton
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
              color: 'text.primary',
              borderRadius: 1,
              '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
            }}
          >
            <Icon fontSize="small" />
          </IconButton>
        ))}
      </Stack>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        variant="outlined"
        sx={{ p: 3, bgcolor: 'background.paper', borderColor: 'divider', maxWidth: 520 }}
      >
        <Stack spacing={2.5}>
          {status === 'success' && (
            <Alert severity="success" onClose={() => setStatus(null)}>
              Mensagem enviada! Retorno em breve.
            </Alert>
          )}
          {status === 'error' && (
            <Alert severity="error" onClose={() => setStatus(null)}>
              Não foi possível enviar agora. Tente novamente em instantes.
            </Alert>
          )}

          <TextField
            label="Nome"
            value={form.name}
            onChange={handleChange('name')}
            error={Boolean(errors.name)}
            helperText={errors.name}
            fullWidth
          />
          <TextField
            label="E-mail"
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            error={Boolean(errors.email)}
            helperText={errors.email}
            fullWidth
          />
          <TextField
            label="Mensagem"
            value={form.message}
            onChange={handleChange('message')}
            error={Boolean(errors.message)}
            helperText={errors.message}
            multiline
            minRows={4}
            fullWidth
          />
          <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{ alignSelf: 'flex-start' }}>
            Enviar mensagem
          </Button>
        </Stack>
      </Paper>
    </Box>
  )
}
