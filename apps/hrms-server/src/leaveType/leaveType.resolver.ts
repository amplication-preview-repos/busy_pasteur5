import * as graphql from "@nestjs/graphql";
import { LeaveTypeResolverBase } from "./base/leaveType.resolver.base";
import { LeaveType } from "./base/LeaveType";
import { LeaveTypeService } from "./leaveType.service";

@graphql.Resolver(() => LeaveType)
export class LeaveTypeResolver extends LeaveTypeResolverBase {
  constructor(protected readonly service: LeaveTypeService) {
    super(service);
  }
}
