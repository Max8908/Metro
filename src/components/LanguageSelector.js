'use client'

import { useLocale } from 'next-intl'
import { setUserLocale } from '@/services/locale'
import { useTransition, useState, useEffect } from 'react'
import Flag from 'react-world-flags'
import '@/app/global.css'

const LanguageSelector = () => {
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()
  const [textColor, setTextColor] = useState('text-gray-700') // Default color

  useEffect(() => {
    const backgroundColor = getComputedStyle(document.body).backgroundColor
    if (backgroundColor === 'rgb(0, 0, 0)') { // Si fond noir
      setTextColor('text-white')
    } else {
      setTextColor('text-gray-700') // Autres fonds
    }
  }, [])

  const handleLocaleChange = async (newLocale) => {
    startTransition(async () => {
      await setUserLocale(newLocale)
      document.documentElement.lang = newLocale
    })
  }

  return (
    <select
      value={locale}
      onChange={(e) => handleLocaleChange(e.target.value)}
      disabled={isPending}
      className={`bg-transparent ${textColor} font-medium p-2 rounded-md outline-none transition ease-in-out duration-300`}
    >
      <option value="en">
        <Flag code="GB" className="mr-2 w-6 h-6" />
        English
      </option>
      <option value="fr">
        <Flag code="FR" className="mr-2 w-6 h-6" />
        Français
      </option>
      <option value="es">
        <Flag code="ES" className="mr-2 w-6 h-6" />
        Español
      </option>
      <option value="pt">
        <Flag code="PT" className="mr-2 w-6 h-6" />
        Português
      </option>
      <option value="ro">
        <Flag code="RO" className="mr-2 w-6 h-6" />
        Română
      </option>
      <option value="ka">
        <Flag code="GE" className="mr-2 w-6 h-6" />
        ქართული
      </option>
      <option value="hn">
        <Flag code="HN" className="mr-2 w-6 h-6" />
        Hondureño
      </option>
    </select>
  )
}

export default LanguageSelector
