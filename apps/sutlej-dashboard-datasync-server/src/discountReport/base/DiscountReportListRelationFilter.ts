/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiscountReportWhereInput } from "./DiscountReportWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DiscountReportListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DiscountReportWhereInput,
  })
  @ValidateNested()
  @Type(() => DiscountReportWhereInput)
  @IsOptional()
  @Field(() => DiscountReportWhereInput, {
    nullable: true,
  })
  every?: DiscountReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiscountReportWhereInput,
  })
  @ValidateNested()
  @Type(() => DiscountReportWhereInput)
  @IsOptional()
  @Field(() => DiscountReportWhereInput, {
    nullable: true,
  })
  some?: DiscountReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiscountReportWhereInput,
  })
  @ValidateNested()
  @Type(() => DiscountReportWhereInput)
  @IsOptional()
  @Field(() => DiscountReportWhereInput, {
    nullable: true,
  })
  none?: DiscountReportWhereInput;
}
export { DiscountReportListRelationFilter as DiscountReportListRelationFilter };
