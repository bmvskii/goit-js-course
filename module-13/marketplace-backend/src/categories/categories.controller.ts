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
} from '@nestjs/common';
import uuid from 'uuid';

@Controller('categories')
export class CategoriesController {
  categories = [];

  @Get()
  getAllCategories() {
    return this.categories;
  }

  @Post()
  createCategory(@Body() body) {
    console.log(body);
  }

  @Get(':id')
  getCategoryById(@Param('id') id) {
    const category = this.categories.find(category => category.id === id);
    return category ? category : HttpCode(HttpStatus.NOT_FOUND);
  }

  @Put(':id')
  updateCategoryById(@Param('id') id, @Body() body) {
    let category = this.categories.find(category => category.id === id);

    if (category) {
      category = body;
      return HttpCode(HttpStatus.OK);
    } else {
      return HttpCode(HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  removeCategoryById(@Param('id') id) {
    let category = this.categories.find(category => category.id === id);

    if (category) {
      this.categories = this.categories.filter(category => category.id === id);
      return HttpCode(HttpStatus.OK);
    } else {
      return HttpCode(HttpStatus.NOT_FOUND);
    }
  }
}
