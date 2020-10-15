import { v4 } from 'uuid';

export class Incident {
    public readonly id: string;

    public title: string;
    public description: string;
    public reward: string;
    public latitude: string;
    public longitude: string;
    public user_id: string;

    constructor(props: Omit<Incident, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = v4();
        };
    };
};