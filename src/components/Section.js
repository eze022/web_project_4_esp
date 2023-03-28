export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItemAtEnd(element) {
    this._container.append(element);
  }

  addItemAtIniticial(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._items.forEach((item) => {
      const renderedItem = this._renderer(item);
      this.addItemAtEnd(renderedItem);
    });
  }
}
