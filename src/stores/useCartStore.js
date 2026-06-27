import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
        favorites: []
    }),

    actions: {

        addToCart(product) {
            this.cart.push(product);
        },

        toggleFavorite(product) {
            const index = this.favorites.findIndex(item => item.id === product.id);
            if (index !== -1) {

                this.favorites.splice(index, 1);
            } else {
                // Если нет — добавляем
                this.favorites.push(product);
            }
        },

        removeFromCart(productId) {
            this.cart = this.cart.filter(item => item.id !== productId);
        }
    }
});