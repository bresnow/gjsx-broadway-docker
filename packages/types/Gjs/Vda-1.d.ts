// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Vda-1
 */

import type * as Gjs from './Gjs';
import type GCalc from './GCalc-2';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';
import type Json from './Json-1.0';
import type GXml from './GXml-0.20';
import type libxml2 from './libxml2-2.0';

export namespace Vda {

enum MoveDirection {
    FORWARD,
    BACKWARD,
    RELATIVE,
}
enum MetaObjectError {
    APPEND,
    UPDATE,
    SAVE,
    DROP,
}
enum ConnectionError {
    NO_DATABASE_NAME_ERROR,
    SERVER_ERROR,
    QUERY_CREATION_ERROR,
}
enum DataObjectError {
    SELECT_ERROR,
    INSERT_ERROR,
    DELETE_ERROR,
    UPDATE_ERROR,
    PARAMETERS_ERROR,
    NO_CONNECTION_ERROR,
}
enum DataCollectionError {
    INVALID_PROPERTY_ERROR,
}
enum ParserError {
    INVALID_TOKEN_ERROR,
    INVALID_EXPRESSION_ERROR,
}
enum QueryError {
    INVALID_QUERY_ERROR,
    INVALID_CONNECTION_ERROR,
    GENERAL_ERROR,
}
enum RoleError {
    PROVILAGE_ERROR,
}
enum RowModelError {
    INVALID_COLUMN_NAME_ERROR,
    INVALID_COLUMN_NUMBER_ERROR,
}
enum SqlCommandError {
    INVALID_STRUCTURE_ERROR,
}
enum SqlCommandSelectError {
    INVALID_FIELDS_ERROR,
}
enum SqlExpressionError {
    INVALID_EXPRESSION_ERROR,
}
enum ConnectionStatus {
    INVALID,
    IN_PROGRESS,
    CANCELED,
    MADE,
    DISCONNECTED,
    TIMEOUT,
    CONNECTED,
}
enum SqlExpressionOperatorType {
    NONE,
    AND,
    OR,
    EQ,
    IS,
    LIKE,
    BETWEEN,
    NOT_BETWEEN,
    BETWEEN_SYMMETRIC,
    NOT_BETWEEN_SYMMETRIC,
    IS_DISTINCT_FROM,
    IS_NOT_DISTINCT_FROM,
    GT,
    LT,
    GEQ,
    LEQ,
    DIFF,
    REGEXP,
    REGEXP_CI,
    NOT_REGEXP,
    NOT_REGEXP_CI,
    SIMILAR_TO,
    IS_NULL,
    IS_NOT_NULL,
    IS_TRUE,
    IS_NOT_TRUE,
    IS_FALSE,
    IS_NOT_FALSE,
    IS_UNKNOWN,
    IS_NOT_UNKNOWN,
    NOT,
    IN,
    NOT_IN,
    CONCATENATE,
    PLUS,
    MINUS,
    STAR,
    DIV,
    REM,
    BITAND,
    BITOR,
    BITNOT,
    ILIKE,
}
enum RoleGrant {
    NONE,
    SELECT,
    INSERT,
    UPDATE,
    DELETE,
    TRUNCATE,
    REFERENCES,
    TRIGGER,
    CREATE,
    USAGE,
    PRIVILEGES,
}
interface MetaObject_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Vda-1.Vda.MetaObject

    connection?: Connection | null
}

interface MetaObject extends GObject.Object {

    // Own properties of Vda-1.Vda.MetaObject

    connection: Connection

    // Owm methods of Vda-1.Vda.MetaObject

    get_connection(): Connection
    set_connection(value: Connection): void

    // Own virtual methods of Vda-1.Vda.MetaObject

    vfunc_get_connection(): Connection
    vfunc_set_connection(value: Connection): void

    // Class property signals of Vda-1.Vda.MetaObject

