class FilterGroup {
  constructor({name, items}, capitalize) {
    this.name = name;
    this.items = items;
    this.capitalize = capitalize;
  }
  setHeaderClickListener(headerNode) {
    headerNode.addEventListener('click', (e) => {
      this.filterNode.classList.toggle('filter-group--expanded');
    });
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
    this.setHeaderClickListener(headerNode);
    this.filterNode.append(headerNode);
  }
  setItemClickListener(itemNode) {
    itemNode.addEventListener('click', function(e) {
      const parentElement = e.target.parentElement;
      parentElement.classList.toggle('filter-group__item--selected');
    });
  }
  renderItems() {
    this.items.forEach((item) => {
      const itemNode = document.createElement('li');
      itemNode.setAttribute('class', 'filter-group__item');
      itemNode.innerHTML = `
        <i class="filter-group__item-deselect-icon fa fa-times" aria-hidden="true"></i><p>${this.capitalize(item)}</p>
      `;
      this.setItemClickListener(itemNode);
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
