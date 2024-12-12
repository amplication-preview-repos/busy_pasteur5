import * as graphql from "@nestjs/graphql";
import { UserLoginResolverBase } from "./base/userLogin.resolver.base";
import { UserLogin } from "./base/UserLogin";
import { UserLoginService } from "./userLogin.service";

@graphql.Resolver(() => UserLogin)
export class UserLoginResolver extends UserLoginResolverBase {
  constructor(protected readonly service: UserLoginService) {
    super(service);
  }
}
