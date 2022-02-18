import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileKita } from './filekita.entity';
import { FileKitaDTO } from './filekita.dto';

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

    async create(data: FileKitaDTO){
        var fileKitaNew = await this.FileKitaRepository.create(data);
        await this.FileKitaRepository.save(fileKitaNew);

        return fileKitaNew;
    }
}
