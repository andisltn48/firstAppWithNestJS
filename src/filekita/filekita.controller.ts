import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FilekitaService } from './filekita.service';
import { FileKitaDTO } from './filekita.dto';

@Controller('filekita')
export class FilekitaController {
    constructor(private FileKitaService:FilekitaService){

    }

    @Get()
    lihatOutput(){
        return this.FileKitaService.showAll();
    }

    @Post()
    inputData(@Body() data: FileKitaDTO){
        return this.FileKitaService.create(data);
    }

    @Get(':id')
    lihatDetailOutput(@Param('id') id:number){
        return this.FileKitaService.lihatDetailData(id) ;
    }

    @Put(':id')
    editData(@Param('id') id:number, @Body() data: FileKitaDTO){
        return this.FileKitaService.editData(id,data) ;
    }

    @Delete(':id')
    hapusData(@Param('id') id:number){
        return this.FileKitaService.deleteData(id) ;
    }
}
