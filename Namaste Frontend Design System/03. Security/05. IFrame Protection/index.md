# IFrame Protection

1. Vulnerability
   - click hijacking (transparent screen)
   - Data theft via javascript
   - Session & Cookie theft
2. Mitigation
   - X-Frame-Options: DENY | SAMEORIGIN
   - CSP: frame-ancestors 'none'
   - sandbox iframe
   - Cookie
     httpOnly: true,
     secure: true,
     sameSite: "strict",
