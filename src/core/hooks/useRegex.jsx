import {useContext} from 'react'
import {RegexProvider} from 'core/providers'

export default function useRegex() {
  const context = useContext(RegexProvider.Context)

  if (!context) {
    throw new Error('This hook must be wrapped by RegexProvider.')
  }

  return context
}
