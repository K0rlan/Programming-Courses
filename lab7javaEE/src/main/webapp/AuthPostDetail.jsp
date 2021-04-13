<%@ page import="kz.iitu.lab7javaEE.Models.Post" %>
<%@ page import="java.util.List" %>
<%@ page import="kz.iitu.lab7javaEE.Models.Comment" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Detail Movie</title>
    <jsp:useBean id="post" class="kz.iitu.lab7javaEE.Models.Post" scope="session"/>
    <% List<?> comments = (List<?>) request.getSession().getAttribute("comments");%>
    <jsp:useBean id="comment" class="kz.iitu.lab7javaEE.Models.Comment" scope="session"/>

</head>
<body>
<a href="UserLogoutServlet">
    <button type="button">Logout</button>
</a><div align="center">
    <h2>Add New Product</h2>
</div>
<div>
    <form action="AuthPostDetailServlet" method="post">
        <table align="center">
            <tr>
                <td>Post Theme :</td>
                <td><jsp:getProperty name="post" property="theme"/></td>
            </tr>
            <tr>
                <td>Post Body :</td>
                <td><jsp:getProperty name="post" property="body"/></td>
            </tr>
            <tr>
                <td>Likes :</td>
                <td><jsp:getProperty name="post" property="likes"/> <button type="button" onclick="<jsp:setProperty name="post" property="likes" value="${post.likes+1}"/>">like</button></td>
            </tr>
            <tr>
                <td>Dislikes :</td>
                <td><jsp:getProperty name="post" property="dislikes"/> <button type="button" onclick="<jsp:setProperty name="post" property="dislikes" value="${post.dislikes+1}"/>">dislike</button></td>
            </tr>
        </table>
        <br>
        <table align="center">
            <tr>
                <th width="150">User</th>
                <th width="100">Comments</th>
            </tr>
            <%
                for (Object obj : comments) {
                    comment = (Comment) obj;
                    if (comment.getPost_id() == post.getId()){
            %>
            <tr>
                <td align="center"><%=comment.getUser_name()%></td>
                <td align="center"><%=comment.getComment()%></td>
            </tr>
            <%
                    }
                }
            %>
        </table>
        <div align="center">
            <label>Add comment: </label>
            <input type="text" name="comment"/>
            <input value="Submit"
                   type="submit" />
        </div>
    </form>
</div>
</body>
</html>
