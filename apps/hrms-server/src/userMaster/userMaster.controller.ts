import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserMasterService } from "./userMaster.service";
import { UserMasterControllerBase } from "./base/userMaster.controller.base";

@swagger.ApiTags("userMasters")
@common.Controller("userMasters")
export class UserMasterController extends UserMasterControllerBase {
  constructor(protected readonly service: UserMasterService) {
    super(service);
  }
}
