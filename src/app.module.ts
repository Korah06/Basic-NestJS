import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
