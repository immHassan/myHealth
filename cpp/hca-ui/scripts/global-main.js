jQuery.validator.addMethod("checkDOB", function (value, element) {

    if (value == "" && !$(element).hasClass("req-validation")) {
      return true
    } else {
       // checking whether the date entered is in correct format
      var isValid = value.match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);
      var minDate = Date.parse("01/01/1901");
      var today = new Date();
      var DOB = Date.parse(value);
  
      if ((DOB > today || DOB < minDate)) {
        isValid =  false;
      }
  
    }
    
    return isValid;
    }, "Please enter a valid birthdate: mm/dd/yyyy");
  
  function fixDate() {
    var value = $('#dob').val();
      switch(true) {
      case /^(\d{1})\/(\d{2})\/(\d{4})$/.test(value):
        value = '0' + value;
        $('#dob').val(value);
        $('#dob-error').hide();
        $('input#dob').removeClass('error');
      break;
      case /^(\d{2})\/(\d{1})\/(\d{4})$/.test(value):
        value = value.substring(0, 3) + "0" + value.substring(3, value.length);
        $('#dob').val(value);
        $('#dob-error').hide();
        $('input#dob').removeClass('error');
        break;
      case /^(\d{1})\/(\d{1})\/(\d{4})$/.test(value): 
        value = '0' + value;
        value = value.substring(0, 3) + "0" + value.substring(3, value.length);
        $('#dob').val(value);
        $('#dob-error').hide();
        $('input#dob').removeClass('error');
      break;
      case /^(\d{1})-(\d{2})-(\d{4})$/.test(value):
        value = '0' + value;
        value = value.replace(/-/g, "/");
        $('#dob').val(value);
        $('#dob-error').hide();
        $('input#dob').removeClass('error');
      break;
      case /^(\d{2})-(\d{1})-(\d{4})$/.test(value):
        value = value.substring(0, 3) + "0" + value.substring(3, value.length);
        value = value.replace(/-/g, "/");
        $('#dob').val(value);
        $('#dob-error').hide();
        $('input#dob').removeClass('error');
      break;
      case /^(\d{1})-(\d{1})-(\d{4})$/.test(value):
        value = '0' + value;
        value = value.substring(0, 3) + "0" + value.substring(3, value.length);
        value = value.replace(/-/g, "/");
        $('#dob').val(value);
        $('#dob-error').hide();
        $('input#dob').removeClass('error');
      break;
      case /^(\d{2})-(\d{2})-(\d{4})$/.test(value):
        value = value.replace(/-/g, "/");
        $('#dob').val(value);
        $('#dob-error').hide();
        $('input#dob').removeClass('error');
      break;
      case /^(\d{8})$/.test(value):
        var day = value.substring(0, 2) + "/";
        var month = value.substring(2, 4) + "/";
        var year = value.substring(4, value.length);
        value = day + month + year;
        $('#dob').val(value);
        $('#dob-error').hide();
        $('input#dob').removeClass('error');
      break;
      default: return false;
    }
    return value;
  }
  
  function isNumberKey(controller, evt) {
    for (var i = 0; i < evt.length; i++) {
      var charCode = evt.charCodeAt(i);
      if (charCode != 47 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt = evt.substring(0, evt.length - 1);
        controller.set('answer', evt);
      }
    }
  }
  
  function validateDate(value) {
    // checking whether the date entered is in correct format
    var isValid = value
        .match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);
    var minDate = Date.parse("01/01/1901");
    var today = new Date();
    var DOB = Date.parse(value);
  
    if (isValid) {
      if ((DOB > today || DOB < minDate)) {
        isValid = false;
        return isValid;
      } else {
        isValid = true;
        return isValid;
      }
    }
    return isValid;
  }
  
  function fixDateOpp(value) {
    switch (true) {
    case /^(\d{1})\/(\d{2})\/(\d{4})$/.test(value):
      value = '0' + value;
      break;
    case /^(\d{2})\/(\d{1})\/(\d{4})$/.test(value):
      value = value.substring(0, 3) + "0" + value.substring(3, value.length);
      break;
    case /^(\d{1})\/(\d{1})\/(\d{4})$/.test(value):
      value = '0' + value;
      value = value.substring(0, 3) + "0" + value.substring(3, value.length);
      break;
    case /^(\d{1})-(\d{2})-(\d{4})$/.test(value):
      value = '0' + value;
      value = value.replace(/-/g, "/");
      break;
    case /^(\d{2})-(\d{1})-(\d{4})$/.test(value):
      value = value.substring(0, 3) + "0" + value.substring(3, value.length);
      value = value.replace(/-/g, "/");
      break;
    case /^(\d{1})-(\d{1})-(\d{4})$/.test(value):
      value = '0' + value;
      value = value.substring(0, 3) + "0" + value.substring(3, value.length);
      value = value.replace(/-/g, "/");
      break;
    case /^(\d{2})-(\d{2})-(\d{4})$/.test(value):
      value = value.replace(/-/g, "/");
      break;
    case /^(\d{8})$/.test(value):
      var day = value.substring(0, 2) + "/";
      var month = value.substring(2, 4) + "/";
      var year = value.substring(4, value.length);
      value = day + month + year;
      break;
    case /^(\d{2})\/(\d{2})\/(\d{4})$/.test(value):
      break;
    default:
      return false;
    }
    return value;
  }