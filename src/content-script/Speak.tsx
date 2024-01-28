import { useEffect, useState } from 'react'
import './Speak.scss'

const speakText = (text: string) => {
  speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.voice = speechSynthesis.getVoices().filter((voice) => {
    return voice.name == 'Google UK English Male'
  })[0]
  // utterance.pitch = 1
  // utterance.rate = 1
  // utterance.volume = 5
  speechSynthesis.speak(utterance)
}

const getSelectedText = () => {
  let text = ''
  if (window.getSelection) {
    text = window.getSelection()?.toString() ?? ''
  } else if (document.selection && document.selection.type != 'Control') {
    text = document.selection.createRange().text
  }
  return text
}

export const Speak = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      alert('Sorry, your browser does not support text-to-speech. Please use the latest Chrome.')
    }
  }, [])

  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices()
      setVoices(voices)
    }

    speechSynthesis.onvoiceschanged = loadVoices
    loadVoices()

    return () => {
      speechSynthesis.onvoiceschanged = null
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 's') {
        const selectedText = getSelectedText()
        if (selectedText.length) {
          speakText(selectedText)
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [voices])

  return <div></div>
}
