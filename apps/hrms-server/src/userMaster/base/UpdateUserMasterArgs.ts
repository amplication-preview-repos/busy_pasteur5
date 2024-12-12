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
import { UserMasterWhereUniqueInput } from "./UserMasterWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserMasterUpdateInput } from "./UserMasterUpdateInput";

@ArgsType()
class UpdateUserMasterArgs {
  @ApiProperty({
    required: true,
    type: () => UserMasterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserMasterWhereUniqueInput)
  @Field(() => UserMasterWhereUniqueInput, { nullable: false })
  where!: UserMasterWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserMasterUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserMasterUpdateInput)
  @Field(() => UserMasterUpdateInput, { nullable: false })
  data!: UserMasterUpdateInput;
}

export { UpdateUserMasterArgs as UpdateUserMasterArgs };
