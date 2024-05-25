/*
 * File: users.service.ts
 * Project: VehicleService
 * Module: users
 * File Created: Tuesday, 26th May 2024 00:20:00 am
 * Author: Phanasorn Srisayam (
 */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import * as bcrypt from 'bcrypt';

import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const SALT_ROUNDS: number = this.configService.get('SALT_ROUNDS');

    const user = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });
    if (user)
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);

    const hashedPassword: string = await bcrypt.hash(
      createUserDto.password,
      Number(SALT_ROUNDS),
    );

    createUserDto.password = hashedPassword;

    return this.prisma.user.create({
      data: createUserDto,
      select: this.prisma.prismaExclude('User', ['password']),
    });
  }

  async findAll(): Promise<Omit<User, 'password'>[]> {
    return this.prisma.user.findMany({
      select: this.prisma.prismaExclude('User', ['password']),
    });
  }

  async findWithEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findOne(id: string): Promise<Omit<User, 'password'>> {
    return this.prisma.user.findFirst({
      where: { id },
      select: this.prisma.prismaExclude('User', ['password']),
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string): Promise<Omit<User, 'password'>> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user)
      throw new HttpException('User doesn not exists', HttpStatus.BAD_REQUEST);

    return this.prisma.user.delete({
      where: { id },
      select: this.prisma.prismaExclude('User', ['password']),
    });
  }
}
