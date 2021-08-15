import React from 'react'
import styles from './Card.module.scss'

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false)
  const [isFavorite, setisFavorite] = React.useState(favorited)

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price })
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    onFavorite({ title, imageUrl, price, id })
    setisFavorite(!isFavorite)
  }
  return (
    <div className={styles.cart}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена :</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  )
}
export default Card
