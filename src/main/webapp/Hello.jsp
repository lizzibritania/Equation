<!DOCTYPE HTML>
<%@ page contentType="text/html; charset=windows-1251" %>
<%@ page import="java.util.*, java.text.*" %>

<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
</head>

<body>
<form action="HelloWorld",  method="Get">
    <p>������ ���� ���: <input type="text" name="username"></p>

<button> ������ �� ����������� ��� ����, ����� ���</button>
</form>


    <p>������ ���� ���:  <input type="text" name="str1" id="inp"></p>

    <p><input value="������?" onclick="reverse()" type="button" />



<div id="stus">��������������� ������</div>
<script>

    function reverse() {
        var req = new XMLHttpRequest();
        var statusElem = document.getElementById('stus');
        req.open('Post', 'MyServlet', true);
        var inputvalue=document.getElementById("inp").value.toString();
        req.send(inputvalue); // �������� ������

        req.onreadystatechange = function() {

                statusElem.innerHTML = req.responseText ;  //�����

            }
        }
       // statusElem.innerHTML = '������ ������ ...'


</script>

</body>
</html>

