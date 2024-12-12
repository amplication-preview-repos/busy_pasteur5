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
import { UserLoginWhereInput } from "./UserLoginWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserLoginListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserLoginWhereInput,
  })
  @ValidateNested()
  @Type(() => UserLoginWhereInput)
  @IsOptional()
  @Field(() => UserLoginWhereInput, {
    nullable: true,
  })
  every?: UserLoginWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserLoginWhereInput,
  })
  @ValidateNested()
  @Type(() => UserLoginWhereInput)
  @IsOptional()
  @Field(() => UserLoginWhereInput, {
    nullable: true,
  })
  some?: UserLoginWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserLoginWhereInput,
  })
  @ValidateNested()
  @Type(() => UserLoginWhereInput)
  @IsOptional()
  @Field(() => UserLoginWhereInput, {
    nullable: true,
  })
  none?: UserLoginWhereInput;
}
export { UserLoginListRelationFilter as UserLoginListRelationFilter };
