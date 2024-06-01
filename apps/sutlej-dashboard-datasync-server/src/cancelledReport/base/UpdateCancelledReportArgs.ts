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
import { CancelledReportWhereUniqueInput } from "./CancelledReportWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CancelledReportUpdateInput } from "./CancelledReportUpdateInput";

@ArgsType()
class UpdateCancelledReportArgs {
  @ApiProperty({
    required: true,
    type: () => CancelledReportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CancelledReportWhereUniqueInput)
  @Field(() => CancelledReportWhereUniqueInput, { nullable: false })
  where!: CancelledReportWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CancelledReportUpdateInput,
  })
  @ValidateNested()
  @Type(() => CancelledReportUpdateInput)
  @Field(() => CancelledReportUpdateInput, { nullable: false })
  data!: CancelledReportUpdateInput;
}

export { UpdateCancelledReportArgs as UpdateCancelledReportArgs };
