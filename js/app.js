class AwardsPage {
  constructor() {
    this.filterOn = false;
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
  getFilters() {
    this.filters = filterData.map((filterData) => {
      return new FilterGroup({
        filterData,
        capitalize: this.capitalize,
        slugify: this.slugify,
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
    this.renderFilters();
    this.renderCaseStudies();
  }
}

const awardsPage = new AwardsPage();
awardsPage.getFilters();
awardsPage.getCaseStudies();
awardsPage.render();
