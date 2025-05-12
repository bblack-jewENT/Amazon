import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

 async function loadPage() {

    try {
        // throw 'error1';

        await loadProductsFetch();

        await new Promise((resolve, reject) => {
            // throw 'error2';
            loadCart(() => {
                /* reject creates an error in the future !*/

                // reject('error3');
                resolve();
            }) 
        });

    } catch (error) {
        document.querySelector('.main').innerHTML = '<div class="error-message">Something went wrong. Please refresh.</div>';
        console.log('Unexpected error. Please try again later.');

    }

    renderOrderSummary();
    renderPaymentSummary();

}
loadPage();

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        })
    })
   
]).then((values) => {
    // console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
})
*/    

/*
new Promise((resolve) => {
   loadProducts(() => {
    resolve('value1');
   });

}).then((value) => {
    console.log(value);
   return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
   });
   
}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/


/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    })
});
*/



