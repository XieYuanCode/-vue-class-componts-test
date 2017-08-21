var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Prop, Inject } from 'vue-property-decorator';
import BasicPage from '../core/basic-page';
import HelloDataModel from './Hello.vue.dm';
let Hello = class Hello extends BasicPage {
    constructor() {
        super();
        this.localDate = null;
        this.localText = null;
        this.localArray = [{
                name: '',
                isSelected: false,
                isActive: false
            }];
        this.users = [];
        this.dm = new HelloDataModel();
    }
    get formattedDate() {
        return this.localDate && this.localDate.toLocaleTimeString();
    }
    get formattedText() {
        return `the formatted local text is: ${this.localText}`;
    }
    created() {
        super.created();
        console.log('on created in hello: ', this);
    }
    mounted() {
        return __awaiter(this, void 0, void 0, function* () {
            this.users = yield this.userService.getUsersAsync();
        });
    }
    submit() {
        this.dm.UserName = new Date().toString();
        this.dm.AccountNumber = '6226 0123 4567 9999';
        this.dm.Amount = 500000;
        this.dm.Address = 'test address';
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], Hello.prototype, "title", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], Hello.prototype, "msg", void 0);
__decorate([
    Inject(),
    __metadata("design:type", Object)
], Hello.prototype, "userService", void 0);
Hello = __decorate([
    Component({ name: 'hello' }),
    __metadata("design:paramtypes", [])
], Hello);
export default Hello;
//# sourceMappingURL=Hello.vue.js.map