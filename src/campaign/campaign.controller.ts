import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Campaign } from './campaign.entity';
import { campaignService } from './campaign.servise';
import { campaignCreationDTO } from './campaignCreation.dto';


@Controller('campaign')
export class campaignController {
    constructor(private readonly campaignService : campaignService){}

    @Post('create')
    async create(@Body() campaignData: Campaign): Promise<any> {
      return this.campaignService.create(campaignData);
    }  
    
    }
