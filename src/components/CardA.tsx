import { useStore } from '@nanostores/react'

// @ts-ignore
import { darkModeAtom } from '../stores'

function Switch() {
  const darkMode = useStore(darkModeAtom)
  const handleClick = () => {
    darkModeAtom.set(!darkMode)
  }
  return <button onClick={handleClick}>switch {darkMode?'T':'F'}</button>
}

export default function CardA() {
  return <div className="bg-white color-black dark:(bg-black color-white)">
    <div>react</div>
    <Switch />
  </div>
}
