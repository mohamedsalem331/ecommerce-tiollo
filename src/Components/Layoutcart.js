import React, { Component } from 'react'
import image9 from '../Images/main.webp'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";  
import image2 from '../Images/main.webp'
import {ProductContext} from '../context'

//   function MyVerticallyCenteredModal(props) {

//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

export default class Layoutcart extends Component {
  state = {
    modalShow: false
  }

  static contextType = ProductContext

  render() {

    const { cart, shipping, subTotal, total } = this.context  

    return (
      <>
        <div className="layout-cart">
          <article className="order-summary-cart">
            <header className="layout-header-summary">
              <span>Order Summary</span>
              <a href="/cart">Edit Cart</a>
            </header>
            <hr/>
            <section className="layout-section-body">
              <h2>2 Items</h2>
                {cart ? cart.map(item => (
                  <div className="layout-section-item">
                  <div><img src={item.images[0]} width="20%" height="20%" alt=""/></div>
                  <div><h2>{item.name}</h2></div>
                  <span>£{item.price}</span>
                  </div>
                )) : <div>Nothing to show here</div>}
                
              <hr/>

              <div className="layout-section-subtotal-item">
                <div>Subtotal</div>
                <span>£{subTotal}</span>
              </div>
              
              <div className="layout-section-total-item">
                <div>Shipping</div>
                <span>£{shipping}</span>
              </div>

              <hr/>

              <div className="layout-section-total-item">
                <div>Total</div>
                <span>£{total}</span>
              </div>

            </section>
          </article>
        </div>
      </>
    );
  } 
}


    // <MyVerticallyCenteredModal
    //       show={modalShow}
    //       onHide={() => this.state.modalShow({!modalShow})}
    //     />