import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';

@Module({
  imports: [StudentModule, MongooseModule.forRoot( 'mongodb+srv://Sonobe-br:SoNoB3@78@cluster0.fzobt.mongodb.net/WebMobile?retryWrites=true&w=majority' )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
