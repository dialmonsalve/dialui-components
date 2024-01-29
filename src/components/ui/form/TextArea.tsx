import type { ChangeEvent, TextareaHTMLAttributes } from "react"

import { HASH } from "@/const"


interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
  totalCharacter?: number
  characters: string
}

const TextArea = ({
  className,
  characters,
  onChange,
  totalCharacter = 0,
  ...props }: Props) => {

  const total =
    totalCharacter > 0
      ? totalCharacter - characters?.length
      : characters?.length

  const isTotal = totalCharacter > 0 && total < 0 ? 0 : total


  return (
    <>
      <textarea
        onChange={onChange}
        className={`text-area${HASH} ${className}`}
        cols={30}
        rows={10}
        {...props}
      >
      </textarea>
      <span
        className={`text-area${HASH}--value`}
        style={{ color: `${isTotal === 0 ? "red" : "green"}` }} >{isTotal}</span>
    </>
  )
}

export default TextArea