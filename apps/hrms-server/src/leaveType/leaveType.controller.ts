import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeaveTypeService } from "./leaveType.service";
import { LeaveTypeControllerBase } from "./base/leaveType.controller.base";

@swagger.ApiTags("leaveTypes")
@common.Controller("leaveTypes")
export class LeaveTypeController extends LeaveTypeControllerBase {
  constructor(protected readonly service: LeaveTypeService) {
    super(service);
  }
}
