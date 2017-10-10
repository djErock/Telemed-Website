

module.exports = class HttpFunctions {
    constructor() {
    }
    static sendResponse(resp, code, title, pack) {
        if (code === 500) {
            resp.writeHead(code, title, { "Content-Type": "application/json" });
            resp.write(JSON.stringify(pack));
        } else if (code === 200) {
            resp.writeHead(200, { "Content-Type": "application/json" });
            resp.write(JSON.stringify(pack));
        }
        resp.end();
    }
}