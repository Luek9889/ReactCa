import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {
    
  onToken = (token, addresses) => {
    
  };

  render() {
    return (
      <StripeCheckout
        amount='500'
        billingAddress
        description="Awesome Product"
        image="https://www.talkofthetown.ie/wp-content/uploads/2016/02/dkit-logo.png"
        locale="auto"
        name="Lukes E Store"
        stripeKey="pk_test_bk2hPc5vzHh4UpL3vzLyOcPK00esPlmtpS"
        token={this.onToken}
        zipCode
      />
    )
  }
}