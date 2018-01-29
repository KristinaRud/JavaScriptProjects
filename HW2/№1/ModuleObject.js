// JavaScript source code
var ModuleObject = {};

ModuleObject.Chandge = function () {
    var Arr = document.body.childNodes;
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i].nodeType == 1) {
            Arr[i].innerHTML = "PARAGRAP";
        }
    }
}
