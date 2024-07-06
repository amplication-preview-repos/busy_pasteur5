import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeaveApplicationServiceBase } from "./base/leaveApplication.service.base";

@Injectable()
export class LeaveApplicationService extends LeaveApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
