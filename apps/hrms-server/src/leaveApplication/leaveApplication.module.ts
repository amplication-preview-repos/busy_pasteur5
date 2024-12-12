import { Module } from "@nestjs/common";
import { LeaveApplicationModuleBase } from "./base/leaveApplication.module.base";
import { LeaveApplicationService } from "./leaveApplication.service";
import { LeaveApplicationController } from "./leaveApplication.controller";
import { LeaveApplicationResolver } from "./leaveApplication.resolver";

@Module({
  imports: [LeaveApplicationModuleBase],
  controllers: [LeaveApplicationController],
  providers: [LeaveApplicationService, LeaveApplicationResolver],
  exports: [LeaveApplicationService],
})
export class LeaveApplicationModule {}
