import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

export default ({ data }) => (
  <div className="column is-3">
    <div className="card is-fixed-height">
      <div className="card-content">
        <div>
          <p className="subtitle has-text-weight-bold">{data.name}</p>
          <p>
            <FontAwesomeIcon icon={faStar} /> {data.stargazers_count}
            {data.language ? (
              <span
                className="tag is-rounded"
                style={{
                  float: 'right'
                }}
              >
                {data.language}
              </span>
            ) : null}
          </p>
        </div>

        <a
          className="button is-info"
          rel="noopener noreferrer"
          target="_blank"
          href={data.html_url}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faLink} />
          </span>
        </a>
      </div>
    </div>
  </div>
)
