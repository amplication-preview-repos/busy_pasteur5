import { Module } from "@nestjs/common";
import { UserLoginModuleBase } from "./base/userLogin.module.base";
import { UserLoginService } from "./userLogin.service";
import { UserLoginController } from "./userLogin.controller";
import { UserLoginResolver } from "./userLogin.resolver";

@Module({
  imports: [UserLoginModuleBase],
  controllers: [UserLoginController],
  providers: [UserLoginService, UserLoginResolver],
  exports: [UserLoginService],
})
export class UserLoginModule {}
