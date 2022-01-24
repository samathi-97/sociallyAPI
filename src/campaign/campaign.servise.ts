import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './campaign.entity';
import { campaignDTO } from './campaignDTO';


@Injectable()
export class campaignService {

    constructor(
        @InjectRepository(Campaign)
        private campaignRepository: Repository<Campaign>,
    ) { }

    async  findAll(): Promise<Campaign[]> {
        return await this.campaignRepository.find();
    }

    async  create(contact: Campaign): Promise<Campaign> {
        return await this.campaignRepository.save(contact);
    }

    }