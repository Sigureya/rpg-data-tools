import { createSample } from "./blueprint";
import { INVALID_ARRAY_LENGTH } from "./errorMessages";
export class ParameterFactory {
    constructor(_blueprint) {
        this._blueprint = _blueprint;
        this._sample = createSample(this._blueprint);
    }
    paramErrors(parameters) {
        return Object.entries(parameters).map(([key, value]) => ({
            key,
            requiredType: this._sample.object.get(key),
            type: typeof value,
            value,
        }));
    }
    validate(parameters) {
        const typeInfos = this.paramErrors(parameters);
        if (typeInfos.length !== this._sample.object.size) {
            throw new Error(INVALID_ARRAY_LENGTH, { cause: typeInfos });
        }
        if (typeInfos.some((info) => info.type !== info.requiredType)) {
            throw new Error("undefined type", { cause: typeInfos });
        }
        if (this._blueprint.validate) {
            this._blueprint.validate(parameters);
        }
    }
    validateArray(parameters) {
        if (parameters.length !== this._sample.array.size) {
            throw new Error(INVALID_ARRAY_LENGTH, { cause: parameters });
        }
        this.fromArray(parameters);
    }
    array(proto = {}) {
        const newParam = this._blueprint.construct(proto);
        this.validate(newParam);
        return this._blueprint.array(newParam);
    }
    construct(proto = {}) {
        const newParam = this._blueprint.construct(proto);
        if (newParam === proto) {
            throw new Error("return same object", { cause: proto });
        }
        this.validate(newParam);
        return newParam;
    }
    fromArray(parameters) {
        const newParam = this._blueprint.fromArray(parameters);
        return this.construct(newParam);
    }
}
//# sourceMappingURL=parameterFactory.js.map