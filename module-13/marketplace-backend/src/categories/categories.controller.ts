import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  HttpException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import categoriesMock from './categories-mock';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly usersService: UsersService,
    private readonly categoriesService: CategoriesService,
  ) {}

  categories = [...categoriesMock];

  checkAuthorization(req) {
    console.log("AUTH:", req.headers.authorization);
    
    if (!req.headers.authorization) {
      throw new HttpException('Not authorized', HttpStatus.BAD_REQUEST);
    }

    const token = req.headers.authorization.split(' ')[1];

    if (!this.usersService.isAuthorized(token)) {
      throw new HttpException('Not authorized', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  getAllCategories(@Req() req) {
    this.checkAuthorization(req);
    return this.categories;
  }

  @Post()
  createCategory(@Req() req, @Body() body) {
    this.checkAuthorization(req);
  }

  @Get(':id')
  getCategoryById(@Req() req, @Param('id') id) {
    this.checkAuthorization(req);

    const category = this.categories.find(category => category.id === id);
    return category ? category : HttpCode(HttpStatus.NOT_FOUND);
  }

  @Put(':id')
  updateCategoryById(@Req() req, @Param('id') id, @Body() body) {
    this.checkAuthorization(req);

    let category = this.categories.find(category => category.id === id);

    if (category) {
      category = body;
      return HttpCode(HttpStatus.OK);
    } else {
      return HttpCode(HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  removeCategoryById(@Req() req, @Param('id') id) {
    this.checkAuthorization(req);

    let category = this.categoriesService.removeCategoryById(id);
    return HttpCode(HttpStatus.OK);
    // } else {
    // return HttpCode(HttpStatus.NOT_FOUND);
    // }
  }
}
