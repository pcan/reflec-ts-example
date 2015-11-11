
declare namespace reflect {

    /**
    * Basic shape for a type.
    */
    interface Type {
        /**
          * Describes the specific shape of the type.
          * @remarks
          * One of:
          *     "any"           -> IntrinsicType
          *     "number"        -> IntrinsicType
          *     "boolean"       -> IntrinsicType
          *     "string"        -> IntrinsicType
          *     "symbol"        -> IntrinsicType
          *     "void"          -> IntrinsicType
          *     "parameter"     -> TypeParameter
          *     "reference"     -> TypeReference
          *     "predicate"     -> TypePredicate
          *     "array"         -> ArrayType
          *     "interface"     -> InterfaceType
          *     "alias"         -> TypeAlias
          *     "class"         -> ClassType
          *     "tuple"         -> TupleType
          *     "union"         -> UnionType
          *     "intersection"  -> IntersectionType
          *     "function"      -> FunctionType
          *     "typeof"        -> ExpressionType
          */
        kind: string;
    }

    /**
      * An intrinsic type.
      */
    interface IntrinsicType extends Type {
        kind: string; // "any", "number", "boolean", "string", "symbol", or "void"
    }

    /**
      * A generic type parameter.
      */
    interface TypeParameter extends Type {
        kind: string; // "parameter"

        /**
          * The name of the type parameter. Optional, may be undefined.
          */
        name?: string;

        /**
          * An optional constraint for the type parameter.
          */
        constraint?: Type;
    }

    /**
      * A reference to a generic type.
      */
    interface TypeReference extends Type {
        kind: string; // "reference"

        /**
          * The referenced generic type
          */
        type: Type;

        /**
          * The generic type arguments, in order.
          */
        typeArguments?: Type[];
    }

    interface TypePredicate extends Type {
        kind: string; // "predicate"

        /**
          * The ordinal offset of the parameter in the parameter list
          */
        parameterIndex: number;

        /**
          * The type for the type predicate.
          */
        type: Type;
    }

    interface ArrayType extends Type {
        kind: string; // "array"

        /**
          * The element type for the array.
          */
        elementType: Type;
    }

    /**
      * Describes an interface.
      */
    interface TypeAlias extends Type {
        kind: string; // "alias"

        /**
          * The name of the interface. Optional, may be undefined.
          */
        name?: string;

        /**
          * Members for the type. May be undefined.
          * @remarks Contains property, accessor, and method declarations.
          */
        members?: {
            [key: string]: Type;
            [key: number]: Type;
        };

        /**
          * Construct signatures for the type. May be undefined.
          */
        construct?: Signature[];

        /**
          * Call signatures for the type. May be undefined.
          */
        call?: Signature[];

        /**
      * Index signatures for the type. May be undefined.
      */
        index?: Signature[];
    }

    /**
      * Describes an interface.
      */
    interface InterfaceType extends Type {
        kind: string; // "interface"

        /**
          * The name of the interface. Optional, may be undefined.
          */
        name?: string;

        /**
          * Generic type parameters for the type. May be undefined.
          */
        typeParameters?: TypeParameter[];

        /**
          * Implemented interfaces.
          */
        implements?: InterfaceType[];

        /**
          * Members for the type. May be undefined.
          * @remarks Contains property, accessor, and method declarations.
          */
        members?: {
            [key: string]: Type;
            [key: number]: Type;
        };

        /**
          * Call signatures for the type. May be undefined.
          */
        call?: Signature[];

        /**
          * Construct signatures for the type. May be undefined.
          */
        construct?: Signature[];

        /**
          * Index signatures for the type. May be undefined.
          */
        index?: Signature[];
    }

    /**
      * Describes a class.
      */
    interface ClassType extends Type {
        kind: string; // "class"

        /**
          * The name of the class. Optional, may be undefined.
          */
        name?: string;

        /**
          * Generic type parameters for the type. May be undefined.
          */
        typeParameters?: TypeParameter[];

        /**
          * The superclass for the type.
          */
        extends?: ClassType;

        /**
          * Implemented interfaces.
          */
        implements?: InterfaceType[];

        /**
          * Members for the type. May be undefined.
          * @remarks Contains property, accessor, and method declarations.
          */
        members?: {
            [key: string]: Type;
            [key: number]: Type;
            // [key: symbol]: Type;
        };

        /**
          * Static members for the type. May be undefined.
          * @remarks Contains property, accessor, and method declarations.
          */
        statics?: {
            [key: string]: Type;
            [key: number]: Type;
            // [key: symbol]: Type;
        };

        /**
          * Call signatures for the type. May be undefined.
          */
        call?: Signature[];

        /**
          * Construct signatures for the type. May be undefined.
          */
        construct?: Signature[];

        /**
          * Index signatures for the type. May be undefined.
          */
        index?: Signature[];

        /**
          * The constructor function for the class.
          */
        getConstructor?(): Function;
    }

    /**
      * Describes a tuple type.
      */
    interface TupleType extends Type {
        kind: string; // "tuple"

        /**
          * Types of each element in the tuple.
          */
        elements: Type[];
    }

    /**
      * Describes a union type.
      */
    interface UnionType extends Type {
        kind: string; // "union"

        /**
          * The constituent types of the union.
          */
        types: Type[];
    }

    /**
      * Describes an intersection type.
      */
    interface IntersectionType extends Type {
        kind: string; // "intersection"

        /**
          * The constituent types of the intersection.
          */
        types: Type[];
    }

    /**
      * Describes a function type.
      */
    interface FunctionType extends Type {
        kind: string; // "function"

        /**
          * The name of the function. Optional, may be undefined.
          */
        name?: string;

        /**
          * The signatures for the function type
          */
        signatures: Signature[];
    }

    /**
      * Describes a class expression Type
      */
    interface ExpressionType extends Type {
        kind: string; // "typeof"

        /**
          * The target class type referenced by this expression.
          */
        type: ClassType;
    }

    /**
      * Describes a parameter.
      */
    interface ParameterInfo {
        /**
          * The name for the parameter. May be undefined.
          */
        name?: string;

        /**
          * The type of the parameter.
          */
        type: Type;
    }

    /**
      * Describes a signature.
      */
    interface Signature {
        /**
          * A value indicating whether this is a constructor signature.
          */
        construct?: boolean;

        /**
          * Generic type parameters for the function type. May be undefined.
          */
        typeParameters?: TypeParameter[];

        /**
          * Parameters for the function type.
          */
        parameters: ParameterInfo[];

        /**
          * The number of required parameters of the function type.
          */
        length: number;

        /**
          * A value indicating whether the final argument is a rest
          * argument. May be undefined.
          */
        rest?: boolean;

        /**
          * The return type of the function type. May be undefined.
          */
        returns?: Type;
    }

}
