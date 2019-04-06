import {IService} from "../interfaces/IService";
import {IControllerInfo} from "../interfaces/IControllerInfo";

const fs = require("fs");
const RESOURCES_PATH = './resources/';
const RESPONSE_FILE = 'response.json';
const SERVICE_FILE = 'service.json';
const ENCODE = 'utf8';


export class RoutesService {

    getResponse(folder: string): Object {
        return fs.readFileSync(`${RESOURCES_PATH}${folder}/${RESPONSE_FILE}`, ENCODE);
    }

    getService(folder: string): IService {
        return JSON.parse(fs.readFileSync(`${RESOURCES_PATH}${folder}/${SERVICE_FILE}`, ENCODE));
    }

    getControllersInfo(): Array<IControllerInfo> {
        const resourceFolder = fs.readdirSync(RESOURCES_PATH);
        return resourceFolder.map((folder: any) => {
            return {
                service: this.getService(folder),
                response: this.getResponse(folder)
            }

        });
    }

}
