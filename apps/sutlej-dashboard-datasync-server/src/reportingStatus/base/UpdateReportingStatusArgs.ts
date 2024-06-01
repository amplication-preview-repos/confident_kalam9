/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReportingStatusWhereUniqueInput } from "./ReportingStatusWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ReportingStatusUpdateInput } from "./ReportingStatusUpdateInput";

@ArgsType()
class UpdateReportingStatusArgs {
  @ApiProperty({
    required: true,
    type: () => ReportingStatusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReportingStatusWhereUniqueInput)
  @Field(() => ReportingStatusWhereUniqueInput, { nullable: false })
  where!: ReportingStatusWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ReportingStatusUpdateInput,
  })
  @ValidateNested()
  @Type(() => ReportingStatusUpdateInput)
  @Field(() => ReportingStatusUpdateInput, { nullable: false })
  data!: ReportingStatusUpdateInput;
}

export { UpdateReportingStatusArgs as UpdateReportingStatusArgs };
