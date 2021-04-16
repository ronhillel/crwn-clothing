import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IgmadGxaVA3aGyLjx9HrW9E86wF46UFHV7V9YstPY71vcTwC44CVTPVsex2MQycWPsbEJ2t1atn7yytt2RrVF7800rvZch2wD';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            currency="USD"
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} />
    );
};

export default StripeCheckoutButton;
