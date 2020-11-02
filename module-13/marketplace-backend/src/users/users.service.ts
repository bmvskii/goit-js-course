import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import JwtTokens from './jwt-tokens-set';
import { uuid } from 'uuid';

@Injectable()
export class UsersService {
  users = [];
  tokens = JwtTokens;

  constructor() {
    const admin = {
      fullname: 'Admin User',
      email: 'admin@gmail.com',
      password: 'adminadmin',
      token: JwtTokens[0],
      role: 'admin',
    };

    this.users.push(admin);
  }

  register(payload) {
    if (!payload.fullname || !payload.email || !payload.password) {
      throw new HttpException('Empty fields', HttpStatus.BAD_REQUEST);
    }

    const { fullname, email } = payload;

    let hasUser =
      this.users.find(
        user => user.fullname === fullname && user.email === email,
      ) !== undefined;

    if (hasUser) {
      throw new HttpException(
        'User is already existed',
        HttpStatus.BAD_REQUEST,
      );
    }

    let newUser = { ...payload, role: 'user' };
    this.users.push(newUser);

    return {
      statusCode: HttpStatus.OK,
      message: `User: ${newUser.fullname} successfully registered in system`,
    };
  }

  signIn(payload) {
    if (!payload.email || !payload.password) {
      throw new HttpException('Empty fields', HttpStatus.BAD_REQUEST);
    }

    if (this.tokens.length === 0) {
      throw new HttpException(
        'Cannot sign in to the system',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const { password, email } = payload;
    const user = this.users.find(
      user => user.email === email && user.password === password,
    );

    if (!user) {
      throw new HttpException("User doesn't exist", HttpStatus.NOT_FOUND);
    }

    let token = null;

    const rightEdge = this.tokens.length - 1;
    const randomTokenId = Math.round(Math.random() * rightEdge);

    token = this.tokens[randomTokenId];
    this.tokens = this.tokens.filter(_token => _token === token);

    user.token = token;
    // user.id = uuid();

    return {
      data: user,
      statusCode: HttpStatus.OK,
      message: `User: ${user.id} successfully signed in`,
    };
  }

  isAuthorized(token) {
    const isAuthenticated = this.users.find(user => user.token === token);
    return isAuthenticated !== undefined;
  }

  signOut(payload) {
    const { id } = payload;
    const user = this.users.find(user => user.id === id);
    if (user && user.token) {
        this.tokens.push(user.token);
        this.users = this.users.filter(user => user.id === id);
        return {
            statusCode: ""
        }
    }
  }
}
