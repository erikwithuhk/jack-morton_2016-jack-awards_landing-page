function expandFilterList() {
  const filterGroupHeaders = document.querySelectorAll('.filter-group__name');
  filterGroupHeaders.forEach(function (filterGroupHeader) {
    filterGroupHeader.addEventListener('click', function(e) {
      const filterGroup = e.target.parentElement;
      filterGroup.classList.toggle('filter-group--expanded');
    });
  });
}

function applyFilter(node) {
  console.log(node.classList);
}

function selectFilter() {
  const filterItems = document.querySelectorAll('.filter-group__item');
  filterItems.forEach(function(filterItem) {
    filterItem.addEventListener('click', function(e) {
      const parentElement = e.target.parentElement;
      parentElement.classList.toggle('filter-group__item--selected');
      applyFilter(parentElement);
    });
  });
}

function addClickListeners() {
  expandFilterList();
  selectFilter();
}

window.onload = addClickListeners;
