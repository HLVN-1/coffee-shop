import React from 'react'

export default function ShowShoppingCart({ shoppingCart }) {
  return (
    <div>
      {shoppingCart && shoppingCart.length > 0 ? (
        shoppingCart.map((cartItem) => (
          <p key={cartItem.id}>{`${cartItem.item}-$${cartItem.price}`}</p>
        ))
      ) : (
        <p>You have no items in the cart</p>
      )}
    </div>
  )
}




