import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Module({})
export class CategoriesModule {
    providers: [UsersService]
}
