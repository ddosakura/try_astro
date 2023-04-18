import { persistentAtom } from '@nanostores/persistent'

export const localeAtom = persistentAtom('locale', 'en')

export const darkModeAtom = persistentAtom<boolean>(
  'darkMode',
  typeof window === 'undefined' ? false : window.matchMedia("(prefers-color-scheme: dark)").matches,
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
)

darkModeAtom.listen((darkMode) => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {

    document.documentElement.classList.remove("dark");
  }
})
