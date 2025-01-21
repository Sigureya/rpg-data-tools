import { ParameterFactory } from "./template";
export class BranchCommandFactory extends ParameterFactory {
    createCommand(arg) {
        return {
            code: 111,
            indent: 0,
            parameters: this.array(arg),
        };
    }
}
//# sourceMappingURL=branchCommandFactory.js.map