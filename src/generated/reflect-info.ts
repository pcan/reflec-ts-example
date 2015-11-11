
let _t;
function newClass() : reflect.ClassType  { return {kind:"interface"}; }
function newInterface() : reflect.InterfaceType  { return {kind:"interface"}; }
const _type_any: reflect.IntrinsicType = {kind: '_type_any'};
const _type_string: reflect.IntrinsicType = {kind: '_type_string'};
const _type_number: reflect.IntrinsicType = {kind: '_type_number'};
const _type_boolean: reflect.IntrinsicType = {kind: '_type_boolean'};
const _type_void: reflect.IntrinsicType = {kind: '_type_void'};
const _type_symbol: reflect.IntrinsicType = {kind: '_type_symbol'};
export let lib = {
	types_d : {
		reflect : {
			Type: newInterface(),
			IntrinsicType: newInterface(),
			TypeParameter: newInterface(),
			TypeReference: newInterface(),
			TypePredicate: newInterface(),
			ArrayType: newInterface(),
			TypeAlias: newInterface(),
			InterfaceType: newInterface(),
			ClassType: newInterface(),
			TupleType: newInterface(),
			UnionType: newInterface(),
			IntersectionType: newInterface(),
			FunctionType: newInterface(),
			ExpressionType: newInterface(),
			ParameterInfo: newInterface(),
			Signature: newInterface(),
		},
	},
};
export let src = {
	engines : {
		Engine: newInterface(),
		CarEngine: newClass(),
		Branded: newInterface(),
		Identified: newInterface(),
		SportCarEngine: newClass(),
		TrainEngine: newClass(),
		ExperimentalEngine: newClass(),
		EngineTestBench: newInterface(),
		FakeCarEngineTestBench: newClass(),
	},
	main : {
	},
};
let _l = [];
_l[0] = {
	kind: 'array',
	elementType: lib.types_d.reflect.Type,
};
_l[1] = {
	kind: 'array',
	elementType: lib.types_d.reflect.Signature,
};
_l[2] = {
	kind: 'array',
	elementType: lib.types_d.reflect.ParameterInfo,
};
_l[3] = {
	kind: 'parameter',
	name: 'T',
	constraint: src.engines.Engine,
};
_l[4] = {
	kind: 'parameter',
	name: 'T',
	constraint: src.engines.CarEngine,
};
_l[5] = {
	kind: 'reference',
	type: src.engines.EngineTestBench,
	typeArguments: [
		_l[4],
	],
};

