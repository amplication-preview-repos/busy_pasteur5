import { Module } from "@nestjs/common";
import { AuditModuleBase } from "./base/audit.module.base";
import { AuditService } from "./audit.service";
import { AuditController } from "./audit.controller";
import { AuditResolver } from "./audit.resolver";

@Module({
  imports: [AuditModuleBase],
  controllers: [AuditController],
  providers: [AuditService, AuditResolver],
  exports: [AuditService],
})
export class AuditModule {}
