import React, { PureComponent } from 'react'
import { fetchUsername } from '../../actions'
import { connect } from 'react-redux'

export class UserDetail extends PureComponent {
  componentDidMount() {
    const { match, dispatch } = this.props
    const { username } = match.params

    dispatch(fetchUsername(username))
  }
  render() {
    const { data } = this.props
    return (
      <div>
        <p>UserDetail</p>
        <p>Username: {data.name}</p>
        <p>login: {data.login}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.user.isFetching,
    data: state.user.data
  }
}

export default connect(mapStateToProps)(UserDetail)
