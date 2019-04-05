const fs = require("fs");

export class RoutesService {

    getResponse(): Object {
        return fs.readFileSync("./resources/demo/response.json", "utf8");
    }

    getRoute(): string {
        const service = JSON.parse(fs.readFileSync("./resources/demo/service.json", "utf8"));
        return service.url;
    }

}
