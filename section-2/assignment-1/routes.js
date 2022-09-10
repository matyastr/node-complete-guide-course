const fs = require("fs");

const renderRoot = (res) => {
  res.write("<html>");
  res.write("<head><h1>Add New User</h1></head>");
  res.write("<p>Please enter a new user below.");
  res.write(
    '<body><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
  );
  res.write("</html>");

  res.end();
};

const renderUsers = (res) => {
  res.write("<html>");
  res.write("<head><h1>List of users</h1></head>");
  res.write("<ul>");
  res.write("<li>User 1</li>");
  res.write("<li>User 2</li>");
  res.write("<li>User 3</li>");
  res.write("<li>User 4</li>");
  res.write("</ul>");
  res.write("</html>");
  res.end();
};

const processCreateUserPost = (res, req) => {
  const body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split("=")[1];

    console.log(message);
  });

  res.statusCode = 302;
  res.setHeader("Location", "/");
  res.end();
};

const renderNotFound = (res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Not Found</title><head>");
  res.write("<body><h1>404 Not Found</h1></body>");
  res.write("</html>");

  res.end();
};

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    return renderRoot(res);
  }

  if (url === "/users" && method === "GET") {
    return renderUsers(res);
  }

  if (url === "/create-user" && method === "POST") {
    return processCreateUserPost(res, req);
  }

  renderNotFound(res);
};

exports.handler = requestHandler;
