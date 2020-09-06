window.onload = function() {
var xhr = new XMLHttpRequest;
xhr.open('GET', 'test.txt', true);
xhr.onload = function (){
    document.getElementById('test').innerHTML = xhr.responseText;
};
xhr.send(null);

}