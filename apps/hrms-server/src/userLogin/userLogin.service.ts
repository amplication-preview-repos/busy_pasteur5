import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserLoginServiceBase } from "./base/userLogin.service.base";

@Injectable()
export class UserLoginService extends UserLoginServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
