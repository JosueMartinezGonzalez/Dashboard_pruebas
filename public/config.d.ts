declare const _default: (() => {
    database: {
        name: string;
        port: string;
    };
    mongo: {
        dbName: string;
        port: number;
        host: string;
        connection: string;
    };
    apiKey: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost;
export default _default;
