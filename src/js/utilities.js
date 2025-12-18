// HELPER METHODS
var el = (t, a) => a ? document.querySelectorAll(t) : document.querySelector(t);

var imgs = el("img", true);
var titles = el(".card-title", true);
var texts = el(".card-text", true);