import * as graphql from "@nestjs/graphql";
import { UserMasterResolverBase } from "./base/userMaster.resolver.base";
import { UserMaster } from "./base/UserMaster";
import { UserMasterService } from "./userMaster.service";

@graphql.Resolver(() => UserMaster)
export class UserMasterResolver extends UserMasterResolverBase {
  constructor(protected readonly service: UserMasterService) {
    super(service);
  }
}
