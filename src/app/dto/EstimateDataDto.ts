export class EstimateDataDto {
    public name: string;
    public estimate: number;

    constructor(name: string, estimate: number){
        this.name = name;
        this.estimate = estimate;
    };
}