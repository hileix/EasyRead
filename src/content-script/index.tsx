import { render } from 'react-dom'
import { Speak } from './Speak'

async function mount() {
  const container = document.createElement('div')
  container.className = 'Easy readChromeExtensionContainer'
  document.body.appendChild(container)
  render(<Speak />, container)
}

async function run() {
  mount()
}

run()
