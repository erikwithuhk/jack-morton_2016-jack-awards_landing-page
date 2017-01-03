'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AwardsPage = function () {
  function AwardsPage() {
    _classCallCheck(this, AwardsPage);

    this.caseStudies = null;
    this.filters = null;
    this.filterOn = false;
    this.appliedFilters = [];
    this.renderCaseStudies = this.renderCaseStudies.bind(this);
  }

  _createClass(AwardsPage, [{
    key: 'capitalize',
    value: function capitalize(string) {
      var words = string.split(' ');
      var capitalizedWords = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      return capitalizedWords.join(' ');
    }
  }, {
    key: 'slugify',
    value: function slugify(string) {
      var words = string.split(' ');
      var lowercaseWords = words.map(function (word) {
        return word.toLowerCase();
      });
      return lowercaseWords.join('-');
    }
  }, {
    key: 'linkStyleSheet',
    value: function linkStyleSheet() {
      var stylesheetNode = document.createElement('link');
      stylesheetNode.rel = 'stylesheet';
      stylesheetNode.href = 'css/landing-page.css';
      // stylesheetNode.href = 'http://myjack.jackmorton.com/css/landing-page_2016-jack-awards.css';
      document.querySelector('head').appendChild(stylesheetNode);
    }
  }, {
    key: 'applyFilters',
    value: function applyFilters() {
      var _this = this;

      this.caseStudies.forEach(function (caseStudy) {
        _this.filters.forEach(function (filterGroup) {
          var appliedFilters = filterGroup.getAppliedFilters();
          appliedFilters.forEach(function (filter) {
            if (caseStudy[filterGroup.name].includes(filter)) {
              caseStudy.show();
            }
          });
        });
      });
    }
  }, {
    key: 'checkFilters',
    value: function checkFilters() {
      var _this2 = this;

      this.filterOn = false;
      this.filters.forEach(function (filterGroup) {
        if (filterGroup.isOn()) {
          _this2.filterOn = true;
        }
      });
      if (this.filterOn) {
        this.caseStudies.forEach(function (caseStudy) {
          caseStudy.hide();
        });
        this.applyFilters();
      }
    }
  }, {
    key: 'getFilters',
    value: function getFilters() {
      var _this3 = this;

      this.filters = filterData.map(function (filterData) {
        return new FilterGroup({
          filterData: filterData,
          capitalize: _this3.capitalize,
          renderCaseStudies: _this3.renderCaseStudies
        });
      });
    }
  }, {
    key: 'getCaseStudies',
    value: function getCaseStudies() {
      this.caseStudies = caseStudiesData.map(function (caseStudyData) {
        return new CaseStudy(caseStudyData);
      });
    }
  }, {
    key: 'addStickyFilterListener',
    value: function addStickyFilterListener(filterList) {
      var origOffsetY = filterList.offsetTop;
      document.addEventListener('scroll', function () {
        window.scrollY >= origOffsetY ? filterList.classList.add('sticky') : filterList.classList.remove('sticky');
      });
    }
  }, {
    key: 'renderFilters',
    value: function renderFilters() {
      var filterList = document.querySelector('.filter-list');
      this.addStickyFilterListener(filterList);
      this.filters.forEach(function (filter) {
        filter.render(filterList);
      });
    }
  }, {
    key: 'renderCaseStudies',
    value: function renderCaseStudies() {
      var caseStudyList = document.querySelector('.case-study-list');
      caseStudyList.innerHTML = '';
      var filteredCaseStudies = void 0;
      this.checkFilters();
      if (this.filterOn) {
        filteredCaseStudies = this.caseStudies.filter(function (caseStudy) {
          return !caseStudy.isHidden();
        });
      } else {
        filteredCaseStudies = this.caseStudies;
      }
      filteredCaseStudies.forEach(function (caseStudy) {
        caseStudy.render(caseStudyList);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      this.renderCaseStudies();
    }
  }]);

  return AwardsPage;
}();

var awardsPage = new AwardsPage();
awardsPage.linkStyleSheet();
awardsPage.getFilters();
awardsPage.renderFilters();
awardsPage.getCaseStudies();
awardsPage.render();