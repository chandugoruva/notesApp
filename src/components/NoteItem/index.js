import {BgItem, ItemName, ItemNotes1} from './styledComponents'

const NoteItem = props => {
  const {each} = props

  console.log(each)
  const {name, note} = each
  console.log(name)
  return (
    <BgItem>
      <ItemName>{name}</ItemName>
      <ItemNotes1>{note}</ItemNotes1>
    </BgItem>
  )
}
export default NoteItem
