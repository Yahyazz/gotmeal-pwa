import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routers/url-parser';
import routes from '../routers/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    let page = routes[url];
    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (err) {
      console.log(err);
      page = routes['/offline'];
      this._content.innerHTML = await page.render();
    }
  }
}

export default App;
