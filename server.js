const HTTP = require('http');
const { sendJSON, sendHTML } = require('./utils');
const fileSystem = require('fs');


const server = HTTP.createServer((request, response) => {
  let path = request.url;
  console.log("request received", path);
  if (path === '/'){
    response.end("home");
  }
  else if (path === '/opensesame'){
    response.end("ooh you found the easter egg!");
  }
  else if (path === '/example.gif'){
    let filePath = "./assets/wombat.gif";
    let stat = fileSystem.statSync(filePath);
    response.writeHead(200, {
      'Content-Type': 'image/gif',
      'Content-length': stat.size
    });
    fileSystem.createReadStream(filePath).pipe(response);
  }
  else if (path === '/postcode.json'){
    sendJSON(response, 200, [
      {"name": "Melbourne", "postcode": 3000},
      {"name": "Tottenham", "postcode": 3012},
      {"name": "Albion", "postcode": 3020},
      {"name": "Sunshine", "postcode": 3011},
    ]);
  }
  else if (path === '/assets/main.css'){
    response.end(`
    h1{
      color: red;
    }`);
  }
  else if (path === '/about'){ // instead of /about.html because its more modern to leave off the .html
    
    sendHTML(response, 200, `
      <h1>about</h1>
      <p>
      This is a paragraph
      </p>
      `, 'main.css');
  }
  else {
    sendJSON(response, 404, {"message": "page not found"});    
  }
});

//start the server:

server.listen(8001, (error) => {
  console.log('Server has started at http://localhost:8001');
});