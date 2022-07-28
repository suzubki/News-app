type Props = {
  content: string

  size?: 'extraSmall' | 'specialSmall' | 'small' | 'medium' | 'large'
  color?: 'main' | 'gray' | 'red' | 'lightBlack' | 'lightWhite'
  bold?: boolean
  align?: 'left' | 'center' | 'right'
  italic?: boolean

  firstLetterUpperCase?: boolean
}

export const Text = ({
  content,
  size = 'small',
  bold = false,
  color = 'main',
  align = 'left',
  italic = false,
}: Props) => {
  const classNameValue = `text-${size} color-${color} align-${align}${
    bold ? ' weight-light' : ''
  }${italic ? ' font-italic' : ''}`

  if (size === 'medium') return <h3>{content}</h3>
  if (size === 'large') return <h1>{content}</h1>
  if (size === 'extraSmall')
    return <span className={classNameValue}>{content}</span>
  if (bold) return <span className={classNameValue}>{content}</span>

  return <span className={classNameValue}>{content}</span>
}
