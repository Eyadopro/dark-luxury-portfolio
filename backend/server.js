import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
}))
app.use(express.json())

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests, please try again later.' },
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API is running' })
})

app.post('/api/contact', contactLimiter, (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  console.log('New contact message:')
  console.log({ name, email, message, receivedAt: new Date().toISOString() })

  res.status(200).json({
    success: true,
    message: 'Message received successfully',
  })
})

app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Nova Dashboard',
      tag: 'SaaS · React · Node',
      description: 'A modern analytics dashboard with real-time data visualization.',
    },
    {
      id: 2,
      title: 'Aether Studio',
      tag: 'Agency · Next.js',
      description: 'Full website redesign for a creative agency.',
    },
    {
      id: 3,
      title: 'Pulse Analytics',
      tag: 'Fintech · Full-stack',
      description: 'Financial insights platform with secure authentication.',
    },
  ])
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
