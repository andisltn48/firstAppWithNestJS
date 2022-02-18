import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileKita } from './filekita.entity';

@Injectable()
export class FilekitaService {
    constructor(
        @InjectRepository(FileKita)
        private FileKitaRepository: Repository<FileKita>
    ){ }

    async showAll(){
        return await this.FileKitaRepository.find();
    }

    async lihatDetailData(id){
        return 'ini adalah halaman detail dengan id: ' + id;
    }
}
