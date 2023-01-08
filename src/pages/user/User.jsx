import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const User = () => {
  let url = `${process.env.REACT_APP_API}/order`

  const [data, setData] = useState([]);

  const { user:{id, name} } = useSelector(state => state.authUser)

  console.log(id)

  useEffect(() => {
    const options = {
      headers: {'user-token': localStorage.getItem('token')}
    };

    axios.get(url, options).then((data) => {
      setData(data.data)
    }).catch((err) => console.log(err))
  }, [url]);

 console.log(data)
   let userOrders = data.filter(item => item.userId === id)

   console.log("user orders", userOrders)

  return (
    <div>
     <div className='orders_container'>
        <h1 className='orderpage_tite'>{`${name[0].toUpperCase()}${name.substring(1)}´s` } Orders</h1>
          {userOrders.map( (order) => {
            return (<table key={order._id}>
              <thead>
              <tr>
              <th>Ordered Products</th>
               <th>Shipping Address</th>
               <th>Ordered Date</th>
              </tr>
              </thead>
             <tbody>
             <tr>
             <td>{order.orderItems.map((item, index) => {
                return (<div className='orders_items_container' key={index}>
                  <p>{`${item.name[0].toUpperCase()}${item.name.substring(1)}`}</p>
                  <p>{`${item.amount} x ${item.price.toFixed(2)}€ = ${item.totalPrice.toFixed(2)}€`}</p>
                  </div>)
                  
              })} <p>{`Total:${order.orderPrice.toFixed(2)}€`}</p></td>
              <td>
              <p className="shippingdata">
              {`Street: ${order.shippingAddress.street}`}
              </p>
              <p className="shippingdata">
              {`City: ${order.shippingAddress.city}`}
              </p>
              <p className="shippingdata">
              {`Country: ${order.shippingAddress.country}`}
              </p>
              <p className="shippingdata">
              {`Post Code: ${order.shippingAddress.postcode}`}
              </p>
              </td>
                <td>
              <p className="orderDate">
              {`Date:  ${order.createdAt.slice(0,10)}`}
              </p>
              <p className="orderDate">
               Order Status: {order.orderStatus}
              </p>
              </td>
              </tr>
             </tbody>
            </table>)
          })}
     </div>
    </div>
  )
}

export default User