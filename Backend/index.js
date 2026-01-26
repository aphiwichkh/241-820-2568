// ทำการ impport module เพื่อสร้าง server
const http = require('http');
const host = 'localhost';
const port = 8000;

// กำหนดค่าเริ่มต้นของ server เพื่อเปิดใช้งาน ที่ localhost:8000
const requireListener =function (req, res) {
    res.writeHead(200);
    res.end('My first server !');
}
// run server
const server = http.createServer(requireListener);
server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});