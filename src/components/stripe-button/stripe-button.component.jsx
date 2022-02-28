import React from "react";

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KY2K4SF8TeXykeCt5aaW90qvA5XyTRhNuPhPBW4Ub0GudPffoCtQVD9pypK6vtSJPq5x1Reji0SuGPTIcRLMYxp00bOfjontT';


    const onToken = token => {
        console.log(token);
        alert('Your payment is successful..!!')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;