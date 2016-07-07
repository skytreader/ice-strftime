/**
@module iceStrftime.filter
*/
"use strict";

/**
@constructor
*/
function PatternFilter(){
    var monthsFullName = /(January|February|March|April|May|June|July|August|September|October|November|December)/;
    var monthsAbv = /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/;
    var monthsDec = /[1-12]/;
    var monthsDecZeroPadded = /(0[1-9]|[10-12]/;
    var daysDec = /[1-30]/
    var daysDecZeroPadded = /(0[1-9]|[10-31])/
    var year = /\d{4}/;

    /**
    @member
    @type Array.RegExp
    */
    this.patterns = [monthsFullName, monthsAbv, monthsDec, monthsDecZeroPadded,
      daysDec, daysDecZeroPadded, year];
}

/**
Angular bits.
*/
(function(app){
    app.AppComponent = ng.core.Component({
        selector: "ice-strftime",
        template: "Ice Star Fun Time"
    })
    .Class({
        constructor: function(){}
    });
})(window.app || (window.app = {}));
