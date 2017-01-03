class FilterGroup {
  constructor({filterData, capitalize, slugify}) {
    this.name = filterData.name;
    this.items = filterData.items;
    this.capitalize = capitalize;
    this.slugify = slugify;
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
  renderItems() {
    this.items.forEach((item) => {
      const filterItem = new FilterItem({
        name: item,
        slugify: this.slugify,
      });
      filterItem.render(this.filterNode);
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
