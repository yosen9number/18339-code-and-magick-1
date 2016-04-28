'use strict';

(function() {
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible');
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };


  var reviewText = document.getElementById('review-text');
  var reviewName = document.getElementById('review-name');
  var button = document.getElementsByClassName('review-submit');

  var isReviewTextRequired = false;

  var marks = document.getElementsByClassName('review-mark');
  var reviewMarks = marks.value;


  var reviewFields = document.getElementsByClassName('review-fields');
  var reviewFieldsName = document.getElementsByClassName('review-fields-name');
  var reviewFieldsText = document.getElementsByClassName('review-fields-text');

  reviewName.setAttribute('required', '');
  button.setAttribute('disabled', '');

  function buttonDisableChecking() {
    for (var j = 0; j < reviewMarks.length; j++) {
      if (reviewMarks[j].checked) {
        var reviewMarkInputValue = reviewMarks[j].value;
      }
    }

    if (reviewMarkInputValue < 3) {
      reviewText.setAttribute('required', '');
      isReviewTextRequired = true;
    } else {
      reviewText.removeAttribute('required');
      isReviewTextRequired = false;
      reviewFieldsText.classList.add('invisible');
    }

    if (reviewName.value = true) {
      reviewFieldsName.classList.add('invisible');
    }
    if (reviewText.value = true) {
      reviewFieldsText.classList.add('invisible');
    }
    if ((reviewName.value = true) && (reviewText.value = true)) {
      reviewFields.classList.add('invisible');
      button.removeAttribute('disabled');

    }
  }
  buttonDisableChecking();
})();
