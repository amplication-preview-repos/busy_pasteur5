import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserLoginService } from "./userLogin.service";
import { UserLoginControllerBase } from "./base/userLogin.controller.base";

@swagger.ApiTags("userLogins")
@common.Controller("userLogins")
export class UserLoginController extends UserLoginControllerBase {
  constructor(protected readonly service: UserLoginService) {
    super(service);
  }
}
