import DicodingDbSource from '../../data/dicodingdb-source';
import {
  createRestaurantItemTemplate,
  createSkeletonRestaurantTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <!-- Hero Landing -->
      <div class="hero">
        <div class="hero__wrapper">
          <h1 class="hero__title" tabindex="0">
            best restaurant with best chef
          </h1>
          <h2 class="hero__sub-title" tabindex="0">
            Find restaurant near you with best quality
          </h2>
        </div>
      </div>
      <section class="landing__wrapper">
            <div class="landing__img">
                <img class="lazyload" data-src="images/cooking.svg" alt="Human Cooking Barbeque Illustration" tabindex="0">
            </div>
            <div class="landing__title">
                <h2 tabindex="0">hungry? we got the restaurant for you</h2>
            </div>
      </section>
      <section class="landing__wrapper second">
            <div class="landing__img">
                <img class="lazyload" data-src="images/bbq.svg" alt="Human Cheft Cooking Illustration" tabindex="0">
            </div>
            <div class="landing__title">
                <h2 tabindex="0">we pick the best restaurant just for you</h2>
            </div>
     </section>
      <div class="content">
      <h2 tabindex="0" class="main__title">Let's see what we got</h2>
        <div id="restaurants" class="restaurants">
            ${createSkeletonRestaurantTemplate(20)}
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingDbSource.homeRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
