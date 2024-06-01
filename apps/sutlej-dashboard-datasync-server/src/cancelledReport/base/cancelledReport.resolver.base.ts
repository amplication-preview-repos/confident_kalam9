/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CancelledReport } from "./CancelledReport";
import { CancelledReportCountArgs } from "./CancelledReportCountArgs";
import { CancelledReportFindManyArgs } from "./CancelledReportFindManyArgs";
import { CancelledReportFindUniqueArgs } from "./CancelledReportFindUniqueArgs";
import { CreateCancelledReportArgs } from "./CreateCancelledReportArgs";
import { UpdateCancelledReportArgs } from "./UpdateCancelledReportArgs";
import { DeleteCancelledReportArgs } from "./DeleteCancelledReportArgs";
import { CancelledReportService } from "../cancelledReport.service";
@graphql.Resolver(() => CancelledReport)
export class CancelledReportResolverBase {
  constructor(protected readonly service: CancelledReportService) {}

  async _cancelledReportsMeta(
    @graphql.Args() args: CancelledReportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CancelledReport])
  async cancelledReports(
    @graphql.Args() args: CancelledReportFindManyArgs
  ): Promise<CancelledReport[]> {
    return this.service.cancelledReports(args);
  }

  @graphql.Query(() => CancelledReport, { nullable: true })
  async cancelledReport(
    @graphql.Args() args: CancelledReportFindUniqueArgs
  ): Promise<CancelledReport | null> {
    const result = await this.service.cancelledReport(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CancelledReport)
  async createCancelledReport(
    @graphql.Args() args: CreateCancelledReportArgs
  ): Promise<CancelledReport> {
    return await this.service.createCancelledReport({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CancelledReport)
  async updateCancelledReport(
    @graphql.Args() args: UpdateCancelledReportArgs
  ): Promise<CancelledReport | null> {
    try {
      return await this.service.updateCancelledReport({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CancelledReport)
  async deleteCancelledReport(
    @graphql.Args() args: DeleteCancelledReportArgs
  ): Promise<CancelledReport | null> {
    try {
      return await this.service.deleteCancelledReport(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
