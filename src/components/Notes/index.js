import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  BgColor,
  Heading,
  NotesSub,
  Title,
  Note,
  Button,
  ButtonSub,
  ImageSub,
  Image,
  Paragraph,
  ParagraphEl,
  UlEl,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [isItem, setItem] = useState(false)
  const [title, setName] = useState('')
  const [note, setNote] = useState('')
  const [listValues, setValues] = useState([])

  const changeName = event => {
    setName(event.target.value)
  }
  const changeNote = event => {
    setNote(event.target.value)
  }
  const ItemAdding = event => {
    event.preventDefault()
    setItem(true)
    const newComment = {
      id: uuidv4(),
      name: title,
      note,
    }
    setValues(prevState => [...prevState, newComment])
  }
  let ItemsBgOrImage
  if (isItem === false) {
    ItemsBgOrImage = (
      <ImageSub>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
          alt="notes empty"
        />
        <Paragraph>No Notes Yet</Paragraph>
        <ParagraphEl>Notes you add will appear here</ParagraphEl>
      </ImageSub>
    )
  } else {
    ItemsBgOrImage = (
      <UlEl>
        {listValues.map(each => (
          <NoteItem each={each} key={each.id} />
        ))}
      </UlEl>
    )
  }
  console.log(title)
  return (
    <BgColor>
      <Heading>Notes</Heading>
      <NotesSub>
        <form>
          <Title placeholder="Title" onChange={changeName} />
          <br />
          <Note placeholder="Take a Note..." onChange={changeNote} />
          <br />
          <ButtonSub>
            <Button type="submit" onClick={ItemAdding}>
              Add
            </Button>
          </ButtonSub>
        </form>
      </NotesSub>
      <div>{ItemsBgOrImage}</div>
    </BgColor>
  )
}
export default Notes
