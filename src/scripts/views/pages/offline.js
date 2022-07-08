const Offline = {
  async render() {
    return `
      <!-- Not Found -->
      <div class="content">
        <div class="not-found__container">
          <div class="not-found__content">
            <h2>You're offline. Check your connection.</h1>
            <h3>or</h2>
            <div class="return__button">
              <a href="#/home">Return to home</a>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};

export default Offline;
