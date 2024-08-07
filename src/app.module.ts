import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Users } from './user/entities/users.entity';
import { getDatabaseConfig } from 'db/dataSource';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './user/auth/jwt-strategy';
import { UsersService } from './user/users.service';
import { UsersController } from './user/users.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            useFactory: getDatabaseConfig,
        }),
        JwtModule.register({
            secret: process.env.JWT_PRIVATE_KEY,
            signOptions: { expiresIn: '60m' },
        }),

        TypeOrmModule.forFeature([Users]),

    ],
    controllers: [
        AppController,
        UsersController,

    ],
    providers: [
        AppService,
        JwtStrategy,
        UsersService,


    ],
})
export class AppModule { }
