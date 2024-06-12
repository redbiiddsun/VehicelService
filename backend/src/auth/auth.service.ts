import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.userService.findWithEmail(loginAuthDto.email);
    if (!user) throw new UnauthorizedException('Invalid email or password');

    const isPasswordMatch = await bcrypt.compare(
      loginAuthDto.password,
      user.password,
    );
    if (!isPasswordMatch)
      throw new UnauthorizedException('Invalid email or password');

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
