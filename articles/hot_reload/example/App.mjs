// JSX
import { render, Component } from 'preact'

class App extends Component {
  constructor() {
    super()
    this.state = { name: 'world' }
  }
  render({ message }) {
    return (<div>
      Hello, <span>{this.state.name}</span>
      <p>
        {message}
      </p>
    </div>)
  }
}

render(<App message="Idio"/>, document.querySelector('.app'))