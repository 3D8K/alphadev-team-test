import React from 'react'
interface IButtonProps {
  text: string
  link: string
  addClass?: string
}
export function Button({ text, link, addClass }: IButtonProps) {
  return (
    <div className={`button ${addClass}`}>
      <a href={link}>{text}</a>
    </div>
  )
}
