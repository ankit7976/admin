import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrder } from '../../actions'
import Layout from '../../components/Layout'


const Orders = () => {

  const order = useSelector(state => state.order)
  const [type, setType] = useState('')
  const dispatch = useDispatch()
  const onOrderUpdate = (orderId) => {
    const payload = {
      orderId, type
    };
    dispatch(updateOrder(payload))
  }
  const iconarray = ['mdi mdi-cart','mdi mdi-gift','mdi mdi-truck-delivery','mdi mdi-hail']

  const fromDate = (date) => {
    if (date) {
      const d = new Date(date)
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    }
    return "";
  }
  return (

    <Layout sidebar>

      {order.orders.map((orderItem, index) =>




        <div class="card mt-4 trk-order">
          <div>
            {orderItem.items.map((item, index) => <h6 key={index}>{item.productId.name}</h6>)}
          </div>
          <span>
            {orderItem.totalAmount} :  {orderItem.paymentType} :  {orderItem.paymentStatus}
          </span>

          <div
            class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
            <div class="w-150 text-center py-1 px-2"><span class="text-medium">
              Tracking Order No - :</span> {orderItem._id}</div>
            <div class="w-50 text-center py-1 px-2">
              <div class="form-group" style={{ display: 'flex' }}>
                <select className='form-select' onChange={(e) => setType(e.target.value)}>
                  <option>Select Mode</option>
                  {orderItem.orderStatus.map(status => {
                    return (
                      <>
                        {!status.isCompleted ? (<option value={status.type} key={status.type}>{status.type}</option>) : null}
                      </>
                    )
                  })}
                </select>
                <button className='btn btn-success' onClick={() => onOrderUpdate(orderItem._id)}>confirm</button>
              </div>

            </div>

          </div>
          <div class="card-body">
            <div
              class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">

              {orderItem.orderStatus.map((status,index) => (
                <div class={`step ${status.isCompleted ? "completed" : ''}`}>
                  <div class="step-icon-wrap">
                    <div class="step-icon"><i class={iconarray[index]}></i></div>
                  </div>
                  <h4 class="step-title">{status.type} <span> : {fromDate(status.date)}</span></h4>
                </div>
              ))}
              {/*              

              <div class={`step ${status.isCompleted ? "completed" : '' }` }>
                <div class="step-icon-wrap">
                  <div class="step-icon"><i class="mdi mdi-gift"></i></div>
                </div>
                <h4 class="step-title">Product Dispatched</h4>
              </div>
              <div class={`step ${status.isCompleted ? "completed" : '' }` }>
                <div class="step-icon-wrap">
                  <div class="step-icon"><i class="mdi mdi-truck-delivery"></i></div>
                </div>
                <h4 class="step-title">On Delivery</h4>
              </div>
              <div class={`step ${status.isCompleted ? "completed" : '' }` }>
                <div class="step-icon-wrap">
                  <div class="step-icon"><i class="mdi mdi-hail"></i></div>
                </div>
                <h4 class="step-title">Product Delivered</h4>
              </div> */}


            </div>
          </div>
        </div>

      )}


    </Layout>
  )
}

export default Orders