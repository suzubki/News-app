import Image from 'next/image'

type Props = {
  text?: string
  leftIcon?: any
  rightIcon?: any
  size?: 'small' | 'medium' | 'large'
}

export const Button = ({ text, leftIcon, rightIcon, size }: Props) => {
  const getSize = () => {
    if (size === 'small') {
      return 16
    }
    if (size === 'medium') {
      return 20
    }
    if (size === 'large') {
      return 24
    }
  }

  return (
    <button>
      {leftIcon && size && (
        <Image src={leftIcon} width={getSize()} height={getSize()} />
      )}
      {text || ''}
      {rightIcon && size && <Image src={rightIcon} />}
    </button>
  )
}
