import React, { PureComponent, Fragment } from 'react'
import UserCard from '../../components/UserCard'

export class index extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      itemPerPage: this.props.itemPerPage,
      currentPage: this.props.currentPage
    }
  }
  handleClick = event => {
    // console.log('event id >', event.target.id)
    this.setState({
      currentPage: Number(event.target.id)
    })
    // console.log('state Click > ', this.state)
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      // console.log('Current props', this.props)
      // console.log('prevProps', prevProps)
      this.setData()
    }
  }

  setData() {
    //https://stackoverflow.com/questions/50075835/react-child-component-dont-update-when-parent-components-state-update
    console.log('user props > ', this.props)
    this.setState({
      user: this.props.user
    })
  }

  render() {
    const { user, currentPage, itemPerPage } = this.state
    //console.log('state > ', user)
    //console.log('state > ', currentPage)
    //console.log('state > ', itemPerPage)

    // Logic for displaying todos
    const indexOfLastUsers = currentPage * itemPerPage
    const indexOfFirstUsers = indexOfLastUsers - itemPerPage
    const currentUsers = user.items.slice(indexOfFirstUsers, indexOfLastUsers)
    // console.log('currentUsers > ', currentUsers)

    // Logic for displaying page numbers
    const totalPage = Math.ceil(user.items.length / itemPerPage)
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(user.items.length / itemPerPage); i++) {
      pageNumbers.push(i)
    }
    //console.log('page > ', pageNumbers)
    // console.log('user > ', user)
    // console.log('renderUsers > ', renderUsers)
    return (
      <Fragment>
        <div className="columns is-multiline">
          {currentUsers.map((user, index) => {
            return <UserCard key={index} user={user} />
          })}
        </div>
        <nav className="pagination" role="navigation" aria-label="pagination">
          {/* <button
            className="pagination-previous"
            onClick={() => this.handlePrevious(totalPage)}
          >
            Previous
          </button>
          <button
            href="!#"
            className="pagination-next"
            onClick={() => this.handleNext(totalPage)}
          >
            Next page
          </button> */}
          <ul className="pagination-list">
            {pageNumbers.map((number, index) => (
              <li key={number}>
                <button
                  id={number}
                  onClick={this.handleClick}
                  className={`pagination-link ${
                    currentPage === number ? 'is-current' : ''
                  }`}
                  // className="pagination-link" is-current
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Fragment>
    )
  }
}

export default index
