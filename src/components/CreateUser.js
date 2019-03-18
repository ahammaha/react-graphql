import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!){
    createUser(username: $username, email: $email, password: $password) {
    	user{
			id
			username
			email
		}
    }
  }
`

class CreateLink extends React.Component {
  state = {
    email: '',
    username: '',
    password: ''
  }

  render() {
    const { email, password, username } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
            type="text"
            placeholder="Username"
          />
          <input
            className="mb2"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="User's email address"
          />
          <input
            className="mb2"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="text"
            placeholder="Enter password"
          />
        </div>
        <Mutation mutation={CREATE_USER_MUTATION} variables={{ username, email, password }}>
			{createUser => <button onClick={createUser}>Submit</button>}
		</Mutation>
      </div>
    )
  }
}

export default CreateLink