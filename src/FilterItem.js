class FilterItem {
  constructor({ value, type, renderCaseStudies }) {
    this.value = value;
    this.type = type;
    this.applied = false;
    this.renderCaseStudies = renderCaseStudies;
  }
  toggleFilter() {
    this.applied ? this.applied = false : this.applied = true;
  }
  isOn() {
    return this.applied;
  }
  setItemClickListener() {
    this.itemNode.addEventListener('click', () => {
      this.toggleFilter();
      this.renderCaseStudies();
      this.itemNode.classList.toggle('filter-group__item--selected');
    });
  }
  render(parentNode) {
    this.itemNode = document.createElement('li');
    this.itemNode.setAttribute('class', 'filter-group__item');
    this.itemNode.innerHTML = `
      <i class="filter-group__item-deselect-icon fa fa-times" aria-hidden="true"></i><p>${this.value}</p>
    `;
    this.setItemClickListener(this.itemNode);
    parentNode.appendChild(this.itemNode);
  }
}
