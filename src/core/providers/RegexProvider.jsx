import React, {createContext, useState, useCallback} from 'react'
import regexgen from 'regexgen'

const RegexContext = createContext(null)

export default function RegexProvider({children}) {
  const [words, setWords] = useState([])

  const getRegex = useCallback(() => {
    if (words.length === 0) {
      return
    }
    return {value: regexgen(words).toString(), regex: regexgen(words)}
  }, [words])

  const add = (word) => {
    if (!word) {
      return
    }
    if (words.length === 0) {
      setWords([word])
    }

    if (words.find((wordElement) => wordElement === word)) {
      return
    }

    setWords([...words, word])
  }

  const clear = () => setWords([])

  return (
    <RegexContext.Provider
      value={[
        {getRegex, words},
        {add, clear},
      ]}>
      {children}
    </RegexContext.Provider>
  )
}

RegexProvider.Context = RegexContext
