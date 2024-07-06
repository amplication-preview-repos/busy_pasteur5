import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeaveApplicationService } from "./leaveApplication.service";
import { LeaveApplicationControllerBase } from "./base/leaveApplication.controller.base";

@swagger.ApiTags("leaveApplications")
@common.Controller("leaveApplications")
export class LeaveApplicationController extends LeaveApplicationControllerBase {
  constructor(protected readonly service: LeaveApplicationService) {
    super(service);
  }
}
