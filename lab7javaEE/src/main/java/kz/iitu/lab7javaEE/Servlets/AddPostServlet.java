package kz.iitu.lab7javaEE.Servlets;

import kz.iitu.lab7javaEE.DAO.MyDao;
import kz.iitu.lab7javaEE.Models.Post;
import kz.iitu.lab7javaEE.Models.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;


@WebServlet("/AddPostServlet")
public class AddPostServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Post post = new Post();
		boolean status = false;
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");

		String theme= request.getParameter("theme");
		String body = request.getParameter("body");
		HttpSession adminSession = request.getSession(false);
		User user = (User) request.getSession().getAttribute("logged_user");

		if(!theme.equals("") && !body.equals("")){
			post.setTheme(theme);
			post.setBody(body);
			post.setLikes(0);
			post.setDislikes(0);
			post.setUser_id(user.getId());
			try {
				status = new MyDao().createPost(post);
			} catch (Exception e) {
				adminSession.setAttribute("exception",e);
				e.printStackTrace();
			}
			if(status){
				out.println("<script>alert('Success')</script>");
				adminSession.setAttribute("message","Success" );
				response.sendRedirect("PostList.jsp");
			}else{
				out.println("<script>alert('Error')</script>");
				adminSession.setAttribute("message","Error" );
				response.sendRedirect("PostList.jsp");
			}
		}else{
			out.println("<script>alert('Write data')</script>");
			response.sendRedirect("PostList.jsp");
		}


	}

}
