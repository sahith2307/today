import './index.css'

const Welcome = props => {
  const {name, greeting} = props

  Welcome.defaultProps = {
    name: 'Rahul',
    greeting: 'Hello',
  }

  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}

export default Welcome
