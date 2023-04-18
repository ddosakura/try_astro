import { useStore } from '@nanostores/react'
// // TODO: import { darkMode } from '@/stores'
// 
// function Switch() {
//   const user = useStore(darkMode)
// }

export default function CardA() {
  return <div className="bg-white color-black dark:(bg-black color-white)">
    <div>react</div>
  </div>
}
