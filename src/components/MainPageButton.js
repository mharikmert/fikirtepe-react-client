
const MainPageButton = (props) => {
  return (
      <>
        <button style = {MainPageButtonStyle} onClick = {props.onClick}> {props.text} </button>
      </>
  )
}

const MainPageButtonStyle = {
    borderStyle: 'outset',
    color : '#800080',
    fontWeight: 'bold',
    fontSize: '18px',
    height: '50px',
    width: '100px',
    marginLeft: '10px',
    borderRadius: '30px',
    cursor: 'pointer',
}

export default MainPageButton