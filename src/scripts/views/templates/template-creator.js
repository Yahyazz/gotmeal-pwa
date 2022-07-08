/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createItemTemplate = (item) => `
  <p>${item.name}</p>
`;

const createReviewTemplate = (item) => `
  <div class="review__container" tabindex="0">
    <p class="reviewer-name">${item.name}</p>
    <p>commented : ${item.review}</p>
    <p>at ${item.date}</p>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => {
  const categoryName = restaurant.categories;

  const foodMenus = restaurant.menus.foods;

  const drinkMenus = restaurant.menus.drinks;

  const userReviews = restaurant.customerReviews;

  let innerDetail = `
  <h2 class="restaurant__title" tabindex="0">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" data-src="${
    CONFIG.BASE_IMAGE_URL + restaurant.pictureId
  }" alt="${restaurant.name}" tabindex="0" />
  <div class="restaurant__info">
    <h3 tabindex="0">Information</h3>
    <h4 tabindex="0">Rating</h4>
    <p>${restaurant.rating}</p>
    <h4 tabindex="0">Address</h4>
    <p>${restaurant.address}, ${restaurant.city}</p>
  `;

  innerDetail += '<h4 tabindex="0">Category</h4>';
  categoryName.forEach((name) => {
    innerDetail += createItemTemplate(name);
  });

  innerDetail += '<h4 tabindex="0">Food\'s Menus</h4>';
  foodMenus.forEach((food) => {
    innerDetail += createItemTemplate(food);
  });

  innerDetail += '<h4 tabindex="0">Drink\'s Menus</h4>';
  drinkMenus.forEach((drink) => {
    innerDetail += createItemTemplate(drink);
  });

  innerDetail += `
  </div>
  <div class="restaurant__overview">
    <h3 tabindex="0">Description</h3>
    <p>${restaurant.description}</p>
    <h3 tabindex="0">Reviews</h3>
  `;

  userReviews.forEach((review) => {
    innerDetail += createReviewTemplate(review);
  });

  return innerDetail;
};

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="restaurant-item">
        <div class="restaurant-item__header">
            <img class="restaurant-item__header__poster" width="100%" height="200px" src="./images/placeholder.png" alt="skeleton">
        </div>
        <div class="restaurant-item__content">
            <h3 class="skeleton">Lorem ipsum dolor sit.</a></h3>
            <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
        </div>
      </div>
  `;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
            data-src="${
              restaurant.pictureId
                ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
                : 'https://picsum.photos/id/666/800/450?grayscale'
            }" tabindex="0">
        <div class="restaurant-item__header__rating">
            <p tabindex="0">⭐️<span class="restaurant-item__header__rating__score">${
              restaurant.rating
            }</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant-item__title"><a href="${`/#/detail/${restaurant.id}`}">${
  restaurant.name
}</a></h3>
        <p tabindex="0">${restaurant.city}</p>
        <p tabindex="0">${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="remove restaurant from favorite" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createSkeletonRestaurantTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
