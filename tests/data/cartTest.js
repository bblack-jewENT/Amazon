import {addToCart, cart, loadFromStorage} from '../../data/cart.js';

describe('Test suite: addToCart', () => {
    beforeEach(() => {
        spyOn(localStorage, 'setItem');
    });

    afterEach(() => {
        cart.length = 0; // Clear cart to prevent test contamination
      });
      

    it('adds an existing product to the cart', () => {

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: 3 
            }]);
        });
        
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toBe(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toBe('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toBe(2);
        expect(cart[0].deliveryOptionId).toBe(3);
        
    }); 

    it('adds a new product to the cart', () => {

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        
        loadFromStorage();
        
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toBe(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toBe('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toBe(1);
        expect(cart[0].deliveryOptionId).toBe(3);
    });
});