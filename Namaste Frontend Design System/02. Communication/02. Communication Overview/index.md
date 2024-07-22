# Communication Techniques

- Short Polling:
  A technique where the client checks for updates or changes on the server at regular, frequent intervals.
- Long Polling:
  A technique used to achieve near real-time updates between a client and a server by holding the client request open until new data is available.
- Websocket
  The client and server have a constant, open connection, allowing them to send messages to each other anytime.
- Server Sent Event (SSE)
  The server keeps an open connection to the client and sends updates whenever there is new data.
- Webhook
  The server sends updates to the client by making a request to a specific URL whenever something important happens.
