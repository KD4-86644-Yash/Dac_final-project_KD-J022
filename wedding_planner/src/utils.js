import { config } from "./Servcies/config";

export function createUrl(path) {
    return `${config.serverURL}/${path}`
}