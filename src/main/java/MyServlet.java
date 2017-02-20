

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;


import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static java.lang.Math.pow;
import static java.lang.Math.sqrt;

public class MyServlet extends HttpServlet {


    static public String getRoots(String coeffs) {
        String result;
        String[] abc = new String[3];
        abc = coeffs.split("/");
        double a = Double.parseDouble(abc[0]);
        double b = Double.parseDouble(abc[1]);
        double c = Double.parseDouble(abc[2]);
        double D = pow(b, 2) - 4 * a * c;
        if (D < 0) {
            result = "У данного уравнения имеются комплексные корни";
        }
        else if (D == 0) {
            double root = -b / 2 * a;
            result = " У данного уравнения имеется единственный корень х = " + root;
        } else {
            double root1 = -b + sqrt(D) / 2 * a;
            double root2 = -b - sqrt(D) / 2 * a;
            result = " Корнями данного уравнения являются х1 = " + root1 + ", x2 = " + root2;
        }

        return result;
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        response.setCharacterEncoding("windows-1251");
        PrintWriter out = response.getWriter();
        BufferedReader reader = request.getReader();
        String rev=reader.readLine();
        rev=getRoots(rev);
        out.println("<h1> "+ rev +"</h1>");;
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}