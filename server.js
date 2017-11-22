const HTTP = require('http');

const server = HTTP.createServer((request, response) => {
  let path = request.url;
  console.log("request received", path);
  if (path === '/'){
    response.end("home");
  }
  else if (path === '/opensesame'){
    response.end("ooh you found the easter egg!");
  }
  else if (path === '/postcode.json'){
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(`{"name": "Melbourne", "postcode": "3000"}`);
  }
  else if (path === '/about'){ // instead of /about.html because its more modern to leave off the .html
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.end(`
    <!doctype html>
    <html>
      <body>
      <h1>about</h1>
      <p>
      This is a paragraph
      </p>
      </body>
    </html>
    `);
  }
  else {
    response.end('back at you');
  }

});

//start the server:

server.listen(8001, (error) => {
  console.log('Server has started at http://localhost:8001');
});