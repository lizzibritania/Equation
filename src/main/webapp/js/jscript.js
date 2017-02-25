


function reverse() {
    var req = new XMLHttpRequest();
    var statusElem = document.getElementById('stus');
    req.open('Post', 'MyServlet', true);
var checkA=document.getElementById("a").value.toString();
    var checkB=document.getElementById("b").value.toString();
    var checkC=document.getElementById("c").value.toString();
    var cheker=0;
    if (checkA=="")
    {alert("A is invalid");
        cheker=1;}
    if (checkB=="")
    {alert("B is invalid");
        cheker=1;}
    if (checkC=="")
    {alert("C is invalid");
        cheker=1;}
if (isNaN(checkA))
{alert("A is invalid");
  cheker=1;}
    if (isNaN(checkB))
    {alert("B is invalid");
        cheker=1;}
    if (isNaN(checkC))
    {alert("C is invalid");
        cheker=1;}
        if (cheker==0){
    var inputvalue=document.getElementById("a").value.toString()+"/"+
        document.getElementById("b").value.toString()+"/"+document.getElementById("c").value.toString();
    req.send(inputvalue);
    req.onreadystatechange = function() {
        statusElem.innerHTML = req.responseText ;
        if (this.readyState != 4) {
            return;
        }
        if (this.status == 200) {
            if (document.getElementById("answersheet").disabled = true) {

                if (document.all.answersheet.rows[0] == null) {
                    statusElem.innerHTML = req.responseText;
                } else {
                    mytable = document.getElementById('answersheet');
                    rowcount = mytable.rows.length;
                    newrow = mytable.insertRow(rowcount);
                    mytable.rows[rowcount].innerHTML = req.responseText;
                }
            }
        }
        var t = document.getElementById('answersheet');
        var rows = t.getElementsByTagName("tr");
        for (var i = 1; i < rows.length; i++)
            if (i % 2) {
                rows[i].className = "c1";
            }
            else {
                rows[i].className = "c2";
            }
    }
}}
var dt = document.getElementById("answersheet");
function delete_tr(obj) {
    var num_tr = obj.rows.sectionRowIndex;
    dt.deleteRow(num_tr)


}
$(document).ready(function () {
    $(document).on('click', 'tr',function () {
        $(this).remove('tr');
        var t = document.getElementById('answersheet');
        var rows = t.getElementsByTagName("tr");
        for (var i = 1; i < rows.length; i++)
            if (i % 2) {
                rows[i].className = "c1";
            }
            else {
                rows[i].className = "c2";
            }
    })
})