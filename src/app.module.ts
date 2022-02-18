import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileKitaModule } from './filekita/filekita.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjsdb',
      synchronize: true,
      dropSchema: false,
      logging: true,
      entities: ['src/**/*.entity.ts','dist/**/*.entity.js'],
    }),
    FileKitaModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    }
  ],
})
export class AppModule {}
