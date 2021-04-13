<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
    <h3>Sign in</h3>
    <hr>
    <form action="LoginServlet" method="POST">
            <input type="email" placeholder="Email" name="email"/> <br>
            <input type="password" placeholder="Password" name="password"/><br>
            <button type="submit">Sign in</button>
            <br>
            <a href="Registration.jsp" class="register" >Register</a>
        </div>
    </form>
</body>
</html>
