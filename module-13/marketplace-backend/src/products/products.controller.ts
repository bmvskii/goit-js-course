import {
  Controller,
  Get,
  Delete,
  HttpStatus,
  Param,
  Put,
  Post,
  Body,
  Req,
  HttpException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productService: ProductsService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  getAllProducts(@Req() req) {
    const token = null;

    console.log(req.headers.authorization);

    if (!this.usersService.isAuthorized(token)) {
      throw new HttpException('Not authorized', HttpStatus.BAD_REQUEST);
    }

    return {
      data: this.productService.getAllProducts(),
      status: HttpStatus.OK,
    };
  }

  @Post()
  createProduct(@Body() body) {
    return;
  }

  @Get(':id')
  getProductById(@Param() id) {
    return {
      data: this.productService.getProductById(id),
      status: HttpStatus.OK,
    };
  }

  @Delete(':id')
  removeProductById(@Param() id) {
    return {
      data: this.productService.getProductById(id),
      status: HttpStatus.OK,
    };
  }

  @Put(':id')
  updateProductById(@Param() id, @Body() newProductInfo) {
    return {
      data: this.productService.updateProductById(id, newProductInfo),
      status: HttpStatus.OK,
    };
  }
}
