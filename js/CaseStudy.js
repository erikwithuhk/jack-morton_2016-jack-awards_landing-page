class CaseStudy {
  constructor({client, project, offices, categories, myJackLink, videoURL}) {
    this.client = client;
    this.project = project;
    this.offices = offices;
    this.categories = categories;
    this.myJackLink = myJackLink;
    this.videoURL = videoURL;
    this.hidden = false;
  }
  toggleHidden() {
    this.hidden ? this.hidden = false : this.hidden = true;
  }
  isHidden() {
    return this.hidden;
  }
  render(parentNode) {
    const caseStudyNode = document.createElement('div');
    caseStudyNode.setAttribute('class', 'case-study clearfix');
    caseStudyNode.innerHTML = `
      <div class="case-study__video">
        <iframe src="${this.videoURL}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      <div class="case-study__details">
        <h3 class="details__client">Client: ${this.client}</h3>
        <h3 class="details__project">${this.project}</h3>
        <p class="details__office">${this.offices.join(', ')}</p>
      </div>
      <div class="case-study__cta">
        <a href="${this.myJackLink}"><button type="button" name="button">View the case study</button></a>
      </div>
      `;
    parentNode.append(caseStudyNode);
  }
}
