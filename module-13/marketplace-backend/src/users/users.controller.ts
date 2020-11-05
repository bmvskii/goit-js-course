import { Body, Controller, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  register(@Body() payload) {
    return this.usersService.register(payload);
  }

  @Post('signin')
  signIn(@Body() payload) {
    return this.usersService.signIn(payload);
  }

  @Post('signout')
  signOut(@Req() req) {
    console.log(req);
    const token = req.headers.authorization.split(" ")[1];
    this.usersService.signOut(token);

    // return this.usersService.signOut(req);
  }
}
