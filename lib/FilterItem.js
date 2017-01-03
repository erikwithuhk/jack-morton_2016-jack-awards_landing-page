'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterItem = function () {
  function FilterItem(_ref) {
    var value = _ref.value,
        type = _ref.type,
        renderCaseStudies = _ref.renderCaseStudies;

    _classCallCheck(this, FilterItem);

    this.value = value;
    this.type = type;
    this.applied = false;
    this.renderCaseStudies = renderCaseStudies;
  }

  _createClass(FilterItem, [{
    key: 'toggleFilter',
    value: function toggleFilter() {
      this.applied ? this.applied = false : this.applied = true;
    }
  }, {
    key: 'isOn',
    value: function isOn() {
      return this.applied;
    }
  }, {
    key: 'setItemClickListener',
    value: function setItemClickListener() {
      var _this = this;

      this.itemNode.addEventListener('click', function () {
        _this.toggleFilter();
        _this.renderCaseStudies();
        _this.itemNode.classList.toggle('filter-group__item--selected');
      });
    }
  }, {
    key: 'render',
    value: function render(parentNode) {
      this.itemNode = document.createElement('li');
      this.itemNode.setAttribute('class', 'filter-group__item');
      this.itemNode.innerHTML = '\n      <i class="filter-group__item-deselect-icon fa fa-times" aria-hidden="true"></i><p>' + this.value + '</p>\n    ';
      this.setItemClickListener(this.itemNode);
      parentNode.append(this.itemNode);
    }
  }]);

  return FilterItem;
}();