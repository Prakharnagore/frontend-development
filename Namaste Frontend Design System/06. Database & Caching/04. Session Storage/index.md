# Session Storage

1. What?
   - Storage for to store data persistently
2. How it works?
   - getItem
   - setItem
   - removeItem
   - clear
3. Size limit
   - 5mb per domain
4. Performance
   - synchronous
5. Data Persistence
   - Cleared when the browser session ends (tab close, window)
6. Data Structure
   - key: value (value is string)
7. Security
   - storage limit, XSS, encrypt, session expiry
8. When to use?
   - temporary sensitive data
9. When not to use?
   - large dataset
   - async operation
   - long duration
