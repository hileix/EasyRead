import { render } from 'react-dom'
import { Card } from './Card'

async function mount() {
  const container = document.createElement('div')
  container.className = 'text-to-speech-container'
  document.body.appendChild(container)
  render(<Card />, container)
}

async function run() {
  mount()
}

run()

