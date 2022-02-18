import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieKitaModule } from './filekita/filekita.module';

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
    FieKitaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