_t = lib.types_d.reflect.Type;
_t.kind = 'interface';
_t.name = 'Type';
_t.members = {
	kind: _type_string,
};
_t = lib.types_d.reflect.IntrinsicType;
_t.kind = 'interface';
_t.name = 'IntrinsicType';
_t.implements = [
	lib.types_d.reflect.Type,
];
_t.members = {
	kind: _type_string,
};
_t = lib.types_d.reflect.TypeParameter;
_t.kind = 'interface';
_t.name = 'TypeParameter';
_t.implements = [
	lib.types_d.reflect.Type,
];
_t.members = {
	kind: _type_string,
};
_t = lib.types_d.reflect.TypeReference;
_t.kind = 'interface';
_t.name = 'TypeReference';
_t.implements = [
	lib.types_d.reflect.Type,
];
_t.members = {
	kind: _type_string,
	type: lib.types_d.reflect.Type,
};
_t = lib.types_d.reflect.TypePredicate;
_t.kind = 'interface';
_t.name = 'TypePredicate';
_t.implements = [
	lib.types_d.reflect.Type,
];
_t.members = {
	kind: _type_string,
	parameterIndex: _type_number,
	type: lib.types_d.reflect.Type,
};
_t = lib.types_d.reflect.ArrayType;
_t.kind = 'interface';
_t.name = 'ArrayType';
_t.implements = [
	lib.types_d.reflect.Type,
];
_t.members = {
	kind: _type_string,
	elementType: lib.types_d.reflect.Type,
};
_t = lib.types_d.reflect.TypeAlias;
_t.kind = 'interface';
_t.name = 'TypeAlias';
_t.implements = [
	lib.types_d.reflect.Type,
];
_t.members = {
	kind: _type_string,
};
_t = lib.types_d.reflect.InterfaceType;
_t.kind = 'interface';
_t.name = 'InterfaceType';
_t.implements = [
	lib.types_d.reflect.Type,
];
_t.members = {
	kind: _type_string,
};
_t = lib.types_d.reflect.ClassType;
_t.kind = 'interface';
_t.name = 'ClassType';
_t.implements = [
	lib.types_d.reflect.Type,
];
_t.members = {
	kind: _type_string,
};
_t = lib.types_d.reflect.TupleType;
_t.kind = 'interface';
_t.name = 'TupleType';
_t.implements = [
	lib.types_d.reflect.Type,
];
_t.members = {
	kind: _type_string,
	elements: _l[0],
};
_t = lib.types_d.reflect.UnionType;
_t.kind = 'interface';
_t.name = 'UnionType';
_t.implements = [
	lib.types_d.reflect.Type,
];
_t.members = {
	kind: _type_string,
	types: _l[0],
};
_t = lib.types_d.reflect.IntersectionType;
_t.kind = 'interface';
_t.name = 'IntersectionType';
_t.implements = [
	lib.types_d.reflect.Type,
];
_t.members = {
	kind: _type_string,
	types: _l[0],
};
_t = lib.types_d.reflect.FunctionType;
_t.kind = 'interface';
_t.name = 'FunctionType';
_t.implements = [
	lib.types_d.reflect.Type,
];
_t.members = {
	kind: _type_string,
	signatures: _l[1],
};
_t = lib.types_d.reflect.ExpressionType;
_t.kind = 'interface';
_t.name = 'ExpressionType';
_t.implements = [
	lib.types_d.reflect.Type,
];
_t.members = {
	kind: _type_string,
	type: lib.types_d.reflect.ClassType,
};
_t = lib.types_d.reflect.ParameterInfo;
_t.kind = 'interface';
_t.name = 'ParameterInfo';
_t.members = {
	type: lib.types_d.reflect.Type,
};
_t = lib.types_d.reflect.Signature;
_t.kind = 'interface';
_t.name = 'Signature';
_t.members = {
	parameters: _l[2],
	length: _type_number,
};
_t = src.engines.Engine;
_t.kind = 'interface';
_t.name = 'Engine';
_t.members = {
	start: {
		kind: 'function',
		name: 'start',
		signatures: [
			{
				length: 0,
				parameters: [
				],
				returns: _type_any,
			},
		],
	},
	stop: {
		kind: 'function',
		name: 'stop',
		signatures: [
			{
				length: 0,
				parameters: [
				],
				returns: _type_any,
			},
		],
	},
};
_t = src.engines.CarEngine;
_t.kind = 'class';
_t.name = 'CarEngine';
_t.implements = [
	src.engines.Engine,
];
_t.members = {
	start: {
		kind: 'function',
		name: 'start',
		signatures: [
			{
				length: 0,
				parameters: [
				],
				returns: _type_void,
			},
		],
	},
	stop: {
		kind: 'function',
		name: 'stop',
		signatures: [
			{
				length: 0,
				parameters: [
				],
				returns: _type_void,
			},
		],
	},
};
_t = src.engines.Branded;
_t.kind = 'interface';
_t.name = 'Branded';
_t.members = {
	brand: _type_string,
};
_t = src.engines.Identified;
_t.kind = 'interface';
_t.name = 'Identified';
_t.members = {
	uniqueId: _type_string,
};
_t = src.engines.SportCarEngine;
_t.kind = 'class';
_t.name = 'SportCarEngine';
_t.implements = [
	src.engines.Branded,
	src.engines.Identified,
];
_t.construct = [
	{
		length: 1,
		parameters: [
			{
				name: 'uniqueId',
				type: _type_string,
			},
		],
		returns: src.engines.SportCarEngine,
	},
];
_t.members = {
	brand: _type_string,
	uniqueId: _type_string,
	activateTurbo: {
		kind: 'function',
		name: 'activateTurbo',
		signatures: [
			{
				length: 0,
				parameters: [
				],
				returns: _type_void,
			},
		],
	},
};
_t.extends = src.engines.CarEngine;
_t = src.engines.TrainEngine;
_t.kind = 'class';
_t.name = 'TrainEngine';
_t.implements = [
	src.engines.Engine,
];
_t.members = {
	start: {
		kind: 'function',
		name: 'start',
		signatures: [
			{
				length: 0,
				parameters: [
				],
				returns: _type_void,
			},
		],
	},
	stop: {
		kind: 'function',
		name: 'stop',
		signatures: [
			{
				length: 0,
				parameters: [
				],
				returns: _type_void,
			},
		],
	},
};
_t = src.engines.ExperimentalEngine;
_t.kind = 'class';
_t.name = 'ExperimentalEngine';
_t.implements = [
	src.engines.Engine,
];
_t.members = {
	start: {
		kind: 'function',
		name: 'start',
		signatures: [
			{
				length: 0,
				parameters: [
				],
				returns: _type_void,
			},
		],
	},
	stop: {
		kind: 'function',
		name: 'stop',
		signatures: [
			{
				length: 0,
				parameters: [
				],
				returns: _type_void,
			},
		],
	},
};
_t = src.engines.EngineTestBench;
_t.kind = 'interface';
_t.name = 'EngineTestBench';
_t.typeParameters = [
	_l[3],
];
_t.members = {
	getHorsepower: {
		kind: 'function',
		name: 'getHorsepower',
		signatures: [
			{
				length: 1,
				parameters: [
					{
						name: 'engine',
						type: _l[3],
					},
				],
				returns: _type_number,
			},
		],
	},
	getMaxRpm: {
		kind: 'function',
		name: 'getMaxRpm',
		signatures: [
			{
				length: 1,
				parameters: [
					{
						name: 'engine',
						type: _l[3],
					},
				],
				returns: _type_number,
			},
		],
	},
};
_t = src.engines.FakeCarEngineTestBench;
_t.kind = 'class';
_t.name = 'FakeCarEngineTestBench';
_t.typeParameters = [
	_l[4],
];
_t.members = {
	getHorsepower: {
		kind: 'function',
		name: 'getHorsepower',
		signatures: [
			{
				length: 1,
				parameters: [
					{
						name: 'engine',
						type: _l[4],
					},
				],
				returns: _type_number,
			},
		],
	},
	getMaxRpm: {
		kind: 'function',
		name: 'getMaxRpm',
		signatures: [
			{
				length: 1,
				parameters: [
					{
						name: 'engine',
						type: _l[4],
					},
				],
				returns: _type_number,
			},
		],
	},
};
_t.extends = _l[5];
