
export interface Engine {
    start();
    stop();
}

export class CarEngine implements Engine {
    start() {
        //do something
    }
    stop() {
        //do something
    }
}

interface Branded { //this is 'private' to this module
    brand:string;
}

interface Identified { //this is 'private' to this module
    uniqueId:string;
}

export class SportCarEngine extends CarEngine implements Branded, Identified {
    brand = 'Lamborghini';
    uniqueId:string;
    constructor(uniqueId: string) {
        super();
        this.uniqueId = uniqueId;
    }

    activateTurbo() {
        //wroom!
    }
}

export class TrainEngine implements Engine {
    start() {
        //do something
    }
    stop() {
        //do something
    }
}

class ExperimentalEngine implements Engine { //this is 'private' to this module
    start() {
    }
    stop() {
    }
}

export interface EngineTestBench<T extends Engine> {
    getHorsepower(engine: T): number;
    getMaxRpm(engine: T): number;
}

export class FakeCarEngineTestBench<T extends CarEngine> implements EngineTestBench<T> {
    getHorsepower(engine: T): number {
        return 100;
    }
    getMaxRpm(engine: T): number {
        return 4000;
    }
}
