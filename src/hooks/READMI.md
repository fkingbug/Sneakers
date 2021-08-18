Hook useCart (кастомный) для получаения cartItems, setCartItems, totalPrice (чтобы не считать totalPrice в каждом компоненте )

_Driwer_

Убираем из кода получаение из контекста :

```javascript
import AppContext from '../context'
const { cartItems, setCartItems } = React.useContext(AppContext)
```

Добавляем :

```javascript
import { useCart } from '../hooks/useCart'
const { cartItems, setCartItems, totalPrice } = useCart()
```
