import * as graphql from "@nestjs/graphql";
import { LeaveApplicationResolverBase } from "./base/leaveApplication.resolver.base";
import { LeaveApplication } from "./base/LeaveApplication";
import { LeaveApplicationService } from "./leaveApplication.service";

@graphql.Resolver(() => LeaveApplication)
export class LeaveApplicationResolver extends LeaveApplicationResolverBase {
  constructor(protected readonly service: LeaveApplicationService) {
    super(service);
  }
}
