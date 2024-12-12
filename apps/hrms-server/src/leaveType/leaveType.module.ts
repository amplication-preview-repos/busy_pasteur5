import { Module } from "@nestjs/common";
import { LeaveTypeModuleBase } from "./base/leaveType.module.base";
import { LeaveTypeService } from "./leaveType.service";
import { LeaveTypeController } from "./leaveType.controller";
import { LeaveTypeResolver } from "./leaveType.resolver";

@Module({
  imports: [LeaveTypeModuleBase],
  controllers: [LeaveTypeController],
  providers: [LeaveTypeService, LeaveTypeResolver],
  exports: [LeaveTypeService],
})
export class LeaveTypeModule {}
