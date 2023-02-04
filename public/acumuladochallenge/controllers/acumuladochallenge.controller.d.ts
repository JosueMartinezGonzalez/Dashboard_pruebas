/// <reference types="mongoose" />
import { AcumuladochallengeService } from '../services/acumuladochallenge.service';
import { CreateAcumuladochallengeDto, UpdateAcumuladochallengeDto } from '../dtos/acumuladochallenge.dto';
export declare class AcumuladochallengeController {
    private AcumuladochallengeService;
    constructor(AcumuladochallengeService: AcumuladochallengeService);
    findAll(): Promise<import("../entities/acumuladochallenge.entity").Acumuladochallenge[]>;
    get(id: string): Promise<import("../entities/acumuladochallenge.entity").Acumuladochallenge>;
    create(payload: CreateAcumuladochallengeDto): Promise<import("../entities/acumuladochallenge.entity").Acumuladochallenge>;
    update(id: string, payload: UpdateAcumuladochallengeDto): Promise<import("../entities/acumuladochallenge.entity").Acumuladochallenge>;
    remove(id: string): import("mongoose").Query<import("../entities/acumuladochallenge.entity").Acumuladochallenge, import("../entities/acumuladochallenge.entity").Acumuladochallenge, {}>;
}
