import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './cars/entities/car.entity';

@Module({
  imports: [
    CarsModule,
    TypeOrmModule.forRoot({ //can be made to a separate module (AwsModule)
      type: 'mysql',
      host: 'mobii-test.c8wqmzhx1vgf.ap-southeast-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'password',
      database: 'test',
      entities: [Car],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
