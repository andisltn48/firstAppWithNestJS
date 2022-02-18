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
        return await this.FileKitaRepository.find({where:{id}});
    }

    async create(data: FileKitaDTO){
        var fileKitaNew = await this.FileKitaRepository.create(data);
        await this.FileKitaRepository.save(fileKitaNew);

        return fileKitaNew;
    }

    async editData(id, data: Partial<FileKitaDTO>){
        await this.FileKitaRepository.update({id}, data);
        return await this.FileKitaRepository.find({where:{id}});
    }

    async deleteData(id){
        var hapus = await this.FileKitaRepository.delete({id});
        if (hapus['affected'] != 0) {
            var data = {
                'status' : 200,
                'data' : 'Data berhasil di hapus'
            }
        } else {
            var data = {
                'status' : 404,
                'data' : 'Data tidak ditemukan'
            }
        }
        return (data);
    }
}
