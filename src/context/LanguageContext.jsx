import { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt') // 'pt' | 'en'

  const value = useMemo(
    () => ({
      lang,
      toggleLang: () => setLang((prev) => (prev === 'pt' ? 'en' : 'pt')),
    }),
    [lang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage precisa estar dentro de um LanguageProvider')
  return ctx
}
