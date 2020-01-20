import React from 'react'
import { connect } from 'react-redux'
import { withState, withHandlers, compose } from 'recompose'

import { searchUsername } from '../../actions'
import { ITEMS_PER_PAGE, CURRENT_PAGE } from '../../utilities/Panigation'
import Pagination from '../../components/Pagination'

const addWithState = withState('username', 'setUsername')
const addWithHandlers = withHandlers({
  handleChange: ({ setUsername }) => e => {
    e.preventDefault()

    const username = e.target.value
    setUsername(username)
  },
  handleClickSearch: ({
    dispatch,
    username,
    setUsername,
    itemPerPage,
    setItemPerPage,
    currentPage
  }) => () => {
    dispatch(searchUsername(username))
    setUsername(username)
  }
})

const Home = ({
  users,
  handleChange,
  handleClickSearch,
  itemPerPage,
  currentPage
}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Find a username"
                  onChange={handleChange}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={handleClickSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <p className="subtitle">
              <strong>Total : </strong> {users.total_count} users
            </p>
          </div>
        </div>
        {users.items && (
          <Pagination
            user={users}
            itemPerPage={ITEMS_PER_PAGE}
            currentPage={CURRENT_PAGE}
          ></Pagination>
        )}
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.users.isFetching,
    users: state.users.data
  }
}

// export default connect(mapStateToProps)(Home)

export default compose(
  connect(mapStateToProps),
  addWithState,
  addWithHandlers
)(Home)
