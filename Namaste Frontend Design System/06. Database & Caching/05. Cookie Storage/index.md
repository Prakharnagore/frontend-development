# Cookie Storage

1. What?
   - Storage to store persistent data
2. How it works?
   - data can be set by client/server & cookie get transmitted via http call
   - cookie set from the client, server can always read
   - cookie set by server, based on some condition client may or may not be able to read
   - Types of cookie
     - Session cookie (when you do not provide expiry time)
     - Persistent cookie (when you provide expiry time)
3. Size limit
   - 4kb/domain
4. Performance
   - http req/res time can be effected due to cookie
5. Data Persistence
   - expiration date, expires on browser close or meeting expiry date
6. Data Structure
   - key: value (string)
7. Security
   - httpOnly (use this if you dont want to use javascript to read this from the client)
   - configure expiry
   - sameSite
   - domain/path
   - secure
   - XSS, CSRF
8. When to use?
   - authorization
   - light data > user preference
9. When not to use?
   - large set data
   - dont put blindly sensitive data
