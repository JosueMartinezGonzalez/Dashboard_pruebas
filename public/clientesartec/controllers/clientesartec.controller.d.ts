/// <reference types="mongoose" />
import { ClientesartecService } from '../services/clientesartec.service';
import { CreateClientesartecDto, UpdateClientesartecDto } from '../dtos/clientesartec.dto';
export declare class ClientesartecController {
    private ClientesartecService;
    constructor(ClientesartecService: ClientesartecService);
    findAll(): Promise<import("../entities/clientesartec.entity").Clientesartec[]>;
    get(id: string): Promise<import("../entities/clientesartec.entity").Clientesartec>;
    create(payload: CreateClientesartecDto): Promise<import("../entities/clientesartec.entity").Clientesartec>;
    update(id: string, payload: UpdateClientesartecDto): Promise<import("../entities/clientesartec.entity").Clientesartec>;
    remove(id: string): import("mongoose").Query<import("../entities/clientesartec.entity").Clientesartec, import("../entities/clientesartec.entity").Clientesartec, {}>;
}
