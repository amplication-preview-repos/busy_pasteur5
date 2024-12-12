import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserMasterServiceBase } from "./base/userMaster.service.base";

@Injectable()
export class UserMasterService extends UserMasterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
