/**
 * Created by Lizzi on 31.01.2017.
 */
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
public class HelloWorld extends HttpServlet {


    private String message;

    public void init() throws ServletException
    {
        // Do required initialization
        message = "My  ass is fucking good";
    }

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws ServletException, IOException
    {
        // Set response content type
        response.setContentType("text/html");

        // Actual logic goes here.
        PrintWriter out = response.getWriter();
        out.println("<h1>" + message + "</h1>");
    }

    public void destroy()
    {
        // do nothing.
    }
}
