type Props = {
  content: string
  size?: 'small' | 'medium' | 'large'

  bold?: boolean
}

export const Text = ({ content, size = 'small', bold = false }: Props) => {
  if (size === 'medium') return <h3>{content}</h3>
  if (size === 'large') return <h1>{content}</h1>
  if (bold)
    return (
      <strong>
        <span>{content}</span>
      </strong>
    )

  return <span>{content}</span>
}
