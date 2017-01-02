function expandFilterList() {
  const filterGroupHeaders = document.querySelectorAll('.filter-group__name');
  filterGroupHeaders.forEach(function (filterGroupHeader) {
    filterGroupHeader.addEventListener('click', function(e) {
      const filterGroup = e.target.parentElement;
      filterGroup.classList.toggle('filter-group--expanded');
    });
  });
}

function selectFilter() {
  const filterItems = document.querySelectorAll('.filter-group__item');
  filterItems.forEach(function(filterItem) {
    filterItem.addEventListener('click', function(e) {
      e.target.parentElement.classList.toggle('filter-group__item--selected');
    });
  });
}

function addClickListeners() {
  expandFilterList();
  selectFilter();
}

window.onload = addClickListeners;
