import {Engine, SportCarEngine, FakeCarEngineTestBench} from "./engines";
import {src} from "./generated/reflect-info";

var engine = new SportCarEngine('A0003');

var testBench = new FakeCarEngineTestBench();

var hp = testBench.getHorsepower(engine);
var maxRpm = testBench.getMaxRpm(engine);

var sportCarEngineClass = src.engines.SportCarEngine;

console.log('Class name:', sportCarEngineClass.name);

if (sportCarEngineClass.extends) {
    console.log('Super class:', sportCarEngineClass.extends.name);
}

if (sportCarEngineClass.implements) {
    for (let interf of sportCarEngineClass.implements) {
        console.log('Implemented interface:', interf.name);
    }
}
