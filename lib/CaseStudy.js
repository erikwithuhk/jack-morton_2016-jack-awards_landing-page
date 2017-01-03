'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CaseStudy = function () {
  function CaseStudy(_ref) {
    var client = _ref.client,
        project = _ref.project,
        offices = _ref.offices,
        categories = _ref.categories,
        myJackLink = _ref.myJackLink,
        videoID = _ref.videoID;

    _classCallCheck(this, CaseStudy);

    this.client = client;
    this.project = project;
    this.offices = offices;
    this.categories = categories;
    this.myJackLink = myJackLink;
    this.videoID = videoID;
    this.hidden = false;
  }

  _createClass(CaseStudy, [{
    key: 'isHidden',
    value: function isHidden() {
      return this.hidden;
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.hidden = true;
    }
  }, {
    key: 'show',
    value: function show() {
      this.hidden = false;
    }
  }, {
    key: 'render',
    value: function render(parentNode) {
      var caseStudyNode = document.createElement('div');
      caseStudyNode.setAttribute('class', 'case-study clearfix');
      caseStudyNode.innerHTML = '\n      <div class="case-study__video">\n        <iframe src="https://player.vimeo.com/video/' + this.videoID + '?color=ff5000&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n      </div>\n      <div class="case-study__information clearfix">\n        <div class="case-study__details">\n          <h3 class="details__client">' + this.client + '</h3>\n          <h3 class="details__project">' + this.project + '</h3>\n          <p class="details__office">' + this.offices.join(', ') + '</p>\n        </div>\n        <div class="case-study__cta">\n          <a href="' + this.myJackLink + '"><button type="button" name="button">View the case study</button></a>\n        </div>\n      </div>\n      ';
      parentNode.append(caseStudyNode);
    }
  }]);

  return CaseStudy;
}();