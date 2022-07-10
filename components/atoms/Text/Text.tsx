type Props = {
  content: string
  size?: 'small' | 'medium' | 'large'
}

export const Text = ({ content, size = 'small' }: Props) => {
  if (size === 'medium') return <h3>{content}</h3>
  if (size === 'large') return <h1>{content}</h1>

  return <span>{content}</span>
}
