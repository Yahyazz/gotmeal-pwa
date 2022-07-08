const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.content__heading');
  I.see("You Haven't Added Your Favorite Restaurant Yet", '.main__title');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see("You Haven't Added Your Favorite Restaurant Yet", '.main__title');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__title a');

  const firstRestaurant = locate('.restaurant-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton .fa-heart-o');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);

  I.seeElement('#likeButton .fa-heart');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see("You Haven't Added Your Favorite Restaurant Yet", '.main__title');
});
