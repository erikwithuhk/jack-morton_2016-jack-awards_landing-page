'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterGroup = function () {
  function FilterGroup(_ref) {
    var filterData = _ref.filterData,
        capitalize = _ref.capitalize,
        renderCaseStudies = _ref.renderCaseStudies;

    _classCallCheck(this, FilterGroup);

    this.name = filterData.name;
    this.itemsData = filterData.items;
    this.items = [];
    this.filterOn = false;
    this.capitalize = capitalize;
    this.renderCaseStudies = renderCaseStudies;
  }

  _createClass(FilterGroup, [{
    key: 'isOn',
    value: function isOn() {
      var _this = this;

      this.filterOn = false;
      this.items.forEach(function (item) {
        if (item.isOn()) {
          _this.filterOn = true;
        }
      });
      return this.filterOn;
    }
  }, {
    key: 'getAppliedFilters',
    value: function getAppliedFilters() {
      return this.items.filter(function (item) {
        return item.isOn();
      }).map(function (filter) {
        return filter.value;
      });
    }
  }, {
    key: 'setHeaderClickListener',
    value: function setHeaderClickListener(headerNode) {
      var _this2 = this;

      headerNode.addEventListener('click', function () {
        _this2.filterNode.classList.toggle('filter-group--expanded');
      });
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var headerNode = document.createElement('lh');
      headerNode.setAttribute('class', 'filter-group__name');
      headerNode.innerHTML = '\n      <div class="filter-group__icon">\n        <i class="fa fa-sort-desc" aria-hidden="true"></i>\n      </div>\n      ' + this.capitalize(this.name) + '\n    ';
      this.setHeaderClickListener(headerNode);
      this.filterNode.appendChild(headerNode);
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this3 = this;

      this.itemsData.forEach(function (itemData) {
        var filterItem = new FilterItem({
          value: itemData,
          type: _this3.name,
          renderCaseStudies: _this3.renderCaseStudies
        });
        _this3.items.push(filterItem);
        filterItem.render(_this3.filterNode);
      });
    }
  }, {
    key: 'render',
    value: function render(parentNode) {
      this.filterNode = document.createElement('ul');
      this.filterNode.setAttribute('class', 'filter-group clearfix');
      this.renderHeader();
      this.renderItems();
      parentNode.appendChild(this.filterNode);
    }
  }]);

  return FilterGroup;
}();