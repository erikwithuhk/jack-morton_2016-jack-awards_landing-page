class Filter {
  constructor({name, items}, capitalize) {
    this.name = name;
    this.items = items;
    this.capitalize = capitalize;
  }
  renderHeader() {
    const headerNode = document.createElement('lh');
    headerNode.setAttribute('class', 'filter-group__name');
    headerNode.innerHTML = `
      <div class="filter-group__icon">
        <i class="fa fa-sort-desc" aria-hidden="true"></i>
      </div>
      ${this.capitalize(this.name)}
    `;
    this.filterNode.append(headerNode);
  }
  renderItems() {
    this.items.forEach((item) => {
      const itemNode = document.createElement('li');
      itemNode.setAttribute('class', 'filter-group__item');
      itemNode.innerHTML = `
        <i class="filter-group__item-deselect-icon fa fa-times" aria-hidden="true"></i><p>${this.capitalize(item)}</p>
      `;
      this.filterNode.append(itemNode);
    });
  }
  render(parentNode) {
    this.filterNode = document.createElement('ul');
    this.filterNode.setAttribute('class', 'filter-group clearfix');
    this.renderHeader();
    this.renderItems();
    parentNode.append(this.filterNode);
  }
}
