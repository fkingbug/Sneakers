import React from 'react'
import Card from '../components/Card'
import AppContext from '../context'

function Favorites({ onAddToFavorite }) {
  const { favorites } = React.useContext(AppContext)

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers d-flex flex-wrap">
        {favorites &&
          favorites.map((item, index) => (
            <Card
              key={`${index}_${item.title}`}
              onFavorite={onAddToFavorite}
              favorited={true}
              {...item}
            />
          ))}
      </div>
    </div>
  )
}

export default Favorites
