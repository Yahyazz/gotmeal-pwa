import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading" tabindex="0">Your Favorite Restaurant</h2>
      <div id="warning-text"></div>
      <div id="restaurants" class="restaurants">
      
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      document.querySelector('#warning-text').innerHTML += `
      <h3 class="main__title" tabindex="0">You haven't added your favorite restaurant yet</h3>
      `;
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
