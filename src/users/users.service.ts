import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDTO } from './users.dto';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private UsersRepository: Repository<Users>
    ){}

    async getAllUser(){
        return await this.UsersRepository.find();
    }

    async getUserById(id){
        return await this.UsersRepository.findOne({where: {id}});
    }

    async getUserByEmail(email){
        return await this.UsersRepository.findOne({where: {email}});
    }

    async postNewUser(data: UsersDTO){
        var save = await this.UsersRepository.create(data);
        await this.UsersRepository.save(save);
    }
}
