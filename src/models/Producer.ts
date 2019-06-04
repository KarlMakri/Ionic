export class Producer {
    name: string;
    logo: string;
    private description: string;


    constructor(name: string, logo: string) {
        this.name = name;
        this.logo = logo;
    }

    setDescription(description) {
        this.description = description
    }

    getDescription(): string {
        return this.description;
    }
}