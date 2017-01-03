class AwardsPage {
  constructor() {
    this.filterOn = false;
  }
  getCaseStudies() {
    this.caseStudies = caseStudiesData.map((caseStudyData) => {
      return new CaseStudy(caseStudyData);
    });
  }
  render() {
    const caseStudyList = document.querySelector('.case-study-list');
    caseStudyList.innerHTML = '';
    let filteredCaseStudies;
    if (this.filterOn) {
      filteredCaseStudies = this.caseStudies.filter((caseStudy) => {
        return !caseStudy.isHidden();
      });
      console.log(filteredCaseStudies);
    } else {
      filteredCaseStudies = this.caseStudies;
    }
    filteredCaseStudies.forEach((caseStudy) => {
      caseStudy.render(caseStudyList);
    });
  }
}

const awardsPage = new AwardsPage();
awardsPage.getCaseStudies();
awardsPage.render();

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
  // console.log(node.classList);
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
