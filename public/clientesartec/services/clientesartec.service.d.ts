import { Model } from 'mongoose';
import { Clientesartec } from '../entities/clientesartec.entity';
import { CreateClientesartecDto, UpdateClientesartecDto } from '../dtos/clientesartec.dto';
export declare class ClientesartecService {
    private ClientesartecModel;
    constructor(ClientesartecModel: Model<Clientesartec>);
    findAll(): Promise<Clientesartec[]>;
    findOne(id: string): Promise<Clientesartec>;
    create(data: CreateClientesartecDto): Promise<Clientesartec>;
    update(id: string, changes: UpdateClientesartecDto): Promise<Clientesartec>;
    remove(id: string): import("mongoose").Query<Clientesartec, Clientesartec, {}>;
}
