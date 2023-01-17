import react from 'react'

const CartContext = react.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  remoteItem: (id) => {},
})

export default CartContext
