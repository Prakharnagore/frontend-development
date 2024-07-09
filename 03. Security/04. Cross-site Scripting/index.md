# Cross Site Scripting (XSS)

[Cross Site Scripting](../images/cross-site-scripting.png)

1. Vulnerability
   - User session hacking (example2.html)
   - Unathorized activities (example3.html)
   - Capturing keystrokes (example4.html)
   - Stealing critical information (example5.html)
   - Phishing attrack (example6.html)
2. Mitigation
   - list all possible wat to take user input
   - Replace: innerHTML with (innerText | textContent)
   - Escaping
   - using library like react
   - avoid dangerouslySetHTML element
   - Sanitize data using dom purify library
   - CSP Headers (Content Security Policy)
     - Allowed Sources
     - Script Nonces
     - Report-only (report-to default; report-uri URL;)
