class AwardsPage {
  constructor() {
    this.caseStudies = null;
    this.filters = null;
    this.filterOn = false;
    this.appliedFilters = [];
    this.renderCaseStudies = this.renderCaseStudies.bind(this);
  }
  capitalize(string) {
    const words = string.split(' ');
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
  }
  slugify(string) {
    const words = string.split(' ');
    const lowercaseWords = words.map((word) => {
      return word.toLowerCase();
    });
    return lowercaseWords.join('-');
  }
  applyFilters() {
    this.caseStudies.forEach((caseStudy) => {
      this.filters.forEach((filterGroup) => {
        const appliedFilters = filterGroup.getAppliedFilters();
        appliedFilters.forEach((filter) => {
          if (caseStudy[filterGroup.name].includes(filter)) {
            caseStudy.show();
          }
        });
      });
    });
  }
  checkFilters() {
    this.filterOn = false;
    this.filters.forEach((filterGroup) => {
      if (filterGroup.isOn()) {
        this.filterOn = true;
      }
    });
    if (this.filterOn) {
      this.caseStudies.forEach((caseStudy) => {
        caseStudy.hide();
      });
      this.applyFilters();
    }
  }
  getFilters() {
    this.filters = filterData.map((filterData) => {
      return new FilterGroup({
        filterData,
        capitalize: this.capitalize,
        renderCaseStudies: this.renderCaseStudies,
      });
    });
  }
  getCaseStudies() {
    this.caseStudies = caseStudiesData.map((caseStudyData) => {
      return new CaseStudy(caseStudyData);
    });
  }
  renderFilters() {
    const filterList = document.querySelector('.filter-list');
    this.filters.forEach((filter) => {
      filter.render(filterList);
    });
  }
  renderCaseStudies() {
    const caseStudyList = document.querySelector('.case-study-list');
    caseStudyList.innerHTML = '';
    let filteredCaseStudies;
    this.checkFilters();
    if (this.filterOn) {
      filteredCaseStudies = this.caseStudies.filter((caseStudy) => {
        return !caseStudy.isHidden();
      });
    } else {
      filteredCaseStudies = this.caseStudies;
    }
    filteredCaseStudies.forEach((caseStudy) => {
      caseStudy.render(caseStudyList);
    });
  }
  render() {
    this.renderCaseStudies();
  }
}

const awardsPage = new AwardsPage();
awardsPage.getFilters();
awardsPage.renderFilters();
awardsPage.getCaseStudies();
awardsPage.render();
