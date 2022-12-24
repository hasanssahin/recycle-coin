const PROTO_PATH = "../user.proto";

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const userProto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();
server.addService(userProto.UserService.service, {
  generatingUsername: (call, callback) => {
    const donusecekEmail = call.request.email.split("@");
    const userName = donusecekEmail[0];
    callback(null, { userName });
  },
});

server.bindAsync(
  "127.0.0.1:5000",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    server.start();
    /*     console.log("Server started on 127.0.0.1:5000");
     */
  }
);
