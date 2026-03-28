
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model ExamQuestion
 * 
 */
export type ExamQuestion = $Result.DefaultSelection<Prisma.$ExamQuestionPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Result
 * 
 */
export type Result = $Result.DefaultSelection<Prisma.$ResultPayload>
/**
 * Model Response
 * 
 */
export type Response = $Result.DefaultSelection<Prisma.$ResponsePayload>
/**
 * Model ExamResponse
 * 
 */
export type ExamResponse = $Result.DefaultSelection<Prisma.$ExamResponsePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs>;

  /**
   * `prisma.examQuestion`: Exposes CRUD operations for the **ExamQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamQuestions
    * const examQuestions = await prisma.examQuestion.findMany()
    * ```
    */
  get examQuestion(): Prisma.ExamQuestionDelegate<ExtArgs>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs>;

  /**
   * `prisma.result`: Exposes CRUD operations for the **Result** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.result.findMany()
    * ```
    */
  get result(): Prisma.ResultDelegate<ExtArgs>;

  /**
   * `prisma.response`: Exposes CRUD operations for the **Response** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Responses
    * const responses = await prisma.response.findMany()
    * ```
    */
  get response(): Prisma.ResponseDelegate<ExtArgs>;

  /**
   * `prisma.examResponse`: Exposes CRUD operations for the **ExamResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamResponses
    * const examResponses = await prisma.examResponse.findMany()
    * ```
    */
  get examResponse(): Prisma.ExamResponseDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Student: 'Student',
    Exam: 'Exam',
    ExamQuestion: 'ExamQuestion',
    Question: 'Question',
    Result: 'Result',
    Response: 'Response',
    ExamResponse: 'ExamResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admin" | "student" | "exam" | "examQuestion" | "question" | "result" | "response" | "examResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      ExamQuestion: {
        payload: Prisma.$ExamQuestionPayload<ExtArgs>
        fields: Prisma.ExamQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          findFirst: {
            args: Prisma.ExamQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          findMany: {
            args: Prisma.ExamQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>[]
          }
          create: {
            args: Prisma.ExamQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          createMany: {
            args: Prisma.ExamQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>[]
          }
          delete: {
            args: Prisma.ExamQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          update: {
            args: Prisma.ExamQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          deleteMany: {
            args: Prisma.ExamQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          aggregate: {
            args: Prisma.ExamQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamQuestion>
          }
          groupBy: {
            args: Prisma.ExamQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<ExamQuestionCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Result: {
        payload: Prisma.$ResultPayload<ExtArgs>
        fields: Prisma.ResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findFirst: {
            args: Prisma.ResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findMany: {
            args: Prisma.ResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          create: {
            args: Prisma.ResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          createMany: {
            args: Prisma.ResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          delete: {
            args: Prisma.ResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          update: {
            args: Prisma.ResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          deleteMany: {
            args: Prisma.ResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          aggregate: {
            args: Prisma.ResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResult>
          }
          groupBy: {
            args: Prisma.ResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultCountArgs<ExtArgs>
            result: $Utils.Optional<ResultCountAggregateOutputType> | number
          }
        }
      }
      Response: {
        payload: Prisma.$ResponsePayload<ExtArgs>
        fields: Prisma.ResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          findFirst: {
            args: Prisma.ResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          findMany: {
            args: Prisma.ResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          create: {
            args: Prisma.ResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          createMany: {
            args: Prisma.ResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          delete: {
            args: Prisma.ResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          update: {
            args: Prisma.ResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          deleteMany: {
            args: Prisma.ResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          aggregate: {
            args: Prisma.ResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResponse>
          }
          groupBy: {
            args: Prisma.ResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResponseCountArgs<ExtArgs>
            result: $Utils.Optional<ResponseCountAggregateOutputType> | number
          }
        }
      }
      ExamResponse: {
        payload: Prisma.$ExamResponsePayload<ExtArgs>
        fields: Prisma.ExamResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResponsePayload>
          }
          findFirst: {
            args: Prisma.ExamResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResponsePayload>
          }
          findMany: {
            args: Prisma.ExamResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResponsePayload>[]
          }
          create: {
            args: Prisma.ExamResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResponsePayload>
          }
          createMany: {
            args: Prisma.ExamResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResponsePayload>[]
          }
          delete: {
            args: Prisma.ExamResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResponsePayload>
          }
          update: {
            args: Prisma.ExamResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResponsePayload>
          }
          deleteMany: {
            args: Prisma.ExamResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResponsePayload>
          }
          aggregate: {
            args: Prisma.ExamResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamResponse>
          }
          groupBy: {
            args: Prisma.ExamResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamResponseCountArgs<ExtArgs>
            result: $Utils.Optional<ExamResponseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    results: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | StudentCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }


  /**
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    questions: number
    results: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | ExamCountOutputTypeCountQuestionsArgs
    results?: boolean | ExamCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamQuestionWhereInput
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }


  /**
   * Count Type ExamQuestionCountOutputType
   */

  export type ExamQuestionCountOutputType = {
    responses: number
  }

  export type ExamQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | ExamQuestionCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * ExamQuestionCountOutputType without action
   */
  export type ExamQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestionCountOutputType
     */
    select?: ExamQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamQuestionCountOutputType without action
   */
  export type ExamQuestionCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamResponseWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    responses: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | QuestionCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
  }


  /**
   * Count Type ResultCountOutputType
   */

  export type ResultCountOutputType = {
    responses: number
    examResponses: number
  }

  export type ResultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | ResultCountOutputTypeCountResponsesArgs
    examResponses?: boolean | ResultCountOutputTypeCountExamResponsesArgs
  }

  // Custom InputTypes
  /**
   * ResultCountOutputType without action
   */
  export type ResultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultCountOutputType
     */
    select?: ResultCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResultCountOutputType without action
   */
  export type ResultCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
  }

  /**
   * ResultCountOutputType without action
   */
  export type ResultCountOutputTypeCountExamResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    parentMobile: string | null
    collegeName: string | null
    pucRollNumber: string | null
    createdAt: Date | null
    lastLoginAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    parentMobile: string | null
    collegeName: string | null
    pucRollNumber: string | null
    createdAt: Date | null
    lastLoginAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    parentMobile: number
    collegeName: number
    pucRollNumber: number
    createdAt: number
    lastLoginAt: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    parentMobile?: true
    collegeName?: true
    pucRollNumber?: true
    createdAt?: true
    lastLoginAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    parentMobile?: true
    collegeName?: true
    pucRollNumber?: true
    createdAt?: true
    lastLoginAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    parentMobile?: true
    collegeName?: true
    pucRollNumber?: true
    createdAt?: true
    lastLoginAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    parentMobile: string
    collegeName: string
    pucRollNumber: string
    createdAt: Date
    lastLoginAt: Date | null
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentMobile?: boolean
    collegeName?: boolean
    pucRollNumber?: boolean
    createdAt?: boolean
    lastLoginAt?: boolean
    results?: boolean | Student$resultsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentMobile?: boolean
    collegeName?: boolean
    pucRollNumber?: boolean
    createdAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    parentMobile?: boolean
    collegeName?: boolean
    pucRollNumber?: boolean
    createdAt?: boolean
    lastLoginAt?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | Student$resultsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      results: Prisma.$ResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      parentMobile: string
      collegeName: string
      pucRollNumber: string
      createdAt: Date
      lastLoginAt: Date | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    results<T extends Student$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Student$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly parentMobile: FieldRef<"Student", 'String'>
    readonly collegeName: FieldRef<"Student", 'String'>
    readonly pucRollNumber: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly lastLoginAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }

  /**
   * Student.results
   */
  export type Student$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    marksPerQuestion: number | null
    negativeMarking: number | null
    durationMinutes: number | null
  }

  export type ExamSumAggregateOutputType = {
    marksPerQuestion: number | null
    negativeMarking: number | null
    durationMinutes: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    title: string | null
    subject: string | null
    topic: string | null
    examType: string | null
    difficulty: string | null
    marksPerQuestion: number | null
    negativeMarking: number | null
    durationMinutes: number | null
    isLive: boolean | null
    isDemo: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    title: string | null
    subject: string | null
    topic: string | null
    examType: string | null
    difficulty: string | null
    marksPerQuestion: number | null
    negativeMarking: number | null
    durationMinutes: number | null
    isLive: boolean | null
    isDemo: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    title: number
    subject: number
    topic: number
    examType: number
    difficulty: number
    marksPerQuestion: number
    negativeMarking: number
    durationMinutes: number
    isLive: number
    isDemo: number
    publishedAt: number
    createdAt: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    marksPerQuestion?: true
    negativeMarking?: true
    durationMinutes?: true
  }

  export type ExamSumAggregateInputType = {
    marksPerQuestion?: true
    negativeMarking?: true
    durationMinutes?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    title?: true
    subject?: true
    topic?: true
    examType?: true
    difficulty?: true
    marksPerQuestion?: true
    negativeMarking?: true
    durationMinutes?: true
    isLive?: true
    isDemo?: true
    publishedAt?: true
    createdAt?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    title?: true
    subject?: true
    topic?: true
    examType?: true
    difficulty?: true
    marksPerQuestion?: true
    negativeMarking?: true
    durationMinutes?: true
    isLive?: true
    isDemo?: true
    publishedAt?: true
    createdAt?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    title?: true
    subject?: true
    topic?: true
    examType?: true
    difficulty?: true
    marksPerQuestion?: true
    negativeMarking?: true
    durationMinutes?: true
    isLive?: true
    isDemo?: true
    publishedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    title: string
    subject: string
    topic: string | null
    examType: string
    difficulty: string
    marksPerQuestion: number
    negativeMarking: number
    durationMinutes: number
    isLive: boolean
    isDemo: boolean
    publishedAt: Date | null
    createdAt: Date
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subject?: boolean
    topic?: boolean
    examType?: boolean
    difficulty?: boolean
    marksPerQuestion?: boolean
    negativeMarking?: boolean
    durationMinutes?: boolean
    isLive?: boolean
    isDemo?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    results?: boolean | Exam$resultsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subject?: boolean
    topic?: boolean
    examType?: boolean
    difficulty?: boolean
    marksPerQuestion?: boolean
    negativeMarking?: boolean
    durationMinutes?: boolean
    isLive?: boolean
    isDemo?: boolean
    publishedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    title?: boolean
    subject?: boolean
    topic?: boolean
    examType?: boolean
    difficulty?: boolean
    marksPerQuestion?: boolean
    negativeMarking?: boolean
    durationMinutes?: boolean
    isLive?: boolean
    isDemo?: boolean
    publishedAt?: boolean
    createdAt?: boolean
  }

  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    results?: boolean | Exam$resultsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      questions: Prisma.$ExamQuestionPayload<ExtArgs>[]
      results: Prisma.$ResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      subject: string
      topic: string | null
      examType: string
      difficulty: string
      marksPerQuestion: number
      negativeMarking: number
      durationMinutes: number
      isLive: boolean
      isDemo: boolean
      publishedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Exam$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findMany"> | Null>
    results<T extends Exam$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exam model
   */ 
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly title: FieldRef<"Exam", 'String'>
    readonly subject: FieldRef<"Exam", 'String'>
    readonly topic: FieldRef<"Exam", 'String'>
    readonly examType: FieldRef<"Exam", 'String'>
    readonly difficulty: FieldRef<"Exam", 'String'>
    readonly marksPerQuestion: FieldRef<"Exam", 'Float'>
    readonly negativeMarking: FieldRef<"Exam", 'Float'>
    readonly durationMinutes: FieldRef<"Exam", 'Int'>
    readonly isLive: FieldRef<"Exam", 'Boolean'>
    readonly isDemo: FieldRef<"Exam", 'Boolean'>
    readonly publishedAt: FieldRef<"Exam", 'DateTime'>
    readonly createdAt: FieldRef<"Exam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam createManyAndReturn
   */
  export type ExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
  }

  /**
   * Exam.questions
   */
  export type Exam$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    where?: ExamQuestionWhereInput
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    cursor?: ExamQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamQuestionScalarFieldEnum | ExamQuestionScalarFieldEnum[]
  }

  /**
   * Exam.results
   */
  export type Exam$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model ExamQuestion
   */

  export type AggregateExamQuestion = {
    _count: ExamQuestionCountAggregateOutputType | null
    _avg: ExamQuestionAvgAggregateOutputType | null
    _sum: ExamQuestionSumAggregateOutputType | null
    _min: ExamQuestionMinAggregateOutputType | null
    _max: ExamQuestionMaxAggregateOutputType | null
  }

  export type ExamQuestionAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type ExamQuestionSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type ExamQuestionMinAggregateOutputType = {
    id: string | null
    examId: string | null
    text: string | null
    imageUrl: string | null
    optionA: string | null
    optionB: string | null
    optionC: string | null
    optionD: string | null
    correctOption: string | null
    subject: string | null
    difficulty: string | null
    orderIndex: number | null
  }

  export type ExamQuestionMaxAggregateOutputType = {
    id: string | null
    examId: string | null
    text: string | null
    imageUrl: string | null
    optionA: string | null
    optionB: string | null
    optionC: string | null
    optionD: string | null
    correctOption: string | null
    subject: string | null
    difficulty: string | null
    orderIndex: number | null
  }

  export type ExamQuestionCountAggregateOutputType = {
    id: number
    examId: number
    text: number
    imageUrl: number
    optionA: number
    optionB: number
    optionC: number
    optionD: number
    correctOption: number
    subject: number
    difficulty: number
    orderIndex: number
    _all: number
  }


  export type ExamQuestionAvgAggregateInputType = {
    orderIndex?: true
  }

  export type ExamQuestionSumAggregateInputType = {
    orderIndex?: true
  }

  export type ExamQuestionMinAggregateInputType = {
    id?: true
    examId?: true
    text?: true
    imageUrl?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    correctOption?: true
    subject?: true
    difficulty?: true
    orderIndex?: true
  }

  export type ExamQuestionMaxAggregateInputType = {
    id?: true
    examId?: true
    text?: true
    imageUrl?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    correctOption?: true
    subject?: true
    difficulty?: true
    orderIndex?: true
  }

  export type ExamQuestionCountAggregateInputType = {
    id?: true
    examId?: true
    text?: true
    imageUrl?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    correctOption?: true
    subject?: true
    difficulty?: true
    orderIndex?: true
    _all?: true
  }

  export type ExamQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamQuestion to aggregate.
     */
    where?: ExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamQuestions to fetch.
     */
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamQuestions
    **/
    _count?: true | ExamQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamQuestionMaxAggregateInputType
  }

  export type GetExamQuestionAggregateType<T extends ExamQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateExamQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamQuestion[P]>
      : GetScalarType<T[P], AggregateExamQuestion[P]>
  }




  export type ExamQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamQuestionWhereInput
    orderBy?: ExamQuestionOrderByWithAggregationInput | ExamQuestionOrderByWithAggregationInput[]
    by: ExamQuestionScalarFieldEnum[] | ExamQuestionScalarFieldEnum
    having?: ExamQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamQuestionCountAggregateInputType | true
    _avg?: ExamQuestionAvgAggregateInputType
    _sum?: ExamQuestionSumAggregateInputType
    _min?: ExamQuestionMinAggregateInputType
    _max?: ExamQuestionMaxAggregateInputType
  }

  export type ExamQuestionGroupByOutputType = {
    id: string
    examId: string
    text: string
    imageUrl: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    difficulty: string
    orderIndex: number
    _count: ExamQuestionCountAggregateOutputType | null
    _avg: ExamQuestionAvgAggregateOutputType | null
    _sum: ExamQuestionSumAggregateOutputType | null
    _min: ExamQuestionMinAggregateOutputType | null
    _max: ExamQuestionMaxAggregateOutputType | null
  }

  type GetExamQuestionGroupByPayload<T extends ExamQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], ExamQuestionGroupByOutputType[P]>
        }
      >
    >


  export type ExamQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    text?: boolean
    imageUrl?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    correctOption?: boolean
    subject?: boolean
    difficulty?: boolean
    orderIndex?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    responses?: boolean | ExamQuestion$responsesArgs<ExtArgs>
    _count?: boolean | ExamQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examQuestion"]>

  export type ExamQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    text?: boolean
    imageUrl?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    correctOption?: boolean
    subject?: boolean
    difficulty?: boolean
    orderIndex?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examQuestion"]>

  export type ExamQuestionSelectScalar = {
    id?: boolean
    examId?: boolean
    text?: boolean
    imageUrl?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    correctOption?: boolean
    subject?: boolean
    difficulty?: boolean
    orderIndex?: boolean
  }

  export type ExamQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    responses?: boolean | ExamQuestion$responsesArgs<ExtArgs>
    _count?: boolean | ExamQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $ExamQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamQuestion"
    objects: {
      exam: Prisma.$ExamPayload<ExtArgs>
      responses: Prisma.$ExamResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examId: string
      text: string
      imageUrl: string | null
      optionA: string
      optionB: string
      optionC: string
      optionD: string
      correctOption: string
      subject: string
      difficulty: string
      orderIndex: number
    }, ExtArgs["result"]["examQuestion"]>
    composites: {}
  }

  type ExamQuestionGetPayload<S extends boolean | null | undefined | ExamQuestionDefaultArgs> = $Result.GetResult<Prisma.$ExamQuestionPayload, S>

  type ExamQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExamQuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExamQuestionCountAggregateInputType | true
    }

  export interface ExamQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamQuestion'], meta: { name: 'ExamQuestion' } }
    /**
     * Find zero or one ExamQuestion that matches the filter.
     * @param {ExamQuestionFindUniqueArgs} args - Arguments to find a ExamQuestion
     * @example
     * // Get one ExamQuestion
     * const examQuestion = await prisma.examQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamQuestionFindUniqueArgs>(args: SelectSubset<T, ExamQuestionFindUniqueArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExamQuestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExamQuestionFindUniqueOrThrowArgs} args - Arguments to find a ExamQuestion
     * @example
     * // Get one ExamQuestion
     * const examQuestion = await prisma.examQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExamQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionFindFirstArgs} args - Arguments to find a ExamQuestion
     * @example
     * // Get one ExamQuestion
     * const examQuestion = await prisma.examQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamQuestionFindFirstArgs>(args?: SelectSubset<T, ExamQuestionFindFirstArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExamQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionFindFirstOrThrowArgs} args - Arguments to find a ExamQuestion
     * @example
     * // Get one ExamQuestion
     * const examQuestion = await prisma.examQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExamQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamQuestions
     * const examQuestions = await prisma.examQuestion.findMany()
     * 
     * // Get first 10 ExamQuestions
     * const examQuestions = await prisma.examQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examQuestionWithIdOnly = await prisma.examQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamQuestionFindManyArgs>(args?: SelectSubset<T, ExamQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExamQuestion.
     * @param {ExamQuestionCreateArgs} args - Arguments to create a ExamQuestion.
     * @example
     * // Create one ExamQuestion
     * const ExamQuestion = await prisma.examQuestion.create({
     *   data: {
     *     // ... data to create a ExamQuestion
     *   }
     * })
     * 
     */
    create<T extends ExamQuestionCreateArgs>(args: SelectSubset<T, ExamQuestionCreateArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExamQuestions.
     * @param {ExamQuestionCreateManyArgs} args - Arguments to create many ExamQuestions.
     * @example
     * // Create many ExamQuestions
     * const examQuestion = await prisma.examQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamQuestionCreateManyArgs>(args?: SelectSubset<T, ExamQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamQuestions and returns the data saved in the database.
     * @param {ExamQuestionCreateManyAndReturnArgs} args - Arguments to create many ExamQuestions.
     * @example
     * // Create many ExamQuestions
     * const examQuestion = await prisma.examQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamQuestions and only return the `id`
     * const examQuestionWithIdOnly = await prisma.examQuestion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExamQuestion.
     * @param {ExamQuestionDeleteArgs} args - Arguments to delete one ExamQuestion.
     * @example
     * // Delete one ExamQuestion
     * const ExamQuestion = await prisma.examQuestion.delete({
     *   where: {
     *     // ... filter to delete one ExamQuestion
     *   }
     * })
     * 
     */
    delete<T extends ExamQuestionDeleteArgs>(args: SelectSubset<T, ExamQuestionDeleteArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExamQuestion.
     * @param {ExamQuestionUpdateArgs} args - Arguments to update one ExamQuestion.
     * @example
     * // Update one ExamQuestion
     * const examQuestion = await prisma.examQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamQuestionUpdateArgs>(args: SelectSubset<T, ExamQuestionUpdateArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExamQuestions.
     * @param {ExamQuestionDeleteManyArgs} args - Arguments to filter ExamQuestions to delete.
     * @example
     * // Delete a few ExamQuestions
     * const { count } = await prisma.examQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamQuestionDeleteManyArgs>(args?: SelectSubset<T, ExamQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamQuestions
     * const examQuestion = await prisma.examQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamQuestionUpdateManyArgs>(args: SelectSubset<T, ExamQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExamQuestion.
     * @param {ExamQuestionUpsertArgs} args - Arguments to update or create a ExamQuestion.
     * @example
     * // Update or create a ExamQuestion
     * const examQuestion = await prisma.examQuestion.upsert({
     *   create: {
     *     // ... data to create a ExamQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamQuestion we want to update
     *   }
     * })
     */
    upsert<T extends ExamQuestionUpsertArgs>(args: SelectSubset<T, ExamQuestionUpsertArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExamQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionCountArgs} args - Arguments to filter ExamQuestions to count.
     * @example
     * // Count the number of ExamQuestions
     * const count = await prisma.examQuestion.count({
     *   where: {
     *     // ... the filter for the ExamQuestions we want to count
     *   }
     * })
    **/
    count<T extends ExamQuestionCountArgs>(
      args?: Subset<T, ExamQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamQuestionAggregateArgs>(args: Subset<T, ExamQuestionAggregateArgs>): Prisma.PrismaPromise<GetExamQuestionAggregateType<T>>

    /**
     * Group by ExamQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamQuestionGroupByArgs['orderBy'] }
        : { orderBy?: ExamQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamQuestion model
   */
  readonly fields: ExamQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    responses<T extends ExamQuestion$responsesArgs<ExtArgs> = {}>(args?: Subset<T, ExamQuestion$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamResponsePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExamQuestion model
   */ 
  interface ExamQuestionFieldRefs {
    readonly id: FieldRef<"ExamQuestion", 'String'>
    readonly examId: FieldRef<"ExamQuestion", 'String'>
    readonly text: FieldRef<"ExamQuestion", 'String'>
    readonly imageUrl: FieldRef<"ExamQuestion", 'String'>
    readonly optionA: FieldRef<"ExamQuestion", 'String'>
    readonly optionB: FieldRef<"ExamQuestion", 'String'>
    readonly optionC: FieldRef<"ExamQuestion", 'String'>
    readonly optionD: FieldRef<"ExamQuestion", 'String'>
    readonly correctOption: FieldRef<"ExamQuestion", 'String'>
    readonly subject: FieldRef<"ExamQuestion", 'String'>
    readonly difficulty: FieldRef<"ExamQuestion", 'String'>
    readonly orderIndex: FieldRef<"ExamQuestion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExamQuestion findUnique
   */
  export type ExamQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestion to fetch.
     */
    where: ExamQuestionWhereUniqueInput
  }

  /**
   * ExamQuestion findUniqueOrThrow
   */
  export type ExamQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestion to fetch.
     */
    where: ExamQuestionWhereUniqueInput
  }

  /**
   * ExamQuestion findFirst
   */
  export type ExamQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestion to fetch.
     */
    where?: ExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamQuestions to fetch.
     */
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamQuestions.
     */
    cursor?: ExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamQuestions.
     */
    distinct?: ExamQuestionScalarFieldEnum | ExamQuestionScalarFieldEnum[]
  }

  /**
   * ExamQuestion findFirstOrThrow
   */
  export type ExamQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestion to fetch.
     */
    where?: ExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamQuestions to fetch.
     */
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamQuestions.
     */
    cursor?: ExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamQuestions.
     */
    distinct?: ExamQuestionScalarFieldEnum | ExamQuestionScalarFieldEnum[]
  }

  /**
   * ExamQuestion findMany
   */
  export type ExamQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestions to fetch.
     */
    where?: ExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamQuestions to fetch.
     */
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamQuestions.
     */
    cursor?: ExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamQuestions.
     */
    skip?: number
    distinct?: ExamQuestionScalarFieldEnum | ExamQuestionScalarFieldEnum[]
  }

  /**
   * ExamQuestion create
   */
  export type ExamQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamQuestion.
     */
    data: XOR<ExamQuestionCreateInput, ExamQuestionUncheckedCreateInput>
  }

  /**
   * ExamQuestion createMany
   */
  export type ExamQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamQuestions.
     */
    data: ExamQuestionCreateManyInput | ExamQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamQuestion createManyAndReturn
   */
  export type ExamQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExamQuestions.
     */
    data: ExamQuestionCreateManyInput | ExamQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamQuestion update
   */
  export type ExamQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamQuestion.
     */
    data: XOR<ExamQuestionUpdateInput, ExamQuestionUncheckedUpdateInput>
    /**
     * Choose, which ExamQuestion to update.
     */
    where: ExamQuestionWhereUniqueInput
  }

  /**
   * ExamQuestion updateMany
   */
  export type ExamQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamQuestions.
     */
    data: XOR<ExamQuestionUpdateManyMutationInput, ExamQuestionUncheckedUpdateManyInput>
    /**
     * Filter which ExamQuestions to update
     */
    where?: ExamQuestionWhereInput
  }

  /**
   * ExamQuestion upsert
   */
  export type ExamQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamQuestion to update in case it exists.
     */
    where: ExamQuestionWhereUniqueInput
    /**
     * In case the ExamQuestion found by the `where` argument doesn't exist, create a new ExamQuestion with this data.
     */
    create: XOR<ExamQuestionCreateInput, ExamQuestionUncheckedCreateInput>
    /**
     * In case the ExamQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamQuestionUpdateInput, ExamQuestionUncheckedUpdateInput>
  }

  /**
   * ExamQuestion delete
   */
  export type ExamQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter which ExamQuestion to delete.
     */
    where: ExamQuestionWhereUniqueInput
  }

  /**
   * ExamQuestion deleteMany
   */
  export type ExamQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamQuestions to delete
     */
    where?: ExamQuestionWhereInput
  }

  /**
   * ExamQuestion.responses
   */
  export type ExamQuestion$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResponse
     */
    select?: ExamResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResponseInclude<ExtArgs> | null
    where?: ExamResponseWhereInput
    orderBy?: ExamResponseOrderByWithRelationInput | ExamResponseOrderByWithRelationInput[]
    cursor?: ExamResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamResponseScalarFieldEnum | ExamResponseScalarFieldEnum[]
  }

  /**
   * ExamQuestion without action
   */
  export type ExamQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    imageUrl: string | null
    optionA: string | null
    optionB: string | null
    optionC: string | null
    optionD: string | null
    correctOption: string | null
    subject: string | null
    examType: string | null
    createdAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    imageUrl: string | null
    optionA: string | null
    optionB: string | null
    optionC: string | null
    optionD: string | null
    correctOption: string | null
    subject: string | null
    examType: string | null
    createdAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    imageUrl: number
    optionA: number
    optionB: number
    optionC: number
    optionD: number
    correctOption: number
    subject: number
    examType: number
    createdAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    imageUrl?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    correctOption?: true
    subject?: true
    examType?: true
    createdAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    imageUrl?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    correctOption?: true
    subject?: true
    examType?: true
    createdAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    imageUrl?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    correctOption?: true
    subject?: true
    examType?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    text: string
    imageUrl: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    examType: string
    createdAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    imageUrl?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    correctOption?: boolean
    subject?: boolean
    examType?: boolean
    createdAt?: boolean
    responses?: boolean | Question$responsesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    imageUrl?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    correctOption?: boolean
    subject?: boolean
    examType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    imageUrl?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    correctOption?: boolean
    subject?: boolean
    examType?: boolean
    createdAt?: boolean
  }

  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | Question$responsesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      responses: Prisma.$ResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      imageUrl: string | null
      optionA: string
      optionB: string
      optionC: string
      optionD: string
      correctOption: string
      subject: string
      examType: string
      createdAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responses<T extends Question$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Question$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */ 
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly imageUrl: FieldRef<"Question", 'String'>
    readonly optionA: FieldRef<"Question", 'String'>
    readonly optionB: FieldRef<"Question", 'String'>
    readonly optionC: FieldRef<"Question", 'String'>
    readonly optionD: FieldRef<"Question", 'String'>
    readonly correctOption: FieldRef<"Question", 'String'>
    readonly subject: FieldRef<"Question", 'String'>
    readonly examType: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
  }

  /**
   * Question.responses
   */
  export type Question$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    cursor?: ResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Result
   */

  export type AggregateResult = {
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  export type ResultAvgAggregateOutputType = {
    marksMath: number | null
    marksPhy: number | null
    marksChem: number | null
    totalMarks: number | null
    rank: number | null
    tabSwitchCount: number | null
  }

  export type ResultSumAggregateOutputType = {
    marksMath: number | null
    marksPhy: number | null
    marksChem: number | null
    totalMarks: number | null
    rank: number | null
    tabSwitchCount: number | null
  }

  export type ResultMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    examId: string | null
    examType: string | null
    marksMath: number | null
    marksPhy: number | null
    marksChem: number | null
    totalMarks: number | null
    rank: number | null
    tabSwitchCount: number | null
    completedAt: Date | null
  }

  export type ResultMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    examId: string | null
    examType: string | null
    marksMath: number | null
    marksPhy: number | null
    marksChem: number | null
    totalMarks: number | null
    rank: number | null
    tabSwitchCount: number | null
    completedAt: Date | null
  }

  export type ResultCountAggregateOutputType = {
    id: number
    studentId: number
    examId: number
    examType: number
    marksMath: number
    marksPhy: number
    marksChem: number
    sectionScores: number
    totalMarks: number
    rank: number
    tabSwitchCount: number
    completedAt: number
    _all: number
  }


  export type ResultAvgAggregateInputType = {
    marksMath?: true
    marksPhy?: true
    marksChem?: true
    totalMarks?: true
    rank?: true
    tabSwitchCount?: true
  }

  export type ResultSumAggregateInputType = {
    marksMath?: true
    marksPhy?: true
    marksChem?: true
    totalMarks?: true
    rank?: true
    tabSwitchCount?: true
  }

  export type ResultMinAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    examType?: true
    marksMath?: true
    marksPhy?: true
    marksChem?: true
    totalMarks?: true
    rank?: true
    tabSwitchCount?: true
    completedAt?: true
  }

  export type ResultMaxAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    examType?: true
    marksMath?: true
    marksPhy?: true
    marksChem?: true
    totalMarks?: true
    rank?: true
    tabSwitchCount?: true
    completedAt?: true
  }

  export type ResultCountAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    examType?: true
    marksMath?: true
    marksPhy?: true
    marksChem?: true
    sectionScores?: true
    totalMarks?: true
    rank?: true
    tabSwitchCount?: true
    completedAt?: true
    _all?: true
  }

  export type ResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Result to aggregate.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Results
    **/
    _count?: true | ResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultMaxAggregateInputType
  }

  export type GetResultAggregateType<T extends ResultAggregateArgs> = {
        [P in keyof T & keyof AggregateResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResult[P]>
      : GetScalarType<T[P], AggregateResult[P]>
  }




  export type ResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithAggregationInput | ResultOrderByWithAggregationInput[]
    by: ResultScalarFieldEnum[] | ResultScalarFieldEnum
    having?: ResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultCountAggregateInputType | true
    _avg?: ResultAvgAggregateInputType
    _sum?: ResultSumAggregateInputType
    _min?: ResultMinAggregateInputType
    _max?: ResultMaxAggregateInputType
  }

  export type ResultGroupByOutputType = {
    id: string
    studentId: string
    examId: string | null
    examType: string
    marksMath: number
    marksPhy: number
    marksChem: number
    sectionScores: JsonValue | null
    totalMarks: number
    rank: number | null
    tabSwitchCount: number
    completedAt: Date
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  type GetResultGroupByPayload<T extends ResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultGroupByOutputType[P]>
            : GetScalarType<T[P], ResultGroupByOutputType[P]>
        }
      >
    >


  export type ResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    examId?: boolean
    examType?: boolean
    marksMath?: boolean
    marksPhy?: boolean
    marksChem?: boolean
    sectionScores?: boolean
    totalMarks?: boolean
    rank?: boolean
    tabSwitchCount?: boolean
    completedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | Result$examArgs<ExtArgs>
    responses?: boolean | Result$responsesArgs<ExtArgs>
    examResponses?: boolean | Result$examResponsesArgs<ExtArgs>
    _count?: boolean | ResultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    examId?: boolean
    examType?: boolean
    marksMath?: boolean
    marksPhy?: boolean
    marksChem?: boolean
    sectionScores?: boolean
    totalMarks?: boolean
    rank?: boolean
    tabSwitchCount?: boolean
    completedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | Result$examArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectScalar = {
    id?: boolean
    studentId?: boolean
    examId?: boolean
    examType?: boolean
    marksMath?: boolean
    marksPhy?: boolean
    marksChem?: boolean
    sectionScores?: boolean
    totalMarks?: boolean
    rank?: boolean
    tabSwitchCount?: boolean
    completedAt?: boolean
  }

  export type ResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | Result$examArgs<ExtArgs>
    responses?: boolean | Result$responsesArgs<ExtArgs>
    examResponses?: boolean | Result$examResponsesArgs<ExtArgs>
    _count?: boolean | ResultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | Result$examArgs<ExtArgs>
  }

  export type $ResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Result"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      exam: Prisma.$ExamPayload<ExtArgs> | null
      responses: Prisma.$ResponsePayload<ExtArgs>[]
      examResponses: Prisma.$ExamResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      examId: string | null
      examType: string
      marksMath: number
      marksPhy: number
      marksChem: number
      sectionScores: Prisma.JsonValue | null
      totalMarks: number
      rank: number | null
      tabSwitchCount: number
      completedAt: Date
    }, ExtArgs["result"]["result"]>
    composites: {}
  }

  type ResultGetPayload<S extends boolean | null | undefined | ResultDefaultArgs> = $Result.GetResult<Prisma.$ResultPayload, S>

  type ResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResultFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResultCountAggregateInputType | true
    }

  export interface ResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Result'], meta: { name: 'Result' } }
    /**
     * Find zero or one Result that matches the filter.
     * @param {ResultFindUniqueArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultFindUniqueArgs>(args: SelectSubset<T, ResultFindUniqueArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Result that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResultFindUniqueOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultFindFirstArgs>(args?: SelectSubset<T, ResultFindFirstArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Result that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.result.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.result.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultWithIdOnly = await prisma.result.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultFindManyArgs>(args?: SelectSubset<T, ResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Result.
     * @param {ResultCreateArgs} args - Arguments to create a Result.
     * @example
     * // Create one Result
     * const Result = await prisma.result.create({
     *   data: {
     *     // ... data to create a Result
     *   }
     * })
     * 
     */
    create<T extends ResultCreateArgs>(args: SelectSubset<T, ResultCreateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Results.
     * @param {ResultCreateManyArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultCreateManyArgs>(args?: SelectSubset<T, ResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Results and returns the data saved in the database.
     * @param {ResultCreateManyAndReturnArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Results and only return the `id`
     * const resultWithIdOnly = await prisma.result.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Result.
     * @param {ResultDeleteArgs} args - Arguments to delete one Result.
     * @example
     * // Delete one Result
     * const Result = await prisma.result.delete({
     *   where: {
     *     // ... filter to delete one Result
     *   }
     * })
     * 
     */
    delete<T extends ResultDeleteArgs>(args: SelectSubset<T, ResultDeleteArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Result.
     * @param {ResultUpdateArgs} args - Arguments to update one Result.
     * @example
     * // Update one Result
     * const result = await prisma.result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultUpdateArgs>(args: SelectSubset<T, ResultUpdateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Results.
     * @param {ResultDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultDeleteManyArgs>(args?: SelectSubset<T, ResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultUpdateManyArgs>(args: SelectSubset<T, ResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Result.
     * @param {ResultUpsertArgs} args - Arguments to update or create a Result.
     * @example
     * // Update or create a Result
     * const result = await prisma.result.upsert({
     *   create: {
     *     // ... data to create a Result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Result we want to update
     *   }
     * })
     */
    upsert<T extends ResultUpsertArgs>(args: SelectSubset<T, ResultUpsertArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.result.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends ResultCountArgs>(
      args?: Subset<T, ResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultAggregateArgs>(args: Subset<T, ResultAggregateArgs>): Prisma.PrismaPromise<GetResultAggregateType<T>>

    /**
     * Group by Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultGroupByArgs['orderBy'] }
        : { orderBy?: ResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Result model
   */
  readonly fields: ResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    exam<T extends Result$examArgs<ExtArgs> = {}>(args?: Subset<T, Result$examArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    responses<T extends Result$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Result$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany"> | Null>
    examResponses<T extends Result$examResponsesArgs<ExtArgs> = {}>(args?: Subset<T, Result$examResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamResponsePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Result model
   */ 
  interface ResultFieldRefs {
    readonly id: FieldRef<"Result", 'String'>
    readonly studentId: FieldRef<"Result", 'String'>
    readonly examId: FieldRef<"Result", 'String'>
    readonly examType: FieldRef<"Result", 'String'>
    readonly marksMath: FieldRef<"Result", 'Int'>
    readonly marksPhy: FieldRef<"Result", 'Int'>
    readonly marksChem: FieldRef<"Result", 'Int'>
    readonly sectionScores: FieldRef<"Result", 'Json'>
    readonly totalMarks: FieldRef<"Result", 'Int'>
    readonly rank: FieldRef<"Result", 'Int'>
    readonly tabSwitchCount: FieldRef<"Result", 'Int'>
    readonly completedAt: FieldRef<"Result", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Result findUnique
   */
  export type ResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findUniqueOrThrow
   */
  export type ResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findFirst
   */
  export type ResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findFirstOrThrow
   */
  export type ResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findMany
   */
  export type ResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result create
   */
  export type ResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to create a Result.
     */
    data: XOR<ResultCreateInput, ResultUncheckedCreateInput>
  }

  /**
   * Result createMany
   */
  export type ResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Result createManyAndReturn
   */
  export type ResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Result update
   */
  export type ResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to update a Result.
     */
    data: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
    /**
     * Choose, which Result to update.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result updateMany
   */
  export type ResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
  }

  /**
   * Result upsert
   */
  export type ResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The filter to search for the Result to update in case it exists.
     */
    where: ResultWhereUniqueInput
    /**
     * In case the Result found by the `where` argument doesn't exist, create a new Result with this data.
     */
    create: XOR<ResultCreateInput, ResultUncheckedCreateInput>
    /**
     * In case the Result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
  }

  /**
   * Result delete
   */
  export type ResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter which Result to delete.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result deleteMany
   */
  export type ResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Results to delete
     */
    where?: ResultWhereInput
  }

  /**
   * Result.exam
   */
  export type Result$examArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
  }

  /**
   * Result.responses
   */
  export type Result$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    cursor?: ResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Result.examResponses
   */
  export type Result$examResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResponse
     */
    select?: ExamResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResponseInclude<ExtArgs> | null
    where?: ExamResponseWhereInput
    orderBy?: ExamResponseOrderByWithRelationInput | ExamResponseOrderByWithRelationInput[]
    cursor?: ExamResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamResponseScalarFieldEnum | ExamResponseScalarFieldEnum[]
  }

  /**
   * Result without action
   */
  export type ResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
  }


  /**
   * Model Response
   */

  export type AggregateResponse = {
    _count: ResponseCountAggregateOutputType | null
    _min: ResponseMinAggregateOutputType | null
    _max: ResponseMaxAggregateOutputType | null
  }

  export type ResponseMinAggregateOutputType = {
    id: string | null
    resultId: string | null
    questionId: string | null
    answer: string | null
    isCorrect: boolean | null
  }

  export type ResponseMaxAggregateOutputType = {
    id: string | null
    resultId: string | null
    questionId: string | null
    answer: string | null
    isCorrect: boolean | null
  }

  export type ResponseCountAggregateOutputType = {
    id: number
    resultId: number
    questionId: number
    answer: number
    isCorrect: number
    _all: number
  }


  export type ResponseMinAggregateInputType = {
    id?: true
    resultId?: true
    questionId?: true
    answer?: true
    isCorrect?: true
  }

  export type ResponseMaxAggregateInputType = {
    id?: true
    resultId?: true
    questionId?: true
    answer?: true
    isCorrect?: true
  }

  export type ResponseCountAggregateInputType = {
    id?: true
    resultId?: true
    questionId?: true
    answer?: true
    isCorrect?: true
    _all?: true
  }

  export type ResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Response to aggregate.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Responses
    **/
    _count?: true | ResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponseMaxAggregateInputType
  }

  export type GetResponseAggregateType<T extends ResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponse[P]>
      : GetScalarType<T[P], AggregateResponse[P]>
  }




  export type ResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithAggregationInput | ResponseOrderByWithAggregationInput[]
    by: ResponseScalarFieldEnum[] | ResponseScalarFieldEnum
    having?: ResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponseCountAggregateInputType | true
    _min?: ResponseMinAggregateInputType
    _max?: ResponseMaxAggregateInputType
  }

  export type ResponseGroupByOutputType = {
    id: string
    resultId: string
    questionId: string
    answer: string | null
    isCorrect: boolean
    _count: ResponseCountAggregateOutputType | null
    _min: ResponseMinAggregateOutputType | null
    _max: ResponseMaxAggregateOutputType | null
  }

  type GetResponseGroupByPayload<T extends ResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponseGroupByOutputType[P]>
            : GetScalarType<T[P], ResponseGroupByOutputType[P]>
        }
      >
    >


  export type ResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultId?: boolean
    questionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultId?: boolean
    questionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectScalar = {
    id?: boolean
    resultId?: boolean
    questionId?: boolean
    answer?: boolean
    isCorrect?: boolean
  }

  export type ResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }
  export type ResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }

  export type $ResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Response"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      result: Prisma.$ResultPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resultId: string
      questionId: string
      answer: string | null
      isCorrect: boolean
    }, ExtArgs["result"]["response"]>
    composites: {}
  }

  type ResponseGetPayload<S extends boolean | null | undefined | ResponseDefaultArgs> = $Result.GetResult<Prisma.$ResponsePayload, S>

  type ResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResponseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResponseCountAggregateInputType | true
    }

  export interface ResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Response'], meta: { name: 'Response' } }
    /**
     * Find zero or one Response that matches the filter.
     * @param {ResponseFindUniqueArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResponseFindUniqueArgs>(args: SelectSubset<T, ResponseFindUniqueArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Response that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResponseFindUniqueOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, ResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Response that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResponseFindFirstArgs>(args?: SelectSubset<T, ResponseFindFirstArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Response that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, ResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responses
     * const responses = await prisma.response.findMany()
     * 
     * // Get first 10 Responses
     * const responses = await prisma.response.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responseWithIdOnly = await prisma.response.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResponseFindManyArgs>(args?: SelectSubset<T, ResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Response.
     * @param {ResponseCreateArgs} args - Arguments to create a Response.
     * @example
     * // Create one Response
     * const Response = await prisma.response.create({
     *   data: {
     *     // ... data to create a Response
     *   }
     * })
     * 
     */
    create<T extends ResponseCreateArgs>(args: SelectSubset<T, ResponseCreateArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Responses.
     * @param {ResponseCreateManyArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const response = await prisma.response.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResponseCreateManyArgs>(args?: SelectSubset<T, ResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Responses and returns the data saved in the database.
     * @param {ResponseCreateManyAndReturnArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const response = await prisma.response.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Responses and only return the `id`
     * const responseWithIdOnly = await prisma.response.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, ResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Response.
     * @param {ResponseDeleteArgs} args - Arguments to delete one Response.
     * @example
     * // Delete one Response
     * const Response = await prisma.response.delete({
     *   where: {
     *     // ... filter to delete one Response
     *   }
     * })
     * 
     */
    delete<T extends ResponseDeleteArgs>(args: SelectSubset<T, ResponseDeleteArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Response.
     * @param {ResponseUpdateArgs} args - Arguments to update one Response.
     * @example
     * // Update one Response
     * const response = await prisma.response.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResponseUpdateArgs>(args: SelectSubset<T, ResponseUpdateArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Responses.
     * @param {ResponseDeleteManyArgs} args - Arguments to filter Responses to delete.
     * @example
     * // Delete a few Responses
     * const { count } = await prisma.response.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResponseDeleteManyArgs>(args?: SelectSubset<T, ResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responses
     * const response = await prisma.response.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResponseUpdateManyArgs>(args: SelectSubset<T, ResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Response.
     * @param {ResponseUpsertArgs} args - Arguments to update or create a Response.
     * @example
     * // Update or create a Response
     * const response = await prisma.response.upsert({
     *   create: {
     *     // ... data to create a Response
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Response we want to update
     *   }
     * })
     */
    upsert<T extends ResponseUpsertArgs>(args: SelectSubset<T, ResponseUpsertArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseCountArgs} args - Arguments to filter Responses to count.
     * @example
     * // Count the number of Responses
     * const count = await prisma.response.count({
     *   where: {
     *     // ... the filter for the Responses we want to count
     *   }
     * })
    **/
    count<T extends ResponseCountArgs>(
      args?: Subset<T, ResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResponseAggregateArgs>(args: Subset<T, ResponseAggregateArgs>): Prisma.PrismaPromise<GetResponseAggregateType<T>>

    /**
     * Group by Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponseGroupByArgs['orderBy'] }
        : { orderBy?: ResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Response model
   */
  readonly fields: ResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Response.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    result<T extends ResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResultDefaultArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Response model
   */ 
  interface ResponseFieldRefs {
    readonly id: FieldRef<"Response", 'String'>
    readonly resultId: FieldRef<"Response", 'String'>
    readonly questionId: FieldRef<"Response", 'String'>
    readonly answer: FieldRef<"Response", 'String'>
    readonly isCorrect: FieldRef<"Response", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Response findUnique
   */
  export type ResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response findUniqueOrThrow
   */
  export type ResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response findFirst
   */
  export type ResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response findFirstOrThrow
   */
  export type ResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response findMany
   */
  export type ResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Responses to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response create
   */
  export type ResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a Response.
     */
    data: XOR<ResponseCreateInput, ResponseUncheckedCreateInput>
  }

  /**
   * Response createMany
   */
  export type ResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Responses.
     */
    data: ResponseCreateManyInput | ResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Response createManyAndReturn
   */
  export type ResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Responses.
     */
    data: ResponseCreateManyInput | ResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Response update
   */
  export type ResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a Response.
     */
    data: XOR<ResponseUpdateInput, ResponseUncheckedUpdateInput>
    /**
     * Choose, which Response to update.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response updateMany
   */
  export type ResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Responses.
     */
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyInput>
    /**
     * Filter which Responses to update
     */
    where?: ResponseWhereInput
  }

  /**
   * Response upsert
   */
  export type ResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the Response to update in case it exists.
     */
    where: ResponseWhereUniqueInput
    /**
     * In case the Response found by the `where` argument doesn't exist, create a new Response with this data.
     */
    create: XOR<ResponseCreateInput, ResponseUncheckedCreateInput>
    /**
     * In case the Response was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponseUpdateInput, ResponseUncheckedUpdateInput>
  }

  /**
   * Response delete
   */
  export type ResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter which Response to delete.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response deleteMany
   */
  export type ResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responses to delete
     */
    where?: ResponseWhereInput
  }

  /**
   * Response without action
   */
  export type ResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
  }


  /**
   * Model ExamResponse
   */

  export type AggregateExamResponse = {
    _count: ExamResponseCountAggregateOutputType | null
    _min: ExamResponseMinAggregateOutputType | null
    _max: ExamResponseMaxAggregateOutputType | null
  }

  export type ExamResponseMinAggregateOutputType = {
    id: string | null
    resultId: string | null
    examQuestionId: string | null
    answer: string | null
    isCorrect: boolean | null
  }

  export type ExamResponseMaxAggregateOutputType = {
    id: string | null
    resultId: string | null
    examQuestionId: string | null
    answer: string | null
    isCorrect: boolean | null
  }

  export type ExamResponseCountAggregateOutputType = {
    id: number
    resultId: number
    examQuestionId: number
    answer: number
    isCorrect: number
    _all: number
  }


  export type ExamResponseMinAggregateInputType = {
    id?: true
    resultId?: true
    examQuestionId?: true
    answer?: true
    isCorrect?: true
  }

  export type ExamResponseMaxAggregateInputType = {
    id?: true
    resultId?: true
    examQuestionId?: true
    answer?: true
    isCorrect?: true
  }

  export type ExamResponseCountAggregateInputType = {
    id?: true
    resultId?: true
    examQuestionId?: true
    answer?: true
    isCorrect?: true
    _all?: true
  }

  export type ExamResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamResponse to aggregate.
     */
    where?: ExamResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResponses to fetch.
     */
    orderBy?: ExamResponseOrderByWithRelationInput | ExamResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamResponses
    **/
    _count?: true | ExamResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamResponseMaxAggregateInputType
  }

  export type GetExamResponseAggregateType<T extends ExamResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateExamResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamResponse[P]>
      : GetScalarType<T[P], AggregateExamResponse[P]>
  }




  export type ExamResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamResponseWhereInput
    orderBy?: ExamResponseOrderByWithAggregationInput | ExamResponseOrderByWithAggregationInput[]
    by: ExamResponseScalarFieldEnum[] | ExamResponseScalarFieldEnum
    having?: ExamResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamResponseCountAggregateInputType | true
    _min?: ExamResponseMinAggregateInputType
    _max?: ExamResponseMaxAggregateInputType
  }

  export type ExamResponseGroupByOutputType = {
    id: string
    resultId: string
    examQuestionId: string
    answer: string | null
    isCorrect: boolean
    _count: ExamResponseCountAggregateOutputType | null
    _min: ExamResponseMinAggregateOutputType | null
    _max: ExamResponseMaxAggregateOutputType | null
  }

  type GetExamResponseGroupByPayload<T extends ExamResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamResponseGroupByOutputType[P]>
            : GetScalarType<T[P], ExamResponseGroupByOutputType[P]>
        }
      >
    >


  export type ExamResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultId?: boolean
    examQuestionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    examQuestion?: boolean | ExamQuestionDefaultArgs<ExtArgs>
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examResponse"]>

  export type ExamResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultId?: boolean
    examQuestionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    examQuestion?: boolean | ExamQuestionDefaultArgs<ExtArgs>
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examResponse"]>

  export type ExamResponseSelectScalar = {
    id?: boolean
    resultId?: boolean
    examQuestionId?: boolean
    answer?: boolean
    isCorrect?: boolean
  }

  export type ExamResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examQuestion?: boolean | ExamQuestionDefaultArgs<ExtArgs>
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }
  export type ExamResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examQuestion?: boolean | ExamQuestionDefaultArgs<ExtArgs>
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }

  export type $ExamResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamResponse"
    objects: {
      examQuestion: Prisma.$ExamQuestionPayload<ExtArgs>
      result: Prisma.$ResultPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resultId: string
      examQuestionId: string
      answer: string | null
      isCorrect: boolean
    }, ExtArgs["result"]["examResponse"]>
    composites: {}
  }

  type ExamResponseGetPayload<S extends boolean | null | undefined | ExamResponseDefaultArgs> = $Result.GetResult<Prisma.$ExamResponsePayload, S>

  type ExamResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExamResponseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExamResponseCountAggregateInputType | true
    }

  export interface ExamResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamResponse'], meta: { name: 'ExamResponse' } }
    /**
     * Find zero or one ExamResponse that matches the filter.
     * @param {ExamResponseFindUniqueArgs} args - Arguments to find a ExamResponse
     * @example
     * // Get one ExamResponse
     * const examResponse = await prisma.examResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamResponseFindUniqueArgs>(args: SelectSubset<T, ExamResponseFindUniqueArgs<ExtArgs>>): Prisma__ExamResponseClient<$Result.GetResult<Prisma.$ExamResponsePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExamResponse that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExamResponseFindUniqueOrThrowArgs} args - Arguments to find a ExamResponse
     * @example
     * // Get one ExamResponse
     * const examResponse = await prisma.examResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamResponseClient<$Result.GetResult<Prisma.$ExamResponsePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExamResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResponseFindFirstArgs} args - Arguments to find a ExamResponse
     * @example
     * // Get one ExamResponse
     * const examResponse = await prisma.examResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamResponseFindFirstArgs>(args?: SelectSubset<T, ExamResponseFindFirstArgs<ExtArgs>>): Prisma__ExamResponseClient<$Result.GetResult<Prisma.$ExamResponsePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExamResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResponseFindFirstOrThrowArgs} args - Arguments to find a ExamResponse
     * @example
     * // Get one ExamResponse
     * const examResponse = await prisma.examResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamResponseClient<$Result.GetResult<Prisma.$ExamResponsePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExamResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamResponses
     * const examResponses = await prisma.examResponse.findMany()
     * 
     * // Get first 10 ExamResponses
     * const examResponses = await prisma.examResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examResponseWithIdOnly = await prisma.examResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamResponseFindManyArgs>(args?: SelectSubset<T, ExamResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamResponsePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExamResponse.
     * @param {ExamResponseCreateArgs} args - Arguments to create a ExamResponse.
     * @example
     * // Create one ExamResponse
     * const ExamResponse = await prisma.examResponse.create({
     *   data: {
     *     // ... data to create a ExamResponse
     *   }
     * })
     * 
     */
    create<T extends ExamResponseCreateArgs>(args: SelectSubset<T, ExamResponseCreateArgs<ExtArgs>>): Prisma__ExamResponseClient<$Result.GetResult<Prisma.$ExamResponsePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExamResponses.
     * @param {ExamResponseCreateManyArgs} args - Arguments to create many ExamResponses.
     * @example
     * // Create many ExamResponses
     * const examResponse = await prisma.examResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamResponseCreateManyArgs>(args?: SelectSubset<T, ExamResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamResponses and returns the data saved in the database.
     * @param {ExamResponseCreateManyAndReturnArgs} args - Arguments to create many ExamResponses.
     * @example
     * // Create many ExamResponses
     * const examResponse = await prisma.examResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamResponses and only return the `id`
     * const examResponseWithIdOnly = await prisma.examResponse.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamResponsePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExamResponse.
     * @param {ExamResponseDeleteArgs} args - Arguments to delete one ExamResponse.
     * @example
     * // Delete one ExamResponse
     * const ExamResponse = await prisma.examResponse.delete({
     *   where: {
     *     // ... filter to delete one ExamResponse
     *   }
     * })
     * 
     */
    delete<T extends ExamResponseDeleteArgs>(args: SelectSubset<T, ExamResponseDeleteArgs<ExtArgs>>): Prisma__ExamResponseClient<$Result.GetResult<Prisma.$ExamResponsePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExamResponse.
     * @param {ExamResponseUpdateArgs} args - Arguments to update one ExamResponse.
     * @example
     * // Update one ExamResponse
     * const examResponse = await prisma.examResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamResponseUpdateArgs>(args: SelectSubset<T, ExamResponseUpdateArgs<ExtArgs>>): Prisma__ExamResponseClient<$Result.GetResult<Prisma.$ExamResponsePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExamResponses.
     * @param {ExamResponseDeleteManyArgs} args - Arguments to filter ExamResponses to delete.
     * @example
     * // Delete a few ExamResponses
     * const { count } = await prisma.examResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamResponseDeleteManyArgs>(args?: SelectSubset<T, ExamResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamResponses
     * const examResponse = await prisma.examResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamResponseUpdateManyArgs>(args: SelectSubset<T, ExamResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExamResponse.
     * @param {ExamResponseUpsertArgs} args - Arguments to update or create a ExamResponse.
     * @example
     * // Update or create a ExamResponse
     * const examResponse = await prisma.examResponse.upsert({
     *   create: {
     *     // ... data to create a ExamResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamResponse we want to update
     *   }
     * })
     */
    upsert<T extends ExamResponseUpsertArgs>(args: SelectSubset<T, ExamResponseUpsertArgs<ExtArgs>>): Prisma__ExamResponseClient<$Result.GetResult<Prisma.$ExamResponsePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExamResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResponseCountArgs} args - Arguments to filter ExamResponses to count.
     * @example
     * // Count the number of ExamResponses
     * const count = await prisma.examResponse.count({
     *   where: {
     *     // ... the filter for the ExamResponses we want to count
     *   }
     * })
    **/
    count<T extends ExamResponseCountArgs>(
      args?: Subset<T, ExamResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamResponseAggregateArgs>(args: Subset<T, ExamResponseAggregateArgs>): Prisma.PrismaPromise<GetExamResponseAggregateType<T>>

    /**
     * Group by ExamResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamResponseGroupByArgs['orderBy'] }
        : { orderBy?: ExamResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamResponse model
   */
  readonly fields: ExamResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examQuestion<T extends ExamQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamQuestionDefaultArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    result<T extends ResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResultDefaultArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExamResponse model
   */ 
  interface ExamResponseFieldRefs {
    readonly id: FieldRef<"ExamResponse", 'String'>
    readonly resultId: FieldRef<"ExamResponse", 'String'>
    readonly examQuestionId: FieldRef<"ExamResponse", 'String'>
    readonly answer: FieldRef<"ExamResponse", 'String'>
    readonly isCorrect: FieldRef<"ExamResponse", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ExamResponse findUnique
   */
  export type ExamResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResponse
     */
    select?: ExamResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResponseInclude<ExtArgs> | null
    /**
     * Filter, which ExamResponse to fetch.
     */
    where: ExamResponseWhereUniqueInput
  }

  /**
   * ExamResponse findUniqueOrThrow
   */
  export type ExamResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResponse
     */
    select?: ExamResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResponseInclude<ExtArgs> | null
    /**
     * Filter, which ExamResponse to fetch.
     */
    where: ExamResponseWhereUniqueInput
  }

  /**
   * ExamResponse findFirst
   */
  export type ExamResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResponse
     */
    select?: ExamResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResponseInclude<ExtArgs> | null
    /**
     * Filter, which ExamResponse to fetch.
     */
    where?: ExamResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResponses to fetch.
     */
    orderBy?: ExamResponseOrderByWithRelationInput | ExamResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamResponses.
     */
    cursor?: ExamResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamResponses.
     */
    distinct?: ExamResponseScalarFieldEnum | ExamResponseScalarFieldEnum[]
  }

  /**
   * ExamResponse findFirstOrThrow
   */
  export type ExamResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResponse
     */
    select?: ExamResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResponseInclude<ExtArgs> | null
    /**
     * Filter, which ExamResponse to fetch.
     */
    where?: ExamResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResponses to fetch.
     */
    orderBy?: ExamResponseOrderByWithRelationInput | ExamResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamResponses.
     */
    cursor?: ExamResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamResponses.
     */
    distinct?: ExamResponseScalarFieldEnum | ExamResponseScalarFieldEnum[]
  }

  /**
   * ExamResponse findMany
   */
  export type ExamResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResponse
     */
    select?: ExamResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResponseInclude<ExtArgs> | null
    /**
     * Filter, which ExamResponses to fetch.
     */
    where?: ExamResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResponses to fetch.
     */
    orderBy?: ExamResponseOrderByWithRelationInput | ExamResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamResponses.
     */
    cursor?: ExamResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResponses.
     */
    skip?: number
    distinct?: ExamResponseScalarFieldEnum | ExamResponseScalarFieldEnum[]
  }

  /**
   * ExamResponse create
   */
  export type ExamResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResponse
     */
    select?: ExamResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamResponse.
     */
    data: XOR<ExamResponseCreateInput, ExamResponseUncheckedCreateInput>
  }

  /**
   * ExamResponse createMany
   */
  export type ExamResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamResponses.
     */
    data: ExamResponseCreateManyInput | ExamResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamResponse createManyAndReturn
   */
  export type ExamResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResponse
     */
    select?: ExamResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExamResponses.
     */
    data: ExamResponseCreateManyInput | ExamResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamResponse update
   */
  export type ExamResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResponse
     */
    select?: ExamResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamResponse.
     */
    data: XOR<ExamResponseUpdateInput, ExamResponseUncheckedUpdateInput>
    /**
     * Choose, which ExamResponse to update.
     */
    where: ExamResponseWhereUniqueInput
  }

  /**
   * ExamResponse updateMany
   */
  export type ExamResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamResponses.
     */
    data: XOR<ExamResponseUpdateManyMutationInput, ExamResponseUncheckedUpdateManyInput>
    /**
     * Filter which ExamResponses to update
     */
    where?: ExamResponseWhereInput
  }

  /**
   * ExamResponse upsert
   */
  export type ExamResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResponse
     */
    select?: ExamResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamResponse to update in case it exists.
     */
    where: ExamResponseWhereUniqueInput
    /**
     * In case the ExamResponse found by the `where` argument doesn't exist, create a new ExamResponse with this data.
     */
    create: XOR<ExamResponseCreateInput, ExamResponseUncheckedCreateInput>
    /**
     * In case the ExamResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamResponseUpdateInput, ExamResponseUncheckedUpdateInput>
  }

  /**
   * ExamResponse delete
   */
  export type ExamResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResponse
     */
    select?: ExamResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResponseInclude<ExtArgs> | null
    /**
     * Filter which ExamResponse to delete.
     */
    where: ExamResponseWhereUniqueInput
  }

  /**
   * ExamResponse deleteMany
   */
  export type ExamResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamResponses to delete
     */
    where?: ExamResponseWhereInput
  }

  /**
   * ExamResponse without action
   */
  export type ExamResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResponse
     */
    select?: ExamResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResponseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parentMobile: 'parentMobile',
    collegeName: 'collegeName',
    pucRollNumber: 'pucRollNumber',
    createdAt: 'createdAt',
    lastLoginAt: 'lastLoginAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subject: 'subject',
    topic: 'topic',
    examType: 'examType',
    difficulty: 'difficulty',
    marksPerQuestion: 'marksPerQuestion',
    negativeMarking: 'negativeMarking',
    durationMinutes: 'durationMinutes',
    isLive: 'isLive',
    isDemo: 'isDemo',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const ExamQuestionScalarFieldEnum: {
    id: 'id',
    examId: 'examId',
    text: 'text',
    imageUrl: 'imageUrl',
    optionA: 'optionA',
    optionB: 'optionB',
    optionC: 'optionC',
    optionD: 'optionD',
    correctOption: 'correctOption',
    subject: 'subject',
    difficulty: 'difficulty',
    orderIndex: 'orderIndex'
  };

  export type ExamQuestionScalarFieldEnum = (typeof ExamQuestionScalarFieldEnum)[keyof typeof ExamQuestionScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    imageUrl: 'imageUrl',
    optionA: 'optionA',
    optionB: 'optionB',
    optionC: 'optionC',
    optionD: 'optionD',
    correctOption: 'correctOption',
    subject: 'subject',
    examType: 'examType',
    createdAt: 'createdAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const ResultScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    examId: 'examId',
    examType: 'examType',
    marksMath: 'marksMath',
    marksPhy: 'marksPhy',
    marksChem: 'marksChem',
    sectionScores: 'sectionScores',
    totalMarks: 'totalMarks',
    rank: 'rank',
    tabSwitchCount: 'tabSwitchCount',
    completedAt: 'completedAt'
  };

  export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum]


  export const ResponseScalarFieldEnum: {
    id: 'id',
    resultId: 'resultId',
    questionId: 'questionId',
    answer: 'answer',
    isCorrect: 'isCorrect'
  };

  export type ResponseScalarFieldEnum = (typeof ResponseScalarFieldEnum)[keyof typeof ResponseScalarFieldEnum]


  export const ExamResponseScalarFieldEnum: {
    id: 'id',
    resultId: 'resultId',
    examQuestionId: 'examQuestionId',
    answer: 'answer',
    isCorrect: 'isCorrect'
  };

  export type ExamResponseScalarFieldEnum = (typeof ExamResponseScalarFieldEnum)[keyof typeof ExamResponseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    parentMobile?: StringFilter<"Student"> | string
    collegeName?: StringFilter<"Student"> | string
    pucRollNumber?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"Student"> | Date | string | null
    results?: ResultListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    parentMobile?: SortOrder
    collegeName?: SortOrder
    pucRollNumber?: SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    results?: ResultOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pucRollNumber?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    parentMobile?: StringFilter<"Student"> | string
    collegeName?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"Student"> | Date | string | null
    results?: ResultListRelationFilter
  }, "id" | "pucRollNumber">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    parentMobile?: SortOrder
    collegeName?: SortOrder
    pucRollNumber?: SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    parentMobile?: StringWithAggregatesFilter<"Student"> | string
    collegeName?: StringWithAggregatesFilter<"Student"> | string
    pucRollNumber?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: StringFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    subject?: StringFilter<"Exam"> | string
    topic?: StringNullableFilter<"Exam"> | string | null
    examType?: StringFilter<"Exam"> | string
    difficulty?: StringFilter<"Exam"> | string
    marksPerQuestion?: FloatFilter<"Exam"> | number
    negativeMarking?: FloatFilter<"Exam"> | number
    durationMinutes?: IntFilter<"Exam"> | number
    isLive?: BoolFilter<"Exam"> | boolean
    isDemo?: BoolFilter<"Exam"> | boolean
    publishedAt?: DateTimeNullableFilter<"Exam"> | Date | string | null
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    questions?: ExamQuestionListRelationFilter
    results?: ResultListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subject?: SortOrder
    topic?: SortOrderInput | SortOrder
    examType?: SortOrder
    difficulty?: SortOrder
    marksPerQuestion?: SortOrder
    negativeMarking?: SortOrder
    durationMinutes?: SortOrder
    isLive?: SortOrder
    isDemo?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    questions?: ExamQuestionOrderByRelationAggregateInput
    results?: ResultOrderByRelationAggregateInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    title?: StringFilter<"Exam"> | string
    subject?: StringFilter<"Exam"> | string
    topic?: StringNullableFilter<"Exam"> | string | null
    examType?: StringFilter<"Exam"> | string
    difficulty?: StringFilter<"Exam"> | string
    marksPerQuestion?: FloatFilter<"Exam"> | number
    negativeMarking?: FloatFilter<"Exam"> | number
    durationMinutes?: IntFilter<"Exam"> | number
    isLive?: BoolFilter<"Exam"> | boolean
    isDemo?: BoolFilter<"Exam"> | boolean
    publishedAt?: DateTimeNullableFilter<"Exam"> | Date | string | null
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    questions?: ExamQuestionListRelationFilter
    results?: ResultListRelationFilter
  }, "id">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subject?: SortOrder
    topic?: SortOrderInput | SortOrder
    examType?: SortOrder
    difficulty?: SortOrder
    marksPerQuestion?: SortOrder
    negativeMarking?: SortOrder
    durationMinutes?: SortOrder
    isLive?: SortOrder
    isDemo?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exam"> | string
    title?: StringWithAggregatesFilter<"Exam"> | string
    subject?: StringWithAggregatesFilter<"Exam"> | string
    topic?: StringNullableWithAggregatesFilter<"Exam"> | string | null
    examType?: StringWithAggregatesFilter<"Exam"> | string
    difficulty?: StringWithAggregatesFilter<"Exam"> | string
    marksPerQuestion?: FloatWithAggregatesFilter<"Exam"> | number
    negativeMarking?: FloatWithAggregatesFilter<"Exam"> | number
    durationMinutes?: IntWithAggregatesFilter<"Exam"> | number
    isLive?: BoolWithAggregatesFilter<"Exam"> | boolean
    isDemo?: BoolWithAggregatesFilter<"Exam"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Exam"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
  }

  export type ExamQuestionWhereInput = {
    AND?: ExamQuestionWhereInput | ExamQuestionWhereInput[]
    OR?: ExamQuestionWhereInput[]
    NOT?: ExamQuestionWhereInput | ExamQuestionWhereInput[]
    id?: StringFilter<"ExamQuestion"> | string
    examId?: StringFilter<"ExamQuestion"> | string
    text?: StringFilter<"ExamQuestion"> | string
    imageUrl?: StringNullableFilter<"ExamQuestion"> | string | null
    optionA?: StringFilter<"ExamQuestion"> | string
    optionB?: StringFilter<"ExamQuestion"> | string
    optionC?: StringFilter<"ExamQuestion"> | string
    optionD?: StringFilter<"ExamQuestion"> | string
    correctOption?: StringFilter<"ExamQuestion"> | string
    subject?: StringFilter<"ExamQuestion"> | string
    difficulty?: StringFilter<"ExamQuestion"> | string
    orderIndex?: IntFilter<"ExamQuestion"> | number
    exam?: XOR<ExamRelationFilter, ExamWhereInput>
    responses?: ExamResponseListRelationFilter
  }

  export type ExamQuestionOrderByWithRelationInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    subject?: SortOrder
    difficulty?: SortOrder
    orderIndex?: SortOrder
    exam?: ExamOrderByWithRelationInput
    responses?: ExamResponseOrderByRelationAggregateInput
  }

  export type ExamQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamQuestionWhereInput | ExamQuestionWhereInput[]
    OR?: ExamQuestionWhereInput[]
    NOT?: ExamQuestionWhereInput | ExamQuestionWhereInput[]
    examId?: StringFilter<"ExamQuestion"> | string
    text?: StringFilter<"ExamQuestion"> | string
    imageUrl?: StringNullableFilter<"ExamQuestion"> | string | null
    optionA?: StringFilter<"ExamQuestion"> | string
    optionB?: StringFilter<"ExamQuestion"> | string
    optionC?: StringFilter<"ExamQuestion"> | string
    optionD?: StringFilter<"ExamQuestion"> | string
    correctOption?: StringFilter<"ExamQuestion"> | string
    subject?: StringFilter<"ExamQuestion"> | string
    difficulty?: StringFilter<"ExamQuestion"> | string
    orderIndex?: IntFilter<"ExamQuestion"> | number
    exam?: XOR<ExamRelationFilter, ExamWhereInput>
    responses?: ExamResponseListRelationFilter
  }, "id">

  export type ExamQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    subject?: SortOrder
    difficulty?: SortOrder
    orderIndex?: SortOrder
    _count?: ExamQuestionCountOrderByAggregateInput
    _avg?: ExamQuestionAvgOrderByAggregateInput
    _max?: ExamQuestionMaxOrderByAggregateInput
    _min?: ExamQuestionMinOrderByAggregateInput
    _sum?: ExamQuestionSumOrderByAggregateInput
  }

  export type ExamQuestionScalarWhereWithAggregatesInput = {
    AND?: ExamQuestionScalarWhereWithAggregatesInput | ExamQuestionScalarWhereWithAggregatesInput[]
    OR?: ExamQuestionScalarWhereWithAggregatesInput[]
    NOT?: ExamQuestionScalarWhereWithAggregatesInput | ExamQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamQuestion"> | string
    examId?: StringWithAggregatesFilter<"ExamQuestion"> | string
    text?: StringWithAggregatesFilter<"ExamQuestion"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"ExamQuestion"> | string | null
    optionA?: StringWithAggregatesFilter<"ExamQuestion"> | string
    optionB?: StringWithAggregatesFilter<"ExamQuestion"> | string
    optionC?: StringWithAggregatesFilter<"ExamQuestion"> | string
    optionD?: StringWithAggregatesFilter<"ExamQuestion"> | string
    correctOption?: StringWithAggregatesFilter<"ExamQuestion"> | string
    subject?: StringWithAggregatesFilter<"ExamQuestion"> | string
    difficulty?: StringWithAggregatesFilter<"ExamQuestion"> | string
    orderIndex?: IntWithAggregatesFilter<"ExamQuestion"> | number
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    imageUrl?: StringNullableFilter<"Question"> | string | null
    optionA?: StringFilter<"Question"> | string
    optionB?: StringFilter<"Question"> | string
    optionC?: StringFilter<"Question"> | string
    optionD?: StringFilter<"Question"> | string
    correctOption?: StringFilter<"Question"> | string
    subject?: StringFilter<"Question"> | string
    examType?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    responses?: ResponseListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    subject?: SortOrder
    examType?: SortOrder
    createdAt?: SortOrder
    responses?: ResponseOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    imageUrl?: StringNullableFilter<"Question"> | string | null
    optionA?: StringFilter<"Question"> | string
    optionB?: StringFilter<"Question"> | string
    optionC?: StringFilter<"Question"> | string
    optionD?: StringFilter<"Question"> | string
    correctOption?: StringFilter<"Question"> | string
    subject?: StringFilter<"Question"> | string
    examType?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    responses?: ResponseListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    subject?: SortOrder
    examType?: SortOrder
    createdAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Question"> | string | null
    optionA?: StringWithAggregatesFilter<"Question"> | string
    optionB?: StringWithAggregatesFilter<"Question"> | string
    optionC?: StringWithAggregatesFilter<"Question"> | string
    optionD?: StringWithAggregatesFilter<"Question"> | string
    correctOption?: StringWithAggregatesFilter<"Question"> | string
    subject?: StringWithAggregatesFilter<"Question"> | string
    examType?: StringWithAggregatesFilter<"Question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type ResultWhereInput = {
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    id?: StringFilter<"Result"> | string
    studentId?: StringFilter<"Result"> | string
    examId?: StringNullableFilter<"Result"> | string | null
    examType?: StringFilter<"Result"> | string
    marksMath?: IntFilter<"Result"> | number
    marksPhy?: IntFilter<"Result"> | number
    marksChem?: IntFilter<"Result"> | number
    sectionScores?: JsonNullableFilter<"Result">
    totalMarks?: IntFilter<"Result"> | number
    rank?: IntNullableFilter<"Result"> | number | null
    tabSwitchCount?: IntFilter<"Result"> | number
    completedAt?: DateTimeFilter<"Result"> | Date | string
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    exam?: XOR<ExamNullableRelationFilter, ExamWhereInput> | null
    responses?: ResponseListRelationFilter
    examResponses?: ExamResponseListRelationFilter
  }

  export type ResultOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrderInput | SortOrder
    examType?: SortOrder
    marksMath?: SortOrder
    marksPhy?: SortOrder
    marksChem?: SortOrder
    sectionScores?: SortOrderInput | SortOrder
    totalMarks?: SortOrder
    rank?: SortOrderInput | SortOrder
    tabSwitchCount?: SortOrder
    completedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    exam?: ExamOrderByWithRelationInput
    responses?: ResponseOrderByRelationAggregateInput
    examResponses?: ExamResponseOrderByRelationAggregateInput
  }

  export type ResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    studentId?: StringFilter<"Result"> | string
    examId?: StringNullableFilter<"Result"> | string | null
    examType?: StringFilter<"Result"> | string
    marksMath?: IntFilter<"Result"> | number
    marksPhy?: IntFilter<"Result"> | number
    marksChem?: IntFilter<"Result"> | number
    sectionScores?: JsonNullableFilter<"Result">
    totalMarks?: IntFilter<"Result"> | number
    rank?: IntNullableFilter<"Result"> | number | null
    tabSwitchCount?: IntFilter<"Result"> | number
    completedAt?: DateTimeFilter<"Result"> | Date | string
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    exam?: XOR<ExamNullableRelationFilter, ExamWhereInput> | null
    responses?: ResponseListRelationFilter
    examResponses?: ExamResponseListRelationFilter
  }, "id">

  export type ResultOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrderInput | SortOrder
    examType?: SortOrder
    marksMath?: SortOrder
    marksPhy?: SortOrder
    marksChem?: SortOrder
    sectionScores?: SortOrderInput | SortOrder
    totalMarks?: SortOrder
    rank?: SortOrderInput | SortOrder
    tabSwitchCount?: SortOrder
    completedAt?: SortOrder
    _count?: ResultCountOrderByAggregateInput
    _avg?: ResultAvgOrderByAggregateInput
    _max?: ResultMaxOrderByAggregateInput
    _min?: ResultMinOrderByAggregateInput
    _sum?: ResultSumOrderByAggregateInput
  }

  export type ResultScalarWhereWithAggregatesInput = {
    AND?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    OR?: ResultScalarWhereWithAggregatesInput[]
    NOT?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Result"> | string
    studentId?: StringWithAggregatesFilter<"Result"> | string
    examId?: StringNullableWithAggregatesFilter<"Result"> | string | null
    examType?: StringWithAggregatesFilter<"Result"> | string
    marksMath?: IntWithAggregatesFilter<"Result"> | number
    marksPhy?: IntWithAggregatesFilter<"Result"> | number
    marksChem?: IntWithAggregatesFilter<"Result"> | number
    sectionScores?: JsonNullableWithAggregatesFilter<"Result">
    totalMarks?: IntWithAggregatesFilter<"Result"> | number
    rank?: IntNullableWithAggregatesFilter<"Result"> | number | null
    tabSwitchCount?: IntWithAggregatesFilter<"Result"> | number
    completedAt?: DateTimeWithAggregatesFilter<"Result"> | Date | string
  }

  export type ResponseWhereInput = {
    AND?: ResponseWhereInput | ResponseWhereInput[]
    OR?: ResponseWhereInput[]
    NOT?: ResponseWhereInput | ResponseWhereInput[]
    id?: StringFilter<"Response"> | string
    resultId?: StringFilter<"Response"> | string
    questionId?: StringFilter<"Response"> | string
    answer?: StringNullableFilter<"Response"> | string | null
    isCorrect?: BoolFilter<"Response"> | boolean
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    result?: XOR<ResultRelationFilter, ResultWhereInput>
  }

  export type ResponseOrderByWithRelationInput = {
    id?: SortOrder
    resultId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    question?: QuestionOrderByWithRelationInput
    result?: ResultOrderByWithRelationInput
  }

  export type ResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResponseWhereInput | ResponseWhereInput[]
    OR?: ResponseWhereInput[]
    NOT?: ResponseWhereInput | ResponseWhereInput[]
    resultId?: StringFilter<"Response"> | string
    questionId?: StringFilter<"Response"> | string
    answer?: StringNullableFilter<"Response"> | string | null
    isCorrect?: BoolFilter<"Response"> | boolean
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    result?: XOR<ResultRelationFilter, ResultWhereInput>
  }, "id">

  export type ResponseOrderByWithAggregationInput = {
    id?: SortOrder
    resultId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    _count?: ResponseCountOrderByAggregateInput
    _max?: ResponseMaxOrderByAggregateInput
    _min?: ResponseMinOrderByAggregateInput
  }

  export type ResponseScalarWhereWithAggregatesInput = {
    AND?: ResponseScalarWhereWithAggregatesInput | ResponseScalarWhereWithAggregatesInput[]
    OR?: ResponseScalarWhereWithAggregatesInput[]
    NOT?: ResponseScalarWhereWithAggregatesInput | ResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Response"> | string
    resultId?: StringWithAggregatesFilter<"Response"> | string
    questionId?: StringWithAggregatesFilter<"Response"> | string
    answer?: StringNullableWithAggregatesFilter<"Response"> | string | null
    isCorrect?: BoolWithAggregatesFilter<"Response"> | boolean
  }

  export type ExamResponseWhereInput = {
    AND?: ExamResponseWhereInput | ExamResponseWhereInput[]
    OR?: ExamResponseWhereInput[]
    NOT?: ExamResponseWhereInput | ExamResponseWhereInput[]
    id?: StringFilter<"ExamResponse"> | string
    resultId?: StringFilter<"ExamResponse"> | string
    examQuestionId?: StringFilter<"ExamResponse"> | string
    answer?: StringNullableFilter<"ExamResponse"> | string | null
    isCorrect?: BoolFilter<"ExamResponse"> | boolean
    examQuestion?: XOR<ExamQuestionRelationFilter, ExamQuestionWhereInput>
    result?: XOR<ResultRelationFilter, ResultWhereInput>
  }

  export type ExamResponseOrderByWithRelationInput = {
    id?: SortOrder
    resultId?: SortOrder
    examQuestionId?: SortOrder
    answer?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    examQuestion?: ExamQuestionOrderByWithRelationInput
    result?: ResultOrderByWithRelationInput
  }

  export type ExamResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamResponseWhereInput | ExamResponseWhereInput[]
    OR?: ExamResponseWhereInput[]
    NOT?: ExamResponseWhereInput | ExamResponseWhereInput[]
    resultId?: StringFilter<"ExamResponse"> | string
    examQuestionId?: StringFilter<"ExamResponse"> | string
    answer?: StringNullableFilter<"ExamResponse"> | string | null
    isCorrect?: BoolFilter<"ExamResponse"> | boolean
    examQuestion?: XOR<ExamQuestionRelationFilter, ExamQuestionWhereInput>
    result?: XOR<ResultRelationFilter, ResultWhereInput>
  }, "id">

  export type ExamResponseOrderByWithAggregationInput = {
    id?: SortOrder
    resultId?: SortOrder
    examQuestionId?: SortOrder
    answer?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    _count?: ExamResponseCountOrderByAggregateInput
    _max?: ExamResponseMaxOrderByAggregateInput
    _min?: ExamResponseMinOrderByAggregateInput
  }

  export type ExamResponseScalarWhereWithAggregatesInput = {
    AND?: ExamResponseScalarWhereWithAggregatesInput | ExamResponseScalarWhereWithAggregatesInput[]
    OR?: ExamResponseScalarWhereWithAggregatesInput[]
    NOT?: ExamResponseScalarWhereWithAggregatesInput | ExamResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamResponse"> | string
    resultId?: StringWithAggregatesFilter<"ExamResponse"> | string
    examQuestionId?: StringWithAggregatesFilter<"ExamResponse"> | string
    answer?: StringNullableWithAggregatesFilter<"ExamResponse"> | string | null
    isCorrect?: BoolWithAggregatesFilter<"ExamResponse"> | boolean
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    parentMobile: string
    collegeName: string
    pucRollNumber: string
    createdAt?: Date | string
    lastLoginAt?: Date | string | null
    results?: ResultCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    parentMobile: string
    collegeName: string
    pucRollNumber: string
    createdAt?: Date | string
    lastLoginAt?: Date | string | null
    results?: ResultUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentMobile?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    pucRollNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: ResultUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentMobile?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    pucRollNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: ResultUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    parentMobile: string
    collegeName: string
    pucRollNumber: string
    createdAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentMobile?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    pucRollNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentMobile?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    pucRollNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExamCreateInput = {
    id?: string
    title: string
    subject: string
    topic?: string | null
    examType?: string
    difficulty?: string
    marksPerQuestion?: number
    negativeMarking?: number
    durationMinutes?: number
    isLive?: boolean
    isDemo?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    questions?: ExamQuestionCreateNestedManyWithoutExamInput
    results?: ResultCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id?: string
    title: string
    subject: string
    topic?: string | null
    examType?: string
    difficulty?: string
    marksPerQuestion?: number
    negativeMarking?: number
    durationMinutes?: number
    isLive?: boolean
    isDemo?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    questions?: ExamQuestionUncheckedCreateNestedManyWithoutExamInput
    results?: ResultUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    marksPerQuestion?: FloatFieldUpdateOperationsInput | number
    negativeMarking?: FloatFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isLive?: BoolFieldUpdateOperationsInput | boolean
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: ExamQuestionUpdateManyWithoutExamNestedInput
    results?: ResultUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    marksPerQuestion?: FloatFieldUpdateOperationsInput | number
    negativeMarking?: FloatFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isLive?: BoolFieldUpdateOperationsInput | boolean
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: ExamQuestionUncheckedUpdateManyWithoutExamNestedInput
    results?: ResultUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id?: string
    title: string
    subject: string
    topic?: string | null
    examType?: string
    difficulty?: string
    marksPerQuestion?: number
    negativeMarking?: number
    durationMinutes?: number
    isLive?: boolean
    isDemo?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    marksPerQuestion?: FloatFieldUpdateOperationsInput | number
    negativeMarking?: FloatFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isLive?: BoolFieldUpdateOperationsInput | boolean
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    marksPerQuestion?: FloatFieldUpdateOperationsInput | number
    negativeMarking?: FloatFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isLive?: BoolFieldUpdateOperationsInput | boolean
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamQuestionCreateInput = {
    id?: string
    text: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    difficulty?: string
    orderIndex?: number
    exam: ExamCreateNestedOneWithoutQuestionsInput
    responses?: ExamResponseCreateNestedManyWithoutExamQuestionInput
  }

  export type ExamQuestionUncheckedCreateInput = {
    id?: string
    examId: string
    text: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    difficulty?: string
    orderIndex?: number
    responses?: ExamResponseUncheckedCreateNestedManyWithoutExamQuestionInput
  }

  export type ExamQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
    responses?: ExamResponseUpdateManyWithoutExamQuestionNestedInput
  }

  export type ExamQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    responses?: ExamResponseUncheckedUpdateManyWithoutExamQuestionNestedInput
  }

  export type ExamQuestionCreateManyInput = {
    id?: string
    examId: string
    text: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    difficulty?: string
    orderIndex?: number
  }

  export type ExamQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type ExamQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    examType?: string
    createdAt?: Date | string
    responses?: ResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    text: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    examType?: string
    createdAt?: Date | string
    responses?: ResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    text: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    examType?: string
    createdAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultCreateInput = {
    id?: string
    examType?: string
    marksMath?: number
    marksPhy?: number
    marksChem?: number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: number
    rank?: number | null
    tabSwitchCount?: number
    completedAt?: Date | string
    student: StudentCreateNestedOneWithoutResultsInput
    exam?: ExamCreateNestedOneWithoutResultsInput
    responses?: ResponseCreateNestedManyWithoutResultInput
    examResponses?: ExamResponseCreateNestedManyWithoutResultInput
  }

  export type ResultUncheckedCreateInput = {
    id?: string
    studentId: string
    examId?: string | null
    examType?: string
    marksMath?: number
    marksPhy?: number
    marksChem?: number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: number
    rank?: number | null
    tabSwitchCount?: number
    completedAt?: Date | string
    responses?: ResponseUncheckedCreateNestedManyWithoutResultInput
    examResponses?: ExamResponseUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutResultsNestedInput
    exam?: ExamUpdateOneWithoutResultsNestedInput
    responses?: ResponseUpdateManyWithoutResultNestedInput
    examResponses?: ExamResponseUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ResponseUncheckedUpdateManyWithoutResultNestedInput
    examResponses?: ExamResponseUncheckedUpdateManyWithoutResultNestedInput
  }

  export type ResultCreateManyInput = {
    id?: string
    studentId: string
    examId?: string | null
    examType?: string
    marksMath?: number
    marksPhy?: number
    marksChem?: number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: number
    rank?: number | null
    tabSwitchCount?: number
    completedAt?: Date | string
  }

  export type ResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseCreateInput = {
    id?: string
    answer?: string | null
    isCorrect?: boolean
    question: QuestionCreateNestedOneWithoutResponsesInput
    result: ResultCreateNestedOneWithoutResponsesInput
  }

  export type ResponseUncheckedCreateInput = {
    id?: string
    resultId: string
    questionId: string
    answer?: string | null
    isCorrect?: boolean
  }

  export type ResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutResponsesNestedInput
    result?: ResultUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResponseCreateManyInput = {
    id?: string
    resultId: string
    questionId: string
    answer?: string | null
    isCorrect?: boolean
  }

  export type ResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamResponseCreateInput = {
    id?: string
    answer?: string | null
    isCorrect?: boolean
    examQuestion: ExamQuestionCreateNestedOneWithoutResponsesInput
    result: ResultCreateNestedOneWithoutExamResponsesInput
  }

  export type ExamResponseUncheckedCreateInput = {
    id?: string
    resultId: string
    examQuestionId: string
    answer?: string | null
    isCorrect?: boolean
  }

  export type ExamResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    examQuestion?: ExamQuestionUpdateOneRequiredWithoutResponsesNestedInput
    result?: ResultUpdateOneRequiredWithoutExamResponsesNestedInput
  }

  export type ExamResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    examQuestionId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamResponseCreateManyInput = {
    id?: string
    resultId: string
    examQuestionId: string
    answer?: string | null
    isCorrect?: boolean
  }

  export type ExamResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    examQuestionId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ResultListRelationFilter = {
    every?: ResultWhereInput
    some?: ResultWhereInput
    none?: ResultWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentMobile?: SortOrder
    collegeName?: SortOrder
    pucRollNumber?: SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentMobile?: SortOrder
    collegeName?: SortOrder
    pucRollNumber?: SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentMobile?: SortOrder
    collegeName?: SortOrder
    pucRollNumber?: SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ExamQuestionListRelationFilter = {
    every?: ExamQuestionWhereInput
    some?: ExamQuestionWhereInput
    none?: ExamQuestionWhereInput
  }

  export type ExamQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subject?: SortOrder
    topic?: SortOrder
    examType?: SortOrder
    difficulty?: SortOrder
    marksPerQuestion?: SortOrder
    negativeMarking?: SortOrder
    durationMinutes?: SortOrder
    isLive?: SortOrder
    isDemo?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    marksPerQuestion?: SortOrder
    negativeMarking?: SortOrder
    durationMinutes?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subject?: SortOrder
    topic?: SortOrder
    examType?: SortOrder
    difficulty?: SortOrder
    marksPerQuestion?: SortOrder
    negativeMarking?: SortOrder
    durationMinutes?: SortOrder
    isLive?: SortOrder
    isDemo?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subject?: SortOrder
    topic?: SortOrder
    examType?: SortOrder
    difficulty?: SortOrder
    marksPerQuestion?: SortOrder
    negativeMarking?: SortOrder
    durationMinutes?: SortOrder
    isLive?: SortOrder
    isDemo?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    marksPerQuestion?: SortOrder
    negativeMarking?: SortOrder
    durationMinutes?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ExamRelationFilter = {
    is?: ExamWhereInput
    isNot?: ExamWhereInput
  }

  export type ExamResponseListRelationFilter = {
    every?: ExamResponseWhereInput
    some?: ExamResponseWhereInput
    none?: ExamResponseWhereInput
  }

  export type ExamResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    subject?: SortOrder
    difficulty?: SortOrder
    orderIndex?: SortOrder
  }

  export type ExamQuestionAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type ExamQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    subject?: SortOrder
    difficulty?: SortOrder
    orderIndex?: SortOrder
  }

  export type ExamQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    subject?: SortOrder
    difficulty?: SortOrder
    orderIndex?: SortOrder
  }

  export type ExamQuestionSumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type ResponseListRelationFilter = {
    every?: ResponseWhereInput
    some?: ResponseWhereInput
    none?: ResponseWhereInput
  }

  export type ResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    subject?: SortOrder
    examType?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    subject?: SortOrder
    examType?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    subject?: SortOrder
    examType?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type ExamNullableRelationFilter = {
    is?: ExamWhereInput | null
    isNot?: ExamWhereInput | null
  }

  export type ResultCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    examType?: SortOrder
    marksMath?: SortOrder
    marksPhy?: SortOrder
    marksChem?: SortOrder
    sectionScores?: SortOrder
    totalMarks?: SortOrder
    rank?: SortOrder
    tabSwitchCount?: SortOrder
    completedAt?: SortOrder
  }

  export type ResultAvgOrderByAggregateInput = {
    marksMath?: SortOrder
    marksPhy?: SortOrder
    marksChem?: SortOrder
    totalMarks?: SortOrder
    rank?: SortOrder
    tabSwitchCount?: SortOrder
  }

  export type ResultMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    examType?: SortOrder
    marksMath?: SortOrder
    marksPhy?: SortOrder
    marksChem?: SortOrder
    totalMarks?: SortOrder
    rank?: SortOrder
    tabSwitchCount?: SortOrder
    completedAt?: SortOrder
  }

  export type ResultMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    examType?: SortOrder
    marksMath?: SortOrder
    marksPhy?: SortOrder
    marksChem?: SortOrder
    totalMarks?: SortOrder
    rank?: SortOrder
    tabSwitchCount?: SortOrder
    completedAt?: SortOrder
  }

  export type ResultSumOrderByAggregateInput = {
    marksMath?: SortOrder
    marksPhy?: SortOrder
    marksChem?: SortOrder
    totalMarks?: SortOrder
    rank?: SortOrder
    tabSwitchCount?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type ResultRelationFilter = {
    is?: ResultWhereInput
    isNot?: ResultWhereInput
  }

  export type ResponseCountOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type ResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type ResponseMinOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type ExamQuestionRelationFilter = {
    is?: ExamQuestionWhereInput
    isNot?: ExamQuestionWhereInput
  }

  export type ExamResponseCountOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    examQuestionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type ExamResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    examQuestionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type ExamResponseMinOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    examQuestionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResultCreateNestedManyWithoutStudentInput = {
    create?: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput> | ResultCreateWithoutStudentInput[] | ResultUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutStudentInput | ResultCreateOrConnectWithoutStudentInput[]
    createMany?: ResultCreateManyStudentInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput> | ResultCreateWithoutStudentInput[] | ResultUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutStudentInput | ResultCreateOrConnectWithoutStudentInput[]
    createMany?: ResultCreateManyStudentInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ResultUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput> | ResultCreateWithoutStudentInput[] | ResultUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutStudentInput | ResultCreateOrConnectWithoutStudentInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutStudentInput | ResultUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ResultCreateManyStudentInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutStudentInput | ResultUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutStudentInput | ResultUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput> | ResultCreateWithoutStudentInput[] | ResultUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutStudentInput | ResultCreateOrConnectWithoutStudentInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutStudentInput | ResultUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ResultCreateManyStudentInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutStudentInput | ResultUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutStudentInput | ResultUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type ExamQuestionCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamQuestionCreateWithoutExamInput, ExamQuestionUncheckedCreateWithoutExamInput> | ExamQuestionCreateWithoutExamInput[] | ExamQuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutExamInput | ExamQuestionCreateOrConnectWithoutExamInput[]
    createMany?: ExamQuestionCreateManyExamInputEnvelope
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
  }

  export type ResultCreateNestedManyWithoutExamInput = {
    create?: XOR<ResultCreateWithoutExamInput, ResultUncheckedCreateWithoutExamInput> | ResultCreateWithoutExamInput[] | ResultUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutExamInput | ResultCreateOrConnectWithoutExamInput[]
    createMany?: ResultCreateManyExamInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type ExamQuestionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamQuestionCreateWithoutExamInput, ExamQuestionUncheckedCreateWithoutExamInput> | ExamQuestionCreateWithoutExamInput[] | ExamQuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutExamInput | ExamQuestionCreateOrConnectWithoutExamInput[]
    createMany?: ExamQuestionCreateManyExamInputEnvelope
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<ResultCreateWithoutExamInput, ResultUncheckedCreateWithoutExamInput> | ResultCreateWithoutExamInput[] | ResultUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutExamInput | ResultCreateOrConnectWithoutExamInput[]
    createMany?: ResultCreateManyExamInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ExamQuestionUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamQuestionCreateWithoutExamInput, ExamQuestionUncheckedCreateWithoutExamInput> | ExamQuestionCreateWithoutExamInput[] | ExamQuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutExamInput | ExamQuestionCreateOrConnectWithoutExamInput[]
    upsert?: ExamQuestionUpsertWithWhereUniqueWithoutExamInput | ExamQuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamQuestionCreateManyExamInputEnvelope
    set?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    disconnect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    delete?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    update?: ExamQuestionUpdateWithWhereUniqueWithoutExamInput | ExamQuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamQuestionUpdateManyWithWhereWithoutExamInput | ExamQuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
  }

  export type ResultUpdateManyWithoutExamNestedInput = {
    create?: XOR<ResultCreateWithoutExamInput, ResultUncheckedCreateWithoutExamInput> | ResultCreateWithoutExamInput[] | ResultUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutExamInput | ResultCreateOrConnectWithoutExamInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutExamInput | ResultUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ResultCreateManyExamInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutExamInput | ResultUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutExamInput | ResultUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type ExamQuestionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamQuestionCreateWithoutExamInput, ExamQuestionUncheckedCreateWithoutExamInput> | ExamQuestionCreateWithoutExamInput[] | ExamQuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutExamInput | ExamQuestionCreateOrConnectWithoutExamInput[]
    upsert?: ExamQuestionUpsertWithWhereUniqueWithoutExamInput | ExamQuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamQuestionCreateManyExamInputEnvelope
    set?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    disconnect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    delete?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    update?: ExamQuestionUpdateWithWhereUniqueWithoutExamInput | ExamQuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamQuestionUpdateManyWithWhereWithoutExamInput | ExamQuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<ResultCreateWithoutExamInput, ResultUncheckedCreateWithoutExamInput> | ResultCreateWithoutExamInput[] | ResultUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutExamInput | ResultCreateOrConnectWithoutExamInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutExamInput | ResultUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ResultCreateManyExamInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutExamInput | ResultUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutExamInput | ResultUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type ExamCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
  }

  export type ExamResponseCreateNestedManyWithoutExamQuestionInput = {
    create?: XOR<ExamResponseCreateWithoutExamQuestionInput, ExamResponseUncheckedCreateWithoutExamQuestionInput> | ExamResponseCreateWithoutExamQuestionInput[] | ExamResponseUncheckedCreateWithoutExamQuestionInput[]
    connectOrCreate?: ExamResponseCreateOrConnectWithoutExamQuestionInput | ExamResponseCreateOrConnectWithoutExamQuestionInput[]
    createMany?: ExamResponseCreateManyExamQuestionInputEnvelope
    connect?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
  }

  export type ExamResponseUncheckedCreateNestedManyWithoutExamQuestionInput = {
    create?: XOR<ExamResponseCreateWithoutExamQuestionInput, ExamResponseUncheckedCreateWithoutExamQuestionInput> | ExamResponseCreateWithoutExamQuestionInput[] | ExamResponseUncheckedCreateWithoutExamQuestionInput[]
    connectOrCreate?: ExamResponseCreateOrConnectWithoutExamQuestionInput | ExamResponseCreateOrConnectWithoutExamQuestionInput[]
    createMany?: ExamResponseCreateManyExamQuestionInputEnvelope
    connect?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
  }

  export type ExamUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    upsert?: ExamUpsertWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutQuestionsInput, ExamUpdateWithoutQuestionsInput>, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type ExamResponseUpdateManyWithoutExamQuestionNestedInput = {
    create?: XOR<ExamResponseCreateWithoutExamQuestionInput, ExamResponseUncheckedCreateWithoutExamQuestionInput> | ExamResponseCreateWithoutExamQuestionInput[] | ExamResponseUncheckedCreateWithoutExamQuestionInput[]
    connectOrCreate?: ExamResponseCreateOrConnectWithoutExamQuestionInput | ExamResponseCreateOrConnectWithoutExamQuestionInput[]
    upsert?: ExamResponseUpsertWithWhereUniqueWithoutExamQuestionInput | ExamResponseUpsertWithWhereUniqueWithoutExamQuestionInput[]
    createMany?: ExamResponseCreateManyExamQuestionInputEnvelope
    set?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    disconnect?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    delete?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    connect?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    update?: ExamResponseUpdateWithWhereUniqueWithoutExamQuestionInput | ExamResponseUpdateWithWhereUniqueWithoutExamQuestionInput[]
    updateMany?: ExamResponseUpdateManyWithWhereWithoutExamQuestionInput | ExamResponseUpdateManyWithWhereWithoutExamQuestionInput[]
    deleteMany?: ExamResponseScalarWhereInput | ExamResponseScalarWhereInput[]
  }

  export type ExamResponseUncheckedUpdateManyWithoutExamQuestionNestedInput = {
    create?: XOR<ExamResponseCreateWithoutExamQuestionInput, ExamResponseUncheckedCreateWithoutExamQuestionInput> | ExamResponseCreateWithoutExamQuestionInput[] | ExamResponseUncheckedCreateWithoutExamQuestionInput[]
    connectOrCreate?: ExamResponseCreateOrConnectWithoutExamQuestionInput | ExamResponseCreateOrConnectWithoutExamQuestionInput[]
    upsert?: ExamResponseUpsertWithWhereUniqueWithoutExamQuestionInput | ExamResponseUpsertWithWhereUniqueWithoutExamQuestionInput[]
    createMany?: ExamResponseCreateManyExamQuestionInputEnvelope
    set?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    disconnect?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    delete?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    connect?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    update?: ExamResponseUpdateWithWhereUniqueWithoutExamQuestionInput | ExamResponseUpdateWithWhereUniqueWithoutExamQuestionInput[]
    updateMany?: ExamResponseUpdateManyWithWhereWithoutExamQuestionInput | ExamResponseUpdateManyWithWhereWithoutExamQuestionInput[]
    deleteMany?: ExamResponseScalarWhereInput | ExamResponseScalarWhereInput[]
  }

  export type ResponseCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ResponseCreateWithoutQuestionInput, ResponseUncheckedCreateWithoutQuestionInput> | ResponseCreateWithoutQuestionInput[] | ResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutQuestionInput | ResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: ResponseCreateManyQuestionInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type ResponseUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ResponseCreateWithoutQuestionInput, ResponseUncheckedCreateWithoutQuestionInput> | ResponseCreateWithoutQuestionInput[] | ResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutQuestionInput | ResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: ResponseCreateManyQuestionInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type ResponseUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ResponseCreateWithoutQuestionInput, ResponseUncheckedCreateWithoutQuestionInput> | ResponseCreateWithoutQuestionInput[] | ResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutQuestionInput | ResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutQuestionInput | ResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ResponseCreateManyQuestionInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutQuestionInput | ResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutQuestionInput | ResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type ResponseUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ResponseCreateWithoutQuestionInput, ResponseUncheckedCreateWithoutQuestionInput> | ResponseCreateWithoutQuestionInput[] | ResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutQuestionInput | ResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutQuestionInput | ResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ResponseCreateManyQuestionInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutQuestionInput | ResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutQuestionInput | ResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutResultsInput = {
    create?: XOR<StudentCreateWithoutResultsInput, StudentUncheckedCreateWithoutResultsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutResultsInput
    connect?: StudentWhereUniqueInput
  }

  export type ExamCreateNestedOneWithoutResultsInput = {
    create?: XOR<ExamCreateWithoutResultsInput, ExamUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutResultsInput
    connect?: ExamWhereUniqueInput
  }

  export type ResponseCreateNestedManyWithoutResultInput = {
    create?: XOR<ResponseCreateWithoutResultInput, ResponseUncheckedCreateWithoutResultInput> | ResponseCreateWithoutResultInput[] | ResponseUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutResultInput | ResponseCreateOrConnectWithoutResultInput[]
    createMany?: ResponseCreateManyResultInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type ExamResponseCreateNestedManyWithoutResultInput = {
    create?: XOR<ExamResponseCreateWithoutResultInput, ExamResponseUncheckedCreateWithoutResultInput> | ExamResponseCreateWithoutResultInput[] | ExamResponseUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ExamResponseCreateOrConnectWithoutResultInput | ExamResponseCreateOrConnectWithoutResultInput[]
    createMany?: ExamResponseCreateManyResultInputEnvelope
    connect?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
  }

  export type ResponseUncheckedCreateNestedManyWithoutResultInput = {
    create?: XOR<ResponseCreateWithoutResultInput, ResponseUncheckedCreateWithoutResultInput> | ResponseCreateWithoutResultInput[] | ResponseUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutResultInput | ResponseCreateOrConnectWithoutResultInput[]
    createMany?: ResponseCreateManyResultInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type ExamResponseUncheckedCreateNestedManyWithoutResultInput = {
    create?: XOR<ExamResponseCreateWithoutResultInput, ExamResponseUncheckedCreateWithoutResultInput> | ExamResponseCreateWithoutResultInput[] | ExamResponseUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ExamResponseCreateOrConnectWithoutResultInput | ExamResponseCreateOrConnectWithoutResultInput[]
    createMany?: ExamResponseCreateManyResultInputEnvelope
    connect?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<StudentCreateWithoutResultsInput, StudentUncheckedCreateWithoutResultsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutResultsInput
    upsert?: StudentUpsertWithoutResultsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutResultsInput, StudentUpdateWithoutResultsInput>, StudentUncheckedUpdateWithoutResultsInput>
  }

  export type ExamUpdateOneWithoutResultsNestedInput = {
    create?: XOR<ExamCreateWithoutResultsInput, ExamUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutResultsInput
    upsert?: ExamUpsertWithoutResultsInput
    disconnect?: ExamWhereInput | boolean
    delete?: ExamWhereInput | boolean
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutResultsInput, ExamUpdateWithoutResultsInput>, ExamUncheckedUpdateWithoutResultsInput>
  }

  export type ResponseUpdateManyWithoutResultNestedInput = {
    create?: XOR<ResponseCreateWithoutResultInput, ResponseUncheckedCreateWithoutResultInput> | ResponseCreateWithoutResultInput[] | ResponseUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutResultInput | ResponseCreateOrConnectWithoutResultInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutResultInput | ResponseUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: ResponseCreateManyResultInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutResultInput | ResponseUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutResultInput | ResponseUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type ExamResponseUpdateManyWithoutResultNestedInput = {
    create?: XOR<ExamResponseCreateWithoutResultInput, ExamResponseUncheckedCreateWithoutResultInput> | ExamResponseCreateWithoutResultInput[] | ExamResponseUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ExamResponseCreateOrConnectWithoutResultInput | ExamResponseCreateOrConnectWithoutResultInput[]
    upsert?: ExamResponseUpsertWithWhereUniqueWithoutResultInput | ExamResponseUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: ExamResponseCreateManyResultInputEnvelope
    set?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    disconnect?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    delete?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    connect?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    update?: ExamResponseUpdateWithWhereUniqueWithoutResultInput | ExamResponseUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: ExamResponseUpdateManyWithWhereWithoutResultInput | ExamResponseUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: ExamResponseScalarWhereInput | ExamResponseScalarWhereInput[]
  }

  export type ResponseUncheckedUpdateManyWithoutResultNestedInput = {
    create?: XOR<ResponseCreateWithoutResultInput, ResponseUncheckedCreateWithoutResultInput> | ResponseCreateWithoutResultInput[] | ResponseUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutResultInput | ResponseCreateOrConnectWithoutResultInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutResultInput | ResponseUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: ResponseCreateManyResultInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutResultInput | ResponseUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutResultInput | ResponseUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type ExamResponseUncheckedUpdateManyWithoutResultNestedInput = {
    create?: XOR<ExamResponseCreateWithoutResultInput, ExamResponseUncheckedCreateWithoutResultInput> | ExamResponseCreateWithoutResultInput[] | ExamResponseUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ExamResponseCreateOrConnectWithoutResultInput | ExamResponseCreateOrConnectWithoutResultInput[]
    upsert?: ExamResponseUpsertWithWhereUniqueWithoutResultInput | ExamResponseUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: ExamResponseCreateManyResultInputEnvelope
    set?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    disconnect?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    delete?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    connect?: ExamResponseWhereUniqueInput | ExamResponseWhereUniqueInput[]
    update?: ExamResponseUpdateWithWhereUniqueWithoutResultInput | ExamResponseUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: ExamResponseUpdateManyWithWhereWithoutResultInput | ExamResponseUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: ExamResponseScalarWhereInput | ExamResponseScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutResponsesInput = {
    create?: XOR<QuestionCreateWithoutResponsesInput, QuestionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutResponsesInput
    connect?: QuestionWhereUniqueInput
  }

  export type ResultCreateNestedOneWithoutResponsesInput = {
    create?: XOR<ResultCreateWithoutResponsesInput, ResultUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: ResultCreateOrConnectWithoutResponsesInput
    connect?: ResultWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<QuestionCreateWithoutResponsesInput, QuestionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutResponsesInput
    upsert?: QuestionUpsertWithoutResponsesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutResponsesInput, QuestionUpdateWithoutResponsesInput>, QuestionUncheckedUpdateWithoutResponsesInput>
  }

  export type ResultUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<ResultCreateWithoutResponsesInput, ResultUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: ResultCreateOrConnectWithoutResponsesInput
    upsert?: ResultUpsertWithoutResponsesInput
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutResponsesInput, ResultUpdateWithoutResponsesInput>, ResultUncheckedUpdateWithoutResponsesInput>
  }

  export type ExamQuestionCreateNestedOneWithoutResponsesInput = {
    create?: XOR<ExamQuestionCreateWithoutResponsesInput, ExamQuestionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutResponsesInput
    connect?: ExamQuestionWhereUniqueInput
  }

  export type ResultCreateNestedOneWithoutExamResponsesInput = {
    create?: XOR<ResultCreateWithoutExamResponsesInput, ResultUncheckedCreateWithoutExamResponsesInput>
    connectOrCreate?: ResultCreateOrConnectWithoutExamResponsesInput
    connect?: ResultWhereUniqueInput
  }

  export type ExamQuestionUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<ExamQuestionCreateWithoutResponsesInput, ExamQuestionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutResponsesInput
    upsert?: ExamQuestionUpsertWithoutResponsesInput
    connect?: ExamQuestionWhereUniqueInput
    update?: XOR<XOR<ExamQuestionUpdateToOneWithWhereWithoutResponsesInput, ExamQuestionUpdateWithoutResponsesInput>, ExamQuestionUncheckedUpdateWithoutResponsesInput>
  }

  export type ResultUpdateOneRequiredWithoutExamResponsesNestedInput = {
    create?: XOR<ResultCreateWithoutExamResponsesInput, ResultUncheckedCreateWithoutExamResponsesInput>
    connectOrCreate?: ResultCreateOrConnectWithoutExamResponsesInput
    upsert?: ResultUpsertWithoutExamResponsesInput
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutExamResponsesInput, ResultUpdateWithoutExamResponsesInput>, ResultUncheckedUpdateWithoutExamResponsesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ResultCreateWithoutStudentInput = {
    id?: string
    examType?: string
    marksMath?: number
    marksPhy?: number
    marksChem?: number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: number
    rank?: number | null
    tabSwitchCount?: number
    completedAt?: Date | string
    exam?: ExamCreateNestedOneWithoutResultsInput
    responses?: ResponseCreateNestedManyWithoutResultInput
    examResponses?: ExamResponseCreateNestedManyWithoutResultInput
  }

  export type ResultUncheckedCreateWithoutStudentInput = {
    id?: string
    examId?: string | null
    examType?: string
    marksMath?: number
    marksPhy?: number
    marksChem?: number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: number
    rank?: number | null
    tabSwitchCount?: number
    completedAt?: Date | string
    responses?: ResponseUncheckedCreateNestedManyWithoutResultInput
    examResponses?: ExamResponseUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultCreateOrConnectWithoutStudentInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput>
  }

  export type ResultCreateManyStudentInputEnvelope = {
    data: ResultCreateManyStudentInput | ResultCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ResultUpsertWithWhereUniqueWithoutStudentInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutStudentInput, ResultUncheckedUpdateWithoutStudentInput>
    create: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutStudentInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutStudentInput, ResultUncheckedUpdateWithoutStudentInput>
  }

  export type ResultUpdateManyWithWhereWithoutStudentInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutStudentInput>
  }

  export type ResultScalarWhereInput = {
    AND?: ResultScalarWhereInput | ResultScalarWhereInput[]
    OR?: ResultScalarWhereInput[]
    NOT?: ResultScalarWhereInput | ResultScalarWhereInput[]
    id?: StringFilter<"Result"> | string
    studentId?: StringFilter<"Result"> | string
    examId?: StringNullableFilter<"Result"> | string | null
    examType?: StringFilter<"Result"> | string
    marksMath?: IntFilter<"Result"> | number
    marksPhy?: IntFilter<"Result"> | number
    marksChem?: IntFilter<"Result"> | number
    sectionScores?: JsonNullableFilter<"Result">
    totalMarks?: IntFilter<"Result"> | number
    rank?: IntNullableFilter<"Result"> | number | null
    tabSwitchCount?: IntFilter<"Result"> | number
    completedAt?: DateTimeFilter<"Result"> | Date | string
  }

  export type ExamQuestionCreateWithoutExamInput = {
    id?: string
    text: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    difficulty?: string
    orderIndex?: number
    responses?: ExamResponseCreateNestedManyWithoutExamQuestionInput
  }

  export type ExamQuestionUncheckedCreateWithoutExamInput = {
    id?: string
    text: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    difficulty?: string
    orderIndex?: number
    responses?: ExamResponseUncheckedCreateNestedManyWithoutExamQuestionInput
  }

  export type ExamQuestionCreateOrConnectWithoutExamInput = {
    where: ExamQuestionWhereUniqueInput
    create: XOR<ExamQuestionCreateWithoutExamInput, ExamQuestionUncheckedCreateWithoutExamInput>
  }

  export type ExamQuestionCreateManyExamInputEnvelope = {
    data: ExamQuestionCreateManyExamInput | ExamQuestionCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type ResultCreateWithoutExamInput = {
    id?: string
    examType?: string
    marksMath?: number
    marksPhy?: number
    marksChem?: number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: number
    rank?: number | null
    tabSwitchCount?: number
    completedAt?: Date | string
    student: StudentCreateNestedOneWithoutResultsInput
    responses?: ResponseCreateNestedManyWithoutResultInput
    examResponses?: ExamResponseCreateNestedManyWithoutResultInput
  }

  export type ResultUncheckedCreateWithoutExamInput = {
    id?: string
    studentId: string
    examType?: string
    marksMath?: number
    marksPhy?: number
    marksChem?: number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: number
    rank?: number | null
    tabSwitchCount?: number
    completedAt?: Date | string
    responses?: ResponseUncheckedCreateNestedManyWithoutResultInput
    examResponses?: ExamResponseUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultCreateOrConnectWithoutExamInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutExamInput, ResultUncheckedCreateWithoutExamInput>
  }

  export type ResultCreateManyExamInputEnvelope = {
    data: ResultCreateManyExamInput | ResultCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type ExamQuestionUpsertWithWhereUniqueWithoutExamInput = {
    where: ExamQuestionWhereUniqueInput
    update: XOR<ExamQuestionUpdateWithoutExamInput, ExamQuestionUncheckedUpdateWithoutExamInput>
    create: XOR<ExamQuestionCreateWithoutExamInput, ExamQuestionUncheckedCreateWithoutExamInput>
  }

  export type ExamQuestionUpdateWithWhereUniqueWithoutExamInput = {
    where: ExamQuestionWhereUniqueInput
    data: XOR<ExamQuestionUpdateWithoutExamInput, ExamQuestionUncheckedUpdateWithoutExamInput>
  }

  export type ExamQuestionUpdateManyWithWhereWithoutExamInput = {
    where: ExamQuestionScalarWhereInput
    data: XOR<ExamQuestionUpdateManyMutationInput, ExamQuestionUncheckedUpdateManyWithoutExamInput>
  }

  export type ExamQuestionScalarWhereInput = {
    AND?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
    OR?: ExamQuestionScalarWhereInput[]
    NOT?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
    id?: StringFilter<"ExamQuestion"> | string
    examId?: StringFilter<"ExamQuestion"> | string
    text?: StringFilter<"ExamQuestion"> | string
    imageUrl?: StringNullableFilter<"ExamQuestion"> | string | null
    optionA?: StringFilter<"ExamQuestion"> | string
    optionB?: StringFilter<"ExamQuestion"> | string
    optionC?: StringFilter<"ExamQuestion"> | string
    optionD?: StringFilter<"ExamQuestion"> | string
    correctOption?: StringFilter<"ExamQuestion"> | string
    subject?: StringFilter<"ExamQuestion"> | string
    difficulty?: StringFilter<"ExamQuestion"> | string
    orderIndex?: IntFilter<"ExamQuestion"> | number
  }

  export type ResultUpsertWithWhereUniqueWithoutExamInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutExamInput, ResultUncheckedUpdateWithoutExamInput>
    create: XOR<ResultCreateWithoutExamInput, ResultUncheckedCreateWithoutExamInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutExamInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutExamInput, ResultUncheckedUpdateWithoutExamInput>
  }

  export type ResultUpdateManyWithWhereWithoutExamInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutExamInput>
  }

  export type ExamCreateWithoutQuestionsInput = {
    id?: string
    title: string
    subject: string
    topic?: string | null
    examType?: string
    difficulty?: string
    marksPerQuestion?: number
    negativeMarking?: number
    durationMinutes?: number
    isLive?: boolean
    isDemo?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    results?: ResultCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    subject: string
    topic?: string | null
    examType?: string
    difficulty?: string
    marksPerQuestion?: number
    negativeMarking?: number
    durationMinutes?: number
    isLive?: boolean
    isDemo?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    results?: ResultUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutQuestionsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
  }

  export type ExamResponseCreateWithoutExamQuestionInput = {
    id?: string
    answer?: string | null
    isCorrect?: boolean
    result: ResultCreateNestedOneWithoutExamResponsesInput
  }

  export type ExamResponseUncheckedCreateWithoutExamQuestionInput = {
    id?: string
    resultId: string
    answer?: string | null
    isCorrect?: boolean
  }

  export type ExamResponseCreateOrConnectWithoutExamQuestionInput = {
    where: ExamResponseWhereUniqueInput
    create: XOR<ExamResponseCreateWithoutExamQuestionInput, ExamResponseUncheckedCreateWithoutExamQuestionInput>
  }

  export type ExamResponseCreateManyExamQuestionInputEnvelope = {
    data: ExamResponseCreateManyExamQuestionInput | ExamResponseCreateManyExamQuestionInput[]
    skipDuplicates?: boolean
  }

  export type ExamUpsertWithoutQuestionsInput = {
    update: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type ExamUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    marksPerQuestion?: FloatFieldUpdateOperationsInput | number
    negativeMarking?: FloatFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isLive?: BoolFieldUpdateOperationsInput | boolean
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    marksPerQuestion?: FloatFieldUpdateOperationsInput | number
    negativeMarking?: FloatFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isLive?: BoolFieldUpdateOperationsInput | boolean
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamResponseUpsertWithWhereUniqueWithoutExamQuestionInput = {
    where: ExamResponseWhereUniqueInput
    update: XOR<ExamResponseUpdateWithoutExamQuestionInput, ExamResponseUncheckedUpdateWithoutExamQuestionInput>
    create: XOR<ExamResponseCreateWithoutExamQuestionInput, ExamResponseUncheckedCreateWithoutExamQuestionInput>
  }

  export type ExamResponseUpdateWithWhereUniqueWithoutExamQuestionInput = {
    where: ExamResponseWhereUniqueInput
    data: XOR<ExamResponseUpdateWithoutExamQuestionInput, ExamResponseUncheckedUpdateWithoutExamQuestionInput>
  }

  export type ExamResponseUpdateManyWithWhereWithoutExamQuestionInput = {
    where: ExamResponseScalarWhereInput
    data: XOR<ExamResponseUpdateManyMutationInput, ExamResponseUncheckedUpdateManyWithoutExamQuestionInput>
  }

  export type ExamResponseScalarWhereInput = {
    AND?: ExamResponseScalarWhereInput | ExamResponseScalarWhereInput[]
    OR?: ExamResponseScalarWhereInput[]
    NOT?: ExamResponseScalarWhereInput | ExamResponseScalarWhereInput[]
    id?: StringFilter<"ExamResponse"> | string
    resultId?: StringFilter<"ExamResponse"> | string
    examQuestionId?: StringFilter<"ExamResponse"> | string
    answer?: StringNullableFilter<"ExamResponse"> | string | null
    isCorrect?: BoolFilter<"ExamResponse"> | boolean
  }

  export type ResponseCreateWithoutQuestionInput = {
    id?: string
    answer?: string | null
    isCorrect?: boolean
    result: ResultCreateNestedOneWithoutResponsesInput
  }

  export type ResponseUncheckedCreateWithoutQuestionInput = {
    id?: string
    resultId: string
    answer?: string | null
    isCorrect?: boolean
  }

  export type ResponseCreateOrConnectWithoutQuestionInput = {
    where: ResponseWhereUniqueInput
    create: XOR<ResponseCreateWithoutQuestionInput, ResponseUncheckedCreateWithoutQuestionInput>
  }

  export type ResponseCreateManyQuestionInputEnvelope = {
    data: ResponseCreateManyQuestionInput | ResponseCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type ResponseUpsertWithWhereUniqueWithoutQuestionInput = {
    where: ResponseWhereUniqueInput
    update: XOR<ResponseUpdateWithoutQuestionInput, ResponseUncheckedUpdateWithoutQuestionInput>
    create: XOR<ResponseCreateWithoutQuestionInput, ResponseUncheckedCreateWithoutQuestionInput>
  }

  export type ResponseUpdateWithWhereUniqueWithoutQuestionInput = {
    where: ResponseWhereUniqueInput
    data: XOR<ResponseUpdateWithoutQuestionInput, ResponseUncheckedUpdateWithoutQuestionInput>
  }

  export type ResponseUpdateManyWithWhereWithoutQuestionInput = {
    where: ResponseScalarWhereInput
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyWithoutQuestionInput>
  }

  export type ResponseScalarWhereInput = {
    AND?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
    OR?: ResponseScalarWhereInput[]
    NOT?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
    id?: StringFilter<"Response"> | string
    resultId?: StringFilter<"Response"> | string
    questionId?: StringFilter<"Response"> | string
    answer?: StringNullableFilter<"Response"> | string | null
    isCorrect?: BoolFilter<"Response"> | boolean
  }

  export type StudentCreateWithoutResultsInput = {
    id?: string
    name: string
    parentMobile: string
    collegeName: string
    pucRollNumber: string
    createdAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type StudentUncheckedCreateWithoutResultsInput = {
    id?: string
    name: string
    parentMobile: string
    collegeName: string
    pucRollNumber: string
    createdAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type StudentCreateOrConnectWithoutResultsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutResultsInput, StudentUncheckedCreateWithoutResultsInput>
  }

  export type ExamCreateWithoutResultsInput = {
    id?: string
    title: string
    subject: string
    topic?: string | null
    examType?: string
    difficulty?: string
    marksPerQuestion?: number
    negativeMarking?: number
    durationMinutes?: number
    isLive?: boolean
    isDemo?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    questions?: ExamQuestionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutResultsInput = {
    id?: string
    title: string
    subject: string
    topic?: string | null
    examType?: string
    difficulty?: string
    marksPerQuestion?: number
    negativeMarking?: number
    durationMinutes?: number
    isLive?: boolean
    isDemo?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    questions?: ExamQuestionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutResultsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutResultsInput, ExamUncheckedCreateWithoutResultsInput>
  }

  export type ResponseCreateWithoutResultInput = {
    id?: string
    answer?: string | null
    isCorrect?: boolean
    question: QuestionCreateNestedOneWithoutResponsesInput
  }

  export type ResponseUncheckedCreateWithoutResultInput = {
    id?: string
    questionId: string
    answer?: string | null
    isCorrect?: boolean
  }

  export type ResponseCreateOrConnectWithoutResultInput = {
    where: ResponseWhereUniqueInput
    create: XOR<ResponseCreateWithoutResultInput, ResponseUncheckedCreateWithoutResultInput>
  }

  export type ResponseCreateManyResultInputEnvelope = {
    data: ResponseCreateManyResultInput | ResponseCreateManyResultInput[]
    skipDuplicates?: boolean
  }

  export type ExamResponseCreateWithoutResultInput = {
    id?: string
    answer?: string | null
    isCorrect?: boolean
    examQuestion: ExamQuestionCreateNestedOneWithoutResponsesInput
  }

  export type ExamResponseUncheckedCreateWithoutResultInput = {
    id?: string
    examQuestionId: string
    answer?: string | null
    isCorrect?: boolean
  }

  export type ExamResponseCreateOrConnectWithoutResultInput = {
    where: ExamResponseWhereUniqueInput
    create: XOR<ExamResponseCreateWithoutResultInput, ExamResponseUncheckedCreateWithoutResultInput>
  }

  export type ExamResponseCreateManyResultInputEnvelope = {
    data: ExamResponseCreateManyResultInput | ExamResponseCreateManyResultInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutResultsInput = {
    update: XOR<StudentUpdateWithoutResultsInput, StudentUncheckedUpdateWithoutResultsInput>
    create: XOR<StudentCreateWithoutResultsInput, StudentUncheckedCreateWithoutResultsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutResultsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutResultsInput, StudentUncheckedUpdateWithoutResultsInput>
  }

  export type StudentUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentMobile?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    pucRollNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentMobile?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    pucRollNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExamUpsertWithoutResultsInput = {
    update: XOR<ExamUpdateWithoutResultsInput, ExamUncheckedUpdateWithoutResultsInput>
    create: XOR<ExamCreateWithoutResultsInput, ExamUncheckedCreateWithoutResultsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutResultsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutResultsInput, ExamUncheckedUpdateWithoutResultsInput>
  }

  export type ExamUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    marksPerQuestion?: FloatFieldUpdateOperationsInput | number
    negativeMarking?: FloatFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isLive?: BoolFieldUpdateOperationsInput | boolean
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: ExamQuestionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    marksPerQuestion?: FloatFieldUpdateOperationsInput | number
    negativeMarking?: FloatFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isLive?: BoolFieldUpdateOperationsInput | boolean
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: ExamQuestionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ResponseUpsertWithWhereUniqueWithoutResultInput = {
    where: ResponseWhereUniqueInput
    update: XOR<ResponseUpdateWithoutResultInput, ResponseUncheckedUpdateWithoutResultInput>
    create: XOR<ResponseCreateWithoutResultInput, ResponseUncheckedCreateWithoutResultInput>
  }

  export type ResponseUpdateWithWhereUniqueWithoutResultInput = {
    where: ResponseWhereUniqueInput
    data: XOR<ResponseUpdateWithoutResultInput, ResponseUncheckedUpdateWithoutResultInput>
  }

  export type ResponseUpdateManyWithWhereWithoutResultInput = {
    where: ResponseScalarWhereInput
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyWithoutResultInput>
  }

  export type ExamResponseUpsertWithWhereUniqueWithoutResultInput = {
    where: ExamResponseWhereUniqueInput
    update: XOR<ExamResponseUpdateWithoutResultInput, ExamResponseUncheckedUpdateWithoutResultInput>
    create: XOR<ExamResponseCreateWithoutResultInput, ExamResponseUncheckedCreateWithoutResultInput>
  }

  export type ExamResponseUpdateWithWhereUniqueWithoutResultInput = {
    where: ExamResponseWhereUniqueInput
    data: XOR<ExamResponseUpdateWithoutResultInput, ExamResponseUncheckedUpdateWithoutResultInput>
  }

  export type ExamResponseUpdateManyWithWhereWithoutResultInput = {
    where: ExamResponseScalarWhereInput
    data: XOR<ExamResponseUpdateManyMutationInput, ExamResponseUncheckedUpdateManyWithoutResultInput>
  }

  export type QuestionCreateWithoutResponsesInput = {
    id?: string
    text: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    examType?: string
    createdAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutResponsesInput = {
    id?: string
    text: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    examType?: string
    createdAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutResponsesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutResponsesInput, QuestionUncheckedCreateWithoutResponsesInput>
  }

  export type ResultCreateWithoutResponsesInput = {
    id?: string
    examType?: string
    marksMath?: number
    marksPhy?: number
    marksChem?: number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: number
    rank?: number | null
    tabSwitchCount?: number
    completedAt?: Date | string
    student: StudentCreateNestedOneWithoutResultsInput
    exam?: ExamCreateNestedOneWithoutResultsInput
    examResponses?: ExamResponseCreateNestedManyWithoutResultInput
  }

  export type ResultUncheckedCreateWithoutResponsesInput = {
    id?: string
    studentId: string
    examId?: string | null
    examType?: string
    marksMath?: number
    marksPhy?: number
    marksChem?: number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: number
    rank?: number | null
    tabSwitchCount?: number
    completedAt?: Date | string
    examResponses?: ExamResponseUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultCreateOrConnectWithoutResponsesInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutResponsesInput, ResultUncheckedCreateWithoutResponsesInput>
  }

  export type QuestionUpsertWithoutResponsesInput = {
    update: XOR<QuestionUpdateWithoutResponsesInput, QuestionUncheckedUpdateWithoutResponsesInput>
    create: XOR<QuestionCreateWithoutResponsesInput, QuestionUncheckedCreateWithoutResponsesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutResponsesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutResponsesInput, QuestionUncheckedUpdateWithoutResponsesInput>
  }

  export type QuestionUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUpsertWithoutResponsesInput = {
    update: XOR<ResultUpdateWithoutResponsesInput, ResultUncheckedUpdateWithoutResponsesInput>
    create: XOR<ResultCreateWithoutResponsesInput, ResultUncheckedCreateWithoutResponsesInput>
    where?: ResultWhereInput
  }

  export type ResultUpdateToOneWithWhereWithoutResponsesInput = {
    where?: ResultWhereInput
    data: XOR<ResultUpdateWithoutResponsesInput, ResultUncheckedUpdateWithoutResponsesInput>
  }

  export type ResultUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutResultsNestedInput
    exam?: ExamUpdateOneWithoutResultsNestedInput
    examResponses?: ExamResponseUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examResponses?: ExamResponseUncheckedUpdateManyWithoutResultNestedInput
  }

  export type ExamQuestionCreateWithoutResponsesInput = {
    id?: string
    text: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    difficulty?: string
    orderIndex?: number
    exam: ExamCreateNestedOneWithoutQuestionsInput
  }

  export type ExamQuestionUncheckedCreateWithoutResponsesInput = {
    id?: string
    examId: string
    text: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    difficulty?: string
    orderIndex?: number
  }

  export type ExamQuestionCreateOrConnectWithoutResponsesInput = {
    where: ExamQuestionWhereUniqueInput
    create: XOR<ExamQuestionCreateWithoutResponsesInput, ExamQuestionUncheckedCreateWithoutResponsesInput>
  }

  export type ResultCreateWithoutExamResponsesInput = {
    id?: string
    examType?: string
    marksMath?: number
    marksPhy?: number
    marksChem?: number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: number
    rank?: number | null
    tabSwitchCount?: number
    completedAt?: Date | string
    student: StudentCreateNestedOneWithoutResultsInput
    exam?: ExamCreateNestedOneWithoutResultsInput
    responses?: ResponseCreateNestedManyWithoutResultInput
  }

  export type ResultUncheckedCreateWithoutExamResponsesInput = {
    id?: string
    studentId: string
    examId?: string | null
    examType?: string
    marksMath?: number
    marksPhy?: number
    marksChem?: number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: number
    rank?: number | null
    tabSwitchCount?: number
    completedAt?: Date | string
    responses?: ResponseUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultCreateOrConnectWithoutExamResponsesInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutExamResponsesInput, ResultUncheckedCreateWithoutExamResponsesInput>
  }

  export type ExamQuestionUpsertWithoutResponsesInput = {
    update: XOR<ExamQuestionUpdateWithoutResponsesInput, ExamQuestionUncheckedUpdateWithoutResponsesInput>
    create: XOR<ExamQuestionCreateWithoutResponsesInput, ExamQuestionUncheckedCreateWithoutResponsesInput>
    where?: ExamQuestionWhereInput
  }

  export type ExamQuestionUpdateToOneWithWhereWithoutResponsesInput = {
    where?: ExamQuestionWhereInput
    data: XOR<ExamQuestionUpdateWithoutResponsesInput, ExamQuestionUncheckedUpdateWithoutResponsesInput>
  }

  export type ExamQuestionUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type ExamQuestionUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type ResultUpsertWithoutExamResponsesInput = {
    update: XOR<ResultUpdateWithoutExamResponsesInput, ResultUncheckedUpdateWithoutExamResponsesInput>
    create: XOR<ResultCreateWithoutExamResponsesInput, ResultUncheckedCreateWithoutExamResponsesInput>
    where?: ResultWhereInput
  }

  export type ResultUpdateToOneWithWhereWithoutExamResponsesInput = {
    where?: ResultWhereInput
    data: XOR<ResultUpdateWithoutExamResponsesInput, ResultUncheckedUpdateWithoutExamResponsesInput>
  }

  export type ResultUpdateWithoutExamResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutResultsNestedInput
    exam?: ExamUpdateOneWithoutResultsNestedInput
    responses?: ResponseUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateWithoutExamResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ResponseUncheckedUpdateManyWithoutResultNestedInput
  }

  export type ResultCreateManyStudentInput = {
    id?: string
    examId?: string | null
    examType?: string
    marksMath?: number
    marksPhy?: number
    marksChem?: number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: number
    rank?: number | null
    tabSwitchCount?: number
    completedAt?: Date | string
  }

  export type ResultUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: ExamUpdateOneWithoutResultsNestedInput
    responses?: ResponseUpdateManyWithoutResultNestedInput
    examResponses?: ExamResponseUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ResponseUncheckedUpdateManyWithoutResultNestedInput
    examResponses?: ExamResponseUncheckedUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamQuestionCreateManyExamInput = {
    id?: string
    text: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: string
    subject: string
    difficulty?: string
    orderIndex?: number
  }

  export type ResultCreateManyExamInput = {
    id?: string
    studentId: string
    examType?: string
    marksMath?: number
    marksPhy?: number
    marksChem?: number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: number
    rank?: number | null
    tabSwitchCount?: number
    completedAt?: Date | string
  }

  export type ExamQuestionUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    responses?: ExamResponseUpdateManyWithoutExamQuestionNestedInput
  }

  export type ExamQuestionUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    responses?: ExamResponseUncheckedUpdateManyWithoutExamQuestionNestedInput
  }

  export type ExamQuestionUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type ResultUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutResultsNestedInput
    responses?: ResponseUpdateManyWithoutResultNestedInput
    examResponses?: ExamResponseUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ResponseUncheckedUpdateManyWithoutResultNestedInput
    examResponses?: ExamResponseUncheckedUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    marksMath?: IntFieldUpdateOperationsInput | number
    marksPhy?: IntFieldUpdateOperationsInput | number
    marksChem?: IntFieldUpdateOperationsInput | number
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    totalMarks?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    tabSwitchCount?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamResponseCreateManyExamQuestionInput = {
    id?: string
    resultId: string
    answer?: string | null
    isCorrect?: boolean
  }

  export type ExamResponseUpdateWithoutExamQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    result?: ResultUpdateOneRequiredWithoutExamResponsesNestedInput
  }

  export type ExamResponseUncheckedUpdateWithoutExamQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamResponseUncheckedUpdateManyWithoutExamQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResponseCreateManyQuestionInput = {
    id?: string
    resultId: string
    answer?: string | null
    isCorrect?: boolean
  }

  export type ResponseUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    result?: ResultUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ResponseUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResponseUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResponseCreateManyResultInput = {
    id?: string
    questionId: string
    answer?: string | null
    isCorrect?: boolean
  }

  export type ExamResponseCreateManyResultInput = {
    id?: string
    examQuestionId: string
    answer?: string | null
    isCorrect?: boolean
  }

  export type ResponseUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ResponseUncheckedUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResponseUncheckedUpdateManyWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamResponseUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    examQuestion?: ExamQuestionUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ExamResponseUncheckedUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    examQuestionId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamResponseUncheckedUpdateManyWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    examQuestionId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StudentCountOutputTypeDefaultArgs instead
     */
    export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamCountOutputTypeDefaultArgs instead
     */
    export type ExamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamQuestionCountOutputTypeDefaultArgs instead
     */
    export type ExamQuestionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamQuestionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionCountOutputTypeDefaultArgs instead
     */
    export type QuestionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResultCountOutputTypeDefaultArgs instead
     */
    export type ResultCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResultCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentDefaultArgs instead
     */
    export type StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamDefaultArgs instead
     */
    export type ExamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamQuestionDefaultArgs instead
     */
    export type ExamQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamQuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionDefaultArgs instead
     */
    export type QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResultDefaultArgs instead
     */
    export type ResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResultDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResponseDefaultArgs instead
     */
    export type ResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResponseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamResponseDefaultArgs instead
     */
    export type ExamResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamResponseDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}