import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private UserService: UsersService
    ){}

    @Get()
    getUser(){
        return this.UserService.getAllUser();
    }

    @Get()
    getOneUser(@Param('id') id:number){
        return this.UserService.getUserById(id);
    }

    @Post()
    inputData(@Body() data: UsersDTO){
        return this.UserService.postNewUser(data);
    }
}
