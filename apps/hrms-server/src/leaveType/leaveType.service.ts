import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeaveTypeServiceBase } from "./base/leaveType.service.base";

@Injectable()
export class LeaveTypeService extends LeaveTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
