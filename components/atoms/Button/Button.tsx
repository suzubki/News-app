type Props = {
  text?: string
  LeftIcon?: any
  RightIcon?: any
  size?: 'small' | 'medium' | 'large' | 'extraLarge'
}

export const Button = ({
  text = '',
  LeftIcon,
  RightIcon,
  size = 'small',
}: Props) => {
  return (
    <button>
      {LeftIcon && <LeftIcon className={`icon-${size}`} />}
      {text}
      {RightIcon && <RightIcon className={`icon-${size}`} />}
    </button>
  )
}
