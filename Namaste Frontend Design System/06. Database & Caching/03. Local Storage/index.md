# LocalStorage

1. What?
   - Storage to store data persistently on user device
2. How it works?
   - setItem
   - getItem
   - removeItem
   - clear
3. Size limit
   - 5mb per domain
4. Performance
   - Synchronous
5. Data Persistence
   - Persists across browser session and tab closer
6. Data Structure
   - key:value (value is always a string)
7. Security
   - storage, encryption, CORS, XSS
8. When to use?
   - user preferences
   - non sensitive data
9. When not to use?
   - Large dataset
   - sensitive data
   - auth token
   - user details
   - cross profiles information
