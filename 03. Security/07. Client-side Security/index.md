# Client Side Security

1. Storing sensitive data on client storage
   - try storing at server
   - encrypt data
   - token expiry
2. Authentication
   - JWT/0Auth
   - Session token expiry
   - MFA (Multi Factor Authentication)
3. Data Integrity
   - Checksum
4. Storage Limit
   - Local Storage (5-10mb)
   - Session Storage (5-10mb)
   - Indexed DB (50mb-100mb)
   - Cookie (4kb-20kb)
   - Browser Cache (~100mb)
5. Session Management
   - http only
   - secure
