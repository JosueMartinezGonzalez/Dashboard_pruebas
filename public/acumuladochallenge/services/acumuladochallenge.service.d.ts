import { Model } from 'mongoose';
import { Acumuladochallenge } from '../entities/acumuladochallenge.entity';
import { CreateAcumuladochallengeDto, UpdateAcumuladochallengeDto } from '../dtos/acumuladochallenge.dto';
export declare class AcumuladochallengeService {
    private AcumuladochallengeModel;
    constructor(AcumuladochallengeModel: Model<Acumuladochallenge>);
    findAll(): Promise<Acumuladochallenge[]>;
    findOne(id: string): Promise<Acumuladochallenge>;
    create(data: CreateAcumuladochallengeDto): Promise<Acumuladochallenge>;
    update(id: string, changes: UpdateAcumuladochallengeDto): Promise<Acumuladochallenge>;
    remove(id: string): import("mongoose").Query<Acumuladochallenge, Acumuladochallenge, {}>;
}
