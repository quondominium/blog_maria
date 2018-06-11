// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

  var HASCLASS = 'is-scrolled';
  var scrolled  = 50;
  var header = document.querySelector('.header');
  window.addEventListener("scroll", function(event) {
    var top = this.scrollY;
	return (top > scrolled) ? header.classList.add(HASCLASS) : header.classList.remove(HASCLASS);
}, false); 

