/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  LeaveType as PrismaLeaveType,
  LeaveApplication as PrismaLeaveApplication,
} from "@prisma/client";

export class LeaveTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LeaveTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.leaveType.count(args);
  }

  async leaveTypes(
    args: Prisma.LeaveTypeFindManyArgs
  ): Promise<PrismaLeaveType[]> {
    return this.prisma.leaveType.findMany(args);
  }
  async leaveType(
    args: Prisma.LeaveTypeFindUniqueArgs
  ): Promise<PrismaLeaveType | null> {
    return this.prisma.leaveType.findUnique(args);
  }
  async createLeaveType(
    args: Prisma.LeaveTypeCreateArgs
  ): Promise<PrismaLeaveType> {
    return this.prisma.leaveType.create(args);
  }
  async updateLeaveType(
    args: Prisma.LeaveTypeUpdateArgs
  ): Promise<PrismaLeaveType> {
    return this.prisma.leaveType.update(args);
  }
  async deleteLeaveType(
    args: Prisma.LeaveTypeDeleteArgs
  ): Promise<PrismaLeaveType> {
    return this.prisma.leaveType.delete(args);
  }

  async findLeaveApplications(
    parentId: string,
    args: Prisma.LeaveApplicationFindManyArgs
  ): Promise<PrismaLeaveApplication[]> {
    return this.prisma.leaveType
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .leaveApplications(args);
  }
}
