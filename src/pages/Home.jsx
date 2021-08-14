import React from 'react'
import Card from '../components/Card'

function Home({
  items,
  searchValue,
  serSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу : ${searchValue}` : 'Все кроcсовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => serSearchValue('')}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Close"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск.."
            type="text"
          />
        </div>
      </div>
      <div className="sneakers d-flex flex-wrap">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={`${index}_${item.title}`}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  )
}

export default Home
