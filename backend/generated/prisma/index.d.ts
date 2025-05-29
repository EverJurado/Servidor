
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
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model eventos
 * 
 */
export type eventos = $Result.DefaultSelection<Prisma.$eventosPayload>
/**
 * Model expositores
 * 
 */
export type expositores = $Result.DefaultSelection<Prisma.$expositoresPayload>
/**
 * Model eventos_expositores
 * 
 */
export type eventos_expositores = $Result.DefaultSelection<Prisma.$eventos_expositoresPayload>
/**
 * Model patrocinadores
 * 
 */
export type patrocinadores = $Result.DefaultSelection<Prisma.$patrocinadoresPayload>
/**
 * Model eventos_patrocinadores
 * 
 */
export type eventos_patrocinadores = $Result.DefaultSelection<Prisma.$eventos_patrocinadoresPayload>
/**
 * Model agenda
 * 
 */
export type agenda = $Result.DefaultSelection<Prisma.$agendaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuarios.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuarios.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventos`: Exposes CRUD operations for the **eventos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.eventos.findMany()
    * ```
    */
  get eventos(): Prisma.eventosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expositores`: Exposes CRUD operations for the **expositores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expositores
    * const expositores = await prisma.expositores.findMany()
    * ```
    */
  get expositores(): Prisma.expositoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventos_expositores`: Exposes CRUD operations for the **eventos_expositores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos_expositores
    * const eventos_expositores = await prisma.eventos_expositores.findMany()
    * ```
    */
  get eventos_expositores(): Prisma.eventos_expositoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patrocinadores`: Exposes CRUD operations for the **patrocinadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patrocinadores
    * const patrocinadores = await prisma.patrocinadores.findMany()
    * ```
    */
  get patrocinadores(): Prisma.patrocinadoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventos_patrocinadores`: Exposes CRUD operations for the **eventos_patrocinadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos_patrocinadores
    * const eventos_patrocinadores = await prisma.eventos_patrocinadores.findMany()
    * ```
    */
  get eventos_patrocinadores(): Prisma.eventos_patrocinadoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agenda`: Exposes CRUD operations for the **agenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agenda
    * const agenda = await prisma.agenda.findMany()
    * ```
    */
  get agenda(): Prisma.agendaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    usuarios: 'usuarios',
    eventos: 'eventos',
    expositores: 'expositores',
    eventos_expositores: 'eventos_expositores',
    patrocinadores: 'patrocinadores',
    eventos_patrocinadores: 'eventos_patrocinadores',
    agenda: 'agenda'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuarios" | "eventos" | "expositores" | "eventos_expositores" | "patrocinadores" | "eventos_patrocinadores" | "agenda"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      eventos: {
        payload: Prisma.$eventosPayload<ExtArgs>
        fields: Prisma.eventosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          findFirst: {
            args: Prisma.eventosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          findMany: {
            args: Prisma.eventosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>[]
          }
          create: {
            args: Prisma.eventosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          createMany: {
            args: Prisma.eventosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>[]
          }
          delete: {
            args: Prisma.eventosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          update: {
            args: Prisma.eventosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          deleteMany: {
            args: Prisma.eventosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>[]
          }
          upsert: {
            args: Prisma.eventosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          aggregate: {
            args: Prisma.EventosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos>
          }
          groupBy: {
            args: Prisma.eventosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventosGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventosCountArgs<ExtArgs>
            result: $Utils.Optional<EventosCountAggregateOutputType> | number
          }
        }
      }
      expositores: {
        payload: Prisma.$expositoresPayload<ExtArgs>
        fields: Prisma.expositoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expositoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expositoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expositoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expositoresPayload>
          }
          findFirst: {
            args: Prisma.expositoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expositoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expositoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expositoresPayload>
          }
          findMany: {
            args: Prisma.expositoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expositoresPayload>[]
          }
          create: {
            args: Prisma.expositoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expositoresPayload>
          }
          createMany: {
            args: Prisma.expositoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.expositoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expositoresPayload>[]
          }
          delete: {
            args: Prisma.expositoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expositoresPayload>
          }
          update: {
            args: Prisma.expositoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expositoresPayload>
          }
          deleteMany: {
            args: Prisma.expositoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expositoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.expositoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expositoresPayload>[]
          }
          upsert: {
            args: Prisma.expositoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expositoresPayload>
          }
          aggregate: {
            args: Prisma.ExpositoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpositores>
          }
          groupBy: {
            args: Prisma.expositoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpositoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.expositoresCountArgs<ExtArgs>
            result: $Utils.Optional<ExpositoresCountAggregateOutputType> | number
          }
        }
      }
      eventos_expositores: {
        payload: Prisma.$eventos_expositoresPayload<ExtArgs>
        fields: Prisma.eventos_expositoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventos_expositoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_expositoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventos_expositoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_expositoresPayload>
          }
          findFirst: {
            args: Prisma.eventos_expositoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_expositoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventos_expositoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_expositoresPayload>
          }
          findMany: {
            args: Prisma.eventos_expositoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_expositoresPayload>[]
          }
          create: {
            args: Prisma.eventos_expositoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_expositoresPayload>
          }
          createMany: {
            args: Prisma.eventos_expositoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventos_expositoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_expositoresPayload>[]
          }
          delete: {
            args: Prisma.eventos_expositoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_expositoresPayload>
          }
          update: {
            args: Prisma.eventos_expositoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_expositoresPayload>
          }
          deleteMany: {
            args: Prisma.eventos_expositoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventos_expositoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventos_expositoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_expositoresPayload>[]
          }
          upsert: {
            args: Prisma.eventos_expositoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_expositoresPayload>
          }
          aggregate: {
            args: Prisma.Eventos_expositoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos_expositores>
          }
          groupBy: {
            args: Prisma.eventos_expositoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Eventos_expositoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventos_expositoresCountArgs<ExtArgs>
            result: $Utils.Optional<Eventos_expositoresCountAggregateOutputType> | number
          }
        }
      }
      patrocinadores: {
        payload: Prisma.$patrocinadoresPayload<ExtArgs>
        fields: Prisma.patrocinadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.patrocinadoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patrocinadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.patrocinadoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patrocinadoresPayload>
          }
          findFirst: {
            args: Prisma.patrocinadoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patrocinadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.patrocinadoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patrocinadoresPayload>
          }
          findMany: {
            args: Prisma.patrocinadoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patrocinadoresPayload>[]
          }
          create: {
            args: Prisma.patrocinadoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patrocinadoresPayload>
          }
          createMany: {
            args: Prisma.patrocinadoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.patrocinadoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patrocinadoresPayload>[]
          }
          delete: {
            args: Prisma.patrocinadoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patrocinadoresPayload>
          }
          update: {
            args: Prisma.patrocinadoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patrocinadoresPayload>
          }
          deleteMany: {
            args: Prisma.patrocinadoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.patrocinadoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.patrocinadoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patrocinadoresPayload>[]
          }
          upsert: {
            args: Prisma.patrocinadoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patrocinadoresPayload>
          }
          aggregate: {
            args: Prisma.PatrocinadoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatrocinadores>
          }
          groupBy: {
            args: Prisma.patrocinadoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatrocinadoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.patrocinadoresCountArgs<ExtArgs>
            result: $Utils.Optional<PatrocinadoresCountAggregateOutputType> | number
          }
        }
      }
      eventos_patrocinadores: {
        payload: Prisma.$eventos_patrocinadoresPayload<ExtArgs>
        fields: Prisma.eventos_patrocinadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventos_patrocinadoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_patrocinadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventos_patrocinadoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_patrocinadoresPayload>
          }
          findFirst: {
            args: Prisma.eventos_patrocinadoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_patrocinadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventos_patrocinadoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_patrocinadoresPayload>
          }
          findMany: {
            args: Prisma.eventos_patrocinadoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_patrocinadoresPayload>[]
          }
          create: {
            args: Prisma.eventos_patrocinadoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_patrocinadoresPayload>
          }
          createMany: {
            args: Prisma.eventos_patrocinadoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventos_patrocinadoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_patrocinadoresPayload>[]
          }
          delete: {
            args: Prisma.eventos_patrocinadoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_patrocinadoresPayload>
          }
          update: {
            args: Prisma.eventos_patrocinadoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_patrocinadoresPayload>
          }
          deleteMany: {
            args: Prisma.eventos_patrocinadoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventos_patrocinadoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventos_patrocinadoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_patrocinadoresPayload>[]
          }
          upsert: {
            args: Prisma.eventos_patrocinadoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_patrocinadoresPayload>
          }
          aggregate: {
            args: Prisma.Eventos_patrocinadoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos_patrocinadores>
          }
          groupBy: {
            args: Prisma.eventos_patrocinadoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Eventos_patrocinadoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventos_patrocinadoresCountArgs<ExtArgs>
            result: $Utils.Optional<Eventos_patrocinadoresCountAggregateOutputType> | number
          }
        }
      }
      agenda: {
        payload: Prisma.$agendaPayload<ExtArgs>
        fields: Prisma.agendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          findFirst: {
            args: Prisma.agendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          findMany: {
            args: Prisma.agendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>[]
          }
          create: {
            args: Prisma.agendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          createMany: {
            args: Prisma.agendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.agendaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>[]
          }
          delete: {
            args: Prisma.agendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          update: {
            args: Prisma.agendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          deleteMany: {
            args: Prisma.agendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.agendaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>[]
          }
          upsert: {
            args: Prisma.agendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          aggregate: {
            args: Prisma.AgendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgenda>
          }
          groupBy: {
            args: Prisma.agendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.agendaCountArgs<ExtArgs>
            result: $Utils.Optional<AgendaCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuarios?: usuariosOmit
    eventos?: eventosOmit
    expositores?: expositoresOmit
    eventos_expositores?: eventos_expositoresOmit
    patrocinadores?: patrocinadoresOmit
    eventos_patrocinadores?: eventos_patrocinadoresOmit
    agenda?: agendaOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    agenda: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | UsuariosCountOutputTypeCountAgendaArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountAgendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendaWhereInput
  }


  /**
   * Count Type EventosCountOutputType
   */

  export type EventosCountOutputType = {
    agenda: number
    expositores: number
    patrocinadores: number
  }

  export type EventosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | EventosCountOutputTypeCountAgendaArgs
    expositores?: boolean | EventosCountOutputTypeCountExpositoresArgs
    patrocinadores?: boolean | EventosCountOutputTypeCountPatrocinadoresArgs
  }

  // Custom InputTypes
  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventosCountOutputType
     */
    select?: EventosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountAgendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendaWhereInput
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountExpositoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventos_expositoresWhereInput
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountPatrocinadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventos_patrocinadoresWhereInput
  }


  /**
   * Count Type ExpositoresCountOutputType
   */

  export type ExpositoresCountOutputType = {
    eventos: number
  }

  export type ExpositoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | ExpositoresCountOutputTypeCountEventosArgs
  }

  // Custom InputTypes
  /**
   * ExpositoresCountOutputType without action
   */
  export type ExpositoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpositoresCountOutputType
     */
    select?: ExpositoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpositoresCountOutputType without action
   */
  export type ExpositoresCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventos_expositoresWhereInput
  }


  /**
   * Count Type PatrocinadoresCountOutputType
   */

  export type PatrocinadoresCountOutputType = {
    eventos: number
  }

  export type PatrocinadoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | PatrocinadoresCountOutputTypeCountEventosArgs
  }

  // Custom InputTypes
  /**
   * PatrocinadoresCountOutputType without action
   */
  export type PatrocinadoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatrocinadoresCountOutputType
     */
    select?: PatrocinadoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatrocinadoresCountOutputType without action
   */
  export type PatrocinadoresCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventos_patrocinadoresWhereInput
  }


  /**
   * Models
   */

  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
    telefono: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
    telefono: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    rol: string | null
    nombre: string | null
    apellidopaterno: string | null
    apellidomaterno: string | null
    email: string | null
    contrasena: string | null
    foto: string | null
    telefono: number | null
    pais: string | null
    ciudad: string | null
    genero: string | null
    fechacreacion: Date | null
    verificado: boolean | null
    reset_token: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    rol: string | null
    nombre: string | null
    apellidopaterno: string | null
    apellidomaterno: string | null
    email: string | null
    contrasena: string | null
    foto: string | null
    telefono: number | null
    pais: string | null
    ciudad: string | null
    genero: string | null
    fechacreacion: Date | null
    verificado: boolean | null
    reset_token: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    rol: number
    nombre: number
    apellidopaterno: number
    apellidomaterno: number
    email: number
    contrasena: number
    foto: number
    telefono: number
    pais: number
    ciudad: number
    genero: number
    fechacreacion: number
    verificado: number
    reset_token: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
    telefono?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
    telefono?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    rol?: true
    nombre?: true
    apellidopaterno?: true
    apellidomaterno?: true
    email?: true
    contrasena?: true
    foto?: true
    telefono?: true
    pais?: true
    ciudad?: true
    genero?: true
    fechacreacion?: true
    verificado?: true
    reset_token?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    rol?: true
    nombre?: true
    apellidopaterno?: true
    apellidomaterno?: true
    email?: true
    contrasena?: true
    foto?: true
    telefono?: true
    pais?: true
    ciudad?: true
    genero?: true
    fechacreacion?: true
    verificado?: true
    reset_token?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    rol?: true
    nombre?: true
    apellidopaterno?: true
    apellidomaterno?: true
    email?: true
    contrasena?: true
    foto?: true
    telefono?: true
    pais?: true
    ciudad?: true
    genero?: true
    fechacreacion?: true
    verificado?: true
    reset_token?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    rol: string | null
    nombre: string | null
    apellidopaterno: string | null
    apellidomaterno: string | null
    email: string | null
    contrasena: string | null
    foto: string | null
    telefono: number | null
    pais: string | null
    ciudad: string | null
    genero: string | null
    fechacreacion: Date
    verificado: boolean | null
    reset_token: string | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    rol?: boolean
    nombre?: boolean
    apellidopaterno?: boolean
    apellidomaterno?: boolean
    email?: boolean
    contrasena?: boolean
    foto?: boolean
    telefono?: boolean
    pais?: boolean
    ciudad?: boolean
    genero?: boolean
    fechacreacion?: boolean
    verificado?: boolean
    reset_token?: boolean
    agenda?: boolean | usuarios$agendaArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    rol?: boolean
    nombre?: boolean
    apellidopaterno?: boolean
    apellidomaterno?: boolean
    email?: boolean
    contrasena?: boolean
    foto?: boolean
    telefono?: boolean
    pais?: boolean
    ciudad?: boolean
    genero?: boolean
    fechacreacion?: boolean
    verificado?: boolean
    reset_token?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    rol?: boolean
    nombre?: boolean
    apellidopaterno?: boolean
    apellidomaterno?: boolean
    email?: boolean
    contrasena?: boolean
    foto?: boolean
    telefono?: boolean
    pais?: boolean
    ciudad?: boolean
    genero?: boolean
    fechacreacion?: boolean
    verificado?: boolean
    reset_token?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id_usuario?: boolean
    rol?: boolean
    nombre?: boolean
    apellidopaterno?: boolean
    apellidomaterno?: boolean
    email?: boolean
    contrasena?: boolean
    foto?: boolean
    telefono?: boolean
    pais?: boolean
    ciudad?: boolean
    genero?: boolean
    fechacreacion?: boolean
    verificado?: boolean
    reset_token?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "rol" | "nombre" | "apellidopaterno" | "apellidomaterno" | "email" | "contrasena" | "foto" | "telefono" | "pais" | "ciudad" | "genero" | "fechacreacion" | "verificado" | "reset_token", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | usuarios$agendaArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      agenda: Prisma.$agendaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      rol: string | null
      nombre: string | null
      apellidopaterno: string | null
      apellidomaterno: string | null
      email: string | null
      contrasena: string | null
      foto: string | null
      telefono: number | null
      pais: string | null
      ciudad: string | null
      genero: string | null
      fechacreacion: Date
      verificado: boolean | null
      reset_token: string | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agenda<T extends usuarios$agendaArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$agendaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly rol: FieldRef<"usuarios", 'String'>
    readonly nombre: FieldRef<"usuarios", 'String'>
    readonly apellidopaterno: FieldRef<"usuarios", 'String'>
    readonly apellidomaterno: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly contrasena: FieldRef<"usuarios", 'String'>
    readonly foto: FieldRef<"usuarios", 'String'>
    readonly telefono: FieldRef<"usuarios", 'Int'>
    readonly pais: FieldRef<"usuarios", 'String'>
    readonly ciudad: FieldRef<"usuarios", 'String'>
    readonly genero: FieldRef<"usuarios", 'String'>
    readonly fechacreacion: FieldRef<"usuarios", 'DateTime'>
    readonly verificado: FieldRef<"usuarios", 'Boolean'>
    readonly reset_token: FieldRef<"usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data?: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.agenda
   */
  export type usuarios$agendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    where?: agendaWhereInput
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    cursor?: agendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model eventos
   */

  export type AggregateEventos = {
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  export type EventosAvgAggregateOutputType = {
    id_evento: number | null
  }

  export type EventosSumAggregateOutputType = {
    id_evento: number | null
  }

  export type EventosMinAggregateOutputType = {
    id_evento: number | null
    titulo: string | null
    descripcion: string | null
    foto_evento: string | null
    hora_inicio: string | null
    hora_fin: string | null
    fecha: Date | null
    costo: string | null
    modalidad: string | null
    ubicacion: string | null
    link_reunion: string | null
    reunion_iniciada: boolean | null
  }

  export type EventosMaxAggregateOutputType = {
    id_evento: number | null
    titulo: string | null
    descripcion: string | null
    foto_evento: string | null
    hora_inicio: string | null
    hora_fin: string | null
    fecha: Date | null
    costo: string | null
    modalidad: string | null
    ubicacion: string | null
    link_reunion: string | null
    reunion_iniciada: boolean | null
  }

  export type EventosCountAggregateOutputType = {
    id_evento: number
    titulo: number
    descripcion: number
    foto_evento: number
    hora_inicio: number
    hora_fin: number
    fecha: number
    costo: number
    modalidad: number
    ubicacion: number
    link_reunion: number
    reunion_iniciada: number
    _all: number
  }


  export type EventosAvgAggregateInputType = {
    id_evento?: true
  }

  export type EventosSumAggregateInputType = {
    id_evento?: true
  }

  export type EventosMinAggregateInputType = {
    id_evento?: true
    titulo?: true
    descripcion?: true
    foto_evento?: true
    hora_inicio?: true
    hora_fin?: true
    fecha?: true
    costo?: true
    modalidad?: true
    ubicacion?: true
    link_reunion?: true
    reunion_iniciada?: true
  }

  export type EventosMaxAggregateInputType = {
    id_evento?: true
    titulo?: true
    descripcion?: true
    foto_evento?: true
    hora_inicio?: true
    hora_fin?: true
    fecha?: true
    costo?: true
    modalidad?: true
    ubicacion?: true
    link_reunion?: true
    reunion_iniciada?: true
  }

  export type EventosCountAggregateInputType = {
    id_evento?: true
    titulo?: true
    descripcion?: true
    foto_evento?: true
    hora_inicio?: true
    hora_fin?: true
    fecha?: true
    costo?: true
    modalidad?: true
    ubicacion?: true
    link_reunion?: true
    reunion_iniciada?: true
    _all?: true
  }

  export type EventosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to aggregate.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventos
    **/
    _count?: true | EventosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventosMaxAggregateInputType
  }

  export type GetEventosAggregateType<T extends EventosAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos[P]>
      : GetScalarType<T[P], AggregateEventos[P]>
  }




  export type eventosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventosWhereInput
    orderBy?: eventosOrderByWithAggregationInput | eventosOrderByWithAggregationInput[]
    by: EventosScalarFieldEnum[] | EventosScalarFieldEnum
    having?: eventosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventosCountAggregateInputType | true
    _avg?: EventosAvgAggregateInputType
    _sum?: EventosSumAggregateInputType
    _min?: EventosMinAggregateInputType
    _max?: EventosMaxAggregateInputType
  }

  export type EventosGroupByOutputType = {
    id_evento: number
    titulo: string | null
    descripcion: string | null
    foto_evento: string | null
    hora_inicio: string | null
    hora_fin: string | null
    fecha: Date | null
    costo: string | null
    modalidad: string | null
    ubicacion: string | null
    link_reunion: string | null
    reunion_iniciada: boolean | null
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  type GetEventosGroupByPayload<T extends eventosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventosGroupByOutputType[P]>
            : GetScalarType<T[P], EventosGroupByOutputType[P]>
        }
      >
    >


  export type eventosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    titulo?: boolean
    descripcion?: boolean
    foto_evento?: boolean
    hora_inicio?: boolean
    hora_fin?: boolean
    fecha?: boolean
    costo?: boolean
    modalidad?: boolean
    ubicacion?: boolean
    link_reunion?: boolean
    reunion_iniciada?: boolean
    agenda?: boolean | eventos$agendaArgs<ExtArgs>
    expositores?: boolean | eventos$expositoresArgs<ExtArgs>
    patrocinadores?: boolean | eventos$patrocinadoresArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos"]>

  export type eventosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    titulo?: boolean
    descripcion?: boolean
    foto_evento?: boolean
    hora_inicio?: boolean
    hora_fin?: boolean
    fecha?: boolean
    costo?: boolean
    modalidad?: boolean
    ubicacion?: boolean
    link_reunion?: boolean
    reunion_iniciada?: boolean
  }, ExtArgs["result"]["eventos"]>

  export type eventosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    titulo?: boolean
    descripcion?: boolean
    foto_evento?: boolean
    hora_inicio?: boolean
    hora_fin?: boolean
    fecha?: boolean
    costo?: boolean
    modalidad?: boolean
    ubicacion?: boolean
    link_reunion?: boolean
    reunion_iniciada?: boolean
  }, ExtArgs["result"]["eventos"]>

  export type eventosSelectScalar = {
    id_evento?: boolean
    titulo?: boolean
    descripcion?: boolean
    foto_evento?: boolean
    hora_inicio?: boolean
    hora_fin?: boolean
    fecha?: boolean
    costo?: boolean
    modalidad?: boolean
    ubicacion?: boolean
    link_reunion?: boolean
    reunion_iniciada?: boolean
  }

  export type eventosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evento" | "titulo" | "descripcion" | "foto_evento" | "hora_inicio" | "hora_fin" | "fecha" | "costo" | "modalidad" | "ubicacion" | "link_reunion" | "reunion_iniciada", ExtArgs["result"]["eventos"]>
  export type eventosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | eventos$agendaArgs<ExtArgs>
    expositores?: boolean | eventos$expositoresArgs<ExtArgs>
    patrocinadores?: boolean | eventos$patrocinadoresArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type eventosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type eventosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $eventosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eventos"
    objects: {
      agenda: Prisma.$agendaPayload<ExtArgs>[]
      expositores: Prisma.$eventos_expositoresPayload<ExtArgs>[]
      patrocinadores: Prisma.$eventos_patrocinadoresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evento: number
      titulo: string | null
      descripcion: string | null
      foto_evento: string | null
      hora_inicio: string | null
      hora_fin: string | null
      fecha: Date | null
      costo: string | null
      modalidad: string | null
      ubicacion: string | null
      link_reunion: string | null
      reunion_iniciada: boolean | null
    }, ExtArgs["result"]["eventos"]>
    composites: {}
  }

  type eventosGetPayload<S extends boolean | null | undefined | eventosDefaultArgs> = $Result.GetResult<Prisma.$eventosPayload, S>

  type eventosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventosCountAggregateInputType | true
    }

  export interface eventosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eventos'], meta: { name: 'eventos' } }
    /**
     * Find zero or one Eventos that matches the filter.
     * @param {eventosFindUniqueArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventosFindUniqueArgs>(args: SelectSubset<T, eventosFindUniqueArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eventos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventosFindUniqueOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventosFindUniqueOrThrowArgs>(args: SelectSubset<T, eventosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindFirstArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventosFindFirstArgs>(args?: SelectSubset<T, eventosFindFirstArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindFirstOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventosFindFirstOrThrowArgs>(args?: SelectSubset<T, eventosFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.eventos.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.eventos.findMany({ take: 10 })
     * 
     * // Only select the `id_evento`
     * const eventosWithId_eventoOnly = await prisma.eventos.findMany({ select: { id_evento: true } })
     * 
     */
    findMany<T extends eventosFindManyArgs>(args?: SelectSubset<T, eventosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eventos.
     * @param {eventosCreateArgs} args - Arguments to create a Eventos.
     * @example
     * // Create one Eventos
     * const Eventos = await prisma.eventos.create({
     *   data: {
     *     // ... data to create a Eventos
     *   }
     * })
     * 
     */
    create<T extends eventosCreateArgs>(args: SelectSubset<T, eventosCreateArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {eventosCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventosCreateManyArgs>(args?: SelectSubset<T, eventosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {eventosCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id_evento`
     * const eventosWithId_eventoOnly = await prisma.eventos.createManyAndReturn({
     *   select: { id_evento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventosCreateManyAndReturnArgs>(args?: SelectSubset<T, eventosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eventos.
     * @param {eventosDeleteArgs} args - Arguments to delete one Eventos.
     * @example
     * // Delete one Eventos
     * const Eventos = await prisma.eventos.delete({
     *   where: {
     *     // ... filter to delete one Eventos
     *   }
     * })
     * 
     */
    delete<T extends eventosDeleteArgs>(args: SelectSubset<T, eventosDeleteArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eventos.
     * @param {eventosUpdateArgs} args - Arguments to update one Eventos.
     * @example
     * // Update one Eventos
     * const eventos = await prisma.eventos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventosUpdateArgs>(args: SelectSubset<T, eventosUpdateArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {eventosDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.eventos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventosDeleteManyArgs>(args?: SelectSubset<T, eventosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const eventos = await prisma.eventos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventosUpdateManyArgs>(args: SelectSubset<T, eventosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {eventosUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const eventos = await prisma.eventos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id_evento`
     * const eventosWithId_eventoOnly = await prisma.eventos.updateManyAndReturn({
     *   select: { id_evento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eventosUpdateManyAndReturnArgs>(args: SelectSubset<T, eventosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eventos.
     * @param {eventosUpsertArgs} args - Arguments to update or create a Eventos.
     * @example
     * // Update or create a Eventos
     * const eventos = await prisma.eventos.upsert({
     *   create: {
     *     // ... data to create a Eventos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos we want to update
     *   }
     * })
     */
    upsert<T extends eventosUpsertArgs>(args: SelectSubset<T, eventosUpsertArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.eventos.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends eventosCountArgs>(
      args?: Subset<T, eventosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventosAggregateArgs>(args: Subset<T, EventosAggregateArgs>): Prisma.PrismaPromise<GetEventosAggregateType<T>>

    /**
     * Group by Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosGroupByArgs} args - Group by arguments.
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
      T extends eventosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventosGroupByArgs['orderBy'] }
        : { orderBy?: eventosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eventos model
   */
  readonly fields: eventosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eventos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agenda<T extends eventos$agendaArgs<ExtArgs> = {}>(args?: Subset<T, eventos$agendaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expositores<T extends eventos$expositoresArgs<ExtArgs> = {}>(args?: Subset<T, eventos$expositoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventos_expositoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patrocinadores<T extends eventos$patrocinadoresArgs<ExtArgs> = {}>(args?: Subset<T, eventos$patrocinadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventos_patrocinadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the eventos model
   */
  interface eventosFieldRefs {
    readonly id_evento: FieldRef<"eventos", 'Int'>
    readonly titulo: FieldRef<"eventos", 'String'>
    readonly descripcion: FieldRef<"eventos", 'String'>
    readonly foto_evento: FieldRef<"eventos", 'String'>
    readonly hora_inicio: FieldRef<"eventos", 'String'>
    readonly hora_fin: FieldRef<"eventos", 'String'>
    readonly fecha: FieldRef<"eventos", 'DateTime'>
    readonly costo: FieldRef<"eventos", 'String'>
    readonly modalidad: FieldRef<"eventos", 'String'>
    readonly ubicacion: FieldRef<"eventos", 'String'>
    readonly link_reunion: FieldRef<"eventos", 'String'>
    readonly reunion_iniciada: FieldRef<"eventos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * eventos findUnique
   */
  export type eventosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos findUniqueOrThrow
   */
  export type eventosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos findFirst
   */
  export type eventosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos findFirstOrThrow
   */
  export type eventosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos findMany
   */
  export type eventosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos create
   */
  export type eventosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The data needed to create a eventos.
     */
    data?: XOR<eventosCreateInput, eventosUncheckedCreateInput>
  }

  /**
   * eventos createMany
   */
  export type eventosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventos.
     */
    data: eventosCreateManyInput | eventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eventos createManyAndReturn
   */
  export type eventosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * The data used to create many eventos.
     */
    data: eventosCreateManyInput | eventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eventos update
   */
  export type eventosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The data needed to update a eventos.
     */
    data: XOR<eventosUpdateInput, eventosUncheckedUpdateInput>
    /**
     * Choose, which eventos to update.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos updateMany
   */
  export type eventosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventos.
     */
    data: XOR<eventosUpdateManyMutationInput, eventosUncheckedUpdateManyInput>
    /**
     * Filter which eventos to update
     */
    where?: eventosWhereInput
    /**
     * Limit how many eventos to update.
     */
    limit?: number
  }

  /**
   * eventos updateManyAndReturn
   */
  export type eventosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * The data used to update eventos.
     */
    data: XOR<eventosUpdateManyMutationInput, eventosUncheckedUpdateManyInput>
    /**
     * Filter which eventos to update
     */
    where?: eventosWhereInput
    /**
     * Limit how many eventos to update.
     */
    limit?: number
  }

  /**
   * eventos upsert
   */
  export type eventosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The filter to search for the eventos to update in case it exists.
     */
    where: eventosWhereUniqueInput
    /**
     * In case the eventos found by the `where` argument doesn't exist, create a new eventos with this data.
     */
    create: XOR<eventosCreateInput, eventosUncheckedCreateInput>
    /**
     * In case the eventos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventosUpdateInput, eventosUncheckedUpdateInput>
  }

  /**
   * eventos delete
   */
  export type eventosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter which eventos to delete.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos deleteMany
   */
  export type eventosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to delete
     */
    where?: eventosWhereInput
    /**
     * Limit how many eventos to delete.
     */
    limit?: number
  }

  /**
   * eventos.agenda
   */
  export type eventos$agendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    where?: agendaWhereInput
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    cursor?: agendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * eventos.expositores
   */
  export type eventos$expositoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresInclude<ExtArgs> | null
    where?: eventos_expositoresWhereInput
    orderBy?: eventos_expositoresOrderByWithRelationInput | eventos_expositoresOrderByWithRelationInput[]
    cursor?: eventos_expositoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Eventos_expositoresScalarFieldEnum | Eventos_expositoresScalarFieldEnum[]
  }

  /**
   * eventos.patrocinadores
   */
  export type eventos$patrocinadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresInclude<ExtArgs> | null
    where?: eventos_patrocinadoresWhereInput
    orderBy?: eventos_patrocinadoresOrderByWithRelationInput | eventos_patrocinadoresOrderByWithRelationInput[]
    cursor?: eventos_patrocinadoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Eventos_patrocinadoresScalarFieldEnum | Eventos_patrocinadoresScalarFieldEnum[]
  }

  /**
   * eventos without action
   */
  export type eventosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
  }


  /**
   * Model expositores
   */

  export type AggregateExpositores = {
    _count: ExpositoresCountAggregateOutputType | null
    _avg: ExpositoresAvgAggregateOutputType | null
    _sum: ExpositoresSumAggregateOutputType | null
    _min: ExpositoresMinAggregateOutputType | null
    _max: ExpositoresMaxAggregateOutputType | null
  }

  export type ExpositoresAvgAggregateOutputType = {
    id_expositor: number | null
  }

  export type ExpositoresSumAggregateOutputType = {
    id_expositor: number | null
  }

  export type ExpositoresMinAggregateOutputType = {
    id_expositor: number | null
    nombre: string | null
    especialidad: string | null
    institucion: string | null
    contacto: string | null
  }

  export type ExpositoresMaxAggregateOutputType = {
    id_expositor: number | null
    nombre: string | null
    especialidad: string | null
    institucion: string | null
    contacto: string | null
  }

  export type ExpositoresCountAggregateOutputType = {
    id_expositor: number
    nombre: number
    especialidad: number
    institucion: number
    contacto: number
    _all: number
  }


  export type ExpositoresAvgAggregateInputType = {
    id_expositor?: true
  }

  export type ExpositoresSumAggregateInputType = {
    id_expositor?: true
  }

  export type ExpositoresMinAggregateInputType = {
    id_expositor?: true
    nombre?: true
    especialidad?: true
    institucion?: true
    contacto?: true
  }

  export type ExpositoresMaxAggregateInputType = {
    id_expositor?: true
    nombre?: true
    especialidad?: true
    institucion?: true
    contacto?: true
  }

  export type ExpositoresCountAggregateInputType = {
    id_expositor?: true
    nombre?: true
    especialidad?: true
    institucion?: true
    contacto?: true
    _all?: true
  }

  export type ExpositoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expositores to aggregate.
     */
    where?: expositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expositores to fetch.
     */
    orderBy?: expositoresOrderByWithRelationInput | expositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expositores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expositores
    **/
    _count?: true | ExpositoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpositoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpositoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpositoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpositoresMaxAggregateInputType
  }

  export type GetExpositoresAggregateType<T extends ExpositoresAggregateArgs> = {
        [P in keyof T & keyof AggregateExpositores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpositores[P]>
      : GetScalarType<T[P], AggregateExpositores[P]>
  }




  export type expositoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expositoresWhereInput
    orderBy?: expositoresOrderByWithAggregationInput | expositoresOrderByWithAggregationInput[]
    by: ExpositoresScalarFieldEnum[] | ExpositoresScalarFieldEnum
    having?: expositoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpositoresCountAggregateInputType | true
    _avg?: ExpositoresAvgAggregateInputType
    _sum?: ExpositoresSumAggregateInputType
    _min?: ExpositoresMinAggregateInputType
    _max?: ExpositoresMaxAggregateInputType
  }

  export type ExpositoresGroupByOutputType = {
    id_expositor: number
    nombre: string | null
    especialidad: string | null
    institucion: string | null
    contacto: string | null
    _count: ExpositoresCountAggregateOutputType | null
    _avg: ExpositoresAvgAggregateOutputType | null
    _sum: ExpositoresSumAggregateOutputType | null
    _min: ExpositoresMinAggregateOutputType | null
    _max: ExpositoresMaxAggregateOutputType | null
  }

  type GetExpositoresGroupByPayload<T extends expositoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpositoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpositoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpositoresGroupByOutputType[P]>
            : GetScalarType<T[P], ExpositoresGroupByOutputType[P]>
        }
      >
    >


  export type expositoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_expositor?: boolean
    nombre?: boolean
    especialidad?: boolean
    institucion?: boolean
    contacto?: boolean
    eventos?: boolean | expositores$eventosArgs<ExtArgs>
    _count?: boolean | ExpositoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expositores"]>

  export type expositoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_expositor?: boolean
    nombre?: boolean
    especialidad?: boolean
    institucion?: boolean
    contacto?: boolean
  }, ExtArgs["result"]["expositores"]>

  export type expositoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_expositor?: boolean
    nombre?: boolean
    especialidad?: boolean
    institucion?: boolean
    contacto?: boolean
  }, ExtArgs["result"]["expositores"]>

  export type expositoresSelectScalar = {
    id_expositor?: boolean
    nombre?: boolean
    especialidad?: boolean
    institucion?: boolean
    contacto?: boolean
  }

  export type expositoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_expositor" | "nombre" | "especialidad" | "institucion" | "contacto", ExtArgs["result"]["expositores"]>
  export type expositoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | expositores$eventosArgs<ExtArgs>
    _count?: boolean | ExpositoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type expositoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type expositoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $expositoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expositores"
    objects: {
      eventos: Prisma.$eventos_expositoresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_expositor: number
      nombre: string | null
      especialidad: string | null
      institucion: string | null
      contacto: string | null
    }, ExtArgs["result"]["expositores"]>
    composites: {}
  }

  type expositoresGetPayload<S extends boolean | null | undefined | expositoresDefaultArgs> = $Result.GetResult<Prisma.$expositoresPayload, S>

  type expositoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<expositoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpositoresCountAggregateInputType | true
    }

  export interface expositoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expositores'], meta: { name: 'expositores' } }
    /**
     * Find zero or one Expositores that matches the filter.
     * @param {expositoresFindUniqueArgs} args - Arguments to find a Expositores
     * @example
     * // Get one Expositores
     * const expositores = await prisma.expositores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expositoresFindUniqueArgs>(args: SelectSubset<T, expositoresFindUniqueArgs<ExtArgs>>): Prisma__expositoresClient<$Result.GetResult<Prisma.$expositoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expositores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {expositoresFindUniqueOrThrowArgs} args - Arguments to find a Expositores
     * @example
     * // Get one Expositores
     * const expositores = await prisma.expositores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expositoresFindUniqueOrThrowArgs>(args: SelectSubset<T, expositoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expositoresClient<$Result.GetResult<Prisma.$expositoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expositores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expositoresFindFirstArgs} args - Arguments to find a Expositores
     * @example
     * // Get one Expositores
     * const expositores = await prisma.expositores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expositoresFindFirstArgs>(args?: SelectSubset<T, expositoresFindFirstArgs<ExtArgs>>): Prisma__expositoresClient<$Result.GetResult<Prisma.$expositoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expositores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expositoresFindFirstOrThrowArgs} args - Arguments to find a Expositores
     * @example
     * // Get one Expositores
     * const expositores = await prisma.expositores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expositoresFindFirstOrThrowArgs>(args?: SelectSubset<T, expositoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__expositoresClient<$Result.GetResult<Prisma.$expositoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expositores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expositoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expositores
     * const expositores = await prisma.expositores.findMany()
     * 
     * // Get first 10 Expositores
     * const expositores = await prisma.expositores.findMany({ take: 10 })
     * 
     * // Only select the `id_expositor`
     * const expositoresWithId_expositorOnly = await prisma.expositores.findMany({ select: { id_expositor: true } })
     * 
     */
    findMany<T extends expositoresFindManyArgs>(args?: SelectSubset<T, expositoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expositoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expositores.
     * @param {expositoresCreateArgs} args - Arguments to create a Expositores.
     * @example
     * // Create one Expositores
     * const Expositores = await prisma.expositores.create({
     *   data: {
     *     // ... data to create a Expositores
     *   }
     * })
     * 
     */
    create<T extends expositoresCreateArgs>(args: SelectSubset<T, expositoresCreateArgs<ExtArgs>>): Prisma__expositoresClient<$Result.GetResult<Prisma.$expositoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expositores.
     * @param {expositoresCreateManyArgs} args - Arguments to create many Expositores.
     * @example
     * // Create many Expositores
     * const expositores = await prisma.expositores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expositoresCreateManyArgs>(args?: SelectSubset<T, expositoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expositores and returns the data saved in the database.
     * @param {expositoresCreateManyAndReturnArgs} args - Arguments to create many Expositores.
     * @example
     * // Create many Expositores
     * const expositores = await prisma.expositores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expositores and only return the `id_expositor`
     * const expositoresWithId_expositorOnly = await prisma.expositores.createManyAndReturn({
     *   select: { id_expositor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends expositoresCreateManyAndReturnArgs>(args?: SelectSubset<T, expositoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expositoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expositores.
     * @param {expositoresDeleteArgs} args - Arguments to delete one Expositores.
     * @example
     * // Delete one Expositores
     * const Expositores = await prisma.expositores.delete({
     *   where: {
     *     // ... filter to delete one Expositores
     *   }
     * })
     * 
     */
    delete<T extends expositoresDeleteArgs>(args: SelectSubset<T, expositoresDeleteArgs<ExtArgs>>): Prisma__expositoresClient<$Result.GetResult<Prisma.$expositoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expositores.
     * @param {expositoresUpdateArgs} args - Arguments to update one Expositores.
     * @example
     * // Update one Expositores
     * const expositores = await prisma.expositores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expositoresUpdateArgs>(args: SelectSubset<T, expositoresUpdateArgs<ExtArgs>>): Prisma__expositoresClient<$Result.GetResult<Prisma.$expositoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expositores.
     * @param {expositoresDeleteManyArgs} args - Arguments to filter Expositores to delete.
     * @example
     * // Delete a few Expositores
     * const { count } = await prisma.expositores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expositoresDeleteManyArgs>(args?: SelectSubset<T, expositoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expositoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expositores
     * const expositores = await prisma.expositores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expositoresUpdateManyArgs>(args: SelectSubset<T, expositoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expositores and returns the data updated in the database.
     * @param {expositoresUpdateManyAndReturnArgs} args - Arguments to update many Expositores.
     * @example
     * // Update many Expositores
     * const expositores = await prisma.expositores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expositores and only return the `id_expositor`
     * const expositoresWithId_expositorOnly = await prisma.expositores.updateManyAndReturn({
     *   select: { id_expositor: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends expositoresUpdateManyAndReturnArgs>(args: SelectSubset<T, expositoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expositoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expositores.
     * @param {expositoresUpsertArgs} args - Arguments to update or create a Expositores.
     * @example
     * // Update or create a Expositores
     * const expositores = await prisma.expositores.upsert({
     *   create: {
     *     // ... data to create a Expositores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expositores we want to update
     *   }
     * })
     */
    upsert<T extends expositoresUpsertArgs>(args: SelectSubset<T, expositoresUpsertArgs<ExtArgs>>): Prisma__expositoresClient<$Result.GetResult<Prisma.$expositoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expositoresCountArgs} args - Arguments to filter Expositores to count.
     * @example
     * // Count the number of Expositores
     * const count = await prisma.expositores.count({
     *   where: {
     *     // ... the filter for the Expositores we want to count
     *   }
     * })
    **/
    count<T extends expositoresCountArgs>(
      args?: Subset<T, expositoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpositoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpositoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpositoresAggregateArgs>(args: Subset<T, ExpositoresAggregateArgs>): Prisma.PrismaPromise<GetExpositoresAggregateType<T>>

    /**
     * Group by Expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expositoresGroupByArgs} args - Group by arguments.
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
      T extends expositoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expositoresGroupByArgs['orderBy'] }
        : { orderBy?: expositoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, expositoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpositoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expositores model
   */
  readonly fields: expositoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expositores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expositoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventos<T extends expositores$eventosArgs<ExtArgs> = {}>(args?: Subset<T, expositores$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventos_expositoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the expositores model
   */
  interface expositoresFieldRefs {
    readonly id_expositor: FieldRef<"expositores", 'Int'>
    readonly nombre: FieldRef<"expositores", 'String'>
    readonly especialidad: FieldRef<"expositores", 'String'>
    readonly institucion: FieldRef<"expositores", 'String'>
    readonly contacto: FieldRef<"expositores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * expositores findUnique
   */
  export type expositoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expositores
     */
    select?: expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expositores
     */
    omit?: expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expositoresInclude<ExtArgs> | null
    /**
     * Filter, which expositores to fetch.
     */
    where: expositoresWhereUniqueInput
  }

  /**
   * expositores findUniqueOrThrow
   */
  export type expositoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expositores
     */
    select?: expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expositores
     */
    omit?: expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expositoresInclude<ExtArgs> | null
    /**
     * Filter, which expositores to fetch.
     */
    where: expositoresWhereUniqueInput
  }

  /**
   * expositores findFirst
   */
  export type expositoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expositores
     */
    select?: expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expositores
     */
    omit?: expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expositoresInclude<ExtArgs> | null
    /**
     * Filter, which expositores to fetch.
     */
    where?: expositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expositores to fetch.
     */
    orderBy?: expositoresOrderByWithRelationInput | expositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expositores.
     */
    cursor?: expositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expositores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expositores.
     */
    distinct?: ExpositoresScalarFieldEnum | ExpositoresScalarFieldEnum[]
  }

  /**
   * expositores findFirstOrThrow
   */
  export type expositoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expositores
     */
    select?: expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expositores
     */
    omit?: expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expositoresInclude<ExtArgs> | null
    /**
     * Filter, which expositores to fetch.
     */
    where?: expositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expositores to fetch.
     */
    orderBy?: expositoresOrderByWithRelationInput | expositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expositores.
     */
    cursor?: expositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expositores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expositores.
     */
    distinct?: ExpositoresScalarFieldEnum | ExpositoresScalarFieldEnum[]
  }

  /**
   * expositores findMany
   */
  export type expositoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expositores
     */
    select?: expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expositores
     */
    omit?: expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expositoresInclude<ExtArgs> | null
    /**
     * Filter, which expositores to fetch.
     */
    where?: expositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expositores to fetch.
     */
    orderBy?: expositoresOrderByWithRelationInput | expositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expositores.
     */
    cursor?: expositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expositores.
     */
    skip?: number
    distinct?: ExpositoresScalarFieldEnum | ExpositoresScalarFieldEnum[]
  }

  /**
   * expositores create
   */
  export type expositoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expositores
     */
    select?: expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expositores
     */
    omit?: expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expositoresInclude<ExtArgs> | null
    /**
     * The data needed to create a expositores.
     */
    data?: XOR<expositoresCreateInput, expositoresUncheckedCreateInput>
  }

  /**
   * expositores createMany
   */
  export type expositoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expositores.
     */
    data: expositoresCreateManyInput | expositoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * expositores createManyAndReturn
   */
  export type expositoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expositores
     */
    select?: expositoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expositores
     */
    omit?: expositoresOmit<ExtArgs> | null
    /**
     * The data used to create many expositores.
     */
    data: expositoresCreateManyInput | expositoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * expositores update
   */
  export type expositoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expositores
     */
    select?: expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expositores
     */
    omit?: expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expositoresInclude<ExtArgs> | null
    /**
     * The data needed to update a expositores.
     */
    data: XOR<expositoresUpdateInput, expositoresUncheckedUpdateInput>
    /**
     * Choose, which expositores to update.
     */
    where: expositoresWhereUniqueInput
  }

  /**
   * expositores updateMany
   */
  export type expositoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expositores.
     */
    data: XOR<expositoresUpdateManyMutationInput, expositoresUncheckedUpdateManyInput>
    /**
     * Filter which expositores to update
     */
    where?: expositoresWhereInput
    /**
     * Limit how many expositores to update.
     */
    limit?: number
  }

  /**
   * expositores updateManyAndReturn
   */
  export type expositoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expositores
     */
    select?: expositoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expositores
     */
    omit?: expositoresOmit<ExtArgs> | null
    /**
     * The data used to update expositores.
     */
    data: XOR<expositoresUpdateManyMutationInput, expositoresUncheckedUpdateManyInput>
    /**
     * Filter which expositores to update
     */
    where?: expositoresWhereInput
    /**
     * Limit how many expositores to update.
     */
    limit?: number
  }

  /**
   * expositores upsert
   */
  export type expositoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expositores
     */
    select?: expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expositores
     */
    omit?: expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expositoresInclude<ExtArgs> | null
    /**
     * The filter to search for the expositores to update in case it exists.
     */
    where: expositoresWhereUniqueInput
    /**
     * In case the expositores found by the `where` argument doesn't exist, create a new expositores with this data.
     */
    create: XOR<expositoresCreateInput, expositoresUncheckedCreateInput>
    /**
     * In case the expositores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expositoresUpdateInput, expositoresUncheckedUpdateInput>
  }

  /**
   * expositores delete
   */
  export type expositoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expositores
     */
    select?: expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expositores
     */
    omit?: expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expositoresInclude<ExtArgs> | null
    /**
     * Filter which expositores to delete.
     */
    where: expositoresWhereUniqueInput
  }

  /**
   * expositores deleteMany
   */
  export type expositoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expositores to delete
     */
    where?: expositoresWhereInput
    /**
     * Limit how many expositores to delete.
     */
    limit?: number
  }

  /**
   * expositores.eventos
   */
  export type expositores$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresInclude<ExtArgs> | null
    where?: eventos_expositoresWhereInput
    orderBy?: eventos_expositoresOrderByWithRelationInput | eventos_expositoresOrderByWithRelationInput[]
    cursor?: eventos_expositoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Eventos_expositoresScalarFieldEnum | Eventos_expositoresScalarFieldEnum[]
  }

  /**
   * expositores without action
   */
  export type expositoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expositores
     */
    select?: expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expositores
     */
    omit?: expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expositoresInclude<ExtArgs> | null
  }


  /**
   * Model eventos_expositores
   */

  export type AggregateEventos_expositores = {
    _count: Eventos_expositoresCountAggregateOutputType | null
    _avg: Eventos_expositoresAvgAggregateOutputType | null
    _sum: Eventos_expositoresSumAggregateOutputType | null
    _min: Eventos_expositoresMinAggregateOutputType | null
    _max: Eventos_expositoresMaxAggregateOutputType | null
  }

  export type Eventos_expositoresAvgAggregateOutputType = {
    id_evento: number | null
    id_expositor: number | null
  }

  export type Eventos_expositoresSumAggregateOutputType = {
    id_evento: number | null
    id_expositor: number | null
  }

  export type Eventos_expositoresMinAggregateOutputType = {
    id_evento: number | null
    id_expositor: number | null
  }

  export type Eventos_expositoresMaxAggregateOutputType = {
    id_evento: number | null
    id_expositor: number | null
  }

  export type Eventos_expositoresCountAggregateOutputType = {
    id_evento: number
    id_expositor: number
    _all: number
  }


  export type Eventos_expositoresAvgAggregateInputType = {
    id_evento?: true
    id_expositor?: true
  }

  export type Eventos_expositoresSumAggregateInputType = {
    id_evento?: true
    id_expositor?: true
  }

  export type Eventos_expositoresMinAggregateInputType = {
    id_evento?: true
    id_expositor?: true
  }

  export type Eventos_expositoresMaxAggregateInputType = {
    id_evento?: true
    id_expositor?: true
  }

  export type Eventos_expositoresCountAggregateInputType = {
    id_evento?: true
    id_expositor?: true
    _all?: true
  }

  export type Eventos_expositoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos_expositores to aggregate.
     */
    where?: eventos_expositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos_expositores to fetch.
     */
    orderBy?: eventos_expositoresOrderByWithRelationInput | eventos_expositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventos_expositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos_expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos_expositores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventos_expositores
    **/
    _count?: true | Eventos_expositoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Eventos_expositoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Eventos_expositoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Eventos_expositoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Eventos_expositoresMaxAggregateInputType
  }

  export type GetEventos_expositoresAggregateType<T extends Eventos_expositoresAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos_expositores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos_expositores[P]>
      : GetScalarType<T[P], AggregateEventos_expositores[P]>
  }




  export type eventos_expositoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventos_expositoresWhereInput
    orderBy?: eventos_expositoresOrderByWithAggregationInput | eventos_expositoresOrderByWithAggregationInput[]
    by: Eventos_expositoresScalarFieldEnum[] | Eventos_expositoresScalarFieldEnum
    having?: eventos_expositoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Eventos_expositoresCountAggregateInputType | true
    _avg?: Eventos_expositoresAvgAggregateInputType
    _sum?: Eventos_expositoresSumAggregateInputType
    _min?: Eventos_expositoresMinAggregateInputType
    _max?: Eventos_expositoresMaxAggregateInputType
  }

  export type Eventos_expositoresGroupByOutputType = {
    id_evento: number
    id_expositor: number
    _count: Eventos_expositoresCountAggregateOutputType | null
    _avg: Eventos_expositoresAvgAggregateOutputType | null
    _sum: Eventos_expositoresSumAggregateOutputType | null
    _min: Eventos_expositoresMinAggregateOutputType | null
    _max: Eventos_expositoresMaxAggregateOutputType | null
  }

  type GetEventos_expositoresGroupByPayload<T extends eventos_expositoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Eventos_expositoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Eventos_expositoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Eventos_expositoresGroupByOutputType[P]>
            : GetScalarType<T[P], Eventos_expositoresGroupByOutputType[P]>
        }
      >
    >


  export type eventos_expositoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_expositor?: boolean
    evento?: boolean | eventosDefaultArgs<ExtArgs>
    expositor?: boolean | expositoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos_expositores"]>

  export type eventos_expositoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_expositor?: boolean
    evento?: boolean | eventosDefaultArgs<ExtArgs>
    expositor?: boolean | expositoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos_expositores"]>

  export type eventos_expositoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_expositor?: boolean
    evento?: boolean | eventosDefaultArgs<ExtArgs>
    expositor?: boolean | expositoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos_expositores"]>

  export type eventos_expositoresSelectScalar = {
    id_evento?: boolean
    id_expositor?: boolean
  }

  export type eventos_expositoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evento" | "id_expositor", ExtArgs["result"]["eventos_expositores"]>
  export type eventos_expositoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | eventosDefaultArgs<ExtArgs>
    expositor?: boolean | expositoresDefaultArgs<ExtArgs>
  }
  export type eventos_expositoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | eventosDefaultArgs<ExtArgs>
    expositor?: boolean | expositoresDefaultArgs<ExtArgs>
  }
  export type eventos_expositoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | eventosDefaultArgs<ExtArgs>
    expositor?: boolean | expositoresDefaultArgs<ExtArgs>
  }

  export type $eventos_expositoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eventos_expositores"
    objects: {
      evento: Prisma.$eventosPayload<ExtArgs>
      expositor: Prisma.$expositoresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evento: number
      id_expositor: number
    }, ExtArgs["result"]["eventos_expositores"]>
    composites: {}
  }

  type eventos_expositoresGetPayload<S extends boolean | null | undefined | eventos_expositoresDefaultArgs> = $Result.GetResult<Prisma.$eventos_expositoresPayload, S>

  type eventos_expositoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventos_expositoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Eventos_expositoresCountAggregateInputType | true
    }

  export interface eventos_expositoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eventos_expositores'], meta: { name: 'eventos_expositores' } }
    /**
     * Find zero or one Eventos_expositores that matches the filter.
     * @param {eventos_expositoresFindUniqueArgs} args - Arguments to find a Eventos_expositores
     * @example
     * // Get one Eventos_expositores
     * const eventos_expositores = await prisma.eventos_expositores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventos_expositoresFindUniqueArgs>(args: SelectSubset<T, eventos_expositoresFindUniqueArgs<ExtArgs>>): Prisma__eventos_expositoresClient<$Result.GetResult<Prisma.$eventos_expositoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eventos_expositores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventos_expositoresFindUniqueOrThrowArgs} args - Arguments to find a Eventos_expositores
     * @example
     * // Get one Eventos_expositores
     * const eventos_expositores = await prisma.eventos_expositores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventos_expositoresFindUniqueOrThrowArgs>(args: SelectSubset<T, eventos_expositoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventos_expositoresClient<$Result.GetResult<Prisma.$eventos_expositoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos_expositores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_expositoresFindFirstArgs} args - Arguments to find a Eventos_expositores
     * @example
     * // Get one Eventos_expositores
     * const eventos_expositores = await prisma.eventos_expositores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventos_expositoresFindFirstArgs>(args?: SelectSubset<T, eventos_expositoresFindFirstArgs<ExtArgs>>): Prisma__eventos_expositoresClient<$Result.GetResult<Prisma.$eventos_expositoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos_expositores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_expositoresFindFirstOrThrowArgs} args - Arguments to find a Eventos_expositores
     * @example
     * // Get one Eventos_expositores
     * const eventos_expositores = await prisma.eventos_expositores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventos_expositoresFindFirstOrThrowArgs>(args?: SelectSubset<T, eventos_expositoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventos_expositoresClient<$Result.GetResult<Prisma.$eventos_expositoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos_expositores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_expositoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos_expositores
     * const eventos_expositores = await prisma.eventos_expositores.findMany()
     * 
     * // Get first 10 Eventos_expositores
     * const eventos_expositores = await prisma.eventos_expositores.findMany({ take: 10 })
     * 
     * // Only select the `id_evento`
     * const eventos_expositoresWithId_eventoOnly = await prisma.eventos_expositores.findMany({ select: { id_evento: true } })
     * 
     */
    findMany<T extends eventos_expositoresFindManyArgs>(args?: SelectSubset<T, eventos_expositoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventos_expositoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eventos_expositores.
     * @param {eventos_expositoresCreateArgs} args - Arguments to create a Eventos_expositores.
     * @example
     * // Create one Eventos_expositores
     * const Eventos_expositores = await prisma.eventos_expositores.create({
     *   data: {
     *     // ... data to create a Eventos_expositores
     *   }
     * })
     * 
     */
    create<T extends eventos_expositoresCreateArgs>(args: SelectSubset<T, eventos_expositoresCreateArgs<ExtArgs>>): Prisma__eventos_expositoresClient<$Result.GetResult<Prisma.$eventos_expositoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos_expositores.
     * @param {eventos_expositoresCreateManyArgs} args - Arguments to create many Eventos_expositores.
     * @example
     * // Create many Eventos_expositores
     * const eventos_expositores = await prisma.eventos_expositores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventos_expositoresCreateManyArgs>(args?: SelectSubset<T, eventos_expositoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos_expositores and returns the data saved in the database.
     * @param {eventos_expositoresCreateManyAndReturnArgs} args - Arguments to create many Eventos_expositores.
     * @example
     * // Create many Eventos_expositores
     * const eventos_expositores = await prisma.eventos_expositores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos_expositores and only return the `id_evento`
     * const eventos_expositoresWithId_eventoOnly = await prisma.eventos_expositores.createManyAndReturn({
     *   select: { id_evento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventos_expositoresCreateManyAndReturnArgs>(args?: SelectSubset<T, eventos_expositoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventos_expositoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eventos_expositores.
     * @param {eventos_expositoresDeleteArgs} args - Arguments to delete one Eventos_expositores.
     * @example
     * // Delete one Eventos_expositores
     * const Eventos_expositores = await prisma.eventos_expositores.delete({
     *   where: {
     *     // ... filter to delete one Eventos_expositores
     *   }
     * })
     * 
     */
    delete<T extends eventos_expositoresDeleteArgs>(args: SelectSubset<T, eventos_expositoresDeleteArgs<ExtArgs>>): Prisma__eventos_expositoresClient<$Result.GetResult<Prisma.$eventos_expositoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eventos_expositores.
     * @param {eventos_expositoresUpdateArgs} args - Arguments to update one Eventos_expositores.
     * @example
     * // Update one Eventos_expositores
     * const eventos_expositores = await prisma.eventos_expositores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventos_expositoresUpdateArgs>(args: SelectSubset<T, eventos_expositoresUpdateArgs<ExtArgs>>): Prisma__eventos_expositoresClient<$Result.GetResult<Prisma.$eventos_expositoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos_expositores.
     * @param {eventos_expositoresDeleteManyArgs} args - Arguments to filter Eventos_expositores to delete.
     * @example
     * // Delete a few Eventos_expositores
     * const { count } = await prisma.eventos_expositores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventos_expositoresDeleteManyArgs>(args?: SelectSubset<T, eventos_expositoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos_expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_expositoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos_expositores
     * const eventos_expositores = await prisma.eventos_expositores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventos_expositoresUpdateManyArgs>(args: SelectSubset<T, eventos_expositoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos_expositores and returns the data updated in the database.
     * @param {eventos_expositoresUpdateManyAndReturnArgs} args - Arguments to update many Eventos_expositores.
     * @example
     * // Update many Eventos_expositores
     * const eventos_expositores = await prisma.eventos_expositores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos_expositores and only return the `id_evento`
     * const eventos_expositoresWithId_eventoOnly = await prisma.eventos_expositores.updateManyAndReturn({
     *   select: { id_evento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eventos_expositoresUpdateManyAndReturnArgs>(args: SelectSubset<T, eventos_expositoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventos_expositoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eventos_expositores.
     * @param {eventos_expositoresUpsertArgs} args - Arguments to update or create a Eventos_expositores.
     * @example
     * // Update or create a Eventos_expositores
     * const eventos_expositores = await prisma.eventos_expositores.upsert({
     *   create: {
     *     // ... data to create a Eventos_expositores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos_expositores we want to update
     *   }
     * })
     */
    upsert<T extends eventos_expositoresUpsertArgs>(args: SelectSubset<T, eventos_expositoresUpsertArgs<ExtArgs>>): Prisma__eventos_expositoresClient<$Result.GetResult<Prisma.$eventos_expositoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos_expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_expositoresCountArgs} args - Arguments to filter Eventos_expositores to count.
     * @example
     * // Count the number of Eventos_expositores
     * const count = await prisma.eventos_expositores.count({
     *   where: {
     *     // ... the filter for the Eventos_expositores we want to count
     *   }
     * })
    **/
    count<T extends eventos_expositoresCountArgs>(
      args?: Subset<T, eventos_expositoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Eventos_expositoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos_expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_expositoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Eventos_expositoresAggregateArgs>(args: Subset<T, Eventos_expositoresAggregateArgs>): Prisma.PrismaPromise<GetEventos_expositoresAggregateType<T>>

    /**
     * Group by Eventos_expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_expositoresGroupByArgs} args - Group by arguments.
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
      T extends eventos_expositoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventos_expositoresGroupByArgs['orderBy'] }
        : { orderBy?: eventos_expositoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventos_expositoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventos_expositoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eventos_expositores model
   */
  readonly fields: eventos_expositoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eventos_expositores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventos_expositoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends eventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventosDefaultArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expositor<T extends expositoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, expositoresDefaultArgs<ExtArgs>>): Prisma__expositoresClient<$Result.GetResult<Prisma.$expositoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the eventos_expositores model
   */
  interface eventos_expositoresFieldRefs {
    readonly id_evento: FieldRef<"eventos_expositores", 'Int'>
    readonly id_expositor: FieldRef<"eventos_expositores", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * eventos_expositores findUnique
   */
  export type eventos_expositoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresInclude<ExtArgs> | null
    /**
     * Filter, which eventos_expositores to fetch.
     */
    where: eventos_expositoresWhereUniqueInput
  }

  /**
   * eventos_expositores findUniqueOrThrow
   */
  export type eventos_expositoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresInclude<ExtArgs> | null
    /**
     * Filter, which eventos_expositores to fetch.
     */
    where: eventos_expositoresWhereUniqueInput
  }

  /**
   * eventos_expositores findFirst
   */
  export type eventos_expositoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresInclude<ExtArgs> | null
    /**
     * Filter, which eventos_expositores to fetch.
     */
    where?: eventos_expositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos_expositores to fetch.
     */
    orderBy?: eventos_expositoresOrderByWithRelationInput | eventos_expositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos_expositores.
     */
    cursor?: eventos_expositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos_expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos_expositores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos_expositores.
     */
    distinct?: Eventos_expositoresScalarFieldEnum | Eventos_expositoresScalarFieldEnum[]
  }

  /**
   * eventos_expositores findFirstOrThrow
   */
  export type eventos_expositoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresInclude<ExtArgs> | null
    /**
     * Filter, which eventos_expositores to fetch.
     */
    where?: eventos_expositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos_expositores to fetch.
     */
    orderBy?: eventos_expositoresOrderByWithRelationInput | eventos_expositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos_expositores.
     */
    cursor?: eventos_expositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos_expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos_expositores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos_expositores.
     */
    distinct?: Eventos_expositoresScalarFieldEnum | Eventos_expositoresScalarFieldEnum[]
  }

  /**
   * eventos_expositores findMany
   */
  export type eventos_expositoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresInclude<ExtArgs> | null
    /**
     * Filter, which eventos_expositores to fetch.
     */
    where?: eventos_expositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos_expositores to fetch.
     */
    orderBy?: eventos_expositoresOrderByWithRelationInput | eventos_expositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventos_expositores.
     */
    cursor?: eventos_expositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos_expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos_expositores.
     */
    skip?: number
    distinct?: Eventos_expositoresScalarFieldEnum | Eventos_expositoresScalarFieldEnum[]
  }

  /**
   * eventos_expositores create
   */
  export type eventos_expositoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresInclude<ExtArgs> | null
    /**
     * The data needed to create a eventos_expositores.
     */
    data: XOR<eventos_expositoresCreateInput, eventos_expositoresUncheckedCreateInput>
  }

  /**
   * eventos_expositores createMany
   */
  export type eventos_expositoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventos_expositores.
     */
    data: eventos_expositoresCreateManyInput | eventos_expositoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eventos_expositores createManyAndReturn
   */
  export type eventos_expositoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * The data used to create many eventos_expositores.
     */
    data: eventos_expositoresCreateManyInput | eventos_expositoresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * eventos_expositores update
   */
  export type eventos_expositoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresInclude<ExtArgs> | null
    /**
     * The data needed to update a eventos_expositores.
     */
    data: XOR<eventos_expositoresUpdateInput, eventos_expositoresUncheckedUpdateInput>
    /**
     * Choose, which eventos_expositores to update.
     */
    where: eventos_expositoresWhereUniqueInput
  }

  /**
   * eventos_expositores updateMany
   */
  export type eventos_expositoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventos_expositores.
     */
    data: XOR<eventos_expositoresUpdateManyMutationInput, eventos_expositoresUncheckedUpdateManyInput>
    /**
     * Filter which eventos_expositores to update
     */
    where?: eventos_expositoresWhereInput
    /**
     * Limit how many eventos_expositores to update.
     */
    limit?: number
  }

  /**
   * eventos_expositores updateManyAndReturn
   */
  export type eventos_expositoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * The data used to update eventos_expositores.
     */
    data: XOR<eventos_expositoresUpdateManyMutationInput, eventos_expositoresUncheckedUpdateManyInput>
    /**
     * Filter which eventos_expositores to update
     */
    where?: eventos_expositoresWhereInput
    /**
     * Limit how many eventos_expositores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * eventos_expositores upsert
   */
  export type eventos_expositoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresInclude<ExtArgs> | null
    /**
     * The filter to search for the eventos_expositores to update in case it exists.
     */
    where: eventos_expositoresWhereUniqueInput
    /**
     * In case the eventos_expositores found by the `where` argument doesn't exist, create a new eventos_expositores with this data.
     */
    create: XOR<eventos_expositoresCreateInput, eventos_expositoresUncheckedCreateInput>
    /**
     * In case the eventos_expositores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventos_expositoresUpdateInput, eventos_expositoresUncheckedUpdateInput>
  }

  /**
   * eventos_expositores delete
   */
  export type eventos_expositoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresInclude<ExtArgs> | null
    /**
     * Filter which eventos_expositores to delete.
     */
    where: eventos_expositoresWhereUniqueInput
  }

  /**
   * eventos_expositores deleteMany
   */
  export type eventos_expositoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos_expositores to delete
     */
    where?: eventos_expositoresWhereInput
    /**
     * Limit how many eventos_expositores to delete.
     */
    limit?: number
  }

  /**
   * eventos_expositores without action
   */
  export type eventos_expositoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_expositores
     */
    select?: eventos_expositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_expositores
     */
    omit?: eventos_expositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_expositoresInclude<ExtArgs> | null
  }


  /**
   * Model patrocinadores
   */

  export type AggregatePatrocinadores = {
    _count: PatrocinadoresCountAggregateOutputType | null
    _avg: PatrocinadoresAvgAggregateOutputType | null
    _sum: PatrocinadoresSumAggregateOutputType | null
    _min: PatrocinadoresMinAggregateOutputType | null
    _max: PatrocinadoresMaxAggregateOutputType | null
  }

  export type PatrocinadoresAvgAggregateOutputType = {
    id_patrocinador: number | null
  }

  export type PatrocinadoresSumAggregateOutputType = {
    id_patrocinador: number | null
  }

  export type PatrocinadoresMinAggregateOutputType = {
    id_patrocinador: number | null
    razon_social: string | null
    institucion: string | null
  }

  export type PatrocinadoresMaxAggregateOutputType = {
    id_patrocinador: number | null
    razon_social: string | null
    institucion: string | null
  }

  export type PatrocinadoresCountAggregateOutputType = {
    id_patrocinador: number
    razon_social: number
    institucion: number
    _all: number
  }


  export type PatrocinadoresAvgAggregateInputType = {
    id_patrocinador?: true
  }

  export type PatrocinadoresSumAggregateInputType = {
    id_patrocinador?: true
  }

  export type PatrocinadoresMinAggregateInputType = {
    id_patrocinador?: true
    razon_social?: true
    institucion?: true
  }

  export type PatrocinadoresMaxAggregateInputType = {
    id_patrocinador?: true
    razon_social?: true
    institucion?: true
  }

  export type PatrocinadoresCountAggregateInputType = {
    id_patrocinador?: true
    razon_social?: true
    institucion?: true
    _all?: true
  }

  export type PatrocinadoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patrocinadores to aggregate.
     */
    where?: patrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patrocinadores to fetch.
     */
    orderBy?: patrocinadoresOrderByWithRelationInput | patrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: patrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patrocinadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned patrocinadores
    **/
    _count?: true | PatrocinadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatrocinadoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatrocinadoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatrocinadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatrocinadoresMaxAggregateInputType
  }

  export type GetPatrocinadoresAggregateType<T extends PatrocinadoresAggregateArgs> = {
        [P in keyof T & keyof AggregatePatrocinadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatrocinadores[P]>
      : GetScalarType<T[P], AggregatePatrocinadores[P]>
  }




  export type patrocinadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patrocinadoresWhereInput
    orderBy?: patrocinadoresOrderByWithAggregationInput | patrocinadoresOrderByWithAggregationInput[]
    by: PatrocinadoresScalarFieldEnum[] | PatrocinadoresScalarFieldEnum
    having?: patrocinadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatrocinadoresCountAggregateInputType | true
    _avg?: PatrocinadoresAvgAggregateInputType
    _sum?: PatrocinadoresSumAggregateInputType
    _min?: PatrocinadoresMinAggregateInputType
    _max?: PatrocinadoresMaxAggregateInputType
  }

  export type PatrocinadoresGroupByOutputType = {
    id_patrocinador: number
    razon_social: string | null
    institucion: string | null
    _count: PatrocinadoresCountAggregateOutputType | null
    _avg: PatrocinadoresAvgAggregateOutputType | null
    _sum: PatrocinadoresSumAggregateOutputType | null
    _min: PatrocinadoresMinAggregateOutputType | null
    _max: PatrocinadoresMaxAggregateOutputType | null
  }

  type GetPatrocinadoresGroupByPayload<T extends patrocinadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatrocinadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatrocinadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatrocinadoresGroupByOutputType[P]>
            : GetScalarType<T[P], PatrocinadoresGroupByOutputType[P]>
        }
      >
    >


  export type patrocinadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_patrocinador?: boolean
    razon_social?: boolean
    institucion?: boolean
    eventos?: boolean | patrocinadores$eventosArgs<ExtArgs>
    _count?: boolean | PatrocinadoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patrocinadores"]>

  export type patrocinadoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_patrocinador?: boolean
    razon_social?: boolean
    institucion?: boolean
  }, ExtArgs["result"]["patrocinadores"]>

  export type patrocinadoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_patrocinador?: boolean
    razon_social?: boolean
    institucion?: boolean
  }, ExtArgs["result"]["patrocinadores"]>

  export type patrocinadoresSelectScalar = {
    id_patrocinador?: boolean
    razon_social?: boolean
    institucion?: boolean
  }

  export type patrocinadoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_patrocinador" | "razon_social" | "institucion", ExtArgs["result"]["patrocinadores"]>
  export type patrocinadoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | patrocinadores$eventosArgs<ExtArgs>
    _count?: boolean | PatrocinadoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type patrocinadoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type patrocinadoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $patrocinadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "patrocinadores"
    objects: {
      eventos: Prisma.$eventos_patrocinadoresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_patrocinador: number
      razon_social: string | null
      institucion: string | null
    }, ExtArgs["result"]["patrocinadores"]>
    composites: {}
  }

  type patrocinadoresGetPayload<S extends boolean | null | undefined | patrocinadoresDefaultArgs> = $Result.GetResult<Prisma.$patrocinadoresPayload, S>

  type patrocinadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<patrocinadoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatrocinadoresCountAggregateInputType | true
    }

  export interface patrocinadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patrocinadores'], meta: { name: 'patrocinadores' } }
    /**
     * Find zero or one Patrocinadores that matches the filter.
     * @param {patrocinadoresFindUniqueArgs} args - Arguments to find a Patrocinadores
     * @example
     * // Get one Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends patrocinadoresFindUniqueArgs>(args: SelectSubset<T, patrocinadoresFindUniqueArgs<ExtArgs>>): Prisma__patrocinadoresClient<$Result.GetResult<Prisma.$patrocinadoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patrocinadores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {patrocinadoresFindUniqueOrThrowArgs} args - Arguments to find a Patrocinadores
     * @example
     * // Get one Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends patrocinadoresFindUniqueOrThrowArgs>(args: SelectSubset<T, patrocinadoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__patrocinadoresClient<$Result.GetResult<Prisma.$patrocinadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patrocinadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patrocinadoresFindFirstArgs} args - Arguments to find a Patrocinadores
     * @example
     * // Get one Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends patrocinadoresFindFirstArgs>(args?: SelectSubset<T, patrocinadoresFindFirstArgs<ExtArgs>>): Prisma__patrocinadoresClient<$Result.GetResult<Prisma.$patrocinadoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patrocinadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patrocinadoresFindFirstOrThrowArgs} args - Arguments to find a Patrocinadores
     * @example
     * // Get one Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends patrocinadoresFindFirstOrThrowArgs>(args?: SelectSubset<T, patrocinadoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__patrocinadoresClient<$Result.GetResult<Prisma.$patrocinadoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patrocinadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patrocinadoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.findMany()
     * 
     * // Get first 10 Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.findMany({ take: 10 })
     * 
     * // Only select the `id_patrocinador`
     * const patrocinadoresWithId_patrocinadorOnly = await prisma.patrocinadores.findMany({ select: { id_patrocinador: true } })
     * 
     */
    findMany<T extends patrocinadoresFindManyArgs>(args?: SelectSubset<T, patrocinadoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patrocinadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patrocinadores.
     * @param {patrocinadoresCreateArgs} args - Arguments to create a Patrocinadores.
     * @example
     * // Create one Patrocinadores
     * const Patrocinadores = await prisma.patrocinadores.create({
     *   data: {
     *     // ... data to create a Patrocinadores
     *   }
     * })
     * 
     */
    create<T extends patrocinadoresCreateArgs>(args: SelectSubset<T, patrocinadoresCreateArgs<ExtArgs>>): Prisma__patrocinadoresClient<$Result.GetResult<Prisma.$patrocinadoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patrocinadores.
     * @param {patrocinadoresCreateManyArgs} args - Arguments to create many Patrocinadores.
     * @example
     * // Create many Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends patrocinadoresCreateManyArgs>(args?: SelectSubset<T, patrocinadoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patrocinadores and returns the data saved in the database.
     * @param {patrocinadoresCreateManyAndReturnArgs} args - Arguments to create many Patrocinadores.
     * @example
     * // Create many Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patrocinadores and only return the `id_patrocinador`
     * const patrocinadoresWithId_patrocinadorOnly = await prisma.patrocinadores.createManyAndReturn({
     *   select: { id_patrocinador: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends patrocinadoresCreateManyAndReturnArgs>(args?: SelectSubset<T, patrocinadoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patrocinadoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patrocinadores.
     * @param {patrocinadoresDeleteArgs} args - Arguments to delete one Patrocinadores.
     * @example
     * // Delete one Patrocinadores
     * const Patrocinadores = await prisma.patrocinadores.delete({
     *   where: {
     *     // ... filter to delete one Patrocinadores
     *   }
     * })
     * 
     */
    delete<T extends patrocinadoresDeleteArgs>(args: SelectSubset<T, patrocinadoresDeleteArgs<ExtArgs>>): Prisma__patrocinadoresClient<$Result.GetResult<Prisma.$patrocinadoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patrocinadores.
     * @param {patrocinadoresUpdateArgs} args - Arguments to update one Patrocinadores.
     * @example
     * // Update one Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends patrocinadoresUpdateArgs>(args: SelectSubset<T, patrocinadoresUpdateArgs<ExtArgs>>): Prisma__patrocinadoresClient<$Result.GetResult<Prisma.$patrocinadoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patrocinadores.
     * @param {patrocinadoresDeleteManyArgs} args - Arguments to filter Patrocinadores to delete.
     * @example
     * // Delete a few Patrocinadores
     * const { count } = await prisma.patrocinadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends patrocinadoresDeleteManyArgs>(args?: SelectSubset<T, patrocinadoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patrocinadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends patrocinadoresUpdateManyArgs>(args: SelectSubset<T, patrocinadoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patrocinadores and returns the data updated in the database.
     * @param {patrocinadoresUpdateManyAndReturnArgs} args - Arguments to update many Patrocinadores.
     * @example
     * // Update many Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patrocinadores and only return the `id_patrocinador`
     * const patrocinadoresWithId_patrocinadorOnly = await prisma.patrocinadores.updateManyAndReturn({
     *   select: { id_patrocinador: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends patrocinadoresUpdateManyAndReturnArgs>(args: SelectSubset<T, patrocinadoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patrocinadoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patrocinadores.
     * @param {patrocinadoresUpsertArgs} args - Arguments to update or create a Patrocinadores.
     * @example
     * // Update or create a Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.upsert({
     *   create: {
     *     // ... data to create a Patrocinadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patrocinadores we want to update
     *   }
     * })
     */
    upsert<T extends patrocinadoresUpsertArgs>(args: SelectSubset<T, patrocinadoresUpsertArgs<ExtArgs>>): Prisma__patrocinadoresClient<$Result.GetResult<Prisma.$patrocinadoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patrocinadoresCountArgs} args - Arguments to filter Patrocinadores to count.
     * @example
     * // Count the number of Patrocinadores
     * const count = await prisma.patrocinadores.count({
     *   where: {
     *     // ... the filter for the Patrocinadores we want to count
     *   }
     * })
    **/
    count<T extends patrocinadoresCountArgs>(
      args?: Subset<T, patrocinadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatrocinadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatrocinadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatrocinadoresAggregateArgs>(args: Subset<T, PatrocinadoresAggregateArgs>): Prisma.PrismaPromise<GetPatrocinadoresAggregateType<T>>

    /**
     * Group by Patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patrocinadoresGroupByArgs} args - Group by arguments.
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
      T extends patrocinadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patrocinadoresGroupByArgs['orderBy'] }
        : { orderBy?: patrocinadoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, patrocinadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatrocinadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the patrocinadores model
   */
  readonly fields: patrocinadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patrocinadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patrocinadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventos<T extends patrocinadores$eventosArgs<ExtArgs> = {}>(args?: Subset<T, patrocinadores$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventos_patrocinadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the patrocinadores model
   */
  interface patrocinadoresFieldRefs {
    readonly id_patrocinador: FieldRef<"patrocinadores", 'Int'>
    readonly razon_social: FieldRef<"patrocinadores", 'String'>
    readonly institucion: FieldRef<"patrocinadores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * patrocinadores findUnique
   */
  export type patrocinadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patrocinadores
     */
    select?: patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patrocinadores
     */
    omit?: patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which patrocinadores to fetch.
     */
    where: patrocinadoresWhereUniqueInput
  }

  /**
   * patrocinadores findUniqueOrThrow
   */
  export type patrocinadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patrocinadores
     */
    select?: patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patrocinadores
     */
    omit?: patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which patrocinadores to fetch.
     */
    where: patrocinadoresWhereUniqueInput
  }

  /**
   * patrocinadores findFirst
   */
  export type patrocinadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patrocinadores
     */
    select?: patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patrocinadores
     */
    omit?: patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which patrocinadores to fetch.
     */
    where?: patrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patrocinadores to fetch.
     */
    orderBy?: patrocinadoresOrderByWithRelationInput | patrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patrocinadores.
     */
    cursor?: patrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patrocinadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patrocinadores.
     */
    distinct?: PatrocinadoresScalarFieldEnum | PatrocinadoresScalarFieldEnum[]
  }

  /**
   * patrocinadores findFirstOrThrow
   */
  export type patrocinadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patrocinadores
     */
    select?: patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patrocinadores
     */
    omit?: patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which patrocinadores to fetch.
     */
    where?: patrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patrocinadores to fetch.
     */
    orderBy?: patrocinadoresOrderByWithRelationInput | patrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patrocinadores.
     */
    cursor?: patrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patrocinadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patrocinadores.
     */
    distinct?: PatrocinadoresScalarFieldEnum | PatrocinadoresScalarFieldEnum[]
  }

  /**
   * patrocinadores findMany
   */
  export type patrocinadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patrocinadores
     */
    select?: patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patrocinadores
     */
    omit?: patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which patrocinadores to fetch.
     */
    where?: patrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patrocinadores to fetch.
     */
    orderBy?: patrocinadoresOrderByWithRelationInput | patrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing patrocinadores.
     */
    cursor?: patrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patrocinadores.
     */
    skip?: number
    distinct?: PatrocinadoresScalarFieldEnum | PatrocinadoresScalarFieldEnum[]
  }

  /**
   * patrocinadores create
   */
  export type patrocinadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patrocinadores
     */
    select?: patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patrocinadores
     */
    omit?: patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patrocinadoresInclude<ExtArgs> | null
    /**
     * The data needed to create a patrocinadores.
     */
    data?: XOR<patrocinadoresCreateInput, patrocinadoresUncheckedCreateInput>
  }

  /**
   * patrocinadores createMany
   */
  export type patrocinadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patrocinadores.
     */
    data: patrocinadoresCreateManyInput | patrocinadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patrocinadores createManyAndReturn
   */
  export type patrocinadoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patrocinadores
     */
    select?: patrocinadoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patrocinadores
     */
    omit?: patrocinadoresOmit<ExtArgs> | null
    /**
     * The data used to create many patrocinadores.
     */
    data: patrocinadoresCreateManyInput | patrocinadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patrocinadores update
   */
  export type patrocinadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patrocinadores
     */
    select?: patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patrocinadores
     */
    omit?: patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patrocinadoresInclude<ExtArgs> | null
    /**
     * The data needed to update a patrocinadores.
     */
    data: XOR<patrocinadoresUpdateInput, patrocinadoresUncheckedUpdateInput>
    /**
     * Choose, which patrocinadores to update.
     */
    where: patrocinadoresWhereUniqueInput
  }

  /**
   * patrocinadores updateMany
   */
  export type patrocinadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patrocinadores.
     */
    data: XOR<patrocinadoresUpdateManyMutationInput, patrocinadoresUncheckedUpdateManyInput>
    /**
     * Filter which patrocinadores to update
     */
    where?: patrocinadoresWhereInput
    /**
     * Limit how many patrocinadores to update.
     */
    limit?: number
  }

  /**
   * patrocinadores updateManyAndReturn
   */
  export type patrocinadoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patrocinadores
     */
    select?: patrocinadoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patrocinadores
     */
    omit?: patrocinadoresOmit<ExtArgs> | null
    /**
     * The data used to update patrocinadores.
     */
    data: XOR<patrocinadoresUpdateManyMutationInput, patrocinadoresUncheckedUpdateManyInput>
    /**
     * Filter which patrocinadores to update
     */
    where?: patrocinadoresWhereInput
    /**
     * Limit how many patrocinadores to update.
     */
    limit?: number
  }

  /**
   * patrocinadores upsert
   */
  export type patrocinadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patrocinadores
     */
    select?: patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patrocinadores
     */
    omit?: patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patrocinadoresInclude<ExtArgs> | null
    /**
     * The filter to search for the patrocinadores to update in case it exists.
     */
    where: patrocinadoresWhereUniqueInput
    /**
     * In case the patrocinadores found by the `where` argument doesn't exist, create a new patrocinadores with this data.
     */
    create: XOR<patrocinadoresCreateInput, patrocinadoresUncheckedCreateInput>
    /**
     * In case the patrocinadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patrocinadoresUpdateInput, patrocinadoresUncheckedUpdateInput>
  }

  /**
   * patrocinadores delete
   */
  export type patrocinadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patrocinadores
     */
    select?: patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patrocinadores
     */
    omit?: patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patrocinadoresInclude<ExtArgs> | null
    /**
     * Filter which patrocinadores to delete.
     */
    where: patrocinadoresWhereUniqueInput
  }

  /**
   * patrocinadores deleteMany
   */
  export type patrocinadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patrocinadores to delete
     */
    where?: patrocinadoresWhereInput
    /**
     * Limit how many patrocinadores to delete.
     */
    limit?: number
  }

  /**
   * patrocinadores.eventos
   */
  export type patrocinadores$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresInclude<ExtArgs> | null
    where?: eventos_patrocinadoresWhereInput
    orderBy?: eventos_patrocinadoresOrderByWithRelationInput | eventos_patrocinadoresOrderByWithRelationInput[]
    cursor?: eventos_patrocinadoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Eventos_patrocinadoresScalarFieldEnum | Eventos_patrocinadoresScalarFieldEnum[]
  }

  /**
   * patrocinadores without action
   */
  export type patrocinadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patrocinadores
     */
    select?: patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patrocinadores
     */
    omit?: patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patrocinadoresInclude<ExtArgs> | null
  }


  /**
   * Model eventos_patrocinadores
   */

  export type AggregateEventos_patrocinadores = {
    _count: Eventos_patrocinadoresCountAggregateOutputType | null
    _avg: Eventos_patrocinadoresAvgAggregateOutputType | null
    _sum: Eventos_patrocinadoresSumAggregateOutputType | null
    _min: Eventos_patrocinadoresMinAggregateOutputType | null
    _max: Eventos_patrocinadoresMaxAggregateOutputType | null
  }

  export type Eventos_patrocinadoresAvgAggregateOutputType = {
    id_evento: number | null
    id_patrocinador: number | null
  }

  export type Eventos_patrocinadoresSumAggregateOutputType = {
    id_evento: number | null
    id_patrocinador: number | null
  }

  export type Eventos_patrocinadoresMinAggregateOutputType = {
    id_evento: number | null
    id_patrocinador: number | null
  }

  export type Eventos_patrocinadoresMaxAggregateOutputType = {
    id_evento: number | null
    id_patrocinador: number | null
  }

  export type Eventos_patrocinadoresCountAggregateOutputType = {
    id_evento: number
    id_patrocinador: number
    _all: number
  }


  export type Eventos_patrocinadoresAvgAggregateInputType = {
    id_evento?: true
    id_patrocinador?: true
  }

  export type Eventos_patrocinadoresSumAggregateInputType = {
    id_evento?: true
    id_patrocinador?: true
  }

  export type Eventos_patrocinadoresMinAggregateInputType = {
    id_evento?: true
    id_patrocinador?: true
  }

  export type Eventos_patrocinadoresMaxAggregateInputType = {
    id_evento?: true
    id_patrocinador?: true
  }

  export type Eventos_patrocinadoresCountAggregateInputType = {
    id_evento?: true
    id_patrocinador?: true
    _all?: true
  }

  export type Eventos_patrocinadoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos_patrocinadores to aggregate.
     */
    where?: eventos_patrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos_patrocinadores to fetch.
     */
    orderBy?: eventos_patrocinadoresOrderByWithRelationInput | eventos_patrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventos_patrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos_patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos_patrocinadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventos_patrocinadores
    **/
    _count?: true | Eventos_patrocinadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Eventos_patrocinadoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Eventos_patrocinadoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Eventos_patrocinadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Eventos_patrocinadoresMaxAggregateInputType
  }

  export type GetEventos_patrocinadoresAggregateType<T extends Eventos_patrocinadoresAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos_patrocinadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos_patrocinadores[P]>
      : GetScalarType<T[P], AggregateEventos_patrocinadores[P]>
  }




  export type eventos_patrocinadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventos_patrocinadoresWhereInput
    orderBy?: eventos_patrocinadoresOrderByWithAggregationInput | eventos_patrocinadoresOrderByWithAggregationInput[]
    by: Eventos_patrocinadoresScalarFieldEnum[] | Eventos_patrocinadoresScalarFieldEnum
    having?: eventos_patrocinadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Eventos_patrocinadoresCountAggregateInputType | true
    _avg?: Eventos_patrocinadoresAvgAggregateInputType
    _sum?: Eventos_patrocinadoresSumAggregateInputType
    _min?: Eventos_patrocinadoresMinAggregateInputType
    _max?: Eventos_patrocinadoresMaxAggregateInputType
  }

  export type Eventos_patrocinadoresGroupByOutputType = {
    id_evento: number
    id_patrocinador: number
    _count: Eventos_patrocinadoresCountAggregateOutputType | null
    _avg: Eventos_patrocinadoresAvgAggregateOutputType | null
    _sum: Eventos_patrocinadoresSumAggregateOutputType | null
    _min: Eventos_patrocinadoresMinAggregateOutputType | null
    _max: Eventos_patrocinadoresMaxAggregateOutputType | null
  }

  type GetEventos_patrocinadoresGroupByPayload<T extends eventos_patrocinadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Eventos_patrocinadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Eventos_patrocinadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Eventos_patrocinadoresGroupByOutputType[P]>
            : GetScalarType<T[P], Eventos_patrocinadoresGroupByOutputType[P]>
        }
      >
    >


  export type eventos_patrocinadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_patrocinador?: boolean
    evento?: boolean | eventosDefaultArgs<ExtArgs>
    patrocinador?: boolean | patrocinadoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos_patrocinadores"]>

  export type eventos_patrocinadoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_patrocinador?: boolean
    evento?: boolean | eventosDefaultArgs<ExtArgs>
    patrocinador?: boolean | patrocinadoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos_patrocinadores"]>

  export type eventos_patrocinadoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_patrocinador?: boolean
    evento?: boolean | eventosDefaultArgs<ExtArgs>
    patrocinador?: boolean | patrocinadoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos_patrocinadores"]>

  export type eventos_patrocinadoresSelectScalar = {
    id_evento?: boolean
    id_patrocinador?: boolean
  }

  export type eventos_patrocinadoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evento" | "id_patrocinador", ExtArgs["result"]["eventos_patrocinadores"]>
  export type eventos_patrocinadoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | eventosDefaultArgs<ExtArgs>
    patrocinador?: boolean | patrocinadoresDefaultArgs<ExtArgs>
  }
  export type eventos_patrocinadoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | eventosDefaultArgs<ExtArgs>
    patrocinador?: boolean | patrocinadoresDefaultArgs<ExtArgs>
  }
  export type eventos_patrocinadoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | eventosDefaultArgs<ExtArgs>
    patrocinador?: boolean | patrocinadoresDefaultArgs<ExtArgs>
  }

  export type $eventos_patrocinadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eventos_patrocinadores"
    objects: {
      evento: Prisma.$eventosPayload<ExtArgs>
      patrocinador: Prisma.$patrocinadoresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evento: number
      id_patrocinador: number
    }, ExtArgs["result"]["eventos_patrocinadores"]>
    composites: {}
  }

  type eventos_patrocinadoresGetPayload<S extends boolean | null | undefined | eventos_patrocinadoresDefaultArgs> = $Result.GetResult<Prisma.$eventos_patrocinadoresPayload, S>

  type eventos_patrocinadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventos_patrocinadoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Eventos_patrocinadoresCountAggregateInputType | true
    }

  export interface eventos_patrocinadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eventos_patrocinadores'], meta: { name: 'eventos_patrocinadores' } }
    /**
     * Find zero or one Eventos_patrocinadores that matches the filter.
     * @param {eventos_patrocinadoresFindUniqueArgs} args - Arguments to find a Eventos_patrocinadores
     * @example
     * // Get one Eventos_patrocinadores
     * const eventos_patrocinadores = await prisma.eventos_patrocinadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventos_patrocinadoresFindUniqueArgs>(args: SelectSubset<T, eventos_patrocinadoresFindUniqueArgs<ExtArgs>>): Prisma__eventos_patrocinadoresClient<$Result.GetResult<Prisma.$eventos_patrocinadoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eventos_patrocinadores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventos_patrocinadoresFindUniqueOrThrowArgs} args - Arguments to find a Eventos_patrocinadores
     * @example
     * // Get one Eventos_patrocinadores
     * const eventos_patrocinadores = await prisma.eventos_patrocinadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventos_patrocinadoresFindUniqueOrThrowArgs>(args: SelectSubset<T, eventos_patrocinadoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventos_patrocinadoresClient<$Result.GetResult<Prisma.$eventos_patrocinadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos_patrocinadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_patrocinadoresFindFirstArgs} args - Arguments to find a Eventos_patrocinadores
     * @example
     * // Get one Eventos_patrocinadores
     * const eventos_patrocinadores = await prisma.eventos_patrocinadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventos_patrocinadoresFindFirstArgs>(args?: SelectSubset<T, eventos_patrocinadoresFindFirstArgs<ExtArgs>>): Prisma__eventos_patrocinadoresClient<$Result.GetResult<Prisma.$eventos_patrocinadoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos_patrocinadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_patrocinadoresFindFirstOrThrowArgs} args - Arguments to find a Eventos_patrocinadores
     * @example
     * // Get one Eventos_patrocinadores
     * const eventos_patrocinadores = await prisma.eventos_patrocinadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventos_patrocinadoresFindFirstOrThrowArgs>(args?: SelectSubset<T, eventos_patrocinadoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventos_patrocinadoresClient<$Result.GetResult<Prisma.$eventos_patrocinadoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos_patrocinadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_patrocinadoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos_patrocinadores
     * const eventos_patrocinadores = await prisma.eventos_patrocinadores.findMany()
     * 
     * // Get first 10 Eventos_patrocinadores
     * const eventos_patrocinadores = await prisma.eventos_patrocinadores.findMany({ take: 10 })
     * 
     * // Only select the `id_evento`
     * const eventos_patrocinadoresWithId_eventoOnly = await prisma.eventos_patrocinadores.findMany({ select: { id_evento: true } })
     * 
     */
    findMany<T extends eventos_patrocinadoresFindManyArgs>(args?: SelectSubset<T, eventos_patrocinadoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventos_patrocinadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eventos_patrocinadores.
     * @param {eventos_patrocinadoresCreateArgs} args - Arguments to create a Eventos_patrocinadores.
     * @example
     * // Create one Eventos_patrocinadores
     * const Eventos_patrocinadores = await prisma.eventos_patrocinadores.create({
     *   data: {
     *     // ... data to create a Eventos_patrocinadores
     *   }
     * })
     * 
     */
    create<T extends eventos_patrocinadoresCreateArgs>(args: SelectSubset<T, eventos_patrocinadoresCreateArgs<ExtArgs>>): Prisma__eventos_patrocinadoresClient<$Result.GetResult<Prisma.$eventos_patrocinadoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos_patrocinadores.
     * @param {eventos_patrocinadoresCreateManyArgs} args - Arguments to create many Eventos_patrocinadores.
     * @example
     * // Create many Eventos_patrocinadores
     * const eventos_patrocinadores = await prisma.eventos_patrocinadores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventos_patrocinadoresCreateManyArgs>(args?: SelectSubset<T, eventos_patrocinadoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos_patrocinadores and returns the data saved in the database.
     * @param {eventos_patrocinadoresCreateManyAndReturnArgs} args - Arguments to create many Eventos_patrocinadores.
     * @example
     * // Create many Eventos_patrocinadores
     * const eventos_patrocinadores = await prisma.eventos_patrocinadores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos_patrocinadores and only return the `id_evento`
     * const eventos_patrocinadoresWithId_eventoOnly = await prisma.eventos_patrocinadores.createManyAndReturn({
     *   select: { id_evento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventos_patrocinadoresCreateManyAndReturnArgs>(args?: SelectSubset<T, eventos_patrocinadoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventos_patrocinadoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eventos_patrocinadores.
     * @param {eventos_patrocinadoresDeleteArgs} args - Arguments to delete one Eventos_patrocinadores.
     * @example
     * // Delete one Eventos_patrocinadores
     * const Eventos_patrocinadores = await prisma.eventos_patrocinadores.delete({
     *   where: {
     *     // ... filter to delete one Eventos_patrocinadores
     *   }
     * })
     * 
     */
    delete<T extends eventos_patrocinadoresDeleteArgs>(args: SelectSubset<T, eventos_patrocinadoresDeleteArgs<ExtArgs>>): Prisma__eventos_patrocinadoresClient<$Result.GetResult<Prisma.$eventos_patrocinadoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eventos_patrocinadores.
     * @param {eventos_patrocinadoresUpdateArgs} args - Arguments to update one Eventos_patrocinadores.
     * @example
     * // Update one Eventos_patrocinadores
     * const eventos_patrocinadores = await prisma.eventos_patrocinadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventos_patrocinadoresUpdateArgs>(args: SelectSubset<T, eventos_patrocinadoresUpdateArgs<ExtArgs>>): Prisma__eventos_patrocinadoresClient<$Result.GetResult<Prisma.$eventos_patrocinadoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos_patrocinadores.
     * @param {eventos_patrocinadoresDeleteManyArgs} args - Arguments to filter Eventos_patrocinadores to delete.
     * @example
     * // Delete a few Eventos_patrocinadores
     * const { count } = await prisma.eventos_patrocinadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventos_patrocinadoresDeleteManyArgs>(args?: SelectSubset<T, eventos_patrocinadoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos_patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_patrocinadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos_patrocinadores
     * const eventos_patrocinadores = await prisma.eventos_patrocinadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventos_patrocinadoresUpdateManyArgs>(args: SelectSubset<T, eventos_patrocinadoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos_patrocinadores and returns the data updated in the database.
     * @param {eventos_patrocinadoresUpdateManyAndReturnArgs} args - Arguments to update many Eventos_patrocinadores.
     * @example
     * // Update many Eventos_patrocinadores
     * const eventos_patrocinadores = await prisma.eventos_patrocinadores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos_patrocinadores and only return the `id_evento`
     * const eventos_patrocinadoresWithId_eventoOnly = await prisma.eventos_patrocinadores.updateManyAndReturn({
     *   select: { id_evento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eventos_patrocinadoresUpdateManyAndReturnArgs>(args: SelectSubset<T, eventos_patrocinadoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventos_patrocinadoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eventos_patrocinadores.
     * @param {eventos_patrocinadoresUpsertArgs} args - Arguments to update or create a Eventos_patrocinadores.
     * @example
     * // Update or create a Eventos_patrocinadores
     * const eventos_patrocinadores = await prisma.eventos_patrocinadores.upsert({
     *   create: {
     *     // ... data to create a Eventos_patrocinadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos_patrocinadores we want to update
     *   }
     * })
     */
    upsert<T extends eventos_patrocinadoresUpsertArgs>(args: SelectSubset<T, eventos_patrocinadoresUpsertArgs<ExtArgs>>): Prisma__eventos_patrocinadoresClient<$Result.GetResult<Prisma.$eventos_patrocinadoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos_patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_patrocinadoresCountArgs} args - Arguments to filter Eventos_patrocinadores to count.
     * @example
     * // Count the number of Eventos_patrocinadores
     * const count = await prisma.eventos_patrocinadores.count({
     *   where: {
     *     // ... the filter for the Eventos_patrocinadores we want to count
     *   }
     * })
    **/
    count<T extends eventos_patrocinadoresCountArgs>(
      args?: Subset<T, eventos_patrocinadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Eventos_patrocinadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos_patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_patrocinadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Eventos_patrocinadoresAggregateArgs>(args: Subset<T, Eventos_patrocinadoresAggregateArgs>): Prisma.PrismaPromise<GetEventos_patrocinadoresAggregateType<T>>

    /**
     * Group by Eventos_patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_patrocinadoresGroupByArgs} args - Group by arguments.
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
      T extends eventos_patrocinadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventos_patrocinadoresGroupByArgs['orderBy'] }
        : { orderBy?: eventos_patrocinadoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventos_patrocinadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventos_patrocinadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eventos_patrocinadores model
   */
  readonly fields: eventos_patrocinadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eventos_patrocinadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventos_patrocinadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends eventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventosDefaultArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patrocinador<T extends patrocinadoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patrocinadoresDefaultArgs<ExtArgs>>): Prisma__patrocinadoresClient<$Result.GetResult<Prisma.$patrocinadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the eventos_patrocinadores model
   */
  interface eventos_patrocinadoresFieldRefs {
    readonly id_evento: FieldRef<"eventos_patrocinadores", 'Int'>
    readonly id_patrocinador: FieldRef<"eventos_patrocinadores", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * eventos_patrocinadores findUnique
   */
  export type eventos_patrocinadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which eventos_patrocinadores to fetch.
     */
    where: eventos_patrocinadoresWhereUniqueInput
  }

  /**
   * eventos_patrocinadores findUniqueOrThrow
   */
  export type eventos_patrocinadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which eventos_patrocinadores to fetch.
     */
    where: eventos_patrocinadoresWhereUniqueInput
  }

  /**
   * eventos_patrocinadores findFirst
   */
  export type eventos_patrocinadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which eventos_patrocinadores to fetch.
     */
    where?: eventos_patrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos_patrocinadores to fetch.
     */
    orderBy?: eventos_patrocinadoresOrderByWithRelationInput | eventos_patrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos_patrocinadores.
     */
    cursor?: eventos_patrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos_patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos_patrocinadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos_patrocinadores.
     */
    distinct?: Eventos_patrocinadoresScalarFieldEnum | Eventos_patrocinadoresScalarFieldEnum[]
  }

  /**
   * eventos_patrocinadores findFirstOrThrow
   */
  export type eventos_patrocinadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which eventos_patrocinadores to fetch.
     */
    where?: eventos_patrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos_patrocinadores to fetch.
     */
    orderBy?: eventos_patrocinadoresOrderByWithRelationInput | eventos_patrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos_patrocinadores.
     */
    cursor?: eventos_patrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos_patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos_patrocinadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos_patrocinadores.
     */
    distinct?: Eventos_patrocinadoresScalarFieldEnum | Eventos_patrocinadoresScalarFieldEnum[]
  }

  /**
   * eventos_patrocinadores findMany
   */
  export type eventos_patrocinadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which eventos_patrocinadores to fetch.
     */
    where?: eventos_patrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos_patrocinadores to fetch.
     */
    orderBy?: eventos_patrocinadoresOrderByWithRelationInput | eventos_patrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventos_patrocinadores.
     */
    cursor?: eventos_patrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos_patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos_patrocinadores.
     */
    skip?: number
    distinct?: Eventos_patrocinadoresScalarFieldEnum | Eventos_patrocinadoresScalarFieldEnum[]
  }

  /**
   * eventos_patrocinadores create
   */
  export type eventos_patrocinadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresInclude<ExtArgs> | null
    /**
     * The data needed to create a eventos_patrocinadores.
     */
    data: XOR<eventos_patrocinadoresCreateInput, eventos_patrocinadoresUncheckedCreateInput>
  }

  /**
   * eventos_patrocinadores createMany
   */
  export type eventos_patrocinadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventos_patrocinadores.
     */
    data: eventos_patrocinadoresCreateManyInput | eventos_patrocinadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eventos_patrocinadores createManyAndReturn
   */
  export type eventos_patrocinadoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * The data used to create many eventos_patrocinadores.
     */
    data: eventos_patrocinadoresCreateManyInput | eventos_patrocinadoresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * eventos_patrocinadores update
   */
  export type eventos_patrocinadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresInclude<ExtArgs> | null
    /**
     * The data needed to update a eventos_patrocinadores.
     */
    data: XOR<eventos_patrocinadoresUpdateInput, eventos_patrocinadoresUncheckedUpdateInput>
    /**
     * Choose, which eventos_patrocinadores to update.
     */
    where: eventos_patrocinadoresWhereUniqueInput
  }

  /**
   * eventos_patrocinadores updateMany
   */
  export type eventos_patrocinadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventos_patrocinadores.
     */
    data: XOR<eventos_patrocinadoresUpdateManyMutationInput, eventos_patrocinadoresUncheckedUpdateManyInput>
    /**
     * Filter which eventos_patrocinadores to update
     */
    where?: eventos_patrocinadoresWhereInput
    /**
     * Limit how many eventos_patrocinadores to update.
     */
    limit?: number
  }

  /**
   * eventos_patrocinadores updateManyAndReturn
   */
  export type eventos_patrocinadoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * The data used to update eventos_patrocinadores.
     */
    data: XOR<eventos_patrocinadoresUpdateManyMutationInput, eventos_patrocinadoresUncheckedUpdateManyInput>
    /**
     * Filter which eventos_patrocinadores to update
     */
    where?: eventos_patrocinadoresWhereInput
    /**
     * Limit how many eventos_patrocinadores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * eventos_patrocinadores upsert
   */
  export type eventos_patrocinadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresInclude<ExtArgs> | null
    /**
     * The filter to search for the eventos_patrocinadores to update in case it exists.
     */
    where: eventos_patrocinadoresWhereUniqueInput
    /**
     * In case the eventos_patrocinadores found by the `where` argument doesn't exist, create a new eventos_patrocinadores with this data.
     */
    create: XOR<eventos_patrocinadoresCreateInput, eventos_patrocinadoresUncheckedCreateInput>
    /**
     * In case the eventos_patrocinadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventos_patrocinadoresUpdateInput, eventos_patrocinadoresUncheckedUpdateInput>
  }

  /**
   * eventos_patrocinadores delete
   */
  export type eventos_patrocinadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresInclude<ExtArgs> | null
    /**
     * Filter which eventos_patrocinadores to delete.
     */
    where: eventos_patrocinadoresWhereUniqueInput
  }

  /**
   * eventos_patrocinadores deleteMany
   */
  export type eventos_patrocinadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos_patrocinadores to delete
     */
    where?: eventos_patrocinadoresWhereInput
    /**
     * Limit how many eventos_patrocinadores to delete.
     */
    limit?: number
  }

  /**
   * eventos_patrocinadores without action
   */
  export type eventos_patrocinadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_patrocinadores
     */
    select?: eventos_patrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_patrocinadores
     */
    omit?: eventos_patrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventos_patrocinadoresInclude<ExtArgs> | null
  }


  /**
   * Model agenda
   */

  export type AggregateAgenda = {
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  export type AgendaAvgAggregateOutputType = {
    id_agenda: number | null
    id_usuario: number | null
    id_evento: number | null
    calificacion: number | null
  }

  export type AgendaSumAggregateOutputType = {
    id_agenda: number | null
    id_usuario: number | null
    id_evento: number | null
    calificacion: number | null
  }

  export type AgendaMinAggregateOutputType = {
    id_agenda: number | null
    id_usuario: number | null
    id_evento: number | null
    actividad: string | null
    fecha: Date | null
    comentario: string | null
    calificacion: number | null
    asistio: boolean | null
    hora_ingreso: Date | null
  }

  export type AgendaMaxAggregateOutputType = {
    id_agenda: number | null
    id_usuario: number | null
    id_evento: number | null
    actividad: string | null
    fecha: Date | null
    comentario: string | null
    calificacion: number | null
    asistio: boolean | null
    hora_ingreso: Date | null
  }

  export type AgendaCountAggregateOutputType = {
    id_agenda: number
    id_usuario: number
    id_evento: number
    actividad: number
    fecha: number
    comentario: number
    calificacion: number
    asistio: number
    hora_ingreso: number
    _all: number
  }


  export type AgendaAvgAggregateInputType = {
    id_agenda?: true
    id_usuario?: true
    id_evento?: true
    calificacion?: true
  }

  export type AgendaSumAggregateInputType = {
    id_agenda?: true
    id_usuario?: true
    id_evento?: true
    calificacion?: true
  }

  export type AgendaMinAggregateInputType = {
    id_agenda?: true
    id_usuario?: true
    id_evento?: true
    actividad?: true
    fecha?: true
    comentario?: true
    calificacion?: true
    asistio?: true
    hora_ingreso?: true
  }

  export type AgendaMaxAggregateInputType = {
    id_agenda?: true
    id_usuario?: true
    id_evento?: true
    actividad?: true
    fecha?: true
    comentario?: true
    calificacion?: true
    asistio?: true
    hora_ingreso?: true
  }

  export type AgendaCountAggregateInputType = {
    id_agenda?: true
    id_usuario?: true
    id_evento?: true
    actividad?: true
    fecha?: true
    comentario?: true
    calificacion?: true
    asistio?: true
    hora_ingreso?: true
    _all?: true
  }

  export type AgendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agenda to aggregate.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agenda
    **/
    _count?: true | AgendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendaMaxAggregateInputType
  }

  export type GetAgendaAggregateType<T extends AgendaAggregateArgs> = {
        [P in keyof T & keyof AggregateAgenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgenda[P]>
      : GetScalarType<T[P], AggregateAgenda[P]>
  }




  export type agendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendaWhereInput
    orderBy?: agendaOrderByWithAggregationInput | agendaOrderByWithAggregationInput[]
    by: AgendaScalarFieldEnum[] | AgendaScalarFieldEnum
    having?: agendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendaCountAggregateInputType | true
    _avg?: AgendaAvgAggregateInputType
    _sum?: AgendaSumAggregateInputType
    _min?: AgendaMinAggregateInputType
    _max?: AgendaMaxAggregateInputType
  }

  export type AgendaGroupByOutputType = {
    id_agenda: number
    id_usuario: number
    id_evento: number
    actividad: string | null
    fecha: Date | null
    comentario: string | null
    calificacion: number | null
    asistio: boolean | null
    hora_ingreso: Date | null
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  type GetAgendaGroupByPayload<T extends agendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendaGroupByOutputType[P]>
            : GetScalarType<T[P], AgendaGroupByOutputType[P]>
        }
      >
    >


  export type agendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_agenda?: boolean
    id_usuario?: boolean
    id_evento?: boolean
    actividad?: boolean
    fecha?: boolean
    comentario?: boolean
    calificacion?: boolean
    asistio?: boolean
    hora_ingreso?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    evento?: boolean | eventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda"]>

  export type agendaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_agenda?: boolean
    id_usuario?: boolean
    id_evento?: boolean
    actividad?: boolean
    fecha?: boolean
    comentario?: boolean
    calificacion?: boolean
    asistio?: boolean
    hora_ingreso?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    evento?: boolean | eventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda"]>

  export type agendaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_agenda?: boolean
    id_usuario?: boolean
    id_evento?: boolean
    actividad?: boolean
    fecha?: boolean
    comentario?: boolean
    calificacion?: boolean
    asistio?: boolean
    hora_ingreso?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    evento?: boolean | eventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda"]>

  export type agendaSelectScalar = {
    id_agenda?: boolean
    id_usuario?: boolean
    id_evento?: boolean
    actividad?: boolean
    fecha?: boolean
    comentario?: boolean
    calificacion?: boolean
    asistio?: boolean
    hora_ingreso?: boolean
  }

  export type agendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_agenda" | "id_usuario" | "id_evento" | "actividad" | "fecha" | "comentario" | "calificacion" | "asistio" | "hora_ingreso", ExtArgs["result"]["agenda"]>
  export type agendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    evento?: boolean | eventosDefaultArgs<ExtArgs>
  }
  export type agendaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    evento?: boolean | eventosDefaultArgs<ExtArgs>
  }
  export type agendaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    evento?: boolean | eventosDefaultArgs<ExtArgs>
  }

  export type $agendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agenda"
    objects: {
      usuario: Prisma.$usuariosPayload<ExtArgs>
      evento: Prisma.$eventosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_agenda: number
      id_usuario: number
      id_evento: number
      actividad: string | null
      fecha: Date | null
      comentario: string | null
      calificacion: number | null
      asistio: boolean | null
      hora_ingreso: Date | null
    }, ExtArgs["result"]["agenda"]>
    composites: {}
  }

  type agendaGetPayload<S extends boolean | null | undefined | agendaDefaultArgs> = $Result.GetResult<Prisma.$agendaPayload, S>

  type agendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<agendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendaCountAggregateInputType | true
    }

  export interface agendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agenda'], meta: { name: 'agenda' } }
    /**
     * Find zero or one Agenda that matches the filter.
     * @param {agendaFindUniqueArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agendaFindUniqueArgs>(args: SelectSubset<T, agendaFindUniqueArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agenda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agendaFindUniqueOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agendaFindUniqueOrThrowArgs>(args: SelectSubset<T, agendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaFindFirstArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agendaFindFirstArgs>(args?: SelectSubset<T, agendaFindFirstArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaFindFirstOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agendaFindFirstOrThrowArgs>(args?: SelectSubset<T, agendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agenda
     * const agenda = await prisma.agenda.findMany()
     * 
     * // Get first 10 Agenda
     * const agenda = await prisma.agenda.findMany({ take: 10 })
     * 
     * // Only select the `id_agenda`
     * const agendaWithId_agendaOnly = await prisma.agenda.findMany({ select: { id_agenda: true } })
     * 
     */
    findMany<T extends agendaFindManyArgs>(args?: SelectSubset<T, agendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agenda.
     * @param {agendaCreateArgs} args - Arguments to create a Agenda.
     * @example
     * // Create one Agenda
     * const Agenda = await prisma.agenda.create({
     *   data: {
     *     // ... data to create a Agenda
     *   }
     * })
     * 
     */
    create<T extends agendaCreateArgs>(args: SelectSubset<T, agendaCreateArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agenda.
     * @param {agendaCreateManyArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agendaCreateManyArgs>(args?: SelectSubset<T, agendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agenda and returns the data saved in the database.
     * @param {agendaCreateManyAndReturnArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agenda and only return the `id_agenda`
     * const agendaWithId_agendaOnly = await prisma.agenda.createManyAndReturn({
     *   select: { id_agenda: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends agendaCreateManyAndReturnArgs>(args?: SelectSubset<T, agendaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agenda.
     * @param {agendaDeleteArgs} args - Arguments to delete one Agenda.
     * @example
     * // Delete one Agenda
     * const Agenda = await prisma.agenda.delete({
     *   where: {
     *     // ... filter to delete one Agenda
     *   }
     * })
     * 
     */
    delete<T extends agendaDeleteArgs>(args: SelectSubset<T, agendaDeleteArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agenda.
     * @param {agendaUpdateArgs} args - Arguments to update one Agenda.
     * @example
     * // Update one Agenda
     * const agenda = await prisma.agenda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agendaUpdateArgs>(args: SelectSubset<T, agendaUpdateArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agenda.
     * @param {agendaDeleteManyArgs} args - Arguments to filter Agenda to delete.
     * @example
     * // Delete a few Agenda
     * const { count } = await prisma.agenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agendaDeleteManyArgs>(args?: SelectSubset<T, agendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agendaUpdateManyArgs>(args: SelectSubset<T, agendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda and returns the data updated in the database.
     * @param {agendaUpdateManyAndReturnArgs} args - Arguments to update many Agenda.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agenda and only return the `id_agenda`
     * const agendaWithId_agendaOnly = await prisma.agenda.updateManyAndReturn({
     *   select: { id_agenda: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends agendaUpdateManyAndReturnArgs>(args: SelectSubset<T, agendaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agenda.
     * @param {agendaUpsertArgs} args - Arguments to update or create a Agenda.
     * @example
     * // Update or create a Agenda
     * const agenda = await prisma.agenda.upsert({
     *   create: {
     *     // ... data to create a Agenda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agenda we want to update
     *   }
     * })
     */
    upsert<T extends agendaUpsertArgs>(args: SelectSubset<T, agendaUpsertArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaCountArgs} args - Arguments to filter Agenda to count.
     * @example
     * // Count the number of Agenda
     * const count = await prisma.agenda.count({
     *   where: {
     *     // ... the filter for the Agenda we want to count
     *   }
     * })
    **/
    count<T extends agendaCountArgs>(
      args?: Subset<T, agendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendaAggregateArgs>(args: Subset<T, AgendaAggregateArgs>): Prisma.PrismaPromise<GetAgendaAggregateType<T>>

    /**
     * Group by Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaGroupByArgs} args - Group by arguments.
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
      T extends agendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agendaGroupByArgs['orderBy'] }
        : { orderBy?: agendaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, agendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agenda model
   */
  readonly fields: agendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evento<T extends eventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventosDefaultArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the agenda model
   */
  interface agendaFieldRefs {
    readonly id_agenda: FieldRef<"agenda", 'Int'>
    readonly id_usuario: FieldRef<"agenda", 'Int'>
    readonly id_evento: FieldRef<"agenda", 'Int'>
    readonly actividad: FieldRef<"agenda", 'String'>
    readonly fecha: FieldRef<"agenda", 'DateTime'>
    readonly comentario: FieldRef<"agenda", 'String'>
    readonly calificacion: FieldRef<"agenda", 'Int'>
    readonly asistio: FieldRef<"agenda", 'Boolean'>
    readonly hora_ingreso: FieldRef<"agenda", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * agenda findUnique
   */
  export type agendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where: agendaWhereUniqueInput
  }

  /**
   * agenda findUniqueOrThrow
   */
  export type agendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where: agendaWhereUniqueInput
  }

  /**
   * agenda findFirst
   */
  export type agendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agenda.
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * agenda findFirstOrThrow
   */
  export type agendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agenda.
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * agenda findMany
   */
  export type agendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agenda.
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * agenda create
   */
  export type agendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * The data needed to create a agenda.
     */
    data: XOR<agendaCreateInput, agendaUncheckedCreateInput>
  }

  /**
   * agenda createMany
   */
  export type agendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agenda.
     */
    data: agendaCreateManyInput | agendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agenda createManyAndReturn
   */
  export type agendaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * The data used to create many agenda.
     */
    data: agendaCreateManyInput | agendaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * agenda update
   */
  export type agendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * The data needed to update a agenda.
     */
    data: XOR<agendaUpdateInput, agendaUncheckedUpdateInput>
    /**
     * Choose, which agenda to update.
     */
    where: agendaWhereUniqueInput
  }

  /**
   * agenda updateMany
   */
  export type agendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agenda.
     */
    data: XOR<agendaUpdateManyMutationInput, agendaUncheckedUpdateManyInput>
    /**
     * Filter which agenda to update
     */
    where?: agendaWhereInput
    /**
     * Limit how many agenda to update.
     */
    limit?: number
  }

  /**
   * agenda updateManyAndReturn
   */
  export type agendaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * The data used to update agenda.
     */
    data: XOR<agendaUpdateManyMutationInput, agendaUncheckedUpdateManyInput>
    /**
     * Filter which agenda to update
     */
    where?: agendaWhereInput
    /**
     * Limit how many agenda to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * agenda upsert
   */
  export type agendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * The filter to search for the agenda to update in case it exists.
     */
    where: agendaWhereUniqueInput
    /**
     * In case the agenda found by the `where` argument doesn't exist, create a new agenda with this data.
     */
    create: XOR<agendaCreateInput, agendaUncheckedCreateInput>
    /**
     * In case the agenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agendaUpdateInput, agendaUncheckedUpdateInput>
  }

  /**
   * agenda delete
   */
  export type agendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * Filter which agenda to delete.
     */
    where: agendaWhereUniqueInput
  }

  /**
   * agenda deleteMany
   */
  export type agendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agenda to delete
     */
    where?: agendaWhereInput
    /**
     * Limit how many agenda to delete.
     */
    limit?: number
  }

  /**
   * agenda without action
   */
  export type agendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
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


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    rol: 'rol',
    nombre: 'nombre',
    apellidopaterno: 'apellidopaterno',
    apellidomaterno: 'apellidomaterno',
    email: 'email',
    contrasena: 'contrasena',
    foto: 'foto',
    telefono: 'telefono',
    pais: 'pais',
    ciudad: 'ciudad',
    genero: 'genero',
    fechacreacion: 'fechacreacion',
    verificado: 'verificado',
    reset_token: 'reset_token'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const EventosScalarFieldEnum: {
    id_evento: 'id_evento',
    titulo: 'titulo',
    descripcion: 'descripcion',
    foto_evento: 'foto_evento',
    hora_inicio: 'hora_inicio',
    hora_fin: 'hora_fin',
    fecha: 'fecha',
    costo: 'costo',
    modalidad: 'modalidad',
    ubicacion: 'ubicacion',
    link_reunion: 'link_reunion',
    reunion_iniciada: 'reunion_iniciada'
  };

  export type EventosScalarFieldEnum = (typeof EventosScalarFieldEnum)[keyof typeof EventosScalarFieldEnum]


  export const ExpositoresScalarFieldEnum: {
    id_expositor: 'id_expositor',
    nombre: 'nombre',
    especialidad: 'especialidad',
    institucion: 'institucion',
    contacto: 'contacto'
  };

  export type ExpositoresScalarFieldEnum = (typeof ExpositoresScalarFieldEnum)[keyof typeof ExpositoresScalarFieldEnum]


  export const Eventos_expositoresScalarFieldEnum: {
    id_evento: 'id_evento',
    id_expositor: 'id_expositor'
  };

  export type Eventos_expositoresScalarFieldEnum = (typeof Eventos_expositoresScalarFieldEnum)[keyof typeof Eventos_expositoresScalarFieldEnum]


  export const PatrocinadoresScalarFieldEnum: {
    id_patrocinador: 'id_patrocinador',
    razon_social: 'razon_social',
    institucion: 'institucion'
  };

  export type PatrocinadoresScalarFieldEnum = (typeof PatrocinadoresScalarFieldEnum)[keyof typeof PatrocinadoresScalarFieldEnum]


  export const Eventos_patrocinadoresScalarFieldEnum: {
    id_evento: 'id_evento',
    id_patrocinador: 'id_patrocinador'
  };

  export type Eventos_patrocinadoresScalarFieldEnum = (typeof Eventos_patrocinadoresScalarFieldEnum)[keyof typeof Eventos_patrocinadoresScalarFieldEnum]


  export const AgendaScalarFieldEnum: {
    id_agenda: 'id_agenda',
    id_usuario: 'id_usuario',
    id_evento: 'id_evento',
    actividad: 'actividad',
    fecha: 'fecha',
    comentario: 'comentario',
    calificacion: 'calificacion',
    asistio: 'asistio',
    hora_ingreso: 'hora_ingreso'
  };

  export type AgendaScalarFieldEnum = (typeof AgendaScalarFieldEnum)[keyof typeof AgendaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    rol?: StringNullableFilter<"usuarios"> | string | null
    nombre?: StringNullableFilter<"usuarios"> | string | null
    apellidopaterno?: StringNullableFilter<"usuarios"> | string | null
    apellidomaterno?: StringNullableFilter<"usuarios"> | string | null
    email?: StringNullableFilter<"usuarios"> | string | null
    contrasena?: StringNullableFilter<"usuarios"> | string | null
    foto?: StringNullableFilter<"usuarios"> | string | null
    telefono?: IntNullableFilter<"usuarios"> | number | null
    pais?: StringNullableFilter<"usuarios"> | string | null
    ciudad?: StringNullableFilter<"usuarios"> | string | null
    genero?: StringNullableFilter<"usuarios"> | string | null
    fechacreacion?: DateTimeFilter<"usuarios"> | Date | string
    verificado?: BoolNullableFilter<"usuarios"> | boolean | null
    reset_token?: StringNullableFilter<"usuarios"> | string | null
    agenda?: AgendaListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    rol?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    apellidopaterno?: SortOrderInput | SortOrder
    apellidomaterno?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contrasena?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    pais?: SortOrderInput | SortOrder
    ciudad?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    fechacreacion?: SortOrder
    verificado?: SortOrderInput | SortOrder
    reset_token?: SortOrderInput | SortOrder
    agenda?: agendaOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    rol?: StringNullableFilter<"usuarios"> | string | null
    nombre?: StringNullableFilter<"usuarios"> | string | null
    apellidopaterno?: StringNullableFilter<"usuarios"> | string | null
    apellidomaterno?: StringNullableFilter<"usuarios"> | string | null
    contrasena?: StringNullableFilter<"usuarios"> | string | null
    foto?: StringNullableFilter<"usuarios"> | string | null
    telefono?: IntNullableFilter<"usuarios"> | number | null
    pais?: StringNullableFilter<"usuarios"> | string | null
    ciudad?: StringNullableFilter<"usuarios"> | string | null
    genero?: StringNullableFilter<"usuarios"> | string | null
    fechacreacion?: DateTimeFilter<"usuarios"> | Date | string
    verificado?: BoolNullableFilter<"usuarios"> | boolean | null
    reset_token?: StringNullableFilter<"usuarios"> | string | null
    agenda?: AgendaListRelationFilter
  }, "id_usuario" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    rol?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    apellidopaterno?: SortOrderInput | SortOrder
    apellidomaterno?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contrasena?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    pais?: SortOrderInput | SortOrder
    ciudad?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    fechacreacion?: SortOrder
    verificado?: SortOrderInput | SortOrder
    reset_token?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    rol?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    nombre?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    apellidopaterno?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    apellidomaterno?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    email?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    contrasena?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    foto?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    telefono?: IntNullableWithAggregatesFilter<"usuarios"> | number | null
    pais?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    ciudad?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    genero?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    fechacreacion?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
    verificado?: BoolNullableWithAggregatesFilter<"usuarios"> | boolean | null
    reset_token?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
  }

  export type eventosWhereInput = {
    AND?: eventosWhereInput | eventosWhereInput[]
    OR?: eventosWhereInput[]
    NOT?: eventosWhereInput | eventosWhereInput[]
    id_evento?: IntFilter<"eventos"> | number
    titulo?: StringNullableFilter<"eventos"> | string | null
    descripcion?: StringNullableFilter<"eventos"> | string | null
    foto_evento?: StringNullableFilter<"eventos"> | string | null
    hora_inicio?: StringNullableFilter<"eventos"> | string | null
    hora_fin?: StringNullableFilter<"eventos"> | string | null
    fecha?: DateTimeNullableFilter<"eventos"> | Date | string | null
    costo?: StringNullableFilter<"eventos"> | string | null
    modalidad?: StringNullableFilter<"eventos"> | string | null
    ubicacion?: StringNullableFilter<"eventos"> | string | null
    link_reunion?: StringNullableFilter<"eventos"> | string | null
    reunion_iniciada?: BoolNullableFilter<"eventos"> | boolean | null
    agenda?: AgendaListRelationFilter
    expositores?: Eventos_expositoresListRelationFilter
    patrocinadores?: Eventos_patrocinadoresListRelationFilter
  }

  export type eventosOrderByWithRelationInput = {
    id_evento?: SortOrder
    titulo?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    foto_evento?: SortOrderInput | SortOrder
    hora_inicio?: SortOrderInput | SortOrder
    hora_fin?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    costo?: SortOrderInput | SortOrder
    modalidad?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    link_reunion?: SortOrderInput | SortOrder
    reunion_iniciada?: SortOrderInput | SortOrder
    agenda?: agendaOrderByRelationAggregateInput
    expositores?: eventos_expositoresOrderByRelationAggregateInput
    patrocinadores?: eventos_patrocinadoresOrderByRelationAggregateInput
  }

  export type eventosWhereUniqueInput = Prisma.AtLeast<{
    id_evento?: number
    AND?: eventosWhereInput | eventosWhereInput[]
    OR?: eventosWhereInput[]
    NOT?: eventosWhereInput | eventosWhereInput[]
    titulo?: StringNullableFilter<"eventos"> | string | null
    descripcion?: StringNullableFilter<"eventos"> | string | null
    foto_evento?: StringNullableFilter<"eventos"> | string | null
    hora_inicio?: StringNullableFilter<"eventos"> | string | null
    hora_fin?: StringNullableFilter<"eventos"> | string | null
    fecha?: DateTimeNullableFilter<"eventos"> | Date | string | null
    costo?: StringNullableFilter<"eventos"> | string | null
    modalidad?: StringNullableFilter<"eventos"> | string | null
    ubicacion?: StringNullableFilter<"eventos"> | string | null
    link_reunion?: StringNullableFilter<"eventos"> | string | null
    reunion_iniciada?: BoolNullableFilter<"eventos"> | boolean | null
    agenda?: AgendaListRelationFilter
    expositores?: Eventos_expositoresListRelationFilter
    patrocinadores?: Eventos_patrocinadoresListRelationFilter
  }, "id_evento">

  export type eventosOrderByWithAggregationInput = {
    id_evento?: SortOrder
    titulo?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    foto_evento?: SortOrderInput | SortOrder
    hora_inicio?: SortOrderInput | SortOrder
    hora_fin?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    costo?: SortOrderInput | SortOrder
    modalidad?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    link_reunion?: SortOrderInput | SortOrder
    reunion_iniciada?: SortOrderInput | SortOrder
    _count?: eventosCountOrderByAggregateInput
    _avg?: eventosAvgOrderByAggregateInput
    _max?: eventosMaxOrderByAggregateInput
    _min?: eventosMinOrderByAggregateInput
    _sum?: eventosSumOrderByAggregateInput
  }

  export type eventosScalarWhereWithAggregatesInput = {
    AND?: eventosScalarWhereWithAggregatesInput | eventosScalarWhereWithAggregatesInput[]
    OR?: eventosScalarWhereWithAggregatesInput[]
    NOT?: eventosScalarWhereWithAggregatesInput | eventosScalarWhereWithAggregatesInput[]
    id_evento?: IntWithAggregatesFilter<"eventos"> | number
    titulo?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    foto_evento?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    hora_inicio?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    hora_fin?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    fecha?: DateTimeNullableWithAggregatesFilter<"eventos"> | Date | string | null
    costo?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    modalidad?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    ubicacion?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    link_reunion?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    reunion_iniciada?: BoolNullableWithAggregatesFilter<"eventos"> | boolean | null
  }

  export type expositoresWhereInput = {
    AND?: expositoresWhereInput | expositoresWhereInput[]
    OR?: expositoresWhereInput[]
    NOT?: expositoresWhereInput | expositoresWhereInput[]
    id_expositor?: IntFilter<"expositores"> | number
    nombre?: StringNullableFilter<"expositores"> | string | null
    especialidad?: StringNullableFilter<"expositores"> | string | null
    institucion?: StringNullableFilter<"expositores"> | string | null
    contacto?: StringNullableFilter<"expositores"> | string | null
    eventos?: Eventos_expositoresListRelationFilter
  }

  export type expositoresOrderByWithRelationInput = {
    id_expositor?: SortOrder
    nombre?: SortOrderInput | SortOrder
    especialidad?: SortOrderInput | SortOrder
    institucion?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    eventos?: eventos_expositoresOrderByRelationAggregateInput
  }

  export type expositoresWhereUniqueInput = Prisma.AtLeast<{
    id_expositor?: number
    AND?: expositoresWhereInput | expositoresWhereInput[]
    OR?: expositoresWhereInput[]
    NOT?: expositoresWhereInput | expositoresWhereInput[]
    nombre?: StringNullableFilter<"expositores"> | string | null
    especialidad?: StringNullableFilter<"expositores"> | string | null
    institucion?: StringNullableFilter<"expositores"> | string | null
    contacto?: StringNullableFilter<"expositores"> | string | null
    eventos?: Eventos_expositoresListRelationFilter
  }, "id_expositor">

  export type expositoresOrderByWithAggregationInput = {
    id_expositor?: SortOrder
    nombre?: SortOrderInput | SortOrder
    especialidad?: SortOrderInput | SortOrder
    institucion?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    _count?: expositoresCountOrderByAggregateInput
    _avg?: expositoresAvgOrderByAggregateInput
    _max?: expositoresMaxOrderByAggregateInput
    _min?: expositoresMinOrderByAggregateInput
    _sum?: expositoresSumOrderByAggregateInput
  }

  export type expositoresScalarWhereWithAggregatesInput = {
    AND?: expositoresScalarWhereWithAggregatesInput | expositoresScalarWhereWithAggregatesInput[]
    OR?: expositoresScalarWhereWithAggregatesInput[]
    NOT?: expositoresScalarWhereWithAggregatesInput | expositoresScalarWhereWithAggregatesInput[]
    id_expositor?: IntWithAggregatesFilter<"expositores"> | number
    nombre?: StringNullableWithAggregatesFilter<"expositores"> | string | null
    especialidad?: StringNullableWithAggregatesFilter<"expositores"> | string | null
    institucion?: StringNullableWithAggregatesFilter<"expositores"> | string | null
    contacto?: StringNullableWithAggregatesFilter<"expositores"> | string | null
  }

  export type eventos_expositoresWhereInput = {
    AND?: eventos_expositoresWhereInput | eventos_expositoresWhereInput[]
    OR?: eventos_expositoresWhereInput[]
    NOT?: eventos_expositoresWhereInput | eventos_expositoresWhereInput[]
    id_evento?: IntFilter<"eventos_expositores"> | number
    id_expositor?: IntFilter<"eventos_expositores"> | number
    evento?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    expositor?: XOR<ExpositoresScalarRelationFilter, expositoresWhereInput>
  }

  export type eventos_expositoresOrderByWithRelationInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
    evento?: eventosOrderByWithRelationInput
    expositor?: expositoresOrderByWithRelationInput
  }

  export type eventos_expositoresWhereUniqueInput = Prisma.AtLeast<{
    id_evento_id_expositor?: eventos_expositoresId_eventoId_expositorCompoundUniqueInput
    AND?: eventos_expositoresWhereInput | eventos_expositoresWhereInput[]
    OR?: eventos_expositoresWhereInput[]
    NOT?: eventos_expositoresWhereInput | eventos_expositoresWhereInput[]
    id_evento?: IntFilter<"eventos_expositores"> | number
    id_expositor?: IntFilter<"eventos_expositores"> | number
    evento?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    expositor?: XOR<ExpositoresScalarRelationFilter, expositoresWhereInput>
  }, "id_evento_id_expositor">

  export type eventos_expositoresOrderByWithAggregationInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
    _count?: eventos_expositoresCountOrderByAggregateInput
    _avg?: eventos_expositoresAvgOrderByAggregateInput
    _max?: eventos_expositoresMaxOrderByAggregateInput
    _min?: eventos_expositoresMinOrderByAggregateInput
    _sum?: eventos_expositoresSumOrderByAggregateInput
  }

  export type eventos_expositoresScalarWhereWithAggregatesInput = {
    AND?: eventos_expositoresScalarWhereWithAggregatesInput | eventos_expositoresScalarWhereWithAggregatesInput[]
    OR?: eventos_expositoresScalarWhereWithAggregatesInput[]
    NOT?: eventos_expositoresScalarWhereWithAggregatesInput | eventos_expositoresScalarWhereWithAggregatesInput[]
    id_evento?: IntWithAggregatesFilter<"eventos_expositores"> | number
    id_expositor?: IntWithAggregatesFilter<"eventos_expositores"> | number
  }

  export type patrocinadoresWhereInput = {
    AND?: patrocinadoresWhereInput | patrocinadoresWhereInput[]
    OR?: patrocinadoresWhereInput[]
    NOT?: patrocinadoresWhereInput | patrocinadoresWhereInput[]
    id_patrocinador?: IntFilter<"patrocinadores"> | number
    razon_social?: StringNullableFilter<"patrocinadores"> | string | null
    institucion?: StringNullableFilter<"patrocinadores"> | string | null
    eventos?: Eventos_patrocinadoresListRelationFilter
  }

  export type patrocinadoresOrderByWithRelationInput = {
    id_patrocinador?: SortOrder
    razon_social?: SortOrderInput | SortOrder
    institucion?: SortOrderInput | SortOrder
    eventos?: eventos_patrocinadoresOrderByRelationAggregateInput
  }

  export type patrocinadoresWhereUniqueInput = Prisma.AtLeast<{
    id_patrocinador?: number
    AND?: patrocinadoresWhereInput | patrocinadoresWhereInput[]
    OR?: patrocinadoresWhereInput[]
    NOT?: patrocinadoresWhereInput | patrocinadoresWhereInput[]
    razon_social?: StringNullableFilter<"patrocinadores"> | string | null
    institucion?: StringNullableFilter<"patrocinadores"> | string | null
    eventos?: Eventos_patrocinadoresListRelationFilter
  }, "id_patrocinador">

  export type patrocinadoresOrderByWithAggregationInput = {
    id_patrocinador?: SortOrder
    razon_social?: SortOrderInput | SortOrder
    institucion?: SortOrderInput | SortOrder
    _count?: patrocinadoresCountOrderByAggregateInput
    _avg?: patrocinadoresAvgOrderByAggregateInput
    _max?: patrocinadoresMaxOrderByAggregateInput
    _min?: patrocinadoresMinOrderByAggregateInput
    _sum?: patrocinadoresSumOrderByAggregateInput
  }

  export type patrocinadoresScalarWhereWithAggregatesInput = {
    AND?: patrocinadoresScalarWhereWithAggregatesInput | patrocinadoresScalarWhereWithAggregatesInput[]
    OR?: patrocinadoresScalarWhereWithAggregatesInput[]
    NOT?: patrocinadoresScalarWhereWithAggregatesInput | patrocinadoresScalarWhereWithAggregatesInput[]
    id_patrocinador?: IntWithAggregatesFilter<"patrocinadores"> | number
    razon_social?: StringNullableWithAggregatesFilter<"patrocinadores"> | string | null
    institucion?: StringNullableWithAggregatesFilter<"patrocinadores"> | string | null
  }

  export type eventos_patrocinadoresWhereInput = {
    AND?: eventos_patrocinadoresWhereInput | eventos_patrocinadoresWhereInput[]
    OR?: eventos_patrocinadoresWhereInput[]
    NOT?: eventos_patrocinadoresWhereInput | eventos_patrocinadoresWhereInput[]
    id_evento?: IntFilter<"eventos_patrocinadores"> | number
    id_patrocinador?: IntFilter<"eventos_patrocinadores"> | number
    evento?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    patrocinador?: XOR<PatrocinadoresScalarRelationFilter, patrocinadoresWhereInput>
  }

  export type eventos_patrocinadoresOrderByWithRelationInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
    evento?: eventosOrderByWithRelationInput
    patrocinador?: patrocinadoresOrderByWithRelationInput
  }

  export type eventos_patrocinadoresWhereUniqueInput = Prisma.AtLeast<{
    id_evento_id_patrocinador?: eventos_patrocinadoresId_eventoId_patrocinadorCompoundUniqueInput
    AND?: eventos_patrocinadoresWhereInput | eventos_patrocinadoresWhereInput[]
    OR?: eventos_patrocinadoresWhereInput[]
    NOT?: eventos_patrocinadoresWhereInput | eventos_patrocinadoresWhereInput[]
    id_evento?: IntFilter<"eventos_patrocinadores"> | number
    id_patrocinador?: IntFilter<"eventos_patrocinadores"> | number
    evento?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    patrocinador?: XOR<PatrocinadoresScalarRelationFilter, patrocinadoresWhereInput>
  }, "id_evento_id_patrocinador">

  export type eventos_patrocinadoresOrderByWithAggregationInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
    _count?: eventos_patrocinadoresCountOrderByAggregateInput
    _avg?: eventos_patrocinadoresAvgOrderByAggregateInput
    _max?: eventos_patrocinadoresMaxOrderByAggregateInput
    _min?: eventos_patrocinadoresMinOrderByAggregateInput
    _sum?: eventos_patrocinadoresSumOrderByAggregateInput
  }

  export type eventos_patrocinadoresScalarWhereWithAggregatesInput = {
    AND?: eventos_patrocinadoresScalarWhereWithAggregatesInput | eventos_patrocinadoresScalarWhereWithAggregatesInput[]
    OR?: eventos_patrocinadoresScalarWhereWithAggregatesInput[]
    NOT?: eventos_patrocinadoresScalarWhereWithAggregatesInput | eventos_patrocinadoresScalarWhereWithAggregatesInput[]
    id_evento?: IntWithAggregatesFilter<"eventos_patrocinadores"> | number
    id_patrocinador?: IntWithAggregatesFilter<"eventos_patrocinadores"> | number
  }

  export type agendaWhereInput = {
    AND?: agendaWhereInput | agendaWhereInput[]
    OR?: agendaWhereInput[]
    NOT?: agendaWhereInput | agendaWhereInput[]
    id_agenda?: IntFilter<"agenda"> | number
    id_usuario?: IntFilter<"agenda"> | number
    id_evento?: IntFilter<"agenda"> | number
    actividad?: StringNullableFilter<"agenda"> | string | null
    fecha?: DateTimeNullableFilter<"agenda"> | Date | string | null
    comentario?: StringNullableFilter<"agenda"> | string | null
    calificacion?: IntNullableFilter<"agenda"> | number | null
    asistio?: BoolNullableFilter<"agenda"> | boolean | null
    hora_ingreso?: DateTimeNullableFilter<"agenda"> | Date | string | null
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    evento?: XOR<EventosScalarRelationFilter, eventosWhereInput>
  }

  export type agendaOrderByWithRelationInput = {
    id_agenda?: SortOrder
    id_usuario?: SortOrder
    id_evento?: SortOrder
    actividad?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    calificacion?: SortOrderInput | SortOrder
    asistio?: SortOrderInput | SortOrder
    hora_ingreso?: SortOrderInput | SortOrder
    usuario?: usuariosOrderByWithRelationInput
    evento?: eventosOrderByWithRelationInput
  }

  export type agendaWhereUniqueInput = Prisma.AtLeast<{
    id_agenda?: number
    AND?: agendaWhereInput | agendaWhereInput[]
    OR?: agendaWhereInput[]
    NOT?: agendaWhereInput | agendaWhereInput[]
    id_usuario?: IntFilter<"agenda"> | number
    id_evento?: IntFilter<"agenda"> | number
    actividad?: StringNullableFilter<"agenda"> | string | null
    fecha?: DateTimeNullableFilter<"agenda"> | Date | string | null
    comentario?: StringNullableFilter<"agenda"> | string | null
    calificacion?: IntNullableFilter<"agenda"> | number | null
    asistio?: BoolNullableFilter<"agenda"> | boolean | null
    hora_ingreso?: DateTimeNullableFilter<"agenda"> | Date | string | null
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    evento?: XOR<EventosScalarRelationFilter, eventosWhereInput>
  }, "id_agenda">

  export type agendaOrderByWithAggregationInput = {
    id_agenda?: SortOrder
    id_usuario?: SortOrder
    id_evento?: SortOrder
    actividad?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    calificacion?: SortOrderInput | SortOrder
    asistio?: SortOrderInput | SortOrder
    hora_ingreso?: SortOrderInput | SortOrder
    _count?: agendaCountOrderByAggregateInput
    _avg?: agendaAvgOrderByAggregateInput
    _max?: agendaMaxOrderByAggregateInput
    _min?: agendaMinOrderByAggregateInput
    _sum?: agendaSumOrderByAggregateInput
  }

  export type agendaScalarWhereWithAggregatesInput = {
    AND?: agendaScalarWhereWithAggregatesInput | agendaScalarWhereWithAggregatesInput[]
    OR?: agendaScalarWhereWithAggregatesInput[]
    NOT?: agendaScalarWhereWithAggregatesInput | agendaScalarWhereWithAggregatesInput[]
    id_agenda?: IntWithAggregatesFilter<"agenda"> | number
    id_usuario?: IntWithAggregatesFilter<"agenda"> | number
    id_evento?: IntWithAggregatesFilter<"agenda"> | number
    actividad?: StringNullableWithAggregatesFilter<"agenda"> | string | null
    fecha?: DateTimeNullableWithAggregatesFilter<"agenda"> | Date | string | null
    comentario?: StringNullableWithAggregatesFilter<"agenda"> | string | null
    calificacion?: IntNullableWithAggregatesFilter<"agenda"> | number | null
    asistio?: BoolNullableWithAggregatesFilter<"agenda"> | boolean | null
    hora_ingreso?: DateTimeNullableWithAggregatesFilter<"agenda"> | Date | string | null
  }

  export type usuariosCreateInput = {
    rol?: string | null
    nombre?: string | null
    apellidopaterno?: string | null
    apellidomaterno?: string | null
    email?: string | null
    contrasena?: string | null
    foto?: string | null
    telefono?: number | null
    pais?: string | null
    ciudad?: string | null
    genero?: string | null
    fechacreacion?: Date | string
    verificado?: boolean | null
    reset_token?: string | null
    agenda?: agendaCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    rol?: string | null
    nombre?: string | null
    apellidopaterno?: string | null
    apellidomaterno?: string | null
    email?: string | null
    contrasena?: string | null
    foto?: string | null
    telefono?: number | null
    pais?: string | null
    ciudad?: string | null
    genero?: string | null
    fechacreacion?: Date | string
    verificado?: boolean | null
    reset_token?: string | null
    agenda?: agendaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUpdateInput = {
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidopaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidomaterno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableIntFieldUpdateOperationsInput | number | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    fechacreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    agenda?: agendaUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidopaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidomaterno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableIntFieldUpdateOperationsInput | number | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    fechacreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    agenda?: agendaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    rol?: string | null
    nombre?: string | null
    apellidopaterno?: string | null
    apellidomaterno?: string | null
    email?: string | null
    contrasena?: string | null
    foto?: string | null
    telefono?: number | null
    pais?: string | null
    ciudad?: string | null
    genero?: string | null
    fechacreacion?: Date | string
    verificado?: boolean | null
    reset_token?: string | null
  }

  export type usuariosUpdateManyMutationInput = {
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidopaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidomaterno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableIntFieldUpdateOperationsInput | number | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    fechacreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidopaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidomaterno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableIntFieldUpdateOperationsInput | number | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    fechacreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventosCreateInput = {
    titulo?: string | null
    descripcion?: string | null
    foto_evento?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    fecha?: Date | string | null
    costo?: string | null
    modalidad?: string | null
    ubicacion?: string | null
    link_reunion?: string | null
    reunion_iniciada?: boolean | null
    agenda?: agendaCreateNestedManyWithoutEventoInput
    expositores?: eventos_expositoresCreateNestedManyWithoutEventoInput
    patrocinadores?: eventos_patrocinadoresCreateNestedManyWithoutEventoInput
  }

  export type eventosUncheckedCreateInput = {
    id_evento?: number
    titulo?: string | null
    descripcion?: string | null
    foto_evento?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    fecha?: Date | string | null
    costo?: string | null
    modalidad?: string | null
    ubicacion?: string | null
    link_reunion?: string | null
    reunion_iniciada?: boolean | null
    agenda?: agendaUncheckedCreateNestedManyWithoutEventoInput
    expositores?: eventos_expositoresUncheckedCreateNestedManyWithoutEventoInput
    patrocinadores?: eventos_patrocinadoresUncheckedCreateNestedManyWithoutEventoInput
  }

  export type eventosUpdateInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evento?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    modalidad?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    reunion_iniciada?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agenda?: agendaUpdateManyWithoutEventoNestedInput
    expositores?: eventos_expositoresUpdateManyWithoutEventoNestedInput
    patrocinadores?: eventos_patrocinadoresUpdateManyWithoutEventoNestedInput
  }

  export type eventosUncheckedUpdateInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evento?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    modalidad?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    reunion_iniciada?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agenda?: agendaUncheckedUpdateManyWithoutEventoNestedInput
    expositores?: eventos_expositoresUncheckedUpdateManyWithoutEventoNestedInput
    patrocinadores?: eventos_patrocinadoresUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type eventosCreateManyInput = {
    id_evento?: number
    titulo?: string | null
    descripcion?: string | null
    foto_evento?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    fecha?: Date | string | null
    costo?: string | null
    modalidad?: string | null
    ubicacion?: string | null
    link_reunion?: string | null
    reunion_iniciada?: boolean | null
  }

  export type eventosUpdateManyMutationInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evento?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    modalidad?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    reunion_iniciada?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type eventosUncheckedUpdateManyInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evento?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    modalidad?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    reunion_iniciada?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type expositoresCreateInput = {
    nombre?: string | null
    especialidad?: string | null
    institucion?: string | null
    contacto?: string | null
    eventos?: eventos_expositoresCreateNestedManyWithoutExpositorInput
  }

  export type expositoresUncheckedCreateInput = {
    id_expositor?: number
    nombre?: string | null
    especialidad?: string | null
    institucion?: string | null
    contacto?: string | null
    eventos?: eventos_expositoresUncheckedCreateNestedManyWithoutExpositorInput
  }

  export type expositoresUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: eventos_expositoresUpdateManyWithoutExpositorNestedInput
  }

  export type expositoresUncheckedUpdateInput = {
    id_expositor?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: eventos_expositoresUncheckedUpdateManyWithoutExpositorNestedInput
  }

  export type expositoresCreateManyInput = {
    id_expositor?: number
    nombre?: string | null
    especialidad?: string | null
    institucion?: string | null
    contacto?: string | null
  }

  export type expositoresUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type expositoresUncheckedUpdateManyInput = {
    id_expositor?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventos_expositoresCreateInput = {
    evento: eventosCreateNestedOneWithoutExpositoresInput
    expositor: expositoresCreateNestedOneWithoutEventosInput
  }

  export type eventos_expositoresUncheckedCreateInput = {
    id_evento: number
    id_expositor: number
  }

  export type eventos_expositoresUpdateInput = {
    evento?: eventosUpdateOneRequiredWithoutExpositoresNestedInput
    expositor?: expositoresUpdateOneRequiredWithoutEventosNestedInput
  }

  export type eventos_expositoresUncheckedUpdateInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_expositor?: IntFieldUpdateOperationsInput | number
  }

  export type eventos_expositoresCreateManyInput = {
    id_evento: number
    id_expositor: number
  }

  export type eventos_expositoresUpdateManyMutationInput = {

  }

  export type eventos_expositoresUncheckedUpdateManyInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_expositor?: IntFieldUpdateOperationsInput | number
  }

  export type patrocinadoresCreateInput = {
    razon_social?: string | null
    institucion?: string | null
    eventos?: eventos_patrocinadoresCreateNestedManyWithoutPatrocinadorInput
  }

  export type patrocinadoresUncheckedCreateInput = {
    id_patrocinador?: number
    razon_social?: string | null
    institucion?: string | null
    eventos?: eventos_patrocinadoresUncheckedCreateNestedManyWithoutPatrocinadorInput
  }

  export type patrocinadoresUpdateInput = {
    razon_social?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: eventos_patrocinadoresUpdateManyWithoutPatrocinadorNestedInput
  }

  export type patrocinadoresUncheckedUpdateInput = {
    id_patrocinador?: IntFieldUpdateOperationsInput | number
    razon_social?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: eventos_patrocinadoresUncheckedUpdateManyWithoutPatrocinadorNestedInput
  }

  export type patrocinadoresCreateManyInput = {
    id_patrocinador?: number
    razon_social?: string | null
    institucion?: string | null
  }

  export type patrocinadoresUpdateManyMutationInput = {
    razon_social?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type patrocinadoresUncheckedUpdateManyInput = {
    id_patrocinador?: IntFieldUpdateOperationsInput | number
    razon_social?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventos_patrocinadoresCreateInput = {
    evento: eventosCreateNestedOneWithoutPatrocinadoresInput
    patrocinador: patrocinadoresCreateNestedOneWithoutEventosInput
  }

  export type eventos_patrocinadoresUncheckedCreateInput = {
    id_evento: number
    id_patrocinador: number
  }

  export type eventos_patrocinadoresUpdateInput = {
    evento?: eventosUpdateOneRequiredWithoutPatrocinadoresNestedInput
    patrocinador?: patrocinadoresUpdateOneRequiredWithoutEventosNestedInput
  }

  export type eventos_patrocinadoresUncheckedUpdateInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_patrocinador?: IntFieldUpdateOperationsInput | number
  }

  export type eventos_patrocinadoresCreateManyInput = {
    id_evento: number
    id_patrocinador: number
  }

  export type eventos_patrocinadoresUpdateManyMutationInput = {

  }

  export type eventos_patrocinadoresUncheckedUpdateManyInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_patrocinador?: IntFieldUpdateOperationsInput | number
  }

  export type agendaCreateInput = {
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
    usuario: usuariosCreateNestedOneWithoutAgendaInput
    evento: eventosCreateNestedOneWithoutAgendaInput
  }

  export type agendaUncheckedCreateInput = {
    id_agenda?: number
    id_usuario: number
    id_evento: number
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
  }

  export type agendaUpdateInput = {
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuariosUpdateOneRequiredWithoutAgendaNestedInput
    evento?: eventosUpdateOneRequiredWithoutAgendaNestedInput
  }

  export type agendaUncheckedUpdateInput = {
    id_agenda?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type agendaCreateManyInput = {
    id_agenda?: number
    id_usuario: number
    id_evento: number
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
  }

  export type agendaUpdateManyMutationInput = {
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type agendaUncheckedUpdateManyInput = {
    id_agenda?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AgendaListRelationFilter = {
    every?: agendaWhereInput
    some?: agendaWhereInput
    none?: agendaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type agendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    rol?: SortOrder
    nombre?: SortOrder
    apellidopaterno?: SortOrder
    apellidomaterno?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    foto?: SortOrder
    telefono?: SortOrder
    pais?: SortOrder
    ciudad?: SortOrder
    genero?: SortOrder
    fechacreacion?: SortOrder
    verificado?: SortOrder
    reset_token?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    telefono?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    rol?: SortOrder
    nombre?: SortOrder
    apellidopaterno?: SortOrder
    apellidomaterno?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    foto?: SortOrder
    telefono?: SortOrder
    pais?: SortOrder
    ciudad?: SortOrder
    genero?: SortOrder
    fechacreacion?: SortOrder
    verificado?: SortOrder
    reset_token?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    rol?: SortOrder
    nombre?: SortOrder
    apellidopaterno?: SortOrder
    apellidomaterno?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    foto?: SortOrder
    telefono?: SortOrder
    pais?: SortOrder
    ciudad?: SortOrder
    genero?: SortOrder
    fechacreacion?: SortOrder
    verificado?: SortOrder
    reset_token?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    telefono?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type Eventos_expositoresListRelationFilter = {
    every?: eventos_expositoresWhereInput
    some?: eventos_expositoresWhereInput
    none?: eventos_expositoresWhereInput
  }

  export type Eventos_patrocinadoresListRelationFilter = {
    every?: eventos_patrocinadoresWhereInput
    some?: eventos_patrocinadoresWhereInput
    none?: eventos_patrocinadoresWhereInput
  }

  export type eventos_expositoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventos_patrocinadoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventosCountOrderByAggregateInput = {
    id_evento?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    foto_evento?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
    fecha?: SortOrder
    costo?: SortOrder
    modalidad?: SortOrder
    ubicacion?: SortOrder
    link_reunion?: SortOrder
    reunion_iniciada?: SortOrder
  }

  export type eventosAvgOrderByAggregateInput = {
    id_evento?: SortOrder
  }

  export type eventosMaxOrderByAggregateInput = {
    id_evento?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    foto_evento?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
    fecha?: SortOrder
    costo?: SortOrder
    modalidad?: SortOrder
    ubicacion?: SortOrder
    link_reunion?: SortOrder
    reunion_iniciada?: SortOrder
  }

  export type eventosMinOrderByAggregateInput = {
    id_evento?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    foto_evento?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
    fecha?: SortOrder
    costo?: SortOrder
    modalidad?: SortOrder
    ubicacion?: SortOrder
    link_reunion?: SortOrder
    reunion_iniciada?: SortOrder
  }

  export type eventosSumOrderByAggregateInput = {
    id_evento?: SortOrder
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

  export type expositoresCountOrderByAggregateInput = {
    id_expositor?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    institucion?: SortOrder
    contacto?: SortOrder
  }

  export type expositoresAvgOrderByAggregateInput = {
    id_expositor?: SortOrder
  }

  export type expositoresMaxOrderByAggregateInput = {
    id_expositor?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    institucion?: SortOrder
    contacto?: SortOrder
  }

  export type expositoresMinOrderByAggregateInput = {
    id_expositor?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    institucion?: SortOrder
    contacto?: SortOrder
  }

  export type expositoresSumOrderByAggregateInput = {
    id_expositor?: SortOrder
  }

  export type EventosScalarRelationFilter = {
    is?: eventosWhereInput
    isNot?: eventosWhereInput
  }

  export type ExpositoresScalarRelationFilter = {
    is?: expositoresWhereInput
    isNot?: expositoresWhereInput
  }

  export type eventos_expositoresId_eventoId_expositorCompoundUniqueInput = {
    id_evento: number
    id_expositor: number
  }

  export type eventos_expositoresCountOrderByAggregateInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
  }

  export type eventos_expositoresAvgOrderByAggregateInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
  }

  export type eventos_expositoresMaxOrderByAggregateInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
  }

  export type eventos_expositoresMinOrderByAggregateInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
  }

  export type eventos_expositoresSumOrderByAggregateInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
  }

  export type patrocinadoresCountOrderByAggregateInput = {
    id_patrocinador?: SortOrder
    razon_social?: SortOrder
    institucion?: SortOrder
  }

  export type patrocinadoresAvgOrderByAggregateInput = {
    id_patrocinador?: SortOrder
  }

  export type patrocinadoresMaxOrderByAggregateInput = {
    id_patrocinador?: SortOrder
    razon_social?: SortOrder
    institucion?: SortOrder
  }

  export type patrocinadoresMinOrderByAggregateInput = {
    id_patrocinador?: SortOrder
    razon_social?: SortOrder
    institucion?: SortOrder
  }

  export type patrocinadoresSumOrderByAggregateInput = {
    id_patrocinador?: SortOrder
  }

  export type PatrocinadoresScalarRelationFilter = {
    is?: patrocinadoresWhereInput
    isNot?: patrocinadoresWhereInput
  }

  export type eventos_patrocinadoresId_eventoId_patrocinadorCompoundUniqueInput = {
    id_evento: number
    id_patrocinador: number
  }

  export type eventos_patrocinadoresCountOrderByAggregateInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
  }

  export type eventos_patrocinadoresAvgOrderByAggregateInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
  }

  export type eventos_patrocinadoresMaxOrderByAggregateInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
  }

  export type eventos_patrocinadoresMinOrderByAggregateInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
  }

  export type eventos_patrocinadoresSumOrderByAggregateInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type agendaCountOrderByAggregateInput = {
    id_agenda?: SortOrder
    id_usuario?: SortOrder
    id_evento?: SortOrder
    actividad?: SortOrder
    fecha?: SortOrder
    comentario?: SortOrder
    calificacion?: SortOrder
    asistio?: SortOrder
    hora_ingreso?: SortOrder
  }

  export type agendaAvgOrderByAggregateInput = {
    id_agenda?: SortOrder
    id_usuario?: SortOrder
    id_evento?: SortOrder
    calificacion?: SortOrder
  }

  export type agendaMaxOrderByAggregateInput = {
    id_agenda?: SortOrder
    id_usuario?: SortOrder
    id_evento?: SortOrder
    actividad?: SortOrder
    fecha?: SortOrder
    comentario?: SortOrder
    calificacion?: SortOrder
    asistio?: SortOrder
    hora_ingreso?: SortOrder
  }

  export type agendaMinOrderByAggregateInput = {
    id_agenda?: SortOrder
    id_usuario?: SortOrder
    id_evento?: SortOrder
    actividad?: SortOrder
    fecha?: SortOrder
    comentario?: SortOrder
    calificacion?: SortOrder
    asistio?: SortOrder
    hora_ingreso?: SortOrder
  }

  export type agendaSumOrderByAggregateInput = {
    id_agenda?: SortOrder
    id_usuario?: SortOrder
    id_evento?: SortOrder
    calificacion?: SortOrder
  }

  export type agendaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<agendaCreateWithoutUsuarioInput, agendaUncheckedCreateWithoutUsuarioInput> | agendaCreateWithoutUsuarioInput[] | agendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: agendaCreateOrConnectWithoutUsuarioInput | agendaCreateOrConnectWithoutUsuarioInput[]
    createMany?: agendaCreateManyUsuarioInputEnvelope
    connect?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
  }

  export type agendaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<agendaCreateWithoutUsuarioInput, agendaUncheckedCreateWithoutUsuarioInput> | agendaCreateWithoutUsuarioInput[] | agendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: agendaCreateOrConnectWithoutUsuarioInput | agendaCreateOrConnectWithoutUsuarioInput[]
    createMany?: agendaCreateManyUsuarioInputEnvelope
    connect?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type agendaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<agendaCreateWithoutUsuarioInput, agendaUncheckedCreateWithoutUsuarioInput> | agendaCreateWithoutUsuarioInput[] | agendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: agendaCreateOrConnectWithoutUsuarioInput | agendaCreateOrConnectWithoutUsuarioInput[]
    upsert?: agendaUpsertWithWhereUniqueWithoutUsuarioInput | agendaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: agendaCreateManyUsuarioInputEnvelope
    set?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    disconnect?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    delete?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    connect?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    update?: agendaUpdateWithWhereUniqueWithoutUsuarioInput | agendaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: agendaUpdateManyWithWhereWithoutUsuarioInput | agendaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: agendaScalarWhereInput | agendaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type agendaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<agendaCreateWithoutUsuarioInput, agendaUncheckedCreateWithoutUsuarioInput> | agendaCreateWithoutUsuarioInput[] | agendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: agendaCreateOrConnectWithoutUsuarioInput | agendaCreateOrConnectWithoutUsuarioInput[]
    upsert?: agendaUpsertWithWhereUniqueWithoutUsuarioInput | agendaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: agendaCreateManyUsuarioInputEnvelope
    set?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    disconnect?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    delete?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    connect?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    update?: agendaUpdateWithWhereUniqueWithoutUsuarioInput | agendaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: agendaUpdateManyWithWhereWithoutUsuarioInput | agendaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: agendaScalarWhereInput | agendaScalarWhereInput[]
  }

  export type agendaCreateNestedManyWithoutEventoInput = {
    create?: XOR<agendaCreateWithoutEventoInput, agendaUncheckedCreateWithoutEventoInput> | agendaCreateWithoutEventoInput[] | agendaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: agendaCreateOrConnectWithoutEventoInput | agendaCreateOrConnectWithoutEventoInput[]
    createMany?: agendaCreateManyEventoInputEnvelope
    connect?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
  }

  export type eventos_expositoresCreateNestedManyWithoutEventoInput = {
    create?: XOR<eventos_expositoresCreateWithoutEventoInput, eventos_expositoresUncheckedCreateWithoutEventoInput> | eventos_expositoresCreateWithoutEventoInput[] | eventos_expositoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: eventos_expositoresCreateOrConnectWithoutEventoInput | eventos_expositoresCreateOrConnectWithoutEventoInput[]
    createMany?: eventos_expositoresCreateManyEventoInputEnvelope
    connect?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
  }

  export type eventos_patrocinadoresCreateNestedManyWithoutEventoInput = {
    create?: XOR<eventos_patrocinadoresCreateWithoutEventoInput, eventos_patrocinadoresUncheckedCreateWithoutEventoInput> | eventos_patrocinadoresCreateWithoutEventoInput[] | eventos_patrocinadoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: eventos_patrocinadoresCreateOrConnectWithoutEventoInput | eventos_patrocinadoresCreateOrConnectWithoutEventoInput[]
    createMany?: eventos_patrocinadoresCreateManyEventoInputEnvelope
    connect?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
  }

  export type agendaUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<agendaCreateWithoutEventoInput, agendaUncheckedCreateWithoutEventoInput> | agendaCreateWithoutEventoInput[] | agendaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: agendaCreateOrConnectWithoutEventoInput | agendaCreateOrConnectWithoutEventoInput[]
    createMany?: agendaCreateManyEventoInputEnvelope
    connect?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
  }

  export type eventos_expositoresUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<eventos_expositoresCreateWithoutEventoInput, eventos_expositoresUncheckedCreateWithoutEventoInput> | eventos_expositoresCreateWithoutEventoInput[] | eventos_expositoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: eventos_expositoresCreateOrConnectWithoutEventoInput | eventos_expositoresCreateOrConnectWithoutEventoInput[]
    createMany?: eventos_expositoresCreateManyEventoInputEnvelope
    connect?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
  }

  export type eventos_patrocinadoresUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<eventos_patrocinadoresCreateWithoutEventoInput, eventos_patrocinadoresUncheckedCreateWithoutEventoInput> | eventos_patrocinadoresCreateWithoutEventoInput[] | eventos_patrocinadoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: eventos_patrocinadoresCreateOrConnectWithoutEventoInput | eventos_patrocinadoresCreateOrConnectWithoutEventoInput[]
    createMany?: eventos_patrocinadoresCreateManyEventoInputEnvelope
    connect?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type agendaUpdateManyWithoutEventoNestedInput = {
    create?: XOR<agendaCreateWithoutEventoInput, agendaUncheckedCreateWithoutEventoInput> | agendaCreateWithoutEventoInput[] | agendaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: agendaCreateOrConnectWithoutEventoInput | agendaCreateOrConnectWithoutEventoInput[]
    upsert?: agendaUpsertWithWhereUniqueWithoutEventoInput | agendaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: agendaCreateManyEventoInputEnvelope
    set?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    disconnect?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    delete?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    connect?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    update?: agendaUpdateWithWhereUniqueWithoutEventoInput | agendaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: agendaUpdateManyWithWhereWithoutEventoInput | agendaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: agendaScalarWhereInput | agendaScalarWhereInput[]
  }

  export type eventos_expositoresUpdateManyWithoutEventoNestedInput = {
    create?: XOR<eventos_expositoresCreateWithoutEventoInput, eventos_expositoresUncheckedCreateWithoutEventoInput> | eventos_expositoresCreateWithoutEventoInput[] | eventos_expositoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: eventos_expositoresCreateOrConnectWithoutEventoInput | eventos_expositoresCreateOrConnectWithoutEventoInput[]
    upsert?: eventos_expositoresUpsertWithWhereUniqueWithoutEventoInput | eventos_expositoresUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: eventos_expositoresCreateManyEventoInputEnvelope
    set?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    disconnect?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    delete?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    connect?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    update?: eventos_expositoresUpdateWithWhereUniqueWithoutEventoInput | eventos_expositoresUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: eventos_expositoresUpdateManyWithWhereWithoutEventoInput | eventos_expositoresUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: eventos_expositoresScalarWhereInput | eventos_expositoresScalarWhereInput[]
  }

  export type eventos_patrocinadoresUpdateManyWithoutEventoNestedInput = {
    create?: XOR<eventos_patrocinadoresCreateWithoutEventoInput, eventos_patrocinadoresUncheckedCreateWithoutEventoInput> | eventos_patrocinadoresCreateWithoutEventoInput[] | eventos_patrocinadoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: eventos_patrocinadoresCreateOrConnectWithoutEventoInput | eventos_patrocinadoresCreateOrConnectWithoutEventoInput[]
    upsert?: eventos_patrocinadoresUpsertWithWhereUniqueWithoutEventoInput | eventos_patrocinadoresUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: eventos_patrocinadoresCreateManyEventoInputEnvelope
    set?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    disconnect?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    delete?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    connect?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    update?: eventos_patrocinadoresUpdateWithWhereUniqueWithoutEventoInput | eventos_patrocinadoresUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: eventos_patrocinadoresUpdateManyWithWhereWithoutEventoInput | eventos_patrocinadoresUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: eventos_patrocinadoresScalarWhereInput | eventos_patrocinadoresScalarWhereInput[]
  }

  export type agendaUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<agendaCreateWithoutEventoInput, agendaUncheckedCreateWithoutEventoInput> | agendaCreateWithoutEventoInput[] | agendaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: agendaCreateOrConnectWithoutEventoInput | agendaCreateOrConnectWithoutEventoInput[]
    upsert?: agendaUpsertWithWhereUniqueWithoutEventoInput | agendaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: agendaCreateManyEventoInputEnvelope
    set?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    disconnect?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    delete?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    connect?: agendaWhereUniqueInput | agendaWhereUniqueInput[]
    update?: agendaUpdateWithWhereUniqueWithoutEventoInput | agendaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: agendaUpdateManyWithWhereWithoutEventoInput | agendaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: agendaScalarWhereInput | agendaScalarWhereInput[]
  }

  export type eventos_expositoresUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<eventos_expositoresCreateWithoutEventoInput, eventos_expositoresUncheckedCreateWithoutEventoInput> | eventos_expositoresCreateWithoutEventoInput[] | eventos_expositoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: eventos_expositoresCreateOrConnectWithoutEventoInput | eventos_expositoresCreateOrConnectWithoutEventoInput[]
    upsert?: eventos_expositoresUpsertWithWhereUniqueWithoutEventoInput | eventos_expositoresUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: eventos_expositoresCreateManyEventoInputEnvelope
    set?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    disconnect?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    delete?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    connect?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    update?: eventos_expositoresUpdateWithWhereUniqueWithoutEventoInput | eventos_expositoresUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: eventos_expositoresUpdateManyWithWhereWithoutEventoInput | eventos_expositoresUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: eventos_expositoresScalarWhereInput | eventos_expositoresScalarWhereInput[]
  }

  export type eventos_patrocinadoresUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<eventos_patrocinadoresCreateWithoutEventoInput, eventos_patrocinadoresUncheckedCreateWithoutEventoInput> | eventos_patrocinadoresCreateWithoutEventoInput[] | eventos_patrocinadoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: eventos_patrocinadoresCreateOrConnectWithoutEventoInput | eventos_patrocinadoresCreateOrConnectWithoutEventoInput[]
    upsert?: eventos_patrocinadoresUpsertWithWhereUniqueWithoutEventoInput | eventos_patrocinadoresUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: eventos_patrocinadoresCreateManyEventoInputEnvelope
    set?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    disconnect?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    delete?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    connect?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    update?: eventos_patrocinadoresUpdateWithWhereUniqueWithoutEventoInput | eventos_patrocinadoresUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: eventos_patrocinadoresUpdateManyWithWhereWithoutEventoInput | eventos_patrocinadoresUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: eventos_patrocinadoresScalarWhereInput | eventos_patrocinadoresScalarWhereInput[]
  }

  export type eventos_expositoresCreateNestedManyWithoutExpositorInput = {
    create?: XOR<eventos_expositoresCreateWithoutExpositorInput, eventos_expositoresUncheckedCreateWithoutExpositorInput> | eventos_expositoresCreateWithoutExpositorInput[] | eventos_expositoresUncheckedCreateWithoutExpositorInput[]
    connectOrCreate?: eventos_expositoresCreateOrConnectWithoutExpositorInput | eventos_expositoresCreateOrConnectWithoutExpositorInput[]
    createMany?: eventos_expositoresCreateManyExpositorInputEnvelope
    connect?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
  }

  export type eventos_expositoresUncheckedCreateNestedManyWithoutExpositorInput = {
    create?: XOR<eventos_expositoresCreateWithoutExpositorInput, eventos_expositoresUncheckedCreateWithoutExpositorInput> | eventos_expositoresCreateWithoutExpositorInput[] | eventos_expositoresUncheckedCreateWithoutExpositorInput[]
    connectOrCreate?: eventos_expositoresCreateOrConnectWithoutExpositorInput | eventos_expositoresCreateOrConnectWithoutExpositorInput[]
    createMany?: eventos_expositoresCreateManyExpositorInputEnvelope
    connect?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
  }

  export type eventos_expositoresUpdateManyWithoutExpositorNestedInput = {
    create?: XOR<eventos_expositoresCreateWithoutExpositorInput, eventos_expositoresUncheckedCreateWithoutExpositorInput> | eventos_expositoresCreateWithoutExpositorInput[] | eventos_expositoresUncheckedCreateWithoutExpositorInput[]
    connectOrCreate?: eventos_expositoresCreateOrConnectWithoutExpositorInput | eventos_expositoresCreateOrConnectWithoutExpositorInput[]
    upsert?: eventos_expositoresUpsertWithWhereUniqueWithoutExpositorInput | eventos_expositoresUpsertWithWhereUniqueWithoutExpositorInput[]
    createMany?: eventos_expositoresCreateManyExpositorInputEnvelope
    set?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    disconnect?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    delete?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    connect?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    update?: eventos_expositoresUpdateWithWhereUniqueWithoutExpositorInput | eventos_expositoresUpdateWithWhereUniqueWithoutExpositorInput[]
    updateMany?: eventos_expositoresUpdateManyWithWhereWithoutExpositorInput | eventos_expositoresUpdateManyWithWhereWithoutExpositorInput[]
    deleteMany?: eventos_expositoresScalarWhereInput | eventos_expositoresScalarWhereInput[]
  }

  export type eventos_expositoresUncheckedUpdateManyWithoutExpositorNestedInput = {
    create?: XOR<eventos_expositoresCreateWithoutExpositorInput, eventos_expositoresUncheckedCreateWithoutExpositorInput> | eventos_expositoresCreateWithoutExpositorInput[] | eventos_expositoresUncheckedCreateWithoutExpositorInput[]
    connectOrCreate?: eventos_expositoresCreateOrConnectWithoutExpositorInput | eventos_expositoresCreateOrConnectWithoutExpositorInput[]
    upsert?: eventos_expositoresUpsertWithWhereUniqueWithoutExpositorInput | eventos_expositoresUpsertWithWhereUniqueWithoutExpositorInput[]
    createMany?: eventos_expositoresCreateManyExpositorInputEnvelope
    set?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    disconnect?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    delete?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    connect?: eventos_expositoresWhereUniqueInput | eventos_expositoresWhereUniqueInput[]
    update?: eventos_expositoresUpdateWithWhereUniqueWithoutExpositorInput | eventos_expositoresUpdateWithWhereUniqueWithoutExpositorInput[]
    updateMany?: eventos_expositoresUpdateManyWithWhereWithoutExpositorInput | eventos_expositoresUpdateManyWithWhereWithoutExpositorInput[]
    deleteMany?: eventos_expositoresScalarWhereInput | eventos_expositoresScalarWhereInput[]
  }

  export type eventosCreateNestedOneWithoutExpositoresInput = {
    create?: XOR<eventosCreateWithoutExpositoresInput, eventosUncheckedCreateWithoutExpositoresInput>
    connectOrCreate?: eventosCreateOrConnectWithoutExpositoresInput
    connect?: eventosWhereUniqueInput
  }

  export type expositoresCreateNestedOneWithoutEventosInput = {
    create?: XOR<expositoresCreateWithoutEventosInput, expositoresUncheckedCreateWithoutEventosInput>
    connectOrCreate?: expositoresCreateOrConnectWithoutEventosInput
    connect?: expositoresWhereUniqueInput
  }

  export type eventosUpdateOneRequiredWithoutExpositoresNestedInput = {
    create?: XOR<eventosCreateWithoutExpositoresInput, eventosUncheckedCreateWithoutExpositoresInput>
    connectOrCreate?: eventosCreateOrConnectWithoutExpositoresInput
    upsert?: eventosUpsertWithoutExpositoresInput
    connect?: eventosWhereUniqueInput
    update?: XOR<XOR<eventosUpdateToOneWithWhereWithoutExpositoresInput, eventosUpdateWithoutExpositoresInput>, eventosUncheckedUpdateWithoutExpositoresInput>
  }

  export type expositoresUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<expositoresCreateWithoutEventosInput, expositoresUncheckedCreateWithoutEventosInput>
    connectOrCreate?: expositoresCreateOrConnectWithoutEventosInput
    upsert?: expositoresUpsertWithoutEventosInput
    connect?: expositoresWhereUniqueInput
    update?: XOR<XOR<expositoresUpdateToOneWithWhereWithoutEventosInput, expositoresUpdateWithoutEventosInput>, expositoresUncheckedUpdateWithoutEventosInput>
  }

  export type eventos_patrocinadoresCreateNestedManyWithoutPatrocinadorInput = {
    create?: XOR<eventos_patrocinadoresCreateWithoutPatrocinadorInput, eventos_patrocinadoresUncheckedCreateWithoutPatrocinadorInput> | eventos_patrocinadoresCreateWithoutPatrocinadorInput[] | eventos_patrocinadoresUncheckedCreateWithoutPatrocinadorInput[]
    connectOrCreate?: eventos_patrocinadoresCreateOrConnectWithoutPatrocinadorInput | eventos_patrocinadoresCreateOrConnectWithoutPatrocinadorInput[]
    createMany?: eventos_patrocinadoresCreateManyPatrocinadorInputEnvelope
    connect?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
  }

  export type eventos_patrocinadoresUncheckedCreateNestedManyWithoutPatrocinadorInput = {
    create?: XOR<eventos_patrocinadoresCreateWithoutPatrocinadorInput, eventos_patrocinadoresUncheckedCreateWithoutPatrocinadorInput> | eventos_patrocinadoresCreateWithoutPatrocinadorInput[] | eventos_patrocinadoresUncheckedCreateWithoutPatrocinadorInput[]
    connectOrCreate?: eventos_patrocinadoresCreateOrConnectWithoutPatrocinadorInput | eventos_patrocinadoresCreateOrConnectWithoutPatrocinadorInput[]
    createMany?: eventos_patrocinadoresCreateManyPatrocinadorInputEnvelope
    connect?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
  }

  export type eventos_patrocinadoresUpdateManyWithoutPatrocinadorNestedInput = {
    create?: XOR<eventos_patrocinadoresCreateWithoutPatrocinadorInput, eventos_patrocinadoresUncheckedCreateWithoutPatrocinadorInput> | eventos_patrocinadoresCreateWithoutPatrocinadorInput[] | eventos_patrocinadoresUncheckedCreateWithoutPatrocinadorInput[]
    connectOrCreate?: eventos_patrocinadoresCreateOrConnectWithoutPatrocinadorInput | eventos_patrocinadoresCreateOrConnectWithoutPatrocinadorInput[]
    upsert?: eventos_patrocinadoresUpsertWithWhereUniqueWithoutPatrocinadorInput | eventos_patrocinadoresUpsertWithWhereUniqueWithoutPatrocinadorInput[]
    createMany?: eventos_patrocinadoresCreateManyPatrocinadorInputEnvelope
    set?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    disconnect?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    delete?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    connect?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    update?: eventos_patrocinadoresUpdateWithWhereUniqueWithoutPatrocinadorInput | eventos_patrocinadoresUpdateWithWhereUniqueWithoutPatrocinadorInput[]
    updateMany?: eventos_patrocinadoresUpdateManyWithWhereWithoutPatrocinadorInput | eventos_patrocinadoresUpdateManyWithWhereWithoutPatrocinadorInput[]
    deleteMany?: eventos_patrocinadoresScalarWhereInput | eventos_patrocinadoresScalarWhereInput[]
  }

  export type eventos_patrocinadoresUncheckedUpdateManyWithoutPatrocinadorNestedInput = {
    create?: XOR<eventos_patrocinadoresCreateWithoutPatrocinadorInput, eventos_patrocinadoresUncheckedCreateWithoutPatrocinadorInput> | eventos_patrocinadoresCreateWithoutPatrocinadorInput[] | eventos_patrocinadoresUncheckedCreateWithoutPatrocinadorInput[]
    connectOrCreate?: eventos_patrocinadoresCreateOrConnectWithoutPatrocinadorInput | eventos_patrocinadoresCreateOrConnectWithoutPatrocinadorInput[]
    upsert?: eventos_patrocinadoresUpsertWithWhereUniqueWithoutPatrocinadorInput | eventos_patrocinadoresUpsertWithWhereUniqueWithoutPatrocinadorInput[]
    createMany?: eventos_patrocinadoresCreateManyPatrocinadorInputEnvelope
    set?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    disconnect?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    delete?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    connect?: eventos_patrocinadoresWhereUniqueInput | eventos_patrocinadoresWhereUniqueInput[]
    update?: eventos_patrocinadoresUpdateWithWhereUniqueWithoutPatrocinadorInput | eventos_patrocinadoresUpdateWithWhereUniqueWithoutPatrocinadorInput[]
    updateMany?: eventos_patrocinadoresUpdateManyWithWhereWithoutPatrocinadorInput | eventos_patrocinadoresUpdateManyWithWhereWithoutPatrocinadorInput[]
    deleteMany?: eventos_patrocinadoresScalarWhereInput | eventos_patrocinadoresScalarWhereInput[]
  }

  export type eventosCreateNestedOneWithoutPatrocinadoresInput = {
    create?: XOR<eventosCreateWithoutPatrocinadoresInput, eventosUncheckedCreateWithoutPatrocinadoresInput>
    connectOrCreate?: eventosCreateOrConnectWithoutPatrocinadoresInput
    connect?: eventosWhereUniqueInput
  }

  export type patrocinadoresCreateNestedOneWithoutEventosInput = {
    create?: XOR<patrocinadoresCreateWithoutEventosInput, patrocinadoresUncheckedCreateWithoutEventosInput>
    connectOrCreate?: patrocinadoresCreateOrConnectWithoutEventosInput
    connect?: patrocinadoresWhereUniqueInput
  }

  export type eventosUpdateOneRequiredWithoutPatrocinadoresNestedInput = {
    create?: XOR<eventosCreateWithoutPatrocinadoresInput, eventosUncheckedCreateWithoutPatrocinadoresInput>
    connectOrCreate?: eventosCreateOrConnectWithoutPatrocinadoresInput
    upsert?: eventosUpsertWithoutPatrocinadoresInput
    connect?: eventosWhereUniqueInput
    update?: XOR<XOR<eventosUpdateToOneWithWhereWithoutPatrocinadoresInput, eventosUpdateWithoutPatrocinadoresInput>, eventosUncheckedUpdateWithoutPatrocinadoresInput>
  }

  export type patrocinadoresUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<patrocinadoresCreateWithoutEventosInput, patrocinadoresUncheckedCreateWithoutEventosInput>
    connectOrCreate?: patrocinadoresCreateOrConnectWithoutEventosInput
    upsert?: patrocinadoresUpsertWithoutEventosInput
    connect?: patrocinadoresWhereUniqueInput
    update?: XOR<XOR<patrocinadoresUpdateToOneWithWhereWithoutEventosInput, patrocinadoresUpdateWithoutEventosInput>, patrocinadoresUncheckedUpdateWithoutEventosInput>
  }

  export type usuariosCreateNestedOneWithoutAgendaInput = {
    create?: XOR<usuariosCreateWithoutAgendaInput, usuariosUncheckedCreateWithoutAgendaInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutAgendaInput
    connect?: usuariosWhereUniqueInput
  }

  export type eventosCreateNestedOneWithoutAgendaInput = {
    create?: XOR<eventosCreateWithoutAgendaInput, eventosUncheckedCreateWithoutAgendaInput>
    connectOrCreate?: eventosCreateOrConnectWithoutAgendaInput
    connect?: eventosWhereUniqueInput
  }

  export type usuariosUpdateOneRequiredWithoutAgendaNestedInput = {
    create?: XOR<usuariosCreateWithoutAgendaInput, usuariosUncheckedCreateWithoutAgendaInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutAgendaInput
    upsert?: usuariosUpsertWithoutAgendaInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutAgendaInput, usuariosUpdateWithoutAgendaInput>, usuariosUncheckedUpdateWithoutAgendaInput>
  }

  export type eventosUpdateOneRequiredWithoutAgendaNestedInput = {
    create?: XOR<eventosCreateWithoutAgendaInput, eventosUncheckedCreateWithoutAgendaInput>
    connectOrCreate?: eventosCreateOrConnectWithoutAgendaInput
    upsert?: eventosUpsertWithoutAgendaInput
    connect?: eventosWhereUniqueInput
    update?: XOR<XOR<eventosUpdateToOneWithWhereWithoutAgendaInput, eventosUpdateWithoutAgendaInput>, eventosUncheckedUpdateWithoutAgendaInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type agendaCreateWithoutUsuarioInput = {
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
    evento: eventosCreateNestedOneWithoutAgendaInput
  }

  export type agendaUncheckedCreateWithoutUsuarioInput = {
    id_agenda?: number
    id_evento: number
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
  }

  export type agendaCreateOrConnectWithoutUsuarioInput = {
    where: agendaWhereUniqueInput
    create: XOR<agendaCreateWithoutUsuarioInput, agendaUncheckedCreateWithoutUsuarioInput>
  }

  export type agendaCreateManyUsuarioInputEnvelope = {
    data: agendaCreateManyUsuarioInput | agendaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type agendaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: agendaWhereUniqueInput
    update: XOR<agendaUpdateWithoutUsuarioInput, agendaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<agendaCreateWithoutUsuarioInput, agendaUncheckedCreateWithoutUsuarioInput>
  }

  export type agendaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: agendaWhereUniqueInput
    data: XOR<agendaUpdateWithoutUsuarioInput, agendaUncheckedUpdateWithoutUsuarioInput>
  }

  export type agendaUpdateManyWithWhereWithoutUsuarioInput = {
    where: agendaScalarWhereInput
    data: XOR<agendaUpdateManyMutationInput, agendaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type agendaScalarWhereInput = {
    AND?: agendaScalarWhereInput | agendaScalarWhereInput[]
    OR?: agendaScalarWhereInput[]
    NOT?: agendaScalarWhereInput | agendaScalarWhereInput[]
    id_agenda?: IntFilter<"agenda"> | number
    id_usuario?: IntFilter<"agenda"> | number
    id_evento?: IntFilter<"agenda"> | number
    actividad?: StringNullableFilter<"agenda"> | string | null
    fecha?: DateTimeNullableFilter<"agenda"> | Date | string | null
    comentario?: StringNullableFilter<"agenda"> | string | null
    calificacion?: IntNullableFilter<"agenda"> | number | null
    asistio?: BoolNullableFilter<"agenda"> | boolean | null
    hora_ingreso?: DateTimeNullableFilter<"agenda"> | Date | string | null
  }

  export type agendaCreateWithoutEventoInput = {
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
    usuario: usuariosCreateNestedOneWithoutAgendaInput
  }

  export type agendaUncheckedCreateWithoutEventoInput = {
    id_agenda?: number
    id_usuario: number
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
  }

  export type agendaCreateOrConnectWithoutEventoInput = {
    where: agendaWhereUniqueInput
    create: XOR<agendaCreateWithoutEventoInput, agendaUncheckedCreateWithoutEventoInput>
  }

  export type agendaCreateManyEventoInputEnvelope = {
    data: agendaCreateManyEventoInput | agendaCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type eventos_expositoresCreateWithoutEventoInput = {
    expositor: expositoresCreateNestedOneWithoutEventosInput
  }

  export type eventos_expositoresUncheckedCreateWithoutEventoInput = {
    id_expositor: number
  }

  export type eventos_expositoresCreateOrConnectWithoutEventoInput = {
    where: eventos_expositoresWhereUniqueInput
    create: XOR<eventos_expositoresCreateWithoutEventoInput, eventos_expositoresUncheckedCreateWithoutEventoInput>
  }

  export type eventos_expositoresCreateManyEventoInputEnvelope = {
    data: eventos_expositoresCreateManyEventoInput | eventos_expositoresCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type eventos_patrocinadoresCreateWithoutEventoInput = {
    patrocinador: patrocinadoresCreateNestedOneWithoutEventosInput
  }

  export type eventos_patrocinadoresUncheckedCreateWithoutEventoInput = {
    id_patrocinador: number
  }

  export type eventos_patrocinadoresCreateOrConnectWithoutEventoInput = {
    where: eventos_patrocinadoresWhereUniqueInput
    create: XOR<eventos_patrocinadoresCreateWithoutEventoInput, eventos_patrocinadoresUncheckedCreateWithoutEventoInput>
  }

  export type eventos_patrocinadoresCreateManyEventoInputEnvelope = {
    data: eventos_patrocinadoresCreateManyEventoInput | eventos_patrocinadoresCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type agendaUpsertWithWhereUniqueWithoutEventoInput = {
    where: agendaWhereUniqueInput
    update: XOR<agendaUpdateWithoutEventoInput, agendaUncheckedUpdateWithoutEventoInput>
    create: XOR<agendaCreateWithoutEventoInput, agendaUncheckedCreateWithoutEventoInput>
  }

  export type agendaUpdateWithWhereUniqueWithoutEventoInput = {
    where: agendaWhereUniqueInput
    data: XOR<agendaUpdateWithoutEventoInput, agendaUncheckedUpdateWithoutEventoInput>
  }

  export type agendaUpdateManyWithWhereWithoutEventoInput = {
    where: agendaScalarWhereInput
    data: XOR<agendaUpdateManyMutationInput, agendaUncheckedUpdateManyWithoutEventoInput>
  }

  export type eventos_expositoresUpsertWithWhereUniqueWithoutEventoInput = {
    where: eventos_expositoresWhereUniqueInput
    update: XOR<eventos_expositoresUpdateWithoutEventoInput, eventos_expositoresUncheckedUpdateWithoutEventoInput>
    create: XOR<eventos_expositoresCreateWithoutEventoInput, eventos_expositoresUncheckedCreateWithoutEventoInput>
  }

  export type eventos_expositoresUpdateWithWhereUniqueWithoutEventoInput = {
    where: eventos_expositoresWhereUniqueInput
    data: XOR<eventos_expositoresUpdateWithoutEventoInput, eventos_expositoresUncheckedUpdateWithoutEventoInput>
  }

  export type eventos_expositoresUpdateManyWithWhereWithoutEventoInput = {
    where: eventos_expositoresScalarWhereInput
    data: XOR<eventos_expositoresUpdateManyMutationInput, eventos_expositoresUncheckedUpdateManyWithoutEventoInput>
  }

  export type eventos_expositoresScalarWhereInput = {
    AND?: eventos_expositoresScalarWhereInput | eventos_expositoresScalarWhereInput[]
    OR?: eventos_expositoresScalarWhereInput[]
    NOT?: eventos_expositoresScalarWhereInput | eventos_expositoresScalarWhereInput[]
    id_evento?: IntFilter<"eventos_expositores"> | number
    id_expositor?: IntFilter<"eventos_expositores"> | number
  }

  export type eventos_patrocinadoresUpsertWithWhereUniqueWithoutEventoInput = {
    where: eventos_patrocinadoresWhereUniqueInput
    update: XOR<eventos_patrocinadoresUpdateWithoutEventoInput, eventos_patrocinadoresUncheckedUpdateWithoutEventoInput>
    create: XOR<eventos_patrocinadoresCreateWithoutEventoInput, eventos_patrocinadoresUncheckedCreateWithoutEventoInput>
  }

  export type eventos_patrocinadoresUpdateWithWhereUniqueWithoutEventoInput = {
    where: eventos_patrocinadoresWhereUniqueInput
    data: XOR<eventos_patrocinadoresUpdateWithoutEventoInput, eventos_patrocinadoresUncheckedUpdateWithoutEventoInput>
  }

  export type eventos_patrocinadoresUpdateManyWithWhereWithoutEventoInput = {
    where: eventos_patrocinadoresScalarWhereInput
    data: XOR<eventos_patrocinadoresUpdateManyMutationInput, eventos_patrocinadoresUncheckedUpdateManyWithoutEventoInput>
  }

  export type eventos_patrocinadoresScalarWhereInput = {
    AND?: eventos_patrocinadoresScalarWhereInput | eventos_patrocinadoresScalarWhereInput[]
    OR?: eventos_patrocinadoresScalarWhereInput[]
    NOT?: eventos_patrocinadoresScalarWhereInput | eventos_patrocinadoresScalarWhereInput[]
    id_evento?: IntFilter<"eventos_patrocinadores"> | number
    id_patrocinador?: IntFilter<"eventos_patrocinadores"> | number
  }

  export type eventos_expositoresCreateWithoutExpositorInput = {
    evento: eventosCreateNestedOneWithoutExpositoresInput
  }

  export type eventos_expositoresUncheckedCreateWithoutExpositorInput = {
    id_evento: number
  }

  export type eventos_expositoresCreateOrConnectWithoutExpositorInput = {
    where: eventos_expositoresWhereUniqueInput
    create: XOR<eventos_expositoresCreateWithoutExpositorInput, eventos_expositoresUncheckedCreateWithoutExpositorInput>
  }

  export type eventos_expositoresCreateManyExpositorInputEnvelope = {
    data: eventos_expositoresCreateManyExpositorInput | eventos_expositoresCreateManyExpositorInput[]
    skipDuplicates?: boolean
  }

  export type eventos_expositoresUpsertWithWhereUniqueWithoutExpositorInput = {
    where: eventos_expositoresWhereUniqueInput
    update: XOR<eventos_expositoresUpdateWithoutExpositorInput, eventos_expositoresUncheckedUpdateWithoutExpositorInput>
    create: XOR<eventos_expositoresCreateWithoutExpositorInput, eventos_expositoresUncheckedCreateWithoutExpositorInput>
  }

  export type eventos_expositoresUpdateWithWhereUniqueWithoutExpositorInput = {
    where: eventos_expositoresWhereUniqueInput
    data: XOR<eventos_expositoresUpdateWithoutExpositorInput, eventos_expositoresUncheckedUpdateWithoutExpositorInput>
  }

  export type eventos_expositoresUpdateManyWithWhereWithoutExpositorInput = {
    where: eventos_expositoresScalarWhereInput
    data: XOR<eventos_expositoresUpdateManyMutationInput, eventos_expositoresUncheckedUpdateManyWithoutExpositorInput>
  }

  export type eventosCreateWithoutExpositoresInput = {
    titulo?: string | null
    descripcion?: string | null
    foto_evento?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    fecha?: Date | string | null
    costo?: string | null
    modalidad?: string | null
    ubicacion?: string | null
    link_reunion?: string | null
    reunion_iniciada?: boolean | null
    agenda?: agendaCreateNestedManyWithoutEventoInput
    patrocinadores?: eventos_patrocinadoresCreateNestedManyWithoutEventoInput
  }

  export type eventosUncheckedCreateWithoutExpositoresInput = {
    id_evento?: number
    titulo?: string | null
    descripcion?: string | null
    foto_evento?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    fecha?: Date | string | null
    costo?: string | null
    modalidad?: string | null
    ubicacion?: string | null
    link_reunion?: string | null
    reunion_iniciada?: boolean | null
    agenda?: agendaUncheckedCreateNestedManyWithoutEventoInput
    patrocinadores?: eventos_patrocinadoresUncheckedCreateNestedManyWithoutEventoInput
  }

  export type eventosCreateOrConnectWithoutExpositoresInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutExpositoresInput, eventosUncheckedCreateWithoutExpositoresInput>
  }

  export type expositoresCreateWithoutEventosInput = {
    nombre?: string | null
    especialidad?: string | null
    institucion?: string | null
    contacto?: string | null
  }

  export type expositoresUncheckedCreateWithoutEventosInput = {
    id_expositor?: number
    nombre?: string | null
    especialidad?: string | null
    institucion?: string | null
    contacto?: string | null
  }

  export type expositoresCreateOrConnectWithoutEventosInput = {
    where: expositoresWhereUniqueInput
    create: XOR<expositoresCreateWithoutEventosInput, expositoresUncheckedCreateWithoutEventosInput>
  }

  export type eventosUpsertWithoutExpositoresInput = {
    update: XOR<eventosUpdateWithoutExpositoresInput, eventosUncheckedUpdateWithoutExpositoresInput>
    create: XOR<eventosCreateWithoutExpositoresInput, eventosUncheckedCreateWithoutExpositoresInput>
    where?: eventosWhereInput
  }

  export type eventosUpdateToOneWithWhereWithoutExpositoresInput = {
    where?: eventosWhereInput
    data: XOR<eventosUpdateWithoutExpositoresInput, eventosUncheckedUpdateWithoutExpositoresInput>
  }

  export type eventosUpdateWithoutExpositoresInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evento?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    modalidad?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    reunion_iniciada?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agenda?: agendaUpdateManyWithoutEventoNestedInput
    patrocinadores?: eventos_patrocinadoresUpdateManyWithoutEventoNestedInput
  }

  export type eventosUncheckedUpdateWithoutExpositoresInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evento?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    modalidad?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    reunion_iniciada?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agenda?: agendaUncheckedUpdateManyWithoutEventoNestedInput
    patrocinadores?: eventos_patrocinadoresUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type expositoresUpsertWithoutEventosInput = {
    update: XOR<expositoresUpdateWithoutEventosInput, expositoresUncheckedUpdateWithoutEventosInput>
    create: XOR<expositoresCreateWithoutEventosInput, expositoresUncheckedCreateWithoutEventosInput>
    where?: expositoresWhereInput
  }

  export type expositoresUpdateToOneWithWhereWithoutEventosInput = {
    where?: expositoresWhereInput
    data: XOR<expositoresUpdateWithoutEventosInput, expositoresUncheckedUpdateWithoutEventosInput>
  }

  export type expositoresUpdateWithoutEventosInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type expositoresUncheckedUpdateWithoutEventosInput = {
    id_expositor?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventos_patrocinadoresCreateWithoutPatrocinadorInput = {
    evento: eventosCreateNestedOneWithoutPatrocinadoresInput
  }

  export type eventos_patrocinadoresUncheckedCreateWithoutPatrocinadorInput = {
    id_evento: number
  }

  export type eventos_patrocinadoresCreateOrConnectWithoutPatrocinadorInput = {
    where: eventos_patrocinadoresWhereUniqueInput
    create: XOR<eventos_patrocinadoresCreateWithoutPatrocinadorInput, eventos_patrocinadoresUncheckedCreateWithoutPatrocinadorInput>
  }

  export type eventos_patrocinadoresCreateManyPatrocinadorInputEnvelope = {
    data: eventos_patrocinadoresCreateManyPatrocinadorInput | eventos_patrocinadoresCreateManyPatrocinadorInput[]
    skipDuplicates?: boolean
  }

  export type eventos_patrocinadoresUpsertWithWhereUniqueWithoutPatrocinadorInput = {
    where: eventos_patrocinadoresWhereUniqueInput
    update: XOR<eventos_patrocinadoresUpdateWithoutPatrocinadorInput, eventos_patrocinadoresUncheckedUpdateWithoutPatrocinadorInput>
    create: XOR<eventos_patrocinadoresCreateWithoutPatrocinadorInput, eventos_patrocinadoresUncheckedCreateWithoutPatrocinadorInput>
  }

  export type eventos_patrocinadoresUpdateWithWhereUniqueWithoutPatrocinadorInput = {
    where: eventos_patrocinadoresWhereUniqueInput
    data: XOR<eventos_patrocinadoresUpdateWithoutPatrocinadorInput, eventos_patrocinadoresUncheckedUpdateWithoutPatrocinadorInput>
  }

  export type eventos_patrocinadoresUpdateManyWithWhereWithoutPatrocinadorInput = {
    where: eventos_patrocinadoresScalarWhereInput
    data: XOR<eventos_patrocinadoresUpdateManyMutationInput, eventos_patrocinadoresUncheckedUpdateManyWithoutPatrocinadorInput>
  }

  export type eventosCreateWithoutPatrocinadoresInput = {
    titulo?: string | null
    descripcion?: string | null
    foto_evento?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    fecha?: Date | string | null
    costo?: string | null
    modalidad?: string | null
    ubicacion?: string | null
    link_reunion?: string | null
    reunion_iniciada?: boolean | null
    agenda?: agendaCreateNestedManyWithoutEventoInput
    expositores?: eventos_expositoresCreateNestedManyWithoutEventoInput
  }

  export type eventosUncheckedCreateWithoutPatrocinadoresInput = {
    id_evento?: number
    titulo?: string | null
    descripcion?: string | null
    foto_evento?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    fecha?: Date | string | null
    costo?: string | null
    modalidad?: string | null
    ubicacion?: string | null
    link_reunion?: string | null
    reunion_iniciada?: boolean | null
    agenda?: agendaUncheckedCreateNestedManyWithoutEventoInput
    expositores?: eventos_expositoresUncheckedCreateNestedManyWithoutEventoInput
  }

  export type eventosCreateOrConnectWithoutPatrocinadoresInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutPatrocinadoresInput, eventosUncheckedCreateWithoutPatrocinadoresInput>
  }

  export type patrocinadoresCreateWithoutEventosInput = {
    razon_social?: string | null
    institucion?: string | null
  }

  export type patrocinadoresUncheckedCreateWithoutEventosInput = {
    id_patrocinador?: number
    razon_social?: string | null
    institucion?: string | null
  }

  export type patrocinadoresCreateOrConnectWithoutEventosInput = {
    where: patrocinadoresWhereUniqueInput
    create: XOR<patrocinadoresCreateWithoutEventosInput, patrocinadoresUncheckedCreateWithoutEventosInput>
  }

  export type eventosUpsertWithoutPatrocinadoresInput = {
    update: XOR<eventosUpdateWithoutPatrocinadoresInput, eventosUncheckedUpdateWithoutPatrocinadoresInput>
    create: XOR<eventosCreateWithoutPatrocinadoresInput, eventosUncheckedCreateWithoutPatrocinadoresInput>
    where?: eventosWhereInput
  }

  export type eventosUpdateToOneWithWhereWithoutPatrocinadoresInput = {
    where?: eventosWhereInput
    data: XOR<eventosUpdateWithoutPatrocinadoresInput, eventosUncheckedUpdateWithoutPatrocinadoresInput>
  }

  export type eventosUpdateWithoutPatrocinadoresInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evento?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    modalidad?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    reunion_iniciada?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agenda?: agendaUpdateManyWithoutEventoNestedInput
    expositores?: eventos_expositoresUpdateManyWithoutEventoNestedInput
  }

  export type eventosUncheckedUpdateWithoutPatrocinadoresInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evento?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    modalidad?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    reunion_iniciada?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agenda?: agendaUncheckedUpdateManyWithoutEventoNestedInput
    expositores?: eventos_expositoresUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type patrocinadoresUpsertWithoutEventosInput = {
    update: XOR<patrocinadoresUpdateWithoutEventosInput, patrocinadoresUncheckedUpdateWithoutEventosInput>
    create: XOR<patrocinadoresCreateWithoutEventosInput, patrocinadoresUncheckedCreateWithoutEventosInput>
    where?: patrocinadoresWhereInput
  }

  export type patrocinadoresUpdateToOneWithWhereWithoutEventosInput = {
    where?: patrocinadoresWhereInput
    data: XOR<patrocinadoresUpdateWithoutEventosInput, patrocinadoresUncheckedUpdateWithoutEventosInput>
  }

  export type patrocinadoresUpdateWithoutEventosInput = {
    razon_social?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type patrocinadoresUncheckedUpdateWithoutEventosInput = {
    id_patrocinador?: IntFieldUpdateOperationsInput | number
    razon_social?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosCreateWithoutAgendaInput = {
    rol?: string | null
    nombre?: string | null
    apellidopaterno?: string | null
    apellidomaterno?: string | null
    email?: string | null
    contrasena?: string | null
    foto?: string | null
    telefono?: number | null
    pais?: string | null
    ciudad?: string | null
    genero?: string | null
    fechacreacion?: Date | string
    verificado?: boolean | null
    reset_token?: string | null
  }

  export type usuariosUncheckedCreateWithoutAgendaInput = {
    id_usuario?: number
    rol?: string | null
    nombre?: string | null
    apellidopaterno?: string | null
    apellidomaterno?: string | null
    email?: string | null
    contrasena?: string | null
    foto?: string | null
    telefono?: number | null
    pais?: string | null
    ciudad?: string | null
    genero?: string | null
    fechacreacion?: Date | string
    verificado?: boolean | null
    reset_token?: string | null
  }

  export type usuariosCreateOrConnectWithoutAgendaInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutAgendaInput, usuariosUncheckedCreateWithoutAgendaInput>
  }

  export type eventosCreateWithoutAgendaInput = {
    titulo?: string | null
    descripcion?: string | null
    foto_evento?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    fecha?: Date | string | null
    costo?: string | null
    modalidad?: string | null
    ubicacion?: string | null
    link_reunion?: string | null
    reunion_iniciada?: boolean | null
    expositores?: eventos_expositoresCreateNestedManyWithoutEventoInput
    patrocinadores?: eventos_patrocinadoresCreateNestedManyWithoutEventoInput
  }

  export type eventosUncheckedCreateWithoutAgendaInput = {
    id_evento?: number
    titulo?: string | null
    descripcion?: string | null
    foto_evento?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    fecha?: Date | string | null
    costo?: string | null
    modalidad?: string | null
    ubicacion?: string | null
    link_reunion?: string | null
    reunion_iniciada?: boolean | null
    expositores?: eventos_expositoresUncheckedCreateNestedManyWithoutEventoInput
    patrocinadores?: eventos_patrocinadoresUncheckedCreateNestedManyWithoutEventoInput
  }

  export type eventosCreateOrConnectWithoutAgendaInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutAgendaInput, eventosUncheckedCreateWithoutAgendaInput>
  }

  export type usuariosUpsertWithoutAgendaInput = {
    update: XOR<usuariosUpdateWithoutAgendaInput, usuariosUncheckedUpdateWithoutAgendaInput>
    create: XOR<usuariosCreateWithoutAgendaInput, usuariosUncheckedCreateWithoutAgendaInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutAgendaInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutAgendaInput, usuariosUncheckedUpdateWithoutAgendaInput>
  }

  export type usuariosUpdateWithoutAgendaInput = {
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidopaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidomaterno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableIntFieldUpdateOperationsInput | number | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    fechacreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosUncheckedUpdateWithoutAgendaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidopaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidomaterno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableIntFieldUpdateOperationsInput | number | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    fechacreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventosUpsertWithoutAgendaInput = {
    update: XOR<eventosUpdateWithoutAgendaInput, eventosUncheckedUpdateWithoutAgendaInput>
    create: XOR<eventosCreateWithoutAgendaInput, eventosUncheckedCreateWithoutAgendaInput>
    where?: eventosWhereInput
  }

  export type eventosUpdateToOneWithWhereWithoutAgendaInput = {
    where?: eventosWhereInput
    data: XOR<eventosUpdateWithoutAgendaInput, eventosUncheckedUpdateWithoutAgendaInput>
  }

  export type eventosUpdateWithoutAgendaInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evento?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    modalidad?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    reunion_iniciada?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expositores?: eventos_expositoresUpdateManyWithoutEventoNestedInput
    patrocinadores?: eventos_patrocinadoresUpdateManyWithoutEventoNestedInput
  }

  export type eventosUncheckedUpdateWithoutAgendaInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evento?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    modalidad?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    reunion_iniciada?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expositores?: eventos_expositoresUncheckedUpdateManyWithoutEventoNestedInput
    patrocinadores?: eventos_patrocinadoresUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type agendaCreateManyUsuarioInput = {
    id_agenda?: number
    id_evento: number
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
  }

  export type agendaUpdateWithoutUsuarioInput = {
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evento?: eventosUpdateOneRequiredWithoutAgendaNestedInput
  }

  export type agendaUncheckedUpdateWithoutUsuarioInput = {
    id_agenda?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type agendaUncheckedUpdateManyWithoutUsuarioInput = {
    id_agenda?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type agendaCreateManyEventoInput = {
    id_agenda?: number
    id_usuario: number
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
  }

  export type eventos_expositoresCreateManyEventoInput = {
    id_expositor: number
  }

  export type eventos_patrocinadoresCreateManyEventoInput = {
    id_patrocinador: number
  }

  export type agendaUpdateWithoutEventoInput = {
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuariosUpdateOneRequiredWithoutAgendaNestedInput
  }

  export type agendaUncheckedUpdateWithoutEventoInput = {
    id_agenda?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type agendaUncheckedUpdateManyWithoutEventoInput = {
    id_agenda?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventos_expositoresUpdateWithoutEventoInput = {
    expositor?: expositoresUpdateOneRequiredWithoutEventosNestedInput
  }

  export type eventos_expositoresUncheckedUpdateWithoutEventoInput = {
    id_expositor?: IntFieldUpdateOperationsInput | number
  }

  export type eventos_expositoresUncheckedUpdateManyWithoutEventoInput = {
    id_expositor?: IntFieldUpdateOperationsInput | number
  }

  export type eventos_patrocinadoresUpdateWithoutEventoInput = {
    patrocinador?: patrocinadoresUpdateOneRequiredWithoutEventosNestedInput
  }

  export type eventos_patrocinadoresUncheckedUpdateWithoutEventoInput = {
    id_patrocinador?: IntFieldUpdateOperationsInput | number
  }

  export type eventos_patrocinadoresUncheckedUpdateManyWithoutEventoInput = {
    id_patrocinador?: IntFieldUpdateOperationsInput | number
  }

  export type eventos_expositoresCreateManyExpositorInput = {
    id_evento: number
  }

  export type eventos_expositoresUpdateWithoutExpositorInput = {
    evento?: eventosUpdateOneRequiredWithoutExpositoresNestedInput
  }

  export type eventos_expositoresUncheckedUpdateWithoutExpositorInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
  }

  export type eventos_expositoresUncheckedUpdateManyWithoutExpositorInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
  }

  export type eventos_patrocinadoresCreateManyPatrocinadorInput = {
    id_evento: number
  }

  export type eventos_patrocinadoresUpdateWithoutPatrocinadorInput = {
    evento?: eventosUpdateOneRequiredWithoutPatrocinadoresNestedInput
  }

  export type eventos_patrocinadoresUncheckedUpdateWithoutPatrocinadorInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
  }

  export type eventos_patrocinadoresUncheckedUpdateManyWithoutPatrocinadorInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
  }



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