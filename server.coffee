{createServer} = require "http"

createServer (request, response) ->
  response.write "Hello World\n"
  response.end()
.listen 3000, ->
  console.log "The server is listening on port 3000"
