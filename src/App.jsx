import React from 'react'

class App extends React.Component {
  state = {data: null}

  async componentDidMount() {
    const response = await fetch("/api/users")
    const data = await response.json()
    this.setState({data: data})
  }

  renderUsers = () => {
    const text = {fontSize: "13px"}
    return this.state.data.map((user) => {
      return (
        <div>
          <h3>Username <span style={text}>{user.username}</span></h3>
          <h3>Password <span style={text}>{user.password}</span></h3>
          <hr/>
        </div>
      )
    })
  }

  render() {
    return this.state.data ? this.renderUsers() : null
  }
}

export default App