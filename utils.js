function sendJSON(response, object){
  response.writeHead(200, {
    'Content-Type': 'application/json'
  });
  response.end(JSON.stringify(object));
}

module.exports = { sendJSON }