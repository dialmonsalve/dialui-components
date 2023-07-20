import { ButtonProps } from "../components/Button"

interface Button extends ButtonProps {
  id: number
}

export const buttons: Button[] = [
  {
    id: 1,
    label: 'ok',
    hasBackground: false,
    isAnimated: true,
    backgroundColor: 'blue',
    size: 'medium'
  },
  {
    id: 2,
    label: 'cancel',
    hasBackground: false,
    isAnimated: true,
    backgroundColor: 'red',
    size: 'small'
  },
  {
    id: 3,
    label: 'cancel',
    hasBackground: false,
    isAnimated: false,
    backgroundColor: 'red',
    size: 'large'
  },
]