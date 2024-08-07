import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, ValidateIf } from 'class-validator';
import { Users } from '../entities/users.entity';
import { Roles } from 'src/shared/enum';

export class LoginDto {
    @ApiProperty({ description: 'Email or phone number' })
    @IsString()
    @ValidateIf(o => o.emailOrName.includes('@'))
    @IsEmail({}, { message: 'Invalid email format' })
    readonly emailOrName: string;

    @ApiProperty()
    @IsString()
    @MinLength(5)
    readonly password: string;
}

export class LoginResponseDto {
    @ApiProperty()
    token: string;

    @ApiProperty()
    user: Partial<Users>;

    constructor(user: Partial<Users & { role: Roles }>, token?: string) {
        const outputObj = {
            id: user.id,
            name: user.name,
            email: user.email,
        };
        this.token = token;
        this.user = outputObj;
    }
}


export class GoogleDto{
    @ApiProperty()
    token:string;
}

export class GetMeResponseDto {
    @ApiProperty()
    user: Partial<Users>;

    constructor(user: Partial<Users & { role: Roles }>, token?: string) {
        const outputObj = {
            id: user.id,
            name: user.name,
            email: user.email,
        };
        this.user = outputObj;
    }
}

export class LinkedinDto{
    @ApiProperty()
    token:string;
}