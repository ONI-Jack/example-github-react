import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { searchUsername } from '../../actions'
import { ITEMS_PER_PAGE, CURRENT_PAGE } from '../../utilities/Panigation'

import Pagination from '../../components/Pagination'

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      item_per_page: ITEMS_PER_PAGE,
      current_page: CURRENT_PAGE
    }
  }

  handleChange = e => {
    e.preventDefault()
    const username = e.target.value
    this.setState({
      username
    })
  }
  handleClickSearch = () => {
    const { dispatch } = this.props
    const { username, item_per_page, current_page } = this.state
    dispatch(searchUsername(username, item_per_page, current_page))

    this.setState({
      username: '',
      item_per_page: ITEMS_PER_PAGE,
      current_page: CURRENT_PAGE
    })
  }
  render() {
    const { users } = this.props
    const { item_per_page, current_page } = this.state

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
                    onChange={this.handleChange}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={this.handleClickSearch}
                  >
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
              itemPerPage={item_per_page}
              currentPage={current_page}
            ></Pagination>
          )}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.users.isFetching,
    users: state.users.data
  }
}

export default connect(mapStateToProps)(Home)
