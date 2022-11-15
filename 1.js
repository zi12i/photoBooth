const fs = require("fs").promises;
// const { streamToBuffer } = require("@jorgeferrero/stream-to-buffer");

//
let buff = fs.readFileSync("image73.jpg");

let base64data = buff.toString("base64");
// const buffer = await streamToBuffer(base64data);
// console.log(base64data);
//
const buffer = Buffer.from(base64data, "base64");
// console.log("buffer : ", buffer);

fs.writeFileSync("new-path.jpg", buffer);

// console.log("camera/image : 완료");