    connect(sigName: "notify::connection", callback: (($obj: MetaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: MetaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MetaObject {

    // Own properties of Vda-1.Vda.MetaObject

    static name: string
    static $gtype: GObject.GType<MetaObject>

    // Constructors of Vda-1.Vda.MetaObject

    constructor(config?: MetaObject_ConstructProps) 
    _init(config?: MetaObject_ConstructProps): void
}

interface MetaNamedObject_ConstructProps extends GObject.Object_ConstructProps, MetaObject_ConstructProps {

    // Own constructor properties of Vda-1.Vda.MetaNamedObject

    name?: string | null
}

interface MetaNamedObject extends GObject.Object, MetaObject {

    // Own properties of Vda-1.Vda.MetaNamedObject

    name: string

    // Owm methods of Vda-1.Vda.MetaNamedObject

    get_name(): string
    set_name(value: string): void

    // Own virtual methods of Vda-1.Vda.MetaNamedObject

    vfunc_get_name(): string
    vfunc_set_name(value: string): void

    // Class property signals of Vda-1.Vda.MetaNamedObject

    connect(sigName: "notify::name", callback: (($obj: MetaNamedObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MetaNamedObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: MetaNamedObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: MetaNamedObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MetaNamedObject {

    // Own properties of Vda-1.Vda.MetaNamedObject

    static name: string
    static $gtype: GObject.GType<MetaNamedObject>

    // Constructors of Vda-1.Vda.MetaNamedObject

    constructor(config?: MetaNamedObject_ConstructProps) 
    _init(config?: MetaNamedObject_ConstructProps): void
}

interface ColumnModel_ConstructProps extends GObject.Object_ConstructProps {
}

interface ColumnModel extends GObject.Object {

    // Own properties of Vda-1.Vda.ColumnModel

    readonly name: string
    readonly data_type: GObject.GType

    // Owm methods of Vda-1.Vda.ColumnModel

    get_name(): string
    get_data_type(): GObject.GType

    // Own virtual methods of Vda-1.Vda.ColumnModel

    vfunc_get_name(): string
    vfunc_get_data_type(): GObject.GType

    // Class property signals of Vda-1.Vda.ColumnModel

    connect(sigName: "notify::name", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ColumnModel {

    // Own properties of Vda-1.Vda.ColumnModel

    static name: string
    static $gtype: GObject.GType<ColumnModel>

    // Constructors of Vda-1.Vda.ColumnModel

    constructor(config?: ColumnModel_ConstructProps) 
    _init(config?: ColumnModel_ConstructProps): void
}

interface Connection_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Vda-1.Vda.Connection

    parameters?: ConnectionParameters | null
}

/**
 * Signal callback interface for `closed`
 */
interface Connection_ClosedSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `opened`
 */
interface Connection_OpenedSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `closing`
 */
interface Connection_ClosingSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `canceled`
 */
interface Connection_CanceledSignalCallback {
    ($obj: Connection, message: string): void
}

/**
 * Signal callback interface for `timeout`
 */
interface Connection_TimeoutSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `disconnected`
 */
interface Connection_DisconnectedSignalCallback {
    ($obj: Connection): void
}

interface Connection extends GObject.Object {

    // Own properties of Vda-1.Vda.Connection

    readonly status: ConnectionStatus
    parameters: ConnectionParameters
    readonly is_opened: boolean
    readonly connection_string: string

    // Owm methods of Vda-1.Vda.Connection

    close(_callback_?: Gio.AsyncReadyCallback | null): void
    close_finish(_res_: Gio.AsyncResult): void
    open(_callback_?: Gio.AsyncReadyCallback | null): void
    open_finish(_res_: Gio.AsyncResult): ConnectionStatus
    open_from_string(cnc_string: string, _callback_?: Gio.AsyncReadyCallback | null): void
    open_from_string_finish(_res_: Gio.AsyncResult): ConnectionStatus
    parse_string(sql: string): Query
    parse_string_prepared(name: string | null, sql: string): PreparedQuery | null
    get_prepared_query(name: string): PreparedQuery | null
    query_from_command(cmd: SqlCommand, name?: string | null): PreparedQuery | null
    value_to_quoted_string(v: SqlValue): string
    locale(category: string): string
    get_status(): ConnectionStatus
    get_parameters(): ConnectionParameters
    set_parameters(value: ConnectionParameters): void
    get_is_opened(): boolean
    get_connection_string(): string

    // Own virtual methods of Vda-1.Vda.Connection

    vfunc_close(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(_res_: Gio.AsyncResult): void
    vfunc_open(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_open_finish(_res_: Gio.AsyncResult): ConnectionStatus
    vfunc_open_from_string(cnc_string: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_open_from_string_finish(_res_: Gio.AsyncResult): ConnectionStatus
    vfunc_parse_string(sql: string): Query
    vfunc_parse_string_prepared(name: string | null, sql: string): PreparedQuery | null
    vfunc_get_prepared_query(name: string): PreparedQuery | null
    vfunc_query_from_command(cmd: SqlCommand, name?: string | null): PreparedQuery | null
    vfunc_value_to_quoted_string(v: SqlValue): string
    vfunc_locale(category: string): string
    vfunc_get_status(): ConnectionStatus
    vfunc_get_parameters(): ConnectionParameters
    vfunc_set_parameters(value: ConnectionParameters): void
    vfunc_get_is_opened(): boolean
    vfunc_get_connection_string(): string

    // Own signals of Vda-1.Vda.Connection

    connect(sigName: "closed", callback: Connection_ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: Connection_ClosedSignalCallback): number
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "opened", callback: Connection_OpenedSignalCallback): number
    connect_after(sigName: "opened", callback: Connection_OpenedSignalCallback): number
    emit(sigName: "opened", ...args: any[]): void
    connect(sigName: "closing", callback: Connection_ClosingSignalCallback): number
    connect_after(sigName: "closing", callback: Connection_ClosingSignalCallback): number
    emit(sigName: "closing", ...args: any[]): void
    connect(sigName: "canceled", callback: Connection_CanceledSignalCallback): number
    connect_after(sigName: "canceled", callback: Connection_CanceledSignalCallback): number
    emit(sigName: "canceled", message: string, ...args: any[]): void
    connect(sigName: "timeout", callback: Connection_TimeoutSignalCallback): number
    connect_after(sigName: "timeout", callback: Connection_TimeoutSignalCallback): number
    emit(sigName: "timeout", ...args: any[]): void
    connect(sigName: "disconnected", callback: Connection_DisconnectedSignalCallback): number
    connect_after(sigName: "disconnected", callback: Connection_DisconnectedSignalCallback): number
    emit(sigName: "disconnected", ...args: any[]): void

    // Class property signals of Vda-1.Vda.Connection

    connect(sigName: "notify::status", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::is-opened", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-opened", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-opened", ...args: any[]): void
    connect(sigName: "notify::connection-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection-string", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Connection {

    // Own properties of Vda-1.Vda.Connection

    static name: string
    static $gtype: GObject.GType<Connection>

    // Constructors of Vda-1.Vda.Connection

    constructor(config?: Connection_ConstructProps) 
    _init(config?: Connection_ConstructProps): void
}

interface ConnectionBlob_ConstructProps extends GObject.Object_ConstructProps {
}

interface ConnectionBlob extends GObject.Object {

    // Owm methods of Vda-1.Vda.ConnectionBlob

    create(stream: Gio.InputStream): SqlValueBlob
    delete(val: SqlValueBlob): void

    // Own virtual methods of Vda-1.Vda.ConnectionBlob

    vfunc_create(stream: Gio.InputStream): SqlValueBlob
    vfunc_delete(val: SqlValueBlob): void

    // Class property signals of Vda-1.Vda.ConnectionBlob

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConnectionBlob {

    // Own properties of Vda-1.Vda.ConnectionBlob

    static name: string
    static $gtype: GObject.GType<ConnectionBlob>

    // Constructors of Vda-1.Vda.ConnectionBlob

    constructor(config?: ConnectionBlob_ConstructProps) 
    _init(config?: ConnectionBlob_ConstructProps): void
}

interface ConnectionRolebased_ConstructProps extends GObject.Object_ConstructProps {
}

interface ConnectionRolebased extends GObject.Object {

    // Owm methods of Vda-1.Vda.ConnectionRolebased

    current_role(): Role | null
    create_role(name: string, params: Parameters): Role | null

    // Own virtual methods of Vda-1.Vda.ConnectionRolebased

    vfunc_current_role(): Role | null
    vfunc_create_role(name: string, params: Parameters): Role | null

    // Class property signals of Vda-1.Vda.ConnectionRolebased

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConnectionRolebased {

    // Own properties of Vda-1.Vda.ConnectionRolebased

    static name: string
    static $gtype: GObject.GType<ConnectionRolebased>

    // Constructors of Vda-1.Vda.ConnectionRolebased

    constructor(config?: ConnectionRolebased_ConstructProps) 
    _init(config?: ConnectionRolebased_ConstructProps): void
}

interface ConnectionTransactional_ConstructProps extends GObject.Object_ConstructProps {
}

interface ConnectionTransactional extends GObject.Object {

    // Owm methods of Vda-1.Vda.ConnectionTransactional

    add_savepoint(name?: string | null): boolean
    delete_savepoint(name?: string | null): boolean
    rollback_savepoint(name?: string | null): boolean
    begin_transaction(name?: string | null): boolean
    commit_transaction(name?: string | null): boolean
    rollback_transaction(name?: string | null): boolean

    // Own virtual methods of Vda-1.Vda.ConnectionTransactional

    vfunc_add_savepoint(name?: string | null): boolean
    vfunc_delete_savepoint(name?: string | null): boolean
    vfunc_rollback_savepoint(name?: string | null): boolean
    vfunc_begin_transaction(name?: string | null): boolean
    vfunc_commit_transaction(name?: string | null): boolean
    vfunc_rollback_transaction(name?: string | null): boolean

    // Class property signals of Vda-1.Vda.ConnectionTransactional

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConnectionTransactional {

    // Own properties of Vda-1.Vda.ConnectionTransactional

    static name: string
    static $gtype: GObject.GType<ConnectionTransactional>

    // Constructors of Vda-1.Vda.ConnectionTransactional

    constructor(config?: ConnectionTransactional_ConstructProps) 
    _init(config?: ConnectionTransactional_ConstructProps): void
}

interface DataObject_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Vda-1.Vda.DataObject

    database_connection?: Connection | null
    database_table_name?: string | null
    cancellable?: Gio.Cancellable | null
}

interface DataObject extends GObject.Object {

    // Own properties of Vda-1.Vda.DataObject

    database_connection: Connection
    database_table_name: string
    cancellable: Gio.Cancellable

    // Owm methods of Vda-1.Vda.DataObject

    update_data_from_db(_callback_?: Gio.AsyncReadyCallback | null): void
    update_data_from_db_finish(_res_: Gio.AsyncResult): void
    update_data_from_db_pkey(_callback_?: Gio.AsyncReadyCallback | null): void
    update_data_from_db_pkey_finish(_res_: Gio.AsyncResult): void
    update_data_from_db_full(use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    update_data_from_db_full_finish(_res_: Gio.AsyncResult): void
    insert_data_into_db(_callback_?: Gio.AsyncReadyCallback | null): void
    insert_data_into_db_finish(_res_: Gio.AsyncResult): void
    delete_data_from_db(_callback_?: Gio.AsyncReadyCallback | null): void
    delete_data_from_db_finish(_res_: Gio.AsyncResult): void
    delete_data_from_db_pkey(_callback_?: Gio.AsyncReadyCallback | null): void
    delete_data_from_db_pkey_finish(_res_: Gio.AsyncResult): void
    delete_data_from_db_full(use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    delete_data_from_db_full_finish(_res_: Gio.AsyncResult): void
    update_data_into_db(_callback_?: Gio.AsyncReadyCallback | null): void
    update_data_into_db_finish(_res_: Gio.AsyncResult): void
    update_data_into_db_pkey(_callback_?: Gio.AsyncReadyCallback | null): void
    update_data_into_db_pkey_finish(_res_: Gio.AsyncResult): void
    update_data_into_db_full(use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    update_data_into_db_full_finish(_res_: Gio.AsyncResult): void
    update_from_row(table: TableModel, nrow: number): void
    get_database_connection(): Connection
    set_database_connection(value: Connection): void
    get_database_table_name(): string
    set_database_table_name(value: string): void
    get_cancellable(): Gio.Cancellable
    set_cancellable(value: Gio.Cancellable): void

    // Own virtual methods of Vda-1.Vda.DataObject

    vfunc_update_data_from_db(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_update_data_from_db_finish(_res_: Gio.AsyncResult): void
    vfunc_update_data_from_db_pkey(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_update_data_from_db_pkey_finish(_res_: Gio.AsyncResult): void
    vfunc_update_data_from_db_full(use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_update_data_from_db_full_finish(_res_: Gio.AsyncResult): void
    vfunc_insert_data_into_db(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_insert_data_into_db_finish(_res_: Gio.AsyncResult): void
    vfunc_delete_data_from_db(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_delete_data_from_db_finish(_res_: Gio.AsyncResult): void
    vfunc_delete_data_from_db_pkey(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_delete_data_from_db_pkey_finish(_res_: Gio.AsyncResult): void
    vfunc_delete_data_from_db_full(use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_delete_data_from_db_full_finish(_res_: Gio.AsyncResult): void
    vfunc_update_data_into_db(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_update_data_into_db_finish(_res_: Gio.AsyncResult): void
    vfunc_update_data_into_db_pkey(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_update_data_into_db_pkey_finish(_res_: Gio.AsyncResult): void
    vfunc_update_data_into_db_full(use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_update_data_into_db_full_finish(_res_: Gio.AsyncResult): void
    vfunc_update_from_row(table: TableModel, nrow: number): void
    vfunc_get_database_connection(): Connection
    vfunc_set_database_connection(value: Connection): void
    vfunc_get_database_table_name(): string
    vfunc_set_database_table_name(value: string): void
    vfunc_get_cancellable(): Gio.Cancellable
    vfunc_set_cancellable(value: Gio.Cancellable): void

    // Class property signals of Vda-1.Vda.DataObject

    connect(sigName: "notify::database-connection", callback: (($obj: DataObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database-connection", callback: (($obj: DataObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::database-connection", ...args: any[]): void
    connect(sigName: "notify::database-table-name", callback: (($obj: DataObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database-table-name", callback: (($obj: DataObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::database-table-name", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (($obj: DataObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: DataObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataObject {

    // Own properties of Vda-1.Vda.DataObject

    static name: string
    static $gtype: GObject.GType<DataObject>

    // Constructors of Vda-1.Vda.DataObject

    constructor(config?: DataObject_ConstructProps) 
    _init(config?: DataObject_ConstructProps): void
    static create_select_query(obj: DataObject, use_pkey: boolean): SqlCommandSelect
    static create_select_all(obj: DataObject): SqlCommandSelect
    static create_insert_query(obj: DataObject): SqlCommandInsert
    static create_delete_query(obj: DataObject, use_pkey: boolean): SqlCommandDelete
    static create_update_query(obj: DataObject, use_pkey: boolean): SqlCommandUpdate
}

interface DataCollection_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Vda-1.Vda.DataCollection

    database_connection?: Connection | null
    cancellable?: Gio.Cancellable | null
}

interface DataCollection extends GObject.Object {

    // Own properties of Vda-1.Vda.DataCollection

    database_connection: Connection
    readonly parent_property: string
    readonly parent: DataObject
    readonly object_type: GObject.GType
    readonly ref_field: string
    cancellable: Gio.Cancellable

    // Owm methods of Vda-1.Vda.DataCollection

    get_objects(_callback_?: Gio.AsyncReadyCallback | null): void
    get_objects_finish(_res_: Gio.AsyncResult): TableModel
    get_database_connection(): Connection
    set_database_connection(value: Connection): void
    get_parent_property(): string
    get_parent(): DataObject
    get_object_type(): GObject.GType
    get_ref_field(): string
    get_cancellable(): Gio.Cancellable
    set_cancellable(value: Gio.Cancellable): void

    // Own virtual methods of Vda-1.Vda.DataCollection

    vfunc_get_objects(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_objects_finish(_res_: Gio.AsyncResult): TableModel
    vfunc_get_database_connection(): Connection
    vfunc_set_database_connection(value: Connection): void
    vfunc_get_parent_property(): string
    vfunc_get_parent(): DataObject
    vfunc_get_object_type(): GObject.GType
    vfunc_get_ref_field(): string
    vfunc_get_cancellable(): Gio.Cancellable
    vfunc_set_cancellable(value: Gio.Cancellable): void

    // Class property signals of Vda-1.Vda.DataCollection

    connect(sigName: "notify::database-connection", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database-connection", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::database-connection", ...args: any[]): void
    connect(sigName: "notify::parent-property", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-property", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-property", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::object-type", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-type", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::ref-field", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-field", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-field", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataCollection {

    // Own properties of Vda-1.Vda.DataCollection

    static name: string
    static $gtype: GObject.GType<DataCollection>

    // Constructors of Vda-1.Vda.DataCollection

    constructor(config?: DataCollection_ConstructProps) 
    _init(config?: DataCollection_ConstructProps): void
}

interface HashModel_ConstructProps extends GObject.Object_ConstructProps, Gio.ListModel_ConstructProps {
}

interface HashModel extends GObject.Object, Gio.ListModel {

    // Owm methods of Vda-1.Vda.HashModel

    add(object: GObject.Object): void
    find(key: GObject.Object): GObject.Object | null
    remove(object: GObject.Object): void

    // Own virtual methods of Vda-1.Vda.HashModel

    vfunc_add(object: GObject.Object): void
    vfunc_find(key: GObject.Object): GObject.Object | null
    vfunc_remove(object: GObject.Object): void

    // Class property signals of Vda-1.Vda.HashModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HashModel {

    // Own properties of Vda-1.Vda.HashModel

    static name: string
    static $gtype: GObject.GType<HashModel>

    // Constructors of Vda-1.Vda.HashModel

    constructor(config?: HashModel_ConstructProps) 
    _init(config?: HashModel_ConstructProps): void
}

interface Inserted_ConstructProps extends GObject.Object_ConstructProps, Result_ConstructProps {
}

interface Inserted extends GObject.Object, Result {

    // Own properties of Vda-1.Vda.Inserted

    readonly number: number
    readonly last_inserted: RowModel

    // Owm methods of Vda-1.Vda.Inserted

    get_number(): number
    get_last_inserted(): RowModel

    // Own virtual methods of Vda-1.Vda.Inserted

    vfunc_get_number(): number
    vfunc_get_last_inserted(): RowModel

    // Class property signals of Vda-1.Vda.Inserted

    connect(sigName: "notify::number", callback: (($obj: Inserted, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: Inserted, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: "notify::last-inserted", callback: (($obj: Inserted, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-inserted", callback: (($obj: Inserted, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-inserted", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Inserted {

    // Own properties of Vda-1.Vda.Inserted

    static name: string
    static $gtype: GObject.GType<Inserted>

    // Constructors of Vda-1.Vda.Inserted

    constructor(config?: Inserted_ConstructProps) 
    _init(config?: Inserted_ConstructProps): void
}

interface ParsedQuery_ConstructProps extends GObject.Object_ConstructProps, PreparedQuery_ConstructProps {
}

interface ParsedQuery extends GObject.Object, PreparedQuery {

    // Own properties of Vda-1.Vda.ParsedQuery

    readonly command: SqlCommand

    // Owm methods of Vda-1.Vda.ParsedQuery

    get_command(): SqlCommand

    // Own virtual methods of Vda-1.Vda.ParsedQuery

    vfunc_get_command(): SqlCommand

    // Class property signals of Vda-1.Vda.ParsedQuery

    connect(sigName: "notify::command", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::command", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::command", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::sql", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sql", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ParsedQuery {

    // Own properties of Vda-1.Vda.ParsedQuery

    static name: string
    static $gtype: GObject.GType<ParsedQuery>

    // Constructors of Vda-1.Vda.ParsedQuery

    constructor(config?: ParsedQuery_ConstructProps) 
    _init(config?: ParsedQuery_ConstructProps): void
}

interface PreparedQuery_ConstructProps extends GObject.Object_ConstructProps, Query_ConstructProps {
}

interface PreparedQuery extends GObject.Object, Query {

    // Own properties of Vda-1.Vda.PreparedQuery

    readonly name: string
    readonly parameters: SqlParameters

    // Owm methods of Vda-1.Vda.PreparedQuery

    get_name(): string
    get_parameters(): SqlParameters

    // Own virtual methods of Vda-1.Vda.PreparedQuery

    vfunc_get_name(): string
    vfunc_get_parameters(): SqlParameters

    // Class property signals of Vda-1.Vda.PreparedQuery

    connect(sigName: "notify::name", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::sql", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sql", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PreparedQuery {

    // Own properties of Vda-1.Vda.PreparedQuery

    static name: string
    static $gtype: GObject.GType<PreparedQuery>

    // Constructors of Vda-1.Vda.PreparedQuery

    constructor(config?: PreparedQuery_ConstructProps) 
    _init(config?: PreparedQuery_ConstructProps): void
}

interface Query_ConstructProps extends GObject.Object_ConstructProps {
}

interface Query extends GObject.Object {

    // Own properties of Vda-1.Vda.Query

    readonly sql: string
    readonly connection: Connection

    // Owm methods of Vda-1.Vda.Query

    execute(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    execute_finish(_res_: Gio.AsyncResult): Result | null
    cancel(_callback_?: Gio.AsyncReadyCallback | null): void
    cancel_finish(_res_: Gio.AsyncResult): void
    render_sql(): string
    get_sql(): string
    get_connection(): Connection

    // Own virtual methods of Vda-1.Vda.Query

    vfunc_execute(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_execute_finish(_res_: Gio.AsyncResult): Result | null
    vfunc_cancel(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_cancel_finish(_res_: Gio.AsyncResult): void
    vfunc_render_sql(): string
    vfunc_get_sql(): string
    vfunc_get_connection(): Connection

    // Class property signals of Vda-1.Vda.Query

    connect(sigName: "notify::sql", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sql", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Query {

    // Own properties of Vda-1.Vda.Query

    static name: string
    static $gtype: GObject.GType<Query>

    // Constructors of Vda-1.Vda.Query

    constructor(config?: Query_ConstructProps) 
    _init(config?: Query_ConstructProps): void
}

interface Result_ConstructProps extends GObject.Object_ConstructProps {
}

interface Result extends GObject.Object {

    // Class property signals of Vda-1.Vda.Result

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Result {

    // Own properties of Vda-1.Vda.Result

    static name: string
    static $gtype: GObject.GType<Result>

    // Constructors of Vda-1.Vda.Result

    constructor(config?: Result_ConstructProps) 
    _init(config?: Result_ConstructProps): void
}

interface Role_ConstructProps extends GObject.Object_ConstructProps {
}

interface Role extends GObject.Object {

    // Own properties of Vda-1.Vda.Role

    readonly connection: Connection

    // Owm methods of Vda-1.Vda.Role

    name(_callback_?: Gio.AsyncReadyCallback | null): void
    name_finish(_res_: Gio.AsyncResult): string
    membership(_callback_?: Gio.AsyncReadyCallback | null): void
    membership_finish(_res_: Gio.AsyncResult): HashModel
    privilages(object: MetaObject, _callback_?: Gio.AsyncReadyCallback | null): void
    privilages_finish(_res_: Gio.AsyncResult): RoleGrant
    change_privilages(object: MetaObject, grant: RoleGrant, _callback_?: Gio.AsyncReadyCallback | null): void
    change_privilages_finish(_res_: Gio.AsyncResult): void
    get_connection(): Connection

    // Own virtual methods of Vda-1.Vda.Role

    vfunc_name(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_name_finish(_res_: Gio.AsyncResult): string
    vfunc_membership(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_membership_finish(_res_: Gio.AsyncResult): HashModel
    vfunc_privilages(object: MetaObject, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_privilages_finish(_res_: Gio.AsyncResult): RoleGrant
    vfunc_change_privilages(object: MetaObject, grant: RoleGrant, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_privilages_finish(_res_: Gio.AsyncResult): void
    vfunc_get_connection(): Connection

    // Class property signals of Vda-1.Vda.Role

    connect(sigName: "notify::connection", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Role {

    // Own properties of Vda-1.Vda.Role

    static name: string
    static $gtype: GObject.GType<Role>

    // Constructors of Vda-1.Vda.Role

    constructor(config?: Role_ConstructProps) 
    _init(config?: Role_ConstructProps): void
}

interface RowModel_ConstructProps extends GObject.Object_ConstructProps, Gio.ListModel_ConstructProps {
}

interface RowModel extends GObject.Object, Gio.ListModel {

    // Own properties of Vda-1.Vda.RowModel

    readonly n_columns: number

    // Owm methods of Vda-1.Vda.RowModel

    get_column(name: string): ColumnModel | null
    get_column_at(col: number): ColumnModel | null
    get_value(name: string): SqlValue | null
    get_value_at(col: number): SqlValue | null
    get_string(name: string): string | null
    get_string_at(col: number): string | null
    get_n_columns(): number

    // Own virtual methods of Vda-1.Vda.RowModel

    vfunc_get_column(name: string): ColumnModel | null
    vfunc_get_column_at(col: number): ColumnModel | null
    vfunc_get_value(name: string): SqlValue | null
    vfunc_get_value_at(col: number): SqlValue | null
    vfunc_get_string(name: string): string | null
    vfunc_get_string_at(col: number): string | null
    vfunc_get_n_columns(): number

    // Class property signals of Vda-1.Vda.RowModel

    connect(sigName: "notify::n-columns", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-columns", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RowModel {

    // Own properties of Vda-1.Vda.RowModel

    static name: string
    static $gtype: GObject.GType<RowModel>

    // Constructors of Vda-1.Vda.RowModel

    constructor(config?: RowModel_ConstructProps) 
    _init(config?: RowModel_ConstructProps): void
}

interface SqlAffectedRows_ConstructProps extends GObject.Object_ConstructProps, Result_ConstructProps {
}

interface SqlAffectedRows extends GObject.Object, Result {

    // Own properties of Vda-1.Vda.SqlAffectedRows

    readonly number: number

    // Owm methods of Vda-1.Vda.SqlAffectedRows

    get_number(): number

    // Own virtual methods of Vda-1.Vda.SqlAffectedRows

    vfunc_get_number(): number

    // Class property signals of Vda-1.Vda.SqlAffectedRows

    connect(sigName: "notify::number", callback: (($obj: SqlAffectedRows, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: SqlAffectedRows, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlAffectedRows {

    // Own properties of Vda-1.Vda.SqlAffectedRows

    static name: string
    static $gtype: GObject.GType<SqlAffectedRows>

    // Constructors of Vda-1.Vda.SqlAffectedRows

    constructor(config?: SqlAffectedRows_ConstructProps) 
    _init(config?: SqlAffectedRows_ConstructProps): void
}

interface SqlCommand_ConstructProps extends GObject.Object_ConstructProps {
}

interface SqlCommand extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlCommand

    readonly connection: Connection

    // Owm methods of Vda-1.Vda.SqlCommand

    get_connection(): Connection

    // Own virtual methods of Vda-1.Vda.SqlCommand

    vfunc_get_connection(): Connection

    // Class property signals of Vda-1.Vda.SqlCommand

    connect(sigName: "notify::connection", callback: (($obj: SqlCommand, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlCommand, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlCommand {

    // Own properties of Vda-1.Vda.SqlCommand

    static name: string
    static $gtype: GObject.GType<SqlCommand>

    // Constructors of Vda-1.Vda.SqlCommand

    constructor(config?: SqlCommand_ConstructProps) 
    _init(config?: SqlCommand_ConstructProps): void
}

interface SqlCommandConditional_ConstructProps extends GObject.Object_ConstructProps {
}

interface SqlCommandConditional extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlCommandConditional

    readonly condition: SqlExpression

    // Owm methods of Vda-1.Vda.SqlCommandConditional

    get_condition(): SqlExpression

    // Own virtual methods of Vda-1.Vda.SqlCommandConditional

    vfunc_get_condition(): SqlExpression

    // Class property signals of Vda-1.Vda.SqlCommandConditional

    connect(sigName: "notify::condition", callback: (($obj: SqlCommandConditional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: SqlCommandConditional, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlCommandConditional {

    // Own properties of Vda-1.Vda.SqlCommandConditional

    static name: string
    static $gtype: GObject.GType<SqlCommandConditional>

    // Constructors of Vda-1.Vda.SqlCommandConditional

    constructor(config?: SqlCommandConditional_ConstructProps) 
    _init(config?: SqlCommandConditional_ConstructProps): void
}

interface SqlCommandDelete_ConstructProps extends GObject.Object_ConstructProps, SqlCommandTableRelated_ConstructProps, SqlCommandConditional_ConstructProps, SqlCommand_ConstructProps, SqlCommandParametrized_ConstructProps {
}

interface SqlCommandDelete extends GObject.Object, SqlCommandTableRelated, SqlCommandConditional, SqlCommand, SqlCommandParametrized {

    // Owm methods of Vda-1.Vda.SqlCommandDelete

    stringify(): string
    to_query(name?: string | null): Query
    parse(sql: string): void

    // Own virtual methods of Vda-1.Vda.SqlCommandDelete

    vfunc_stringify(): string
    vfunc_to_query(name?: string | null): Query
    vfunc_parse(sql: string): void

    // Class property signals of Vda-1.Vda.SqlCommandDelete

    connect(sigName: "notify::table", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::condition", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlCommandDelete {

    // Own properties of Vda-1.Vda.SqlCommandDelete

    static name: string
    static $gtype: GObject.GType<SqlCommandDelete>

    // Constructors of Vda-1.Vda.SqlCommandDelete

    constructor(config?: SqlCommandDelete_ConstructProps) 
    _init(config?: SqlCommandDelete_ConstructProps): void
}

interface SqlCommandInsert_ConstructProps extends GObject.Object_ConstructProps, SqlCommandTableRelated_ConstructProps, SqlCommandModification_ConstructProps, SqlCommand_ConstructProps, SqlCommandParametrized_ConstructProps {
}

interface SqlCommandInsert extends GObject.Object, SqlCommandTableRelated, SqlCommandModification, SqlCommand, SqlCommandParametrized {

    // Owm methods of Vda-1.Vda.SqlCommandInsert

    stringify(): string
    to_query(name?: string | null): Query
    parse(sql: string): void

    // Own virtual methods of Vda-1.Vda.SqlCommandInsert

    vfunc_stringify(): string
    vfunc_to_query(name?: string | null): Query
    vfunc_parse(sql: string): void

    // Class property signals of Vda-1.Vda.SqlCommandInsert

    connect(sigName: "notify::table", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlCommandInsert {

    // Own properties of Vda-1.Vda.SqlCommandInsert

    static name: string
    static $gtype: GObject.GType<SqlCommandInsert>

    // Constructors of Vda-1.Vda.SqlCommandInsert

    constructor(config?: SqlCommandInsert_ConstructProps) 
    _init(config?: SqlCommandInsert_ConstructProps): void
}

interface SqlCommandModification_ConstructProps extends GObject.Object_ConstructProps {
}

interface SqlCommandModification extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlCommandModification

    readonly fields: HashModel
    readonly values: HashModel

    // Owm methods of Vda-1.Vda.SqlCommandModification

    add_field_value(name: string, val?: any | null): void
    add_field(name: string): void
    add_value(val?: any | null): void
    add_field_parameter_value(field: string, par: string, gtype: GObject.GType): void
    add_parameter(par: string, gtype: GObject.GType): void
    get_fields(): HashModel
    get_values(): HashModel

    // Own virtual methods of Vda-1.Vda.SqlCommandModification

    vfunc_add_field_value(name: string, val?: any | null): void
    vfunc_add_field(name: string): void
    vfunc_add_value(val?: any | null): void
    vfunc_add_field_parameter_value(field: string, par: string, gtype: GObject.GType): void
    vfunc_add_parameter(par: string, gtype: GObject.GType): void
    vfunc_get_fields(): HashModel
    vfunc_get_values(): HashModel

    // Class property signals of Vda-1.Vda.SqlCommandModification

    connect(sigName: "notify::fields", callback: (($obj: SqlCommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: SqlCommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: SqlCommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SqlCommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlCommandModification {

    // Own properties of Vda-1.Vda.SqlCommandModification

    static name: string
    static $gtype: GObject.GType<SqlCommandModification>

    // Constructors of Vda-1.Vda.SqlCommandModification

    constructor(config?: SqlCommandModification_ConstructProps) 
    _init(config?: SqlCommandModification_ConstructProps): void
}

interface SqlCommandParametrized_ConstructProps extends GObject.Object_ConstructProps, SqlCommand_ConstructProps {
}

interface SqlCommandParametrized extends GObject.Object, SqlCommand {

    // Own properties of Vda-1.Vda.SqlCommandParametrized

    readonly parameters: SqlParameters

    // Owm methods of Vda-1.Vda.SqlCommandParametrized

    get_parameters(): SqlParameters

    // Own virtual methods of Vda-1.Vda.SqlCommandParametrized

    vfunc_get_parameters(): SqlParameters

    // Class property signals of Vda-1.Vda.SqlCommandParametrized

    connect(sigName: "notify::parameters", callback: (($obj: SqlCommandParametrized, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: SqlCommandParametrized, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlCommandParametrized, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlCommandParametrized, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlCommandParametrized {

    // Own properties of Vda-1.Vda.SqlCommandParametrized

    static name: string
    static $gtype: GObject.GType<SqlCommandParametrized>

    // Constructors of Vda-1.Vda.SqlCommandParametrized

    constructor(config?: SqlCommandParametrized_ConstructProps) 
    _init(config?: SqlCommandParametrized_ConstructProps): void
}

interface SqlCommandSelect_ConstructProps extends GObject.Object_ConstructProps, SqlCommandConditional_ConstructProps, SqlCommand_ConstructProps, SqlCommandParametrized_ConstructProps {
}

interface SqlCommandSelect extends GObject.Object, SqlCommandConditional, SqlCommand, SqlCommandParametrized {

    // Own properties of Vda-1.Vda.SqlCommandSelect

    readonly fields: HashModel
    readonly tables: HashModel

    // Owm methods of Vda-1.Vda.SqlCommandSelect

    add_field(field: string, table_ref?: string | null, alias?: string | null): void
    add_table(name: string, allias?: string | null): void
    add_value_field(val: any, allias?: string | null): void
    add_math_exp_field(exp: string, allias?: string | null): void
    stringify(): string
    to_query(name?: string | null): PreparedQuery
    parse(sql: string): void
    get_fields(): HashModel
    get_tables(): HashModel

    // Own virtual methods of Vda-1.Vda.SqlCommandSelect

    vfunc_add_field(field: string, table_ref?: string | null, alias?: string | null): void
    vfunc_add_table(name: string, allias?: string | null): void
    vfunc_add_value_field(val: any, allias?: string | null): void
    vfunc_add_math_exp_field(exp: string, allias?: string | null): void
    vfunc_stringify(): string
    vfunc_to_query(name?: string | null): PreparedQuery
    vfunc_parse(sql: string): void
    vfunc_get_fields(): HashModel
    vfunc_get_tables(): HashModel

    // Class property signals of Vda-1.Vda.SqlCommandSelect

    connect(sigName: "notify::fields", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::tables", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tables", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tables", ...args: any[]): void
    connect(sigName: "notify::condition", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlCommandSelect {

    // Own properties of Vda-1.Vda.SqlCommandSelect

    static name: string
    static $gtype: GObject.GType<SqlCommandSelect>

    // Constructors of Vda-1.Vda.SqlCommandSelect

    constructor(config?: SqlCommandSelect_ConstructProps) 
    _init(config?: SqlCommandSelect_ConstructProps): void
}

interface SqlCommandTableRelated_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Vda-1.Vda.SqlCommandTableRelated

    table?: string | null
    allias?: string | null
}

interface SqlCommandTableRelated extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlCommandTableRelated

    table: string
    allias: string

    // Owm methods of Vda-1.Vda.SqlCommandTableRelated

    get_table(): string
    set_table(value: string): void
    get_allias(): string
    set_allias(value: string): void

    // Own virtual methods of Vda-1.Vda.SqlCommandTableRelated

    vfunc_get_table(): string
    vfunc_set_table(value: string): void
    vfunc_get_allias(): string
    vfunc_set_allias(value: string): void

    // Class property signals of Vda-1.Vda.SqlCommandTableRelated

    connect(sigName: "notify::table", callback: (($obj: SqlCommandTableRelated, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: SqlCommandTableRelated, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: SqlCommandTableRelated, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: SqlCommandTableRelated, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlCommandTableRelated {

    // Own properties of Vda-1.Vda.SqlCommandTableRelated

    static name: string
    static $gtype: GObject.GType<SqlCommandTableRelated>

    // Constructors of Vda-1.Vda.SqlCommandTableRelated

    constructor(config?: SqlCommandTableRelated_ConstructProps) 
    _init(config?: SqlCommandTableRelated_ConstructProps): void
}

interface SqlCommandUpdate_ConstructProps extends GObject.Object_ConstructProps, SqlCommandTableRelated_ConstructProps, SqlCommandModification_ConstructProps, SqlCommandConditional_ConstructProps, SqlCommand_ConstructProps, SqlCommandParametrized_ConstructProps {
}

interface SqlCommandUpdate extends GObject.Object, SqlCommandTableRelated, SqlCommandModification, SqlCommandConditional, SqlCommand, SqlCommandParametrized {

    // Owm methods of Vda-1.Vda.SqlCommandUpdate

    stringify(): string
    to_query(name?: string | null): Query
    parse(sql: string): void

    // Own virtual methods of Vda-1.Vda.SqlCommandUpdate

    vfunc_stringify(): string
    vfunc_to_query(name?: string | null): Query
    vfunc_parse(sql: string): void

    // Class property signals of Vda-1.Vda.SqlCommandUpdate

    connect(sigName: "notify::table", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::condition", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlCommandUpdate {

    // Own properties of Vda-1.Vda.SqlCommandUpdate

    static name: string
    static $gtype: GObject.GType<SqlCommandUpdate>

    // Constructors of Vda-1.Vda.SqlCommandUpdate

    constructor(config?: SqlCommandUpdate_ConstructProps) 
    _init(config?: SqlCommandUpdate_ConstructProps): void
}

interface SqlExpression_ConstructProps extends GObject.Object_ConstructProps, Gio.ListModel_ConstructProps {
}

interface SqlExpression extends GObject.Object, Gio.ListModel {

    // Owm methods of Vda-1.Vda.SqlExpression

    add_expression(exp: SqlExpression): void
    remove_expression(exp: SqlExpression): void
    to_string(): string
    add_math_expression(str: string, cnc: Connection, params?: SqlParameters | null): void

    // Own virtual methods of Vda-1.Vda.SqlExpression

    vfunc_add_expression(exp: SqlExpression): void
    vfunc_remove_expression(exp: SqlExpression): void
    vfunc_to_string(): string
    vfunc_add_math_expression(str: string, cnc: Connection, params?: SqlParameters | null): void

    // Class property signals of Vda-1.Vda.SqlExpression

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpression {

    // Own properties of Vda-1.Vda.SqlExpression

    static name: string
    static $gtype: GObject.GType<SqlExpression>

    // Constructors of Vda-1.Vda.SqlExpression

    constructor(config?: SqlExpression_ConstructProps) 
    _init(config?: SqlExpression_ConstructProps): void
    static parse(str: string, cnc: Connection, params?: SqlParameters | null): SqlExpression
}

interface SqlExpressionField_ConstructProps extends GObject.Object_ConstructProps, SqlExpression_ConstructProps {

    // Own constructor properties of Vda-1.Vda.SqlExpressionField

    table_ref?: string | null
    name?: string | null
    allias?: string | null
}

interface SqlExpressionField extends GObject.Object, SqlExpression {

    // Own properties of Vda-1.Vda.SqlExpressionField

    table_ref: string
    name: string
    allias: string

    // Owm methods of Vda-1.Vda.SqlExpressionField

    get_table_ref(): string
    set_table_ref(value: string): void
    get_name(): string
    set_name(value: string): void
    get_allias(): string | null
    set_allias(value?: string | null): void

    // Own virtual methods of Vda-1.Vda.SqlExpressionField

    vfunc_get_table_ref(): string
    vfunc_set_table_ref(value: string): void
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_allias(): string | null
    vfunc_set_allias(value?: string | null): void

    // Class property signals of Vda-1.Vda.SqlExpressionField

    connect(sigName: "notify::table-ref", callback: (($obj: SqlExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table-ref", callback: (($obj: SqlExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table-ref", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: SqlExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: SqlExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionField {

    // Own properties of Vda-1.Vda.SqlExpressionField

    static name: string
    static $gtype: GObject.GType<SqlExpressionField>

    // Constructors of Vda-1.Vda.SqlExpressionField

    constructor(config?: SqlExpressionField_ConstructProps) 
    _init(config?: SqlExpressionField_ConstructProps): void
}

interface SqlExpressionOperator_ConstructProps extends GObject.Object_ConstructProps, SqlExpression_ConstructProps {
}

interface SqlExpressionOperator extends GObject.Object, SqlExpression {

    // Own properties of Vda-1.Vda.SqlExpressionOperator

    readonly operator_type: SqlExpressionOperatorType

    // Owm methods of Vda-1.Vda.SqlExpressionOperator

    create_field_expression(name: string): SqlExpressionField
    create_value_expression(val: any | null, cnc: Connection): SqlExpressionValue
    create_parameter_expression(name: string, gtype: GObject.GType): SqlExpressionValueParameter
    add_and_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_or_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_eq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_diff_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_like_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_gt_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_geq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_leq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_similar_to_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_is_null_operator(exp1: SqlExpression): SqlExpressionOperator
    add_is_not_null_operator(exp1: SqlExpression): SqlExpressionOperator
    add_not_operator(exp: SqlExpression): SqlExpressionOperator
    add_is_true_operator(exp1: SqlExpression): SqlExpressionOperator
    add_is_not_true_operator(exp1: SqlExpression): SqlExpressionOperator
    add_is_false_operator(exp1: SqlExpression): SqlExpressionOperator
    add_is_not_false_operator(exp1: SqlExpression): SqlExpressionOperator
    add_is_unknown_operator(exp1: SqlExpression): SqlExpressionOperator
    add_is_not_unknown_operator(exp1: SqlExpression): SqlExpressionOperator
    add_in_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_not_in_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_concatenate_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_plus_operator(exp1: SqlExpression, exp2?: SqlExpression | null): SqlExpressionOperator
    add_minus_operator(exp1: SqlExpression, exp2?: SqlExpression | null): SqlExpressionOperator
    add_star_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_div_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_regexp_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_between_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    add_not_between_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    add_between_symmetric_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    add_not_between_symmetric_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    add_is_distinct_from_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_is_not_distinct_from_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    get_operator_type(): SqlExpressionOperatorType

    // Own virtual methods of Vda-1.Vda.SqlExpressionOperator

    vfunc_create_field_expression(name: string): SqlExpressionField
    vfunc_create_value_expression(val: any | null, cnc: Connection): SqlExpressionValue
    vfunc_create_parameter_expression(name: string, gtype: GObject.GType): SqlExpressionValueParameter
    vfunc_add_and_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_or_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_eq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_diff_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_like_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_gt_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_geq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_leq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_similar_to_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_is_null_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_is_not_null_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_not_operator(exp: SqlExpression): SqlExpressionOperator
    vfunc_add_is_true_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_is_not_true_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_is_false_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_is_not_false_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_is_unknown_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_is_not_unknown_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_in_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_not_in_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_concatenate_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_plus_operator(exp1: SqlExpression, exp2?: SqlExpression | null): SqlExpressionOperator
    vfunc_add_minus_operator(exp1: SqlExpression, exp2?: SqlExpression | null): SqlExpressionOperator
    vfunc_add_star_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_div_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_regexp_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_between_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    vfunc_add_not_between_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    vfunc_add_between_symmetric_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    vfunc_add_not_between_symmetric_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    vfunc_add_is_distinct_from_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_is_not_distinct_from_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_get_operator_type(): SqlExpressionOperatorType

    // Class property signals of Vda-1.Vda.SqlExpressionOperator

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperator {

    // Own properties of Vda-1.Vda.SqlExpressionOperator

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperator>

    // Constructors of Vda-1.Vda.SqlExpressionOperator

    constructor(config?: SqlExpressionOperator_ConstructProps) 
    _init(config?: SqlExpressionOperator_ConstructProps): void
}

interface SqlExpressionOperatorGroup_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperator_ConstructProps {
}

interface SqlExpressionOperatorGroup extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorGroup

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorGroup {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGroup

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorGroup>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorGroup

    constructor(config?: SqlExpressionOperatorGroup_ConstructProps) 
    _init(config?: SqlExpressionOperatorGroup_ConstructProps): void
}

interface SqlExpressionOperatorMultiterm_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperator_ConstructProps {
}

interface SqlExpressionOperatorMultiterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorMultiterm

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorMultiterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorMultiterm

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorMultiterm>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorMultiterm

    constructor(config?: SqlExpressionOperatorMultiterm_ConstructProps) 
    _init(config?: SqlExpressionOperatorMultiterm_ConstructProps): void
}

interface SqlExpressionOperatorAnd_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorMultiterm_ConstructProps {
}

interface SqlExpressionOperatorAnd extends GObject.Object, SqlExpressionOperatorMultiterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorAnd

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorAnd

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorAnd>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorAnd

    constructor(config?: SqlExpressionOperatorAnd_ConstructProps) 
    _init(config?: SqlExpressionOperatorAnd_ConstructProps): void
}

interface SqlExpressionOperatorOr_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorMultiterm_ConstructProps {
}

interface SqlExpressionOperatorOr extends GObject.Object, SqlExpressionOperatorMultiterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorOr

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorOr {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorOr

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorOr>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorOr

    constructor(config?: SqlExpressionOperatorOr_ConstructProps) 
    _init(config?: SqlExpressionOperatorOr_ConstructProps): void
}

interface SqlExpressionOperatorBinaryterm_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperator_ConstructProps {
}

interface SqlExpressionOperatorBinaryterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBinaryterm

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBinaryterm

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorBinaryterm>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBinaryterm

    constructor(config?: SqlExpressionOperatorBinaryterm_ConstructProps) 
    _init(config?: SqlExpressionOperatorBinaryterm_ConstructProps): void
}

interface SqlExpressionOperatorEq_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorEq extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorEq

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorEq {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorEq

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorEq>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorEq

    constructor(config?: SqlExpressionOperatorEq_ConstructProps) 
    _init(config?: SqlExpressionOperatorEq_ConstructProps): void
}

interface SqlExpressionOperatorNotEq_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorNotEq extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotEq

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorNotEq {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotEq

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotEq>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotEq

    constructor(config?: SqlExpressionOperatorNotEq_ConstructProps) 
    _init(config?: SqlExpressionOperatorNotEq_ConstructProps): void
}

interface SqlExpressionOperatorDiff_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorDiff extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorDiff

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorDiff {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorDiff

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorDiff>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorDiff

    constructor(config?: SqlExpressionOperatorDiff_ConstructProps) 
    _init(config?: SqlExpressionOperatorDiff_ConstructProps): void
}

interface SqlExpressionOperatorGt_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorGt extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorGt

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorGt {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGt

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorGt>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorGt

    constructor(config?: SqlExpressionOperatorGt_ConstructProps) 
    _init(config?: SqlExpressionOperatorGt_ConstructProps): void
}

interface SqlExpressionOperatorLt_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorLt extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorLt

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorLt {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLt

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorLt>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorLt

    constructor(config?: SqlExpressionOperatorLt_ConstructProps) 
    _init(config?: SqlExpressionOperatorLt_ConstructProps): void
}

interface SqlExpressionOperatorGeq_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorGeq extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorGeq

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorGeq {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGeq

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorGeq>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorGeq

    constructor(config?: SqlExpressionOperatorGeq_ConstructProps) 
    _init(config?: SqlExpressionOperatorGeq_ConstructProps): void
}

interface SqlExpressionOperatorLeq_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorLeq extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorLeq

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorLeq {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLeq

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorLeq>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorLeq

    constructor(config?: SqlExpressionOperatorLeq_ConstructProps) 
    _init(config?: SqlExpressionOperatorLeq_ConstructProps): void
}

interface SqlExpressionOperatorRegexp_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorRegexp extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorRegexp

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorRegexp {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorRegexp

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorRegexp>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorRegexp

    constructor(config?: SqlExpressionOperatorRegexp_ConstructProps) 
    _init(config?: SqlExpressionOperatorRegexp_ConstructProps): void
}

interface SqlExpressionOperatorStar_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorStar extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorStar

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorStar {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorStar

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorStar>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorStar

    constructor(config?: SqlExpressionOperatorStar_ConstructProps) 
    _init(config?: SqlExpressionOperatorStar_ConstructProps): void
}

interface SqlExpressionOperatorDiv_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorDiv extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorDiv

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorDiv {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorDiv

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorDiv>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorDiv

    constructor(config?: SqlExpressionOperatorDiv_ConstructProps) 
    _init(config?: SqlExpressionOperatorDiv_ConstructProps): void
}

interface SqlExpressionOperatorIn_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorIn extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIn

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIn {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIn

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIn>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIn

    constructor(config?: SqlExpressionOperatorIn_ConstructProps) 
    _init(config?: SqlExpressionOperatorIn_ConstructProps): void
}

interface SqlExpressionOperatorNotIn_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorNotIn extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotIn

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorNotIn {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotIn

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotIn>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotIn

    constructor(config?: SqlExpressionOperatorNotIn_ConstructProps) 
    _init(config?: SqlExpressionOperatorNotIn_ConstructProps): void
}

interface SqlExpressionOperatorConcatenate_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorConcatenate extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorConcatenate

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorConcatenate {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorConcatenate

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorConcatenate>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorConcatenate

    constructor(config?: SqlExpressionOperatorConcatenate_ConstructProps) 
    _init(config?: SqlExpressionOperatorConcatenate_ConstructProps): void
}

interface SqlExpressionOperatorSimilarTo_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorSimilarTo extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorSimilarTo

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorSimilarTo {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorSimilarTo

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorSimilarTo>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorSimilarTo

    constructor(config?: SqlExpressionOperatorSimilarTo_ConstructProps) 
    _init(config?: SqlExpressionOperatorSimilarTo_ConstructProps): void
}

interface SqlExpressionOperatorLike_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorLike extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorLike

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorLike {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLike

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorLike>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorLike

    constructor(config?: SqlExpressionOperatorLike_ConstructProps) 
    _init(config?: SqlExpressionOperatorLike_ConstructProps): void
}

interface SqlExpressionOperatorNotLike_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorNotLike extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotLike

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorNotLike {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotLike

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotLike>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotLike

    constructor(config?: SqlExpressionOperatorNotLike_ConstructProps) 
    _init(config?: SqlExpressionOperatorNotLike_ConstructProps): void
}

interface SqlExpressionOperatorIlike_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorIlike extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIlike

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIlike {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIlike

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIlike>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIlike

    constructor(config?: SqlExpressionOperatorIlike_ConstructProps) 
    _init(config?: SqlExpressionOperatorIlike_ConstructProps): void
}

interface SqlExpressionOperatorNotIlike_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorNotIlike extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotIlike

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorNotIlike {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotIlike

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotIlike>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotIlike

    constructor(config?: SqlExpressionOperatorNotIlike_ConstructProps) 
    _init(config?: SqlExpressionOperatorNotIlike_ConstructProps): void
}

interface SqlExpressionOperatorBinaryUnaryterm_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperator_ConstructProps {
}

interface SqlExpressionOperatorBinaryUnaryterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBinaryUnaryterm

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorBinaryUnaryterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBinaryUnaryterm

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorBinaryUnaryterm>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBinaryUnaryterm

    constructor(config?: SqlExpressionOperatorBinaryUnaryterm_ConstructProps) 
    _init(config?: SqlExpressionOperatorBinaryUnaryterm_ConstructProps): void
}

interface SqlExpressionOperatorMinus_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryUnaryterm_ConstructProps {
}

interface SqlExpressionOperatorMinus extends GObject.Object, SqlExpressionOperatorBinaryUnaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorMinus

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorMinus {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorMinus

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorMinus>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorMinus

    constructor(config?: SqlExpressionOperatorMinus_ConstructProps) 
    _init(config?: SqlExpressionOperatorMinus_ConstructProps): void
}

interface SqlExpressionOperatorPlus_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryUnaryterm_ConstructProps {
}

interface SqlExpressionOperatorPlus extends GObject.Object, SqlExpressionOperatorBinaryUnaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorPlus

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorPlus {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorPlus

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorPlus>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorPlus

    constructor(config?: SqlExpressionOperatorPlus_ConstructProps) 
    _init(config?: SqlExpressionOperatorPlus_ConstructProps): void
}

interface SqlExpressionOperatorInitialUnaryterm_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperator_ConstructProps {
}

interface SqlExpressionOperatorInitialUnaryterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorInitialUnaryterm

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorInitialUnaryterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorInitialUnaryterm

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorInitialUnaryterm>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorInitialUnaryterm

    constructor(config?: SqlExpressionOperatorInitialUnaryterm_ConstructProps) 
    _init(config?: SqlExpressionOperatorInitialUnaryterm_ConstructProps): void
}

interface SqlExpressionOperatorNot_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorInitialUnaryterm_ConstructProps {
}

interface SqlExpressionOperatorNot extends GObject.Object, SqlExpressionOperatorInitialUnaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNot

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorNot {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNot

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNot>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNot

    constructor(config?: SqlExpressionOperatorNot_ConstructProps) 
    _init(config?: SqlExpressionOperatorNot_ConstructProps): void
}

interface SqlExpressionOperatorFinalUnaryterm_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperator_ConstructProps {
}

interface SqlExpressionOperatorFinalUnaryterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorFinalUnaryterm

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorFinalUnaryterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorFinalUnaryterm

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorFinalUnaryterm>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorFinalUnaryterm

    constructor(config?: SqlExpressionOperatorFinalUnaryterm_ConstructProps) 
    _init(config?: SqlExpressionOperatorFinalUnaryterm_ConstructProps): void
}

interface SqlExpressionOperatorIs_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorFinalUnaryterm_ConstructProps {
}

interface SqlExpressionOperatorIs extends GObject.Object, SqlExpressionOperatorFinalUnaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIs

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIs {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIs

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIs>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIs

    constructor(config?: SqlExpressionOperatorIs_ConstructProps) 
    _init(config?: SqlExpressionOperatorIs_ConstructProps): void
}

interface SqlExpressionOperatorIsNot_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorIs_ConstructProps {
}

interface SqlExpressionOperatorIsNot extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNot

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNot

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNot>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNot

    constructor(config?: SqlExpressionOperatorIsNot_ConstructProps) 
    _init(config?: SqlExpressionOperatorIsNot_ConstructProps): void
}

interface SqlExpressionOperatorIsNull_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorIs_ConstructProps {
}

interface SqlExpressionOperatorIsNull extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNull

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIsNull {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNull

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNull>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNull

    constructor(config?: SqlExpressionOperatorIsNull_ConstructProps) 
    _init(config?: SqlExpressionOperatorIsNull_ConstructProps): void
}

interface SqlExpressionOperatorIsNotNull_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorIsNot_ConstructProps {
}

interface SqlExpressionOperatorIsNotNull extends GObject.Object, SqlExpressionOperatorIsNot {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotNull

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIsNotNull {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotNull

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNotNull>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotNull

    constructor(config?: SqlExpressionOperatorIsNotNull_ConstructProps) 
    _init(config?: SqlExpressionOperatorIsNotNull_ConstructProps): void
}

interface SqlExpressionOperatorIsTrue_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorIs_ConstructProps {
}

interface SqlExpressionOperatorIsTrue extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsTrue

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIsTrue {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsTrue

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsTrue>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsTrue

    constructor(config?: SqlExpressionOperatorIsTrue_ConstructProps) 
    _init(config?: SqlExpressionOperatorIsTrue_ConstructProps): void
}

interface SqlExpressionOperatorIsNotTrue_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorIsNot_ConstructProps {
}

interface SqlExpressionOperatorIsNotTrue extends GObject.Object, SqlExpressionOperatorIsNot {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotTrue

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIsNotTrue {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotTrue

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNotTrue>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotTrue

    constructor(config?: SqlExpressionOperatorIsNotTrue_ConstructProps) 
    _init(config?: SqlExpressionOperatorIsNotTrue_ConstructProps): void
}

interface SqlExpressionOperatorIsFalse_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorIs_ConstructProps {
}

interface SqlExpressionOperatorIsFalse extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsFalse

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIsFalse {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsFalse

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsFalse>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsFalse

    constructor(config?: SqlExpressionOperatorIsFalse_ConstructProps) 
    _init(config?: SqlExpressionOperatorIsFalse_ConstructProps): void
}

interface SqlExpressionOperatorIsNotFalse_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorIsNot_ConstructProps {
}

interface SqlExpressionOperatorIsNotFalse extends GObject.Object, SqlExpressionOperatorIsNot {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotFalse

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIsNotFalse {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotFalse

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNotFalse>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotFalse

    constructor(config?: SqlExpressionOperatorIsNotFalse_ConstructProps) 
    _init(config?: SqlExpressionOperatorIsNotFalse_ConstructProps): void
}

interface SqlExpressionOperatorIsUnknown_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorIs_ConstructProps {
}

interface SqlExpressionOperatorIsUnknown extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsUnknown

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIsUnknown {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsUnknown

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsUnknown>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsUnknown

    constructor(config?: SqlExpressionOperatorIsUnknown_ConstructProps) 
    _init(config?: SqlExpressionOperatorIsUnknown_ConstructProps): void
}

interface SqlExpressionOperatorIsNotUnknown_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorIs_ConstructProps {
}

interface SqlExpressionOperatorIsNotUnknown extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotUnknown

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIsNotUnknown {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotUnknown

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNotUnknown>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotUnknown

    constructor(config?: SqlExpressionOperatorIsNotUnknown_ConstructProps) 
    _init(config?: SqlExpressionOperatorIsNotUnknown_ConstructProps): void
}

interface SqlExpressionOperatorIsDistinct_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBinaryterm_ConstructProps {
}

interface SqlExpressionOperatorIsDistinct extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsDistinct

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIsDistinct {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsDistinct

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsDistinct>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsDistinct

    constructor(config?: SqlExpressionOperatorIsDistinct_ConstructProps) 
    _init(config?: SqlExpressionOperatorIsDistinct_ConstructProps): void
}

interface SqlExpressionOperatorIsNotDistinct_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorIsDistinct_ConstructProps {
}

interface SqlExpressionOperatorIsNotDistinct extends GObject.Object, SqlExpressionOperatorIsDistinct {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotDistinct

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIsNotDistinct {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotDistinct

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNotDistinct>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotDistinct

    constructor(config?: SqlExpressionOperatorIsNotDistinct_ConstructProps) 
    _init(config?: SqlExpressionOperatorIsNotDistinct_ConstructProps): void
}

interface SqlExpressionOperatorIsDistinctFrom_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorIsDistinct_ConstructProps {
}

interface SqlExpressionOperatorIsDistinctFrom extends GObject.Object, SqlExpressionOperatorIsDistinct {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsDistinctFrom

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIsDistinctFrom {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsDistinctFrom

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsDistinctFrom>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsDistinctFrom

    constructor(config?: SqlExpressionOperatorIsDistinctFrom_ConstructProps) 
    _init(config?: SqlExpressionOperatorIsDistinctFrom_ConstructProps): void
}

interface SqlExpressionOperatorIsNotDistinctFrom_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorIsNotDistinct_ConstructProps {
}

interface SqlExpressionOperatorIsNotDistinctFrom extends GObject.Object, SqlExpressionOperatorIsNotDistinct {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctFrom

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorIsNotDistinctFrom {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctFrom

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNotDistinctFrom>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctFrom

    constructor(config?: SqlExpressionOperatorIsNotDistinctFrom_ConstructProps) 
    _init(config?: SqlExpressionOperatorIsNotDistinctFrom_ConstructProps): void
}

interface SqlExpressionOperatorThreeterm_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperator_ConstructProps {
}

interface SqlExpressionOperatorThreeterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorThreeterm

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorThreeterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorThreeterm

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorThreeterm>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorThreeterm

    constructor(config?: SqlExpressionOperatorThreeterm_ConstructProps) 
    _init(config?: SqlExpressionOperatorThreeterm_ConstructProps): void
}

interface SqlExpressionOperatorBetween_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorThreeterm_ConstructProps {
}

interface SqlExpressionOperatorBetween extends GObject.Object, SqlExpressionOperatorThreeterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBetween

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorBetween {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetween

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorBetween>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBetween

    constructor(config?: SqlExpressionOperatorBetween_ConstructProps) 
    _init(config?: SqlExpressionOperatorBetween_ConstructProps): void
}

interface SqlExpressionOperatorBetweenAnd_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBetween_ConstructProps {
}

interface SqlExpressionOperatorBetweenAnd extends GObject.Object, SqlExpressionOperatorBetween {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBetweenAnd

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorBetweenAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenAnd

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorBetweenAnd>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBetweenAnd

    constructor(config?: SqlExpressionOperatorBetweenAnd_ConstructProps) 
    _init(config?: SqlExpressionOperatorBetweenAnd_ConstructProps): void
}

interface SqlExpressionOperatorNotBetween_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBetween_ConstructProps {
}

interface SqlExpressionOperatorNotBetween extends GObject.Object, SqlExpressionOperatorBetween {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotBetween

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorNotBetween {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetween

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotBetween>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotBetween

    constructor(config?: SqlExpressionOperatorNotBetween_ConstructProps) 
    _init(config?: SqlExpressionOperatorNotBetween_ConstructProps): void
}

interface SqlExpressionOperatorNotBetweenAnd_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorNotBetween_ConstructProps {
}

interface SqlExpressionOperatorNotBetweenAnd extends GObject.Object, SqlExpressionOperatorNotBetween {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotBetweenAnd

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorNotBetweenAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenAnd

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotBetweenAnd>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotBetweenAnd

    constructor(config?: SqlExpressionOperatorNotBetweenAnd_ConstructProps) 
    _init(config?: SqlExpressionOperatorNotBetweenAnd_ConstructProps): void
}

interface SqlExpressionOperatorBetweenSymmetric_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBetween_ConstructProps {
}

interface SqlExpressionOperatorBetweenSymmetric extends GObject.Object, SqlExpressionOperatorBetween {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetric

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorBetweenSymmetric {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetric

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorBetweenSymmetric>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetric

    constructor(config?: SqlExpressionOperatorBetweenSymmetric_ConstructProps) 
    _init(config?: SqlExpressionOperatorBetweenSymmetric_ConstructProps): void
}

interface SqlExpressionOperatorBetweenSymmetricAnd_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBetweenSymmetric_ConstructProps {
}

interface SqlExpressionOperatorBetweenSymmetricAnd extends GObject.Object, SqlExpressionOperatorBetweenSymmetric {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricAnd

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorBetweenSymmetricAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricAnd

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorBetweenSymmetricAnd>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricAnd

    constructor(config?: SqlExpressionOperatorBetweenSymmetricAnd_ConstructProps) 
    _init(config?: SqlExpressionOperatorBetweenSymmetricAnd_ConstructProps): void
}

interface SqlExpressionOperatorNotBetweenSymmetric_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorBetweenSymmetric_ConstructProps {
}

interface SqlExpressionOperatorNotBetweenSymmetric extends GObject.Object, SqlExpressionOperatorBetweenSymmetric {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetric

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorNotBetweenSymmetric {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetric

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotBetweenSymmetric>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetric

    constructor(config?: SqlExpressionOperatorNotBetweenSymmetric_ConstructProps) 
    _init(config?: SqlExpressionOperatorNotBetweenSymmetric_ConstructProps): void
}

interface SqlExpressionOperatorNotBetweenSymmetricAnd_ConstructProps extends GObject.Object_ConstructProps, SqlExpressionOperatorNotBetweenSymmetric_ConstructProps {
}

interface SqlExpressionOperatorNotBetweenSymmetricAnd extends GObject.Object, SqlExpressionOperatorNotBetweenSymmetric {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricAnd

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionOperatorNotBetweenSymmetricAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricAnd

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotBetweenSymmetricAnd>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricAnd

    constructor(config?: SqlExpressionOperatorNotBetweenSymmetricAnd_ConstructProps) 
    _init(config?: SqlExpressionOperatorNotBetweenSymmetricAnd_ConstructProps): void
}

interface SqlExpressionValue_ConstructProps extends GObject.Object_ConstructProps, SqlExpression_ConstructProps {

    // Own constructor properties of Vda-1.Vda.SqlExpressionValue

    connection?: Connection | null
    value?: SqlValue | null
}

interface SqlExpressionValue extends GObject.Object, SqlExpression {

    // Own properties of Vda-1.Vda.SqlExpressionValue

    connection: Connection
    value: SqlValue

    // Owm methods of Vda-1.Vda.SqlExpressionValue

    set_math_expression_value(str: string, params?: SqlParameters | null): void
    get_connection(): Connection | null
    set_connection(value?: Connection | null): void
    get_value(): SqlValue
    set_value(value: SqlValue): void

    // Own virtual methods of Vda-1.Vda.SqlExpressionValue

    vfunc_set_math_expression_value(str: string, params?: SqlParameters | null): void
    vfunc_get_connection(): Connection | null
    vfunc_set_connection(value?: Connection | null): void
    vfunc_get_value(): SqlValue
    vfunc_set_value(value: SqlValue): void

    // Class property signals of Vda-1.Vda.SqlExpressionValue

    connect(sigName: "notify::connection", callback: (($obj: SqlExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: SqlExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: SqlExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionValue {

    // Own properties of Vda-1.Vda.SqlExpressionValue

    static name: string
    static $gtype: GObject.GType<SqlExpressionValue>

    // Constructors of Vda-1.Vda.SqlExpressionValue

    constructor(config?: SqlExpressionValue_ConstructProps) 
    _init(config?: SqlExpressionValue_ConstructProps): void
}

interface SqlExpressionValueParameter_ConstructProps extends GObject.Object_ConstructProps, SqlExpression_ConstructProps, SqlExpressionValue_ConstructProps {

    // Own constructor properties of Vda-1.Vda.SqlExpressionValueParameter

    parameters?: SqlParameters | null
    name?: string | null
    gtype?: GObject.GType | null
}

interface SqlExpressionValueParameter extends GObject.Object, SqlExpression, SqlExpressionValue {

    // Own properties of Vda-1.Vda.SqlExpressionValueParameter

    parameters: SqlParameters
    name: string
    gtype: GObject.GType

    // Owm methods of Vda-1.Vda.SqlExpressionValueParameter

    parse(str: string): void
    get_parameters(): SqlParameters
    set_parameters(value: SqlParameters): void
    get_name(): string
    set_name(value: string): void
    get_gtype(): GObject.GType
    set_gtype(value: GObject.GType): void

    // Own virtual methods of Vda-1.Vda.SqlExpressionValueParameter

    vfunc_parse(str: string): void
    vfunc_get_parameters(): SqlParameters
    vfunc_set_parameters(value: SqlParameters): void
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_gtype(): GObject.GType
    vfunc_set_gtype(value: GObject.GType): void

    // Class property signals of Vda-1.Vda.SqlExpressionValueParameter

    connect(sigName: "notify::parameters", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::gtype", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtype", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gtype", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlExpressionValueParameter {

    // Own properties of Vda-1.Vda.SqlExpressionValueParameter

    static name: string
    static $gtype: GObject.GType<SqlExpressionValueParameter>

    // Constructors of Vda-1.Vda.SqlExpressionValueParameter

    constructor(config?: SqlExpressionValueParameter_ConstructProps) 
    _init(config?: SqlExpressionValueParameter_ConstructProps): void
    static gtype_from_string(str: string): GObject.GType
}

interface SqlParameters_ConstructProps extends GObject.Object_ConstructProps {
}

interface SqlParameters extends GObject.Object {

    // Owm methods of Vda-1.Vda.SqlParameters

    set_value(name: string, val: any): void
    get_value(name: string): any | null
    set_sql_value(name: string, val: SqlValue): void
    get_sql_value(name: string): SqlValue
    has_param(name: string): boolean

    // Own virtual methods of Vda-1.Vda.SqlParameters

    vfunc_set_value(name: string, val: any): void
    vfunc_get_value(name: string): any | null
    vfunc_set_sql_value(name: string, val: SqlValue): void
    vfunc_get_sql_value(name: string): SqlValue
    vfunc_has_param(name: string): boolean

    // Class property signals of Vda-1.Vda.SqlParameters

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlParameters {

    // Own properties of Vda-1.Vda.SqlParameters

    static name: string
    static $gtype: GObject.GType<SqlParameters>

    // Constructors of Vda-1.Vda.SqlParameters

    constructor(config?: SqlParameters_ConstructProps) 
    _init(config?: SqlParameters_ConstructProps): void
}

interface SqlParser_ConstructProps extends GObject.Object_ConstructProps {
}

interface SqlParser extends GObject.Object {

    // Owm methods of Vda-1.Vda.SqlParser

    parse(str: string, cnc: Connection): SqlCommandParametrized

    // Own virtual methods of Vda-1.Vda.SqlParser

    vfunc_parse(str: string, cnc: Connection): SqlCommandParametrized

    // Class property signals of Vda-1.Vda.SqlParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlParser {

    // Own properties of Vda-1.Vda.SqlParser

    static name: string
    static $gtype: GObject.GType<SqlParser>

    // Constructors of Vda-1.Vda.SqlParser

    constructor(config?: SqlParser_ConstructProps) 
    _init(config?: SqlParser_ConstructProps): void
}

interface SqlTableReference_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Vda-1.Vda.SqlTableReference

    name?: string | null
    allias?: string | null
}

interface SqlTableReference extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlTableReference

    name: string
    allias: string

    // Owm methods of Vda-1.Vda.SqlTableReference

    get_name(): string
    set_name(value: string): void
    get_allias(): string | null
    set_allias(value?: string | null): void

    // Own virtual methods of Vda-1.Vda.SqlTableReference

    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_allias(): string | null
    vfunc_set_allias(value?: string | null): void

    // Class property signals of Vda-1.Vda.SqlTableReference

    connect(sigName: "notify::name", callback: (($obj: SqlTableReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlTableReference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: SqlTableReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: SqlTableReference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlTableReference {

    // Own properties of Vda-1.Vda.SqlTableReference

    static name: string
    static $gtype: GObject.GType<SqlTableReference>

    // Constructors of Vda-1.Vda.SqlTableReference

    constructor(config?: SqlTableReference_ConstructProps) 
    _init(config?: SqlTableReference_ConstructProps): void
}

interface Stringifiable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Stringifiable extends GObject.Object {

    // Owm methods of Vda-1.Vda.Stringifiable

    to_string(): string

    // Own virtual methods of Vda-1.Vda.Stringifiable

    vfunc_to_string(): string

    // Class property signals of Vda-1.Vda.Stringifiable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Stringifiable {

    // Own properties of Vda-1.Vda.Stringifiable

    static name: string
    static $gtype: GObject.GType<Stringifiable>

    // Constructors of Vda-1.Vda.Stringifiable

    constructor(config?: Stringifiable_ConstructProps) 
    _init(config?: Stringifiable_ConstructProps): void
}

interface SqlValue_ConstructProps extends GObject.Object_ConstructProps, Stringifiable_ConstructProps {
}

interface SqlValue extends GObject.Object, Stringifiable {

    // Own properties of Vda-1.Vda.SqlValue

    readonly name: string

    // Owm methods of Vda-1.Vda.SqlValue

    parse(str: string): boolean
    from_value(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    is_compatible(type: GObject.GType): boolean
    to_gvalue(): /* result */ any
    to_string_quoted(): string
    to_sql_expression(): string
    get_name(): string

    // Own virtual methods of Vda-1.Vda.SqlValue

    vfunc_parse(str: string): boolean
    vfunc_from_value(val: any): boolean
    vfunc_cast(type: GObject.GType): SqlValue | null
    vfunc_is_compatible(type: GObject.GType): boolean
    vfunc_to_gvalue(): /* result */ any
    vfunc_to_string_quoted(): string
    vfunc_to_sql_expression(): string
    vfunc_get_name(): string

    // Class property signals of Vda-1.Vda.SqlValue

    connect(sigName: "notify::name", callback: (($obj: SqlValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValue {

    // Own properties of Vda-1.Vda.SqlValue

    static name: string
    static $gtype: GObject.GType<SqlValue>

    // Constructors of Vda-1.Vda.SqlValue

    constructor(config?: SqlValue_ConstructProps) 
    _init(config?: SqlValue_ConstructProps): void
    static new_from_gvalue(val?: any | null): SqlValue
    static new_from_gtype(type: GObject.GType): SqlValue | null
}

interface SqlValueNull_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps {
}

interface SqlValueNull extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueNull

    connect(sigName: "notify::name", callback: (($obj: SqlValueNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueNull {

    // Own properties of Vda-1.Vda.SqlValueNull

    static name: string
    static $gtype: GObject.GType<SqlValueNull>

    // Constructors of Vda-1.Vda.SqlValueNull

    constructor(config?: SqlValueNull_ConstructProps) 
    _init(config?: SqlValueNull_ConstructProps): void
}

interface SqlValueBool_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps {
}

interface SqlValueBool extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueBool

    connect(sigName: "notify::name", callback: (($obj: SqlValueBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueBool {

    // Own properties of Vda-1.Vda.SqlValueBool

    static name: string
    static $gtype: GObject.GType<SqlValueBool>

    // Constructors of Vda-1.Vda.SqlValueBool

    constructor(config?: SqlValueBool_ConstructProps) 
    _init(config?: SqlValueBool_ConstructProps): void
}

interface SqlValueBit_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps {
}

interface SqlValueBit extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueBit

    connect(sigName: "notify::name", callback: (($obj: SqlValueBit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueBit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueBit {

    // Own properties of Vda-1.Vda.SqlValueBit

    static name: string
    static $gtype: GObject.GType<SqlValueBit>

    // Constructors of Vda-1.Vda.SqlValueBit

    constructor(config?: SqlValueBit_ConstructProps) 
    _init(config?: SqlValueBit_ConstructProps): void
}

interface SqlValueString_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps {
}

interface SqlValueString extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueString

    connect(sigName: "notify::name", callback: (($obj: SqlValueString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueString {

    // Own properties of Vda-1.Vda.SqlValueString

    static name: string
    static $gtype: GObject.GType<SqlValueString>

    // Constructors of Vda-1.Vda.SqlValueString

    constructor(config?: SqlValueString_ConstructProps) 
    _init(config?: SqlValueString_ConstructProps): void
}

interface SqlValueXml_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueString_ConstructProps {
}

interface SqlValueXml extends GObject.Object, SqlValue, SqlValueString {

    // Own properties of Vda-1.Vda.SqlValueXml

    readonly document: GXml.DomDocument

    // Owm methods of Vda-1.Vda.SqlValueXml

    get_document(): GXml.DomDocument

    // Own virtual methods of Vda-1.Vda.SqlValueXml

    vfunc_get_document(): GXml.DomDocument

    // Class property signals of Vda-1.Vda.SqlValueXml

    connect(sigName: "notify::document", callback: (($obj: SqlValueXml, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: SqlValueXml, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueXml, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueXml, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueXml {

    // Own properties of Vda-1.Vda.SqlValueXml

    static name: string
    static $gtype: GObject.GType<SqlValueXml>

    // Constructors of Vda-1.Vda.SqlValueXml

    constructor(config?: SqlValueXml_ConstructProps) 
    _init(config?: SqlValueXml_ConstructProps): void
}

interface SqlValueJson_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueString_ConstructProps {
}

interface SqlValueJson extends GObject.Object, SqlValue, SqlValueString {

    // Own properties of Vda-1.Vda.SqlValueJson

    readonly document: Json.Node

    // Owm methods of Vda-1.Vda.SqlValueJson

    get_document(): Json.Node

    // Own virtual methods of Vda-1.Vda.SqlValueJson

    vfunc_get_document(): Json.Node

    // Class property signals of Vda-1.Vda.SqlValueJson

    connect(sigName: "notify::document", callback: (($obj: SqlValueJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: SqlValueJson, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueJson, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueJson {

    // Own properties of Vda-1.Vda.SqlValueJson

    static name: string
    static $gtype: GObject.GType<SqlValueJson>

    // Constructors of Vda-1.Vda.SqlValueJson

    constructor(config?: SqlValueJson_ConstructProps) 
    _init(config?: SqlValueJson_ConstructProps): void
}

interface SqlValueText_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueString_ConstructProps {
}

interface SqlValueText extends GObject.Object, SqlValue, SqlValueString {

    // Class property signals of Vda-1.Vda.SqlValueText

    connect(sigName: "notify::name", callback: (($obj: SqlValueText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueText {

    // Own properties of Vda-1.Vda.SqlValueText

    static name: string
    static $gtype: GObject.GType<SqlValueText>

    // Constructors of Vda-1.Vda.SqlValueText

    constructor(config?: SqlValueText_ConstructProps) 
    _init(config?: SqlValueText_ConstructProps): void
}

interface SqlValueName_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueString_ConstructProps {
}

interface SqlValueName extends GObject.Object, SqlValue, SqlValueString {

    // Class property signals of Vda-1.Vda.SqlValueName

    connect(sigName: "notify::name", callback: (($obj: SqlValueName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueName {

    // Own properties of Vda-1.Vda.SqlValueName

    static name: string
    static $gtype: GObject.GType<SqlValueName>

    // Constructors of Vda-1.Vda.SqlValueName

    constructor(config?: SqlValueName_ConstructProps) 
    _init(config?: SqlValueName_ConstructProps): void
}

interface SqlValueInteger_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps {
}

interface SqlValueInteger extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueInteger

    connect(sigName: "notify::name", callback: (($obj: SqlValueInteger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueInteger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueInteger {

    // Own properties of Vda-1.Vda.SqlValueInteger

    static name: string
    static $gtype: GObject.GType<SqlValueInteger>

    // Constructors of Vda-1.Vda.SqlValueInteger

    constructor(config?: SqlValueInteger_ConstructProps) 
    _init(config?: SqlValueInteger_ConstructProps): void
}

interface SqlValueByte_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueInteger_ConstructProps {
}

interface SqlValueByte extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueByte

    connect(sigName: "notify::name", callback: (($obj: SqlValueByte, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueByte, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueByte {

    // Own properties of Vda-1.Vda.SqlValueByte

    static name: string
    static $gtype: GObject.GType<SqlValueByte>

    // Constructors of Vda-1.Vda.SqlValueByte

    constructor(config?: SqlValueByte_ConstructProps) 
    _init(config?: SqlValueByte_ConstructProps): void
}

interface SqlValueInt2_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueInteger_ConstructProps {
}

interface SqlValueInt2 extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueInt2

    connect(sigName: "notify::name", callback: (($obj: SqlValueInt2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueInt2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueInt2 {

    // Own properties of Vda-1.Vda.SqlValueInt2

    static name: string
    static $gtype: GObject.GType<SqlValueInt2>

    // Constructors of Vda-1.Vda.SqlValueInt2

    constructor(config?: SqlValueInt2_ConstructProps) 
    _init(config?: SqlValueInt2_ConstructProps): void
}

interface SqlValueInt4_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueInteger_ConstructProps {
}

interface SqlValueInt4 extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueInt4

    connect(sigName: "notify::name", callback: (($obj: SqlValueInt4, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueInt4, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueInt4 {

    // Own properties of Vda-1.Vda.SqlValueInt4

    static name: string
    static $gtype: GObject.GType<SqlValueInt4>

    // Constructors of Vda-1.Vda.SqlValueInt4

    constructor(config?: SqlValueInt4_ConstructProps) 
    _init(config?: SqlValueInt4_ConstructProps): void
}

interface SqlValueInt8_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueInteger_ConstructProps {
}

interface SqlValueInt8 extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueInt8

    connect(sigName: "notify::name", callback: (($obj: SqlValueInt8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueInt8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueInt8 {

    // Own properties of Vda-1.Vda.SqlValueInt8

    static name: string
    static $gtype: GObject.GType<SqlValueInt8>

    // Constructors of Vda-1.Vda.SqlValueInt8

    constructor(config?: SqlValueInt8_ConstructProps) 
    _init(config?: SqlValueInt8_ConstructProps): void
}

interface SqlValueUnsignedInteger_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps {
}

interface SqlValueUnsignedInteger extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedInteger

    connect(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInteger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInteger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueUnsignedInteger {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInteger

    static name: string
    static $gtype: GObject.GType<SqlValueUnsignedInteger>

    // Constructors of Vda-1.Vda.SqlValueUnsignedInteger

    constructor(config?: SqlValueUnsignedInteger_ConstructProps) 
    _init(config?: SqlValueUnsignedInteger_ConstructProps): void
}

interface SqlValueUnsignedByte_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueUnsignedInteger_ConstructProps {
}

interface SqlValueUnsignedByte extends GObject.Object, SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedByte

    connect(sigName: "notify::name", callback: (($obj: SqlValueUnsignedByte, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueUnsignedByte, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueUnsignedByte {

    // Own properties of Vda-1.Vda.SqlValueUnsignedByte

    static name: string
    static $gtype: GObject.GType<SqlValueUnsignedByte>

    // Constructors of Vda-1.Vda.SqlValueUnsignedByte

    constructor(config?: SqlValueUnsignedByte_ConstructProps) 
    _init(config?: SqlValueUnsignedByte_ConstructProps): void
}

interface SqlValueUnsignedInt2_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueUnsignedInteger_ConstructProps {
}

interface SqlValueUnsignedInt2 extends GObject.Object, SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedInt2

    connect(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInt2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInt2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueUnsignedInt2 {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt2

    static name: string
    static $gtype: GObject.GType<SqlValueUnsignedInt2>

    // Constructors of Vda-1.Vda.SqlValueUnsignedInt2

    constructor(config?: SqlValueUnsignedInt2_ConstructProps) 
    _init(config?: SqlValueUnsignedInt2_ConstructProps): void
}

interface SqlValueUnsignedInt4_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueUnsignedInteger_ConstructProps {
}

interface SqlValueUnsignedInt4 extends GObject.Object, SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedInt4

    connect(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInt4, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInt4, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueUnsignedInt4 {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt4

    static name: string
    static $gtype: GObject.GType<SqlValueUnsignedInt4>

    // Constructors of Vda-1.Vda.SqlValueUnsignedInt4

    constructor(config?: SqlValueUnsignedInt4_ConstructProps) 
    _init(config?: SqlValueUnsignedInt4_ConstructProps): void
}

interface SqlValueUnsignedInt8_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueUnsignedInteger_ConstructProps {
}

interface SqlValueUnsignedInt8 extends GObject.Object, SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedInt8

    connect(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInt8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInt8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueUnsignedInt8 {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt8

    static name: string
    static $gtype: GObject.GType<SqlValueUnsignedInt8>

    // Constructors of Vda-1.Vda.SqlValueUnsignedInt8

    constructor(config?: SqlValueUnsignedInt8_ConstructProps) 
    _init(config?: SqlValueUnsignedInt8_ConstructProps): void
}

interface SqlValueOid_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueInteger_ConstructProps {
}

interface SqlValueOid extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueOid

    connect(sigName: "notify::name", callback: (($obj: SqlValueOid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueOid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueOid {

    // Own properties of Vda-1.Vda.SqlValueOid

    static name: string
    static $gtype: GObject.GType<SqlValueOid>

    // Constructors of Vda-1.Vda.SqlValueOid

    constructor(config?: SqlValueOid_ConstructProps) 
    _init(config?: SqlValueOid_ConstructProps): void
}

interface SqlValueNumeric_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps {
}

interface SqlValueNumeric extends GObject.Object, SqlValue {

    // Owm methods of Vda-1.Vda.SqlValueNumeric

    set_precision(p: number): void
    get_precision(): number
    format(str: string): string
    get_double(): number
    set_double(v: number): void
    get_real(): number
    set_real(r: number): void
    get_imaginary(): number
    set_imaginary(img: number): void

    // Own virtual methods of Vda-1.Vda.SqlValueNumeric

    vfunc_set_precision(p: number): void
    vfunc_get_precision(): number
    vfunc_format(str: string): string
    vfunc_get_double(): number
    vfunc_set_double(v: number): void
    vfunc_get_real(): number
    vfunc_set_real(r: number): void
    vfunc_get_imaginary(): number
    vfunc_set_imaginary(img: number): void

    // Class property signals of Vda-1.Vda.SqlValueNumeric

    connect(sigName: "notify::name", callback: (($obj: SqlValueNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueNumeric {

    // Own properties of Vda-1.Vda.SqlValueNumeric

    static name: string
    static $gtype: GObject.GType<SqlValueNumeric>

    // Constructors of Vda-1.Vda.SqlValueNumeric

    constructor(config?: SqlValueNumeric_ConstructProps) 
    _init(config?: SqlValueNumeric_ConstructProps): void
}

interface SqlValueFloat_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueNumeric_ConstructProps {
}

interface SqlValueFloat extends GObject.Object, SqlValue, SqlValueNumeric {

    // Owm methods of Vda-1.Vda.SqlValueFloat

    get_float(): number

    // Own virtual methods of Vda-1.Vda.SqlValueFloat

    vfunc_get_float(): number

    // Class property signals of Vda-1.Vda.SqlValueFloat

    connect(sigName: "notify::name", callback: (($obj: SqlValueFloat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueFloat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueFloat {

    // Own properties of Vda-1.Vda.SqlValueFloat

    static name: string
    static $gtype: GObject.GType<SqlValueFloat>

    // Constructors of Vda-1.Vda.SqlValueFloat

    constructor(config?: SqlValueFloat_ConstructProps) 
    _init(config?: SqlValueFloat_ConstructProps): void
}

interface SqlValueDouble_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueNumeric_ConstructProps {
}

interface SqlValueDouble extends GObject.Object, SqlValue, SqlValueNumeric {

    // Class property signals of Vda-1.Vda.SqlValueDouble

    connect(sigName: "notify::name", callback: (($obj: SqlValueDouble, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueDouble, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueDouble {

    // Own properties of Vda-1.Vda.SqlValueDouble

    static name: string
    static $gtype: GObject.GType<SqlValueDouble>

    // Constructors of Vda-1.Vda.SqlValueDouble

    constructor(config?: SqlValueDouble_ConstructProps) 
    _init(config?: SqlValueDouble_ConstructProps): void
}

interface SqlValueMoney_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueNumeric_ConstructProps {
}

interface SqlValueMoney extends GObject.Object, SqlValue, SqlValueNumeric {

    // Owm methods of Vda-1.Vda.SqlValueMoney

    locale(): string
    int_locale(): string
    get_int_precision(): number
    set_int_precision(p: number): void

    // Own virtual methods of Vda-1.Vda.SqlValueMoney

    vfunc_locale(): string
    vfunc_int_locale(): string
    vfunc_get_int_precision(): number
    vfunc_set_int_precision(p: number): void

    // Class property signals of Vda-1.Vda.SqlValueMoney

    connect(sigName: "notify::name", callback: (($obj: SqlValueMoney, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueMoney, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueMoney {

    // Own properties of Vda-1.Vda.SqlValueMoney

    static name: string
    static $gtype: GObject.GType<SqlValueMoney>

    // Constructors of Vda-1.Vda.SqlValueMoney

    constructor(config?: SqlValueMoney_ConstructProps) 
    _init(config?: SqlValueMoney_ConstructProps): void
}

interface SqlValueDate_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps {
}

interface SqlValueDate extends GObject.Object, SqlValue {

    // Owm methods of Vda-1.Vda.SqlValueDate

    get_date(): /* result */ GLib.Date
    set_date(ts: GLib.Date): void

    // Own virtual methods of Vda-1.Vda.SqlValueDate

    vfunc_get_date(): /* result */ GLib.Date
    vfunc_set_date(ts: GLib.Date): void

    // Class property signals of Vda-1.Vda.SqlValueDate

    connect(sigName: "notify::name", callback: (($obj: SqlValueDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueDate {

    // Own properties of Vda-1.Vda.SqlValueDate

    static name: string
    static $gtype: GObject.GType<SqlValueDate>

    // Constructors of Vda-1.Vda.SqlValueDate

    constructor(config?: SqlValueDate_ConstructProps) 
    _init(config?: SqlValueDate_ConstructProps): void
}

interface SqlValueTimestamp_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps {
}

interface SqlValueTimestamp extends GObject.Object, SqlValue {

    // Owm methods of Vda-1.Vda.SqlValueTimestamp

    format_local(): string
    format_utc(): string
    format_locale(): string
    format_date(): string
    format_date_locale(): string
    format_time(): string
    format_time_local(): string
    format_time_local_ntz(): string
    get_timestamp(): GLib.DateTime
    set_timestamp(ts: GLib.DateTime): void

    // Own virtual methods of Vda-1.Vda.SqlValueTimestamp

    vfunc_format_local(): string
    vfunc_format_utc(): string
    vfunc_format_locale(): string
    vfunc_format_date(): string
    vfunc_format_date_locale(): string
    vfunc_format_time(): string
    vfunc_format_time_local(): string
    vfunc_format_time_local_ntz(): string
    vfunc_get_timestamp(): GLib.DateTime
    vfunc_set_timestamp(ts: GLib.DateTime): void

    // Class property signals of Vda-1.Vda.SqlValueTimestamp

    connect(sigName: "notify::name", callback: (($obj: SqlValueTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueTimestamp {

    // Own properties of Vda-1.Vda.SqlValueTimestamp

    static name: string
    static $gtype: GObject.GType<SqlValueTimestamp>

    // Constructors of Vda-1.Vda.SqlValueTimestamp

    constructor(config?: SqlValueTimestamp_ConstructProps) 
    _init(config?: SqlValueTimestamp_ConstructProps): void
}

interface SqlValueTimestampNtz_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueTimestamp_ConstructProps {
}

interface SqlValueTimestampNtz extends GObject.Object, SqlValue, SqlValueTimestamp {

    // Class property signals of Vda-1.Vda.SqlValueTimestampNtz

    connect(sigName: "notify::name", callback: (($obj: SqlValueTimestampNtz, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueTimestampNtz, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueTimestampNtz {

    // Own properties of Vda-1.Vda.SqlValueTimestampNtz

    static name: string
    static $gtype: GObject.GType<SqlValueTimestampNtz>

    // Constructors of Vda-1.Vda.SqlValueTimestampNtz

    constructor(config?: SqlValueTimestampNtz_ConstructProps) 
    _init(config?: SqlValueTimestampNtz_ConstructProps): void
}

interface SqlValueTime_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueTimestamp_ConstructProps {
}

interface SqlValueTime extends GObject.Object, SqlValue, SqlValueTimestamp {

    // Class property signals of Vda-1.Vda.SqlValueTime

    connect(sigName: "notify::name", callback: (($obj: SqlValueTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueTime {

    // Own properties of Vda-1.Vda.SqlValueTime

    static name: string
    static $gtype: GObject.GType<SqlValueTime>

    // Constructors of Vda-1.Vda.SqlValueTime

    constructor(config?: SqlValueTime_ConstructProps) 
    _init(config?: SqlValueTime_ConstructProps): void
}

interface SqlValueTimeNtz_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps, SqlValueTimestampNtz_ConstructProps {
}

interface SqlValueTimeNtz extends GObject.Object, SqlValue, SqlValueTimestampNtz {

    // Class property signals of Vda-1.Vda.SqlValueTimeNtz

    connect(sigName: "notify::name", callback: (($obj: SqlValueTimeNtz, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueTimeNtz, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueTimeNtz {

    // Own properties of Vda-1.Vda.SqlValueTimeNtz

    static name: string
    static $gtype: GObject.GType<SqlValueTimeNtz>

    // Constructors of Vda-1.Vda.SqlValueTimeNtz

    constructor(config?: SqlValueTimeNtz_ConstructProps) 
    _init(config?: SqlValueTimeNtz_ConstructProps): void
}

interface SqlValueBinary_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps {
}

interface SqlValueBinary extends GObject.Object, SqlValue {

    // Own properties of Vda-1.Vda.SqlValueBinary

    readonly size: number

    // Owm methods of Vda-1.Vda.SqlValueBinary

    get_bytes(): GLib.Bytes
    get_out_stream(): Gio.OutputStream | null
    get_input_stream(): Gio.InputStream | null
    get_size(): number

    // Own virtual methods of Vda-1.Vda.SqlValueBinary

    vfunc_get_bytes(): GLib.Bytes
    vfunc_get_out_stream(): Gio.OutputStream | null
    vfunc_get_input_stream(): Gio.InputStream | null
    vfunc_get_size(): number

    // Class property signals of Vda-1.Vda.SqlValueBinary

    connect(sigName: "notify::size", callback: (($obj: SqlValueBinary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SqlValueBinary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueBinary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueBinary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueBinary {

    // Own properties of Vda-1.Vda.SqlValueBinary

    static name: string
    static $gtype: GObject.GType<SqlValueBinary>

    // Constructors of Vda-1.Vda.SqlValueBinary

    constructor(config?: SqlValueBinary_ConstructProps) 
    _init(config?: SqlValueBinary_ConstructProps): void
}

interface SqlValueBlob_ConstructProps extends GObject.Object_ConstructProps, SqlValueBinary_ConstructProps {
}

interface SqlValueBlob extends GObject.Object, SqlValueBinary {

    // Own properties of Vda-1.Vda.SqlValueBlob

    readonly connection: Connection

    // Owm methods of Vda-1.Vda.SqlValueBlob

    create(stream: Gio.InputStream): void
    delete(): void
    write(file: Gio.File): void
    read(file: Gio.File): void
    get_connection(): Connection

    // Own virtual methods of Vda-1.Vda.SqlValueBlob

    vfunc_create(stream: Gio.InputStream): void
    vfunc_delete(): void
    vfunc_write(file: Gio.File): void
    vfunc_read(file: Gio.File): void
    vfunc_get_connection(): Connection

    // Class property signals of Vda-1.Vda.SqlValueBlob

    connect(sigName: "notify::connection", callback: (($obj: SqlValueBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlValueBlob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: SqlValueBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SqlValueBlob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueBlob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueBlob {

    // Own properties of Vda-1.Vda.SqlValueBlob

    static name: string
    static $gtype: GObject.GType<SqlValueBlob>

    // Constructors of Vda-1.Vda.SqlValueBlob

    constructor(config?: SqlValueBlob_ConstructProps) 
    _init(config?: SqlValueBlob_ConstructProps): void
}

interface SqlValueBlobOid_ConstructProps extends GObject.Object_ConstructProps, SqlValueBlob_ConstructProps {
}

interface SqlValueBlobOid extends GObject.Object, SqlValueBlob {

    // Own properties of Vda-1.Vda.SqlValueBlobOid

    readonly identification: number

    // Owm methods of Vda-1.Vda.SqlValueBlobOid

    get_identification(): number

    // Own virtual methods of Vda-1.Vda.SqlValueBlobOid

    vfunc_get_identification(): number

    // Class property signals of Vda-1.Vda.SqlValueBlobOid

    connect(sigName: "notify::identification", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identification", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::identification", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueBlobOid {

    // Own properties of Vda-1.Vda.SqlValueBlobOid

    static name: string
    static $gtype: GObject.GType<SqlValueBlobOid>

    // Constructors of Vda-1.Vda.SqlValueBlobOid

    constructor(config?: SqlValueBlobOid_ConstructProps) 
    _init(config?: SqlValueBlobOid_ConstructProps): void
}

interface SqlValueGeometricPoint_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps {

    // Own constructor properties of Vda-1.Vda.SqlValueGeometricPoint

    x?: number | null
    y?: number | null
}

interface SqlValueGeometricPoint extends GObject.Object, SqlValue {

    // Own properties of Vda-1.Vda.SqlValueGeometricPoint

    x: number
    y: number

    // Owm methods of Vda-1.Vda.SqlValueGeometricPoint

    get_x(): number
    set_x(value: number): void
    get_y(): number
    set_y(value: number): void

    // Own virtual methods of Vda-1.Vda.SqlValueGeometricPoint

    vfunc_get_x(): number
    vfunc_set_x(value: number): void
    vfunc_get_y(): number
    vfunc_set_y(value: number): void

    // Class property signals of Vda-1.Vda.SqlValueGeometricPoint

    connect(sigName: "notify::x", callback: (($obj: SqlValueGeometricPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: SqlValueGeometricPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: SqlValueGeometricPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: SqlValueGeometricPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueGeometricPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueGeometricPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueGeometricPoint {

    // Own properties of Vda-1.Vda.SqlValueGeometricPoint

    static name: string
    static $gtype: GObject.GType<SqlValueGeometricPoint>

    // Constructors of Vda-1.Vda.SqlValueGeometricPoint

    constructor(config?: SqlValueGeometricPoint_ConstructProps) 
    _init(config?: SqlValueGeometricPoint_ConstructProps): void
}

interface SqlValueMathExp_ConstructProps extends GObject.Object_ConstructProps, SqlValue_ConstructProps {

    // Own constructor properties of Vda-1.Vda.SqlValueMathExp

    math?: GCalc.MathEquationManager | null
}

interface SqlValueMathExp extends GObject.Object, SqlValue {

    // Own properties of Vda-1.Vda.SqlValueMathExp

    math: GCalc.MathEquationManager

    // Owm methods of Vda-1.Vda.SqlValueMathExp

    get_math(): GCalc.MathEquationManager
    set_math(value: GCalc.MathEquationManager): void

    // Own virtual methods of Vda-1.Vda.SqlValueMathExp

    vfunc_get_math(): GCalc.MathEquationManager
    vfunc_set_math(value: GCalc.MathEquationManager): void

    // Class property signals of Vda-1.Vda.SqlValueMathExp

    connect(sigName: "notify::math", callback: (($obj: SqlValueMathExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::math", callback: (($obj: SqlValueMathExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::math", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueMathExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueMathExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlValueMathExp {

    // Own properties of Vda-1.Vda.SqlValueMathExp

    static name: string
    static $gtype: GObject.GType<SqlValueMathExp>

    // Constructors of Vda-1.Vda.SqlValueMathExp

    constructor(config?: SqlValueMathExp_ConstructProps) 
    _init(config?: SqlValueMathExp_ConstructProps): void
}

interface TableModel_ConstructProps extends GObject.Object_ConstructProps, Gio.ListModel_ConstructProps, Result_ConstructProps {
}

interface TableModel extends GObject.Object, Gio.ListModel, Result {

    // Class property signals of Vda-1.Vda.TableModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TableModel {

    // Own properties of Vda-1.Vda.TableModel

    static name: string
    static $gtype: GObject.GType<TableModel>

    // Constructors of Vda-1.Vda.TableModel

    constructor(config?: TableModel_ConstructProps) 
    _init(config?: TableModel_ConstructProps): void
}

interface TableModelSequential_ConstructProps extends GObject.Object_ConstructProps, Result_ConstructProps {
}

interface TableModelSequential extends GObject.Object, Result {

    // Owm methods of Vda-1.Vda.TableModelSequential

    current(): RowModel | null
    next(): boolean
    back(): boolean
    move(direction: MoveDirection, relative: number): boolean
    copy_current(): RowModel | null

    // Own virtual methods of Vda-1.Vda.TableModelSequential

    vfunc_current(): RowModel | null
    vfunc_next(): boolean
    vfunc_back(): boolean
    vfunc_move(direction: MoveDirection, relative: number): boolean
    vfunc_copy_current(): RowModel | null

    // Class property signals of Vda-1.Vda.TableModelSequential

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TableModelSequential {

    // Own properties of Vda-1.Vda.TableModelSequential

    static name: string
    static $gtype: GObject.GType<TableModelSequential>

    // Constructors of Vda-1.Vda.TableModelSequential

    constructor(config?: TableModelSequential_ConstructProps) 
    _init(config?: TableModelSequential_ConstructProps): void
}

interface AffectedRows_ConstructProps extends Result_ConstructProps, SqlAffectedRows_ConstructProps, GObject.Object_ConstructProps {
}

interface AffectedRows extends Result, SqlAffectedRows {

    // Class property signals of Vda-1.Vda.AffectedRows

    connect(sigName: "notify::number", callback: (($obj: AffectedRows, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: AffectedRows, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AffectedRows extends GObject.Object {

    // Own properties of Vda-1.Vda.AffectedRows

    static name: string
    static $gtype: GObject.GType<AffectedRows>

    // Constructors of Vda-1.Vda.AffectedRows

    constructor(config?: AffectedRows_ConstructProps) 
    constructor(rows: number) 
    static new(rows: number): AffectedRows
    _init(config?: AffectedRows_ConstructProps): void
}

interface CommandDelete_ConstructProps extends SqlCommand_ConstructProps, SqlCommandTableRelated_ConstructProps, SqlCommandConditional_ConstructProps, Stringifiable_ConstructProps, SqlCommandParametrized_ConstructProps, SqlCommandDelete_ConstructProps, GObject.Object_ConstructProps {
}

interface CommandDelete extends SqlCommand, SqlCommandTableRelated, SqlCommandConditional, Stringifiable, SqlCommandParametrized, SqlCommandDelete {

    // Class property signals of Vda-1.Vda.CommandDelete

    connect(sigName: "notify::connection", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::table", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::condition", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CommandDelete extends GObject.Object {

    // Own properties of Vda-1.Vda.CommandDelete

    static name: string
    static $gtype: GObject.GType<CommandDelete>

    // Constructors of Vda-1.Vda.CommandDelete

    constructor(config?: CommandDelete_ConstructProps) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandDelete
    _init(config?: CommandDelete_ConstructProps): void
}

interface CommandInsert_ConstructProps extends Stringifiable_ConstructProps, SqlCommandInsert_ConstructProps, CommandModification_ConstructProps {
}

interface CommandInsert extends Stringifiable, SqlCommandInsert {

    // Class property signals of Vda-1.Vda.CommandInsert

    connect(sigName: "notify::table", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CommandInsert extends CommandModification {

    // Own properties of Vda-1.Vda.CommandInsert

    static name: string
    static $gtype: GObject.GType<CommandInsert>

    // Constructors of Vda-1.Vda.CommandInsert

    constructor(config?: CommandInsert_ConstructProps) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandInsert

    // Overloads of new

    static new(cnc: Connection): CommandModification
    _init(config?: CommandInsert_ConstructProps): void
}

interface CommandModification_ConstructProps extends SqlCommand_ConstructProps, SqlCommandTableRelated_ConstructProps, SqlCommandModification_ConstructProps, SqlCommandParametrized_ConstructProps, GObject.Object_ConstructProps {
}

interface CommandModification extends SqlCommand, SqlCommandTableRelated, SqlCommandModification, SqlCommandParametrized {

    // Class property signals of Vda-1.Vda.CommandModification

    connect(sigName: "notify::connection", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::table", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CommandModification extends GObject.Object {

    // Own properties of Vda-1.Vda.CommandModification

    static name: string
    static $gtype: GObject.GType<CommandModification>

    // Constructors of Vda-1.Vda.CommandModification

    constructor(config?: CommandModification_ConstructProps) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandModification
    _init(config?: CommandModification_ConstructProps): void
}

interface CommandSelect_ConstructProps extends SqlCommand_ConstructProps, SqlCommandConditional_ConstructProps, Stringifiable_ConstructProps, SqlCommandParametrized_ConstructProps, SqlCommandSelect_ConstructProps, GObject.Object_ConstructProps {
}

interface CommandSelect extends SqlCommand, SqlCommandConditional, Stringifiable, SqlCommandParametrized, SqlCommandSelect {

    // Class property signals of Vda-1.Vda.CommandSelect

    connect(sigName: "notify::connection", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::condition", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::fields", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::tables", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tables", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tables", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CommandSelect extends GObject.Object {

    // Own properties of Vda-1.Vda.CommandSelect

    static name: string
    static $gtype: GObject.GType<CommandSelect>

    // Constructors of Vda-1.Vda.CommandSelect

    constructor(config?: CommandSelect_ConstructProps) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandSelect
    _init(config?: CommandSelect_ConstructProps): void
}

interface CommandUpdate_ConstructProps extends SqlCommandConditional_ConstructProps, Stringifiable_ConstructProps, SqlCommandUpdate_ConstructProps, CommandModification_ConstructProps {
}

interface CommandUpdate extends SqlCommandConditional, Stringifiable, SqlCommandUpdate {

    // Class property signals of Vda-1.Vda.CommandUpdate

    connect(sigName: "notify::condition", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::table", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CommandUpdate extends CommandModification {

    // Own properties of Vda-1.Vda.CommandUpdate

    static name: string
    static $gtype: GObject.GType<CommandUpdate>

    // Constructors of Vda-1.Vda.CommandUpdate

    constructor(config?: CommandUpdate_ConstructProps) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandUpdate

    // Overloads of new

    static new(cnc: Connection): CommandModification
    _init(config?: CommandUpdate_ConstructProps): void
}

interface ConnectionParameter_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Vda-1.Vda.ConnectionParameter

    name?: string | null
    value?: string | null
}

interface ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameter

    name: string
    value: string

    // Owm methods of Vda-1.Vda.ConnectionParameter

    get_name(): string
    set_name(value: string): void
    get_value(): string
    set_value(value: string): void

    // Class property signals of Vda-1.Vda.ConnectionParameter

    connect(sigName: "notify::name", callback: (($obj: ConnectionParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ConnectionParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ConnectionParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ConnectionParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConnectionParameter extends GObject.Object {

    // Own properties of Vda-1.Vda.ConnectionParameter

    static name: string
    static $gtype: GObject.GType<ConnectionParameter>

    // Constructors of Vda-1.Vda.ConnectionParameter

    constructor(config?: ConnectionParameter_ConstructProps) 
    constructor() 
    static new(): ConnectionParameter
    _init(config?: ConnectionParameter_ConstructProps): void
}

interface ConnectionParameterDbName_ConstructProps extends ConnectionParameter_ConstructProps {
}

interface ConnectionParameterDbName {

    // Class property signals of Vda-1.Vda.ConnectionParameterDbName

    connect(sigName: "notify::name", callback: (($obj: ConnectionParameterDbName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ConnectionParameterDbName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ConnectionParameterDbName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ConnectionParameterDbName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConnectionParameterDbName extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterDbName

    static name: string
    static $gtype: GObject.GType<ConnectionParameterDbName>

    // Constructors of Vda-1.Vda.ConnectionParameterDbName

    constructor(config?: ConnectionParameterDbName_ConstructProps) 
    constructor() 
    static new(): ConnectionParameterDbName

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterDbName_ConstructProps): void
}

interface ConnectionParameterHost_ConstructProps extends ConnectionParameter_ConstructProps {
}

interface ConnectionParameterHost {

    // Class property signals of Vda-1.Vda.ConnectionParameterHost

    connect(sigName: "notify::name", callback: (($obj: ConnectionParameterHost, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ConnectionParameterHost, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ConnectionParameterHost, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ConnectionParameterHost, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConnectionParameterHost extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterHost

    static name: string
    static $gtype: GObject.GType<ConnectionParameterHost>

    // Constructors of Vda-1.Vda.ConnectionParameterHost

    constructor(config?: ConnectionParameterHost_ConstructProps) 
    constructor() 
    static new(): ConnectionParameterHost

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterHost_ConstructProps): void
}

interface ConnectionParameterPort_ConstructProps extends ConnectionParameter_ConstructProps {
}

interface ConnectionParameterPort {

    // Class property signals of Vda-1.Vda.ConnectionParameterPort

    connect(sigName: "notify::name", callback: (($obj: ConnectionParameterPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ConnectionParameterPort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ConnectionParameterPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ConnectionParameterPort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConnectionParameterPort extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterPort

    static name: string
    static $gtype: GObject.GType<ConnectionParameterPort>

    // Constructors of Vda-1.Vda.ConnectionParameterPort

    constructor(config?: ConnectionParameterPort_ConstructProps) 
    constructor() 
    static new(): ConnectionParameterPort

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterPort_ConstructProps): void
}

interface ConnectionParameterUserName_ConstructProps extends ConnectionParameter_ConstructProps {
}

interface ConnectionParameterUserName {

    // Class property signals of Vda-1.Vda.ConnectionParameterUserName

    connect(sigName: "notify::name", callback: (($obj: ConnectionParameterUserName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ConnectionParameterUserName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ConnectionParameterUserName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ConnectionParameterUserName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConnectionParameterUserName extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterUserName

    static name: string
    static $gtype: GObject.GType<ConnectionParameterUserName>

    // Constructors of Vda-1.Vda.ConnectionParameterUserName

    constructor(config?: ConnectionParameterUserName_ConstructProps) 
    constructor() 
    static new(): ConnectionParameterUserName

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterUserName_ConstructProps): void
}

interface ConnectionParameterPassword_ConstructProps extends ConnectionParameter_ConstructProps {
}

interface ConnectionParameterPassword {

    // Class property signals of Vda-1.Vda.ConnectionParameterPassword

    connect(sigName: "notify::name", callback: (($obj: ConnectionParameterPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ConnectionParameterPassword, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ConnectionParameterPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ConnectionParameterPassword, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConnectionParameterPassword extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterPassword

    static name: string
    static $gtype: GObject.GType<ConnectionParameterPassword>

    // Constructors of Vda-1.Vda.ConnectionParameterPassword

    constructor(config?: ConnectionParameterPassword_ConstructProps) 
    constructor() 
    static new(): ConnectionParameterPassword

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterPassword_ConstructProps): void
}

interface ConnectionParameters_ConstructProps extends Gee.HashMap_ConstructProps {
}

interface ConnectionParameters {

    // Owm methods of Vda-1.Vda.ConnectionParameters

    parse(cnstring: string): void
    to_string(): string
    has_param(name: string): boolean

    // Own virtual methods of Vda-1.Vda.ConnectionParameters

    vfunc_parse(cnstring: string): void

    // Class property signals of Vda-1.Vda.ConnectionParameters

    connect(sigName: "notify::k-type", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConnectionParameters extends Gee.HashMap {

    // Own properties of Vda-1.Vda.ConnectionParameters

    static name: string
    static $gtype: GObject.GType<ConnectionParameters>

    // Constructors of Vda-1.Vda.ConnectionParameters

    constructor(config?: ConnectionParameters_ConstructProps) 
    constructor(cnc_str: string) 
    static new(cnc_str: string): ConnectionParameters

    // Overloads of new

    static new(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: Gee.HashDataFunc | null, key_equal_func: Gee.EqualDataFunc | null, value_equal_func: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: ConnectionParameters_ConstructProps): void
}

interface Expression_ConstructProps extends Gio.ListModel_ConstructProps, SqlExpression_ConstructProps, Gee.ArrayList_ConstructProps {
}

interface Expression extends Gio.ListModel, SqlExpression {

    // Conflicting properties

    read_only_view: any

    // Owm methods of Vda-1.Vda.Expression

    to_string(): string

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Own virtual methods of Vda-1.Vda.Expression

    vfunc_to_string(): string

    // Class property signals of Vda-1.Vda.Expression

    connect(sigName: "notify::g-type", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Expression extends Gee.ArrayList {

    // Own properties of Vda-1.Vda.Expression

    static name: string
    static $gtype: GObject.GType<Expression>

    // Constructors of Vda-1.Vda.Expression

    constructor(config?: Expression_ConstructProps) 
    constructor() 
    static new(): Expression

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: Expression_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionField_ConstructProps extends SqlExpressionField_ConstructProps, Expression_ConstructProps {
}

interface ExpressionField extends SqlExpressionField {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionField

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::table-ref", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table-ref", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table-ref", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionField extends Expression {

    // Own properties of Vda-1.Vda.ExpressionField

    static name: string
    static $gtype: GObject.GType<ExpressionField>

    // Constructors of Vda-1.Vda.ExpressionField

    constructor(config?: ExpressionField_ConstructProps) 
    constructor() 
    static new(): ExpressionField

    // Overloads of new

    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionField_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperator_ConstructProps extends SqlExpressionOperator_ConstructProps, Expression_ConstructProps {
}

interface ExpressionOperator extends SqlExpressionOperator {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperator

    _operator_type: SqlExpressionOperatorType

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperator

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperator extends Expression {

    // Own properties of Vda-1.Vda.ExpressionOperator

    static name: string
    static $gtype: GObject.GType<ExpressionOperator>

    // Constructors of Vda-1.Vda.ExpressionOperator

    constructor(config?: ExpressionOperator_ConstructProps) 
    constructor() 
    static new(): ExpressionOperator

    // Overloads of new

    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperator_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorGroup_ConstructProps extends SqlExpressionOperatorGroup_ConstructProps, ExpressionOperator_ConstructProps {
}

interface ExpressionOperatorGroup extends SqlExpressionOperatorGroup {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorGroup

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorGroup extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorGroup

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorGroup>

    // Constructors of Vda-1.Vda.ExpressionOperatorGroup

    constructor(config?: ExpressionOperatorGroup_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorGroup

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorGroup_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorMultiterm_ConstructProps extends SqlExpressionOperatorMultiterm_ConstructProps, ExpressionOperator_ConstructProps {
}

interface ExpressionOperatorMultiterm extends SqlExpressionOperatorMultiterm {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperatorMultiterm

    _operator_name: string

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorMultiterm

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorMultiterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorMultiterm

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorMultiterm>

    // Constructors of Vda-1.Vda.ExpressionOperatorMultiterm

    constructor(config?: ExpressionOperatorMultiterm_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorMultiterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorMultiterm_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorAnd_ConstructProps extends SqlExpressionOperatorAnd_ConstructProps, ExpressionOperatorMultiterm_ConstructProps {
}

interface ExpressionOperatorAnd extends SqlExpressionOperatorAnd {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorAnd

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorAnd extends ExpressionOperatorMultiterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorAnd

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorAnd>

    // Constructors of Vda-1.Vda.ExpressionOperatorAnd

    constructor(config?: ExpressionOperatorAnd_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorAnd

    // Overloads of new

    static new(): ExpressionOperatorMultiterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorAnd_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorOr_ConstructProps extends SqlExpressionOperatorOr_ConstructProps, ExpressionOperatorMultiterm_ConstructProps {
}

interface ExpressionOperatorOr extends SqlExpressionOperatorOr {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorOr

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorOr extends ExpressionOperatorMultiterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorOr

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorOr>

    // Constructors of Vda-1.Vda.ExpressionOperatorOr

    constructor(config?: ExpressionOperatorOr_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorOr

    // Overloads of new

    static new(): ExpressionOperatorMultiterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorOr_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorBinaryterm_ConstructProps extends SqlExpressionOperatorBinaryterm_ConstructProps, ExpressionOperator_ConstructProps {
}

interface ExpressionOperatorBinaryterm extends SqlExpressionOperatorBinaryterm {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperatorBinaryterm

    _operator_name: string

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorBinaryterm

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorBinaryterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinaryterm

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorBinaryterm>

    // Constructors of Vda-1.Vda.ExpressionOperatorBinaryterm

    constructor(config?: ExpressionOperatorBinaryterm_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorBinaryterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBinaryterm_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorEq_ConstructProps extends SqlExpressionOperatorEq_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorEq extends SqlExpressionOperatorEq {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorEq

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorEq extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorEq

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorEq>

    // Constructors of Vda-1.Vda.ExpressionOperatorEq

    constructor(config?: ExpressionOperatorEq_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorEq

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorEq_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorNotEq_ConstructProps extends SqlExpressionOperatorNotEq_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorNotEq extends SqlExpressionOperatorNotEq {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotEq

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorNotEq extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotEq

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotEq>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotEq

    constructor(config?: ExpressionOperatorNotEq_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorNotEq

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotEq_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorDiff_ConstructProps extends SqlExpressionOperatorDiff_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorDiff extends SqlExpressionOperatorDiff {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorDiff

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorDiff extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorDiff

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorDiff>

    // Constructors of Vda-1.Vda.ExpressionOperatorDiff

    constructor(config?: ExpressionOperatorDiff_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorDiff

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorDiff_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorGt_ConstructProps extends SqlExpressionOperatorGt_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorGt extends SqlExpressionOperatorGt {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorGt

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorGt extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorGt

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorGt>

    // Constructors of Vda-1.Vda.ExpressionOperatorGt

    constructor(config?: ExpressionOperatorGt_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorGt

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorGt_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorLt_ConstructProps extends SqlExpressionOperatorLt_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorLt extends SqlExpressionOperatorLt {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorLt

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorLt extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorLt

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorLt>

    // Constructors of Vda-1.Vda.ExpressionOperatorLt

    constructor(config?: ExpressionOperatorLt_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorLt

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorLt_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorGeq_ConstructProps extends SqlExpressionOperatorGeq_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorGeq extends SqlExpressionOperatorGeq {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorGeq

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorGeq extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorGeq

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorGeq>

    // Constructors of Vda-1.Vda.ExpressionOperatorGeq

    constructor(config?: ExpressionOperatorGeq_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorGeq

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorGeq_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorLeq_ConstructProps extends SqlExpressionOperatorLeq_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorLeq extends SqlExpressionOperatorLeq {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorLeq

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorLeq extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorLeq

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorLeq>

    // Constructors of Vda-1.Vda.ExpressionOperatorLeq

    constructor(config?: ExpressionOperatorLeq_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorLeq

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorLeq_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorRegexp_ConstructProps extends SqlExpressionOperatorRegexp_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorRegexp extends SqlExpressionOperatorRegexp {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorRegexp

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorRegexp extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorRegexp

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorRegexp>

    // Constructors of Vda-1.Vda.ExpressionOperatorRegexp

    constructor(config?: ExpressionOperatorRegexp_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorRegexp

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorRegexp_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorStar_ConstructProps extends SqlExpressionOperatorStar_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorStar extends SqlExpressionOperatorStar {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorStar

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorStar extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorStar

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorStar>

    // Constructors of Vda-1.Vda.ExpressionOperatorStar

    constructor(config?: ExpressionOperatorStar_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorStar

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorStar_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorDiv_ConstructProps extends SqlExpressionOperatorDiv_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorDiv extends SqlExpressionOperatorDiv {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorDiv

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorDiv extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorDiv

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorDiv>

    // Constructors of Vda-1.Vda.ExpressionOperatorDiv

    constructor(config?: ExpressionOperatorDiv_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorDiv

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorDiv_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIn_ConstructProps extends SqlExpressionOperatorIn_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorIn extends SqlExpressionOperatorIn {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIn

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIn extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorIn

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIn>

    // Constructors of Vda-1.Vda.ExpressionOperatorIn

    constructor(config?: ExpressionOperatorIn_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIn

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIn_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorNotIn_ConstructProps extends SqlExpressionOperatorNotIn_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorNotIn extends SqlExpressionOperatorNotIn {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotIn

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorNotIn extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotIn

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotIn>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotIn

    constructor(config?: ExpressionOperatorNotIn_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorNotIn

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotIn_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorConcatenate_ConstructProps extends SqlExpressionOperatorConcatenate_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorConcatenate extends SqlExpressionOperatorConcatenate {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorConcatenate

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorConcatenate extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorConcatenate

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorConcatenate>

    // Constructors of Vda-1.Vda.ExpressionOperatorConcatenate

    constructor(config?: ExpressionOperatorConcatenate_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorConcatenate

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorConcatenate_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorSimilarTo_ConstructProps extends SqlExpressionOperatorSimilarTo_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorSimilarTo extends SqlExpressionOperatorSimilarTo {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorSimilarTo

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorSimilarTo extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorSimilarTo

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorSimilarTo>

    // Constructors of Vda-1.Vda.ExpressionOperatorSimilarTo

    constructor(config?: ExpressionOperatorSimilarTo_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorSimilarTo

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorSimilarTo_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorLike_ConstructProps extends SqlExpressionOperatorLike_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorLike extends SqlExpressionOperatorLike {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorLike

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorLike extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorLike

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorLike>

    // Constructors of Vda-1.Vda.ExpressionOperatorLike

    constructor(config?: ExpressionOperatorLike_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorLike

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorLike_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorNotLike_ConstructProps extends SqlExpressionOperatorNotLike_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorNotLike extends SqlExpressionOperatorNotLike {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotLike

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorNotLike extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotLike

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotLike>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotLike

    constructor(config?: ExpressionOperatorNotLike_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorNotLike

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotLike_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIlike_ConstructProps extends SqlExpressionOperatorIlike_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorIlike extends SqlExpressionOperatorIlike {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIlike

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIlike extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorIlike

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIlike>

    // Constructors of Vda-1.Vda.ExpressionOperatorIlike

    constructor(config?: ExpressionOperatorIlike_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIlike

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIlike_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorNotIlike_ConstructProps extends SqlExpressionOperatorNotIlike_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorNotIlike extends SqlExpressionOperatorNotIlike {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotIlike

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorNotIlike extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotIlike

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotIlike>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotIlike

    constructor(config?: ExpressionOperatorNotIlike_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorNotIlike

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotIlike_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorBinaryUnaryterm_ConstructProps extends SqlExpressionOperatorBinaryUnaryterm_ConstructProps, ExpressionOperator_ConstructProps {
}

interface ExpressionOperatorBinaryUnaryterm extends SqlExpressionOperatorBinaryUnaryterm {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperatorBinaryUnaryterm

    _operator_name: string

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorBinaryUnaryterm

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorBinaryUnaryterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinaryUnaryterm

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorBinaryUnaryterm>

    // Constructors of Vda-1.Vda.ExpressionOperatorBinaryUnaryterm

    constructor(config?: ExpressionOperatorBinaryUnaryterm_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorBinaryUnaryterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBinaryUnaryterm_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorMinus_ConstructProps extends SqlExpressionOperatorMinus_ConstructProps, ExpressionOperatorBinaryUnaryterm_ConstructProps {
}

interface ExpressionOperatorMinus extends SqlExpressionOperatorMinus {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorMinus

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorMinus extends ExpressionOperatorBinaryUnaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorMinus

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorMinus>

    // Constructors of Vda-1.Vda.ExpressionOperatorMinus

    constructor(config?: ExpressionOperatorMinus_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorMinus

    // Overloads of new

    static new(): ExpressionOperatorBinaryUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorMinus_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorPlus_ConstructProps extends SqlExpressionOperatorPlus_ConstructProps, ExpressionOperatorBinaryUnaryterm_ConstructProps {
}

interface ExpressionOperatorPlus extends SqlExpressionOperatorPlus {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorPlus

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorPlus extends ExpressionOperatorBinaryUnaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorPlus

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorPlus>

    // Constructors of Vda-1.Vda.ExpressionOperatorPlus

    constructor(config?: ExpressionOperatorPlus_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorPlus

    // Overloads of new

    static new(): ExpressionOperatorBinaryUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorPlus_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorInitialUnaryterm_ConstructProps extends SqlExpressionOperatorInitialUnaryterm_ConstructProps, ExpressionOperator_ConstructProps {
}

interface ExpressionOperatorInitialUnaryterm extends SqlExpressionOperatorInitialUnaryterm {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperatorInitialUnaryterm

    _operator_name: string

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorInitialUnaryterm

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorInitialUnaryterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorInitialUnaryterm

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorInitialUnaryterm>

    // Constructors of Vda-1.Vda.ExpressionOperatorInitialUnaryterm

    constructor(config?: ExpressionOperatorInitialUnaryterm_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorInitialUnaryterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorInitialUnaryterm_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorNot_ConstructProps extends SqlExpressionOperatorNot_ConstructProps, ExpressionOperatorInitialUnaryterm_ConstructProps {
}

interface ExpressionOperatorNot extends SqlExpressionOperatorNot {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorNot

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorNot extends ExpressionOperatorInitialUnaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNot

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNot>

    // Constructors of Vda-1.Vda.ExpressionOperatorNot

    constructor(config?: ExpressionOperatorNot_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorNot

    // Overloads of new

    static new(): ExpressionOperatorInitialUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNot_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorFinalUnaryterm_ConstructProps extends SqlExpressionOperatorFinalUnaryterm_ConstructProps, ExpressionOperator_ConstructProps {
}

interface ExpressionOperatorFinalUnaryterm extends SqlExpressionOperatorFinalUnaryterm {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperatorFinalUnaryterm

    _operator_name: string

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorFinalUnaryterm

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorFinalUnaryterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorFinalUnaryterm

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorFinalUnaryterm>

    // Constructors of Vda-1.Vda.ExpressionOperatorFinalUnaryterm

    constructor(config?: ExpressionOperatorFinalUnaryterm_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorFinalUnaryterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorFinalUnaryterm_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIs_ConstructProps extends SqlExpressionOperatorIs_ConstructProps, ExpressionOperatorFinalUnaryterm_ConstructProps {
}

interface ExpressionOperatorIs extends SqlExpressionOperatorIs {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIs

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIs extends ExpressionOperatorFinalUnaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorIs

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIs>

    // Constructors of Vda-1.Vda.ExpressionOperatorIs

    constructor(config?: ExpressionOperatorIs_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIs

    // Overloads of new

    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIs_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIsNot_ConstructProps extends SqlExpressionOperatorIsNot_ConstructProps, ExpressionOperatorIs_ConstructProps {
}

interface ExpressionOperatorIsNot extends SqlExpressionOperatorIsNot {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNot

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIsNot extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNot

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNot>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNot

    constructor(config?: ExpressionOperatorIsNot_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIsNot

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNot_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIsNull_ConstructProps extends SqlExpressionOperatorIsNull_ConstructProps, ExpressionOperatorIs_ConstructProps {
}

interface ExpressionOperatorIsNull extends SqlExpressionOperatorIsNull {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNull

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIsNull extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNull

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNull>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNull

    constructor(config?: ExpressionOperatorIsNull_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIsNull

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNull_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIsNotNull_ConstructProps extends SqlExpressionOperatorIsNotNull_ConstructProps, ExpressionOperatorIsNot_ConstructProps {
}

interface ExpressionOperatorIsNotNull extends SqlExpressionOperatorIsNotNull {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotNull

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIsNotNull extends ExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotNull

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNotNull>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotNull

    constructor(config?: ExpressionOperatorIsNotNull_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIsNotNull

    // Overloads of new

    static new(): ExpressionOperatorIsNot
    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotNull_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIsTrue_ConstructProps extends SqlExpressionOperatorIsTrue_ConstructProps, ExpressionOperatorIs_ConstructProps {
}

interface ExpressionOperatorIsTrue extends SqlExpressionOperatorIsTrue {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsTrue

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIsTrue extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsTrue

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsTrue>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsTrue

    constructor(config?: ExpressionOperatorIsTrue_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIsTrue

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsTrue_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIsNotTrue_ConstructProps extends SqlExpressionOperatorIsNotTrue_ConstructProps, ExpressionOperatorIsNot_ConstructProps {
}

interface ExpressionOperatorIsNotTrue extends SqlExpressionOperatorIsNotTrue {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotTrue

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIsNotTrue extends ExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotTrue

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNotTrue>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotTrue

    constructor(config?: ExpressionOperatorIsNotTrue_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIsNotTrue

    // Overloads of new

    static new(): ExpressionOperatorIsNot
    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotTrue_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIsFalse_ConstructProps extends SqlExpressionOperatorIsFalse_ConstructProps, ExpressionOperatorIs_ConstructProps {
}

interface ExpressionOperatorIsFalse extends SqlExpressionOperatorIsFalse {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsFalse

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIsFalse extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsFalse

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsFalse>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsFalse

    constructor(config?: ExpressionOperatorIsFalse_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIsFalse

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsFalse_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIsNotFalse_ConstructProps extends SqlExpressionOperatorIsNotFalse_ConstructProps, ExpressionOperatorIsNot_ConstructProps {
}

interface ExpressionOperatorIsNotFalse extends SqlExpressionOperatorIsNotFalse {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotFalse

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIsNotFalse extends ExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotFalse

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNotFalse>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotFalse

    constructor(config?: ExpressionOperatorIsNotFalse_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIsNotFalse

    // Overloads of new

    static new(): ExpressionOperatorIsNot
    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotFalse_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIsNotUnknown_ConstructProps extends SqlExpressionOperatorIsNotUnknown_ConstructProps, ExpressionOperatorIsNot_ConstructProps {
}

interface ExpressionOperatorIsNotUnknown extends SqlExpressionOperatorIsNotUnknown {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotUnknown

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIsNotUnknown extends ExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotUnknown

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNotUnknown>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotUnknown

    constructor(config?: ExpressionOperatorIsNotUnknown_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIsNotUnknown

    // Overloads of new

    static new(): ExpressionOperatorIsNot
    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotUnknown_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIsUnknown_ConstructProps extends SqlExpressionOperatorIsUnknown_ConstructProps, ExpressionOperatorIs_ConstructProps {
}

interface ExpressionOperatorIsUnknown extends SqlExpressionOperatorIsUnknown {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsUnknown

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIsUnknown extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsUnknown

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsUnknown>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsUnknown

    constructor(config?: ExpressionOperatorIsUnknown_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIsUnknown

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsUnknown_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIsDistinct_ConstructProps extends SqlExpressionOperatorIsDistinct_ConstructProps, ExpressionOperatorBinaryterm_ConstructProps {
}

interface ExpressionOperatorIsDistinct extends SqlExpressionOperatorIsDistinct {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsDistinct

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIsDistinct extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinct

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsDistinct>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsDistinct

    constructor(config?: ExpressionOperatorIsDistinct_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIsDistinct

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsDistinct_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIsNotDistinct_ConstructProps extends SqlExpressionOperatorIsNotDistinct_ConstructProps, ExpressionOperatorIsDistinct_ConstructProps {
}

interface ExpressionOperatorIsNotDistinct extends SqlExpressionOperatorIsNotDistinct {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotDistinct

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIsNotDistinct extends ExpressionOperatorIsDistinct {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinct

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNotDistinct>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotDistinct

    constructor(config?: ExpressionOperatorIsNotDistinct_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIsNotDistinct

    // Overloads of new

    static new(): ExpressionOperatorIsDistinct
    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotDistinct_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIsDistinctFrom_ConstructProps extends SqlExpressionOperatorIsDistinctFrom_ConstructProps, ExpressionOperatorIsDistinct_ConstructProps {
}

interface ExpressionOperatorIsDistinctFrom extends SqlExpressionOperatorIsDistinctFrom {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsDistinctFrom

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIsDistinctFrom extends ExpressionOperatorIsDistinct {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctFrom

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsDistinctFrom>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsDistinctFrom

    constructor(config?: ExpressionOperatorIsDistinctFrom_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIsDistinctFrom

    // Overloads of new

    static new(): ExpressionOperatorIsDistinct
    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsDistinctFrom_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorIsNotDistinctFrom_ConstructProps extends SqlExpressionOperatorIsNotDistinctFrom_ConstructProps, ExpressionOperatorIsNotDistinct_ConstructProps {
}

interface ExpressionOperatorIsNotDistinctFrom extends SqlExpressionOperatorIsNotDistinctFrom {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotDistinctFrom

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorIsNotDistinctFrom extends ExpressionOperatorIsNotDistinct {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctFrom

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNotDistinctFrom>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotDistinctFrom

    constructor(config?: ExpressionOperatorIsNotDistinctFrom_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorIsNotDistinctFrom

    // Overloads of new

    static new(): ExpressionOperatorIsNotDistinct
    static new(): ExpressionOperatorIsDistinct
    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotDistinctFrom_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorThreeterm_ConstructProps extends SqlExpressionOperatorThreeterm_ConstructProps, ExpressionOperator_ConstructProps {
}

interface ExpressionOperatorThreeterm extends SqlExpressionOperatorThreeterm {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperatorThreeterm

    _operator_name: string
    _operator2_name: string

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorThreeterm

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorThreeterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorThreeterm

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorThreeterm>

    // Constructors of Vda-1.Vda.ExpressionOperatorThreeterm

    constructor(config?: ExpressionOperatorThreeterm_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorThreeterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorThreeterm_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorBetween_ConstructProps extends SqlExpressionOperatorBetween_ConstructProps, ExpressionOperatorThreeterm_ConstructProps {
}

interface ExpressionOperatorBetween extends SqlExpressionOperatorBetween {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorBetween

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorBetween extends ExpressionOperatorThreeterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetween

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorBetween>

    // Constructors of Vda-1.Vda.ExpressionOperatorBetween

    constructor(config?: ExpressionOperatorBetween_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorBetween

    // Overloads of new

    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBetween_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorBetweenAnd_ConstructProps extends SqlExpressionOperatorBetweenAnd_ConstructProps, ExpressionOperatorBetween_ConstructProps {
}

interface ExpressionOperatorBetweenAnd extends SqlExpressionOperatorBetweenAnd {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorBetweenAnd

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorBetweenAnd extends ExpressionOperatorBetween {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenAnd

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorBetweenAnd>

    // Constructors of Vda-1.Vda.ExpressionOperatorBetweenAnd

    constructor(config?: ExpressionOperatorBetweenAnd_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorBetweenAnd

    // Overloads of new

    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBetweenAnd_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorNotBetween_ConstructProps extends SqlExpressionOperatorNotBetween_ConstructProps, ExpressionOperatorBetween_ConstructProps {
}

interface ExpressionOperatorNotBetween extends SqlExpressionOperatorNotBetween {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotBetween

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorNotBetween extends ExpressionOperatorBetween {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetween

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotBetween>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotBetween

    constructor(config?: ExpressionOperatorNotBetween_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorNotBetween

    // Overloads of new

    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotBetween_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorNotBetweenAnd_ConstructProps extends SqlExpressionOperatorNotBetweenAnd_ConstructProps, ExpressionOperatorNotBetween_ConstructProps {
}

interface ExpressionOperatorNotBetweenAnd extends SqlExpressionOperatorNotBetweenAnd {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotBetweenAnd

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorNotBetweenAnd extends ExpressionOperatorNotBetween {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenAnd

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotBetweenAnd>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotBetweenAnd

    constructor(config?: ExpressionOperatorNotBetweenAnd_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorNotBetweenAnd

    // Overloads of new

    static new(): ExpressionOperatorNotBetween
    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotBetweenAnd_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorBetweenSymmetric_ConstructProps extends SqlExpressionOperatorBetweenSymmetric_ConstructProps, ExpressionOperatorBetween_ConstructProps {
}

interface ExpressionOperatorBetweenSymmetric extends SqlExpressionOperatorBetweenSymmetric {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorBetweenSymmetric

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorBetweenSymmetric extends ExpressionOperatorBetween {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetric

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorBetweenSymmetric>

    // Constructors of Vda-1.Vda.ExpressionOperatorBetweenSymmetric

    constructor(config?: ExpressionOperatorBetweenSymmetric_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorBetweenSymmetric

    // Overloads of new

    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBetweenSymmetric_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorBetweenSymmetricAnd_ConstructProps extends SqlExpressionOperatorBetweenSymmetricAnd_ConstructProps, ExpressionOperatorBetweenSymmetric_ConstructProps {
}

interface ExpressionOperatorBetweenSymmetricAnd extends SqlExpressionOperatorBetweenSymmetricAnd {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAnd

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorBetweenSymmetricAnd extends ExpressionOperatorBetweenSymmetric {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAnd

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorBetweenSymmetricAnd>

    // Constructors of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAnd

    constructor(config?: ExpressionOperatorBetweenSymmetricAnd_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorBetweenSymmetricAnd

    // Overloads of new

    static new(): ExpressionOperatorBetweenSymmetric
    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBetweenSymmetricAnd_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorNotBetweenSymmetric_ConstructProps extends SqlExpressionOperatorNotBetweenSymmetric_ConstructProps, ExpressionOperatorBetweenSymmetric_ConstructProps {
}

interface ExpressionOperatorNotBetweenSymmetric extends SqlExpressionOperatorNotBetweenSymmetric {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetric

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorNotBetweenSymmetric extends ExpressionOperatorBetweenSymmetric {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetric

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotBetweenSymmetric>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetric

    constructor(config?: ExpressionOperatorNotBetweenSymmetric_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorNotBetweenSymmetric

    // Overloads of new

    static new(): ExpressionOperatorBetweenSymmetric
    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotBetweenSymmetric_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionOperatorNotBetweenSymmetricAnd_ConstructProps extends SqlExpressionOperatorNotBetweenSymmetricAnd_ConstructProps, ExpressionOperatorNotBetweenSymmetric_ConstructProps {
}

interface ExpressionOperatorNotBetweenSymmetricAnd extends SqlExpressionOperatorNotBetweenSymmetricAnd {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAnd

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionOperatorNotBetweenSymmetricAnd extends ExpressionOperatorNotBetweenSymmetric {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAnd

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotBetweenSymmetricAnd>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAnd

    constructor(config?: ExpressionOperatorNotBetweenSymmetricAnd_ConstructProps) 
    constructor() 
    static new(): ExpressionOperatorNotBetweenSymmetricAnd

    // Overloads of new

    static new(): ExpressionOperatorNotBetweenSymmetric
    static new(): ExpressionOperatorBetweenSymmetric
    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotBetweenSymmetricAnd_ConstructProps): void
}

interface ExpressionValue_ConstructProps extends SqlExpressionValue_ConstructProps, Expression_ConstructProps {
}

interface ExpressionValue extends SqlExpressionValue {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionValue

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionValue extends Expression {

    // Own properties of Vda-1.Vda.ExpressionValue

    static name: string
    static $gtype: GObject.GType<ExpressionValue>

    // Constructors of Vda-1.Vda.ExpressionValue

    constructor(config?: ExpressionValue_ConstructProps) 
    constructor() 
    static new(): ExpressionValue

    // Overloads of new

    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionValue_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionValueParameter_ConstructProps extends SqlExpressionValueParameter_ConstructProps, ExpressionValue_ConstructProps {
}

interface ExpressionValueParameter extends SqlExpressionValueParameter {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.ExpressionValueParameter

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::gtype", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtype", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gtype", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionValueParameter extends ExpressionValue {

    // Own properties of Vda-1.Vda.ExpressionValueParameter

    static name: string
    static $gtype: GObject.GType<ExpressionValueParameter>

    // Constructors of Vda-1.Vda.ExpressionValueParameter

    constructor(config?: ExpressionValueParameter_ConstructProps) 
    constructor() 
    static new(): ExpressionValueParameter

    // Overloads of new

    static new(): ExpressionValue
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionValueParameter_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface HashList_ConstructProps extends Gio.ListModel_ConstructProps, HashModel_ConstructProps, Gee.ArrayList_ConstructProps {
}

interface HashList extends Gio.ListModel, HashModel {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    add(...args: any[]): any
    remove(...args: any[]): any
    get_read_only_view(...args: any[]): any
    vfunc_add(...args: any[]): any
    vfunc_remove(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of Vda-1.Vda.HashList

    connect(sigName: "notify::g-type", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HashList extends Gee.ArrayList {

    // Own properties of Vda-1.Vda.HashList

    static name: string
    static $gtype: GObject.GType<HashList>

    // Constructors of Vda-1.Vda.HashList

    constructor(config?: HashList_ConstructProps) 
    constructor() 
    static new(): HashList

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: HashList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface InvalidQuery_ConstructProps extends Query_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Vda-1.Vda.InvalidQuery

    message?: string | null
}

interface InvalidQuery extends Query {

    // Own properties of Vda-1.Vda.InvalidQuery

    message: string

    // Owm methods of Vda-1.Vda.InvalidQuery

    get_message(): string
    set_message(value: string): void

    // Class property signals of Vda-1.Vda.InvalidQuery

    connect(sigName: "notify::message", callback: (($obj: InvalidQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: InvalidQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::sql", callback: (($obj: InvalidQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sql", callback: (($obj: InvalidQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: InvalidQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: InvalidQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InvalidQuery extends GObject.Object {

    // Own properties of Vda-1.Vda.InvalidQuery

    static name: string
    static $gtype: GObject.GType<InvalidQuery>

    // Constructors of Vda-1.Vda.InvalidQuery

    constructor(config?: InvalidQuery_ConstructProps) 
    constructor(msg: string) 
    static new(msg: string): InvalidQuery
    _init(config?: InvalidQuery_ConstructProps): void
}

interface InvalidPreparedQuery_ConstructProps extends PreparedQuery_ConstructProps, InvalidQuery_ConstructProps {
}

interface InvalidPreparedQuery extends PreparedQuery {

    // Class property signals of Vda-1.Vda.InvalidPreparedQuery

    connect(sigName: "notify::message", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::sql", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sql", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InvalidPreparedQuery extends InvalidQuery {

    // Own properties of Vda-1.Vda.InvalidPreparedQuery

    static name: string
    static $gtype: GObject.GType<InvalidPreparedQuery>

    // Constructors of Vda-1.Vda.InvalidPreparedQuery

    constructor(config?: InvalidPreparedQuery_ConstructProps) 
    constructor(msg: string) 
    static new(msg: string): InvalidPreparedQuery

    // Overloads of new

    static new(msg: string): InvalidQuery
    _init(config?: InvalidPreparedQuery_ConstructProps): void
}

interface InvalidResult_ConstructProps extends Result_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Vda-1.Vda.InvalidResult

    message?: string | null
}

interface InvalidResult extends Result {

    // Own properties of Vda-1.Vda.InvalidResult

    message: string

    // Owm methods of Vda-1.Vda.InvalidResult

    get_message(): string
    set_message(value: string): void

    // Class property signals of Vda-1.Vda.InvalidResult

    connect(sigName: "notify::message", callback: (($obj: InvalidResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: InvalidResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InvalidResult extends GObject.Object {

    // Own properties of Vda-1.Vda.InvalidResult

    static name: string
    static $gtype: GObject.GType<InvalidResult>

    // Constructors of Vda-1.Vda.InvalidResult

    constructor(config?: InvalidResult_ConstructProps) 
    constructor(msg: string) 
    static new(msg: string): InvalidResult
    _init(config?: InvalidResult_ConstructProps): void
}

interface Parameters_ConstructProps extends SqlParameters_ConstructProps, Gee.HashMap_ConstructProps {
}

interface Parameters extends SqlParameters {

    // Class property signals of Vda-1.Vda.Parameters

    connect(sigName: "notify::k-type", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Parameters extends Gee.HashMap {

    // Own properties of Vda-1.Vda.Parameters

    static name: string
    static $gtype: GObject.GType<Parameters>

    // Constructors of Vda-1.Vda.Parameters

    constructor(config?: Parameters_ConstructProps) 
    constructor() 
    static new(): Parameters

    // Overloads of new

    static new(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: Gee.HashDataFunc | null, key_equal_func: Gee.EqualDataFunc | null, value_equal_func: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: Parameters_ConstructProps): void
}

interface Parser_ConstructProps extends SqlParser_ConstructProps, GObject.Object_ConstructProps {
}

interface Parser extends SqlParser {

    // Class property signals of Vda-1.Vda.Parser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Parser extends GObject.Object {

    // Own properties of Vda-1.Vda.Parser

    static name: string
    static $gtype: GObject.GType<Parser>

    // Constructors of Vda-1.Vda.Parser

    constructor(config?: Parser_ConstructProps) 
    constructor() 
    static new(): Parser
    _init(config?: Parser_ConstructProps): void
}

interface TableReference_ConstructProps extends SqlTableReference_ConstructProps, GObject.Object_ConstructProps {
}

interface TableReference extends SqlTableReference {

    // Class property signals of Vda-1.Vda.TableReference

    connect(sigName: "notify::name", callback: (($obj: TableReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TableReference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: TableReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: TableReference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TableReference extends GObject.Object {

    // Own properties of Vda-1.Vda.TableReference

    static name: string
    static $gtype: GObject.GType<TableReference>

    // Constructors of Vda-1.Vda.TableReference

    constructor(config?: TableReference_ConstructProps) 
    constructor() 
    static new(): TableReference
    _init(config?: TableReference_ConstructProps): void
}

interface Value_ConstructProps extends Stringifiable_ConstructProps, SqlValue_ConstructProps, GObject.Object_ConstructProps {
}

interface Value extends Stringifiable, SqlValue {

    // Own fields of Vda-1.Vda.Value

    _name: string
    _val: any

    // Owm methods of Vda-1.Vda.Value

    force_value(val: any): boolean
    from_value(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    is_compatible(type: GObject.GType): boolean
    parse(str: string): boolean
    to_gvalue(): /* result */ any
    to_string(): string
    to_string_quoted(): string
    to_sql_expression(): string

    // Own virtual methods of Vda-1.Vda.Value

    vfunc_force_value(val: any): boolean
    vfunc_from_value(val: any): boolean
    vfunc_cast(type: GObject.GType): SqlValue | null
    vfunc_is_compatible(type: GObject.GType): boolean
    vfunc_parse(str: string): boolean
    vfunc_to_gvalue(): /* result */ any
    vfunc_to_string(): string
    vfunc_to_string_quoted(): string
    vfunc_to_sql_expression(): string

    // Class property signals of Vda-1.Vda.Value

    connect(sigName: "notify::name", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Value extends GObject.Object {

    // Own properties of Vda-1.Vda.Value

    static name: string
    static $gtype: GObject.GType<Value>

    // Constructors of Vda-1.Vda.Value

    constructor(config?: Value_ConstructProps) 
    constructor() 
    static new(): Value
    _init(config?: Value_ConstructProps): void
}

interface ValueNull_ConstructProps extends SqlValueNull_ConstructProps, Value_ConstructProps {
}

interface ValueNull extends SqlValueNull {

    // Class property signals of Vda-1.Vda.ValueNull

    connect(sigName: "notify::name", callback: (($obj: ValueNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueNull extends Value {

    // Own properties of Vda-1.Vda.ValueNull

    static name: string
    static $gtype: GObject.GType<ValueNull>

    // Constructors of Vda-1.Vda.ValueNull

    constructor(config?: ValueNull_ConstructProps) 
    constructor() 
    static new(): ValueNull

    // Overloads of new

    static new(): Value
    _init(config?: ValueNull_ConstructProps): void
}

interface ValueString_ConstructProps extends SqlValueString_ConstructProps, Value_ConstructProps {
}

interface ValueString extends SqlValueString {

    // Class property signals of Vda-1.Vda.ValueString

    connect(sigName: "notify::name", callback: (($obj: ValueString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueString extends Value {

    // Own properties of Vda-1.Vda.ValueString

    static name: string
    static $gtype: GObject.GType<ValueString>

    // Constructors of Vda-1.Vda.ValueString

    constructor(config?: ValueString_ConstructProps) 
    constructor() 
    static new(): ValueString

    // Overloads of new

    static new(): Value
    _init(config?: ValueString_ConstructProps): void
}

interface ValueXml_ConstructProps extends SqlValueXml_ConstructProps, ValueString_ConstructProps {
}

interface ValueXml extends SqlValueXml {

    // Class property signals of Vda-1.Vda.ValueXml

    connect(sigName: "notify::document", callback: (($obj: ValueXml, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: ValueXml, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ValueXml, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueXml, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueXml extends ValueString {

    // Own properties of Vda-1.Vda.ValueXml

    static name: string
    static $gtype: GObject.GType<ValueXml>

    // Constructors of Vda-1.Vda.ValueXml

    constructor(config?: ValueXml_ConstructProps) 
    constructor() 
    static new(): ValueXml

    // Overloads of new

    static new(): ValueString
    static new(): Value
    _init(config?: ValueXml_ConstructProps): void
}

interface ValueJson_ConstructProps extends SqlValueJson_ConstructProps, ValueString_ConstructProps {
}

interface ValueJson extends SqlValueJson {

    // Class property signals of Vda-1.Vda.ValueJson

    connect(sigName: "notify::document", callback: (($obj: ValueJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: ValueJson, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ValueJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueJson, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueJson extends ValueString {

    // Own properties of Vda-1.Vda.ValueJson

    static name: string
    static $gtype: GObject.GType<ValueJson>

    // Constructors of Vda-1.Vda.ValueJson

    constructor(config?: ValueJson_ConstructProps) 
    constructor() 
    static new(): ValueJson

    // Overloads of new

    static new(): ValueString
    static new(): Value
    _init(config?: ValueJson_ConstructProps): void
}

interface ValueText_ConstructProps extends SqlValueText_ConstructProps, ValueString_ConstructProps {
}

interface ValueText extends SqlValueText {

    // Class property signals of Vda-1.Vda.ValueText

    connect(sigName: "notify::name", callback: (($obj: ValueText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueText extends ValueString {

    // Own properties of Vda-1.Vda.ValueText

    static name: string
    static $gtype: GObject.GType<ValueText>

    // Constructors of Vda-1.Vda.ValueText

    constructor(config?: ValueText_ConstructProps) 
    constructor() 
    static new(): ValueText

    // Overloads of new

    static new(): ValueString
    static new(): Value
    _init(config?: ValueText_ConstructProps): void
}

interface ValueName_ConstructProps extends SqlValueName_ConstructProps, ValueString_ConstructProps {
}

interface ValueName extends SqlValueName {

    // Class property signals of Vda-1.Vda.ValueName

    connect(sigName: "notify::name", callback: (($obj: ValueName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueName extends ValueString {

    // Own properties of Vda-1.Vda.ValueName

    static name: string
    static $gtype: GObject.GType<ValueName>

    // Constructors of Vda-1.Vda.ValueName

    constructor(config?: ValueName_ConstructProps) 
    constructor() 
    static new(): ValueName

    // Overloads of new

    static new(): ValueString
    static new(): Value
    _init(config?: ValueName_ConstructProps): void
}

interface ValueBool_ConstructProps extends SqlValueBool_ConstructProps, Value_ConstructProps {
}

interface ValueBool extends SqlValueBool {

    // Class property signals of Vda-1.Vda.ValueBool

    connect(sigName: "notify::name", callback: (($obj: ValueBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueBool extends Value {

    // Own properties of Vda-1.Vda.ValueBool

    static name: string
    static $gtype: GObject.GType<ValueBool>

    // Constructors of Vda-1.Vda.ValueBool

    constructor(config?: ValueBool_ConstructProps) 
    constructor() 
    static new(): ValueBool

    // Overloads of new

    static new(): Value
    _init(config?: ValueBool_ConstructProps): void
}

interface ValueBit_ConstructProps extends SqlValueBit_ConstructProps, ValueBool_ConstructProps {
}

interface ValueBit extends SqlValueBit {

    // Class property signals of Vda-1.Vda.ValueBit

    connect(sigName: "notify::name", callback: (($obj: ValueBit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueBit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueBit extends ValueBool {

    // Own properties of Vda-1.Vda.ValueBit

    static name: string
    static $gtype: GObject.GType<ValueBit>

    // Constructors of Vda-1.Vda.ValueBit

    constructor(config?: ValueBit_ConstructProps) 
    constructor() 
    static new(): ValueBit

    // Overloads of new

    static new(): ValueBool
    static new(): Value
    _init(config?: ValueBit_ConstructProps): void
}

interface ValueInteger_ConstructProps extends SqlValue_ConstructProps, SqlValueInteger_ConstructProps, Value_ConstructProps {
}

interface ValueInteger extends SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.ValueInteger

    connect(sigName: "notify::name", callback: (($obj: ValueInteger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueInteger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueInteger extends Value {

    // Own properties of Vda-1.Vda.ValueInteger

    static name: string
    static $gtype: GObject.GType<ValueInteger>

    // Constructors of Vda-1.Vda.ValueInteger

    constructor(config?: ValueInteger_ConstructProps) 
    constructor() 
    static new(): ValueInteger

    // Overloads of new

    static new(): Value
    _init(config?: ValueInteger_ConstructProps): void
}

interface ValueByte_ConstructProps extends SqlValueByte_ConstructProps, ValueInteger_ConstructProps {
}

interface ValueByte extends SqlValueByte {

    // Class property signals of Vda-1.Vda.ValueByte

    connect(sigName: "notify::name", callback: (($obj: ValueByte, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueByte, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueByte extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueByte

    static name: string
    static $gtype: GObject.GType<ValueByte>

    // Constructors of Vda-1.Vda.ValueByte

    constructor(config?: ValueByte_ConstructProps) 
    constructor() 
    static new(): ValueByte

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueByte_ConstructProps): void
}

interface ValueInt2_ConstructProps extends SqlValueInt2_ConstructProps, ValueInteger_ConstructProps {
}

interface ValueInt2 extends SqlValueInt2 {

    // Class property signals of Vda-1.Vda.ValueInt2

    connect(sigName: "notify::name", callback: (($obj: ValueInt2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueInt2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueInt2 extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueInt2

    static name: string
    static $gtype: GObject.GType<ValueInt2>

    // Constructors of Vda-1.Vda.ValueInt2

    constructor(config?: ValueInt2_ConstructProps) 
    constructor() 
    static new(): ValueInt2

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueInt2_ConstructProps): void
}

interface ValueInt4_ConstructProps extends SqlValueInt4_ConstructProps, ValueInteger_ConstructProps {
}

interface ValueInt4 extends SqlValueInt4 {

    // Class property signals of Vda-1.Vda.ValueInt4

    connect(sigName: "notify::name", callback: (($obj: ValueInt4, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueInt4, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueInt4 extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueInt4

    static name: string
    static $gtype: GObject.GType<ValueInt4>

    // Constructors of Vda-1.Vda.ValueInt4

    constructor(config?: ValueInt4_ConstructProps) 
    constructor() 
    static new(): ValueInt4

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueInt4_ConstructProps): void
}

interface ValueInt8_ConstructProps extends SqlValueInt8_ConstructProps, ValueInteger_ConstructProps {
}

interface ValueInt8 extends SqlValueInt8 {

    // Class property signals of Vda-1.Vda.ValueInt8

    connect(sigName: "notify::name", callback: (($obj: ValueInt8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueInt8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueInt8 extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueInt8

    static name: string
    static $gtype: GObject.GType<ValueInt8>

    // Constructors of Vda-1.Vda.ValueInt8

    constructor(config?: ValueInt8_ConstructProps) 
    constructor() 
    static new(): ValueInt8

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueInt8_ConstructProps): void
}

interface ValueUnsignedInteger_ConstructProps extends SqlValue_ConstructProps, SqlValueUnsignedInteger_ConstructProps, Value_ConstructProps {
}

interface ValueUnsignedInteger extends SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.ValueUnsignedInteger

    connect(sigName: "notify::name", callback: (($obj: ValueUnsignedInteger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueUnsignedInteger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueUnsignedInteger extends Value {

    // Own properties of Vda-1.Vda.ValueUnsignedInteger

    static name: string
    static $gtype: GObject.GType<ValueUnsignedInteger>

    // Constructors of Vda-1.Vda.ValueUnsignedInteger

    constructor(config?: ValueUnsignedInteger_ConstructProps) 
    constructor() 
    static new(): ValueUnsignedInteger

    // Overloads of new

    static new(): Value
    _init(config?: ValueUnsignedInteger_ConstructProps): void
}

interface ValueUnsignedByte_ConstructProps extends SqlValueUnsignedByte_ConstructProps, ValueUnsignedInteger_ConstructProps {
}

interface ValueUnsignedByte extends SqlValueUnsignedByte {

    // Class property signals of Vda-1.Vda.ValueUnsignedByte

    connect(sigName: "notify::name", callback: (($obj: ValueUnsignedByte, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueUnsignedByte, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueUnsignedByte extends ValueUnsignedInteger {

    // Own properties of Vda-1.Vda.ValueUnsignedByte

    static name: string
    static $gtype: GObject.GType<ValueUnsignedByte>

    // Constructors of Vda-1.Vda.ValueUnsignedByte

    constructor(config?: ValueUnsignedByte_ConstructProps) 
    constructor() 
    static new(): ValueUnsignedByte

    // Overloads of new

    static new(): ValueUnsignedInteger
    static new(): Value
    _init(config?: ValueUnsignedByte_ConstructProps): void
}

interface ValueUnsignedInt2_ConstructProps extends SqlValueUnsignedInt2_ConstructProps, ValueUnsignedInteger_ConstructProps {
}

interface ValueUnsignedInt2 extends SqlValueUnsignedInt2 {

    // Class property signals of Vda-1.Vda.ValueUnsignedInt2

    connect(sigName: "notify::name", callback: (($obj: ValueUnsignedInt2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueUnsignedInt2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueUnsignedInt2 extends ValueUnsignedInteger {

    // Own properties of Vda-1.Vda.ValueUnsignedInt2

    static name: string
    static $gtype: GObject.GType<ValueUnsignedInt2>

    // Constructors of Vda-1.Vda.ValueUnsignedInt2

    constructor(config?: ValueUnsignedInt2_ConstructProps) 
    constructor() 
    static new(): ValueUnsignedInt2

    // Overloads of new

    static new(): ValueUnsignedInteger
    static new(): Value
    _init(config?: ValueUnsignedInt2_ConstructProps): void
}

interface ValueUnsignedInt4_ConstructProps extends SqlValueUnsignedInt4_ConstructProps, ValueUnsignedInteger_ConstructProps {
}

interface ValueUnsignedInt4 extends SqlValueUnsignedInt4 {

    // Class property signals of Vda-1.Vda.ValueUnsignedInt4

    connect(sigName: "notify::name", callback: (($obj: ValueUnsignedInt4, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueUnsignedInt4, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueUnsignedInt4 extends ValueUnsignedInteger {

    // Own properties of Vda-1.Vda.ValueUnsignedInt4

    static name: string
    static $gtype: GObject.GType<ValueUnsignedInt4>

    // Constructors of Vda-1.Vda.ValueUnsignedInt4

    constructor(config?: ValueUnsignedInt4_ConstructProps) 
    constructor() 
    static new(): ValueUnsignedInt4

    // Overloads of new

    static new(): ValueUnsignedInteger
    static new(): Value
    _init(config?: ValueUnsignedInt4_ConstructProps): void
}

interface ValueUnsignedInt8_ConstructProps extends SqlValueUnsignedInt8_ConstructProps, ValueUnsignedInteger_ConstructProps {
}

interface ValueUnsignedInt8 extends SqlValueUnsignedInt8 {

    // Class property signals of Vda-1.Vda.ValueUnsignedInt8

    connect(sigName: "notify::name", callback: (($obj: ValueUnsignedInt8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueUnsignedInt8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueUnsignedInt8 extends ValueUnsignedInteger {

    // Own properties of Vda-1.Vda.ValueUnsignedInt8

    static name: string
    static $gtype: GObject.GType<ValueUnsignedInt8>

    // Constructors of Vda-1.Vda.ValueUnsignedInt8

    constructor(config?: ValueUnsignedInt8_ConstructProps) 
    constructor() 
    static new(): ValueUnsignedInt8

    // Overloads of new

    static new(): ValueUnsignedInteger
    static new(): Value
    _init(config?: ValueUnsignedInt8_ConstructProps): void
}

interface ValueOid_ConstructProps extends SqlValueOid_ConstructProps, ValueInteger_ConstructProps {
}

interface ValueOid extends SqlValueOid {

    // Class property signals of Vda-1.Vda.ValueOid

    connect(sigName: "notify::name", callback: (($obj: ValueOid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueOid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueOid extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueOid

    static name: string
    static $gtype: GObject.GType<ValueOid>

    // Constructors of Vda-1.Vda.ValueOid

    constructor(config?: ValueOid_ConstructProps) 
    constructor() 
    static new(): ValueOid

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueOid_ConstructProps): void
}

interface ValueNumeric_ConstructProps extends SqlValueNumeric_ConstructProps, Value_ConstructProps {
}

interface ValueNumeric extends SqlValueNumeric {

    // Owm methods of Vda-1.Vda.ValueNumeric

    format(str: string): string

    // Own virtual methods of Vda-1.Vda.ValueNumeric

    vfunc_format(str: string): string

    // Class property signals of Vda-1.Vda.ValueNumeric

    connect(sigName: "notify::name", callback: (($obj: ValueNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueNumeric extends Value {

    // Own properties of Vda-1.Vda.ValueNumeric

    static name: string
    static $gtype: GObject.GType<ValueNumeric>

    // Constructors of Vda-1.Vda.ValueNumeric

    constructor(config?: ValueNumeric_ConstructProps) 
    constructor() 
    static new(): ValueNumeric

    // Overloads of new

    static new(): Value
    _init(config?: ValueNumeric_ConstructProps): void
}

interface ValueFloat_ConstructProps extends SqlValueFloat_ConstructProps, ValueNumeric_ConstructProps {
}

interface ValueFloat extends SqlValueFloat {

    // Class property signals of Vda-1.Vda.ValueFloat

    connect(sigName: "notify::name", callback: (($obj: ValueFloat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueFloat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueFloat extends ValueNumeric {

    // Own properties of Vda-1.Vda.ValueFloat

    static name: string
    static $gtype: GObject.GType<ValueFloat>

    // Constructors of Vda-1.Vda.ValueFloat

    constructor(config?: ValueFloat_ConstructProps) 
    constructor() 
    static new(): ValueFloat

    // Overloads of new

    static new(): ValueNumeric
    static new(): Value
    _init(config?: ValueFloat_ConstructProps): void
}

interface ValueDouble_ConstructProps extends SqlValueDouble_ConstructProps, ValueNumeric_ConstructProps {
}

interface ValueDouble extends SqlValueDouble {

    // Class property signals of Vda-1.Vda.ValueDouble

    connect(sigName: "notify::name", callback: (($obj: ValueDouble, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueDouble, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueDouble extends ValueNumeric {

    // Own properties of Vda-1.Vda.ValueDouble

    static name: string
    static $gtype: GObject.GType<ValueDouble>

    // Constructors of Vda-1.Vda.ValueDouble

    constructor(config?: ValueDouble_ConstructProps) 
    constructor() 
    static new(): ValueDouble

    // Overloads of new

    static new(): ValueNumeric
    static new(): Value
    _init(config?: ValueDouble_ConstructProps): void
}

interface ValueMoney_ConstructProps extends SqlValueMoney_ConstructProps, ValueNumeric_ConstructProps {
}

interface ValueMoney extends SqlValueMoney {

    // Class property signals of Vda-1.Vda.ValueMoney

    connect(sigName: "notify::name", callback: (($obj: ValueMoney, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueMoney, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueMoney extends ValueNumeric {

    // Own properties of Vda-1.Vda.ValueMoney

    static name: string
    static $gtype: GObject.GType<ValueMoney>

    // Constructors of Vda-1.Vda.ValueMoney

    constructor(config?: ValueMoney_ConstructProps) 
    constructor() 
    static new(): ValueMoney

    // Overloads of new

    static new(): ValueNumeric
    static new(): Value
    _init(config?: ValueMoney_ConstructProps): void
}

interface ValueTimestamp_ConstructProps extends SqlValueTimestamp_ConstructProps, Value_ConstructProps {
}

interface ValueTimestamp extends SqlValueTimestamp {

    // Own fields of Vda-1.Vda.ValueTimestamp

    dt: GLib.DateTime

    // Owm methods of Vda-1.Vda.ValueTimestamp

    format_local(): string
    format_utc(): string
    format_locale(): string

    // Own virtual methods of Vda-1.Vda.ValueTimestamp

    vfunc_format_local(): string
    vfunc_format_utc(): string
    vfunc_format_locale(): string

    // Class property signals of Vda-1.Vda.ValueTimestamp

    connect(sigName: "notify::name", callback: (($obj: ValueTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueTimestamp extends Value {

    // Own properties of Vda-1.Vda.ValueTimestamp

    static name: string
    static $gtype: GObject.GType<ValueTimestamp>

    // Constructors of Vda-1.Vda.ValueTimestamp

    constructor(config?: ValueTimestamp_ConstructProps) 
    constructor() 
    static new(): ValueTimestamp

    // Overloads of new

    static new(): Value
    _init(config?: ValueTimestamp_ConstructProps): void
}

interface ValueTimestampNtz_ConstructProps extends SqlValueTimestampNtz_ConstructProps, ValueTimestamp_ConstructProps {
}

interface ValueTimestampNtz extends SqlValueTimestampNtz {

    // Class property signals of Vda-1.Vda.ValueTimestampNtz

    connect(sigName: "notify::name", callback: (($obj: ValueTimestampNtz, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueTimestampNtz, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueTimestampNtz extends ValueTimestamp {

    // Own properties of Vda-1.Vda.ValueTimestampNtz

    static name: string
    static $gtype: GObject.GType<ValueTimestampNtz>

    // Constructors of Vda-1.Vda.ValueTimestampNtz

    constructor(config?: ValueTimestampNtz_ConstructProps) 
    constructor() 
    static new(): ValueTimestampNtz

    // Overloads of new

    static new(): ValueTimestamp
    static new(): Value
    _init(config?: ValueTimestampNtz_ConstructProps): void
}

interface ValueTime_ConstructProps extends SqlValueTime_ConstructProps, ValueTimestamp_ConstructProps {
}

interface ValueTime extends SqlValueTime {

    // Class property signals of Vda-1.Vda.ValueTime

    connect(sigName: "notify::name", callback: (($obj: ValueTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueTime extends ValueTimestamp {

    // Own properties of Vda-1.Vda.ValueTime

    static name: string
    static $gtype: GObject.GType<ValueTime>

    // Constructors of Vda-1.Vda.ValueTime

    constructor(config?: ValueTime_ConstructProps) 
    constructor() 
    static new(): ValueTime

    // Overloads of new

    static new(): ValueTimestamp
    static new(): Value
    _init(config?: ValueTime_ConstructProps): void
}

interface ValueTimeNtz_ConstructProps extends SqlValueTimeNtz_ConstructProps, ValueTimestampNtz_ConstructProps {
}

interface ValueTimeNtz extends SqlValueTimeNtz {

    // Class property signals of Vda-1.Vda.ValueTimeNtz

    connect(sigName: "notify::name", callback: (($obj: ValueTimeNtz, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueTimeNtz, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueTimeNtz extends ValueTimestampNtz {

    // Own properties of Vda-1.Vda.ValueTimeNtz

    static name: string
    static $gtype: GObject.GType<ValueTimeNtz>

    // Constructors of Vda-1.Vda.ValueTimeNtz

    constructor(config?: ValueTimeNtz_ConstructProps) 
    constructor() 
    static new(): ValueTimeNtz

    // Overloads of new

    static new(): ValueTimestampNtz
    static new(): ValueTimestamp
    static new(): Value
    _init(config?: ValueTimeNtz_ConstructProps): void
}

interface ValueDate_ConstructProps extends SqlValueDate_ConstructProps, Value_ConstructProps {
}

interface ValueDate extends SqlValueDate {

    // Own fields of Vda-1.Vda.ValueDate

    d: GLib.Date

    // Class property signals of Vda-1.Vda.ValueDate

    connect(sigName: "notify::name", callback: (($obj: ValueDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueDate extends Value {

    // Own properties of Vda-1.Vda.ValueDate

    static name: string
    static $gtype: GObject.GType<ValueDate>

    // Constructors of Vda-1.Vda.ValueDate

    constructor(config?: ValueDate_ConstructProps) 
    constructor() 
    static new(): ValueDate

    // Overloads of new

    static new(): Value
    _init(config?: ValueDate_ConstructProps): void
}

interface ValueBinary_ConstructProps extends SqlValueBinary_ConstructProps, Value_ConstructProps {
}

interface ValueBinary extends SqlValueBinary {

    // Class property signals of Vda-1.Vda.ValueBinary

    connect(sigName: "notify::size", callback: (($obj: ValueBinary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ValueBinary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ValueBinary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueBinary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueBinary extends Value {

    // Own properties of Vda-1.Vda.ValueBinary

    static name: string
    static $gtype: GObject.GType<ValueBinary>

    // Constructors of Vda-1.Vda.ValueBinary

    constructor(config?: ValueBinary_ConstructProps) 
    static with_data(d: Uint8Array): ValueBinary
    static take(d: Uint8Array): ValueBinary
    constructor() 
    static new(): ValueBinary

    // Overloads of new

    static new(): Value
    _init(config?: ValueBinary_ConstructProps): void
}

interface ValueMathExp_ConstructProps extends Stringifiable_ConstructProps, SqlValue_ConstructProps, SqlValueMathExp_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Vda-1.Vda.ValueMathExp

    parameters?: SqlParameters | null
}

interface ValueMathExp extends Stringifiable, SqlValue, SqlValueMathExp {

    // Own properties of Vda-1.Vda.ValueMathExp

    parameters: SqlParameters

    // Owm methods of Vda-1.Vda.ValueMathExp

    get_parameters(): SqlParameters
    set_parameters(value: SqlParameters): void

    // Class property signals of Vda-1.Vda.ValueMathExp

    connect(sigName: "notify::parameters", callback: (($obj: ValueMathExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: ValueMathExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ValueMathExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueMathExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::math", callback: (($obj: ValueMathExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::math", callback: (($obj: ValueMathExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::math", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValueMathExp extends GObject.Object {

    // Own properties of Vda-1.Vda.ValueMathExp

    static name: string
    static $gtype: GObject.GType<ValueMathExp>

    // Constructors of Vda-1.Vda.ValueMathExp

    constructor(config?: ValueMathExp_ConstructProps) 
    constructor() 
    static new(): ValueMathExp
    _init(config?: ValueMathExp_ConstructProps): void
}

interface AffectedRowsClass {
}

abstract class AffectedRowsClass {

    // Own properties of Vda-1.Vda.AffectedRowsClass

    static name: string
}

interface AffectedRowsPrivate {
}

class AffectedRowsPrivate {

    // Own properties of Vda-1.Vda.AffectedRowsPrivate

    static name: string
}

interface CommandDeleteClass {
}

abstract class CommandDeleteClass {

    // Own properties of Vda-1.Vda.CommandDeleteClass

    static name: string
}

interface CommandDeletePrivate {
}

class CommandDeletePrivate {

    // Own properties of Vda-1.Vda.CommandDeletePrivate

    static name: string
}

interface CommandInsertClass {
}

abstract class CommandInsertClass {

    // Own properties of Vda-1.Vda.CommandInsertClass

    static name: string
}

interface CommandInsertPrivate {
}

class CommandInsertPrivate {

    // Own properties of Vda-1.Vda.CommandInsertPrivate

    static name: string
}

interface CommandModificationClass {
}

abstract class CommandModificationClass {

    // Own properties of Vda-1.Vda.CommandModificationClass

    static name: string
}

interface CommandModificationPrivate {
}

class CommandModificationPrivate {

    // Own properties of Vda-1.Vda.CommandModificationPrivate

    static name: string
}

interface CommandSelectClass {
}

abstract class CommandSelectClass {

    // Own properties of Vda-1.Vda.CommandSelectClass

    static name: string
}

interface CommandSelectPrivate {
}

class CommandSelectPrivate {

    // Own properties of Vda-1.Vda.CommandSelectPrivate

    static name: string
}

interface CommandUpdateClass {
}

abstract class CommandUpdateClass {

    // Own properties of Vda-1.Vda.CommandUpdateClass

    static name: string
}

interface CommandUpdatePrivate {
}

class CommandUpdatePrivate {

    // Own properties of Vda-1.Vda.CommandUpdatePrivate

    static name: string
}

interface ConnectionParameterClass {
}

abstract class ConnectionParameterClass {

    // Own properties of Vda-1.Vda.ConnectionParameterClass

    static name: string
}

interface ConnectionParameterPrivate {
}

class ConnectionParameterPrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterPrivate

    static name: string
}

interface ConnectionParameterDbNameClass {
}

abstract class ConnectionParameterDbNameClass {

    // Own properties of Vda-1.Vda.ConnectionParameterDbNameClass

    static name: string
}

interface ConnectionParameterDbNamePrivate {
}

class ConnectionParameterDbNamePrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterDbNamePrivate

    static name: string
}

interface ConnectionParameterHostClass {
}

abstract class ConnectionParameterHostClass {

    // Own properties of Vda-1.Vda.ConnectionParameterHostClass

    static name: string
}

interface ConnectionParameterHostPrivate {
}

class ConnectionParameterHostPrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterHostPrivate

    static name: string
}

interface ConnectionParameterPortClass {
}

abstract class ConnectionParameterPortClass {

    // Own properties of Vda-1.Vda.ConnectionParameterPortClass

    static name: string
}

interface ConnectionParameterPortPrivate {
}

class ConnectionParameterPortPrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterPortPrivate

    static name: string
}

interface ConnectionParameterUserNameClass {
}

abstract class ConnectionParameterUserNameClass {

    // Own properties of Vda-1.Vda.ConnectionParameterUserNameClass

    static name: string
}

interface ConnectionParameterUserNamePrivate {
}

class ConnectionParameterUserNamePrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterUserNamePrivate

    static name: string
}

interface ConnectionParameterPasswordClass {
}

abstract class ConnectionParameterPasswordClass {

    // Own properties of Vda-1.Vda.ConnectionParameterPasswordClass

    static name: string
}

interface ConnectionParameterPasswordPrivate {
}

class ConnectionParameterPasswordPrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterPasswordPrivate

    static name: string
}

interface ConnectionParametersClass {

    // Own fields of Vda-1.Vda.ConnectionParametersClass

    parse: (cnstring: string) => void
}

abstract class ConnectionParametersClass {

    // Own properties of Vda-1.Vda.ConnectionParametersClass

    static name: string
}

interface ConnectionParametersPrivate {
}

class ConnectionParametersPrivate {

    // Own properties of Vda-1.Vda.ConnectionParametersPrivate

    static name: string
}

interface ExpressionClass {

    // Own fields of Vda-1.Vda.ExpressionClass

    to_string: () => string
}

abstract class ExpressionClass {

    // Own properties of Vda-1.Vda.ExpressionClass

    static name: string
}

interface ExpressionPrivate {
}

class ExpressionPrivate {

    // Own properties of Vda-1.Vda.ExpressionPrivate

    static name: string
}

interface ExpressionFieldClass {
}

abstract class ExpressionFieldClass {

    // Own properties of Vda-1.Vda.ExpressionFieldClass

    static name: string
}

interface ExpressionFieldPrivate {
}

class ExpressionFieldPrivate {

    // Own properties of Vda-1.Vda.ExpressionFieldPrivate

    static name: string
}

interface ExpressionOperatorClass {
}

abstract class ExpressionOperatorClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorClass

    static name: string
}

interface ExpressionOperatorPrivate {
}

class ExpressionOperatorPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorPrivate

    static name: string
}

interface ExpressionOperatorGroupClass {
}

abstract class ExpressionOperatorGroupClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorGroupClass

    static name: string
}

interface ExpressionOperatorGroupPrivate {
}

class ExpressionOperatorGroupPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorGroupPrivate

    static name: string
}

interface ExpressionOperatorMultitermClass {
}

abstract class ExpressionOperatorMultitermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorMultitermClass

    static name: string
}

interface ExpressionOperatorMultitermPrivate {
}

class ExpressionOperatorMultitermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorMultitermPrivate

    static name: string
}

interface ExpressionOperatorAndClass {
}

abstract class ExpressionOperatorAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorAndClass

    static name: string
}

interface ExpressionOperatorAndPrivate {
}

class ExpressionOperatorAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorAndPrivate

    static name: string
}

interface ExpressionOperatorOrClass {
}

abstract class ExpressionOperatorOrClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorOrClass

    static name: string
}

interface ExpressionOperatorOrPrivate {
}

class ExpressionOperatorOrPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorOrPrivate

    static name: string
}

interface ExpressionOperatorBinarytermClass {
}

abstract class ExpressionOperatorBinarytermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinarytermClass

    static name: string
}

interface ExpressionOperatorBinarytermPrivate {
}

class ExpressionOperatorBinarytermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinarytermPrivate

    static name: string
}

interface ExpressionOperatorEqClass {
}

abstract class ExpressionOperatorEqClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorEqClass

    static name: string
}

interface ExpressionOperatorEqPrivate {
}

class ExpressionOperatorEqPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorEqPrivate

    static name: string
}

interface ExpressionOperatorNotEqClass {
}

abstract class ExpressionOperatorNotEqClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotEqClass

    static name: string
}

interface ExpressionOperatorNotEqPrivate {
}

class ExpressionOperatorNotEqPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotEqPrivate

    static name: string
}

interface ExpressionOperatorDiffClass {
}

abstract class ExpressionOperatorDiffClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorDiffClass

    static name: string
}

interface ExpressionOperatorDiffPrivate {
}

class ExpressionOperatorDiffPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorDiffPrivate

    static name: string
}

interface ExpressionOperatorGtClass {
}

abstract class ExpressionOperatorGtClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorGtClass

    static name: string
}

interface ExpressionOperatorGtPrivate {
}

class ExpressionOperatorGtPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorGtPrivate

    static name: string
}

interface ExpressionOperatorLtClass {
}

abstract class ExpressionOperatorLtClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorLtClass

    static name: string
}

interface ExpressionOperatorLtPrivate {
}

class ExpressionOperatorLtPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorLtPrivate

    static name: string
}

interface ExpressionOperatorGeqClass {
}

abstract class ExpressionOperatorGeqClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorGeqClass

    static name: string
}

interface ExpressionOperatorGeqPrivate {
}

class ExpressionOperatorGeqPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorGeqPrivate

    static name: string
}

interface ExpressionOperatorLeqClass {
}

abstract class ExpressionOperatorLeqClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorLeqClass

    static name: string
}

interface ExpressionOperatorLeqPrivate {
}

class ExpressionOperatorLeqPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorLeqPrivate

    static name: string
}

interface ExpressionOperatorRegexpClass {
}

abstract class ExpressionOperatorRegexpClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorRegexpClass

    static name: string
}

interface ExpressionOperatorRegexpPrivate {
}

class ExpressionOperatorRegexpPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorRegexpPrivate

    static name: string
}

interface ExpressionOperatorStarClass {
}

abstract class ExpressionOperatorStarClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorStarClass

    static name: string
}

interface ExpressionOperatorStarPrivate {
}

class ExpressionOperatorStarPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorStarPrivate

    static name: string
}

interface ExpressionOperatorDivClass {
}

abstract class ExpressionOperatorDivClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorDivClass

    static name: string
}

interface ExpressionOperatorDivPrivate {
}

class ExpressionOperatorDivPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorDivPrivate

    static name: string
}

interface ExpressionOperatorInClass {
}

abstract class ExpressionOperatorInClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorInClass

    static name: string
}

interface ExpressionOperatorInPrivate {
}

class ExpressionOperatorInPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorInPrivate

    static name: string
}

interface ExpressionOperatorNotInClass {
}

abstract class ExpressionOperatorNotInClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotInClass

    static name: string
}

interface ExpressionOperatorNotInPrivate {
}

class ExpressionOperatorNotInPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotInPrivate

    static name: string
}

interface ExpressionOperatorConcatenateClass {
}

abstract class ExpressionOperatorConcatenateClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorConcatenateClass

    static name: string
}

interface ExpressionOperatorConcatenatePrivate {
}

class ExpressionOperatorConcatenatePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorConcatenatePrivate

    static name: string
}

interface ExpressionOperatorSimilarToClass {
}

abstract class ExpressionOperatorSimilarToClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorSimilarToClass

    static name: string
}

interface ExpressionOperatorSimilarToPrivate {
}

class ExpressionOperatorSimilarToPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorSimilarToPrivate

    static name: string
}

interface ExpressionOperatorLikeClass {
}

abstract class ExpressionOperatorLikeClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorLikeClass

    static name: string
}

interface ExpressionOperatorLikePrivate {
}

class ExpressionOperatorLikePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorLikePrivate

    static name: string
}

interface ExpressionOperatorNotLikeClass {
}

abstract class ExpressionOperatorNotLikeClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotLikeClass

    static name: string
}

interface ExpressionOperatorNotLikePrivate {
}

class ExpressionOperatorNotLikePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotLikePrivate

    static name: string
}

interface ExpressionOperatorIlikeClass {
}

abstract class ExpressionOperatorIlikeClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIlikeClass

    static name: string
}

interface ExpressionOperatorIlikePrivate {
}

class ExpressionOperatorIlikePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIlikePrivate

    static name: string
}

interface ExpressionOperatorNotIlikeClass {
}

abstract class ExpressionOperatorNotIlikeClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotIlikeClass

    static name: string
}

interface ExpressionOperatorNotIlikePrivate {
}

class ExpressionOperatorNotIlikePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotIlikePrivate

    static name: string
}

interface ExpressionOperatorBinaryUnarytermClass {
}

abstract class ExpressionOperatorBinaryUnarytermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinaryUnarytermClass

    static name: string
}

interface ExpressionOperatorBinaryUnarytermPrivate {
}

class ExpressionOperatorBinaryUnarytermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinaryUnarytermPrivate

    static name: string
}

interface ExpressionOperatorMinusClass {
}

abstract class ExpressionOperatorMinusClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorMinusClass

    static name: string
}

interface ExpressionOperatorMinusPrivate {
}

class ExpressionOperatorMinusPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorMinusPrivate

    static name: string
}

interface ExpressionOperatorPlusClass {
}

abstract class ExpressionOperatorPlusClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorPlusClass

    static name: string
}

interface ExpressionOperatorPlusPrivate {
}

class ExpressionOperatorPlusPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorPlusPrivate

    static name: string
}

interface ExpressionOperatorInitialUnarytermClass {
}

abstract class ExpressionOperatorInitialUnarytermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorInitialUnarytermClass

    static name: string
}

interface ExpressionOperatorInitialUnarytermPrivate {
}

class ExpressionOperatorInitialUnarytermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorInitialUnarytermPrivate

    static name: string
}

interface ExpressionOperatorNotClass {
}

abstract class ExpressionOperatorNotClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotClass

    static name: string
}

interface ExpressionOperatorNotPrivate {
}

class ExpressionOperatorNotPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotPrivate

    static name: string
}

interface ExpressionOperatorFinalUnarytermClass {
}

abstract class ExpressionOperatorFinalUnarytermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorFinalUnarytermClass

    static name: string
}

interface ExpressionOperatorFinalUnarytermPrivate {
}

class ExpressionOperatorFinalUnarytermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorFinalUnarytermPrivate

    static name: string
}

interface ExpressionOperatorIsClass {
}

abstract class ExpressionOperatorIsClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsClass

    static name: string
}

interface ExpressionOperatorIsPrivate {
}

class ExpressionOperatorIsPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsPrivate

    static name: string
}

interface ExpressionOperatorIsNotClass {
}

abstract class ExpressionOperatorIsNotClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotClass

    static name: string
}

interface ExpressionOperatorIsNotPrivate {
}

class ExpressionOperatorIsNotPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotPrivate

    static name: string
}

interface ExpressionOperatorIsNullClass {
}

abstract class ExpressionOperatorIsNullClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNullClass

    static name: string
}

interface ExpressionOperatorIsNullPrivate {
}

class ExpressionOperatorIsNullPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNullPrivate

    static name: string
}

interface ExpressionOperatorIsNotNullClass {
}

abstract class ExpressionOperatorIsNotNullClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotNullClass

    static name: string
}

interface ExpressionOperatorIsNotNullPrivate {
}

class ExpressionOperatorIsNotNullPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotNullPrivate

    static name: string
}

interface ExpressionOperatorIsTrueClass {
}

abstract class ExpressionOperatorIsTrueClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsTrueClass

    static name: string
}

interface ExpressionOperatorIsTruePrivate {
}

class ExpressionOperatorIsTruePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsTruePrivate

    static name: string
}

interface ExpressionOperatorIsNotTrueClass {
}

abstract class ExpressionOperatorIsNotTrueClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotTrueClass

    static name: string
}

interface ExpressionOperatorIsNotTruePrivate {
}

class ExpressionOperatorIsNotTruePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotTruePrivate

    static name: string
}

interface ExpressionOperatorIsFalseClass {
}

abstract class ExpressionOperatorIsFalseClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsFalseClass

    static name: string
}

interface ExpressionOperatorIsFalsePrivate {
}

class ExpressionOperatorIsFalsePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsFalsePrivate

    static name: string
}

interface ExpressionOperatorIsNotFalseClass {
}

abstract class ExpressionOperatorIsNotFalseClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotFalseClass

    static name: string
}

interface ExpressionOperatorIsNotFalsePrivate {
}

class ExpressionOperatorIsNotFalsePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotFalsePrivate

    static name: string
}

interface ExpressionOperatorIsNotUnknownClass {
}

abstract class ExpressionOperatorIsNotUnknownClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotUnknownClass

    static name: string
}

interface ExpressionOperatorIsNotUnknownPrivate {
}

class ExpressionOperatorIsNotUnknownPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotUnknownPrivate

    static name: string
}

interface ExpressionOperatorIsUnknownClass {
}

abstract class ExpressionOperatorIsUnknownClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsUnknownClass

    static name: string
}

interface ExpressionOperatorIsUnknownPrivate {
}

class ExpressionOperatorIsUnknownPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsUnknownPrivate

    static name: string
}

interface ExpressionOperatorIsDistinctClass {
}

abstract class ExpressionOperatorIsDistinctClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctClass

    static name: string
}

interface ExpressionOperatorIsDistinctPrivate {
}

class ExpressionOperatorIsDistinctPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctPrivate

    static name: string
}

interface ExpressionOperatorIsNotDistinctClass {
}

abstract class ExpressionOperatorIsNotDistinctClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctClass

    static name: string
}

interface ExpressionOperatorIsNotDistinctPrivate {
}

class ExpressionOperatorIsNotDistinctPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctPrivate

    static name: string
}

interface ExpressionOperatorIsDistinctFromClass {
}

abstract class ExpressionOperatorIsDistinctFromClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctFromClass

    static name: string
}

interface ExpressionOperatorIsDistinctFromPrivate {
}

class ExpressionOperatorIsDistinctFromPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctFromPrivate

    static name: string
}

interface ExpressionOperatorIsNotDistinctFromClass {
}

abstract class ExpressionOperatorIsNotDistinctFromClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctFromClass

    static name: string
}

interface ExpressionOperatorIsNotDistinctFromPrivate {
}

class ExpressionOperatorIsNotDistinctFromPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctFromPrivate

    static name: string
}

interface ExpressionOperatorThreetermClass {
}

abstract class ExpressionOperatorThreetermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorThreetermClass

    static name: string
}

interface ExpressionOperatorThreetermPrivate {
}

class ExpressionOperatorThreetermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorThreetermPrivate

    static name: string
}

interface ExpressionOperatorBetweenClass {
}

abstract class ExpressionOperatorBetweenClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenClass

    static name: string
}

interface ExpressionOperatorBetweenPrivate {
}

class ExpressionOperatorBetweenPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenPrivate

    static name: string
}

interface ExpressionOperatorBetweenAndClass {
}

abstract class ExpressionOperatorBetweenAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenAndClass

    static name: string
}

interface ExpressionOperatorBetweenAndPrivate {
}

class ExpressionOperatorBetweenAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenAndPrivate

    static name: string
}

interface ExpressionOperatorNotBetweenClass {
}

abstract class ExpressionOperatorNotBetweenClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenClass

    static name: string
}

interface ExpressionOperatorNotBetweenPrivate {
}

class ExpressionOperatorNotBetweenPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenPrivate

    static name: string
}

interface ExpressionOperatorNotBetweenAndClass {
}

abstract class ExpressionOperatorNotBetweenAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenAndClass

    static name: string
}

interface ExpressionOperatorNotBetweenAndPrivate {
}

class ExpressionOperatorNotBetweenAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenAndPrivate

    static name: string
}

interface ExpressionOperatorBetweenSymmetricClass {
}

abstract class ExpressionOperatorBetweenSymmetricClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricClass

    static name: string
}

interface ExpressionOperatorBetweenSymmetricPrivate {
}

class ExpressionOperatorBetweenSymmetricPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricPrivate

    static name: string
}

interface ExpressionOperatorBetweenSymmetricAndClass {
}

abstract class ExpressionOperatorBetweenSymmetricAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAndClass

    static name: string
}

interface ExpressionOperatorBetweenSymmetricAndPrivate {
}

class ExpressionOperatorBetweenSymmetricAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAndPrivate

    static name: string
}

interface ExpressionOperatorNotBetweenSymmetricClass {
}

abstract class ExpressionOperatorNotBetweenSymmetricClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricClass

    static name: string
}

interface ExpressionOperatorNotBetweenSymmetricPrivate {
}

class ExpressionOperatorNotBetweenSymmetricPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricPrivate

    static name: string
}

interface ExpressionOperatorNotBetweenSymmetricAndClass {
}

abstract class ExpressionOperatorNotBetweenSymmetricAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAndClass

    static name: string
}

interface ExpressionOperatorNotBetweenSymmetricAndPrivate {
}

class ExpressionOperatorNotBetweenSymmetricAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAndPrivate

    static name: string
}

interface ExpressionValueClass {
}

abstract class ExpressionValueClass {

    // Own properties of Vda-1.Vda.ExpressionValueClass

    static name: string
}

interface ExpressionValuePrivate {
}

class ExpressionValuePrivate {

    // Own properties of Vda-1.Vda.ExpressionValuePrivate

    static name: string
}

interface ExpressionValueParameterClass {
}

abstract class ExpressionValueParameterClass {

    // Own properties of Vda-1.Vda.ExpressionValueParameterClass

    static name: string
}

interface ExpressionValueParameterPrivate {
}

class ExpressionValueParameterPrivate {

    // Own properties of Vda-1.Vda.ExpressionValueParameterPrivate

    static name: string
}

interface HashListClass {
}

abstract class HashListClass {

    // Own properties of Vda-1.Vda.HashListClass

    static name: string
}

interface HashListPrivate {
}

class HashListPrivate {

    // Own properties of Vda-1.Vda.HashListPrivate

    static name: string
}

interface InvalidQueryClass {
}

abstract class InvalidQueryClass {

    // Own properties of Vda-1.Vda.InvalidQueryClass

    static name: string
}

interface InvalidQueryPrivate {
}

class InvalidQueryPrivate {

    // Own properties of Vda-1.Vda.InvalidQueryPrivate

    static name: string
}

interface InvalidPreparedQueryClass {
}

abstract class InvalidPreparedQueryClass {

    // Own properties of Vda-1.Vda.InvalidPreparedQueryClass

    static name: string
}

interface InvalidPreparedQueryPrivate {
}

class InvalidPreparedQueryPrivate {

    // Own properties of Vda-1.Vda.InvalidPreparedQueryPrivate

    static name: string
}

interface InvalidResultClass {
}

abstract class InvalidResultClass {

    // Own properties of Vda-1.Vda.InvalidResultClass

    static name: string
}

interface InvalidResultPrivate {
}

class InvalidResultPrivate {

    // Own properties of Vda-1.Vda.InvalidResultPrivate

    static name: string
}

interface ParametersClass {
}

abstract class ParametersClass {

    // Own properties of Vda-1.Vda.ParametersClass

    static name: string
}

interface ParametersPrivate {
}

class ParametersPrivate {

    // Own properties of Vda-1.Vda.ParametersPrivate

    static name: string
}

interface ParserClass {
}

abstract class ParserClass {

    // Own properties of Vda-1.Vda.ParserClass

    static name: string
}

interface ParserPrivate {
}

class ParserPrivate {

    // Own properties of Vda-1.Vda.ParserPrivate

    static name: string
}

interface TableReferenceClass {
}

abstract class TableReferenceClass {

    // Own properties of Vda-1.Vda.TableReferenceClass

    static name: string
}

interface TableReferencePrivate {
}

class TableReferencePrivate {

    // Own properties of Vda-1.Vda.TableReferencePrivate

    static name: string
}

interface ValueClass {

    // Own fields of Vda-1.Vda.ValueClass

    force_value: (val: any) => boolean
    from_value: (val: any) => boolean
    cast: (type: GObject.GType) => SqlValue | null
    is_compatible: (type: GObject.GType) => boolean
    parse: (str: string) => boolean
    to_gvalue: () => /* result */ any
    to_string: () => string
    to_string_quoted: () => string
    to_sql_expression: () => string
}

abstract class ValueClass {

    // Own properties of Vda-1.Vda.ValueClass

    static name: string
}

interface ValuePrivate {
}

class ValuePrivate {

    // Own properties of Vda-1.Vda.ValuePrivate

    static name: string
}

interface ValueNullClass {
}

abstract class ValueNullClass {

    // Own properties of Vda-1.Vda.ValueNullClass

    static name: string
}

interface ValueNullPrivate {
}

class ValueNullPrivate {

    // Own properties of Vda-1.Vda.ValueNullPrivate

    static name: string
}

interface ValueStringClass {
}

abstract class ValueStringClass {

    // Own properties of Vda-1.Vda.ValueStringClass

    static name: string
}

interface ValueStringPrivate {
}

class ValueStringPrivate {

    // Own properties of Vda-1.Vda.ValueStringPrivate

    static name: string
}

interface ValueXmlClass {
}

abstract class ValueXmlClass {

    // Own properties of Vda-1.Vda.ValueXmlClass

    static name: string
}

interface ValueXmlPrivate {
}

class ValueXmlPrivate {

    // Own properties of Vda-1.Vda.ValueXmlPrivate

    static name: string
}

interface ValueJsonClass {
}

abstract class ValueJsonClass {

    // Own properties of Vda-1.Vda.ValueJsonClass

    static name: string
}

interface ValueJsonPrivate {
}

class ValueJsonPrivate {

    // Own properties of Vda-1.Vda.ValueJsonPrivate

    static name: string
}

interface ValueTextClass {
}

abstract class ValueTextClass {

    // Own properties of Vda-1.Vda.ValueTextClass

    static name: string
}

interface ValueTextPrivate {
}

class ValueTextPrivate {

    // Own properties of Vda-1.Vda.ValueTextPrivate

    static name: string
}

interface ValueNameClass {
}

abstract class ValueNameClass {

    // Own properties of Vda-1.Vda.ValueNameClass

    static name: string
}

interface ValueNamePrivate {
}

class ValueNamePrivate {

    // Own properties of Vda-1.Vda.ValueNamePrivate

    static name: string
}

interface ValueBoolClass {
}

abstract class ValueBoolClass {

    // Own properties of Vda-1.Vda.ValueBoolClass

    static name: string
}

interface ValueBoolPrivate {
}

class ValueBoolPrivate {

    // Own properties of Vda-1.Vda.ValueBoolPrivate

    static name: string
}

interface ValueBitClass {
}

abstract class ValueBitClass {

    // Own properties of Vda-1.Vda.ValueBitClass

    static name: string
}

interface ValueBitPrivate {
}

class ValueBitPrivate {

    // Own properties of Vda-1.Vda.ValueBitPrivate

    static name: string
}

interface ValueIntegerClass {
}

abstract class ValueIntegerClass {

    // Own properties of Vda-1.Vda.ValueIntegerClass

    static name: string
}

interface ValueIntegerPrivate {
}

class ValueIntegerPrivate {

    // Own properties of Vda-1.Vda.ValueIntegerPrivate

    static name: string
}

interface ValueByteClass {
}

abstract class ValueByteClass {

    // Own properties of Vda-1.Vda.ValueByteClass

    static name: string
}

interface ValueBytePrivate {
}

class ValueBytePrivate {

    // Own properties of Vda-1.Vda.ValueBytePrivate

    static name: string
}

interface ValueInt2Class {
}

abstract class ValueInt2Class {

    // Own properties of Vda-1.Vda.ValueInt2Class

    static name: string
}

interface ValueInt2Private {
}

class ValueInt2Private {

    // Own properties of Vda-1.Vda.ValueInt2Private

    static name: string
}

interface ValueInt4Class {
}

abstract class ValueInt4Class {

    // Own properties of Vda-1.Vda.ValueInt4Class

    static name: string
}

interface ValueInt4Private {
}

class ValueInt4Private {

    // Own properties of Vda-1.Vda.ValueInt4Private

    static name: string
}

interface ValueInt8Class {
}

abstract class ValueInt8Class {

    // Own properties of Vda-1.Vda.ValueInt8Class

    static name: string
}

interface ValueInt8Private {
}

class ValueInt8Private {

    // Own properties of Vda-1.Vda.ValueInt8Private

    static name: string
}

interface ValueUnsignedIntegerClass {
}

abstract class ValueUnsignedIntegerClass {

    // Own properties of Vda-1.Vda.ValueUnsignedIntegerClass

    static name: string
}

interface ValueUnsignedIntegerPrivate {
}

class ValueUnsignedIntegerPrivate {

    // Own properties of Vda-1.Vda.ValueUnsignedIntegerPrivate

    static name: string
}

interface ValueUnsignedByteClass {
}

abstract class ValueUnsignedByteClass {

    // Own properties of Vda-1.Vda.ValueUnsignedByteClass

    static name: string
}

interface ValueUnsignedBytePrivate {
}

class ValueUnsignedBytePrivate {

    // Own properties of Vda-1.Vda.ValueUnsignedBytePrivate

    static name: string
}

interface ValueUnsignedInt2Class {
}

abstract class ValueUnsignedInt2Class {

    // Own properties of Vda-1.Vda.ValueUnsignedInt2Class

    static name: string
}

interface ValueUnsignedInt2Private {
}

class ValueUnsignedInt2Private {

    // Own properties of Vda-1.Vda.ValueUnsignedInt2Private

    static name: string
}

interface ValueUnsignedInt4Class {
}

abstract class ValueUnsignedInt4Class {

    // Own properties of Vda-1.Vda.ValueUnsignedInt4Class

    static name: string
}

interface ValueUnsignedInt4Private {
}

class ValueUnsignedInt4Private {

    // Own properties of Vda-1.Vda.ValueUnsignedInt4Private

    static name: string
}

interface ValueUnsignedInt8Class {
}

abstract class ValueUnsignedInt8Class {

    // Own properties of Vda-1.Vda.ValueUnsignedInt8Class

    static name: string
}

interface ValueUnsignedInt8Private {
}

class ValueUnsignedInt8Private {

    // Own properties of Vda-1.Vda.ValueUnsignedInt8Private

    static name: string
}

interface ValueOidClass {
}

abstract class ValueOidClass {

    // Own properties of Vda-1.Vda.ValueOidClass

    static name: string
}

interface ValueOidPrivate {
}

class ValueOidPrivate {

    // Own properties of Vda-1.Vda.ValueOidPrivate

    static name: string
}

interface ValueNumericClass {

    // Own fields of Vda-1.Vda.ValueNumericClass

    format: (str: string) => string
}

abstract class ValueNumericClass {

    // Own properties of Vda-1.Vda.ValueNumericClass

    static name: string
}

interface ValueNumericPrivate {
}

class ValueNumericPrivate {

    // Own properties of Vda-1.Vda.ValueNumericPrivate

    static name: string
}

interface ValueFloatClass {
}

abstract class ValueFloatClass {

    // Own properties of Vda-1.Vda.ValueFloatClass

    static name: string
}

interface ValueFloatPrivate {
}

class ValueFloatPrivate {

    // Own properties of Vda-1.Vda.ValueFloatPrivate

    static name: string
}

interface ValueDoubleClass {
}

abstract class ValueDoubleClass {

    // Own properties of Vda-1.Vda.ValueDoubleClass

    static name: string
}

interface ValueDoublePrivate {
}

class ValueDoublePrivate {

    // Own properties of Vda-1.Vda.ValueDoublePrivate

    static name: string
}

interface ValueMoneyClass {
}

abstract class ValueMoneyClass {

    // Own properties of Vda-1.Vda.ValueMoneyClass

    static name: string
}

interface ValueMoneyPrivate {
}

class ValueMoneyPrivate {

    // Own properties of Vda-1.Vda.ValueMoneyPrivate

    static name: string
}

interface ValueTimestampClass {

    // Own fields of Vda-1.Vda.ValueTimestampClass

    format_local: () => string
    format_utc: () => string
    format_locale: () => string
}

abstract class ValueTimestampClass {

    // Own properties of Vda-1.Vda.ValueTimestampClass

    static name: string
}

interface ValueTimestampPrivate {
}

class ValueTimestampPrivate {

    // Own properties of Vda-1.Vda.ValueTimestampPrivate

    static name: string
}

interface ValueTimestampNtzClass {
}

abstract class ValueTimestampNtzClass {

    // Own properties of Vda-1.Vda.ValueTimestampNtzClass

    static name: string
}

interface ValueTimestampNtzPrivate {
}

class ValueTimestampNtzPrivate {

    // Own properties of Vda-1.Vda.ValueTimestampNtzPrivate

    static name: string
}

interface ValueTimeClass {
}

abstract class ValueTimeClass {

    // Own properties of Vda-1.Vda.ValueTimeClass

    static name: string
}

interface ValueTimePrivate {
}

class ValueTimePrivate {

    // Own properties of Vda-1.Vda.ValueTimePrivate

    static name: string
}

interface ValueTimeNtzClass {
}

abstract class ValueTimeNtzClass {

    // Own properties of Vda-1.Vda.ValueTimeNtzClass

    static name: string
}

interface ValueTimeNtzPrivate {
}

class ValueTimeNtzPrivate {

    // Own properties of Vda-1.Vda.ValueTimeNtzPrivate

    static name: string
}

interface ValueDateClass {
}

abstract class ValueDateClass {

    // Own properties of Vda-1.Vda.ValueDateClass

    static name: string
}

interface ValueDatePrivate {
}

class ValueDatePrivate {

    // Own properties of Vda-1.Vda.ValueDatePrivate

    static name: string
}

interface ValueBinaryClass {
}

abstract class ValueBinaryClass {

    // Own properties of Vda-1.Vda.ValueBinaryClass

    static name: string
}

interface ValueBinaryPrivate {
}

class ValueBinaryPrivate {

    // Own properties of Vda-1.Vda.ValueBinaryPrivate

    static name: string
}

interface ValueMathExpClass {
}

abstract class ValueMathExpClass {

    // Own properties of Vda-1.Vda.ValueMathExpClass

    static name: string
}

interface ValueMathExpPrivate {
}

class ValueMathExpPrivate {

    // Own properties of Vda-1.Vda.ValueMathExpPrivate

    static name: string
}

interface MetaObjectIface {

    // Own fields of Vda-1.Vda.MetaObjectIface

    get_connection: () => Connection
    set_connection: (value: Connection) => void
}

abstract class MetaObjectIface {

    // Own properties of Vda-1.Vda.MetaObjectIface

    static name: string
}

interface MetaNamedObjectIface {

    // Own fields of Vda-1.Vda.MetaNamedObjectIface

    get_name: () => string
    set_name: (value: string) => void
}

abstract class MetaNamedObjectIface {

    // Own properties of Vda-1.Vda.MetaNamedObjectIface

    static name: string
}

interface ColumnModelIface {

    // Own fields of Vda-1.Vda.ColumnModelIface

    get_name: () => string
    get_data_type: () => GObject.GType
}

abstract class ColumnModelIface {

    // Own properties of Vda-1.Vda.ColumnModelIface

    static name: string
}

interface ConnectionIface {

    // Own fields of Vda-1.Vda.ConnectionIface

    close: (_callback_?: Gio.AsyncReadyCallback | null) => void
    close_finish: (_res_: Gio.AsyncResult) => void
    open: (_callback_?: Gio.AsyncReadyCallback | null) => void
    open_finish: (_res_: Gio.AsyncResult) => ConnectionStatus
    open_from_string: (cnc_string: string, _callback_?: Gio.AsyncReadyCallback | null) => void
    open_from_string_finish: (_res_: Gio.AsyncResult) => ConnectionStatus
    parse_string: (sql: string) => Query
    parse_string_prepared: (name: string | null, sql: string) => PreparedQuery | null
    get_prepared_query: (name: string) => PreparedQuery | null
    query_from_command: (cmd: SqlCommand, name?: string | null) => PreparedQuery | null
    value_to_quoted_string: (v: SqlValue) => string
    locale: (category: string) => string
    get_status: () => ConnectionStatus
    get_parameters: () => ConnectionParameters
    set_parameters: (value: ConnectionParameters) => void
    get_is_opened: () => boolean
    get_connection_string: () => string
}

abstract class ConnectionIface {

    // Own properties of Vda-1.Vda.ConnectionIface

    static name: string
}

interface ConnectionBlobIface {

    // Own fields of Vda-1.Vda.ConnectionBlobIface

    create: (stream: Gio.InputStream) => SqlValueBlob
    delete_: (val: SqlValueBlob) => void
}

abstract class ConnectionBlobIface {

    // Own properties of Vda-1.Vda.ConnectionBlobIface

    static name: string
}

interface ConnectionRolebasedIface {

    // Own fields of Vda-1.Vda.ConnectionRolebasedIface

    current_role: () => Role | null
    create_role: (name: string, params: Parameters) => Role | null
}

abstract class ConnectionRolebasedIface {

    // Own properties of Vda-1.Vda.ConnectionRolebasedIface

    static name: string
}

interface ConnectionTransactionalIface {

    // Own fields of Vda-1.Vda.ConnectionTransactionalIface

    add_savepoint: (name?: string | null) => boolean
    delete_savepoint: (name?: string | null) => boolean
    rollback_savepoint: (name?: string | null) => boolean
    begin_transaction: (name?: string | null) => boolean
    commit_transaction: (name?: string | null) => boolean
    rollback_transaction: (name?: string | null) => boolean
}

abstract class ConnectionTransactionalIface {

    // Own properties of Vda-1.Vda.ConnectionTransactionalIface

    static name: string
}

interface DataObjectIface {

    // Own fields of Vda-1.Vda.DataObjectIface

    update_data_from_db: (_callback_?: Gio.AsyncReadyCallback | null) => void
    update_data_from_db_finish: (_res_: Gio.AsyncResult) => void
    update_data_from_db_pkey: (_callback_?: Gio.AsyncReadyCallback | null) => void
    update_data_from_db_pkey_finish: (_res_: Gio.AsyncResult) => void
    update_data_from_db_full: (use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback | null) => void
    update_data_from_db_full_finish: (_res_: Gio.AsyncResult) => void
    insert_data_into_db: (_callback_?: Gio.AsyncReadyCallback | null) => void
    insert_data_into_db_finish: (_res_: Gio.AsyncResult) => void
    delete_data_from_db: (_callback_?: Gio.AsyncReadyCallback | null) => void
    delete_data_from_db_finish: (_res_: Gio.AsyncResult) => void
    delete_data_from_db_pkey: (_callback_?: Gio.AsyncReadyCallback | null) => void
    delete_data_from_db_pkey_finish: (_res_: Gio.AsyncResult) => void
    delete_data_from_db_full: (use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback | null) => void
    delete_data_from_db_full_finish: (_res_: Gio.AsyncResult) => void
    update_data_into_db: (_callback_?: Gio.AsyncReadyCallback | null) => void
    update_data_into_db_finish: (_res_: Gio.AsyncResult) => void
    update_data_into_db_pkey: (_callback_?: Gio.AsyncReadyCallback | null) => void
    update_data_into_db_pkey_finish: (_res_: Gio.AsyncResult) => void
    update_data_into_db_full: (use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback | null) => void
    update_data_into_db_full_finish: (_res_: Gio.AsyncResult) => void
    update_from_row: (table: TableModel, nrow: number) => void
    get_database_connection: () => Connection
    set_database_connection: (value: Connection) => void
    get_database_table_name: () => string
    set_database_table_name: (value: string) => void
    get_cancellable: () => Gio.Cancellable
    set_cancellable: (value: Gio.Cancellable) => void
}

abstract class DataObjectIface {

    // Own properties of Vda-1.Vda.DataObjectIface

    static name: string
}

interface DataCollectionIface {

    // Own fields of Vda-1.Vda.DataCollectionIface

    get_objects: (_callback_?: Gio.AsyncReadyCallback | null) => void
    get_objects_finish: (_res_: Gio.AsyncResult) => TableModel
    get_database_connection: () => Connection
    set_database_connection: (value: Connection) => void
    get_parent_property: () => string
    get_parent: () => DataObject
    get_object_type: () => GObject.GType
    get_ref_field: () => string
    get_cancellable: () => Gio.Cancellable
    set_cancellable: (value: Gio.Cancellable) => void
}

abstract class DataCollectionIface {

    // Own properties of Vda-1.Vda.DataCollectionIface

    static name: string
}

interface HashModelIface {

    // Own fields of Vda-1.Vda.HashModelIface

    add: (object: GObject.Object) => void
    find: (key: GObject.Object) => GObject.Object | null
    remove: (object: GObject.Object) => void
}

abstract class HashModelIface {

    // Own properties of Vda-1.Vda.HashModelIface

    static name: string
}

interface InsertedIface {

    // Own fields of Vda-1.Vda.InsertedIface

    get_number: () => number
    get_last_inserted: () => RowModel
}

abstract class InsertedIface {

    // Own properties of Vda-1.Vda.InsertedIface

    static name: string
}

interface ParsedQueryIface {

    // Own fields of Vda-1.Vda.ParsedQueryIface

    get_command: () => SqlCommand
}

abstract class ParsedQueryIface {

    // Own properties of Vda-1.Vda.ParsedQueryIface

    static name: string
}

interface PreparedQueryIface {

    // Own fields of Vda-1.Vda.PreparedQueryIface

    get_name: () => string
    get_parameters: () => SqlParameters
}

abstract class PreparedQueryIface {

    // Own properties of Vda-1.Vda.PreparedQueryIface

    static name: string
}

interface QueryIface {

    // Own fields of Vda-1.Vda.QueryIface

    execute: (cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    execute_finish: (_res_: Gio.AsyncResult) => Result | null
    cancel: (_callback_?: Gio.AsyncReadyCallback | null) => void
    cancel_finish: (_res_: Gio.AsyncResult) => void
    render_sql: () => string
    get_sql: () => string
    get_connection: () => Connection
}

abstract class QueryIface {

    // Own properties of Vda-1.Vda.QueryIface

    static name: string
}

interface ResultIface {
}

abstract class ResultIface {

    // Own properties of Vda-1.Vda.ResultIface

    static name: string
}

interface RoleIface {

    // Own fields of Vda-1.Vda.RoleIface

    name: (_callback_?: Gio.AsyncReadyCallback | null) => void
    name_finish: (_res_: Gio.AsyncResult) => string
    membership: (_callback_?: Gio.AsyncReadyCallback | null) => void
    membership_finish: (_res_: Gio.AsyncResult) => HashModel
    privilages: (object: MetaObject, _callback_?: Gio.AsyncReadyCallback | null) => void
    privilages_finish: (_res_: Gio.AsyncResult) => RoleGrant
    change_privilages: (object: MetaObject, grant: RoleGrant, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_privilages_finish: (_res_: Gio.AsyncResult) => void
    get_connection: () => Connection
}

abstract class RoleIface {

    // Own properties of Vda-1.Vda.RoleIface

    static name: string
}

interface RowModelIface {

    // Own fields of Vda-1.Vda.RowModelIface

    get_column: (name: string) => ColumnModel | null
    get_column_at: (col: number) => ColumnModel | null
    get_value: (name: string) => SqlValue | null
    get_value_at: (col: number) => SqlValue | null
    get_string: (name: string) => string | null
    get_string_at: (col: number) => string | null
    get_n_columns: () => number
}

abstract class RowModelIface {

    // Own properties of Vda-1.Vda.RowModelIface

    static name: string
}

interface SqlAffectedRowsIface {

    // Own fields of Vda-1.Vda.SqlAffectedRowsIface

    get_number: () => number
}

abstract class SqlAffectedRowsIface {

    // Own properties of Vda-1.Vda.SqlAffectedRowsIface

    static name: string
}

interface SqlCommandIface {

    // Own fields of Vda-1.Vda.SqlCommandIface

    get_connection: () => Connection
}

abstract class SqlCommandIface {

    // Own properties of Vda-1.Vda.SqlCommandIface

    static name: string
}

interface SqlCommandConditionalIface {

    // Own fields of Vda-1.Vda.SqlCommandConditionalIface

    get_condition: () => SqlExpression
}

abstract class SqlCommandConditionalIface {

    // Own properties of Vda-1.Vda.SqlCommandConditionalIface

    static name: string
}

interface SqlCommandDeleteIface {

    // Own fields of Vda-1.Vda.SqlCommandDeleteIface

    stringify: () => string
    to_query: (name?: string | null) => Query
    parse: (sql: string) => void
}

abstract class SqlCommandDeleteIface {

    // Own properties of Vda-1.Vda.SqlCommandDeleteIface

    static name: string
}

interface SqlCommandInsertIface {

    // Own fields of Vda-1.Vda.SqlCommandInsertIface

    stringify: () => string
    to_query: (name?: string | null) => Query
    parse: (sql: string) => void
}

abstract class SqlCommandInsertIface {

    // Own properties of Vda-1.Vda.SqlCommandInsertIface

    static name: string
}

interface SqlCommandModificationIface {

    // Own fields of Vda-1.Vda.SqlCommandModificationIface

    add_field_value: (name: string, val?: any | null) => void
    add_field: (name: string) => void
    add_value: (val?: any | null) => void
    add_field_parameter_value: (field: string, par: string, gtype: GObject.GType) => void
    add_parameter: (par: string, gtype: GObject.GType) => void
    get_fields: () => HashModel
    get_values: () => HashModel
}

abstract class SqlCommandModificationIface {

    // Own properties of Vda-1.Vda.SqlCommandModificationIface

    static name: string
}

interface SqlCommandParametrizedIface {

    // Own fields of Vda-1.Vda.SqlCommandParametrizedIface

    get_parameters: () => SqlParameters
}

abstract class SqlCommandParametrizedIface {

    // Own properties of Vda-1.Vda.SqlCommandParametrizedIface

    static name: string
}

interface SqlCommandSelectIface {

    // Own fields of Vda-1.Vda.SqlCommandSelectIface

    add_field: (field: string, table_ref?: string | null, alias?: string | null) => void
    add_table: (name: string, allias?: string | null) => void
    add_value_field: (val: any, allias?: string | null) => void
    add_math_exp_field: (exp: string, allias?: string | null) => void
    stringify: () => string
    to_query: (name?: string | null) => PreparedQuery
    parse: (sql: string) => void
    get_fields: () => HashModel
    get_tables: () => HashModel
}

abstract class SqlCommandSelectIface {

    // Own properties of Vda-1.Vda.SqlCommandSelectIface

    static name: string
}

interface SqlCommandTableRelatedIface {

    // Own fields of Vda-1.Vda.SqlCommandTableRelatedIface

    get_table: () => string
    set_table: (value: string) => void
    get_allias: () => string
    set_allias: (value: string) => void
}

abstract class SqlCommandTableRelatedIface {

    // Own properties of Vda-1.Vda.SqlCommandTableRelatedIface

    static name: string
}

interface SqlCommandUpdateIface {

    // Own fields of Vda-1.Vda.SqlCommandUpdateIface

    stringify: () => string
    to_query: (name?: string | null) => Query
    parse: (sql: string) => void
}

abstract class SqlCommandUpdateIface {

    // Own properties of Vda-1.Vda.SqlCommandUpdateIface

    static name: string
}

interface SqlExpressionIface {

    // Own fields of Vda-1.Vda.SqlExpressionIface

    add_expression: (exp: SqlExpression) => void
    remove_expression: (exp: SqlExpression) => void
    to_string: () => string
    add_math_expression: (str: string, cnc: Connection, params?: SqlParameters | null) => void
}

abstract class SqlExpressionIface {

    // Own properties of Vda-1.Vda.SqlExpressionIface

    static name: string
}

interface SqlExpressionFieldIface {

    // Own fields of Vda-1.Vda.SqlExpressionFieldIface

    get_table_ref: () => string
    set_table_ref: (value: string) => void
    get_name: () => string
    set_name: (value: string) => void
    get_allias: () => string | null
    set_allias: (value?: string | null) => void
}

abstract class SqlExpressionFieldIface {

    // Own properties of Vda-1.Vda.SqlExpressionFieldIface

    static name: string
}

interface SqlExpressionOperatorIface {

    // Own fields of Vda-1.Vda.SqlExpressionOperatorIface

    create_field_expression: (name: string) => SqlExpressionField
    create_value_expression: (val: any | null, cnc: Connection) => SqlExpressionValue
    create_parameter_expression: (name: string, gtype: GObject.GType) => SqlExpressionValueParameter
    add_and_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_or_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_eq_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_diff_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_like_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_gt_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_geq_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_leq_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_similar_to_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_is_null_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_is_not_null_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_not_operator: (exp: SqlExpression) => SqlExpressionOperator
    add_is_true_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_is_not_true_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_is_false_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_is_not_false_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_is_unknown_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_is_not_unknown_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_in_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_not_in_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_concatenate_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_plus_operator: (exp1: SqlExpression, exp2?: SqlExpression | null) => SqlExpressionOperator
    add_minus_operator: (exp1: SqlExpression, exp2?: SqlExpression | null) => SqlExpressionOperator
    add_star_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_div_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_regexp_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_between_operator: (exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression) => SqlExpressionOperator
    add_not_between_operator: (exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression) => SqlExpressionOperator
    add_between_symmetric_operator: (exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression) => SqlExpressionOperator
    add_not_between_symmetric_operator: (exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression) => SqlExpressionOperator
    add_is_distinct_from_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_is_not_distinct_from_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    get_operator_type: () => SqlExpressionOperatorType
}

abstract class SqlExpressionOperatorIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIface

    static name: string
}

interface SqlExpressionOperatorGroupIface {
}

abstract class SqlExpressionOperatorGroupIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGroupIface

    static name: string
}

interface SqlExpressionOperatorMultitermIface {
}

abstract class SqlExpressionOperatorMultitermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorMultitermIface

    static name: string
}

interface SqlExpressionOperatorAndIface {
}

abstract class SqlExpressionOperatorAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorAndIface

    static name: string
}

interface SqlExpressionOperatorOrIface {
}

abstract class SqlExpressionOperatorOrIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorOrIface

    static name: string
}

interface SqlExpressionOperatorBinarytermIface {
}

abstract class SqlExpressionOperatorBinarytermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBinarytermIface

    static name: string
}

interface SqlExpressionOperatorEqIface {
}

abstract class SqlExpressionOperatorEqIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorEqIface

    static name: string
}

interface SqlExpressionOperatorNotEqIface {
}

abstract class SqlExpressionOperatorNotEqIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotEqIface

    static name: string
}

interface SqlExpressionOperatorDiffIface {
}

abstract class SqlExpressionOperatorDiffIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorDiffIface

    static name: string
}

interface SqlExpressionOperatorGtIface {
}

abstract class SqlExpressionOperatorGtIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGtIface

    static name: string
}

interface SqlExpressionOperatorLtIface {
}

abstract class SqlExpressionOperatorLtIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLtIface

    static name: string
}

interface SqlExpressionOperatorGeqIface {
}

abstract class SqlExpressionOperatorGeqIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGeqIface

    static name: string
}

interface SqlExpressionOperatorLeqIface {
}

abstract class SqlExpressionOperatorLeqIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLeqIface

    static name: string
}

interface SqlExpressionOperatorRegexpIface {
}

abstract class SqlExpressionOperatorRegexpIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorRegexpIface

    static name: string
}

interface SqlExpressionOperatorStarIface {
}

abstract class SqlExpressionOperatorStarIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorStarIface

    static name: string
}

interface SqlExpressionOperatorDivIface {
}

abstract class SqlExpressionOperatorDivIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorDivIface

    static name: string
}

interface SqlExpressionOperatorInIface {
}

abstract class SqlExpressionOperatorInIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorInIface

    static name: string
}

interface SqlExpressionOperatorNotInIface {
}

abstract class SqlExpressionOperatorNotInIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotInIface

    static name: string
}

interface SqlExpressionOperatorConcatenateIface {
}

abstract class SqlExpressionOperatorConcatenateIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorConcatenateIface

    static name: string
}

interface SqlExpressionOperatorSimilarToIface {
}

abstract class SqlExpressionOperatorSimilarToIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorSimilarToIface

    static name: string
}

interface SqlExpressionOperatorLikeIface {
}

abstract class SqlExpressionOperatorLikeIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLikeIface

    static name: string
}

interface SqlExpressionOperatorNotLikeIface {
}

abstract class SqlExpressionOperatorNotLikeIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotLikeIface

    static name: string
}

interface SqlExpressionOperatorIlikeIface {
}

abstract class SqlExpressionOperatorIlikeIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIlikeIface

    static name: string
}

interface SqlExpressionOperatorNotIlikeIface {
}

abstract class SqlExpressionOperatorNotIlikeIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotIlikeIface

    static name: string
}

interface SqlExpressionOperatorBinaryUnarytermIface {
}

abstract class SqlExpressionOperatorBinaryUnarytermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBinaryUnarytermIface

    static name: string
}

interface SqlExpressionOperatorMinusIface {
}

abstract class SqlExpressionOperatorMinusIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorMinusIface

    static name: string
}

interface SqlExpressionOperatorPlusIface {
}

abstract class SqlExpressionOperatorPlusIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorPlusIface

    static name: string
}

interface SqlExpressionOperatorInitialUnarytermIface {
}

abstract class SqlExpressionOperatorInitialUnarytermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorInitialUnarytermIface

    static name: string
}

interface SqlExpressionOperatorNotIface {
}

abstract class SqlExpressionOperatorNotIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotIface

    static name: string
}

interface SqlExpressionOperatorFinalUnarytermIface {
}

abstract class SqlExpressionOperatorFinalUnarytermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorFinalUnarytermIface

    static name: string
}

interface SqlExpressionOperatorIsIface {
}

abstract class SqlExpressionOperatorIsIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsIface

    static name: string
}

interface SqlExpressionOperatorIsNotIface {
}

abstract class SqlExpressionOperatorIsNotIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotIface

    static name: string
}

interface SqlExpressionOperatorIsNullIface {
}

abstract class SqlExpressionOperatorIsNullIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNullIface

    static name: string
}

interface SqlExpressionOperatorIsNotNullIface {
}

abstract class SqlExpressionOperatorIsNotNullIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotNullIface

    static name: string
}

interface SqlExpressionOperatorIsTrueIface {
}

abstract class SqlExpressionOperatorIsTrueIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsTrueIface

    static name: string
}

interface SqlExpressionOperatorIsNotTrueIface {
}

abstract class SqlExpressionOperatorIsNotTrueIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotTrueIface

    static name: string
}

interface SqlExpressionOperatorIsFalseIface {
}

abstract class SqlExpressionOperatorIsFalseIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsFalseIface

    static name: string
}

interface SqlExpressionOperatorIsNotFalseIface {
}

abstract class SqlExpressionOperatorIsNotFalseIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotFalseIface

    static name: string
}

interface SqlExpressionOperatorIsUnknownIface {
}

abstract class SqlExpressionOperatorIsUnknownIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsUnknownIface

    static name: string
}

interface SqlExpressionOperatorIsNotUnknownIface {
}

abstract class SqlExpressionOperatorIsNotUnknownIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotUnknownIface

    static name: string
}

interface SqlExpressionOperatorIsDistinctIface {
}

abstract class SqlExpressionOperatorIsDistinctIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsDistinctIface

    static name: string
}

interface SqlExpressionOperatorIsNotDistinctIface {
}

abstract class SqlExpressionOperatorIsNotDistinctIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctIface

    static name: string
}

interface SqlExpressionOperatorIsDistinctFromIface {
}

abstract class SqlExpressionOperatorIsDistinctFromIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsDistinctFromIface

    static name: string
}

interface SqlExpressionOperatorIsNotDistinctFromIface {
}

abstract class SqlExpressionOperatorIsNotDistinctFromIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctFromIface

    static name: string
}

interface SqlExpressionOperatorThreetermIface {
}

abstract class SqlExpressionOperatorThreetermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorThreetermIface

    static name: string
}

interface SqlExpressionOperatorBetweenIface {
}

abstract class SqlExpressionOperatorBetweenIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenIface

    static name: string
}

interface SqlExpressionOperatorBetweenAndIface {
}

abstract class SqlExpressionOperatorBetweenAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenAndIface

    static name: string
}

interface SqlExpressionOperatorNotBetweenIface {
}

abstract class SqlExpressionOperatorNotBetweenIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenIface

    static name: string
}

interface SqlExpressionOperatorNotBetweenAndIface {
}

abstract class SqlExpressionOperatorNotBetweenAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenAndIface

    static name: string
}

interface SqlExpressionOperatorBetweenSymmetricIface {
}

abstract class SqlExpressionOperatorBetweenSymmetricIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricIface

    static name: string
}

interface SqlExpressionOperatorBetweenSymmetricAndIface {
}

abstract class SqlExpressionOperatorBetweenSymmetricAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricAndIface

    static name: string
}

interface SqlExpressionOperatorNotBetweenSymmetricIface {
}

abstract class SqlExpressionOperatorNotBetweenSymmetricIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricIface

    static name: string
}

interface SqlExpressionOperatorNotBetweenSymmetricAndIface {
}

abstract class SqlExpressionOperatorNotBetweenSymmetricAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricAndIface

    static name: string
}

interface SqlExpressionValueIface {

    // Own fields of Vda-1.Vda.SqlExpressionValueIface

    set_math_expression_value: (str: string, params?: SqlParameters | null) => void
    get_connection: () => Connection | null
    set_connection: (value?: Connection | null) => void
    get_value: () => SqlValue
    set_value: (value: SqlValue) => void
}

abstract class SqlExpressionValueIface {

    // Own properties of Vda-1.Vda.SqlExpressionValueIface

    static name: string
}

interface SqlExpressionValueParameterIface {

    // Own fields of Vda-1.Vda.SqlExpressionValueParameterIface

    parse: (str: string) => void
    get_parameters: () => SqlParameters
    set_parameters: (value: SqlParameters) => void
    get_name: () => string
    set_name: (value: string) => void
    get_gtype: () => GObject.GType
    set_gtype: (value: GObject.GType) => void
}

abstract class SqlExpressionValueParameterIface {

    // Own properties of Vda-1.Vda.SqlExpressionValueParameterIface

    static name: string
}

interface SqlParametersIface {

    // Own fields of Vda-1.Vda.SqlParametersIface

    set_value: (name: string, val: any) => void
    get_value: (name: string) => any | null
    set_sql_value: (name: string, val: SqlValue) => void
    get_sql_value: (name: string) => SqlValue
    has_param: (name: string) => boolean
}

abstract class SqlParametersIface {

    // Own properties of Vda-1.Vda.SqlParametersIface

    static name: string
}

interface SqlParserIface {

    // Own fields of Vda-1.Vda.SqlParserIface

    parse: (str: string, cnc: Connection) => SqlCommandParametrized
}

abstract class SqlParserIface {

    // Own properties of Vda-1.Vda.SqlParserIface

    static name: string
}

interface SqlTableReferenceIface {

    // Own fields of Vda-1.Vda.SqlTableReferenceIface

    get_name: () => string
    set_name: (value: string) => void
    get_allias: () => string | null
    set_allias: (value?: string | null) => void
}

abstract class SqlTableReferenceIface {

    // Own properties of Vda-1.Vda.SqlTableReferenceIface

    static name: string
}

interface StringifiableIface {

    // Own fields of Vda-1.Vda.StringifiableIface

    to_string: () => string
}

abstract class StringifiableIface {

    // Own properties of Vda-1.Vda.StringifiableIface

    static name: string
}

interface SqlValueIface {

    // Own fields of Vda-1.Vda.SqlValueIface

    parse: (str: string) => boolean
    from_value: (val: any) => boolean
    cast: (type: GObject.GType) => SqlValue | null
    is_compatible: (type: GObject.GType) => boolean
    to_gvalue: () => /* result */ any
    to_string_quoted: () => string
    to_sql_expression: () => string
    get_name: () => string
}

abstract class SqlValueIface {

    // Own properties of Vda-1.Vda.SqlValueIface

    static name: string
}

interface SqlValueNullIface {
}

abstract class SqlValueNullIface {

    // Own properties of Vda-1.Vda.SqlValueNullIface

    static name: string
}

interface SqlValueBoolIface {
}

abstract class SqlValueBoolIface {

    // Own properties of Vda-1.Vda.SqlValueBoolIface

    static name: string
}

interface SqlValueBitIface {
}

abstract class SqlValueBitIface {

    // Own properties of Vda-1.Vda.SqlValueBitIface

    static name: string
}

interface SqlValueStringIface {
}

abstract class SqlValueStringIface {

    // Own properties of Vda-1.Vda.SqlValueStringIface

    static name: string
}

interface SqlValueXmlIface {

    // Own fields of Vda-1.Vda.SqlValueXmlIface

    get_document: () => GXml.DomDocument
}

abstract class SqlValueXmlIface {

    // Own properties of Vda-1.Vda.SqlValueXmlIface

    static name: string
}

interface SqlValueJsonIface {

    // Own fields of Vda-1.Vda.SqlValueJsonIface

    get_document: () => Json.Node
}

abstract class SqlValueJsonIface {

    // Own properties of Vda-1.Vda.SqlValueJsonIface

    static name: string
}

interface SqlValueTextIface {
}

abstract class SqlValueTextIface {

    // Own properties of Vda-1.Vda.SqlValueTextIface

    static name: string
}

interface SqlValueNameIface {
}

abstract class SqlValueNameIface {

    // Own properties of Vda-1.Vda.SqlValueNameIface

    static name: string
}

interface SqlValueIntegerIface {
}

abstract class SqlValueIntegerIface {

    // Own properties of Vda-1.Vda.SqlValueIntegerIface

    static name: string
}

interface SqlValueByteIface {
}

abstract class SqlValueByteIface {

    // Own properties of Vda-1.Vda.SqlValueByteIface

    static name: string
}

interface SqlValueInt2Iface {
}

abstract class SqlValueInt2Iface {

    // Own properties of Vda-1.Vda.SqlValueInt2Iface

    static name: string
}

interface SqlValueInt4Iface {
}

abstract class SqlValueInt4Iface {

    // Own properties of Vda-1.Vda.SqlValueInt4Iface

    static name: string
}

interface SqlValueInt8Iface {
}

abstract class SqlValueInt8Iface {

    // Own properties of Vda-1.Vda.SqlValueInt8Iface

    static name: string
}

interface SqlValueUnsignedIntegerIface {
}

abstract class SqlValueUnsignedIntegerIface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedIntegerIface

    static name: string
}

interface SqlValueUnsignedByteIface {
}

abstract class SqlValueUnsignedByteIface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedByteIface

    static name: string
}

interface SqlValueUnsignedInt2Iface {
}

abstract class SqlValueUnsignedInt2Iface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt2Iface

    static name: string
}

interface SqlValueUnsignedInt4Iface {
}

abstract class SqlValueUnsignedInt4Iface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt4Iface

    static name: string
}

interface SqlValueUnsignedInt8Iface {
}

abstract class SqlValueUnsignedInt8Iface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt8Iface

    static name: string
}

interface SqlValueOidIface {
}

abstract class SqlValueOidIface {

    // Own properties of Vda-1.Vda.SqlValueOidIface

    static name: string
}

interface SqlValueNumericIface {

    // Own fields of Vda-1.Vda.SqlValueNumericIface

    set_precision: (p: number) => void
    get_precision: () => number
    format: (str: string) => string
    get_double: () => number
    set_double: (v: number) => void
    get_real: () => number
    set_real: (r: number) => void
    get_imaginary: () => number
    set_imaginary: (img: number) => void
}

abstract class SqlValueNumericIface {

    // Own properties of Vda-1.Vda.SqlValueNumericIface

    static name: string
}

interface SqlValueFloatIface {

    // Own fields of Vda-1.Vda.SqlValueFloatIface

    get_float: () => number
}

abstract class SqlValueFloatIface {

    // Own properties of Vda-1.Vda.SqlValueFloatIface

    static name: string
}

interface SqlValueDoubleIface {
}

abstract class SqlValueDoubleIface {

    // Own properties of Vda-1.Vda.SqlValueDoubleIface

    static name: string
}

interface SqlValueMoneyIface {

    // Own fields of Vda-1.Vda.SqlValueMoneyIface

    locale: () => string
    int_locale: () => string
    get_int_precision: () => number
    set_int_precision: (p: number) => void
}

abstract class SqlValueMoneyIface {

    // Own properties of Vda-1.Vda.SqlValueMoneyIface

    static name: string
}

interface SqlValueDateIface {

    // Own fields of Vda-1.Vda.SqlValueDateIface

    get_date: () => /* result */ GLib.Date
    set_date: (ts: GLib.Date) => void
}

abstract class SqlValueDateIface {

    // Own properties of Vda-1.Vda.SqlValueDateIface

    static name: string
}

interface SqlValueTimestampIface {

    // Own fields of Vda-1.Vda.SqlValueTimestampIface

    format_local: () => string
    format_utc: () => string
    format_locale: () => string
    format_date: () => string
    format_date_locale: () => string
    format_time: () => string
    format_time_local: () => string
    format_time_local_ntz: () => string
    get_timestamp: () => GLib.DateTime
    set_timestamp: (ts: GLib.DateTime) => void
}

abstract class SqlValueTimestampIface {

    // Own properties of Vda-1.Vda.SqlValueTimestampIface

    static name: string
}

interface SqlValueTimestampNtzIface {
}

abstract class SqlValueTimestampNtzIface {

    // Own properties of Vda-1.Vda.SqlValueTimestampNtzIface

    static name: string
}

interface SqlValueTimeIface {
}

abstract class SqlValueTimeIface {

    // Own properties of Vda-1.Vda.SqlValueTimeIface

    static name: string
}

interface SqlValueTimeNtzIface {
}

abstract class SqlValueTimeNtzIface {

    // Own properties of Vda-1.Vda.SqlValueTimeNtzIface

    static name: string
}

interface SqlValueBinaryIface {

    // Own fields of Vda-1.Vda.SqlValueBinaryIface

    get_bytes: () => GLib.Bytes
    get_out_stream: () => Gio.OutputStream | null
    get_input_stream: () => Gio.InputStream | null
    get_size: () => number
}

abstract class SqlValueBinaryIface {

    // Own properties of Vda-1.Vda.SqlValueBinaryIface

    static name: string
}

interface SqlValueBlobIface {

    // Own fields of Vda-1.Vda.SqlValueBlobIface

    create: (stream: Gio.InputStream) => void
    delete_: () => void
    write: (file: Gio.File) => void
    read: (file: Gio.File) => void
    get_connection: () => Connection
}

abstract class SqlValueBlobIface {

    // Own properties of Vda-1.Vda.SqlValueBlobIface

    static name: string
}

interface SqlValueBlobOidIface {

    // Own fields of Vda-1.Vda.SqlValueBlobOidIface

    get_identification: () => number
}

abstract class SqlValueBlobOidIface {

    // Own properties of Vda-1.Vda.SqlValueBlobOidIface

    static name: string
}

interface SqlValueGeometricPointIface {

    // Own fields of Vda-1.Vda.SqlValueGeometricPointIface

    get_x: () => number
    set_x: (value: number) => void
    get_y: () => number
    set_y: (value: number) => void
}

abstract class SqlValueGeometricPointIface {

    // Own properties of Vda-1.Vda.SqlValueGeometricPointIface

    static name: string
}

interface SqlValueMathExpIface {

    // Own fields of Vda-1.Vda.SqlValueMathExpIface

    get_math: () => GCalc.MathEquationManager
    set_math: (value: GCalc.MathEquationManager) => void
}

abstract class SqlValueMathExpIface {

    // Own properties of Vda-1.Vda.SqlValueMathExpIface

    static name: string
}

interface TableModelIface {
}

abstract class TableModelIface {

    // Own properties of Vda-1.Vda.TableModelIface

    static name: string
}

interface TableModelSequentialIface {

    // Own fields of Vda-1.Vda.TableModelSequentialIface

    current: () => RowModel | null
    next: () => boolean
    back: () => boolean
    move: (direction: MoveDirection, relative: number) => boolean
    copy_current: () => RowModel | null
}

abstract class TableModelSequentialIface {

    // Own properties of Vda-1.Vda.TableModelSequentialIface

    static name: string
}

}
export default Vda;