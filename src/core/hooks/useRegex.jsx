import {useState, useCallback} from 'react'
import regexgen from 'regexgen'

export default function useRegex() {
  const [phrases, setPhrases] = useState([])

  const getRegex = useCallback(() => {
    if (phrases.length === 0) {
      return
    }
    return regexgen(phrases).toString()
  }, [phrases])

  const add = (phrase) => {
    if (!phrase) {
      return
    }
    if (phrases.length === 0) {
      setPhrases([phrase])
    }

    setPhrases([...phrases, phrase])
  }

  const clear = () => setPhrases([])

  return [getRegex, {add, clear}]
}
