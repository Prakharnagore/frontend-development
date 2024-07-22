# How the web works

![How web works](../images/how-web-work-1.png)
![How web works](../images/how-web-work-2.png)

- If there's no change, the server will send the HTTP 304 response code.
  The HTTP status code 304 signifies Not Modified, indicating the server found no changes in the requested page
  since your last visit. After that, your browser will retrieve the cached version of the web page in your local storage.
- When an application make a network request there can be max 6-8 request made paralley depending upon the browser.
  Anything after that is queued.

1. DNS

- Domain name server
- Phone book of internet
- Contain name & ip address
- ICANN decides guidlines
- WHOIS.com - privacy protection

![DNS service hierarchy](../images/dns-hierarchy.png)

2. ISP

- Internet Service Provider

![About ISP](../images/internet.webp)

3. Client & Router

![Inside Client & Router](../images/client-&-router.png)

3. ISP & Server

![Inside ISP & Server](../images/isp-&-server.png)
![Inside SSL & Server](../images/ssl-&-server.png)
![Inside SSL & Server](../images/ssl-&-server-2.png)

4. How a web page renders?

![How a web renders](../images/how-web-page-renderds.webp)

- Rendering blocking - untils css is loaded it is not going to show anything in ui. (blocks rendering)
- Parser blocking - untils a moment if its get the blocking js it will halt your blocking js. It won't let executing go to below lines

5. CSS & CSSOM Tree

![Css & Cssom tree](../images/css-cssom-tree.png)

6. Html parcing

![Html parcing](../images/html-parcing.png)

7. Rendering Steps

![Web page rendering 1](../images/web-page-rendering-1.png)
![Web page rendering 2](../images/web-page-rendering-2.png)
![Web page rendering 3](../images/web-page-rendering-3.png)
![Web page rendering 4](../images/web-page-rendering-4.png)
![Web page rendering 5](../images/web-page-rendering-5.png)
![Web page rendering 6](../images/web-page-rendering-6.png)

#
