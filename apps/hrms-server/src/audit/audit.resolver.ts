import * as graphql from "@nestjs/graphql";
import { AuditResolverBase } from "./base/audit.resolver.base";
import { Audit } from "./base/Audit";
import { AuditService } from "./audit.service";

@graphql.Resolver(() => Audit)
export class AuditResolver extends AuditResolverBase {
  constructor(protected readonly service: AuditService) {
    super(service);
  }
}
