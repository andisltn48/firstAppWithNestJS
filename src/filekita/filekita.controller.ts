import { Controller, Get, Param } from '@nestjs/common';
import { FilekitaService } from './filekita.service';

@Controller('filekita')
export class FilekitaController {
    constructor(private FileKitaService:FilekitaService){

    }

    @Get()
    lihatOutput(){
        return this.FileKitaService.showAll();
    }

    @Get(':id')
    lihatDetailOutput(@Param('id') id:number){
        return this.FileKitaService.lihatDetailData(id) ;
    }
}
