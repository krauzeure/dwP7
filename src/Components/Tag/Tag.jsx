import './Tag.css'

/* The Tag component creates a div element with the content from the props. */
export function Tag(props) {
  return (
    <div className="listing-tag">{props.text}</div>
  )
}
