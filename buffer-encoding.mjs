const buffer = new Buffer("Muhammad Rafie Chautie", "utf8")

console.info(buffer)
console.info(buffer.toString())
console.info(buffer.toString("hex"))
console.info(buffer.toString("base64"))

const bufferBase64 = Buffer.from("TXVoYW1tYWQgUmFmaWUgQ2hhdXRpZQ==", "base64")
console.info(bufferBase64.toString("utf8"))