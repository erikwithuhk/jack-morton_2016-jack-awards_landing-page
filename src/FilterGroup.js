class FilterGroup {
  constructor({ filterData, capitalize, renderCaseStudies }) {
    this.name = filterData.name;
    this.itemsData = filterData.items;
    this.items = [];
    this.filterOn = false;
    this.capitalize = capitalize;
    this.renderCaseStudies = renderCaseStudies;
  }
  isOn() {
    this.filterOn = false;
    this.items.forEach((item) => {
      if (item.isOn()) {
        this.filterOn = true;
      }
    });
    return this.filterOn;
  }
  getAppliedFilters() {
    return this.items.filter(item => item.isOn()).map(filter => filter.value);
  }
  setHeaderClickListener(headerNode) {
    headerNode.addEventListener('click', () => {
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
    this.filterNode.appendChild(headerNode);
  }
  renderItems() {
    this.itemsData.forEach((itemData) => {
      const filterItem = new FilterItem({
        value: itemData,
        type: this.name,
        renderCaseStudies: this.renderCaseStudies,
      });
      this.items.push(filterItem);
      filterItem.render(this.filterNode);
    });
  }
  render(parentNode) {
    this.filterNode = document.createElement('ul');
    this.filterNode.setAttribute('class', 'filter-group clearfix');
    this.renderHeader();
    this.renderItems();
    parentNode.appendChild(this.filterNode);
  }
}
