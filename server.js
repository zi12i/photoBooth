const http = require("http");
var fs = require("fs");
var base64 = require("base64-to-image");
var sockets = [];

var server = http.createServer(function (client) {
  console.log("Client connection: ");
  console.log("local = %s:%s", client.localAddress, client.localPort);
  console.log("remote = %s:%s", client.remoteAddress, client.remotePort);
  client.setTimeout(500);
  client.setEncoding("utf8");
  sockets.push(client);
  var imageData;

  client.on("data", function (data) {
    imageData += data;
  });

  client.on("end", function () {
    console.log("end!");
    var decoded = Buffer.from(imageData, "base64");
    //         //var decode = base64ToImage(imageData,'/home/centos/oheng/ohengServer',{'fileNam
    // e':'test.jpg', 'type':'jpg'})
    fs.writeFile("test.jpg", imageData, function (err) {
      if (err) throw err;
      else console.log("Saved!");
    });
  });

  client.on("error", function (err) {
    console.log("Socket Error: ", JSON.stringify(err));
  });

  client.on("timeout", function () {
    console.log("Socket Timed out");
  });
});

server.listen(3008, function () {
  console.log("Server listening: " + JSON.stringify(server.address()));

  server.on("close", function () {
    console.log("Server Terminated");
  });

  server.on("error", function (err) {
    console.log("Server Error: ", JSON.stringify(err));
  });
});

function writeData(socket, data) {
  var success = socket.write(data);
  if (!success) {
    console.log("Client Send Fail");
  }
}
