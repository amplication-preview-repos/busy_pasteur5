import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuditService } from "./audit.service";
import { AuditControllerBase } from "./base/audit.controller.base";

@swagger.ApiTags("audits")
@common.Controller("audits")
export class AuditController extends AuditControllerBase {
  constructor(protected readonly service: AuditService) {
    super(service);
  }
}
