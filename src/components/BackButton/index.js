import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ to = '/' }) => {
  return (
    <div className="columns">
      <div className="columns is-12">
        <Link to={to} className="button">
          BackButton
        </Link>
      </div>
    </div>
  )
}

export default BackButton
