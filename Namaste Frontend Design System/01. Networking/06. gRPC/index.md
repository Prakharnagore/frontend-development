# gRPC

![gRPC architectural diagram](../images/grpc.png)

- gRPC (Remote procedure call)
- open source
- grpc is a framework built on top of rpc
- communication happens using protocol buffer (protoBuf) - IDL (Interface definition language)
- HTTP2
- protocol serialization
- single long live connection
- bidirectional streaming
  ![Bi directional](../images/bi-directional.png)
- protocol buffer
  - IDL
  - serialization/deserialization
  - binary support
  - .proto(proto3)
    ![protocol buffer](../images/protocol_buffer.png)
  - benifits
    - uses less cpu resources (mobile)
    - faster (because of binary data - travel faster on network layer)

# Rest vs gRpc

![Rest vs gRpc 1](../images/rest-vs-grpc-1.png)
![Rest vs gRpc 2](../images/rest-vs-grpc-2.png)
![Rest vs gRpc 3](../images/rest-vs-grpc-3.png)

# Advantage vs disadvantage

![gRPC Advantage vs disadvantage](../images/grpc-advantage-vs-disadvantage.png)
