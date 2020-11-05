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

  checkAuthorization(req) {
    console.log(req.headers);

    if (!req.headers.authorization) {
      throw new HttpException('Not authorized', HttpStatus.BAD_REQUEST);
    }

    const token = req.headers.authorization.split(' ')[1];

    console.log("TOKEN:", token);

    if (!this.usersService.isAuthorized(token)) {
      throw new HttpException('Not authorized', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  getAllProducts(@Req() req) {
    this.checkAuthorization(req);
    return {
      data: this.productService.getAllProducts(),
      status: HttpStatus.OK,
    };
  }

  @Post()
  createProduct(@Req() req, @Body() body) {
    this.checkAuthorization(req);
    const product = this.productService.createProduct(body);

    return {
      data: product,
      status: HttpStatus.OK,
    };
  }

  @Get(':id')
  getProductById(@Req() req, @Param() id) {
    this.checkAuthorization(req);

    return {
      data: this.productService.getProductById(id),
      status: HttpStatus.OK,
    };
  }

  @Delete(':id')
  removeProductById(@Req() req, @Param() id) {
    this.checkAuthorization(req);

    return {
      data: this.productService.removeProductById(id),
      status: HttpStatus.OK,
    };
  }

  @Put(':id')
  updateProductById(@Req() req, @Param() id, @Body() newProductInfo) {
    this.checkAuthorization(req);
    this.productService.updateProductById(id, newProductInfo);

    return {
      data: this.productService.getAllProducts(),
      status: HttpStatus.OK,
    };
  }
}
