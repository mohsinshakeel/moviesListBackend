import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignUpDto, SignUpResponseDto } from './dto/signup.dto';
import { LoginDto, LoginResponseDto } from './dto/login.dto';
import { UsersService } from './users.service';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';

@Controller('users')
@ApiTags('Users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post('register')
    @HttpCode(200)
    @ApiOperation({ summary: 'Get Your self register' })
    @ApiOkResponse({ type: SignUpResponseDto })
    register(@Body() createUserDto: SignUpDto): Promise<SignUpResponseDto> {
        return this.userService.create(createUserDto);
    }

    @Post('login')
    @HttpCode(200)
    @ApiOperation({ summary: 'Get Your self login here' })
    @ApiOkResponse({ type: LoginResponseDto })
    login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
        return this.userService.login(loginDto);
    }
}
