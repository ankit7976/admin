import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getinitialData } from '../../actions/initaldata.action'
import Layout from '../../components/Layout'
import AppModel from '../../components/Model/Model'
import { genratefileName } from '../../urlConfig'



const Products = () => {

  const [show, setShow] = useState(false);
  const [productDtl, setproductDtl] = useState(null)
  const product = useSelector(state => state.product)

  useEffect(()=>{
    getinitialData();
  },[])

  const handleClose = () => {
    setShow(false)
  }
  const setproductModel = (item) => {
    setShow(true)
    setproductDtl(item)
    console.log(item)
  }

  const randerProductModel = () => {
    if (!productDtl) {
      return null;
    }

    return (


      <AppModel

        show={show}
        handleClose={handleClose}
        modalTitel={productDtl.name}
        dialogClassName="modal-90w"
      >

        <div className="row">
          <div className="col-12">
            <div className="card card-default">

              <div className="card-body product-detail">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="row">
                      <div className="single-pro-img">
                        <div className="single-product-scroll">
                          <div className="single-product-cover">
                            {productDtl.productPictures.map(pic => <div className="single-slide zoom-image-hover"><img
                              className="img-responsive"
                              src={genratefileName(pic.img)} alt="" /></div>)}



                          </div>
                          <div className="single-nav-thumb">

                          {productDtl.productPictures.map(pic => <div className="single-slide"><img className="img-responsive"
                              src={genratefileName(pic.img)} alt="" /></div>)} 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="row product-overview">
                      <div className="col-12">
                        <h5 className="product-title">{productDtl.name}</h5>
                        <p className="product-rate"><i className="mdi mdi-star is-rated"></i> <i
                          className="mdi mdi-star is-rated"></i> <i
                            className="mdi mdi-star is-rated"></i> <i
                              className="mdi mdi-star is-rated"></i> <i
                                className="mdi mdi-star"></i></p>
                        <p className="product-desc">{productDtl.description}</p>

                        <div className="ec-ofr">
                          <h6>Available offers</h6>
                          <ul>
                            <li><b>category :</b>  {productDtl.category.name}</li>
                          
                            <li><b>Special Price :</b> Get extra {productDtl.offer}% off (price
                              inclusive of discount) <a href="#">T&C</a></li>


                            <li><b>Bank Offer :</b> Flat ₹ 50 off on first Ekka Pay Later
                              order of $200 and above <a href="#">T&C</a></li>
                          </ul>
                        </div>
                        <p className="product-price">Price: ₹ {productDtl.price}</p>
                        
                         


                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>



      </AppModel>

    )
  }

  return (

    <Layout sidebar>


      <div className="content">
        <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
          <div>
            <h1>Product</h1>
            <p className="breadcrumbs"><span><a href="index.html">Home</a></span> <span><i
              className="mdi mdi-chevron-right"></i></span>Product</p>
          </div>
          <div><NavLink to={"/product/create"} className="btn btn-primary">Add Porduct</NavLink></div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card card-default">

              <div className="card-body">
                <div className="row">


                  {product.products.length > 0 ?
                    product.products.map(item =>
                      <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card-wrapper">
                          <div className="card-container">
                            <div className="card-top"><img className="card-image"
                              src={genratefileName(item.productPictures[0].img)} alt="" /></div>
                            <div className="card-bottom">
                              <h3>{item.name}</h3>
                              <p>₹ {item.price}</p>
                            </div>
                            <div className="card-action">
                              <div className="card-edit"><i
                                className="mdi mdi-circle-edit-outline"></i></div>
                              <div className="card-preview" onClick={() => setproductModel(item)}><i className="mdi mdi-eye-outline"></i>
                              </div>
                              <div className="card-remove"><i
                                className="mdi mdi mdi-delete-outline"></i></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null
                  }


                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      {randerProductModel()}

    </Layout>




  )
}

export default Products