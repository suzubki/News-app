type Props = {
  content: string

  size?: 'extraSmall' | 'small' | 'medium' | 'large'
  color?: 'main' | 'gray' | 'red'
  bold?: boolean
  align?: 'left' | 'center' | 'right'

  firstLetterUpperCase?: boolean
}

export const Text = ({
  content,
  size = 'small',
  bold = false,
  color = 'main',
  align = 'left',
}: Props) => {
  if (size === 'medium') return <h3>{content}</h3>
  if (size === 'large') return <h1>{content}</h1>
  if (size === 'extraSmall')
    return (
      <span
        className={`text-${size} color-${color} align-${align} ${
          bold && 'weight-light'
        }`}
      >
        {content}
      </span>
    )
  if (bold)
    return (
      <strong>
        <span>{content}</span>
      </strong>
    )

  return <span className={`color-${color}`}>{content}</span>
}
