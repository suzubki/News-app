import { Dispatch, FC, SetStateAction } from 'react'
import { RichTextEditor } from '@mantine/rte'

interface Props {
  value: string
  onChange: Dispatch<SetStateAction<string>>
}

const MyEditor: FC<Props> = ({ value, onChange }) => {
  return (
    <RichTextEditor
      value={value}
      onChange={onChange}
      controls={[
        ['bold', 'italic', 'strike', 'underline', 'blockquote', 'clean'],
        // ['h1', 'h2', 'h3', 'h4', 'h5'],
        ['link', 'image'],
        ['alignLeft', 'alignCenter', 'alignRight'],
        ['sup', 'sub'],
      ]}
    />
  )
}

export default MyEditor
