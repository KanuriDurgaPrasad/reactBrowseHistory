import './index.css'

const SearchCard = props => {
  const {onDeleteItem, itemDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = itemDetails

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="list-item">
      <div className="text-item">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="domain-details">
          <img className="logo" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className="delete">
        <button type="button" className="delete-button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchCard
