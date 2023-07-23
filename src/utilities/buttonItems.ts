import { ButtonProps } from "../components/ui/Button"

interface Button extends ButtonProps {
  id: number
}

export const simpleButtons: Button[] = [
  {
    id: 1,
    label: 'to up',
    hasBackground: false,
    isAnimated: false,
    backgroundColor: 'green',
    size: 'medium',
    onShowModal:'toUp'
  },
  {
    id: 2,
    label: 'to right',
    hasBackground: true,
    isAnimated: false,
    backgroundColor: 'blue',
    size: 'medium',
    onShowModal:'toRight'
  },
  {
    id: 3,
    label: 'to down',
    hasBackground: false,
    isAnimated: false,
    backgroundColor: 'blue',
    size: 'medium',
    onShowModal:'toDown'
  },
  {
    id: 4,
    label: 'to left',
    hasBackground: true,
    isAnimated: false,
    backgroundColor: 'blue',
    size: 'medium',
    onShowModal:'toLeft'
  },

  {
    id: 9,
    label: 'fade out',
    hasBackground: false,
    isAnimated: false,
    backgroundColor: 'red',
    size: 'medium',
    onShowModal:'fadeout'
  },
]

export const animatedButtons: Button[] = [
  {
    id: 5,
    label: 'jump to up',
    hasBackground: false,
    isAnimated: false,
    backgroundColor: 'green',
    size: 'medium',
    onShowModal:'jumpToUp'
  },
  {
    id: 6,
    label: 'jump to right',
    hasBackground: true,
    isAnimated: false,
    backgroundColor: 'blue',
    size: 'medium',
    onShowModal:'jumpToRight'
  },
  {
    id: 7,
    label: 'jump to down',
    hasBackground: false,
    isAnimated: false,
    backgroundColor: 'red',
    size: 'medium',
    onShowModal:'jumpToDown'
  },
  {
    id: 8,
    label: 'jump to left',
    hasBackground: true,
    isAnimated: false,
    backgroundColor: 'green',
    size: 'medium',
    onShowModal:'jumpToLeft'
  },
]