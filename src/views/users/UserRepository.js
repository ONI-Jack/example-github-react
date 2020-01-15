import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'

import { fetchUserRepositories } from '../../actions'
import RepoCard from '../../components/RepoCard'

export class UserRepository extends PureComponent {
  componentDidMount() {
    const { dispatch, username } = this.props

    dispatch(fetchUserRepositories(username))
  }
  render() {
    const { repos } = this.props

    return (
      <Fragment>
        <div className="columns is-multiline">
          <div className="column is-12">
            <h2 className="title">Repositories</h2>
          </div>
          {repos.map(data => (
            <RepoCard key={data.id} data={data} />
          ))}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.repos.isFetching,
    repos: state.repos.data
  }
}
export default connect(mapStateToProps)(UserRepository)
