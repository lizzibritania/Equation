

function reverse() {
    var req = new XMLHttpRequest();
    var statusElem = document.getElementById('stus');
    req.open('Post', 'MyServlet', true);
    var inputvalue=document.getElementById("a").value.toString()+"/"+
        document.getElementById("b").value.toString()+"/"+document.getElementById("c").value.toString();
    req.send(inputvalue); // отослать запрос

    req.onreadystatechange = function() {

        statusElem.innerHTML = req.responseText ;  //ответ
    }
}
