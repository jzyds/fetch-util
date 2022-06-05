"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.put = exports.post = exports.get = exports.http = exports.FetchError = void 0;
class FetchError extends Error {
    constructor(code, message) {
        super(`${code}: ${message}`);
        this.name = "FetchError";
        this.status = code;
    }
}
exports.FetchError = FetchError;
function http(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(request);
        if (response.ok && response.status === 200) {
            return yield response.json();
        }
        else {
            throw new FetchError(response.status, response.statusText);
        }
    });
}
exports.http = http;
function get(path, requestInit = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        requestInit.method = "get";
        return yield http(new Request(path, requestInit));
    });
}
exports.get = get;
function post(path, body, requestInit = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        requestInit.method = "post";
        if (!requestInit.body && body) {
            requestInit.body = JSON.stringify(body);
        }
        return yield http(new Request(path, requestInit));
    });
}
exports.post = post;
function put(path, body, requestInit = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        requestInit.method = "put";
        if (!requestInit.body && body) {
            requestInit.body = JSON.stringify(body);
        }
        return yield http(new Request(path, requestInit));
    });
}
exports.put = put;
