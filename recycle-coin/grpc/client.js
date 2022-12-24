const PROTO_PATH = "../user.proto";

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const UserService = grpc.loadPackageDefinition(packageDefinition).UserService;

const client = new UserService(
  "localhost:5000",
  grpc.credentials.createInsecure()
);

module.exports = client;
