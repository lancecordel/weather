
function Input(props) {
  return (
    <div>
        <form>
        <label></label>
        <input placeholder="enter zip...." value={props.value} onChange={props.onChange}/>
        </form>
    </div>
  )
}

export default Input