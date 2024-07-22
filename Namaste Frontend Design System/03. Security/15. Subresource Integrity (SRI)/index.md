# Subresource Integrity (SRI)

Loading CDN

- Browser download the resource
- Generate Cryptography hash
- Using sha284, 256, 512
- Generate hash using components + algo + crypto function
- Compares the generated hash with integrity attribute
- Benifits
  - 3rd party is resource compromised
  - any content update inside resource
