import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({ example: 'John' })
  name: string;

  @IsString()
  @ApiProperty({
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis turpis non vehicula commodo. Maecenas gravida massa in efficitur ornare. Etiam viverra gravida magna id mattis. Fusce urna ipsum, fermentum nec consequat at, tristique ut massa',
  })
  description: string;
}
