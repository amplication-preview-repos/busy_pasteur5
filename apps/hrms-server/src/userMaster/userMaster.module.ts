import { Module } from "@nestjs/common";
import { UserMasterModuleBase } from "./base/userMaster.module.base";
import { UserMasterService } from "./userMaster.service";
import { UserMasterController } from "./userMaster.controller";
import { UserMasterResolver } from "./userMaster.resolver";

@Module({
  imports: [UserMasterModuleBase],
  controllers: [UserMasterController],
  providers: [UserMasterService, UserMasterResolver],
  exports: [UserMasterService],
})
export class UserMasterModule {}
