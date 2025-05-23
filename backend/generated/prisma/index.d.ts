
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
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>
/**
 * Model Eventos
 * 
 */
export type Eventos = $Result.DefaultSelection<Prisma.$EventosPayload>
/**
 * Model Expositores
 * 
 */
export type Expositores = $Result.DefaultSelection<Prisma.$ExpositoresPayload>
/**
 * Model Eventos_Expositores
 * 
 */
export type Eventos_Expositores = $Result.DefaultSelection<Prisma.$Eventos_ExpositoresPayload>
/**
 * Model Patrocinadores
 * 
 */
export type Patrocinadores = $Result.DefaultSelection<Prisma.$PatrocinadoresPayload>
/**
 * Model Eventos_Patrocinadores
 * 
 */
export type Eventos_Patrocinadores = $Result.DefaultSelection<Prisma.$Eventos_PatrocinadoresPayload>
/**
 * Model Agenda
 * 
 */
export type Agenda = $Result.DefaultSelection<Prisma.$AgendaPayload>

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
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventos`: Exposes CRUD operations for the **Eventos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.eventos.findMany()
    * ```
    */
  get eventos(): Prisma.EventosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expositores`: Exposes CRUD operations for the **Expositores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expositores
    * const expositores = await prisma.expositores.findMany()
    * ```
    */
  get expositores(): Prisma.ExpositoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventos_Expositores`: Exposes CRUD operations for the **Eventos_Expositores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos_Expositores
    * const eventos_Expositores = await prisma.eventos_Expositores.findMany()
    * ```
    */
  get eventos_Expositores(): Prisma.Eventos_ExpositoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patrocinadores`: Exposes CRUD operations for the **Patrocinadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patrocinadores
    * const patrocinadores = await prisma.patrocinadores.findMany()
    * ```
    */
  get patrocinadores(): Prisma.PatrocinadoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventos_Patrocinadores`: Exposes CRUD operations for the **Eventos_Patrocinadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos_Patrocinadores
    * const eventos_Patrocinadores = await prisma.eventos_Patrocinadores.findMany()
    * ```
    */
  get eventos_Patrocinadores(): Prisma.Eventos_PatrocinadoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agenda`: Exposes CRUD operations for the **Agenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agenda
    * const agenda = await prisma.agenda.findMany()
    * ```
    */
  get agenda(): Prisma.AgendaDelegate<ExtArgs, ClientOptions>;
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
    Usuarios: 'Usuarios',
    Eventos: 'Eventos',
    Expositores: 'Expositores',
    Eventos_Expositores: 'Eventos_Expositores',
    Patrocinadores: 'Patrocinadores',
    Eventos_Patrocinadores: 'Eventos_Patrocinadores',
    Agenda: 'Agenda'
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
      modelProps: "usuarios" | "eventos" | "expositores" | "eventos_Expositores" | "patrocinadores" | "eventos_Patrocinadores" | "agenda"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      Eventos: {
        payload: Prisma.$EventosPayload<ExtArgs>
        fields: Prisma.EventosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          findFirst: {
            args: Prisma.EventosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          findMany: {
            args: Prisma.EventosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>[]
          }
          create: {
            args: Prisma.EventosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          createMany: {
            args: Prisma.EventosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>[]
          }
          delete: {
            args: Prisma.EventosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          update: {
            args: Prisma.EventosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          deleteMany: {
            args: Prisma.EventosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>[]
          }
          upsert: {
            args: Prisma.EventosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          aggregate: {
            args: Prisma.EventosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos>
          }
          groupBy: {
            args: Prisma.EventosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventosGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventosCountArgs<ExtArgs>
            result: $Utils.Optional<EventosCountAggregateOutputType> | number
          }
        }
      }
      Expositores: {
        payload: Prisma.$ExpositoresPayload<ExtArgs>
        fields: Prisma.ExpositoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpositoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpositoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpositoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpositoresPayload>
          }
          findFirst: {
            args: Prisma.ExpositoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpositoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpositoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpositoresPayload>
          }
          findMany: {
            args: Prisma.ExpositoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpositoresPayload>[]
          }
          create: {
            args: Prisma.ExpositoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpositoresPayload>
          }
          createMany: {
            args: Prisma.ExpositoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpositoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpositoresPayload>[]
          }
          delete: {
            args: Prisma.ExpositoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpositoresPayload>
          }
          update: {
            args: Prisma.ExpositoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpositoresPayload>
          }
          deleteMany: {
            args: Prisma.ExpositoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpositoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpositoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpositoresPayload>[]
          }
          upsert: {
            args: Prisma.ExpositoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpositoresPayload>
          }
          aggregate: {
            args: Prisma.ExpositoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpositores>
          }
          groupBy: {
            args: Prisma.ExpositoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpositoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpositoresCountArgs<ExtArgs>
            result: $Utils.Optional<ExpositoresCountAggregateOutputType> | number
          }
        }
      }
      Eventos_Expositores: {
        payload: Prisma.$Eventos_ExpositoresPayload<ExtArgs>
        fields: Prisma.Eventos_ExpositoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Eventos_ExpositoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_ExpositoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Eventos_ExpositoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_ExpositoresPayload>
          }
          findFirst: {
            args: Prisma.Eventos_ExpositoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_ExpositoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Eventos_ExpositoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_ExpositoresPayload>
          }
          findMany: {
            args: Prisma.Eventos_ExpositoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_ExpositoresPayload>[]
          }
          create: {
            args: Prisma.Eventos_ExpositoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_ExpositoresPayload>
          }
          createMany: {
            args: Prisma.Eventos_ExpositoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Eventos_ExpositoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_ExpositoresPayload>[]
          }
          delete: {
            args: Prisma.Eventos_ExpositoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_ExpositoresPayload>
          }
          update: {
            args: Prisma.Eventos_ExpositoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_ExpositoresPayload>
          }
          deleteMany: {
            args: Prisma.Eventos_ExpositoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Eventos_ExpositoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Eventos_ExpositoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_ExpositoresPayload>[]
          }
          upsert: {
            args: Prisma.Eventos_ExpositoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_ExpositoresPayload>
          }
          aggregate: {
            args: Prisma.Eventos_ExpositoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos_Expositores>
          }
          groupBy: {
            args: Prisma.Eventos_ExpositoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Eventos_ExpositoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.Eventos_ExpositoresCountArgs<ExtArgs>
            result: $Utils.Optional<Eventos_ExpositoresCountAggregateOutputType> | number
          }
        }
      }
      Patrocinadores: {
        payload: Prisma.$PatrocinadoresPayload<ExtArgs>
        fields: Prisma.PatrocinadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatrocinadoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatrocinadoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadoresPayload>
          }
          findFirst: {
            args: Prisma.PatrocinadoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatrocinadoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadoresPayload>
          }
          findMany: {
            args: Prisma.PatrocinadoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadoresPayload>[]
          }
          create: {
            args: Prisma.PatrocinadoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadoresPayload>
          }
          createMany: {
            args: Prisma.PatrocinadoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatrocinadoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadoresPayload>[]
          }
          delete: {
            args: Prisma.PatrocinadoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadoresPayload>
          }
          update: {
            args: Prisma.PatrocinadoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadoresPayload>
          }
          deleteMany: {
            args: Prisma.PatrocinadoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatrocinadoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatrocinadoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadoresPayload>[]
          }
          upsert: {
            args: Prisma.PatrocinadoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadoresPayload>
          }
          aggregate: {
            args: Prisma.PatrocinadoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatrocinadores>
          }
          groupBy: {
            args: Prisma.PatrocinadoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatrocinadoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatrocinadoresCountArgs<ExtArgs>
            result: $Utils.Optional<PatrocinadoresCountAggregateOutputType> | number
          }
        }
      }
      Eventos_Patrocinadores: {
        payload: Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>
        fields: Prisma.Eventos_PatrocinadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Eventos_PatrocinadoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_PatrocinadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Eventos_PatrocinadoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_PatrocinadoresPayload>
          }
          findFirst: {
            args: Prisma.Eventos_PatrocinadoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_PatrocinadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Eventos_PatrocinadoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_PatrocinadoresPayload>
          }
          findMany: {
            args: Prisma.Eventos_PatrocinadoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_PatrocinadoresPayload>[]
          }
          create: {
            args: Prisma.Eventos_PatrocinadoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_PatrocinadoresPayload>
          }
          createMany: {
            args: Prisma.Eventos_PatrocinadoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Eventos_PatrocinadoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_PatrocinadoresPayload>[]
          }
          delete: {
            args: Prisma.Eventos_PatrocinadoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_PatrocinadoresPayload>
          }
          update: {
            args: Prisma.Eventos_PatrocinadoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_PatrocinadoresPayload>
          }
          deleteMany: {
            args: Prisma.Eventos_PatrocinadoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Eventos_PatrocinadoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Eventos_PatrocinadoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_PatrocinadoresPayload>[]
          }
          upsert: {
            args: Prisma.Eventos_PatrocinadoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Eventos_PatrocinadoresPayload>
          }
          aggregate: {
            args: Prisma.Eventos_PatrocinadoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos_Patrocinadores>
          }
          groupBy: {
            args: Prisma.Eventos_PatrocinadoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Eventos_PatrocinadoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.Eventos_PatrocinadoresCountArgs<ExtArgs>
            result: $Utils.Optional<Eventos_PatrocinadoresCountAggregateOutputType> | number
          }
        }
      }
      Agenda: {
        payload: Prisma.$AgendaPayload<ExtArgs>
        fields: Prisma.AgendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          findFirst: {
            args: Prisma.AgendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          findMany: {
            args: Prisma.AgendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>[]
          }
          create: {
            args: Prisma.AgendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          createMany: {
            args: Prisma.AgendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgendaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>[]
          }
          delete: {
            args: Prisma.AgendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          update: {
            args: Prisma.AgendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          deleteMany: {
            args: Prisma.AgendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgendaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>[]
          }
          upsert: {
            args: Prisma.AgendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          aggregate: {
            args: Prisma.AgendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgenda>
          }
          groupBy: {
            args: Prisma.AgendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendaCountArgs<ExtArgs>
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
    usuarios?: UsuariosOmit
    eventos?: EventosOmit
    expositores?: ExpositoresOmit
    eventos_Expositores?: Eventos_ExpositoresOmit
    patrocinadores?: PatrocinadoresOmit
    eventos_Patrocinadores?: Eventos_PatrocinadoresOmit
    agenda?: AgendaOmit
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
    where?: AgendaWhereInput
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
    where?: AgendaWhereInput
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountExpositoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Eventos_ExpositoresWhereInput
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountPatrocinadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Eventos_PatrocinadoresWhereInput
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
    where?: Eventos_ExpositoresWhereInput
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
    where?: Eventos_PatrocinadoresWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuarios
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
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
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




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
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

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    agenda?: boolean | Usuarios$agendaArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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

  export type UsuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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

  export type UsuariosSelectScalar = {
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

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "rol" | "nombre" | "apellidopaterno" | "apellidomaterno" | "email" | "contrasena" | "foto" | "telefono" | "pais" | "ciudad" | "genero" | "fechacreacion" | "verificado" | "reset_token", ExtArgs["result"]["usuarios"]>
  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | Usuarios$agendaArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      agenda: Prisma.$AgendaPayload<ExtArgs>[]
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

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
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
    createManyAndReturn<T extends UsuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
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
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
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
    updateManyAndReturn<T extends UsuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
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
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
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
     * @param {UsuariosGroupByArgs} args - Group by arguments.
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
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agenda<T extends Usuarios$agendaArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$agendaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuarios model
   */
  interface UsuariosFieldRefs {
    readonly id_usuario: FieldRef<"Usuarios", 'Int'>
    readonly rol: FieldRef<"Usuarios", 'String'>
    readonly nombre: FieldRef<"Usuarios", 'String'>
    readonly apellidopaterno: FieldRef<"Usuarios", 'String'>
    readonly apellidomaterno: FieldRef<"Usuarios", 'String'>
    readonly email: FieldRef<"Usuarios", 'String'>
    readonly contrasena: FieldRef<"Usuarios", 'String'>
    readonly foto: FieldRef<"Usuarios", 'String'>
    readonly telefono: FieldRef<"Usuarios", 'Int'>
    readonly pais: FieldRef<"Usuarios", 'String'>
    readonly ciudad: FieldRef<"Usuarios", 'String'>
    readonly genero: FieldRef<"Usuarios", 'String'>
    readonly fechacreacion: FieldRef<"Usuarios", 'DateTime'>
    readonly verificado: FieldRef<"Usuarios", 'Boolean'>
    readonly reset_token: FieldRef<"Usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data?: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios createManyAndReturn
   */
  export type UsuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios updateManyAndReturn
   */
  export type UsuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios.agenda
   */
  export type Usuarios$agendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    where?: AgendaWhereInput
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    cursor?: AgendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
  }


  /**
   * Model Eventos
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
     * Filter which Eventos to aggregate.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
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




  export type EventosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventosWhereInput
    orderBy?: EventosOrderByWithAggregationInput | EventosOrderByWithAggregationInput[]
    by: EventosScalarFieldEnum[] | EventosScalarFieldEnum
    having?: EventosScalarWhereWithAggregatesInput
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

  type GetEventosGroupByPayload<T extends EventosGroupByArgs> = Prisma.PrismaPromise<
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


  export type EventosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    agenda?: boolean | Eventos$agendaArgs<ExtArgs>
    expositores?: boolean | Eventos$expositoresArgs<ExtArgs>
    patrocinadores?: boolean | Eventos$patrocinadoresArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos"]>

  export type EventosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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

  export type EventosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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

  export type EventosSelectScalar = {
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

  export type EventosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evento" | "titulo" | "descripcion" | "foto_evento" | "hora_inicio" | "hora_fin" | "fecha" | "costo" | "modalidad" | "ubicacion" | "link_reunion" | "reunion_iniciada", ExtArgs["result"]["eventos"]>
  export type EventosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | Eventos$agendaArgs<ExtArgs>
    expositores?: boolean | Eventos$expositoresArgs<ExtArgs>
    patrocinadores?: boolean | Eventos$patrocinadoresArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Eventos"
    objects: {
      agenda: Prisma.$AgendaPayload<ExtArgs>[]
      expositores: Prisma.$Eventos_ExpositoresPayload<ExtArgs>[]
      patrocinadores: Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>[]
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

  type EventosGetPayload<S extends boolean | null | undefined | EventosDefaultArgs> = $Result.GetResult<Prisma.$EventosPayload, S>

  type EventosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventosCountAggregateInputType | true
    }

  export interface EventosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Eventos'], meta: { name: 'Eventos' } }
    /**
     * Find zero or one Eventos that matches the filter.
     * @param {EventosFindUniqueArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventosFindUniqueArgs>(args: SelectSubset<T, EventosFindUniqueArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eventos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventosFindUniqueOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventosFindUniqueOrThrowArgs>(args: SelectSubset<T, EventosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosFindFirstArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventosFindFirstArgs>(args?: SelectSubset<T, EventosFindFirstArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosFindFirstOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventosFindFirstOrThrowArgs>(args?: SelectSubset<T, EventosFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends EventosFindManyArgs>(args?: SelectSubset<T, EventosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eventos.
     * @param {EventosCreateArgs} args - Arguments to create a Eventos.
     * @example
     * // Create one Eventos
     * const Eventos = await prisma.eventos.create({
     *   data: {
     *     // ... data to create a Eventos
     *   }
     * })
     * 
     */
    create<T extends EventosCreateArgs>(args: SelectSubset<T, EventosCreateArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventosCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventosCreateManyArgs>(args?: SelectSubset<T, EventosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventosCreateManyAndReturnArgs} args - Arguments to create many Eventos.
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
    createManyAndReturn<T extends EventosCreateManyAndReturnArgs>(args?: SelectSubset<T, EventosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eventos.
     * @param {EventosDeleteArgs} args - Arguments to delete one Eventos.
     * @example
     * // Delete one Eventos
     * const Eventos = await prisma.eventos.delete({
     *   where: {
     *     // ... filter to delete one Eventos
     *   }
     * })
     * 
     */
    delete<T extends EventosDeleteArgs>(args: SelectSubset<T, EventosDeleteArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eventos.
     * @param {EventosUpdateArgs} args - Arguments to update one Eventos.
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
    update<T extends EventosUpdateArgs>(args: SelectSubset<T, EventosUpdateArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventosDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.eventos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventosDeleteManyArgs>(args?: SelectSubset<T, EventosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends EventosUpdateManyArgs>(args: SelectSubset<T, EventosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventosUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
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
    updateManyAndReturn<T extends EventosUpdateManyAndReturnArgs>(args: SelectSubset<T, EventosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eventos.
     * @param {EventosUpsertArgs} args - Arguments to update or create a Eventos.
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
    upsert<T extends EventosUpsertArgs>(args: SelectSubset<T, EventosUpsertArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.eventos.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventosCountArgs>(
      args?: Subset<T, EventosCountArgs>,
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
     * @param {EventosGroupByArgs} args - Group by arguments.
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
      T extends EventosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventosGroupByArgs['orderBy'] }
        : { orderBy?: EventosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Eventos model
   */
  readonly fields: EventosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Eventos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agenda<T extends Eventos$agendaArgs<ExtArgs> = {}>(args?: Subset<T, Eventos$agendaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expositores<T extends Eventos$expositoresArgs<ExtArgs> = {}>(args?: Subset<T, Eventos$expositoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Eventos_ExpositoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patrocinadores<T extends Eventos$patrocinadoresArgs<ExtArgs> = {}>(args?: Subset<T, Eventos$patrocinadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Eventos model
   */
  interface EventosFieldRefs {
    readonly id_evento: FieldRef<"Eventos", 'Int'>
    readonly titulo: FieldRef<"Eventos", 'String'>
    readonly descripcion: FieldRef<"Eventos", 'String'>
    readonly foto_evento: FieldRef<"Eventos", 'String'>
    readonly hora_inicio: FieldRef<"Eventos", 'String'>
    readonly hora_fin: FieldRef<"Eventos", 'String'>
    readonly fecha: FieldRef<"Eventos", 'DateTime'>
    readonly costo: FieldRef<"Eventos", 'String'>
    readonly modalidad: FieldRef<"Eventos", 'String'>
    readonly ubicacion: FieldRef<"Eventos", 'String'>
    readonly link_reunion: FieldRef<"Eventos", 'String'>
    readonly reunion_iniciada: FieldRef<"Eventos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Eventos findUnique
   */
  export type EventosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos findUniqueOrThrow
   */
  export type EventosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos findFirst
   */
  export type EventosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * Eventos findFirstOrThrow
   */
  export type EventosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * Eventos findMany
   */
  export type EventosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * Eventos create
   */
  export type EventosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * The data needed to create a Eventos.
     */
    data?: XOR<EventosCreateInput, EventosUncheckedCreateInput>
  }

  /**
   * Eventos createMany
   */
  export type EventosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventosCreateManyInput | EventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Eventos createManyAndReturn
   */
  export type EventosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventosCreateManyInput | EventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Eventos update
   */
  export type EventosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * The data needed to update a Eventos.
     */
    data: XOR<EventosUpdateInput, EventosUncheckedUpdateInput>
    /**
     * Choose, which Eventos to update.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos updateMany
   */
  export type EventosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventosUpdateManyMutationInput, EventosUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventosWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Eventos updateManyAndReturn
   */
  export type EventosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventosUpdateManyMutationInput, EventosUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventosWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Eventos upsert
   */
  export type EventosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * The filter to search for the Eventos to update in case it exists.
     */
    where: EventosWhereUniqueInput
    /**
     * In case the Eventos found by the `where` argument doesn't exist, create a new Eventos with this data.
     */
    create: XOR<EventosCreateInput, EventosUncheckedCreateInput>
    /**
     * In case the Eventos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventosUpdateInput, EventosUncheckedUpdateInput>
  }

  /**
   * Eventos delete
   */
  export type EventosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter which Eventos to delete.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos deleteMany
   */
  export type EventosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventosWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Eventos.agenda
   */
  export type Eventos$agendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    where?: AgendaWhereInput
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    cursor?: AgendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Eventos.expositores
   */
  export type Eventos$expositoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresInclude<ExtArgs> | null
    where?: Eventos_ExpositoresWhereInput
    orderBy?: Eventos_ExpositoresOrderByWithRelationInput | Eventos_ExpositoresOrderByWithRelationInput[]
    cursor?: Eventos_ExpositoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Eventos_ExpositoresScalarFieldEnum | Eventos_ExpositoresScalarFieldEnum[]
  }

  /**
   * Eventos.patrocinadores
   */
  export type Eventos$patrocinadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresInclude<ExtArgs> | null
    where?: Eventos_PatrocinadoresWhereInput
    orderBy?: Eventos_PatrocinadoresOrderByWithRelationInput | Eventos_PatrocinadoresOrderByWithRelationInput[]
    cursor?: Eventos_PatrocinadoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Eventos_PatrocinadoresScalarFieldEnum | Eventos_PatrocinadoresScalarFieldEnum[]
  }

  /**
   * Eventos without action
   */
  export type EventosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
  }


  /**
   * Model Expositores
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
     * Filter which Expositores to aggregate.
     */
    where?: ExpositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expositores to fetch.
     */
    orderBy?: ExpositoresOrderByWithRelationInput | ExpositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expositores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expositores
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




  export type ExpositoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpositoresWhereInput
    orderBy?: ExpositoresOrderByWithAggregationInput | ExpositoresOrderByWithAggregationInput[]
    by: ExpositoresScalarFieldEnum[] | ExpositoresScalarFieldEnum
    having?: ExpositoresScalarWhereWithAggregatesInput
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

  type GetExpositoresGroupByPayload<T extends ExpositoresGroupByArgs> = Prisma.PrismaPromise<
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


  export type ExpositoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_expositor?: boolean
    nombre?: boolean
    especialidad?: boolean
    institucion?: boolean
    contacto?: boolean
    eventos?: boolean | Expositores$eventosArgs<ExtArgs>
    _count?: boolean | ExpositoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expositores"]>

  export type ExpositoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_expositor?: boolean
    nombre?: boolean
    especialidad?: boolean
    institucion?: boolean
    contacto?: boolean
  }, ExtArgs["result"]["expositores"]>

  export type ExpositoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_expositor?: boolean
    nombre?: boolean
    especialidad?: boolean
    institucion?: boolean
    contacto?: boolean
  }, ExtArgs["result"]["expositores"]>

  export type ExpositoresSelectScalar = {
    id_expositor?: boolean
    nombre?: boolean
    especialidad?: boolean
    institucion?: boolean
    contacto?: boolean
  }

  export type ExpositoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_expositor" | "nombre" | "especialidad" | "institucion" | "contacto", ExtArgs["result"]["expositores"]>
  export type ExpositoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | Expositores$eventosArgs<ExtArgs>
    _count?: boolean | ExpositoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpositoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExpositoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExpositoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expositores"
    objects: {
      eventos: Prisma.$Eventos_ExpositoresPayload<ExtArgs>[]
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

  type ExpositoresGetPayload<S extends boolean | null | undefined | ExpositoresDefaultArgs> = $Result.GetResult<Prisma.$ExpositoresPayload, S>

  type ExpositoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpositoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpositoresCountAggregateInputType | true
    }

  export interface ExpositoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expositores'], meta: { name: 'Expositores' } }
    /**
     * Find zero or one Expositores that matches the filter.
     * @param {ExpositoresFindUniqueArgs} args - Arguments to find a Expositores
     * @example
     * // Get one Expositores
     * const expositores = await prisma.expositores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpositoresFindUniqueArgs>(args: SelectSubset<T, ExpositoresFindUniqueArgs<ExtArgs>>): Prisma__ExpositoresClient<$Result.GetResult<Prisma.$ExpositoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expositores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpositoresFindUniqueOrThrowArgs} args - Arguments to find a Expositores
     * @example
     * // Get one Expositores
     * const expositores = await prisma.expositores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpositoresFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpositoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpositoresClient<$Result.GetResult<Prisma.$ExpositoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expositores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpositoresFindFirstArgs} args - Arguments to find a Expositores
     * @example
     * // Get one Expositores
     * const expositores = await prisma.expositores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpositoresFindFirstArgs>(args?: SelectSubset<T, ExpositoresFindFirstArgs<ExtArgs>>): Prisma__ExpositoresClient<$Result.GetResult<Prisma.$ExpositoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expositores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpositoresFindFirstOrThrowArgs} args - Arguments to find a Expositores
     * @example
     * // Get one Expositores
     * const expositores = await prisma.expositores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpositoresFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpositoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpositoresClient<$Result.GetResult<Prisma.$ExpositoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expositores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpositoresFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends ExpositoresFindManyArgs>(args?: SelectSubset<T, ExpositoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpositoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expositores.
     * @param {ExpositoresCreateArgs} args - Arguments to create a Expositores.
     * @example
     * // Create one Expositores
     * const Expositores = await prisma.expositores.create({
     *   data: {
     *     // ... data to create a Expositores
     *   }
     * })
     * 
     */
    create<T extends ExpositoresCreateArgs>(args: SelectSubset<T, ExpositoresCreateArgs<ExtArgs>>): Prisma__ExpositoresClient<$Result.GetResult<Prisma.$ExpositoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expositores.
     * @param {ExpositoresCreateManyArgs} args - Arguments to create many Expositores.
     * @example
     * // Create many Expositores
     * const expositores = await prisma.expositores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpositoresCreateManyArgs>(args?: SelectSubset<T, ExpositoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expositores and returns the data saved in the database.
     * @param {ExpositoresCreateManyAndReturnArgs} args - Arguments to create many Expositores.
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
    createManyAndReturn<T extends ExpositoresCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpositoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpositoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expositores.
     * @param {ExpositoresDeleteArgs} args - Arguments to delete one Expositores.
     * @example
     * // Delete one Expositores
     * const Expositores = await prisma.expositores.delete({
     *   where: {
     *     // ... filter to delete one Expositores
     *   }
     * })
     * 
     */
    delete<T extends ExpositoresDeleteArgs>(args: SelectSubset<T, ExpositoresDeleteArgs<ExtArgs>>): Prisma__ExpositoresClient<$Result.GetResult<Prisma.$ExpositoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expositores.
     * @param {ExpositoresUpdateArgs} args - Arguments to update one Expositores.
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
    update<T extends ExpositoresUpdateArgs>(args: SelectSubset<T, ExpositoresUpdateArgs<ExtArgs>>): Prisma__ExpositoresClient<$Result.GetResult<Prisma.$ExpositoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expositores.
     * @param {ExpositoresDeleteManyArgs} args - Arguments to filter Expositores to delete.
     * @example
     * // Delete a few Expositores
     * const { count } = await prisma.expositores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpositoresDeleteManyArgs>(args?: SelectSubset<T, ExpositoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpositoresUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends ExpositoresUpdateManyArgs>(args: SelectSubset<T, ExpositoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expositores and returns the data updated in the database.
     * @param {ExpositoresUpdateManyAndReturnArgs} args - Arguments to update many Expositores.
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
    updateManyAndReturn<T extends ExpositoresUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpositoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpositoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expositores.
     * @param {ExpositoresUpsertArgs} args - Arguments to update or create a Expositores.
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
    upsert<T extends ExpositoresUpsertArgs>(args: SelectSubset<T, ExpositoresUpsertArgs<ExtArgs>>): Prisma__ExpositoresClient<$Result.GetResult<Prisma.$ExpositoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpositoresCountArgs} args - Arguments to filter Expositores to count.
     * @example
     * // Count the number of Expositores
     * const count = await prisma.expositores.count({
     *   where: {
     *     // ... the filter for the Expositores we want to count
     *   }
     * })
    **/
    count<T extends ExpositoresCountArgs>(
      args?: Subset<T, ExpositoresCountArgs>,
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
     * @param {ExpositoresGroupByArgs} args - Group by arguments.
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
      T extends ExpositoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpositoresGroupByArgs['orderBy'] }
        : { orderBy?: ExpositoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpositoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpositoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expositores model
   */
  readonly fields: ExpositoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expositores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpositoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventos<T extends Expositores$eventosArgs<ExtArgs> = {}>(args?: Subset<T, Expositores$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Eventos_ExpositoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Expositores model
   */
  interface ExpositoresFieldRefs {
    readonly id_expositor: FieldRef<"Expositores", 'Int'>
    readonly nombre: FieldRef<"Expositores", 'String'>
    readonly especialidad: FieldRef<"Expositores", 'String'>
    readonly institucion: FieldRef<"Expositores", 'String'>
    readonly contacto: FieldRef<"Expositores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Expositores findUnique
   */
  export type ExpositoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expositores
     */
    select?: ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expositores
     */
    omit?: ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpositoresInclude<ExtArgs> | null
    /**
     * Filter, which Expositores to fetch.
     */
    where: ExpositoresWhereUniqueInput
  }

  /**
   * Expositores findUniqueOrThrow
   */
  export type ExpositoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expositores
     */
    select?: ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expositores
     */
    omit?: ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpositoresInclude<ExtArgs> | null
    /**
     * Filter, which Expositores to fetch.
     */
    where: ExpositoresWhereUniqueInput
  }

  /**
   * Expositores findFirst
   */
  export type ExpositoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expositores
     */
    select?: ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expositores
     */
    omit?: ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpositoresInclude<ExtArgs> | null
    /**
     * Filter, which Expositores to fetch.
     */
    where?: ExpositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expositores to fetch.
     */
    orderBy?: ExpositoresOrderByWithRelationInput | ExpositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expositores.
     */
    cursor?: ExpositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expositores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expositores.
     */
    distinct?: ExpositoresScalarFieldEnum | ExpositoresScalarFieldEnum[]
  }

  /**
   * Expositores findFirstOrThrow
   */
  export type ExpositoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expositores
     */
    select?: ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expositores
     */
    omit?: ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpositoresInclude<ExtArgs> | null
    /**
     * Filter, which Expositores to fetch.
     */
    where?: ExpositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expositores to fetch.
     */
    orderBy?: ExpositoresOrderByWithRelationInput | ExpositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expositores.
     */
    cursor?: ExpositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expositores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expositores.
     */
    distinct?: ExpositoresScalarFieldEnum | ExpositoresScalarFieldEnum[]
  }

  /**
   * Expositores findMany
   */
  export type ExpositoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expositores
     */
    select?: ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expositores
     */
    omit?: ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpositoresInclude<ExtArgs> | null
    /**
     * Filter, which Expositores to fetch.
     */
    where?: ExpositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expositores to fetch.
     */
    orderBy?: ExpositoresOrderByWithRelationInput | ExpositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expositores.
     */
    cursor?: ExpositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expositores.
     */
    skip?: number
    distinct?: ExpositoresScalarFieldEnum | ExpositoresScalarFieldEnum[]
  }

  /**
   * Expositores create
   */
  export type ExpositoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expositores
     */
    select?: ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expositores
     */
    omit?: ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpositoresInclude<ExtArgs> | null
    /**
     * The data needed to create a Expositores.
     */
    data?: XOR<ExpositoresCreateInput, ExpositoresUncheckedCreateInput>
  }

  /**
   * Expositores createMany
   */
  export type ExpositoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expositores.
     */
    data: ExpositoresCreateManyInput | ExpositoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expositores createManyAndReturn
   */
  export type ExpositoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expositores
     */
    select?: ExpositoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expositores
     */
    omit?: ExpositoresOmit<ExtArgs> | null
    /**
     * The data used to create many Expositores.
     */
    data: ExpositoresCreateManyInput | ExpositoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expositores update
   */
  export type ExpositoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expositores
     */
    select?: ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expositores
     */
    omit?: ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpositoresInclude<ExtArgs> | null
    /**
     * The data needed to update a Expositores.
     */
    data: XOR<ExpositoresUpdateInput, ExpositoresUncheckedUpdateInput>
    /**
     * Choose, which Expositores to update.
     */
    where: ExpositoresWhereUniqueInput
  }

  /**
   * Expositores updateMany
   */
  export type ExpositoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expositores.
     */
    data: XOR<ExpositoresUpdateManyMutationInput, ExpositoresUncheckedUpdateManyInput>
    /**
     * Filter which Expositores to update
     */
    where?: ExpositoresWhereInput
    /**
     * Limit how many Expositores to update.
     */
    limit?: number
  }

  /**
   * Expositores updateManyAndReturn
   */
  export type ExpositoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expositores
     */
    select?: ExpositoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expositores
     */
    omit?: ExpositoresOmit<ExtArgs> | null
    /**
     * The data used to update Expositores.
     */
    data: XOR<ExpositoresUpdateManyMutationInput, ExpositoresUncheckedUpdateManyInput>
    /**
     * Filter which Expositores to update
     */
    where?: ExpositoresWhereInput
    /**
     * Limit how many Expositores to update.
     */
    limit?: number
  }

  /**
   * Expositores upsert
   */
  export type ExpositoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expositores
     */
    select?: ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expositores
     */
    omit?: ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpositoresInclude<ExtArgs> | null
    /**
     * The filter to search for the Expositores to update in case it exists.
     */
    where: ExpositoresWhereUniqueInput
    /**
     * In case the Expositores found by the `where` argument doesn't exist, create a new Expositores with this data.
     */
    create: XOR<ExpositoresCreateInput, ExpositoresUncheckedCreateInput>
    /**
     * In case the Expositores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpositoresUpdateInput, ExpositoresUncheckedUpdateInput>
  }

  /**
   * Expositores delete
   */
  export type ExpositoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expositores
     */
    select?: ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expositores
     */
    omit?: ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpositoresInclude<ExtArgs> | null
    /**
     * Filter which Expositores to delete.
     */
    where: ExpositoresWhereUniqueInput
  }

  /**
   * Expositores deleteMany
   */
  export type ExpositoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expositores to delete
     */
    where?: ExpositoresWhereInput
    /**
     * Limit how many Expositores to delete.
     */
    limit?: number
  }

  /**
   * Expositores.eventos
   */
  export type Expositores$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresInclude<ExtArgs> | null
    where?: Eventos_ExpositoresWhereInput
    orderBy?: Eventos_ExpositoresOrderByWithRelationInput | Eventos_ExpositoresOrderByWithRelationInput[]
    cursor?: Eventos_ExpositoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Eventos_ExpositoresScalarFieldEnum | Eventos_ExpositoresScalarFieldEnum[]
  }

  /**
   * Expositores without action
   */
  export type ExpositoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expositores
     */
    select?: ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expositores
     */
    omit?: ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpositoresInclude<ExtArgs> | null
  }


  /**
   * Model Eventos_Expositores
   */

  export type AggregateEventos_Expositores = {
    _count: Eventos_ExpositoresCountAggregateOutputType | null
    _avg: Eventos_ExpositoresAvgAggregateOutputType | null
    _sum: Eventos_ExpositoresSumAggregateOutputType | null
    _min: Eventos_ExpositoresMinAggregateOutputType | null
    _max: Eventos_ExpositoresMaxAggregateOutputType | null
  }

  export type Eventos_ExpositoresAvgAggregateOutputType = {
    id_evento: number | null
    id_expositor: number | null
  }

  export type Eventos_ExpositoresSumAggregateOutputType = {
    id_evento: number | null
    id_expositor: number | null
  }

  export type Eventos_ExpositoresMinAggregateOutputType = {
    id_evento: number | null
    id_expositor: number | null
  }

  export type Eventos_ExpositoresMaxAggregateOutputType = {
    id_evento: number | null
    id_expositor: number | null
  }

  export type Eventos_ExpositoresCountAggregateOutputType = {
    id_evento: number
    id_expositor: number
    _all: number
  }


  export type Eventos_ExpositoresAvgAggregateInputType = {
    id_evento?: true
    id_expositor?: true
  }

  export type Eventos_ExpositoresSumAggregateInputType = {
    id_evento?: true
    id_expositor?: true
  }

  export type Eventos_ExpositoresMinAggregateInputType = {
    id_evento?: true
    id_expositor?: true
  }

  export type Eventos_ExpositoresMaxAggregateInputType = {
    id_evento?: true
    id_expositor?: true
  }

  export type Eventos_ExpositoresCountAggregateInputType = {
    id_evento?: true
    id_expositor?: true
    _all?: true
  }

  export type Eventos_ExpositoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos_Expositores to aggregate.
     */
    where?: Eventos_ExpositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos_Expositores to fetch.
     */
    orderBy?: Eventos_ExpositoresOrderByWithRelationInput | Eventos_ExpositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Eventos_ExpositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos_Expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos_Expositores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos_Expositores
    **/
    _count?: true | Eventos_ExpositoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Eventos_ExpositoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Eventos_ExpositoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Eventos_ExpositoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Eventos_ExpositoresMaxAggregateInputType
  }

  export type GetEventos_ExpositoresAggregateType<T extends Eventos_ExpositoresAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos_Expositores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos_Expositores[P]>
      : GetScalarType<T[P], AggregateEventos_Expositores[P]>
  }




  export type Eventos_ExpositoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Eventos_ExpositoresWhereInput
    orderBy?: Eventos_ExpositoresOrderByWithAggregationInput | Eventos_ExpositoresOrderByWithAggregationInput[]
    by: Eventos_ExpositoresScalarFieldEnum[] | Eventos_ExpositoresScalarFieldEnum
    having?: Eventos_ExpositoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Eventos_ExpositoresCountAggregateInputType | true
    _avg?: Eventos_ExpositoresAvgAggregateInputType
    _sum?: Eventos_ExpositoresSumAggregateInputType
    _min?: Eventos_ExpositoresMinAggregateInputType
    _max?: Eventos_ExpositoresMaxAggregateInputType
  }

  export type Eventos_ExpositoresGroupByOutputType = {
    id_evento: number
    id_expositor: number
    _count: Eventos_ExpositoresCountAggregateOutputType | null
    _avg: Eventos_ExpositoresAvgAggregateOutputType | null
    _sum: Eventos_ExpositoresSumAggregateOutputType | null
    _min: Eventos_ExpositoresMinAggregateOutputType | null
    _max: Eventos_ExpositoresMaxAggregateOutputType | null
  }

  type GetEventos_ExpositoresGroupByPayload<T extends Eventos_ExpositoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Eventos_ExpositoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Eventos_ExpositoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Eventos_ExpositoresGroupByOutputType[P]>
            : GetScalarType<T[P], Eventos_ExpositoresGroupByOutputType[P]>
        }
      >
    >


  export type Eventos_ExpositoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_expositor?: boolean
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    expositor?: boolean | ExpositoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos_Expositores"]>

  export type Eventos_ExpositoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_expositor?: boolean
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    expositor?: boolean | ExpositoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos_Expositores"]>

  export type Eventos_ExpositoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_expositor?: boolean
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    expositor?: boolean | ExpositoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos_Expositores"]>

  export type Eventos_ExpositoresSelectScalar = {
    id_evento?: boolean
    id_expositor?: boolean
  }

  export type Eventos_ExpositoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evento" | "id_expositor", ExtArgs["result"]["eventos_Expositores"]>
  export type Eventos_ExpositoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    expositor?: boolean | ExpositoresDefaultArgs<ExtArgs>
  }
  export type Eventos_ExpositoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    expositor?: boolean | ExpositoresDefaultArgs<ExtArgs>
  }
  export type Eventos_ExpositoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    expositor?: boolean | ExpositoresDefaultArgs<ExtArgs>
  }

  export type $Eventos_ExpositoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Eventos_Expositores"
    objects: {
      evento: Prisma.$EventosPayload<ExtArgs>
      expositor: Prisma.$ExpositoresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evento: number
      id_expositor: number
    }, ExtArgs["result"]["eventos_Expositores"]>
    composites: {}
  }

  type Eventos_ExpositoresGetPayload<S extends boolean | null | undefined | Eventos_ExpositoresDefaultArgs> = $Result.GetResult<Prisma.$Eventos_ExpositoresPayload, S>

  type Eventos_ExpositoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Eventos_ExpositoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Eventos_ExpositoresCountAggregateInputType | true
    }

  export interface Eventos_ExpositoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Eventos_Expositores'], meta: { name: 'Eventos_Expositores' } }
    /**
     * Find zero or one Eventos_Expositores that matches the filter.
     * @param {Eventos_ExpositoresFindUniqueArgs} args - Arguments to find a Eventos_Expositores
     * @example
     * // Get one Eventos_Expositores
     * const eventos_Expositores = await prisma.eventos_Expositores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Eventos_ExpositoresFindUniqueArgs>(args: SelectSubset<T, Eventos_ExpositoresFindUniqueArgs<ExtArgs>>): Prisma__Eventos_ExpositoresClient<$Result.GetResult<Prisma.$Eventos_ExpositoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eventos_Expositores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Eventos_ExpositoresFindUniqueOrThrowArgs} args - Arguments to find a Eventos_Expositores
     * @example
     * // Get one Eventos_Expositores
     * const eventos_Expositores = await prisma.eventos_Expositores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Eventos_ExpositoresFindUniqueOrThrowArgs>(args: SelectSubset<T, Eventos_ExpositoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Eventos_ExpositoresClient<$Result.GetResult<Prisma.$Eventos_ExpositoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos_Expositores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_ExpositoresFindFirstArgs} args - Arguments to find a Eventos_Expositores
     * @example
     * // Get one Eventos_Expositores
     * const eventos_Expositores = await prisma.eventos_Expositores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Eventos_ExpositoresFindFirstArgs>(args?: SelectSubset<T, Eventos_ExpositoresFindFirstArgs<ExtArgs>>): Prisma__Eventos_ExpositoresClient<$Result.GetResult<Prisma.$Eventos_ExpositoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos_Expositores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_ExpositoresFindFirstOrThrowArgs} args - Arguments to find a Eventos_Expositores
     * @example
     * // Get one Eventos_Expositores
     * const eventos_Expositores = await prisma.eventos_Expositores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Eventos_ExpositoresFindFirstOrThrowArgs>(args?: SelectSubset<T, Eventos_ExpositoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__Eventos_ExpositoresClient<$Result.GetResult<Prisma.$Eventos_ExpositoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos_Expositores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_ExpositoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos_Expositores
     * const eventos_Expositores = await prisma.eventos_Expositores.findMany()
     * 
     * // Get first 10 Eventos_Expositores
     * const eventos_Expositores = await prisma.eventos_Expositores.findMany({ take: 10 })
     * 
     * // Only select the `id_evento`
     * const eventos_ExpositoresWithId_eventoOnly = await prisma.eventos_Expositores.findMany({ select: { id_evento: true } })
     * 
     */
    findMany<T extends Eventos_ExpositoresFindManyArgs>(args?: SelectSubset<T, Eventos_ExpositoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Eventos_ExpositoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eventos_Expositores.
     * @param {Eventos_ExpositoresCreateArgs} args - Arguments to create a Eventos_Expositores.
     * @example
     * // Create one Eventos_Expositores
     * const Eventos_Expositores = await prisma.eventos_Expositores.create({
     *   data: {
     *     // ... data to create a Eventos_Expositores
     *   }
     * })
     * 
     */
    create<T extends Eventos_ExpositoresCreateArgs>(args: SelectSubset<T, Eventos_ExpositoresCreateArgs<ExtArgs>>): Prisma__Eventos_ExpositoresClient<$Result.GetResult<Prisma.$Eventos_ExpositoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos_Expositores.
     * @param {Eventos_ExpositoresCreateManyArgs} args - Arguments to create many Eventos_Expositores.
     * @example
     * // Create many Eventos_Expositores
     * const eventos_Expositores = await prisma.eventos_Expositores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Eventos_ExpositoresCreateManyArgs>(args?: SelectSubset<T, Eventos_ExpositoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos_Expositores and returns the data saved in the database.
     * @param {Eventos_ExpositoresCreateManyAndReturnArgs} args - Arguments to create many Eventos_Expositores.
     * @example
     * // Create many Eventos_Expositores
     * const eventos_Expositores = await prisma.eventos_Expositores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos_Expositores and only return the `id_evento`
     * const eventos_ExpositoresWithId_eventoOnly = await prisma.eventos_Expositores.createManyAndReturn({
     *   select: { id_evento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Eventos_ExpositoresCreateManyAndReturnArgs>(args?: SelectSubset<T, Eventos_ExpositoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Eventos_ExpositoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eventos_Expositores.
     * @param {Eventos_ExpositoresDeleteArgs} args - Arguments to delete one Eventos_Expositores.
     * @example
     * // Delete one Eventos_Expositores
     * const Eventos_Expositores = await prisma.eventos_Expositores.delete({
     *   where: {
     *     // ... filter to delete one Eventos_Expositores
     *   }
     * })
     * 
     */
    delete<T extends Eventos_ExpositoresDeleteArgs>(args: SelectSubset<T, Eventos_ExpositoresDeleteArgs<ExtArgs>>): Prisma__Eventos_ExpositoresClient<$Result.GetResult<Prisma.$Eventos_ExpositoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eventos_Expositores.
     * @param {Eventos_ExpositoresUpdateArgs} args - Arguments to update one Eventos_Expositores.
     * @example
     * // Update one Eventos_Expositores
     * const eventos_Expositores = await prisma.eventos_Expositores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Eventos_ExpositoresUpdateArgs>(args: SelectSubset<T, Eventos_ExpositoresUpdateArgs<ExtArgs>>): Prisma__Eventos_ExpositoresClient<$Result.GetResult<Prisma.$Eventos_ExpositoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos_Expositores.
     * @param {Eventos_ExpositoresDeleteManyArgs} args - Arguments to filter Eventos_Expositores to delete.
     * @example
     * // Delete a few Eventos_Expositores
     * const { count } = await prisma.eventos_Expositores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Eventos_ExpositoresDeleteManyArgs>(args?: SelectSubset<T, Eventos_ExpositoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos_Expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_ExpositoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos_Expositores
     * const eventos_Expositores = await prisma.eventos_Expositores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Eventos_ExpositoresUpdateManyArgs>(args: SelectSubset<T, Eventos_ExpositoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos_Expositores and returns the data updated in the database.
     * @param {Eventos_ExpositoresUpdateManyAndReturnArgs} args - Arguments to update many Eventos_Expositores.
     * @example
     * // Update many Eventos_Expositores
     * const eventos_Expositores = await prisma.eventos_Expositores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos_Expositores and only return the `id_evento`
     * const eventos_ExpositoresWithId_eventoOnly = await prisma.eventos_Expositores.updateManyAndReturn({
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
    updateManyAndReturn<T extends Eventos_ExpositoresUpdateManyAndReturnArgs>(args: SelectSubset<T, Eventos_ExpositoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Eventos_ExpositoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eventos_Expositores.
     * @param {Eventos_ExpositoresUpsertArgs} args - Arguments to update or create a Eventos_Expositores.
     * @example
     * // Update or create a Eventos_Expositores
     * const eventos_Expositores = await prisma.eventos_Expositores.upsert({
     *   create: {
     *     // ... data to create a Eventos_Expositores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos_Expositores we want to update
     *   }
     * })
     */
    upsert<T extends Eventos_ExpositoresUpsertArgs>(args: SelectSubset<T, Eventos_ExpositoresUpsertArgs<ExtArgs>>): Prisma__Eventos_ExpositoresClient<$Result.GetResult<Prisma.$Eventos_ExpositoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos_Expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_ExpositoresCountArgs} args - Arguments to filter Eventos_Expositores to count.
     * @example
     * // Count the number of Eventos_Expositores
     * const count = await prisma.eventos_Expositores.count({
     *   where: {
     *     // ... the filter for the Eventos_Expositores we want to count
     *   }
     * })
    **/
    count<T extends Eventos_ExpositoresCountArgs>(
      args?: Subset<T, Eventos_ExpositoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Eventos_ExpositoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos_Expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_ExpositoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Eventos_ExpositoresAggregateArgs>(args: Subset<T, Eventos_ExpositoresAggregateArgs>): Prisma.PrismaPromise<GetEventos_ExpositoresAggregateType<T>>

    /**
     * Group by Eventos_Expositores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_ExpositoresGroupByArgs} args - Group by arguments.
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
      T extends Eventos_ExpositoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Eventos_ExpositoresGroupByArgs['orderBy'] }
        : { orderBy?: Eventos_ExpositoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Eventos_ExpositoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventos_ExpositoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Eventos_Expositores model
   */
  readonly fields: Eventos_ExpositoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Eventos_Expositores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Eventos_ExpositoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends EventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventosDefaultArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expositor<T extends ExpositoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpositoresDefaultArgs<ExtArgs>>): Prisma__ExpositoresClient<$Result.GetResult<Prisma.$ExpositoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Eventos_Expositores model
   */
  interface Eventos_ExpositoresFieldRefs {
    readonly id_evento: FieldRef<"Eventos_Expositores", 'Int'>
    readonly id_expositor: FieldRef<"Eventos_Expositores", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Eventos_Expositores findUnique
   */
  export type Eventos_ExpositoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresInclude<ExtArgs> | null
    /**
     * Filter, which Eventos_Expositores to fetch.
     */
    where: Eventos_ExpositoresWhereUniqueInput
  }

  /**
   * Eventos_Expositores findUniqueOrThrow
   */
  export type Eventos_ExpositoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresInclude<ExtArgs> | null
    /**
     * Filter, which Eventos_Expositores to fetch.
     */
    where: Eventos_ExpositoresWhereUniqueInput
  }

  /**
   * Eventos_Expositores findFirst
   */
  export type Eventos_ExpositoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresInclude<ExtArgs> | null
    /**
     * Filter, which Eventos_Expositores to fetch.
     */
    where?: Eventos_ExpositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos_Expositores to fetch.
     */
    orderBy?: Eventos_ExpositoresOrderByWithRelationInput | Eventos_ExpositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos_Expositores.
     */
    cursor?: Eventos_ExpositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos_Expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos_Expositores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos_Expositores.
     */
    distinct?: Eventos_ExpositoresScalarFieldEnum | Eventos_ExpositoresScalarFieldEnum[]
  }

  /**
   * Eventos_Expositores findFirstOrThrow
   */
  export type Eventos_ExpositoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresInclude<ExtArgs> | null
    /**
     * Filter, which Eventos_Expositores to fetch.
     */
    where?: Eventos_ExpositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos_Expositores to fetch.
     */
    orderBy?: Eventos_ExpositoresOrderByWithRelationInput | Eventos_ExpositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos_Expositores.
     */
    cursor?: Eventos_ExpositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos_Expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos_Expositores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos_Expositores.
     */
    distinct?: Eventos_ExpositoresScalarFieldEnum | Eventos_ExpositoresScalarFieldEnum[]
  }

  /**
   * Eventos_Expositores findMany
   */
  export type Eventos_ExpositoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresInclude<ExtArgs> | null
    /**
     * Filter, which Eventos_Expositores to fetch.
     */
    where?: Eventos_ExpositoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos_Expositores to fetch.
     */
    orderBy?: Eventos_ExpositoresOrderByWithRelationInput | Eventos_ExpositoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos_Expositores.
     */
    cursor?: Eventos_ExpositoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos_Expositores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos_Expositores.
     */
    skip?: number
    distinct?: Eventos_ExpositoresScalarFieldEnum | Eventos_ExpositoresScalarFieldEnum[]
  }

  /**
   * Eventos_Expositores create
   */
  export type Eventos_ExpositoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresInclude<ExtArgs> | null
    /**
     * The data needed to create a Eventos_Expositores.
     */
    data: XOR<Eventos_ExpositoresCreateInput, Eventos_ExpositoresUncheckedCreateInput>
  }

  /**
   * Eventos_Expositores createMany
   */
  export type Eventos_ExpositoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos_Expositores.
     */
    data: Eventos_ExpositoresCreateManyInput | Eventos_ExpositoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Eventos_Expositores createManyAndReturn
   */
  export type Eventos_ExpositoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos_Expositores.
     */
    data: Eventos_ExpositoresCreateManyInput | Eventos_ExpositoresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Eventos_Expositores update
   */
  export type Eventos_ExpositoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresInclude<ExtArgs> | null
    /**
     * The data needed to update a Eventos_Expositores.
     */
    data: XOR<Eventos_ExpositoresUpdateInput, Eventos_ExpositoresUncheckedUpdateInput>
    /**
     * Choose, which Eventos_Expositores to update.
     */
    where: Eventos_ExpositoresWhereUniqueInput
  }

  /**
   * Eventos_Expositores updateMany
   */
  export type Eventos_ExpositoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos_Expositores.
     */
    data: XOR<Eventos_ExpositoresUpdateManyMutationInput, Eventos_ExpositoresUncheckedUpdateManyInput>
    /**
     * Filter which Eventos_Expositores to update
     */
    where?: Eventos_ExpositoresWhereInput
    /**
     * Limit how many Eventos_Expositores to update.
     */
    limit?: number
  }

  /**
   * Eventos_Expositores updateManyAndReturn
   */
  export type Eventos_ExpositoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * The data used to update Eventos_Expositores.
     */
    data: XOR<Eventos_ExpositoresUpdateManyMutationInput, Eventos_ExpositoresUncheckedUpdateManyInput>
    /**
     * Filter which Eventos_Expositores to update
     */
    where?: Eventos_ExpositoresWhereInput
    /**
     * Limit how many Eventos_Expositores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Eventos_Expositores upsert
   */
  export type Eventos_ExpositoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresInclude<ExtArgs> | null
    /**
     * The filter to search for the Eventos_Expositores to update in case it exists.
     */
    where: Eventos_ExpositoresWhereUniqueInput
    /**
     * In case the Eventos_Expositores found by the `where` argument doesn't exist, create a new Eventos_Expositores with this data.
     */
    create: XOR<Eventos_ExpositoresCreateInput, Eventos_ExpositoresUncheckedCreateInput>
    /**
     * In case the Eventos_Expositores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Eventos_ExpositoresUpdateInput, Eventos_ExpositoresUncheckedUpdateInput>
  }

  /**
   * Eventos_Expositores delete
   */
  export type Eventos_ExpositoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresInclude<ExtArgs> | null
    /**
     * Filter which Eventos_Expositores to delete.
     */
    where: Eventos_ExpositoresWhereUniqueInput
  }

  /**
   * Eventos_Expositores deleteMany
   */
  export type Eventos_ExpositoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos_Expositores to delete
     */
    where?: Eventos_ExpositoresWhereInput
    /**
     * Limit how many Eventos_Expositores to delete.
     */
    limit?: number
  }

  /**
   * Eventos_Expositores without action
   */
  export type Eventos_ExpositoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Expositores
     */
    select?: Eventos_ExpositoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Expositores
     */
    omit?: Eventos_ExpositoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_ExpositoresInclude<ExtArgs> | null
  }


  /**
   * Model Patrocinadores
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
     * Filter which Patrocinadores to aggregate.
     */
    where?: PatrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patrocinadores to fetch.
     */
    orderBy?: PatrocinadoresOrderByWithRelationInput | PatrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patrocinadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patrocinadores
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




  export type PatrocinadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatrocinadoresWhereInput
    orderBy?: PatrocinadoresOrderByWithAggregationInput | PatrocinadoresOrderByWithAggregationInput[]
    by: PatrocinadoresScalarFieldEnum[] | PatrocinadoresScalarFieldEnum
    having?: PatrocinadoresScalarWhereWithAggregatesInput
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

  type GetPatrocinadoresGroupByPayload<T extends PatrocinadoresGroupByArgs> = Prisma.PrismaPromise<
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


  export type PatrocinadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_patrocinador?: boolean
    razon_social?: boolean
    institucion?: boolean
    eventos?: boolean | Patrocinadores$eventosArgs<ExtArgs>
    _count?: boolean | PatrocinadoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patrocinadores"]>

  export type PatrocinadoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_patrocinador?: boolean
    razon_social?: boolean
    institucion?: boolean
  }, ExtArgs["result"]["patrocinadores"]>

  export type PatrocinadoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_patrocinador?: boolean
    razon_social?: boolean
    institucion?: boolean
  }, ExtArgs["result"]["patrocinadores"]>

  export type PatrocinadoresSelectScalar = {
    id_patrocinador?: boolean
    razon_social?: boolean
    institucion?: boolean
  }

  export type PatrocinadoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_patrocinador" | "razon_social" | "institucion", ExtArgs["result"]["patrocinadores"]>
  export type PatrocinadoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | Patrocinadores$eventosArgs<ExtArgs>
    _count?: boolean | PatrocinadoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatrocinadoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatrocinadoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatrocinadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patrocinadores"
    objects: {
      eventos: Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_patrocinador: number
      razon_social: string | null
      institucion: string | null
    }, ExtArgs["result"]["patrocinadores"]>
    composites: {}
  }

  type PatrocinadoresGetPayload<S extends boolean | null | undefined | PatrocinadoresDefaultArgs> = $Result.GetResult<Prisma.$PatrocinadoresPayload, S>

  type PatrocinadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatrocinadoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatrocinadoresCountAggregateInputType | true
    }

  export interface PatrocinadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patrocinadores'], meta: { name: 'Patrocinadores' } }
    /**
     * Find zero or one Patrocinadores that matches the filter.
     * @param {PatrocinadoresFindUniqueArgs} args - Arguments to find a Patrocinadores
     * @example
     * // Get one Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatrocinadoresFindUniqueArgs>(args: SelectSubset<T, PatrocinadoresFindUniqueArgs<ExtArgs>>): Prisma__PatrocinadoresClient<$Result.GetResult<Prisma.$PatrocinadoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patrocinadores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatrocinadoresFindUniqueOrThrowArgs} args - Arguments to find a Patrocinadores
     * @example
     * // Get one Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatrocinadoresFindUniqueOrThrowArgs>(args: SelectSubset<T, PatrocinadoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatrocinadoresClient<$Result.GetResult<Prisma.$PatrocinadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patrocinadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatrocinadoresFindFirstArgs} args - Arguments to find a Patrocinadores
     * @example
     * // Get one Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatrocinadoresFindFirstArgs>(args?: SelectSubset<T, PatrocinadoresFindFirstArgs<ExtArgs>>): Prisma__PatrocinadoresClient<$Result.GetResult<Prisma.$PatrocinadoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patrocinadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatrocinadoresFindFirstOrThrowArgs} args - Arguments to find a Patrocinadores
     * @example
     * // Get one Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatrocinadoresFindFirstOrThrowArgs>(args?: SelectSubset<T, PatrocinadoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatrocinadoresClient<$Result.GetResult<Prisma.$PatrocinadoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patrocinadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatrocinadoresFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends PatrocinadoresFindManyArgs>(args?: SelectSubset<T, PatrocinadoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatrocinadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patrocinadores.
     * @param {PatrocinadoresCreateArgs} args - Arguments to create a Patrocinadores.
     * @example
     * // Create one Patrocinadores
     * const Patrocinadores = await prisma.patrocinadores.create({
     *   data: {
     *     // ... data to create a Patrocinadores
     *   }
     * })
     * 
     */
    create<T extends PatrocinadoresCreateArgs>(args: SelectSubset<T, PatrocinadoresCreateArgs<ExtArgs>>): Prisma__PatrocinadoresClient<$Result.GetResult<Prisma.$PatrocinadoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patrocinadores.
     * @param {PatrocinadoresCreateManyArgs} args - Arguments to create many Patrocinadores.
     * @example
     * // Create many Patrocinadores
     * const patrocinadores = await prisma.patrocinadores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatrocinadoresCreateManyArgs>(args?: SelectSubset<T, PatrocinadoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patrocinadores and returns the data saved in the database.
     * @param {PatrocinadoresCreateManyAndReturnArgs} args - Arguments to create many Patrocinadores.
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
    createManyAndReturn<T extends PatrocinadoresCreateManyAndReturnArgs>(args?: SelectSubset<T, PatrocinadoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatrocinadoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patrocinadores.
     * @param {PatrocinadoresDeleteArgs} args - Arguments to delete one Patrocinadores.
     * @example
     * // Delete one Patrocinadores
     * const Patrocinadores = await prisma.patrocinadores.delete({
     *   where: {
     *     // ... filter to delete one Patrocinadores
     *   }
     * })
     * 
     */
    delete<T extends PatrocinadoresDeleteArgs>(args: SelectSubset<T, PatrocinadoresDeleteArgs<ExtArgs>>): Prisma__PatrocinadoresClient<$Result.GetResult<Prisma.$PatrocinadoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patrocinadores.
     * @param {PatrocinadoresUpdateArgs} args - Arguments to update one Patrocinadores.
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
    update<T extends PatrocinadoresUpdateArgs>(args: SelectSubset<T, PatrocinadoresUpdateArgs<ExtArgs>>): Prisma__PatrocinadoresClient<$Result.GetResult<Prisma.$PatrocinadoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patrocinadores.
     * @param {PatrocinadoresDeleteManyArgs} args - Arguments to filter Patrocinadores to delete.
     * @example
     * // Delete a few Patrocinadores
     * const { count } = await prisma.patrocinadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatrocinadoresDeleteManyArgs>(args?: SelectSubset<T, PatrocinadoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatrocinadoresUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends PatrocinadoresUpdateManyArgs>(args: SelectSubset<T, PatrocinadoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patrocinadores and returns the data updated in the database.
     * @param {PatrocinadoresUpdateManyAndReturnArgs} args - Arguments to update many Patrocinadores.
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
    updateManyAndReturn<T extends PatrocinadoresUpdateManyAndReturnArgs>(args: SelectSubset<T, PatrocinadoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatrocinadoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patrocinadores.
     * @param {PatrocinadoresUpsertArgs} args - Arguments to update or create a Patrocinadores.
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
    upsert<T extends PatrocinadoresUpsertArgs>(args: SelectSubset<T, PatrocinadoresUpsertArgs<ExtArgs>>): Prisma__PatrocinadoresClient<$Result.GetResult<Prisma.$PatrocinadoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatrocinadoresCountArgs} args - Arguments to filter Patrocinadores to count.
     * @example
     * // Count the number of Patrocinadores
     * const count = await prisma.patrocinadores.count({
     *   where: {
     *     // ... the filter for the Patrocinadores we want to count
     *   }
     * })
    **/
    count<T extends PatrocinadoresCountArgs>(
      args?: Subset<T, PatrocinadoresCountArgs>,
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
     * @param {PatrocinadoresGroupByArgs} args - Group by arguments.
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
      T extends PatrocinadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatrocinadoresGroupByArgs['orderBy'] }
        : { orderBy?: PatrocinadoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatrocinadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatrocinadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patrocinadores model
   */
  readonly fields: PatrocinadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patrocinadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatrocinadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventos<T extends Patrocinadores$eventosArgs<ExtArgs> = {}>(args?: Subset<T, Patrocinadores$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patrocinadores model
   */
  interface PatrocinadoresFieldRefs {
    readonly id_patrocinador: FieldRef<"Patrocinadores", 'Int'>
    readonly razon_social: FieldRef<"Patrocinadores", 'String'>
    readonly institucion: FieldRef<"Patrocinadores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Patrocinadores findUnique
   */
  export type PatrocinadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinadores
     */
    select?: PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinadores
     */
    omit?: PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which Patrocinadores to fetch.
     */
    where: PatrocinadoresWhereUniqueInput
  }

  /**
   * Patrocinadores findUniqueOrThrow
   */
  export type PatrocinadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinadores
     */
    select?: PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinadores
     */
    omit?: PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which Patrocinadores to fetch.
     */
    where: PatrocinadoresWhereUniqueInput
  }

  /**
   * Patrocinadores findFirst
   */
  export type PatrocinadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinadores
     */
    select?: PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinadores
     */
    omit?: PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which Patrocinadores to fetch.
     */
    where?: PatrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patrocinadores to fetch.
     */
    orderBy?: PatrocinadoresOrderByWithRelationInput | PatrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patrocinadores.
     */
    cursor?: PatrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patrocinadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patrocinadores.
     */
    distinct?: PatrocinadoresScalarFieldEnum | PatrocinadoresScalarFieldEnum[]
  }

  /**
   * Patrocinadores findFirstOrThrow
   */
  export type PatrocinadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinadores
     */
    select?: PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinadores
     */
    omit?: PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which Patrocinadores to fetch.
     */
    where?: PatrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patrocinadores to fetch.
     */
    orderBy?: PatrocinadoresOrderByWithRelationInput | PatrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patrocinadores.
     */
    cursor?: PatrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patrocinadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patrocinadores.
     */
    distinct?: PatrocinadoresScalarFieldEnum | PatrocinadoresScalarFieldEnum[]
  }

  /**
   * Patrocinadores findMany
   */
  export type PatrocinadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinadores
     */
    select?: PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinadores
     */
    omit?: PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which Patrocinadores to fetch.
     */
    where?: PatrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patrocinadores to fetch.
     */
    orderBy?: PatrocinadoresOrderByWithRelationInput | PatrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patrocinadores.
     */
    cursor?: PatrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patrocinadores.
     */
    skip?: number
    distinct?: PatrocinadoresScalarFieldEnum | PatrocinadoresScalarFieldEnum[]
  }

  /**
   * Patrocinadores create
   */
  export type PatrocinadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinadores
     */
    select?: PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinadores
     */
    omit?: PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatrocinadoresInclude<ExtArgs> | null
    /**
     * The data needed to create a Patrocinadores.
     */
    data?: XOR<PatrocinadoresCreateInput, PatrocinadoresUncheckedCreateInput>
  }

  /**
   * Patrocinadores createMany
   */
  export type PatrocinadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patrocinadores.
     */
    data: PatrocinadoresCreateManyInput | PatrocinadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patrocinadores createManyAndReturn
   */
  export type PatrocinadoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinadores
     */
    select?: PatrocinadoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinadores
     */
    omit?: PatrocinadoresOmit<ExtArgs> | null
    /**
     * The data used to create many Patrocinadores.
     */
    data: PatrocinadoresCreateManyInput | PatrocinadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patrocinadores update
   */
  export type PatrocinadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinadores
     */
    select?: PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinadores
     */
    omit?: PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatrocinadoresInclude<ExtArgs> | null
    /**
     * The data needed to update a Patrocinadores.
     */
    data: XOR<PatrocinadoresUpdateInput, PatrocinadoresUncheckedUpdateInput>
    /**
     * Choose, which Patrocinadores to update.
     */
    where: PatrocinadoresWhereUniqueInput
  }

  /**
   * Patrocinadores updateMany
   */
  export type PatrocinadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patrocinadores.
     */
    data: XOR<PatrocinadoresUpdateManyMutationInput, PatrocinadoresUncheckedUpdateManyInput>
    /**
     * Filter which Patrocinadores to update
     */
    where?: PatrocinadoresWhereInput
    /**
     * Limit how many Patrocinadores to update.
     */
    limit?: number
  }

  /**
   * Patrocinadores updateManyAndReturn
   */
  export type PatrocinadoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinadores
     */
    select?: PatrocinadoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinadores
     */
    omit?: PatrocinadoresOmit<ExtArgs> | null
    /**
     * The data used to update Patrocinadores.
     */
    data: XOR<PatrocinadoresUpdateManyMutationInput, PatrocinadoresUncheckedUpdateManyInput>
    /**
     * Filter which Patrocinadores to update
     */
    where?: PatrocinadoresWhereInput
    /**
     * Limit how many Patrocinadores to update.
     */
    limit?: number
  }

  /**
   * Patrocinadores upsert
   */
  export type PatrocinadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinadores
     */
    select?: PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinadores
     */
    omit?: PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatrocinadoresInclude<ExtArgs> | null
    /**
     * The filter to search for the Patrocinadores to update in case it exists.
     */
    where: PatrocinadoresWhereUniqueInput
    /**
     * In case the Patrocinadores found by the `where` argument doesn't exist, create a new Patrocinadores with this data.
     */
    create: XOR<PatrocinadoresCreateInput, PatrocinadoresUncheckedCreateInput>
    /**
     * In case the Patrocinadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatrocinadoresUpdateInput, PatrocinadoresUncheckedUpdateInput>
  }

  /**
   * Patrocinadores delete
   */
  export type PatrocinadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinadores
     */
    select?: PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinadores
     */
    omit?: PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatrocinadoresInclude<ExtArgs> | null
    /**
     * Filter which Patrocinadores to delete.
     */
    where: PatrocinadoresWhereUniqueInput
  }

  /**
   * Patrocinadores deleteMany
   */
  export type PatrocinadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patrocinadores to delete
     */
    where?: PatrocinadoresWhereInput
    /**
     * Limit how many Patrocinadores to delete.
     */
    limit?: number
  }

  /**
   * Patrocinadores.eventos
   */
  export type Patrocinadores$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresInclude<ExtArgs> | null
    where?: Eventos_PatrocinadoresWhereInput
    orderBy?: Eventos_PatrocinadoresOrderByWithRelationInput | Eventos_PatrocinadoresOrderByWithRelationInput[]
    cursor?: Eventos_PatrocinadoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Eventos_PatrocinadoresScalarFieldEnum | Eventos_PatrocinadoresScalarFieldEnum[]
  }

  /**
   * Patrocinadores without action
   */
  export type PatrocinadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinadores
     */
    select?: PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinadores
     */
    omit?: PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatrocinadoresInclude<ExtArgs> | null
  }


  /**
   * Model Eventos_Patrocinadores
   */

  export type AggregateEventos_Patrocinadores = {
    _count: Eventos_PatrocinadoresCountAggregateOutputType | null
    _avg: Eventos_PatrocinadoresAvgAggregateOutputType | null
    _sum: Eventos_PatrocinadoresSumAggregateOutputType | null
    _min: Eventos_PatrocinadoresMinAggregateOutputType | null
    _max: Eventos_PatrocinadoresMaxAggregateOutputType | null
  }

  export type Eventos_PatrocinadoresAvgAggregateOutputType = {
    id_evento: number | null
    id_patrocinador: number | null
  }

  export type Eventos_PatrocinadoresSumAggregateOutputType = {
    id_evento: number | null
    id_patrocinador: number | null
  }

  export type Eventos_PatrocinadoresMinAggregateOutputType = {
    id_evento: number | null
    id_patrocinador: number | null
  }

  export type Eventos_PatrocinadoresMaxAggregateOutputType = {
    id_evento: number | null
    id_patrocinador: number | null
  }

  export type Eventos_PatrocinadoresCountAggregateOutputType = {
    id_evento: number
    id_patrocinador: number
    _all: number
  }


  export type Eventos_PatrocinadoresAvgAggregateInputType = {
    id_evento?: true
    id_patrocinador?: true
  }

  export type Eventos_PatrocinadoresSumAggregateInputType = {
    id_evento?: true
    id_patrocinador?: true
  }

  export type Eventos_PatrocinadoresMinAggregateInputType = {
    id_evento?: true
    id_patrocinador?: true
  }

  export type Eventos_PatrocinadoresMaxAggregateInputType = {
    id_evento?: true
    id_patrocinador?: true
  }

  export type Eventos_PatrocinadoresCountAggregateInputType = {
    id_evento?: true
    id_patrocinador?: true
    _all?: true
  }

  export type Eventos_PatrocinadoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos_Patrocinadores to aggregate.
     */
    where?: Eventos_PatrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos_Patrocinadores to fetch.
     */
    orderBy?: Eventos_PatrocinadoresOrderByWithRelationInput | Eventos_PatrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Eventos_PatrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos_Patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos_Patrocinadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos_Patrocinadores
    **/
    _count?: true | Eventos_PatrocinadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Eventos_PatrocinadoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Eventos_PatrocinadoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Eventos_PatrocinadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Eventos_PatrocinadoresMaxAggregateInputType
  }

  export type GetEventos_PatrocinadoresAggregateType<T extends Eventos_PatrocinadoresAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos_Patrocinadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos_Patrocinadores[P]>
      : GetScalarType<T[P], AggregateEventos_Patrocinadores[P]>
  }




  export type Eventos_PatrocinadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Eventos_PatrocinadoresWhereInput
    orderBy?: Eventos_PatrocinadoresOrderByWithAggregationInput | Eventos_PatrocinadoresOrderByWithAggregationInput[]
    by: Eventos_PatrocinadoresScalarFieldEnum[] | Eventos_PatrocinadoresScalarFieldEnum
    having?: Eventos_PatrocinadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Eventos_PatrocinadoresCountAggregateInputType | true
    _avg?: Eventos_PatrocinadoresAvgAggregateInputType
    _sum?: Eventos_PatrocinadoresSumAggregateInputType
    _min?: Eventos_PatrocinadoresMinAggregateInputType
    _max?: Eventos_PatrocinadoresMaxAggregateInputType
  }

  export type Eventos_PatrocinadoresGroupByOutputType = {
    id_evento: number
    id_patrocinador: number
    _count: Eventos_PatrocinadoresCountAggregateOutputType | null
    _avg: Eventos_PatrocinadoresAvgAggregateOutputType | null
    _sum: Eventos_PatrocinadoresSumAggregateOutputType | null
    _min: Eventos_PatrocinadoresMinAggregateOutputType | null
    _max: Eventos_PatrocinadoresMaxAggregateOutputType | null
  }

  type GetEventos_PatrocinadoresGroupByPayload<T extends Eventos_PatrocinadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Eventos_PatrocinadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Eventos_PatrocinadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Eventos_PatrocinadoresGroupByOutputType[P]>
            : GetScalarType<T[P], Eventos_PatrocinadoresGroupByOutputType[P]>
        }
      >
    >


  export type Eventos_PatrocinadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_patrocinador?: boolean
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    patrocinador?: boolean | PatrocinadoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos_Patrocinadores"]>

  export type Eventos_PatrocinadoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_patrocinador?: boolean
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    patrocinador?: boolean | PatrocinadoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos_Patrocinadores"]>

  export type Eventos_PatrocinadoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_patrocinador?: boolean
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    patrocinador?: boolean | PatrocinadoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos_Patrocinadores"]>

  export type Eventos_PatrocinadoresSelectScalar = {
    id_evento?: boolean
    id_patrocinador?: boolean
  }

  export type Eventos_PatrocinadoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evento" | "id_patrocinador", ExtArgs["result"]["eventos_Patrocinadores"]>
  export type Eventos_PatrocinadoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    patrocinador?: boolean | PatrocinadoresDefaultArgs<ExtArgs>
  }
  export type Eventos_PatrocinadoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    patrocinador?: boolean | PatrocinadoresDefaultArgs<ExtArgs>
  }
  export type Eventos_PatrocinadoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    patrocinador?: boolean | PatrocinadoresDefaultArgs<ExtArgs>
  }

  export type $Eventos_PatrocinadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Eventos_Patrocinadores"
    objects: {
      evento: Prisma.$EventosPayload<ExtArgs>
      patrocinador: Prisma.$PatrocinadoresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evento: number
      id_patrocinador: number
    }, ExtArgs["result"]["eventos_Patrocinadores"]>
    composites: {}
  }

  type Eventos_PatrocinadoresGetPayload<S extends boolean | null | undefined | Eventos_PatrocinadoresDefaultArgs> = $Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload, S>

  type Eventos_PatrocinadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Eventos_PatrocinadoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Eventos_PatrocinadoresCountAggregateInputType | true
    }

  export interface Eventos_PatrocinadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Eventos_Patrocinadores'], meta: { name: 'Eventos_Patrocinadores' } }
    /**
     * Find zero or one Eventos_Patrocinadores that matches the filter.
     * @param {Eventos_PatrocinadoresFindUniqueArgs} args - Arguments to find a Eventos_Patrocinadores
     * @example
     * // Get one Eventos_Patrocinadores
     * const eventos_Patrocinadores = await prisma.eventos_Patrocinadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Eventos_PatrocinadoresFindUniqueArgs>(args: SelectSubset<T, Eventos_PatrocinadoresFindUniqueArgs<ExtArgs>>): Prisma__Eventos_PatrocinadoresClient<$Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eventos_Patrocinadores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Eventos_PatrocinadoresFindUniqueOrThrowArgs} args - Arguments to find a Eventos_Patrocinadores
     * @example
     * // Get one Eventos_Patrocinadores
     * const eventos_Patrocinadores = await prisma.eventos_Patrocinadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Eventos_PatrocinadoresFindUniqueOrThrowArgs>(args: SelectSubset<T, Eventos_PatrocinadoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Eventos_PatrocinadoresClient<$Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos_Patrocinadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_PatrocinadoresFindFirstArgs} args - Arguments to find a Eventos_Patrocinadores
     * @example
     * // Get one Eventos_Patrocinadores
     * const eventos_Patrocinadores = await prisma.eventos_Patrocinadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Eventos_PatrocinadoresFindFirstArgs>(args?: SelectSubset<T, Eventos_PatrocinadoresFindFirstArgs<ExtArgs>>): Prisma__Eventos_PatrocinadoresClient<$Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos_Patrocinadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_PatrocinadoresFindFirstOrThrowArgs} args - Arguments to find a Eventos_Patrocinadores
     * @example
     * // Get one Eventos_Patrocinadores
     * const eventos_Patrocinadores = await prisma.eventos_Patrocinadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Eventos_PatrocinadoresFindFirstOrThrowArgs>(args?: SelectSubset<T, Eventos_PatrocinadoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__Eventos_PatrocinadoresClient<$Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos_Patrocinadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_PatrocinadoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos_Patrocinadores
     * const eventos_Patrocinadores = await prisma.eventos_Patrocinadores.findMany()
     * 
     * // Get first 10 Eventos_Patrocinadores
     * const eventos_Patrocinadores = await prisma.eventos_Patrocinadores.findMany({ take: 10 })
     * 
     * // Only select the `id_evento`
     * const eventos_PatrocinadoresWithId_eventoOnly = await prisma.eventos_Patrocinadores.findMany({ select: { id_evento: true } })
     * 
     */
    findMany<T extends Eventos_PatrocinadoresFindManyArgs>(args?: SelectSubset<T, Eventos_PatrocinadoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eventos_Patrocinadores.
     * @param {Eventos_PatrocinadoresCreateArgs} args - Arguments to create a Eventos_Patrocinadores.
     * @example
     * // Create one Eventos_Patrocinadores
     * const Eventos_Patrocinadores = await prisma.eventos_Patrocinadores.create({
     *   data: {
     *     // ... data to create a Eventos_Patrocinadores
     *   }
     * })
     * 
     */
    create<T extends Eventos_PatrocinadoresCreateArgs>(args: SelectSubset<T, Eventos_PatrocinadoresCreateArgs<ExtArgs>>): Prisma__Eventos_PatrocinadoresClient<$Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos_Patrocinadores.
     * @param {Eventos_PatrocinadoresCreateManyArgs} args - Arguments to create many Eventos_Patrocinadores.
     * @example
     * // Create many Eventos_Patrocinadores
     * const eventos_Patrocinadores = await prisma.eventos_Patrocinadores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Eventos_PatrocinadoresCreateManyArgs>(args?: SelectSubset<T, Eventos_PatrocinadoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos_Patrocinadores and returns the data saved in the database.
     * @param {Eventos_PatrocinadoresCreateManyAndReturnArgs} args - Arguments to create many Eventos_Patrocinadores.
     * @example
     * // Create many Eventos_Patrocinadores
     * const eventos_Patrocinadores = await prisma.eventos_Patrocinadores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos_Patrocinadores and only return the `id_evento`
     * const eventos_PatrocinadoresWithId_eventoOnly = await prisma.eventos_Patrocinadores.createManyAndReturn({
     *   select: { id_evento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Eventos_PatrocinadoresCreateManyAndReturnArgs>(args?: SelectSubset<T, Eventos_PatrocinadoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eventos_Patrocinadores.
     * @param {Eventos_PatrocinadoresDeleteArgs} args - Arguments to delete one Eventos_Patrocinadores.
     * @example
     * // Delete one Eventos_Patrocinadores
     * const Eventos_Patrocinadores = await prisma.eventos_Patrocinadores.delete({
     *   where: {
     *     // ... filter to delete one Eventos_Patrocinadores
     *   }
     * })
     * 
     */
    delete<T extends Eventos_PatrocinadoresDeleteArgs>(args: SelectSubset<T, Eventos_PatrocinadoresDeleteArgs<ExtArgs>>): Prisma__Eventos_PatrocinadoresClient<$Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eventos_Patrocinadores.
     * @param {Eventos_PatrocinadoresUpdateArgs} args - Arguments to update one Eventos_Patrocinadores.
     * @example
     * // Update one Eventos_Patrocinadores
     * const eventos_Patrocinadores = await prisma.eventos_Patrocinadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Eventos_PatrocinadoresUpdateArgs>(args: SelectSubset<T, Eventos_PatrocinadoresUpdateArgs<ExtArgs>>): Prisma__Eventos_PatrocinadoresClient<$Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos_Patrocinadores.
     * @param {Eventos_PatrocinadoresDeleteManyArgs} args - Arguments to filter Eventos_Patrocinadores to delete.
     * @example
     * // Delete a few Eventos_Patrocinadores
     * const { count } = await prisma.eventos_Patrocinadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Eventos_PatrocinadoresDeleteManyArgs>(args?: SelectSubset<T, Eventos_PatrocinadoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos_Patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_PatrocinadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos_Patrocinadores
     * const eventos_Patrocinadores = await prisma.eventos_Patrocinadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Eventos_PatrocinadoresUpdateManyArgs>(args: SelectSubset<T, Eventos_PatrocinadoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos_Patrocinadores and returns the data updated in the database.
     * @param {Eventos_PatrocinadoresUpdateManyAndReturnArgs} args - Arguments to update many Eventos_Patrocinadores.
     * @example
     * // Update many Eventos_Patrocinadores
     * const eventos_Patrocinadores = await prisma.eventos_Patrocinadores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos_Patrocinadores and only return the `id_evento`
     * const eventos_PatrocinadoresWithId_eventoOnly = await prisma.eventos_Patrocinadores.updateManyAndReturn({
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
    updateManyAndReturn<T extends Eventos_PatrocinadoresUpdateManyAndReturnArgs>(args: SelectSubset<T, Eventos_PatrocinadoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eventos_Patrocinadores.
     * @param {Eventos_PatrocinadoresUpsertArgs} args - Arguments to update or create a Eventos_Patrocinadores.
     * @example
     * // Update or create a Eventos_Patrocinadores
     * const eventos_Patrocinadores = await prisma.eventos_Patrocinadores.upsert({
     *   create: {
     *     // ... data to create a Eventos_Patrocinadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos_Patrocinadores we want to update
     *   }
     * })
     */
    upsert<T extends Eventos_PatrocinadoresUpsertArgs>(args: SelectSubset<T, Eventos_PatrocinadoresUpsertArgs<ExtArgs>>): Prisma__Eventos_PatrocinadoresClient<$Result.GetResult<Prisma.$Eventos_PatrocinadoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos_Patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_PatrocinadoresCountArgs} args - Arguments to filter Eventos_Patrocinadores to count.
     * @example
     * // Count the number of Eventos_Patrocinadores
     * const count = await prisma.eventos_Patrocinadores.count({
     *   where: {
     *     // ... the filter for the Eventos_Patrocinadores we want to count
     *   }
     * })
    **/
    count<T extends Eventos_PatrocinadoresCountArgs>(
      args?: Subset<T, Eventos_PatrocinadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Eventos_PatrocinadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos_Patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_PatrocinadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Eventos_PatrocinadoresAggregateArgs>(args: Subset<T, Eventos_PatrocinadoresAggregateArgs>): Prisma.PrismaPromise<GetEventos_PatrocinadoresAggregateType<T>>

    /**
     * Group by Eventos_Patrocinadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_PatrocinadoresGroupByArgs} args - Group by arguments.
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
      T extends Eventos_PatrocinadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Eventos_PatrocinadoresGroupByArgs['orderBy'] }
        : { orderBy?: Eventos_PatrocinadoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Eventos_PatrocinadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventos_PatrocinadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Eventos_Patrocinadores model
   */
  readonly fields: Eventos_PatrocinadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Eventos_Patrocinadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Eventos_PatrocinadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends EventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventosDefaultArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patrocinador<T extends PatrocinadoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatrocinadoresDefaultArgs<ExtArgs>>): Prisma__PatrocinadoresClient<$Result.GetResult<Prisma.$PatrocinadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Eventos_Patrocinadores model
   */
  interface Eventos_PatrocinadoresFieldRefs {
    readonly id_evento: FieldRef<"Eventos_Patrocinadores", 'Int'>
    readonly id_patrocinador: FieldRef<"Eventos_Patrocinadores", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Eventos_Patrocinadores findUnique
   */
  export type Eventos_PatrocinadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which Eventos_Patrocinadores to fetch.
     */
    where: Eventos_PatrocinadoresWhereUniqueInput
  }

  /**
   * Eventos_Patrocinadores findUniqueOrThrow
   */
  export type Eventos_PatrocinadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which Eventos_Patrocinadores to fetch.
     */
    where: Eventos_PatrocinadoresWhereUniqueInput
  }

  /**
   * Eventos_Patrocinadores findFirst
   */
  export type Eventos_PatrocinadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which Eventos_Patrocinadores to fetch.
     */
    where?: Eventos_PatrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos_Patrocinadores to fetch.
     */
    orderBy?: Eventos_PatrocinadoresOrderByWithRelationInput | Eventos_PatrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos_Patrocinadores.
     */
    cursor?: Eventos_PatrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos_Patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos_Patrocinadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos_Patrocinadores.
     */
    distinct?: Eventos_PatrocinadoresScalarFieldEnum | Eventos_PatrocinadoresScalarFieldEnum[]
  }

  /**
   * Eventos_Patrocinadores findFirstOrThrow
   */
  export type Eventos_PatrocinadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which Eventos_Patrocinadores to fetch.
     */
    where?: Eventos_PatrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos_Patrocinadores to fetch.
     */
    orderBy?: Eventos_PatrocinadoresOrderByWithRelationInput | Eventos_PatrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos_Patrocinadores.
     */
    cursor?: Eventos_PatrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos_Patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos_Patrocinadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos_Patrocinadores.
     */
    distinct?: Eventos_PatrocinadoresScalarFieldEnum | Eventos_PatrocinadoresScalarFieldEnum[]
  }

  /**
   * Eventos_Patrocinadores findMany
   */
  export type Eventos_PatrocinadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresInclude<ExtArgs> | null
    /**
     * Filter, which Eventos_Patrocinadores to fetch.
     */
    where?: Eventos_PatrocinadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos_Patrocinadores to fetch.
     */
    orderBy?: Eventos_PatrocinadoresOrderByWithRelationInput | Eventos_PatrocinadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos_Patrocinadores.
     */
    cursor?: Eventos_PatrocinadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos_Patrocinadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos_Patrocinadores.
     */
    skip?: number
    distinct?: Eventos_PatrocinadoresScalarFieldEnum | Eventos_PatrocinadoresScalarFieldEnum[]
  }

  /**
   * Eventos_Patrocinadores create
   */
  export type Eventos_PatrocinadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresInclude<ExtArgs> | null
    /**
     * The data needed to create a Eventos_Patrocinadores.
     */
    data: XOR<Eventos_PatrocinadoresCreateInput, Eventos_PatrocinadoresUncheckedCreateInput>
  }

  /**
   * Eventos_Patrocinadores createMany
   */
  export type Eventos_PatrocinadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos_Patrocinadores.
     */
    data: Eventos_PatrocinadoresCreateManyInput | Eventos_PatrocinadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Eventos_Patrocinadores createManyAndReturn
   */
  export type Eventos_PatrocinadoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos_Patrocinadores.
     */
    data: Eventos_PatrocinadoresCreateManyInput | Eventos_PatrocinadoresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Eventos_Patrocinadores update
   */
  export type Eventos_PatrocinadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresInclude<ExtArgs> | null
    /**
     * The data needed to update a Eventos_Patrocinadores.
     */
    data: XOR<Eventos_PatrocinadoresUpdateInput, Eventos_PatrocinadoresUncheckedUpdateInput>
    /**
     * Choose, which Eventos_Patrocinadores to update.
     */
    where: Eventos_PatrocinadoresWhereUniqueInput
  }

  /**
   * Eventos_Patrocinadores updateMany
   */
  export type Eventos_PatrocinadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos_Patrocinadores.
     */
    data: XOR<Eventos_PatrocinadoresUpdateManyMutationInput, Eventos_PatrocinadoresUncheckedUpdateManyInput>
    /**
     * Filter which Eventos_Patrocinadores to update
     */
    where?: Eventos_PatrocinadoresWhereInput
    /**
     * Limit how many Eventos_Patrocinadores to update.
     */
    limit?: number
  }

  /**
   * Eventos_Patrocinadores updateManyAndReturn
   */
  export type Eventos_PatrocinadoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * The data used to update Eventos_Patrocinadores.
     */
    data: XOR<Eventos_PatrocinadoresUpdateManyMutationInput, Eventos_PatrocinadoresUncheckedUpdateManyInput>
    /**
     * Filter which Eventos_Patrocinadores to update
     */
    where?: Eventos_PatrocinadoresWhereInput
    /**
     * Limit how many Eventos_Patrocinadores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Eventos_Patrocinadores upsert
   */
  export type Eventos_PatrocinadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresInclude<ExtArgs> | null
    /**
     * The filter to search for the Eventos_Patrocinadores to update in case it exists.
     */
    where: Eventos_PatrocinadoresWhereUniqueInput
    /**
     * In case the Eventos_Patrocinadores found by the `where` argument doesn't exist, create a new Eventos_Patrocinadores with this data.
     */
    create: XOR<Eventos_PatrocinadoresCreateInput, Eventos_PatrocinadoresUncheckedCreateInput>
    /**
     * In case the Eventos_Patrocinadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Eventos_PatrocinadoresUpdateInput, Eventos_PatrocinadoresUncheckedUpdateInput>
  }

  /**
   * Eventos_Patrocinadores delete
   */
  export type Eventos_PatrocinadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresInclude<ExtArgs> | null
    /**
     * Filter which Eventos_Patrocinadores to delete.
     */
    where: Eventos_PatrocinadoresWhereUniqueInput
  }

  /**
   * Eventos_Patrocinadores deleteMany
   */
  export type Eventos_PatrocinadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos_Patrocinadores to delete
     */
    where?: Eventos_PatrocinadoresWhereInput
    /**
     * Limit how many Eventos_Patrocinadores to delete.
     */
    limit?: number
  }

  /**
   * Eventos_Patrocinadores without action
   */
  export type Eventos_PatrocinadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos_Patrocinadores
     */
    select?: Eventos_PatrocinadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos_Patrocinadores
     */
    omit?: Eventos_PatrocinadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Eventos_PatrocinadoresInclude<ExtArgs> | null
  }


  /**
   * Model Agenda
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
     * Filter which Agenda to aggregate.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agenda
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




  export type AgendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendaWhereInput
    orderBy?: AgendaOrderByWithAggregationInput | AgendaOrderByWithAggregationInput[]
    by: AgendaScalarFieldEnum[] | AgendaScalarFieldEnum
    having?: AgendaScalarWhereWithAggregatesInput
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

  type GetAgendaGroupByPayload<T extends AgendaGroupByArgs> = Prisma.PrismaPromise<
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


  export type AgendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_agenda?: boolean
    id_usuario?: boolean
    id_evento?: boolean
    actividad?: boolean
    fecha?: boolean
    comentario?: boolean
    calificacion?: boolean
    asistio?: boolean
    hora_ingreso?: boolean
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda"]>

  export type AgendaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_agenda?: boolean
    id_usuario?: boolean
    id_evento?: boolean
    actividad?: boolean
    fecha?: boolean
    comentario?: boolean
    calificacion?: boolean
    asistio?: boolean
    hora_ingreso?: boolean
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda"]>

  export type AgendaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_agenda?: boolean
    id_usuario?: boolean
    id_evento?: boolean
    actividad?: boolean
    fecha?: boolean
    comentario?: boolean
    calificacion?: boolean
    asistio?: boolean
    hora_ingreso?: boolean
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda"]>

  export type AgendaSelectScalar = {
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

  export type AgendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_agenda" | "id_usuario" | "id_evento" | "actividad" | "fecha" | "comentario" | "calificacion" | "asistio" | "hora_ingreso", ExtArgs["result"]["agenda"]>
  export type AgendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }
  export type AgendaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }
  export type AgendaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }

  export type $AgendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agenda"
    objects: {
      usuario: Prisma.$UsuariosPayload<ExtArgs>
      evento: Prisma.$EventosPayload<ExtArgs>
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

  type AgendaGetPayload<S extends boolean | null | undefined | AgendaDefaultArgs> = $Result.GetResult<Prisma.$AgendaPayload, S>

  type AgendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendaCountAggregateInputType | true
    }

  export interface AgendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agenda'], meta: { name: 'Agenda' } }
    /**
     * Find zero or one Agenda that matches the filter.
     * @param {AgendaFindUniqueArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendaFindUniqueArgs>(args: SelectSubset<T, AgendaFindUniqueArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agenda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendaFindUniqueOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendaFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindFirstArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendaFindFirstArgs>(args?: SelectSubset<T, AgendaFindFirstArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindFirstOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendaFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends AgendaFindManyArgs>(args?: SelectSubset<T, AgendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agenda.
     * @param {AgendaCreateArgs} args - Arguments to create a Agenda.
     * @example
     * // Create one Agenda
     * const Agenda = await prisma.agenda.create({
     *   data: {
     *     // ... data to create a Agenda
     *   }
     * })
     * 
     */
    create<T extends AgendaCreateArgs>(args: SelectSubset<T, AgendaCreateArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agenda.
     * @param {AgendaCreateManyArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendaCreateManyArgs>(args?: SelectSubset<T, AgendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agenda and returns the data saved in the database.
     * @param {AgendaCreateManyAndReturnArgs} args - Arguments to create many Agenda.
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
    createManyAndReturn<T extends AgendaCreateManyAndReturnArgs>(args?: SelectSubset<T, AgendaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agenda.
     * @param {AgendaDeleteArgs} args - Arguments to delete one Agenda.
     * @example
     * // Delete one Agenda
     * const Agenda = await prisma.agenda.delete({
     *   where: {
     *     // ... filter to delete one Agenda
     *   }
     * })
     * 
     */
    delete<T extends AgendaDeleteArgs>(args: SelectSubset<T, AgendaDeleteArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agenda.
     * @param {AgendaUpdateArgs} args - Arguments to update one Agenda.
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
    update<T extends AgendaUpdateArgs>(args: SelectSubset<T, AgendaUpdateArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agenda.
     * @param {AgendaDeleteManyArgs} args - Arguments to filter Agenda to delete.
     * @example
     * // Delete a few Agenda
     * const { count } = await prisma.agenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendaDeleteManyArgs>(args?: SelectSubset<T, AgendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends AgendaUpdateManyArgs>(args: SelectSubset<T, AgendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda and returns the data updated in the database.
     * @param {AgendaUpdateManyAndReturnArgs} args - Arguments to update many Agenda.
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
    updateManyAndReturn<T extends AgendaUpdateManyAndReturnArgs>(args: SelectSubset<T, AgendaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agenda.
     * @param {AgendaUpsertArgs} args - Arguments to update or create a Agenda.
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
    upsert<T extends AgendaUpsertArgs>(args: SelectSubset<T, AgendaUpsertArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaCountArgs} args - Arguments to filter Agenda to count.
     * @example
     * // Count the number of Agenda
     * const count = await prisma.agenda.count({
     *   where: {
     *     // ... the filter for the Agenda we want to count
     *   }
     * })
    **/
    count<T extends AgendaCountArgs>(
      args?: Subset<T, AgendaCountArgs>,
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
     * @param {AgendaGroupByArgs} args - Group by arguments.
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
      T extends AgendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendaGroupByArgs['orderBy'] }
        : { orderBy?: AgendaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agenda model
   */
  readonly fields: AgendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evento<T extends EventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventosDefaultArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Agenda model
   */
  interface AgendaFieldRefs {
    readonly id_agenda: FieldRef<"Agenda", 'Int'>
    readonly id_usuario: FieldRef<"Agenda", 'Int'>
    readonly id_evento: FieldRef<"Agenda", 'Int'>
    readonly actividad: FieldRef<"Agenda", 'String'>
    readonly fecha: FieldRef<"Agenda", 'DateTime'>
    readonly comentario: FieldRef<"Agenda", 'String'>
    readonly calificacion: FieldRef<"Agenda", 'Int'>
    readonly asistio: FieldRef<"Agenda", 'Boolean'>
    readonly hora_ingreso: FieldRef<"Agenda", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agenda findUnique
   */
  export type AgendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda findUniqueOrThrow
   */
  export type AgendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda findFirst
   */
  export type AgendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda findFirstOrThrow
   */
  export type AgendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda findMany
   */
  export type AgendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda create
   */
  export type AgendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * The data needed to create a Agenda.
     */
    data: XOR<AgendaCreateInput, AgendaUncheckedCreateInput>
  }

  /**
   * Agenda createMany
   */
  export type AgendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agenda.
     */
    data: AgendaCreateManyInput | AgendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agenda createManyAndReturn
   */
  export type AgendaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * The data used to create many Agenda.
     */
    data: AgendaCreateManyInput | AgendaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agenda update
   */
  export type AgendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * The data needed to update a Agenda.
     */
    data: XOR<AgendaUpdateInput, AgendaUncheckedUpdateInput>
    /**
     * Choose, which Agenda to update.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda updateMany
   */
  export type AgendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agenda.
     */
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyInput>
    /**
     * Filter which Agenda to update
     */
    where?: AgendaWhereInput
    /**
     * Limit how many Agenda to update.
     */
    limit?: number
  }

  /**
   * Agenda updateManyAndReturn
   */
  export type AgendaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * The data used to update Agenda.
     */
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyInput>
    /**
     * Filter which Agenda to update
     */
    where?: AgendaWhereInput
    /**
     * Limit how many Agenda to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agenda upsert
   */
  export type AgendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * The filter to search for the Agenda to update in case it exists.
     */
    where: AgendaWhereUniqueInput
    /**
     * In case the Agenda found by the `where` argument doesn't exist, create a new Agenda with this data.
     */
    create: XOR<AgendaCreateInput, AgendaUncheckedCreateInput>
    /**
     * In case the Agenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendaUpdateInput, AgendaUncheckedUpdateInput>
  }

  /**
   * Agenda delete
   */
  export type AgendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter which Agenda to delete.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda deleteMany
   */
  export type AgendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agenda to delete
     */
    where?: AgendaWhereInput
    /**
     * Limit how many Agenda to delete.
     */
    limit?: number
  }

  /**
   * Agenda without action
   */
  export type AgendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
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


  export const Eventos_ExpositoresScalarFieldEnum: {
    id_evento: 'id_evento',
    id_expositor: 'id_expositor'
  };

  export type Eventos_ExpositoresScalarFieldEnum = (typeof Eventos_ExpositoresScalarFieldEnum)[keyof typeof Eventos_ExpositoresScalarFieldEnum]


  export const PatrocinadoresScalarFieldEnum: {
    id_patrocinador: 'id_patrocinador',
    razon_social: 'razon_social',
    institucion: 'institucion'
  };

  export type PatrocinadoresScalarFieldEnum = (typeof PatrocinadoresScalarFieldEnum)[keyof typeof PatrocinadoresScalarFieldEnum]


  export const Eventos_PatrocinadoresScalarFieldEnum: {
    id_evento: 'id_evento',
    id_patrocinador: 'id_patrocinador'
  };

  export type Eventos_PatrocinadoresScalarFieldEnum = (typeof Eventos_PatrocinadoresScalarFieldEnum)[keyof typeof Eventos_PatrocinadoresScalarFieldEnum]


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


  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    id_usuario?: IntFilter<"Usuarios"> | number
    rol?: StringNullableFilter<"Usuarios"> | string | null
    nombre?: StringNullableFilter<"Usuarios"> | string | null
    apellidopaterno?: StringNullableFilter<"Usuarios"> | string | null
    apellidomaterno?: StringNullableFilter<"Usuarios"> | string | null
    email?: StringNullableFilter<"Usuarios"> | string | null
    contrasena?: StringNullableFilter<"Usuarios"> | string | null
    foto?: StringNullableFilter<"Usuarios"> | string | null
    telefono?: IntNullableFilter<"Usuarios"> | number | null
    pais?: StringNullableFilter<"Usuarios"> | string | null
    ciudad?: StringNullableFilter<"Usuarios"> | string | null
    genero?: StringNullableFilter<"Usuarios"> | string | null
    fechacreacion?: DateTimeFilter<"Usuarios"> | Date | string
    verificado?: BoolNullableFilter<"Usuarios"> | boolean | null
    reset_token?: StringNullableFilter<"Usuarios"> | string | null
    agenda?: AgendaListRelationFilter
  }

  export type UsuariosOrderByWithRelationInput = {
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
    agenda?: AgendaOrderByRelationAggregateInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    rol?: StringNullableFilter<"Usuarios"> | string | null
    nombre?: StringNullableFilter<"Usuarios"> | string | null
    apellidopaterno?: StringNullableFilter<"Usuarios"> | string | null
    apellidomaterno?: StringNullableFilter<"Usuarios"> | string | null
    contrasena?: StringNullableFilter<"Usuarios"> | string | null
    foto?: StringNullableFilter<"Usuarios"> | string | null
    telefono?: IntNullableFilter<"Usuarios"> | number | null
    pais?: StringNullableFilter<"Usuarios"> | string | null
    ciudad?: StringNullableFilter<"Usuarios"> | string | null
    genero?: StringNullableFilter<"Usuarios"> | string | null
    fechacreacion?: DateTimeFilter<"Usuarios"> | Date | string
    verificado?: BoolNullableFilter<"Usuarios"> | boolean | null
    reset_token?: StringNullableFilter<"Usuarios"> | string | null
    agenda?: AgendaListRelationFilter
  }, "id_usuario" | "email">

  export type UsuariosOrderByWithAggregationInput = {
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
    _count?: UsuariosCountOrderByAggregateInput
    _avg?: UsuariosAvgOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
    _sum?: UsuariosSumOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuarios"> | number
    rol?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    nombre?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    apellidopaterno?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    apellidomaterno?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    email?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    contrasena?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    foto?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    telefono?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    pais?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    ciudad?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    genero?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    fechacreacion?: DateTimeWithAggregatesFilter<"Usuarios"> | Date | string
    verificado?: BoolNullableWithAggregatesFilter<"Usuarios"> | boolean | null
    reset_token?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
  }

  export type EventosWhereInput = {
    AND?: EventosWhereInput | EventosWhereInput[]
    OR?: EventosWhereInput[]
    NOT?: EventosWhereInput | EventosWhereInput[]
    id_evento?: IntFilter<"Eventos"> | number
    titulo?: StringNullableFilter<"Eventos"> | string | null
    descripcion?: StringNullableFilter<"Eventos"> | string | null
    foto_evento?: StringNullableFilter<"Eventos"> | string | null
    hora_inicio?: StringNullableFilter<"Eventos"> | string | null
    hora_fin?: StringNullableFilter<"Eventos"> | string | null
    fecha?: DateTimeNullableFilter<"Eventos"> | Date | string | null
    costo?: StringNullableFilter<"Eventos"> | string | null
    modalidad?: StringNullableFilter<"Eventos"> | string | null
    ubicacion?: StringNullableFilter<"Eventos"> | string | null
    link_reunion?: StringNullableFilter<"Eventos"> | string | null
    reunion_iniciada?: BoolNullableFilter<"Eventos"> | boolean | null
    agenda?: AgendaListRelationFilter
    expositores?: Eventos_ExpositoresListRelationFilter
    patrocinadores?: Eventos_PatrocinadoresListRelationFilter
  }

  export type EventosOrderByWithRelationInput = {
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
    agenda?: AgendaOrderByRelationAggregateInput
    expositores?: Eventos_ExpositoresOrderByRelationAggregateInput
    patrocinadores?: Eventos_PatrocinadoresOrderByRelationAggregateInput
  }

  export type EventosWhereUniqueInput = Prisma.AtLeast<{
    id_evento?: number
    AND?: EventosWhereInput | EventosWhereInput[]
    OR?: EventosWhereInput[]
    NOT?: EventosWhereInput | EventosWhereInput[]
    titulo?: StringNullableFilter<"Eventos"> | string | null
    descripcion?: StringNullableFilter<"Eventos"> | string | null
    foto_evento?: StringNullableFilter<"Eventos"> | string | null
    hora_inicio?: StringNullableFilter<"Eventos"> | string | null
    hora_fin?: StringNullableFilter<"Eventos"> | string | null
    fecha?: DateTimeNullableFilter<"Eventos"> | Date | string | null
    costo?: StringNullableFilter<"Eventos"> | string | null
    modalidad?: StringNullableFilter<"Eventos"> | string | null
    ubicacion?: StringNullableFilter<"Eventos"> | string | null
    link_reunion?: StringNullableFilter<"Eventos"> | string | null
    reunion_iniciada?: BoolNullableFilter<"Eventos"> | boolean | null
    agenda?: AgendaListRelationFilter
    expositores?: Eventos_ExpositoresListRelationFilter
    patrocinadores?: Eventos_PatrocinadoresListRelationFilter
  }, "id_evento">

  export type EventosOrderByWithAggregationInput = {
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
    _count?: EventosCountOrderByAggregateInput
    _avg?: EventosAvgOrderByAggregateInput
    _max?: EventosMaxOrderByAggregateInput
    _min?: EventosMinOrderByAggregateInput
    _sum?: EventosSumOrderByAggregateInput
  }

  export type EventosScalarWhereWithAggregatesInput = {
    AND?: EventosScalarWhereWithAggregatesInput | EventosScalarWhereWithAggregatesInput[]
    OR?: EventosScalarWhereWithAggregatesInput[]
    NOT?: EventosScalarWhereWithAggregatesInput | EventosScalarWhereWithAggregatesInput[]
    id_evento?: IntWithAggregatesFilter<"Eventos"> | number
    titulo?: StringNullableWithAggregatesFilter<"Eventos"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"Eventos"> | string | null
    foto_evento?: StringNullableWithAggregatesFilter<"Eventos"> | string | null
    hora_inicio?: StringNullableWithAggregatesFilter<"Eventos"> | string | null
    hora_fin?: StringNullableWithAggregatesFilter<"Eventos"> | string | null
    fecha?: DateTimeNullableWithAggregatesFilter<"Eventos"> | Date | string | null
    costo?: StringNullableWithAggregatesFilter<"Eventos"> | string | null
    modalidad?: StringNullableWithAggregatesFilter<"Eventos"> | string | null
    ubicacion?: StringNullableWithAggregatesFilter<"Eventos"> | string | null
    link_reunion?: StringNullableWithAggregatesFilter<"Eventos"> | string | null
    reunion_iniciada?: BoolNullableWithAggregatesFilter<"Eventos"> | boolean | null
  }

  export type ExpositoresWhereInput = {
    AND?: ExpositoresWhereInput | ExpositoresWhereInput[]
    OR?: ExpositoresWhereInput[]
    NOT?: ExpositoresWhereInput | ExpositoresWhereInput[]
    id_expositor?: IntFilter<"Expositores"> | number
    nombre?: StringNullableFilter<"Expositores"> | string | null
    especialidad?: StringNullableFilter<"Expositores"> | string | null
    institucion?: StringNullableFilter<"Expositores"> | string | null
    contacto?: StringNullableFilter<"Expositores"> | string | null
    eventos?: Eventos_ExpositoresListRelationFilter
  }

  export type ExpositoresOrderByWithRelationInput = {
    id_expositor?: SortOrder
    nombre?: SortOrderInput | SortOrder
    especialidad?: SortOrderInput | SortOrder
    institucion?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    eventos?: Eventos_ExpositoresOrderByRelationAggregateInput
  }

  export type ExpositoresWhereUniqueInput = Prisma.AtLeast<{
    id_expositor?: number
    AND?: ExpositoresWhereInput | ExpositoresWhereInput[]
    OR?: ExpositoresWhereInput[]
    NOT?: ExpositoresWhereInput | ExpositoresWhereInput[]
    nombre?: StringNullableFilter<"Expositores"> | string | null
    especialidad?: StringNullableFilter<"Expositores"> | string | null
    institucion?: StringNullableFilter<"Expositores"> | string | null
    contacto?: StringNullableFilter<"Expositores"> | string | null
    eventos?: Eventos_ExpositoresListRelationFilter
  }, "id_expositor">

  export type ExpositoresOrderByWithAggregationInput = {
    id_expositor?: SortOrder
    nombre?: SortOrderInput | SortOrder
    especialidad?: SortOrderInput | SortOrder
    institucion?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    _count?: ExpositoresCountOrderByAggregateInput
    _avg?: ExpositoresAvgOrderByAggregateInput
    _max?: ExpositoresMaxOrderByAggregateInput
    _min?: ExpositoresMinOrderByAggregateInput
    _sum?: ExpositoresSumOrderByAggregateInput
  }

  export type ExpositoresScalarWhereWithAggregatesInput = {
    AND?: ExpositoresScalarWhereWithAggregatesInput | ExpositoresScalarWhereWithAggregatesInput[]
    OR?: ExpositoresScalarWhereWithAggregatesInput[]
    NOT?: ExpositoresScalarWhereWithAggregatesInput | ExpositoresScalarWhereWithAggregatesInput[]
    id_expositor?: IntWithAggregatesFilter<"Expositores"> | number
    nombre?: StringNullableWithAggregatesFilter<"Expositores"> | string | null
    especialidad?: StringNullableWithAggregatesFilter<"Expositores"> | string | null
    institucion?: StringNullableWithAggregatesFilter<"Expositores"> | string | null
    contacto?: StringNullableWithAggregatesFilter<"Expositores"> | string | null
  }

  export type Eventos_ExpositoresWhereInput = {
    AND?: Eventos_ExpositoresWhereInput | Eventos_ExpositoresWhereInput[]
    OR?: Eventos_ExpositoresWhereInput[]
    NOT?: Eventos_ExpositoresWhereInput | Eventos_ExpositoresWhereInput[]
    id_evento?: IntFilter<"Eventos_Expositores"> | number
    id_expositor?: IntFilter<"Eventos_Expositores"> | number
    evento?: XOR<EventosScalarRelationFilter, EventosWhereInput>
    expositor?: XOR<ExpositoresScalarRelationFilter, ExpositoresWhereInput>
  }

  export type Eventos_ExpositoresOrderByWithRelationInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
    evento?: EventosOrderByWithRelationInput
    expositor?: ExpositoresOrderByWithRelationInput
  }

  export type Eventos_ExpositoresWhereUniqueInput = Prisma.AtLeast<{
    id_evento_id_expositor?: Eventos_ExpositoresId_eventoId_expositorCompoundUniqueInput
    AND?: Eventos_ExpositoresWhereInput | Eventos_ExpositoresWhereInput[]
    OR?: Eventos_ExpositoresWhereInput[]
    NOT?: Eventos_ExpositoresWhereInput | Eventos_ExpositoresWhereInput[]
    id_evento?: IntFilter<"Eventos_Expositores"> | number
    id_expositor?: IntFilter<"Eventos_Expositores"> | number
    evento?: XOR<EventosScalarRelationFilter, EventosWhereInput>
    expositor?: XOR<ExpositoresScalarRelationFilter, ExpositoresWhereInput>
  }, "id_evento_id_expositor">

  export type Eventos_ExpositoresOrderByWithAggregationInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
    _count?: Eventos_ExpositoresCountOrderByAggregateInput
    _avg?: Eventos_ExpositoresAvgOrderByAggregateInput
    _max?: Eventos_ExpositoresMaxOrderByAggregateInput
    _min?: Eventos_ExpositoresMinOrderByAggregateInput
    _sum?: Eventos_ExpositoresSumOrderByAggregateInput
  }

  export type Eventos_ExpositoresScalarWhereWithAggregatesInput = {
    AND?: Eventos_ExpositoresScalarWhereWithAggregatesInput | Eventos_ExpositoresScalarWhereWithAggregatesInput[]
    OR?: Eventos_ExpositoresScalarWhereWithAggregatesInput[]
    NOT?: Eventos_ExpositoresScalarWhereWithAggregatesInput | Eventos_ExpositoresScalarWhereWithAggregatesInput[]
    id_evento?: IntWithAggregatesFilter<"Eventos_Expositores"> | number
    id_expositor?: IntWithAggregatesFilter<"Eventos_Expositores"> | number
  }

  export type PatrocinadoresWhereInput = {
    AND?: PatrocinadoresWhereInput | PatrocinadoresWhereInput[]
    OR?: PatrocinadoresWhereInput[]
    NOT?: PatrocinadoresWhereInput | PatrocinadoresWhereInput[]
    id_patrocinador?: IntFilter<"Patrocinadores"> | number
    razon_social?: StringNullableFilter<"Patrocinadores"> | string | null
    institucion?: StringNullableFilter<"Patrocinadores"> | string | null
    eventos?: Eventos_PatrocinadoresListRelationFilter
  }

  export type PatrocinadoresOrderByWithRelationInput = {
    id_patrocinador?: SortOrder
    razon_social?: SortOrderInput | SortOrder
    institucion?: SortOrderInput | SortOrder
    eventos?: Eventos_PatrocinadoresOrderByRelationAggregateInput
  }

  export type PatrocinadoresWhereUniqueInput = Prisma.AtLeast<{
    id_patrocinador?: number
    AND?: PatrocinadoresWhereInput | PatrocinadoresWhereInput[]
    OR?: PatrocinadoresWhereInput[]
    NOT?: PatrocinadoresWhereInput | PatrocinadoresWhereInput[]
    razon_social?: StringNullableFilter<"Patrocinadores"> | string | null
    institucion?: StringNullableFilter<"Patrocinadores"> | string | null
    eventos?: Eventos_PatrocinadoresListRelationFilter
  }, "id_patrocinador">

  export type PatrocinadoresOrderByWithAggregationInput = {
    id_patrocinador?: SortOrder
    razon_social?: SortOrderInput | SortOrder
    institucion?: SortOrderInput | SortOrder
    _count?: PatrocinadoresCountOrderByAggregateInput
    _avg?: PatrocinadoresAvgOrderByAggregateInput
    _max?: PatrocinadoresMaxOrderByAggregateInput
    _min?: PatrocinadoresMinOrderByAggregateInput
    _sum?: PatrocinadoresSumOrderByAggregateInput
  }

  export type PatrocinadoresScalarWhereWithAggregatesInput = {
    AND?: PatrocinadoresScalarWhereWithAggregatesInput | PatrocinadoresScalarWhereWithAggregatesInput[]
    OR?: PatrocinadoresScalarWhereWithAggregatesInput[]
    NOT?: PatrocinadoresScalarWhereWithAggregatesInput | PatrocinadoresScalarWhereWithAggregatesInput[]
    id_patrocinador?: IntWithAggregatesFilter<"Patrocinadores"> | number
    razon_social?: StringNullableWithAggregatesFilter<"Patrocinadores"> | string | null
    institucion?: StringNullableWithAggregatesFilter<"Patrocinadores"> | string | null
  }

  export type Eventos_PatrocinadoresWhereInput = {
    AND?: Eventos_PatrocinadoresWhereInput | Eventos_PatrocinadoresWhereInput[]
    OR?: Eventos_PatrocinadoresWhereInput[]
    NOT?: Eventos_PatrocinadoresWhereInput | Eventos_PatrocinadoresWhereInput[]
    id_evento?: IntFilter<"Eventos_Patrocinadores"> | number
    id_patrocinador?: IntFilter<"Eventos_Patrocinadores"> | number
    evento?: XOR<EventosScalarRelationFilter, EventosWhereInput>
    patrocinador?: XOR<PatrocinadoresScalarRelationFilter, PatrocinadoresWhereInput>
  }

  export type Eventos_PatrocinadoresOrderByWithRelationInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
    evento?: EventosOrderByWithRelationInput
    patrocinador?: PatrocinadoresOrderByWithRelationInput
  }

  export type Eventos_PatrocinadoresWhereUniqueInput = Prisma.AtLeast<{
    id_evento_id_patrocinador?: Eventos_PatrocinadoresId_eventoId_patrocinadorCompoundUniqueInput
    AND?: Eventos_PatrocinadoresWhereInput | Eventos_PatrocinadoresWhereInput[]
    OR?: Eventos_PatrocinadoresWhereInput[]
    NOT?: Eventos_PatrocinadoresWhereInput | Eventos_PatrocinadoresWhereInput[]
    id_evento?: IntFilter<"Eventos_Patrocinadores"> | number
    id_patrocinador?: IntFilter<"Eventos_Patrocinadores"> | number
    evento?: XOR<EventosScalarRelationFilter, EventosWhereInput>
    patrocinador?: XOR<PatrocinadoresScalarRelationFilter, PatrocinadoresWhereInput>
  }, "id_evento_id_patrocinador">

  export type Eventos_PatrocinadoresOrderByWithAggregationInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
    _count?: Eventos_PatrocinadoresCountOrderByAggregateInput
    _avg?: Eventos_PatrocinadoresAvgOrderByAggregateInput
    _max?: Eventos_PatrocinadoresMaxOrderByAggregateInput
    _min?: Eventos_PatrocinadoresMinOrderByAggregateInput
    _sum?: Eventos_PatrocinadoresSumOrderByAggregateInput
  }

  export type Eventos_PatrocinadoresScalarWhereWithAggregatesInput = {
    AND?: Eventos_PatrocinadoresScalarWhereWithAggregatesInput | Eventos_PatrocinadoresScalarWhereWithAggregatesInput[]
    OR?: Eventos_PatrocinadoresScalarWhereWithAggregatesInput[]
    NOT?: Eventos_PatrocinadoresScalarWhereWithAggregatesInput | Eventos_PatrocinadoresScalarWhereWithAggregatesInput[]
    id_evento?: IntWithAggregatesFilter<"Eventos_Patrocinadores"> | number
    id_patrocinador?: IntWithAggregatesFilter<"Eventos_Patrocinadores"> | number
  }

  export type AgendaWhereInput = {
    AND?: AgendaWhereInput | AgendaWhereInput[]
    OR?: AgendaWhereInput[]
    NOT?: AgendaWhereInput | AgendaWhereInput[]
    id_agenda?: IntFilter<"Agenda"> | number
    id_usuario?: IntFilter<"Agenda"> | number
    id_evento?: IntFilter<"Agenda"> | number
    actividad?: StringNullableFilter<"Agenda"> | string | null
    fecha?: DateTimeNullableFilter<"Agenda"> | Date | string | null
    comentario?: StringNullableFilter<"Agenda"> | string | null
    calificacion?: IntNullableFilter<"Agenda"> | number | null
    asistio?: BoolNullableFilter<"Agenda"> | boolean | null
    hora_ingreso?: DateTimeNullableFilter<"Agenda"> | Date | string | null
    usuario?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    evento?: XOR<EventosScalarRelationFilter, EventosWhereInput>
  }

  export type AgendaOrderByWithRelationInput = {
    id_agenda?: SortOrder
    id_usuario?: SortOrder
    id_evento?: SortOrder
    actividad?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    calificacion?: SortOrderInput | SortOrder
    asistio?: SortOrderInput | SortOrder
    hora_ingreso?: SortOrderInput | SortOrder
    usuario?: UsuariosOrderByWithRelationInput
    evento?: EventosOrderByWithRelationInput
  }

  export type AgendaWhereUniqueInput = Prisma.AtLeast<{
    id_agenda?: number
    AND?: AgendaWhereInput | AgendaWhereInput[]
    OR?: AgendaWhereInput[]
    NOT?: AgendaWhereInput | AgendaWhereInput[]
    id_usuario?: IntFilter<"Agenda"> | number
    id_evento?: IntFilter<"Agenda"> | number
    actividad?: StringNullableFilter<"Agenda"> | string | null
    fecha?: DateTimeNullableFilter<"Agenda"> | Date | string | null
    comentario?: StringNullableFilter<"Agenda"> | string | null
    calificacion?: IntNullableFilter<"Agenda"> | number | null
    asistio?: BoolNullableFilter<"Agenda"> | boolean | null
    hora_ingreso?: DateTimeNullableFilter<"Agenda"> | Date | string | null
    usuario?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    evento?: XOR<EventosScalarRelationFilter, EventosWhereInput>
  }, "id_agenda">

  export type AgendaOrderByWithAggregationInput = {
    id_agenda?: SortOrder
    id_usuario?: SortOrder
    id_evento?: SortOrder
    actividad?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    calificacion?: SortOrderInput | SortOrder
    asistio?: SortOrderInput | SortOrder
    hora_ingreso?: SortOrderInput | SortOrder
    _count?: AgendaCountOrderByAggregateInput
    _avg?: AgendaAvgOrderByAggregateInput
    _max?: AgendaMaxOrderByAggregateInput
    _min?: AgendaMinOrderByAggregateInput
    _sum?: AgendaSumOrderByAggregateInput
  }

  export type AgendaScalarWhereWithAggregatesInput = {
    AND?: AgendaScalarWhereWithAggregatesInput | AgendaScalarWhereWithAggregatesInput[]
    OR?: AgendaScalarWhereWithAggregatesInput[]
    NOT?: AgendaScalarWhereWithAggregatesInput | AgendaScalarWhereWithAggregatesInput[]
    id_agenda?: IntWithAggregatesFilter<"Agenda"> | number
    id_usuario?: IntWithAggregatesFilter<"Agenda"> | number
    id_evento?: IntWithAggregatesFilter<"Agenda"> | number
    actividad?: StringNullableWithAggregatesFilter<"Agenda"> | string | null
    fecha?: DateTimeNullableWithAggregatesFilter<"Agenda"> | Date | string | null
    comentario?: StringNullableWithAggregatesFilter<"Agenda"> | string | null
    calificacion?: IntNullableWithAggregatesFilter<"Agenda"> | number | null
    asistio?: BoolNullableWithAggregatesFilter<"Agenda"> | boolean | null
    hora_ingreso?: DateTimeNullableWithAggregatesFilter<"Agenda"> | Date | string | null
  }

  export type UsuariosCreateInput = {
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
    agenda?: AgendaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosUncheckedCreateInput = {
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
    agenda?: AgendaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosUpdateInput = {
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
    agenda?: AgendaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
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
    agenda?: AgendaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuariosCreateManyInput = {
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

  export type UsuariosUpdateManyMutationInput = {
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

  export type UsuariosUncheckedUpdateManyInput = {
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

  export type EventosCreateInput = {
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
    agenda?: AgendaCreateNestedManyWithoutEventoInput
    expositores?: Eventos_ExpositoresCreateNestedManyWithoutEventoInput
    patrocinadores?: Eventos_PatrocinadoresCreateNestedManyWithoutEventoInput
  }

  export type EventosUncheckedCreateInput = {
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
    agenda?: AgendaUncheckedCreateNestedManyWithoutEventoInput
    expositores?: Eventos_ExpositoresUncheckedCreateNestedManyWithoutEventoInput
    patrocinadores?: Eventos_PatrocinadoresUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventosUpdateInput = {
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
    agenda?: AgendaUpdateManyWithoutEventoNestedInput
    expositores?: Eventos_ExpositoresUpdateManyWithoutEventoNestedInput
    patrocinadores?: Eventos_PatrocinadoresUpdateManyWithoutEventoNestedInput
  }

  export type EventosUncheckedUpdateInput = {
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
    agenda?: AgendaUncheckedUpdateManyWithoutEventoNestedInput
    expositores?: Eventos_ExpositoresUncheckedUpdateManyWithoutEventoNestedInput
    patrocinadores?: Eventos_PatrocinadoresUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventosCreateManyInput = {
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

  export type EventosUpdateManyMutationInput = {
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

  export type EventosUncheckedUpdateManyInput = {
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

  export type ExpositoresCreateInput = {
    nombre?: string | null
    especialidad?: string | null
    institucion?: string | null
    contacto?: string | null
    eventos?: Eventos_ExpositoresCreateNestedManyWithoutExpositorInput
  }

  export type ExpositoresUncheckedCreateInput = {
    id_expositor?: number
    nombre?: string | null
    especialidad?: string | null
    institucion?: string | null
    contacto?: string | null
    eventos?: Eventos_ExpositoresUncheckedCreateNestedManyWithoutExpositorInput
  }

  export type ExpositoresUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: Eventos_ExpositoresUpdateManyWithoutExpositorNestedInput
  }

  export type ExpositoresUncheckedUpdateInput = {
    id_expositor?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: Eventos_ExpositoresUncheckedUpdateManyWithoutExpositorNestedInput
  }

  export type ExpositoresCreateManyInput = {
    id_expositor?: number
    nombre?: string | null
    especialidad?: string | null
    institucion?: string | null
    contacto?: string | null
  }

  export type ExpositoresUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpositoresUncheckedUpdateManyInput = {
    id_expositor?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Eventos_ExpositoresCreateInput = {
    evento: EventosCreateNestedOneWithoutExpositoresInput
    expositor: ExpositoresCreateNestedOneWithoutEventosInput
  }

  export type Eventos_ExpositoresUncheckedCreateInput = {
    id_evento: number
    id_expositor: number
  }

  export type Eventos_ExpositoresUpdateInput = {
    evento?: EventosUpdateOneRequiredWithoutExpositoresNestedInput
    expositor?: ExpositoresUpdateOneRequiredWithoutEventosNestedInput
  }

  export type Eventos_ExpositoresUncheckedUpdateInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_expositor?: IntFieldUpdateOperationsInput | number
  }

  export type Eventos_ExpositoresCreateManyInput = {
    id_evento: number
    id_expositor: number
  }

  export type Eventos_ExpositoresUpdateManyMutationInput = {

  }

  export type Eventos_ExpositoresUncheckedUpdateManyInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_expositor?: IntFieldUpdateOperationsInput | number
  }

  export type PatrocinadoresCreateInput = {
    razon_social?: string | null
    institucion?: string | null
    eventos?: Eventos_PatrocinadoresCreateNestedManyWithoutPatrocinadorInput
  }

  export type PatrocinadoresUncheckedCreateInput = {
    id_patrocinador?: number
    razon_social?: string | null
    institucion?: string | null
    eventos?: Eventos_PatrocinadoresUncheckedCreateNestedManyWithoutPatrocinadorInput
  }

  export type PatrocinadoresUpdateInput = {
    razon_social?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: Eventos_PatrocinadoresUpdateManyWithoutPatrocinadorNestedInput
  }

  export type PatrocinadoresUncheckedUpdateInput = {
    id_patrocinador?: IntFieldUpdateOperationsInput | number
    razon_social?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: Eventos_PatrocinadoresUncheckedUpdateManyWithoutPatrocinadorNestedInput
  }

  export type PatrocinadoresCreateManyInput = {
    id_patrocinador?: number
    razon_social?: string | null
    institucion?: string | null
  }

  export type PatrocinadoresUpdateManyMutationInput = {
    razon_social?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatrocinadoresUncheckedUpdateManyInput = {
    id_patrocinador?: IntFieldUpdateOperationsInput | number
    razon_social?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Eventos_PatrocinadoresCreateInput = {
    evento: EventosCreateNestedOneWithoutPatrocinadoresInput
    patrocinador: PatrocinadoresCreateNestedOneWithoutEventosInput
  }

  export type Eventos_PatrocinadoresUncheckedCreateInput = {
    id_evento: number
    id_patrocinador: number
  }

  export type Eventos_PatrocinadoresUpdateInput = {
    evento?: EventosUpdateOneRequiredWithoutPatrocinadoresNestedInput
    patrocinador?: PatrocinadoresUpdateOneRequiredWithoutEventosNestedInput
  }

  export type Eventos_PatrocinadoresUncheckedUpdateInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_patrocinador?: IntFieldUpdateOperationsInput | number
  }

  export type Eventos_PatrocinadoresCreateManyInput = {
    id_evento: number
    id_patrocinador: number
  }

  export type Eventos_PatrocinadoresUpdateManyMutationInput = {

  }

  export type Eventos_PatrocinadoresUncheckedUpdateManyInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_patrocinador?: IntFieldUpdateOperationsInput | number
  }

  export type AgendaCreateInput = {
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
    usuario: UsuariosCreateNestedOneWithoutAgendaInput
    evento: EventosCreateNestedOneWithoutAgendaInput
  }

  export type AgendaUncheckedCreateInput = {
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

  export type AgendaUpdateInput = {
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuariosUpdateOneRequiredWithoutAgendaNestedInput
    evento?: EventosUpdateOneRequiredWithoutAgendaNestedInput
  }

  export type AgendaUncheckedUpdateInput = {
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

  export type AgendaCreateManyInput = {
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

  export type AgendaUpdateManyMutationInput = {
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AgendaUncheckedUpdateManyInput = {
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
    every?: AgendaWhereInput
    some?: AgendaWhereInput
    none?: AgendaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AgendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuariosCountOrderByAggregateInput = {
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

  export type UsuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    telefono?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
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

  export type UsuariosMinOrderByAggregateInput = {
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

  export type UsuariosSumOrderByAggregateInput = {
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

  export type Eventos_ExpositoresListRelationFilter = {
    every?: Eventos_ExpositoresWhereInput
    some?: Eventos_ExpositoresWhereInput
    none?: Eventos_ExpositoresWhereInput
  }

  export type Eventos_PatrocinadoresListRelationFilter = {
    every?: Eventos_PatrocinadoresWhereInput
    some?: Eventos_PatrocinadoresWhereInput
    none?: Eventos_PatrocinadoresWhereInput
  }

  export type Eventos_ExpositoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Eventos_PatrocinadoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventosCountOrderByAggregateInput = {
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

  export type EventosAvgOrderByAggregateInput = {
    id_evento?: SortOrder
  }

  export type EventosMaxOrderByAggregateInput = {
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

  export type EventosMinOrderByAggregateInput = {
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

  export type EventosSumOrderByAggregateInput = {
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

  export type ExpositoresCountOrderByAggregateInput = {
    id_expositor?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    institucion?: SortOrder
    contacto?: SortOrder
  }

  export type ExpositoresAvgOrderByAggregateInput = {
    id_expositor?: SortOrder
  }

  export type ExpositoresMaxOrderByAggregateInput = {
    id_expositor?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    institucion?: SortOrder
    contacto?: SortOrder
  }

  export type ExpositoresMinOrderByAggregateInput = {
    id_expositor?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    institucion?: SortOrder
    contacto?: SortOrder
  }

  export type ExpositoresSumOrderByAggregateInput = {
    id_expositor?: SortOrder
  }

  export type EventosScalarRelationFilter = {
    is?: EventosWhereInput
    isNot?: EventosWhereInput
  }

  export type ExpositoresScalarRelationFilter = {
    is?: ExpositoresWhereInput
    isNot?: ExpositoresWhereInput
  }

  export type Eventos_ExpositoresId_eventoId_expositorCompoundUniqueInput = {
    id_evento: number
    id_expositor: number
  }

  export type Eventos_ExpositoresCountOrderByAggregateInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
  }

  export type Eventos_ExpositoresAvgOrderByAggregateInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
  }

  export type Eventos_ExpositoresMaxOrderByAggregateInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
  }

  export type Eventos_ExpositoresMinOrderByAggregateInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
  }

  export type Eventos_ExpositoresSumOrderByAggregateInput = {
    id_evento?: SortOrder
    id_expositor?: SortOrder
  }

  export type PatrocinadoresCountOrderByAggregateInput = {
    id_patrocinador?: SortOrder
    razon_social?: SortOrder
    institucion?: SortOrder
  }

  export type PatrocinadoresAvgOrderByAggregateInput = {
    id_patrocinador?: SortOrder
  }

  export type PatrocinadoresMaxOrderByAggregateInput = {
    id_patrocinador?: SortOrder
    razon_social?: SortOrder
    institucion?: SortOrder
  }

  export type PatrocinadoresMinOrderByAggregateInput = {
    id_patrocinador?: SortOrder
    razon_social?: SortOrder
    institucion?: SortOrder
  }

  export type PatrocinadoresSumOrderByAggregateInput = {
    id_patrocinador?: SortOrder
  }

  export type PatrocinadoresScalarRelationFilter = {
    is?: PatrocinadoresWhereInput
    isNot?: PatrocinadoresWhereInput
  }

  export type Eventos_PatrocinadoresId_eventoId_patrocinadorCompoundUniqueInput = {
    id_evento: number
    id_patrocinador: number
  }

  export type Eventos_PatrocinadoresCountOrderByAggregateInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
  }

  export type Eventos_PatrocinadoresAvgOrderByAggregateInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
  }

  export type Eventos_PatrocinadoresMaxOrderByAggregateInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
  }

  export type Eventos_PatrocinadoresMinOrderByAggregateInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
  }

  export type Eventos_PatrocinadoresSumOrderByAggregateInput = {
    id_evento?: SortOrder
    id_patrocinador?: SortOrder
  }

  export type UsuariosScalarRelationFilter = {
    is?: UsuariosWhereInput
    isNot?: UsuariosWhereInput
  }

  export type AgendaCountOrderByAggregateInput = {
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

  export type AgendaAvgOrderByAggregateInput = {
    id_agenda?: SortOrder
    id_usuario?: SortOrder
    id_evento?: SortOrder
    calificacion?: SortOrder
  }

  export type AgendaMaxOrderByAggregateInput = {
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

  export type AgendaMinOrderByAggregateInput = {
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

  export type AgendaSumOrderByAggregateInput = {
    id_agenda?: SortOrder
    id_usuario?: SortOrder
    id_evento?: SortOrder
    calificacion?: SortOrder
  }

  export type AgendaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AgendaCreateWithoutUsuarioInput, AgendaUncheckedCreateWithoutUsuarioInput> | AgendaCreateWithoutUsuarioInput[] | AgendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutUsuarioInput | AgendaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AgendaCreateManyUsuarioInputEnvelope
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
  }

  export type AgendaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AgendaCreateWithoutUsuarioInput, AgendaUncheckedCreateWithoutUsuarioInput> | AgendaCreateWithoutUsuarioInput[] | AgendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutUsuarioInput | AgendaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AgendaCreateManyUsuarioInputEnvelope
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
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

  export type AgendaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AgendaCreateWithoutUsuarioInput, AgendaUncheckedCreateWithoutUsuarioInput> | AgendaCreateWithoutUsuarioInput[] | AgendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutUsuarioInput | AgendaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AgendaUpsertWithWhereUniqueWithoutUsuarioInput | AgendaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AgendaCreateManyUsuarioInputEnvelope
    set?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    disconnect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    delete?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    update?: AgendaUpdateWithWhereUniqueWithoutUsuarioInput | AgendaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AgendaUpdateManyWithWhereWithoutUsuarioInput | AgendaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgendaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AgendaCreateWithoutUsuarioInput, AgendaUncheckedCreateWithoutUsuarioInput> | AgendaCreateWithoutUsuarioInput[] | AgendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutUsuarioInput | AgendaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AgendaUpsertWithWhereUniqueWithoutUsuarioInput | AgendaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AgendaCreateManyUsuarioInputEnvelope
    set?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    disconnect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    delete?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    update?: AgendaUpdateWithWhereUniqueWithoutUsuarioInput | AgendaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AgendaUpdateManyWithWhereWithoutUsuarioInput | AgendaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
  }

  export type AgendaCreateNestedManyWithoutEventoInput = {
    create?: XOR<AgendaCreateWithoutEventoInput, AgendaUncheckedCreateWithoutEventoInput> | AgendaCreateWithoutEventoInput[] | AgendaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutEventoInput | AgendaCreateOrConnectWithoutEventoInput[]
    createMany?: AgendaCreateManyEventoInputEnvelope
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
  }

  export type Eventos_ExpositoresCreateNestedManyWithoutEventoInput = {
    create?: XOR<Eventos_ExpositoresCreateWithoutEventoInput, Eventos_ExpositoresUncheckedCreateWithoutEventoInput> | Eventos_ExpositoresCreateWithoutEventoInput[] | Eventos_ExpositoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: Eventos_ExpositoresCreateOrConnectWithoutEventoInput | Eventos_ExpositoresCreateOrConnectWithoutEventoInput[]
    createMany?: Eventos_ExpositoresCreateManyEventoInputEnvelope
    connect?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
  }

  export type Eventos_PatrocinadoresCreateNestedManyWithoutEventoInput = {
    create?: XOR<Eventos_PatrocinadoresCreateWithoutEventoInput, Eventos_PatrocinadoresUncheckedCreateWithoutEventoInput> | Eventos_PatrocinadoresCreateWithoutEventoInput[] | Eventos_PatrocinadoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: Eventos_PatrocinadoresCreateOrConnectWithoutEventoInput | Eventos_PatrocinadoresCreateOrConnectWithoutEventoInput[]
    createMany?: Eventos_PatrocinadoresCreateManyEventoInputEnvelope
    connect?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
  }

  export type AgendaUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<AgendaCreateWithoutEventoInput, AgendaUncheckedCreateWithoutEventoInput> | AgendaCreateWithoutEventoInput[] | AgendaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutEventoInput | AgendaCreateOrConnectWithoutEventoInput[]
    createMany?: AgendaCreateManyEventoInputEnvelope
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
  }

  export type Eventos_ExpositoresUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<Eventos_ExpositoresCreateWithoutEventoInput, Eventos_ExpositoresUncheckedCreateWithoutEventoInput> | Eventos_ExpositoresCreateWithoutEventoInput[] | Eventos_ExpositoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: Eventos_ExpositoresCreateOrConnectWithoutEventoInput | Eventos_ExpositoresCreateOrConnectWithoutEventoInput[]
    createMany?: Eventos_ExpositoresCreateManyEventoInputEnvelope
    connect?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
  }

  export type Eventos_PatrocinadoresUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<Eventos_PatrocinadoresCreateWithoutEventoInput, Eventos_PatrocinadoresUncheckedCreateWithoutEventoInput> | Eventos_PatrocinadoresCreateWithoutEventoInput[] | Eventos_PatrocinadoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: Eventos_PatrocinadoresCreateOrConnectWithoutEventoInput | Eventos_PatrocinadoresCreateOrConnectWithoutEventoInput[]
    createMany?: Eventos_PatrocinadoresCreateManyEventoInputEnvelope
    connect?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AgendaUpdateManyWithoutEventoNestedInput = {
    create?: XOR<AgendaCreateWithoutEventoInput, AgendaUncheckedCreateWithoutEventoInput> | AgendaCreateWithoutEventoInput[] | AgendaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutEventoInput | AgendaCreateOrConnectWithoutEventoInput[]
    upsert?: AgendaUpsertWithWhereUniqueWithoutEventoInput | AgendaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: AgendaCreateManyEventoInputEnvelope
    set?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    disconnect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    delete?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    update?: AgendaUpdateWithWhereUniqueWithoutEventoInput | AgendaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: AgendaUpdateManyWithWhereWithoutEventoInput | AgendaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
  }

  export type Eventos_ExpositoresUpdateManyWithoutEventoNestedInput = {
    create?: XOR<Eventos_ExpositoresCreateWithoutEventoInput, Eventos_ExpositoresUncheckedCreateWithoutEventoInput> | Eventos_ExpositoresCreateWithoutEventoInput[] | Eventos_ExpositoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: Eventos_ExpositoresCreateOrConnectWithoutEventoInput | Eventos_ExpositoresCreateOrConnectWithoutEventoInput[]
    upsert?: Eventos_ExpositoresUpsertWithWhereUniqueWithoutEventoInput | Eventos_ExpositoresUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: Eventos_ExpositoresCreateManyEventoInputEnvelope
    set?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    disconnect?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    delete?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    connect?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    update?: Eventos_ExpositoresUpdateWithWhereUniqueWithoutEventoInput | Eventos_ExpositoresUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: Eventos_ExpositoresUpdateManyWithWhereWithoutEventoInput | Eventos_ExpositoresUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: Eventos_ExpositoresScalarWhereInput | Eventos_ExpositoresScalarWhereInput[]
  }

  export type Eventos_PatrocinadoresUpdateManyWithoutEventoNestedInput = {
    create?: XOR<Eventos_PatrocinadoresCreateWithoutEventoInput, Eventos_PatrocinadoresUncheckedCreateWithoutEventoInput> | Eventos_PatrocinadoresCreateWithoutEventoInput[] | Eventos_PatrocinadoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: Eventos_PatrocinadoresCreateOrConnectWithoutEventoInput | Eventos_PatrocinadoresCreateOrConnectWithoutEventoInput[]
    upsert?: Eventos_PatrocinadoresUpsertWithWhereUniqueWithoutEventoInput | Eventos_PatrocinadoresUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: Eventos_PatrocinadoresCreateManyEventoInputEnvelope
    set?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    disconnect?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    delete?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    connect?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    update?: Eventos_PatrocinadoresUpdateWithWhereUniqueWithoutEventoInput | Eventos_PatrocinadoresUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: Eventos_PatrocinadoresUpdateManyWithWhereWithoutEventoInput | Eventos_PatrocinadoresUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: Eventos_PatrocinadoresScalarWhereInput | Eventos_PatrocinadoresScalarWhereInput[]
  }

  export type AgendaUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<AgendaCreateWithoutEventoInput, AgendaUncheckedCreateWithoutEventoInput> | AgendaCreateWithoutEventoInput[] | AgendaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutEventoInput | AgendaCreateOrConnectWithoutEventoInput[]
    upsert?: AgendaUpsertWithWhereUniqueWithoutEventoInput | AgendaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: AgendaCreateManyEventoInputEnvelope
    set?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    disconnect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    delete?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    update?: AgendaUpdateWithWhereUniqueWithoutEventoInput | AgendaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: AgendaUpdateManyWithWhereWithoutEventoInput | AgendaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
  }

  export type Eventos_ExpositoresUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<Eventos_ExpositoresCreateWithoutEventoInput, Eventos_ExpositoresUncheckedCreateWithoutEventoInput> | Eventos_ExpositoresCreateWithoutEventoInput[] | Eventos_ExpositoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: Eventos_ExpositoresCreateOrConnectWithoutEventoInput | Eventos_ExpositoresCreateOrConnectWithoutEventoInput[]
    upsert?: Eventos_ExpositoresUpsertWithWhereUniqueWithoutEventoInput | Eventos_ExpositoresUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: Eventos_ExpositoresCreateManyEventoInputEnvelope
    set?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    disconnect?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    delete?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    connect?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    update?: Eventos_ExpositoresUpdateWithWhereUniqueWithoutEventoInput | Eventos_ExpositoresUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: Eventos_ExpositoresUpdateManyWithWhereWithoutEventoInput | Eventos_ExpositoresUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: Eventos_ExpositoresScalarWhereInput | Eventos_ExpositoresScalarWhereInput[]
  }

  export type Eventos_PatrocinadoresUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<Eventos_PatrocinadoresCreateWithoutEventoInput, Eventos_PatrocinadoresUncheckedCreateWithoutEventoInput> | Eventos_PatrocinadoresCreateWithoutEventoInput[] | Eventos_PatrocinadoresUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: Eventos_PatrocinadoresCreateOrConnectWithoutEventoInput | Eventos_PatrocinadoresCreateOrConnectWithoutEventoInput[]
    upsert?: Eventos_PatrocinadoresUpsertWithWhereUniqueWithoutEventoInput | Eventos_PatrocinadoresUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: Eventos_PatrocinadoresCreateManyEventoInputEnvelope
    set?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    disconnect?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    delete?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    connect?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    update?: Eventos_PatrocinadoresUpdateWithWhereUniqueWithoutEventoInput | Eventos_PatrocinadoresUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: Eventos_PatrocinadoresUpdateManyWithWhereWithoutEventoInput | Eventos_PatrocinadoresUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: Eventos_PatrocinadoresScalarWhereInput | Eventos_PatrocinadoresScalarWhereInput[]
  }

  export type Eventos_ExpositoresCreateNestedManyWithoutExpositorInput = {
    create?: XOR<Eventos_ExpositoresCreateWithoutExpositorInput, Eventos_ExpositoresUncheckedCreateWithoutExpositorInput> | Eventos_ExpositoresCreateWithoutExpositorInput[] | Eventos_ExpositoresUncheckedCreateWithoutExpositorInput[]
    connectOrCreate?: Eventos_ExpositoresCreateOrConnectWithoutExpositorInput | Eventos_ExpositoresCreateOrConnectWithoutExpositorInput[]
    createMany?: Eventos_ExpositoresCreateManyExpositorInputEnvelope
    connect?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
  }

  export type Eventos_ExpositoresUncheckedCreateNestedManyWithoutExpositorInput = {
    create?: XOR<Eventos_ExpositoresCreateWithoutExpositorInput, Eventos_ExpositoresUncheckedCreateWithoutExpositorInput> | Eventos_ExpositoresCreateWithoutExpositorInput[] | Eventos_ExpositoresUncheckedCreateWithoutExpositorInput[]
    connectOrCreate?: Eventos_ExpositoresCreateOrConnectWithoutExpositorInput | Eventos_ExpositoresCreateOrConnectWithoutExpositorInput[]
    createMany?: Eventos_ExpositoresCreateManyExpositorInputEnvelope
    connect?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
  }

  export type Eventos_ExpositoresUpdateManyWithoutExpositorNestedInput = {
    create?: XOR<Eventos_ExpositoresCreateWithoutExpositorInput, Eventos_ExpositoresUncheckedCreateWithoutExpositorInput> | Eventos_ExpositoresCreateWithoutExpositorInput[] | Eventos_ExpositoresUncheckedCreateWithoutExpositorInput[]
    connectOrCreate?: Eventos_ExpositoresCreateOrConnectWithoutExpositorInput | Eventos_ExpositoresCreateOrConnectWithoutExpositorInput[]
    upsert?: Eventos_ExpositoresUpsertWithWhereUniqueWithoutExpositorInput | Eventos_ExpositoresUpsertWithWhereUniqueWithoutExpositorInput[]
    createMany?: Eventos_ExpositoresCreateManyExpositorInputEnvelope
    set?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    disconnect?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    delete?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    connect?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    update?: Eventos_ExpositoresUpdateWithWhereUniqueWithoutExpositorInput | Eventos_ExpositoresUpdateWithWhereUniqueWithoutExpositorInput[]
    updateMany?: Eventos_ExpositoresUpdateManyWithWhereWithoutExpositorInput | Eventos_ExpositoresUpdateManyWithWhereWithoutExpositorInput[]
    deleteMany?: Eventos_ExpositoresScalarWhereInput | Eventos_ExpositoresScalarWhereInput[]
  }

  export type Eventos_ExpositoresUncheckedUpdateManyWithoutExpositorNestedInput = {
    create?: XOR<Eventos_ExpositoresCreateWithoutExpositorInput, Eventos_ExpositoresUncheckedCreateWithoutExpositorInput> | Eventos_ExpositoresCreateWithoutExpositorInput[] | Eventos_ExpositoresUncheckedCreateWithoutExpositorInput[]
    connectOrCreate?: Eventos_ExpositoresCreateOrConnectWithoutExpositorInput | Eventos_ExpositoresCreateOrConnectWithoutExpositorInput[]
    upsert?: Eventos_ExpositoresUpsertWithWhereUniqueWithoutExpositorInput | Eventos_ExpositoresUpsertWithWhereUniqueWithoutExpositorInput[]
    createMany?: Eventos_ExpositoresCreateManyExpositorInputEnvelope
    set?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    disconnect?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    delete?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    connect?: Eventos_ExpositoresWhereUniqueInput | Eventos_ExpositoresWhereUniqueInput[]
    update?: Eventos_ExpositoresUpdateWithWhereUniqueWithoutExpositorInput | Eventos_ExpositoresUpdateWithWhereUniqueWithoutExpositorInput[]
    updateMany?: Eventos_ExpositoresUpdateManyWithWhereWithoutExpositorInput | Eventos_ExpositoresUpdateManyWithWhereWithoutExpositorInput[]
    deleteMany?: Eventos_ExpositoresScalarWhereInput | Eventos_ExpositoresScalarWhereInput[]
  }

  export type EventosCreateNestedOneWithoutExpositoresInput = {
    create?: XOR<EventosCreateWithoutExpositoresInput, EventosUncheckedCreateWithoutExpositoresInput>
    connectOrCreate?: EventosCreateOrConnectWithoutExpositoresInput
    connect?: EventosWhereUniqueInput
  }

  export type ExpositoresCreateNestedOneWithoutEventosInput = {
    create?: XOR<ExpositoresCreateWithoutEventosInput, ExpositoresUncheckedCreateWithoutEventosInput>
    connectOrCreate?: ExpositoresCreateOrConnectWithoutEventosInput
    connect?: ExpositoresWhereUniqueInput
  }

  export type EventosUpdateOneRequiredWithoutExpositoresNestedInput = {
    create?: XOR<EventosCreateWithoutExpositoresInput, EventosUncheckedCreateWithoutExpositoresInput>
    connectOrCreate?: EventosCreateOrConnectWithoutExpositoresInput
    upsert?: EventosUpsertWithoutExpositoresInput
    connect?: EventosWhereUniqueInput
    update?: XOR<XOR<EventosUpdateToOneWithWhereWithoutExpositoresInput, EventosUpdateWithoutExpositoresInput>, EventosUncheckedUpdateWithoutExpositoresInput>
  }

  export type ExpositoresUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<ExpositoresCreateWithoutEventosInput, ExpositoresUncheckedCreateWithoutEventosInput>
    connectOrCreate?: ExpositoresCreateOrConnectWithoutEventosInput
    upsert?: ExpositoresUpsertWithoutEventosInput
    connect?: ExpositoresWhereUniqueInput
    update?: XOR<XOR<ExpositoresUpdateToOneWithWhereWithoutEventosInput, ExpositoresUpdateWithoutEventosInput>, ExpositoresUncheckedUpdateWithoutEventosInput>
  }

  export type Eventos_PatrocinadoresCreateNestedManyWithoutPatrocinadorInput = {
    create?: XOR<Eventos_PatrocinadoresCreateWithoutPatrocinadorInput, Eventos_PatrocinadoresUncheckedCreateWithoutPatrocinadorInput> | Eventos_PatrocinadoresCreateWithoutPatrocinadorInput[] | Eventos_PatrocinadoresUncheckedCreateWithoutPatrocinadorInput[]
    connectOrCreate?: Eventos_PatrocinadoresCreateOrConnectWithoutPatrocinadorInput | Eventos_PatrocinadoresCreateOrConnectWithoutPatrocinadorInput[]
    createMany?: Eventos_PatrocinadoresCreateManyPatrocinadorInputEnvelope
    connect?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
  }

  export type Eventos_PatrocinadoresUncheckedCreateNestedManyWithoutPatrocinadorInput = {
    create?: XOR<Eventos_PatrocinadoresCreateWithoutPatrocinadorInput, Eventos_PatrocinadoresUncheckedCreateWithoutPatrocinadorInput> | Eventos_PatrocinadoresCreateWithoutPatrocinadorInput[] | Eventos_PatrocinadoresUncheckedCreateWithoutPatrocinadorInput[]
    connectOrCreate?: Eventos_PatrocinadoresCreateOrConnectWithoutPatrocinadorInput | Eventos_PatrocinadoresCreateOrConnectWithoutPatrocinadorInput[]
    createMany?: Eventos_PatrocinadoresCreateManyPatrocinadorInputEnvelope
    connect?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
  }

  export type Eventos_PatrocinadoresUpdateManyWithoutPatrocinadorNestedInput = {
    create?: XOR<Eventos_PatrocinadoresCreateWithoutPatrocinadorInput, Eventos_PatrocinadoresUncheckedCreateWithoutPatrocinadorInput> | Eventos_PatrocinadoresCreateWithoutPatrocinadorInput[] | Eventos_PatrocinadoresUncheckedCreateWithoutPatrocinadorInput[]
    connectOrCreate?: Eventos_PatrocinadoresCreateOrConnectWithoutPatrocinadorInput | Eventos_PatrocinadoresCreateOrConnectWithoutPatrocinadorInput[]
    upsert?: Eventos_PatrocinadoresUpsertWithWhereUniqueWithoutPatrocinadorInput | Eventos_PatrocinadoresUpsertWithWhereUniqueWithoutPatrocinadorInput[]
    createMany?: Eventos_PatrocinadoresCreateManyPatrocinadorInputEnvelope
    set?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    disconnect?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    delete?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    connect?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    update?: Eventos_PatrocinadoresUpdateWithWhereUniqueWithoutPatrocinadorInput | Eventos_PatrocinadoresUpdateWithWhereUniqueWithoutPatrocinadorInput[]
    updateMany?: Eventos_PatrocinadoresUpdateManyWithWhereWithoutPatrocinadorInput | Eventos_PatrocinadoresUpdateManyWithWhereWithoutPatrocinadorInput[]
    deleteMany?: Eventos_PatrocinadoresScalarWhereInput | Eventos_PatrocinadoresScalarWhereInput[]
  }

  export type Eventos_PatrocinadoresUncheckedUpdateManyWithoutPatrocinadorNestedInput = {
    create?: XOR<Eventos_PatrocinadoresCreateWithoutPatrocinadorInput, Eventos_PatrocinadoresUncheckedCreateWithoutPatrocinadorInput> | Eventos_PatrocinadoresCreateWithoutPatrocinadorInput[] | Eventos_PatrocinadoresUncheckedCreateWithoutPatrocinadorInput[]
    connectOrCreate?: Eventos_PatrocinadoresCreateOrConnectWithoutPatrocinadorInput | Eventos_PatrocinadoresCreateOrConnectWithoutPatrocinadorInput[]
    upsert?: Eventos_PatrocinadoresUpsertWithWhereUniqueWithoutPatrocinadorInput | Eventos_PatrocinadoresUpsertWithWhereUniqueWithoutPatrocinadorInput[]
    createMany?: Eventos_PatrocinadoresCreateManyPatrocinadorInputEnvelope
    set?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    disconnect?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    delete?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    connect?: Eventos_PatrocinadoresWhereUniqueInput | Eventos_PatrocinadoresWhereUniqueInput[]
    update?: Eventos_PatrocinadoresUpdateWithWhereUniqueWithoutPatrocinadorInput | Eventos_PatrocinadoresUpdateWithWhereUniqueWithoutPatrocinadorInput[]
    updateMany?: Eventos_PatrocinadoresUpdateManyWithWhereWithoutPatrocinadorInput | Eventos_PatrocinadoresUpdateManyWithWhereWithoutPatrocinadorInput[]
    deleteMany?: Eventos_PatrocinadoresScalarWhereInput | Eventos_PatrocinadoresScalarWhereInput[]
  }

  export type EventosCreateNestedOneWithoutPatrocinadoresInput = {
    create?: XOR<EventosCreateWithoutPatrocinadoresInput, EventosUncheckedCreateWithoutPatrocinadoresInput>
    connectOrCreate?: EventosCreateOrConnectWithoutPatrocinadoresInput
    connect?: EventosWhereUniqueInput
  }

  export type PatrocinadoresCreateNestedOneWithoutEventosInput = {
    create?: XOR<PatrocinadoresCreateWithoutEventosInput, PatrocinadoresUncheckedCreateWithoutEventosInput>
    connectOrCreate?: PatrocinadoresCreateOrConnectWithoutEventosInput
    connect?: PatrocinadoresWhereUniqueInput
  }

  export type EventosUpdateOneRequiredWithoutPatrocinadoresNestedInput = {
    create?: XOR<EventosCreateWithoutPatrocinadoresInput, EventosUncheckedCreateWithoutPatrocinadoresInput>
    connectOrCreate?: EventosCreateOrConnectWithoutPatrocinadoresInput
    upsert?: EventosUpsertWithoutPatrocinadoresInput
    connect?: EventosWhereUniqueInput
    update?: XOR<XOR<EventosUpdateToOneWithWhereWithoutPatrocinadoresInput, EventosUpdateWithoutPatrocinadoresInput>, EventosUncheckedUpdateWithoutPatrocinadoresInput>
  }

  export type PatrocinadoresUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<PatrocinadoresCreateWithoutEventosInput, PatrocinadoresUncheckedCreateWithoutEventosInput>
    connectOrCreate?: PatrocinadoresCreateOrConnectWithoutEventosInput
    upsert?: PatrocinadoresUpsertWithoutEventosInput
    connect?: PatrocinadoresWhereUniqueInput
    update?: XOR<XOR<PatrocinadoresUpdateToOneWithWhereWithoutEventosInput, PatrocinadoresUpdateWithoutEventosInput>, PatrocinadoresUncheckedUpdateWithoutEventosInput>
  }

  export type UsuariosCreateNestedOneWithoutAgendaInput = {
    create?: XOR<UsuariosCreateWithoutAgendaInput, UsuariosUncheckedCreateWithoutAgendaInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutAgendaInput
    connect?: UsuariosWhereUniqueInput
  }

  export type EventosCreateNestedOneWithoutAgendaInput = {
    create?: XOR<EventosCreateWithoutAgendaInput, EventosUncheckedCreateWithoutAgendaInput>
    connectOrCreate?: EventosCreateOrConnectWithoutAgendaInput
    connect?: EventosWhereUniqueInput
  }

  export type UsuariosUpdateOneRequiredWithoutAgendaNestedInput = {
    create?: XOR<UsuariosCreateWithoutAgendaInput, UsuariosUncheckedCreateWithoutAgendaInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutAgendaInput
    upsert?: UsuariosUpsertWithoutAgendaInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutAgendaInput, UsuariosUpdateWithoutAgendaInput>, UsuariosUncheckedUpdateWithoutAgendaInput>
  }

  export type EventosUpdateOneRequiredWithoutAgendaNestedInput = {
    create?: XOR<EventosCreateWithoutAgendaInput, EventosUncheckedCreateWithoutAgendaInput>
    connectOrCreate?: EventosCreateOrConnectWithoutAgendaInput
    upsert?: EventosUpsertWithoutAgendaInput
    connect?: EventosWhereUniqueInput
    update?: XOR<XOR<EventosUpdateToOneWithWhereWithoutAgendaInput, EventosUpdateWithoutAgendaInput>, EventosUncheckedUpdateWithoutAgendaInput>
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

  export type AgendaCreateWithoutUsuarioInput = {
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
    evento: EventosCreateNestedOneWithoutAgendaInput
  }

  export type AgendaUncheckedCreateWithoutUsuarioInput = {
    id_agenda?: number
    id_evento: number
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
  }

  export type AgendaCreateOrConnectWithoutUsuarioInput = {
    where: AgendaWhereUniqueInput
    create: XOR<AgendaCreateWithoutUsuarioInput, AgendaUncheckedCreateWithoutUsuarioInput>
  }

  export type AgendaCreateManyUsuarioInputEnvelope = {
    data: AgendaCreateManyUsuarioInput | AgendaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AgendaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AgendaWhereUniqueInput
    update: XOR<AgendaUpdateWithoutUsuarioInput, AgendaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AgendaCreateWithoutUsuarioInput, AgendaUncheckedCreateWithoutUsuarioInput>
  }

  export type AgendaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AgendaWhereUniqueInput
    data: XOR<AgendaUpdateWithoutUsuarioInput, AgendaUncheckedUpdateWithoutUsuarioInput>
  }

  export type AgendaUpdateManyWithWhereWithoutUsuarioInput = {
    where: AgendaScalarWhereInput
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AgendaScalarWhereInput = {
    AND?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
    OR?: AgendaScalarWhereInput[]
    NOT?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
    id_agenda?: IntFilter<"Agenda"> | number
    id_usuario?: IntFilter<"Agenda"> | number
    id_evento?: IntFilter<"Agenda"> | number
    actividad?: StringNullableFilter<"Agenda"> | string | null
    fecha?: DateTimeNullableFilter<"Agenda"> | Date | string | null
    comentario?: StringNullableFilter<"Agenda"> | string | null
    calificacion?: IntNullableFilter<"Agenda"> | number | null
    asistio?: BoolNullableFilter<"Agenda"> | boolean | null
    hora_ingreso?: DateTimeNullableFilter<"Agenda"> | Date | string | null
  }

  export type AgendaCreateWithoutEventoInput = {
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
    usuario: UsuariosCreateNestedOneWithoutAgendaInput
  }

  export type AgendaUncheckedCreateWithoutEventoInput = {
    id_agenda?: number
    id_usuario: number
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
  }

  export type AgendaCreateOrConnectWithoutEventoInput = {
    where: AgendaWhereUniqueInput
    create: XOR<AgendaCreateWithoutEventoInput, AgendaUncheckedCreateWithoutEventoInput>
  }

  export type AgendaCreateManyEventoInputEnvelope = {
    data: AgendaCreateManyEventoInput | AgendaCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type Eventos_ExpositoresCreateWithoutEventoInput = {
    expositor: ExpositoresCreateNestedOneWithoutEventosInput
  }

  export type Eventos_ExpositoresUncheckedCreateWithoutEventoInput = {
    id_expositor: number
  }

  export type Eventos_ExpositoresCreateOrConnectWithoutEventoInput = {
    where: Eventos_ExpositoresWhereUniqueInput
    create: XOR<Eventos_ExpositoresCreateWithoutEventoInput, Eventos_ExpositoresUncheckedCreateWithoutEventoInput>
  }

  export type Eventos_ExpositoresCreateManyEventoInputEnvelope = {
    data: Eventos_ExpositoresCreateManyEventoInput | Eventos_ExpositoresCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type Eventos_PatrocinadoresCreateWithoutEventoInput = {
    patrocinador: PatrocinadoresCreateNestedOneWithoutEventosInput
  }

  export type Eventos_PatrocinadoresUncheckedCreateWithoutEventoInput = {
    id_patrocinador: number
  }

  export type Eventos_PatrocinadoresCreateOrConnectWithoutEventoInput = {
    where: Eventos_PatrocinadoresWhereUniqueInput
    create: XOR<Eventos_PatrocinadoresCreateWithoutEventoInput, Eventos_PatrocinadoresUncheckedCreateWithoutEventoInput>
  }

  export type Eventos_PatrocinadoresCreateManyEventoInputEnvelope = {
    data: Eventos_PatrocinadoresCreateManyEventoInput | Eventos_PatrocinadoresCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type AgendaUpsertWithWhereUniqueWithoutEventoInput = {
    where: AgendaWhereUniqueInput
    update: XOR<AgendaUpdateWithoutEventoInput, AgendaUncheckedUpdateWithoutEventoInput>
    create: XOR<AgendaCreateWithoutEventoInput, AgendaUncheckedCreateWithoutEventoInput>
  }

  export type AgendaUpdateWithWhereUniqueWithoutEventoInput = {
    where: AgendaWhereUniqueInput
    data: XOR<AgendaUpdateWithoutEventoInput, AgendaUncheckedUpdateWithoutEventoInput>
  }

  export type AgendaUpdateManyWithWhereWithoutEventoInput = {
    where: AgendaScalarWhereInput
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyWithoutEventoInput>
  }

  export type Eventos_ExpositoresUpsertWithWhereUniqueWithoutEventoInput = {
    where: Eventos_ExpositoresWhereUniqueInput
    update: XOR<Eventos_ExpositoresUpdateWithoutEventoInput, Eventos_ExpositoresUncheckedUpdateWithoutEventoInput>
    create: XOR<Eventos_ExpositoresCreateWithoutEventoInput, Eventos_ExpositoresUncheckedCreateWithoutEventoInput>
  }

  export type Eventos_ExpositoresUpdateWithWhereUniqueWithoutEventoInput = {
    where: Eventos_ExpositoresWhereUniqueInput
    data: XOR<Eventos_ExpositoresUpdateWithoutEventoInput, Eventos_ExpositoresUncheckedUpdateWithoutEventoInput>
  }

  export type Eventos_ExpositoresUpdateManyWithWhereWithoutEventoInput = {
    where: Eventos_ExpositoresScalarWhereInput
    data: XOR<Eventos_ExpositoresUpdateManyMutationInput, Eventos_ExpositoresUncheckedUpdateManyWithoutEventoInput>
  }

  export type Eventos_ExpositoresScalarWhereInput = {
    AND?: Eventos_ExpositoresScalarWhereInput | Eventos_ExpositoresScalarWhereInput[]
    OR?: Eventos_ExpositoresScalarWhereInput[]
    NOT?: Eventos_ExpositoresScalarWhereInput | Eventos_ExpositoresScalarWhereInput[]
    id_evento?: IntFilter<"Eventos_Expositores"> | number
    id_expositor?: IntFilter<"Eventos_Expositores"> | number
  }

  export type Eventos_PatrocinadoresUpsertWithWhereUniqueWithoutEventoInput = {
    where: Eventos_PatrocinadoresWhereUniqueInput
    update: XOR<Eventos_PatrocinadoresUpdateWithoutEventoInput, Eventos_PatrocinadoresUncheckedUpdateWithoutEventoInput>
    create: XOR<Eventos_PatrocinadoresCreateWithoutEventoInput, Eventos_PatrocinadoresUncheckedCreateWithoutEventoInput>
  }

  export type Eventos_PatrocinadoresUpdateWithWhereUniqueWithoutEventoInput = {
    where: Eventos_PatrocinadoresWhereUniqueInput
    data: XOR<Eventos_PatrocinadoresUpdateWithoutEventoInput, Eventos_PatrocinadoresUncheckedUpdateWithoutEventoInput>
  }

  export type Eventos_PatrocinadoresUpdateManyWithWhereWithoutEventoInput = {
    where: Eventos_PatrocinadoresScalarWhereInput
    data: XOR<Eventos_PatrocinadoresUpdateManyMutationInput, Eventos_PatrocinadoresUncheckedUpdateManyWithoutEventoInput>
  }

  export type Eventos_PatrocinadoresScalarWhereInput = {
    AND?: Eventos_PatrocinadoresScalarWhereInput | Eventos_PatrocinadoresScalarWhereInput[]
    OR?: Eventos_PatrocinadoresScalarWhereInput[]
    NOT?: Eventos_PatrocinadoresScalarWhereInput | Eventos_PatrocinadoresScalarWhereInput[]
    id_evento?: IntFilter<"Eventos_Patrocinadores"> | number
    id_patrocinador?: IntFilter<"Eventos_Patrocinadores"> | number
  }

  export type Eventos_ExpositoresCreateWithoutExpositorInput = {
    evento: EventosCreateNestedOneWithoutExpositoresInput
  }

  export type Eventos_ExpositoresUncheckedCreateWithoutExpositorInput = {
    id_evento: number
  }

  export type Eventos_ExpositoresCreateOrConnectWithoutExpositorInput = {
    where: Eventos_ExpositoresWhereUniqueInput
    create: XOR<Eventos_ExpositoresCreateWithoutExpositorInput, Eventos_ExpositoresUncheckedCreateWithoutExpositorInput>
  }

  export type Eventos_ExpositoresCreateManyExpositorInputEnvelope = {
    data: Eventos_ExpositoresCreateManyExpositorInput | Eventos_ExpositoresCreateManyExpositorInput[]
    skipDuplicates?: boolean
  }

  export type Eventos_ExpositoresUpsertWithWhereUniqueWithoutExpositorInput = {
    where: Eventos_ExpositoresWhereUniqueInput
    update: XOR<Eventos_ExpositoresUpdateWithoutExpositorInput, Eventos_ExpositoresUncheckedUpdateWithoutExpositorInput>
    create: XOR<Eventos_ExpositoresCreateWithoutExpositorInput, Eventos_ExpositoresUncheckedCreateWithoutExpositorInput>
  }

  export type Eventos_ExpositoresUpdateWithWhereUniqueWithoutExpositorInput = {
    where: Eventos_ExpositoresWhereUniqueInput
    data: XOR<Eventos_ExpositoresUpdateWithoutExpositorInput, Eventos_ExpositoresUncheckedUpdateWithoutExpositorInput>
  }

  export type Eventos_ExpositoresUpdateManyWithWhereWithoutExpositorInput = {
    where: Eventos_ExpositoresScalarWhereInput
    data: XOR<Eventos_ExpositoresUpdateManyMutationInput, Eventos_ExpositoresUncheckedUpdateManyWithoutExpositorInput>
  }

  export type EventosCreateWithoutExpositoresInput = {
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
    agenda?: AgendaCreateNestedManyWithoutEventoInput
    patrocinadores?: Eventos_PatrocinadoresCreateNestedManyWithoutEventoInput
  }

  export type EventosUncheckedCreateWithoutExpositoresInput = {
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
    agenda?: AgendaUncheckedCreateNestedManyWithoutEventoInput
    patrocinadores?: Eventos_PatrocinadoresUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventosCreateOrConnectWithoutExpositoresInput = {
    where: EventosWhereUniqueInput
    create: XOR<EventosCreateWithoutExpositoresInput, EventosUncheckedCreateWithoutExpositoresInput>
  }

  export type ExpositoresCreateWithoutEventosInput = {
    nombre?: string | null
    especialidad?: string | null
    institucion?: string | null
    contacto?: string | null
  }

  export type ExpositoresUncheckedCreateWithoutEventosInput = {
    id_expositor?: number
    nombre?: string | null
    especialidad?: string | null
    institucion?: string | null
    contacto?: string | null
  }

  export type ExpositoresCreateOrConnectWithoutEventosInput = {
    where: ExpositoresWhereUniqueInput
    create: XOR<ExpositoresCreateWithoutEventosInput, ExpositoresUncheckedCreateWithoutEventosInput>
  }

  export type EventosUpsertWithoutExpositoresInput = {
    update: XOR<EventosUpdateWithoutExpositoresInput, EventosUncheckedUpdateWithoutExpositoresInput>
    create: XOR<EventosCreateWithoutExpositoresInput, EventosUncheckedCreateWithoutExpositoresInput>
    where?: EventosWhereInput
  }

  export type EventosUpdateToOneWithWhereWithoutExpositoresInput = {
    where?: EventosWhereInput
    data: XOR<EventosUpdateWithoutExpositoresInput, EventosUncheckedUpdateWithoutExpositoresInput>
  }

  export type EventosUpdateWithoutExpositoresInput = {
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
    agenda?: AgendaUpdateManyWithoutEventoNestedInput
    patrocinadores?: Eventos_PatrocinadoresUpdateManyWithoutEventoNestedInput
  }

  export type EventosUncheckedUpdateWithoutExpositoresInput = {
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
    agenda?: AgendaUncheckedUpdateManyWithoutEventoNestedInput
    patrocinadores?: Eventos_PatrocinadoresUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type ExpositoresUpsertWithoutEventosInput = {
    update: XOR<ExpositoresUpdateWithoutEventosInput, ExpositoresUncheckedUpdateWithoutEventosInput>
    create: XOR<ExpositoresCreateWithoutEventosInput, ExpositoresUncheckedCreateWithoutEventosInput>
    where?: ExpositoresWhereInput
  }

  export type ExpositoresUpdateToOneWithWhereWithoutEventosInput = {
    where?: ExpositoresWhereInput
    data: XOR<ExpositoresUpdateWithoutEventosInput, ExpositoresUncheckedUpdateWithoutEventosInput>
  }

  export type ExpositoresUpdateWithoutEventosInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpositoresUncheckedUpdateWithoutEventosInput = {
    id_expositor?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Eventos_PatrocinadoresCreateWithoutPatrocinadorInput = {
    evento: EventosCreateNestedOneWithoutPatrocinadoresInput
  }

  export type Eventos_PatrocinadoresUncheckedCreateWithoutPatrocinadorInput = {
    id_evento: number
  }

  export type Eventos_PatrocinadoresCreateOrConnectWithoutPatrocinadorInput = {
    where: Eventos_PatrocinadoresWhereUniqueInput
    create: XOR<Eventos_PatrocinadoresCreateWithoutPatrocinadorInput, Eventos_PatrocinadoresUncheckedCreateWithoutPatrocinadorInput>
  }

  export type Eventos_PatrocinadoresCreateManyPatrocinadorInputEnvelope = {
    data: Eventos_PatrocinadoresCreateManyPatrocinadorInput | Eventos_PatrocinadoresCreateManyPatrocinadorInput[]
    skipDuplicates?: boolean
  }

  export type Eventos_PatrocinadoresUpsertWithWhereUniqueWithoutPatrocinadorInput = {
    where: Eventos_PatrocinadoresWhereUniqueInput
    update: XOR<Eventos_PatrocinadoresUpdateWithoutPatrocinadorInput, Eventos_PatrocinadoresUncheckedUpdateWithoutPatrocinadorInput>
    create: XOR<Eventos_PatrocinadoresCreateWithoutPatrocinadorInput, Eventos_PatrocinadoresUncheckedCreateWithoutPatrocinadorInput>
  }

  export type Eventos_PatrocinadoresUpdateWithWhereUniqueWithoutPatrocinadorInput = {
    where: Eventos_PatrocinadoresWhereUniqueInput
    data: XOR<Eventos_PatrocinadoresUpdateWithoutPatrocinadorInput, Eventos_PatrocinadoresUncheckedUpdateWithoutPatrocinadorInput>
  }

  export type Eventos_PatrocinadoresUpdateManyWithWhereWithoutPatrocinadorInput = {
    where: Eventos_PatrocinadoresScalarWhereInput
    data: XOR<Eventos_PatrocinadoresUpdateManyMutationInput, Eventos_PatrocinadoresUncheckedUpdateManyWithoutPatrocinadorInput>
  }

  export type EventosCreateWithoutPatrocinadoresInput = {
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
    agenda?: AgendaCreateNestedManyWithoutEventoInput
    expositores?: Eventos_ExpositoresCreateNestedManyWithoutEventoInput
  }

  export type EventosUncheckedCreateWithoutPatrocinadoresInput = {
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
    agenda?: AgendaUncheckedCreateNestedManyWithoutEventoInput
    expositores?: Eventos_ExpositoresUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventosCreateOrConnectWithoutPatrocinadoresInput = {
    where: EventosWhereUniqueInput
    create: XOR<EventosCreateWithoutPatrocinadoresInput, EventosUncheckedCreateWithoutPatrocinadoresInput>
  }

  export type PatrocinadoresCreateWithoutEventosInput = {
    razon_social?: string | null
    institucion?: string | null
  }

  export type PatrocinadoresUncheckedCreateWithoutEventosInput = {
    id_patrocinador?: number
    razon_social?: string | null
    institucion?: string | null
  }

  export type PatrocinadoresCreateOrConnectWithoutEventosInput = {
    where: PatrocinadoresWhereUniqueInput
    create: XOR<PatrocinadoresCreateWithoutEventosInput, PatrocinadoresUncheckedCreateWithoutEventosInput>
  }

  export type EventosUpsertWithoutPatrocinadoresInput = {
    update: XOR<EventosUpdateWithoutPatrocinadoresInput, EventosUncheckedUpdateWithoutPatrocinadoresInput>
    create: XOR<EventosCreateWithoutPatrocinadoresInput, EventosUncheckedCreateWithoutPatrocinadoresInput>
    where?: EventosWhereInput
  }

  export type EventosUpdateToOneWithWhereWithoutPatrocinadoresInput = {
    where?: EventosWhereInput
    data: XOR<EventosUpdateWithoutPatrocinadoresInput, EventosUncheckedUpdateWithoutPatrocinadoresInput>
  }

  export type EventosUpdateWithoutPatrocinadoresInput = {
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
    agenda?: AgendaUpdateManyWithoutEventoNestedInput
    expositores?: Eventos_ExpositoresUpdateManyWithoutEventoNestedInput
  }

  export type EventosUncheckedUpdateWithoutPatrocinadoresInput = {
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
    agenda?: AgendaUncheckedUpdateManyWithoutEventoNestedInput
    expositores?: Eventos_ExpositoresUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type PatrocinadoresUpsertWithoutEventosInput = {
    update: XOR<PatrocinadoresUpdateWithoutEventosInput, PatrocinadoresUncheckedUpdateWithoutEventosInput>
    create: XOR<PatrocinadoresCreateWithoutEventosInput, PatrocinadoresUncheckedCreateWithoutEventosInput>
    where?: PatrocinadoresWhereInput
  }

  export type PatrocinadoresUpdateToOneWithWhereWithoutEventosInput = {
    where?: PatrocinadoresWhereInput
    data: XOR<PatrocinadoresUpdateWithoutEventosInput, PatrocinadoresUncheckedUpdateWithoutEventosInput>
  }

  export type PatrocinadoresUpdateWithoutEventosInput = {
    razon_social?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatrocinadoresUncheckedUpdateWithoutEventosInput = {
    id_patrocinador?: IntFieldUpdateOperationsInput | number
    razon_social?: NullableStringFieldUpdateOperationsInput | string | null
    institucion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosCreateWithoutAgendaInput = {
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

  export type UsuariosUncheckedCreateWithoutAgendaInput = {
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

  export type UsuariosCreateOrConnectWithoutAgendaInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutAgendaInput, UsuariosUncheckedCreateWithoutAgendaInput>
  }

  export type EventosCreateWithoutAgendaInput = {
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
    expositores?: Eventos_ExpositoresCreateNestedManyWithoutEventoInput
    patrocinadores?: Eventos_PatrocinadoresCreateNestedManyWithoutEventoInput
  }

  export type EventosUncheckedCreateWithoutAgendaInput = {
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
    expositores?: Eventos_ExpositoresUncheckedCreateNestedManyWithoutEventoInput
    patrocinadores?: Eventos_PatrocinadoresUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventosCreateOrConnectWithoutAgendaInput = {
    where: EventosWhereUniqueInput
    create: XOR<EventosCreateWithoutAgendaInput, EventosUncheckedCreateWithoutAgendaInput>
  }

  export type UsuariosUpsertWithoutAgendaInput = {
    update: XOR<UsuariosUpdateWithoutAgendaInput, UsuariosUncheckedUpdateWithoutAgendaInput>
    create: XOR<UsuariosCreateWithoutAgendaInput, UsuariosUncheckedCreateWithoutAgendaInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutAgendaInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutAgendaInput, UsuariosUncheckedUpdateWithoutAgendaInput>
  }

  export type UsuariosUpdateWithoutAgendaInput = {
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

  export type UsuariosUncheckedUpdateWithoutAgendaInput = {
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

  export type EventosUpsertWithoutAgendaInput = {
    update: XOR<EventosUpdateWithoutAgendaInput, EventosUncheckedUpdateWithoutAgendaInput>
    create: XOR<EventosCreateWithoutAgendaInput, EventosUncheckedCreateWithoutAgendaInput>
    where?: EventosWhereInput
  }

  export type EventosUpdateToOneWithWhereWithoutAgendaInput = {
    where?: EventosWhereInput
    data: XOR<EventosUpdateWithoutAgendaInput, EventosUncheckedUpdateWithoutAgendaInput>
  }

  export type EventosUpdateWithoutAgendaInput = {
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
    expositores?: Eventos_ExpositoresUpdateManyWithoutEventoNestedInput
    patrocinadores?: Eventos_PatrocinadoresUpdateManyWithoutEventoNestedInput
  }

  export type EventosUncheckedUpdateWithoutAgendaInput = {
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
    expositores?: Eventos_ExpositoresUncheckedUpdateManyWithoutEventoNestedInput
    patrocinadores?: Eventos_PatrocinadoresUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type AgendaCreateManyUsuarioInput = {
    id_agenda?: number
    id_evento: number
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
  }

  export type AgendaUpdateWithoutUsuarioInput = {
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evento?: EventosUpdateOneRequiredWithoutAgendaNestedInput
  }

  export type AgendaUncheckedUpdateWithoutUsuarioInput = {
    id_agenda?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AgendaUncheckedUpdateManyWithoutUsuarioInput = {
    id_agenda?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AgendaCreateManyEventoInput = {
    id_agenda?: number
    id_usuario: number
    actividad?: string | null
    fecha?: Date | string | null
    comentario?: string | null
    calificacion?: number | null
    asistio?: boolean | null
    hora_ingreso?: Date | string | null
  }

  export type Eventos_ExpositoresCreateManyEventoInput = {
    id_expositor: number
  }

  export type Eventos_PatrocinadoresCreateManyEventoInput = {
    id_patrocinador: number
  }

  export type AgendaUpdateWithoutEventoInput = {
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuariosUpdateOneRequiredWithoutAgendaNestedInput
  }

  export type AgendaUncheckedUpdateWithoutEventoInput = {
    id_agenda?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AgendaUncheckedUpdateManyWithoutEventoInput = {
    id_agenda?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    actividad?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    asistio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hora_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Eventos_ExpositoresUpdateWithoutEventoInput = {
    expositor?: ExpositoresUpdateOneRequiredWithoutEventosNestedInput
  }

  export type Eventos_ExpositoresUncheckedUpdateWithoutEventoInput = {
    id_expositor?: IntFieldUpdateOperationsInput | number
  }

  export type Eventos_ExpositoresUncheckedUpdateManyWithoutEventoInput = {
    id_expositor?: IntFieldUpdateOperationsInput | number
  }

  export type Eventos_PatrocinadoresUpdateWithoutEventoInput = {
    patrocinador?: PatrocinadoresUpdateOneRequiredWithoutEventosNestedInput
  }

  export type Eventos_PatrocinadoresUncheckedUpdateWithoutEventoInput = {
    id_patrocinador?: IntFieldUpdateOperationsInput | number
  }

  export type Eventos_PatrocinadoresUncheckedUpdateManyWithoutEventoInput = {
    id_patrocinador?: IntFieldUpdateOperationsInput | number
  }

  export type Eventos_ExpositoresCreateManyExpositorInput = {
    id_evento: number
  }

  export type Eventos_ExpositoresUpdateWithoutExpositorInput = {
    evento?: EventosUpdateOneRequiredWithoutExpositoresNestedInput
  }

  export type Eventos_ExpositoresUncheckedUpdateWithoutExpositorInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
  }

  export type Eventos_ExpositoresUncheckedUpdateManyWithoutExpositorInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
  }

  export type Eventos_PatrocinadoresCreateManyPatrocinadorInput = {
    id_evento: number
  }

  export type Eventos_PatrocinadoresUpdateWithoutPatrocinadorInput = {
    evento?: EventosUpdateOneRequiredWithoutPatrocinadoresNestedInput
  }

  export type Eventos_PatrocinadoresUncheckedUpdateWithoutPatrocinadorInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
  }

  export type Eventos_PatrocinadoresUncheckedUpdateManyWithoutPatrocinadorInput = {
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