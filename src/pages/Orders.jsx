import React from 'react'
import Card from '../components/Card'
import axios from 'axios'
// import AppContext from '../context'

function Orders() {
  // const { onAddToFavorite, onAddToCart } = React.useContext(AppContext)
  const [orders, setOrders] = React.useState()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(
          'https://611545bd8f38520017a38415.mockapi.io/order',
        )
        //2 способа объеденить массив массивов
        // console.log(data.map((obj) => obj.items).flat())
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))

        setIsLoading(false)
      } catch (error) {
        alert('Error orders')
      }
    })()
  }, [])

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="sneakers d-flex flex-wrap">
        {(isLoading ? [...Array(4)] : orders).map((item, index) => (
          <Card key={index} {...item} loading={isLoading} />
        ))}
      </div>
    </div>
  )
}

export default Orders
