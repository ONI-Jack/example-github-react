import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { lifecycle, compose } from 'recompose'

import { fetchUserRepositories } from '../../actions'
import RepoCard from '../../components/RepoCard'

const addLifeCycle = lifecycle({
  componentDidMount() {
    const { dispatch, username } = this.props

    dispatch(fetchUserRepositories(username))
  }
})

const UserRepository = ({ repos }) => {
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

const mapStateToProps = state => {
  return {
    isFetching: state.repos.isFetching,
    repos: state.repos.data
  }
}

export default compose(connect(mapStateToProps), addLifeCycle)(UserRepository)
