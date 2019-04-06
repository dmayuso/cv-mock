import {IService} from "../interfaces/IService";
import {IControllerInfo} from "../interfaces/IControllerInfo";

const fs = require("fs");

export class RoutesService {

    getResponse(folder: string): Object {
        return fs.readFileSync(`./resources/${folder}/response.json`, "utf8");
    }

    getService(folder: string): IService {
        return JSON.parse(fs.readFileSync(`./resources/${folder}/service.json`, "utf8"));
    }

    getControllersInfo(): Array<IControllerInfo> {
        const resourceFolder = fs.readdirSync('./resources/');
        return resourceFolder.map((folder: any) => {
            return {
                service: this.getService(folder),
                response: this.getResponse(folder)
            }

        });
    }

}
