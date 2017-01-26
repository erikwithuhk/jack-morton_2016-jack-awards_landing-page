class CaseStudy {
  constructor({ client, project, offices, categories, awards, myJackLink, videoID }) {
    this.client = client;
    this.project = project;
    this.offices = offices;
    this.categories = categories;
    this.awards = awards;
    this.myJackLink = myJackLink;
    this.videoID = videoID;
    this.hidden = false;
  }
  isHidden() {
    return this.hidden;
  }
  hide() {
    this.hidden = true;
  }
  show() {
    this.hidden = false;
  }
  render(parentNode) {
    const caseStudyNode = document.createElement('div');
    caseStudyNode.setAttribute('class', 'case-study clearfix');
    caseStudyNode.innerHTML = `
      <div class="case-study__video">
        <iframe src="https://player.vimeo.com/video/${this.videoID}?color=ff5000&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      <div class="case-study__information clearfix">
        <div class="case-study__details">
          <h3 class="details__client">${this.client}</h3>
          <h3 class="details__project">${this.project}</h3>
          <p class="details__office">${this.offices.join(', ')}</p>
        </div>
        <div class="case-study__cta">
          <a href="${this.myJackLink}" target="_blank"><button type="button" name="button">View the case study</button></a>
        </div>
      </div>
      `;
    parentNode.appendChild(caseStudyNode);
  }
}
