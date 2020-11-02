import { Module } from '@nestjs/common';
import { CategoriesService } from './categories/categories.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [CategoriesModule, UsersModule, ProductsModule],
  controllers: [CategoriesController, ProductsController],
  providers: [CategoriesService, UsersService, ProductsService],
})
export class AppModule {}
