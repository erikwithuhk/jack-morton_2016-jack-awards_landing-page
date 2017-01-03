class FilterItem {
  constructor({ name, slugify }) {
    this.name = name;
    this.slugify = slugify;
  }
  setItemClickListener() {
    this.itemNode.addEventListener('click', (e) => {
      this.itemNode.classList.toggle('filter-group__item--selected');
    });
  }
  render(parentNode) {
    this.itemNode = document.createElement('li');
    this.itemNode.setAttribute('class', 'filter-group__item');
    this.itemNode.innerHTML = `
      <i class="filter-group__item-deselect-icon fa fa-times" aria-hidden="true"></i><p>${this.name}</p>
    `;
    this.setItemClickListener(this.itemNode);
    parentNode.append(this.itemNode);
  }
}
