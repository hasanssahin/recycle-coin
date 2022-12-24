const soap = require("soap");
const express = require("express");
const fs = require("fs");
const { Transaction } = require("./src/blockchain");

function sha256_atama_function(args) {
  const gelenEmail = args.donusecekEmail;
  const converter = new Transaction(gelenEmail);
  const gelenSHA = converter.calculateUserEmailHash();
  return {
    result: gelenSHA,
  };
}

const serviceObject = {
  SHA256olusturmaService: {
    SHA256olusturmaServiceSoapPort: {
      SHA256olusturma: sha256_atama_function,
    },
    SHA256olusturmaServiceSoap12Port: {
      SHA256olusturma: sha256_atama_function,
    },
  },
};

const xml = fs.readFileSync("service.wsdl", "utf8");
const app = express();

app.listen(8000, function () {
  console.log("Listening on port " + 8000);
  const wsdl_path = "/wsdl";
  soap.listen(app, wsdl_path, serviceObject, xml);
  /*     console.log("Check http://localhost:8000" + wsdl_path + "?wsdl to see if the service is working");
   */
});
