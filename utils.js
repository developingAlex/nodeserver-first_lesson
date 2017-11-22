function sendJSON(response, code, object){
  response.writeHead(code, {
    'Content-Type': 'application/json'
  });
  response.end(JSON.stringify(object));
}

function sendHTML(response, code, html, stylesheet) {
  response.writeHead(code, {
    'Content-Type': 'text/html'
  });
  response.end(`<!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="/assets/colors/${stylesheet}">
      </head>
      <body>${html}</body>
      </html>
      `)
      ;
}

module.exports = { sendJSON, sendHTML }