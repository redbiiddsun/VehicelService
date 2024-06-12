import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Public } from './guards/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Public()
  @Post('login')
  async login(
    @Body() createAuthDto: LoginAuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const COOKIE_AGE: number = 3 * 60 * 60 * 1000; // 3 hrs
    const { access_token } = await this.authService.login(createAuthDto);

    // const user = await this.userService.findWithEmailExclude(
    //   createAuthDto.email,
    // );

    res.cookie('access_token', access_token, {
      httpOnly: true,
      secure: true,
      maxAge: COOKIE_AGE,
    });

    return {
      statusCode: HttpStatus.OK,
      message: 'Login Success',
      token: {
        access_token,
        httpOnly: true,
        secure: true,
        maxAge: COOKIE_AGE,
      },
    };
  }
}
