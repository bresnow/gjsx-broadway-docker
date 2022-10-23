// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GXml-0.20
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';

export namespace GXml {

enum CssCombiner {
    NULL,
    NONE,
    INSIDE,
    AND,
    PARENT,
    AFTER,
    PRECEDED,
}
enum CssSelectorType {
    CLASS,
    ID,
    ALL,
    ELEMENT,
    ATTRIBUTE,
    ATTRIBUTE_EQUAL,
    ATTRIBUTE_CONTAINS,
    ATTRIBUTE_SUBSTRING,
    ATTRIBUTE_STARTS_WITH,
    ATTRIBUTE_STARTS_WITH_WORD,
    ATTRIBUTE_ENDS_WITH,
    PSEUDO_CLASS,
}
enum NodeType {
    INVALID,
    ELEMENT,
    ATTRIBUTE,
    TEXT,
    CDATA_SECTION,
    ENTITY_REFERENCE,
    ENTITY,
    PROCESSING_INSTRUCTION,
    COMMENT,
    DOCUMENT,
    DOCUMENT_TYPE,
    DOCUMENT_FRAGMENT,
    NOTATION,
}
enum XPathObjectType {
    UNDEFINED,
    NODESET,
    BOOLEAN,
    NUMBER,
    STRING,
    POINT,
    RANGE,
    LOCATIONSET,
    USERS,
    XSLT_TREE,
}
enum CssSelectorError {
    NULL,
    EOF,
    NOT,
    PSEUDO,
    ATTRIBUTE,
    IDENTIFIER,
    COMBINER,
}
enum DomDocumentError {
    FILE_NOT_FOUND_ERROR,
    INVALID_DOCUMENT_ERROR,
}
enum DomError {
    INDEX_SIZE_ERROR,
    DOMSTRING_SIZE_ERROR,
    HIERARCHY_REQUEST_ERROR,
    WRONG_DOCUMENT_ERROR,
    INVALID_CHARACTER_ERROR,
    NO_DATA_ALLOWED_ERROR,
    NO_MODIFICATION_ALLOWED_ERROR,
    NOT_FOUND_ERROR,
    NOT_SUPPORTED_ERROR,
    INUSE_ATTRIBUTE_ERROR,
    INVALID_STATE_ERROR,
    SYNTAX_ERROR,
    INVALID_MODIFICATION_ERROR,
    NAMESPACE_ERROR,
    INVALID_ACCESS_ERROR,
    VALIDATION_ERROR,
    TYPE_MISMATCH_ERROR,
    SECURITY_ERROR,
    NETWORK_ERROR,
    ABORT_ERROR,
    URL_MISMATCH_ERROR,
    QUOTA_EXCEEDED_ERROR,
    TIME_OUT_ERROR,
    INVALID_NODE_TYPE_ERROR,
    DATA_CLONE_ERROR,
}
enum EnumerationError {
    INVALID_VALUE,
    INVALID_TEXT,
}
enum IXsdSchemaError {
    INVALIDATION_ERROR,
}
enum ParserError {
    INVALID_DATA_ERROR,
    INVALID_FILE_ERROR,
    INVALID_STREAM_ERROR,
}
enum Error {
    NOT_SUPPORTED,
    PARSER,
    WRITER,
}
enum XPathError {
    EXPRESSION_OK,
    NUMBER_ERROR,
    UNFINISHED_LITERAL_ERROR,
    START_LITERAL_ERROR,
    VARIABLE_REF_ERROR,
    UNDEF_VARIABLE_ERROR,
    INVALID_PREDICATE_ERROR,
    EXPR_ERROR,
    UNCLOSED_ERROR,
    UNKNOWN_FUNC_ERROR,
    INVALID_OPERAND,
    INVALID_TYPE,
    INVALID_ARITY,
    INVALID_CTXT_SIZE,
    INVALID_CTXT_POSITION,
    MEMORY_ERROR,
    XPTR_SYNTAX_ERROR,
    XPTR_RESOURCE_ERROR,
    XPTR_SUB_RESOURCE_ERROR,
    UNDEF_PREFIX_ERROR,
    ENCODING_ERROR,
    INVALID_CHAR_ERROR,
    INVALID_CTXT,
}
enum XPathObjectError {
    INVALID_NAMESPACE_ERROR,
}
enum DomNodeFilterFilter {
    ACCEPT,
    REJECT,
    SKIP,
}
enum DomEventPhase {
    NONE,
    CAPTURING_PHASE,
    AT_TARGET,
    BUBBLING_PHASE,
}
enum DomNodeNodeType {
    INVALID,
    ELEMENT_NODE,
    ATTRIBUTE_NODE,
    TEXT_NODE,
    CDATA_SECTION_NODE,
    ENTITY_REFERENCE_NODE,
    ENTITY_NODE,
    PROCESSING_INSTRUCTION_NODE,
    COMMENT_NODE,
    DOCUMENT_NODE,
    DOCUMENT_TYPE_NODE,
    DOCUMENT_FRAGMENT_NODE,
    NOTATION_NODE,
}
enum DomRangeBoundaryPoints {
    START_TO_START,
    START_TO_END,
    END_TO_END,
    END_TO_START,
}
enum DomEventFlags {
    STOP_PROPAGATION_FLAG,
    STOP_IMMEDIATE_PROPAGATION_FLAG,
    CANCELED_FLAG,
    INITIALIZED_FLAG,
    DISPATCH_FLAG,
}
enum DomNodeDocumentPosition {
    NONE,
    DISCONNECTED,
    PRECEDING,
    FOLLOWING,
    CONTAINS,
    CONTAINED_BY,
    IMPLEMENTATION_SPECIFIC,
}
interface DomMutationCallback {
    (mutations: Gee.List, observer: DomMutationObserver): void
}
interface Collection_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.Collection

    element?: DomElement | null
    items_type?: GObject.GType | null
}

interface Collection extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Collection

    readonly nodes_index: GLib.Queue
    element: DomElement
    readonly items_name: string
    items_type: GObject.GType

    // Owm methods of GXml-0.20.GXml.Collection

    get_nodes_index(): GLib.Queue
    get_element(): DomElement
    set_element(value: DomElement): void
    get_items_name(): string
    get_items_type(): GObject.GType
    set_items_type(value: GObject.GType): void
    search(): void
    get_item(index: number): DomElement | null
    append(node: DomElement): void
    get_length(): number
    initialize(t: GObject.GType): void
    create_item(): DomElement | null
    validate_append(index: number, element: DomElement): boolean
    clear(): void

    // Own virtual methods of GXml-0.20.GXml.Collection

    vfunc_get_nodes_index(): GLib.Queue
    vfunc_get_element(): DomElement
    vfunc_set_element(value: DomElement): void
    vfunc_get_items_name(): string
    vfunc_get_items_type(): GObject.GType
    vfunc_set_items_type(value: GObject.GType): void
    vfunc_search(): void
    vfunc_get_item(index: number): DomElement | null
    vfunc_append(node: DomElement): void
    vfunc_get_length(): number
    vfunc_initialize(t: GObject.GType): void
    vfunc_create_item(): DomElement | null
    vfunc_validate_append(index: number, element: DomElement): boolean
    vfunc_clear(): void

    // Class property signals of GXml-0.20.GXml.Collection

    connect(sigName: "notify::nodes-index", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Collection {

    // Own properties of GXml-0.20.GXml.Collection

    static name: string
    static $gtype: GObject.GType<Collection>

    // Constructors of GXml-0.20.GXml.Collection

    constructor(config?: Collection_ConstructProps) 
    _init(config?: Collection_ConstructProps): void
}

interface List_ConstructProps extends GObject.Object_ConstructProps, Collection_ConstructProps, Gee.Traversable_ConstructProps, Gee.Iterable_ConstructProps {
}

interface List extends GObject.Object, Collection, Gee.Traversable, Gee.Iterable {

    // Class property signals of GXml-0.20.GXml.List

    connect(sigName: "notify::nodes-index", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class List {

    // Own properties of GXml-0.20.GXml.List

    static name: string
    static $gtype: GObject.GType<List>

    // Constructors of GXml-0.20.GXml.List

    constructor(config?: List_ConstructProps) 
    _init(config?: List_ConstructProps): void
}

interface MappeableElement_ConstructProps extends GObject.Object_ConstructProps, DomElement_ConstructProps {
}

interface MappeableElement extends GObject.Object, DomElement {

    // Owm methods of GXml-0.20.GXml.MappeableElement

    get_map_key(): string

    // Own virtual methods of GXml-0.20.GXml.MappeableElement

    vfunc_get_map_key(): string

    // Class property signals of GXml-0.20.GXml.MappeableElement

    connect(sigName: "notify::namespace-uri", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MappeableElement {

    // Own properties of GXml-0.20.GXml.MappeableElement

    static name: string
    static $gtype: GObject.GType<MappeableElement>

    // Constructors of GXml-0.20.GXml.MappeableElement

    constructor(config?: MappeableElement_ConstructProps) 
    _init(config?: MappeableElement_ConstructProps): void
}

interface Map_ConstructProps extends GObject.Object_ConstructProps, Collection_ConstructProps, Gee.Traversable_ConstructProps, Gee.Iterable_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.Map

    attribute_key?: string | null
}

interface Map extends GObject.Object, Collection, Gee.Traversable, Gee.Iterable {

    // Own properties of GXml-0.20.GXml.Map

    attribute_key: string
    readonly keys_set: Gee.Set

    // Owm methods of GXml-0.20.GXml.Map

    get_attribute_key(): string
    set_attribute_key(value: string): void
    item(key: string): DomElement | null
    has_key(key: string): boolean
    get_keys_set(): Gee.Set

    // Own virtual methods of GXml-0.20.GXml.Map

    vfunc_get_attribute_key(): string
    vfunc_set_attribute_key(value: string): void
    vfunc_item(key: string): DomElement | null
    vfunc_has_key(key: string): boolean
    vfunc_get_keys_set(): Gee.Set

    // Class property signals of GXml-0.20.GXml.Map

    connect(sigName: "notify::attribute-key", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-key", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-key", ...args: any[]): void
    connect(sigName: "notify::keys-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Map {

    // Own properties of GXml-0.20.GXml.Map

    static name: string
    static $gtype: GObject.GType<Map>

    // Constructors of GXml-0.20.GXml.Map

    constructor(config?: Map_ConstructProps) 
    _init(config?: Map_ConstructProps): void
}

interface MappeableElementPairKey_ConstructProps extends GObject.Object_ConstructProps, DomElement_ConstructProps {
}

interface MappeableElementPairKey extends GObject.Object, DomElement {

    // Owm methods of GXml-0.20.GXml.MappeableElementPairKey

    get_map_primary_key(): string
    get_map_secondary_key(): string

    // Own virtual methods of GXml-0.20.GXml.MappeableElementPairKey

    vfunc_get_map_primary_key(): string
    vfunc_get_map_secondary_key(): string

    // Class property signals of GXml-0.20.GXml.MappeableElementPairKey

    connect(sigName: "notify::namespace-uri", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MappeableElementPairKey {

    // Own properties of GXml-0.20.GXml.MappeableElementPairKey

    static name: string
    static $gtype: GObject.GType<MappeableElementPairKey>

    // Constructors of GXml-0.20.GXml.MappeableElementPairKey

    constructor(config?: MappeableElementPairKey_ConstructProps) 
    _init(config?: MappeableElementPairKey_ConstructProps): void
}

interface PairedMap_ConstructProps extends GObject.Object_ConstructProps, Collection_ConstructProps, Gee.Traversable_ConstructProps, Gee.Iterable_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.PairedMap

    attribute_primary_key?: string | null
    attribute_secondary_key?: string | null
}

interface PairedMap extends GObject.Object, Collection, Gee.Traversable, Gee.Iterable {

    // Own properties of GXml-0.20.GXml.PairedMap

    attribute_primary_key: string
    attribute_secondary_key: string
    readonly primary_keys_set: Gee.Set

    // Owm methods of GXml-0.20.GXml.PairedMap

    get_attribute_primary_key(): string
    set_attribute_primary_key(value: string): void
    get_attribute_secondary_key(): string
    set_attribute_secondary_key(value: string): void
    get_primary_keys_set(): Gee.Set
    item(primary_key: string, secondary_key: string): DomElement | null
    has_primary_key(key: string): boolean
    has_secondary_key(pkey: string, key: string): boolean
    secondary_keys_set(pkey: string): Gee.Set

    // Own virtual methods of GXml-0.20.GXml.PairedMap

    vfunc_get_attribute_primary_key(): string
    vfunc_set_attribute_primary_key(value: string): void
    vfunc_get_attribute_secondary_key(): string
    vfunc_set_attribute_secondary_key(value: string): void
    vfunc_get_primary_keys_set(): Gee.Set
    vfunc_item(primary_key: string, secondary_key: string): DomElement | null
    vfunc_has_primary_key(key: string): boolean
    vfunc_has_secondary_key(pkey: string, key: string): boolean
    vfunc_secondary_keys_set(pkey: string): Gee.Set

    // Class property signals of GXml-0.20.GXml.PairedMap

    connect(sigName: "notify::attribute-primary-key", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-primary-key", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-primary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-secondary-key", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-secondary-key", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-secondary-key", ...args: any[]): void
    connect(sigName: "notify::primary-keys-set", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-keys-set", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PairedMap {

    // Own properties of GXml-0.20.GXml.PairedMap

    static name: string
    static $gtype: GObject.GType<PairedMap>

    // Constructors of GXml-0.20.GXml.PairedMap

    constructor(config?: PairedMap_ConstructProps) 
    _init(config?: PairedMap_ConstructProps): void
}

interface MappeableElementThreeKey_ConstructProps extends GObject.Object_ConstructProps, DomElement_ConstructProps {
}

interface MappeableElementThreeKey extends GObject.Object, DomElement {

    // Owm methods of GXml-0.20.GXml.MappeableElementThreeKey

    get_map_pkey(): string
    get_map_skey(): string
    get_map_tkey(): string

    // Own virtual methods of GXml-0.20.GXml.MappeableElementThreeKey

    vfunc_get_map_pkey(): string
    vfunc_get_map_skey(): string
    vfunc_get_map_tkey(): string

    // Class property signals of GXml-0.20.GXml.MappeableElementThreeKey

    connect(sigName: "notify::namespace-uri", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MappeableElementThreeKey {

    // Own properties of GXml-0.20.GXml.MappeableElementThreeKey

    static name: string
    static $gtype: GObject.GType<MappeableElementThreeKey>

    // Constructors of GXml-0.20.GXml.MappeableElementThreeKey

    constructor(config?: MappeableElementThreeKey_ConstructProps) 
    _init(config?: MappeableElementThreeKey_ConstructProps): void
}

interface ThreeMap_ConstructProps extends GObject.Object_ConstructProps, Collection_ConstructProps, Gee.Traversable_ConstructProps, Gee.Iterable_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.ThreeMap

    attribute_primary_key?: string | null
    attribute_secondary_key?: string | null
    attribute_third_key?: string | null
}

interface ThreeMap extends GObject.Object, Collection, Gee.Traversable, Gee.Iterable {

    // Own properties of GXml-0.20.GXml.ThreeMap

    attribute_primary_key: string
    attribute_secondary_key: string
    attribute_third_key: string
    readonly primary_keys_set: Gee.Set

    // Owm methods of GXml-0.20.GXml.ThreeMap

    get_attribute_primary_key(): string
    set_attribute_primary_key(value: string): void
    get_attribute_secondary_key(): string
    set_attribute_secondary_key(value: string): void
    get_attribute_third_key(): string
    set_attribute_third_key(value: string): void
    get_primary_keys_set(): Gee.Set
    item(primary_key: string, secondary_key: string, third_key: string): DomElement | null
    has_primary_key(key: string): boolean
    has_secondary_key(pkey: string, key: string): boolean
    has_third_key(pkey: string, skey: string, key: string): boolean
    secondary_keys_set(pkey: string): Gee.Set
    third_keys_set(pkey: string, skey: string): Gee.Set

    // Own virtual methods of GXml-0.20.GXml.ThreeMap

    vfunc_get_attribute_primary_key(): string
    vfunc_set_attribute_primary_key(value: string): void
    vfunc_get_attribute_secondary_key(): string
    vfunc_set_attribute_secondary_key(value: string): void
    vfunc_get_attribute_third_key(): string
    vfunc_set_attribute_third_key(value: string): void
    vfunc_get_primary_keys_set(): Gee.Set
    vfunc_item(primary_key: string, secondary_key: string, third_key: string): DomElement | null
    vfunc_has_primary_key(key: string): boolean
    vfunc_has_secondary_key(pkey: string, key: string): boolean
    vfunc_has_third_key(pkey: string, skey: string, key: string): boolean
    vfunc_secondary_keys_set(pkey: string): Gee.Set
    vfunc_third_keys_set(pkey: string, skey: string): Gee.Set

    // Class property signals of GXml-0.20.GXml.ThreeMap

    connect(sigName: "notify::attribute-primary-key", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-primary-key", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-primary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-secondary-key", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-secondary-key", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-secondary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-third-key", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-third-key", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-third-key", ...args: any[]): void
    connect(sigName: "notify::primary-keys-set", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-keys-set", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ThreeMap {

    // Own properties of GXml-0.20.GXml.ThreeMap

    static name: string
    static $gtype: GObject.GType<ThreeMap>

    // Constructors of GXml-0.20.GXml.ThreeMap

    constructor(config?: ThreeMap_ConstructProps) 
    _init(config?: ThreeMap_ConstructProps): void
}

interface CollectionParent_ConstructProps extends GObject.Object_ConstructProps, Collection_ConstructProps {
}

interface CollectionParent extends GObject.Object, Collection {

    // Owm methods of GXml-0.20.GXml.CollectionParent

    get_types(): GLib.HashTable

    // Own virtual methods of GXml-0.20.GXml.CollectionParent

    vfunc_get_types(): GLib.HashTable

    // Class property signals of GXml-0.20.GXml.CollectionParent

    connect(sigName: "notify::nodes-index", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CollectionParent {

    // Own properties of GXml-0.20.GXml.CollectionParent

    static name: string
    static $gtype: GObject.GType<CollectionParent>

    // Constructors of GXml-0.20.GXml.CollectionParent

    constructor(config?: CollectionParent_ConstructProps) 
    _init(config?: CollectionParent_ConstructProps): void
    static add_supported_type(types: GLib.HashTable, parent_type: GObject.GType, type: GObject.GType): void
    static add_supported_types(table: GLib.HashTable, parent_type: GObject.GType, types: GObject.GType[]): void
}

interface DomAttr_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.DomAttr

    value?: string | null
}

interface DomAttr extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomAttr

    readonly namespace_uri: string
    readonly prefix: string
    readonly local_name: string
    readonly name: string
    value: string

    // Owm methods of GXml-0.20.GXml.DomAttr

    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_specified(): boolean

    // Own virtual methods of GXml-0.20.GXml.DomAttr

    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_specified(): boolean

    // Class property signals of GXml-0.20.GXml.DomAttr

    connect(sigName: "notify::namespace-uri", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomAttr {

    // Own properties of GXml-0.20.GXml.DomAttr

    static name: string
    static $gtype: GObject.GType<DomAttr>

    // Constructors of GXml-0.20.GXml.DomAttr

    constructor(config?: DomAttr_ConstructProps) 
    _init(config?: DomAttr_ConstructProps): void
}

interface DomCharacterData_ConstructProps extends GObject.Object_ConstructProps, DomNode_ConstructProps, DomNonDocumentTypeChildNode_ConstructProps, DomChildNode_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.DomCharacterData

    data?: string | null
}

interface DomCharacterData extends GObject.Object, DomNode, DomNonDocumentTypeChildNode, DomChildNode {

    // Own properties of GXml-0.20.GXml.DomCharacterData

    data: string

    // Owm methods of GXml-0.20.GXml.DomCharacterData

    get_data(): string

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key?: string): object | null
    get_data(...args: any[]): any
    get_data(args_or_key?: any[] | string): string | object | null | any
    set_data(value: string): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    set_data(...args: any[]): any
    set_data(args_or_key: any[] | string, data?: object | null): void | any
    get_length(): number
    substring_data(offset: number, count: number): string
    append_data(data: string): void
    insert_data(offset: number, data: string): void
    delete_data(offset: number, count: number): void
    replace_data(offset: number, count: number, data: string): void

    // Own virtual methods of GXml-0.20.GXml.DomCharacterData

    vfunc_get_data(): string
    vfunc_set_data(value: string): void
    vfunc_get_length(): number
    vfunc_substring_data(offset: number, count: number): string
    vfunc_append_data(data: string): void
    vfunc_insert_data(offset: number, data: string): void
    vfunc_delete_data(offset: number, count: number): void
    vfunc_replace_data(offset: number, count: number, data: string): void

    // Class property signals of GXml-0.20.GXml.DomCharacterData

    connect(sigName: "notify::data", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomCharacterData {

    // Own properties of GXml-0.20.GXml.DomCharacterData

    static name: string
    static $gtype: GObject.GType<DomCharacterData>

    // Constructors of GXml-0.20.GXml.DomCharacterData

    constructor(config?: DomCharacterData_ConstructProps) 
    _init(config?: DomCharacterData_ConstructProps): void
}

interface DomText_ConstructProps extends DomCharacterData_ConstructProps, GObject.Object_ConstructProps {
}

interface DomText extends DomCharacterData {

    // Owm methods of GXml-0.20.GXml.DomText

    split_text(offset: number): DomText
    get_whole_text(): string

    // Conflicting methods

    get_data(...args: any[]): any
    set_data(...args: any[]): any

    // Own virtual methods of GXml-0.20.GXml.DomText

    vfunc_split_text(offset: number): DomText
    vfunc_get_whole_text(): string

    // Class property signals of GXml-0.20.GXml.DomText

    connect(sigName: "notify::data", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomText extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomText

    static name: string
    static $gtype: GObject.GType<DomText>

    // Constructors of GXml-0.20.GXml.DomText

    constructor(config?: DomText_ConstructProps) 
    _init(config?: DomText_ConstructProps): void
}

interface DomProcessingInstruction_ConstructProps extends DomCharacterData_ConstructProps, GObject.Object_ConstructProps {
}

interface DomProcessingInstruction extends DomCharacterData {

    // Own properties of GXml-0.20.GXml.DomProcessingInstruction

    readonly target: string

    // Owm methods of GXml-0.20.GXml.DomProcessingInstruction

    get_target(): string

    // Conflicting methods

    get_data(...args: any[]): any
    set_data(...args: any[]): any

    // Own virtual methods of GXml-0.20.GXml.DomProcessingInstruction

    vfunc_get_target(): string

    // Class property signals of GXml-0.20.GXml.DomProcessingInstruction

    connect(sigName: "notify::target", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomProcessingInstruction extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomProcessingInstruction

    static name: string
    static $gtype: GObject.GType<DomProcessingInstruction>

    // Constructors of GXml-0.20.GXml.DomProcessingInstruction

    constructor(config?: DomProcessingInstruction_ConstructProps) 
    _init(config?: DomProcessingInstruction_ConstructProps): void
}

interface DomComment_ConstructProps extends DomCharacterData_ConstructProps, GObject.Object_ConstructProps {
}

interface DomComment extends DomCharacterData {

    // Conflicting methods

    get_data(...args: any[]): any
    set_data(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.DomComment

    connect(sigName: "notify::data", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomComment extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomComment

    static name: string
    static $gtype: GObject.GType<DomComment>

    // Constructors of GXml-0.20.GXml.DomComment

    constructor(config?: DomComment_ConstructProps) 
    _init(config?: DomComment_ConstructProps): void
}

interface DomNonElementParentNode_ConstructProps extends GObject.Object_ConstructProps {
}

interface DomNonElementParentNode extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomNonElementParentNode

    get_element_by_id(element_id: string): DomElement | null

    // Own virtual methods of GXml-0.20.GXml.DomNonElementParentNode

    vfunc_get_element_by_id(element_id: string): DomElement | null

    // Class property signals of GXml-0.20.GXml.DomNonElementParentNode

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomNonElementParentNode {

    // Own properties of GXml-0.20.GXml.DomNonElementParentNode

    static name: string
    static $gtype: GObject.GType<DomNonElementParentNode>

    // Constructors of GXml-0.20.GXml.DomNonElementParentNode

    constructor(config?: DomNonElementParentNode_ConstructProps) 
    _init(config?: DomNonElementParentNode_ConstructProps): void
}

interface DomParentNode_ConstructProps extends GObject.Object_ConstructProps {
}

interface DomParentNode extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomParentNode

    readonly children: DomHTMLCollection
    readonly first_element_child: DomElement
    readonly last_element_child: DomElement
    readonly child_element_count: number

    // Owm methods of GXml-0.20.GXml.DomParentNode

    get_children(): DomHTMLCollection
    get_first_element_child(): DomElement | null
    get_last_element_child(): DomElement | null
    get_child_element_count(): number
    query_selector(selectors: string): DomElement | null
    query_selector_all(selectors: string): DomNodeList
    get_elements_by_property_value(property: string, value: string): DomElementList

    // Own virtual methods of GXml-0.20.GXml.DomParentNode

    vfunc_get_children(): DomHTMLCollection
    vfunc_get_first_element_child(): DomElement | null
    vfunc_get_last_element_child(): DomElement | null
    vfunc_get_child_element_count(): number
    vfunc_query_selector(selectors: string): DomElement | null
    vfunc_query_selector_all(selectors: string): DomNodeList
    vfunc_get_elements_by_property_value(property: string, value: string): DomElementList

    // Class property signals of GXml-0.20.GXml.DomParentNode

    connect(sigName: "notify::children", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomParentNode {

    // Own properties of GXml-0.20.GXml.DomParentNode

    static name: string
    static $gtype: GObject.GType<DomParentNode>

    // Constructors of GXml-0.20.GXml.DomParentNode

    constructor(config?: DomParentNode_ConstructProps) 
    _init(config?: DomParentNode_ConstructProps): void
}

interface DomNonDocumentTypeChildNode_ConstructProps extends GObject.Object_ConstructProps {
}

interface DomNonDocumentTypeChildNode extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    readonly previous_element_sibling: DomElement
    readonly next_element_sibling: DomElement

    // Owm methods of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    get_previous_element_sibling(): DomElement | null
    get_next_element_sibling(): DomElement | null

    // Own virtual methods of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    vfunc_get_previous_element_sibling(): DomElement | null
    vfunc_get_next_element_sibling(): DomElement | null

    // Class property signals of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    connect(sigName: "notify::previous-element-sibling", callback: (($obj: DomNonDocumentTypeChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: DomNonDocumentTypeChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: DomNonDocumentTypeChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: DomNonDocumentTypeChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomNonDocumentTypeChildNode {

    // Own properties of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    static name: string
    static $gtype: GObject.GType<DomNonDocumentTypeChildNode>

    // Constructors of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    constructor(config?: DomNonDocumentTypeChildNode_ConstructProps) 
    _init(config?: DomNonDocumentTypeChildNode_ConstructProps): void
}

interface DomChildNode_ConstructProps extends GObject.Object_ConstructProps {
}

interface DomChildNode extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomChildNode

    remove(): void

    // Own virtual methods of GXml-0.20.GXml.DomChildNode

    vfunc_remove(): void

    // Class property signals of GXml-0.20.GXml.DomChildNode

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomChildNode {

    // Own properties of GXml-0.20.GXml.DomChildNode

    static name: string
    static $gtype: GObject.GType<DomChildNode>

    // Constructors of GXml-0.20.GXml.DomChildNode

    constructor(config?: DomChildNode_ConstructProps) 
    _init(config?: DomChildNode_ConstructProps): void
}

interface DomNodeList_ConstructProps extends GObject.Object_ConstructProps, Gee.BidirList_ConstructProps {
}

interface DomNodeList extends GObject.Object, Gee.BidirList {

    // Own properties of GXml-0.20.GXml.DomNodeList

    readonly length: number

    // Conflicting properties

    read_only_view: any

    // Owm methods of GXml-0.20.GXml.DomNodeList

    item(index: number): DomNode | null
    get_length(): number

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Own virtual methods of GXml-0.20.GXml.DomNodeList

    vfunc_item(index: number): DomNode | null
    vfunc_get_length(): number

    // Class property signals of GXml-0.20.GXml.DomNodeList

    connect(sigName: "notify::length", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomNodeList {

    // Own properties of GXml-0.20.GXml.DomNodeList

    static name: string
    static $gtype: GObject.GType<DomNodeList>

    // Constructors of GXml-0.20.GXml.DomNodeList

    constructor(config?: DomNodeList_ConstructProps) 
    _init(config?: DomNodeList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface DomHTMLCollection_ConstructProps extends GObject.Object_ConstructProps, Gee.BidirList_ConstructProps {
}

interface DomHTMLCollection extends GObject.Object, Gee.BidirList {

    // Conflicting properties

    read_only_view: any

    // Owm methods of GXml-0.20.GXml.DomHTMLCollection

    get_element(index: number): DomElement | null
    to_array(): DomElement[]

    // Overloads of to_array

    to_array(): object[]
    to_array(...args: any[]): any
    to_array(...args: any[]): DomElement[] | object[] | any
    get_length(): number
    item(index: number): DomElement | null
    named_item(name: string): DomElement | null

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Own virtual methods of GXml-0.20.GXml.DomHTMLCollection

    vfunc_get_element(index: number): DomElement | null
    vfunc_to_array(): DomElement[]

    // Overloads of vfunc_to_array

    vfunc_to_array(): object[]
    vfunc_to_array(...args: any[]): any
    vfunc_to_array(...args: any[]): DomElement[] | object[] | any
    vfunc_get_length(): number
    vfunc_item(index: number): DomElement | null
    vfunc_named_item(name: string): DomElement | null

    // Class property signals of GXml-0.20.GXml.DomHTMLCollection

    connect(sigName: "notify::read-only-view", callback: (($obj: DomHTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: DomHTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DomHTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DomHTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: DomHTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DomHTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomHTMLCollection {

    // Own properties of GXml-0.20.GXml.DomHTMLCollection

    static name: string
    static $gtype: GObject.GType<DomHTMLCollection>

    // Constructors of GXml-0.20.GXml.DomHTMLCollection

    constructor(config?: DomHTMLCollection_ConstructProps) 
    _init(config?: DomHTMLCollection_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface DomNodeIterator_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `accept-node`
 */
interface DomNodeIterator_AcceptNodeSignalCallback {
    ($obj: DomNodeIterator, node: DomNode): DomNodeFilterFilter
}

interface DomNodeIterator extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomNodeIterator

    readonly root: DomNode
    readonly reference_node: DomNode
    readonly pointer_before_reference_node: boolean
    readonly what_to_show: number

    // Owm methods of GXml-0.20.GXml.DomNodeIterator

    get_root(): DomNode
    get_reference_node(): DomNode
    get_pointer_before_reference_node(): boolean
    get_what_to_show(): number
    next_node(): DomNode | null
    previous_node(): DomNode | null
    detach(): void

    // Own virtual methods of GXml-0.20.GXml.DomNodeIterator

    vfunc_get_root(): DomNode
    vfunc_get_reference_node(): DomNode
    vfunc_get_pointer_before_reference_node(): boolean
    vfunc_get_what_to_show(): number
    vfunc_next_node(): DomNode | null
    vfunc_previous_node(): DomNode | null
    vfunc_detach(): void

    // Own signals of GXml-0.20.GXml.DomNodeIterator

    connect(sigName: "accept-node", callback: DomNodeIterator_AcceptNodeSignalCallback): number
    connect_after(sigName: "accept-node", callback: DomNodeIterator_AcceptNodeSignalCallback): number
    emit(sigName: "accept-node", node: DomNode, ...args: any[]): void

    // Class property signals of GXml-0.20.GXml.DomNodeIterator

    connect(sigName: "notify::root", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::reference-node", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reference-node", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reference-node", ...args: any[]): void
    connect(sigName: "notify::pointer-before-reference-node", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-before-reference-node", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-before-reference-node", ...args: any[]): void
    connect(sigName: "notify::what-to-show", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::what-to-show", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::what-to-show", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomNodeIterator {

    // Own properties of GXml-0.20.GXml.DomNodeIterator

    static name: string
    static $gtype: GObject.GType<DomNodeIterator>

    // Constructors of GXml-0.20.GXml.DomNodeIterator

    constructor(config?: DomNodeIterator_ConstructProps) 
    _init(config?: DomNodeIterator_ConstructProps): void
}

interface DomTreeWalker_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `accept-node`
 */
interface DomTreeWalker_AcceptNodeSignalCallback {
    ($obj: DomTreeWalker, node: DomNode): DomNodeFilterFilter
}

interface DomTreeWalker extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomTreeWalker

    readonly root: DomNode
    readonly what_to_show: number
    readonly current_node: DomNode

    // Owm methods of GXml-0.20.GXml.DomTreeWalker

    get_root(): DomNode
    get_what_to_show(): number
    get_current_node(): DomNode
    parent_node(): DomNode | null
    first_child(): DomNode | null
    last_child(): DomNode | null
    previous_sibling(): DomNode | null
    next_sibling(): DomNode | null
    previous_node(): DomNode | null
    next_node(): DomNode | null

    // Own virtual methods of GXml-0.20.GXml.DomTreeWalker

    vfunc_get_root(): DomNode
    vfunc_get_what_to_show(): number
    vfunc_get_current_node(): DomNode
    vfunc_parent_node(): DomNode | null
    vfunc_first_child(): DomNode | null
    vfunc_last_child(): DomNode | null
    vfunc_previous_sibling(): DomNode | null
    vfunc_next_sibling(): DomNode | null
    vfunc_previous_node(): DomNode | null
    vfunc_next_node(): DomNode | null

    // Own signals of GXml-0.20.GXml.DomTreeWalker

    connect(sigName: "accept-node", callback: DomTreeWalker_AcceptNodeSignalCallback): number
    connect_after(sigName: "accept-node", callback: DomTreeWalker_AcceptNodeSignalCallback): number
    emit(sigName: "accept-node", node: DomNode, ...args: any[]): void

    // Class property signals of GXml-0.20.GXml.DomTreeWalker

    connect(sigName: "notify::root", callback: (($obj: DomTreeWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: DomTreeWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::what-to-show", callback: (($obj: DomTreeWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::what-to-show", callback: (($obj: DomTreeWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::what-to-show", ...args: any[]): void
    connect(sigName: "notify::current-node", callback: (($obj: DomTreeWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-node", callback: (($obj: DomTreeWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomTreeWalker {

    // Own properties of GXml-0.20.GXml.DomTreeWalker

    static name: string
    static $gtype: GObject.GType<DomTreeWalker>

    // Constructors of GXml-0.20.GXml.DomTreeWalker

    constructor(config?: DomTreeWalker_ConstructProps) 
    _init(config?: DomTreeWalker_ConstructProps): void
}

interface DomNamedNodeMap_ConstructProps extends GObject.Object_ConstructProps, Gee.Map_ConstructProps {
}

interface DomNamedNodeMap extends GObject.Object, Gee.Map {

    // Own properties of GXml-0.20.GXml.DomNamedNodeMap

    readonly length: number

    // Owm methods of GXml-0.20.GXml.DomNamedNodeMap

    get_length(): number
    item(index: number): DomNode | null
    get_named_item(name: string): DomNode | null
    set_named_item(node: DomNode): DomNode | null
    remove_named_item(name: string): DomNode | null
    remove_named_item_ns(namespace_uri: string, localName: string): DomNode | null
    get_named_item_ns(namespace_uri: string, local_name: string): DomNode | null
    set_named_item_ns(node: DomNode): DomNode | null

    // Own virtual methods of GXml-0.20.GXml.DomNamedNodeMap

    vfunc_get_length(): number
    vfunc_item(index: number): DomNode | null
    vfunc_get_named_item(name: string): DomNode | null
    vfunc_set_named_item(node: DomNode): DomNode | null
    vfunc_remove_named_item(name: string): DomNode | null
    vfunc_remove_named_item_ns(namespace_uri: string, localName: string): DomNode | null
    vfunc_get_named_item_ns(namespace_uri: string, local_name: string): DomNode | null
    vfunc_set_named_item_ns(node: DomNode): DomNode | null

    // Class property signals of GXml-0.20.GXml.DomNamedNodeMap

    connect(sigName: "notify::length", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomNamedNodeMap {

    // Own properties of GXml-0.20.GXml.DomNamedNodeMap

    static name: string
    static $gtype: GObject.GType<DomNamedNodeMap>

    // Constructors of GXml-0.20.GXml.DomNamedNodeMap

    constructor(config?: DomNamedNodeMap_ConstructProps) 
    _init(config?: DomNamedNodeMap_ConstructProps): void
}

interface DomTokenList_ConstructProps extends GObject.Object_ConstructProps, Gee.BidirList_ConstructProps {
}

interface DomTokenList extends GObject.Object, Gee.BidirList {

    // Own properties of GXml-0.20.GXml.DomTokenList

    readonly length: number

    // Conflicting properties

    read_only_view: any

    // Owm methods of GXml-0.20.GXml.DomTokenList

    get_length(): number
    item(index: number): string | null
    contains(token: string): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(...args: any[]): any
    contains(args_or_item: any[] | object | null): boolean | any
    add(tokens: string[]): void

    // Overloads of add

    add(item: object | null): boolean
    add(...args: any[]): any
    add(args_or_item: any[] | object | null): void | boolean | any
    remove(tokens: string[]): void

    // Overloads of remove

    remove(item: object | null): boolean
    remove(...args: any[]): any
    remove(args_or_item: any[] | object | null): void | boolean | any
    toggle(token: string, force: boolean, _auto_: boolean): boolean
    to_string(): string

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Own virtual methods of GXml-0.20.GXml.DomTokenList

    vfunc_get_length(): number
    vfunc_item(index: number): string | null
    vfunc_contains(token: string): boolean

    // Overloads of vfunc_contains

    vfunc_contains(item: object | null): boolean
    vfunc_contains(...args: any[]): any
    vfunc_contains(args_or_item: any[] | object | null): boolean | any
    vfunc_add(tokens: string[]): void

    // Overloads of vfunc_add

    vfunc_add(item: object | null): boolean
    vfunc_add(...args: any[]): any
    vfunc_add(args_or_item: any[] | object | null): void | boolean | any
    vfunc_remove(tokens: string[]): void

    // Overloads of vfunc_remove

    vfunc_remove(item: object | null): boolean
    vfunc_remove(...args: any[]): any
    vfunc_remove(args_or_item: any[] | object | null): void | boolean | any
    vfunc_toggle(token: string, force: boolean, _auto_: boolean): boolean
    vfunc_to_string(): string

    // Class property signals of GXml-0.20.GXml.DomTokenList

    connect(sigName: "notify::length", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomTokenList {

    // Own properties of GXml-0.20.GXml.DomTokenList

    static name: string
    static $gtype: GObject.GType<DomTokenList>

    // Constructors of GXml-0.20.GXml.DomTokenList

    constructor(config?: DomTokenList_ConstructProps) 
    _init(config?: DomTokenList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface DomSettableTokenList_ConstructProps extends GObject.Object_ConstructProps, DomTokenList_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.DomSettableTokenList

    value?: string | null
}

interface DomSettableTokenList extends GObject.Object, DomTokenList {

    // Own properties of GXml-0.20.GXml.DomSettableTokenList

    value: string

    // Conflicting properties

    read_only_view: any

    // Owm methods of GXml-0.20.GXml.DomSettableTokenList

    get_value(): string
    set_value(value: string): void

    // Conflicting methods

    contains(...args: any[]): any
    add(...args: any[]): any
    remove(...args: any[]): any
    get_read_only_view(...args: any[]): any
    vfunc_contains(...args: any[]): any
    vfunc_add(...args: any[]): any
    vfunc_remove(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Own virtual methods of GXml-0.20.GXml.DomSettableTokenList

    vfunc_get_value(): string
    vfunc_set_value(value: string): void

    // Class property signals of GXml-0.20.GXml.DomSettableTokenList

    connect(sigName: "notify::value", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomSettableTokenList {

    // Own properties of GXml-0.20.GXml.DomSettableTokenList

    static name: string
    static $gtype: GObject.GType<DomSettableTokenList>

    // Constructors of GXml-0.20.GXml.DomSettableTokenList

    constructor(config?: DomSettableTokenList_ConstructProps) 
    _init(config?: DomSettableTokenList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface DomDocument_ConstructProps extends GObject.Object_ConstructProps, DomNode_ConstructProps, DomParentNode_ConstructProps, DomNonElementParentNode_ConstructProps {
}

interface DomDocument extends GObject.Object, DomNode, DomParentNode, DomNonElementParentNode {

    // Own properties of GXml-0.20.GXml.DomDocument

    readonly implementation: DomImplementation
    readonly url: string
    readonly document_uri: string
    readonly origin: string
    readonly compat_mode: string
    readonly character_set: string
    readonly content_type: string
    readonly doctype: DomDocumentType
    readonly document_element: DomElement

    // Owm methods of GXml-0.20.GXml.DomDocument

    get_implementation(): DomImplementation
    get_url(): string
    get_document_uri(): string
    get_origin(): string
    get_compat_mode(): string
    get_character_set(): string
    get_content_type(): string
    get_doctype(): DomDocumentType | null
    get_document_element(): DomElement | null
    get_elements_by_tag_name(local_name: string): DomHTMLCollection
    get_elements_by_tag_name_ns(namespace: string | null, local_name: string): DomHTMLCollection
    get_elements_by_class_name(classNames: string): DomHTMLCollection
    create_element(local_name: string): DomElement
    create_element_ns(namespace: string | null, qualified_name: string): DomElement
    create_document_fragment(): DomDocumentFragment
    create_text_node(data: string): DomText
    create_comment(data: string): DomComment
    create_processing_instruction(target: string, data: string): DomProcessingInstruction
    import_node(node: DomNode, deep: boolean): DomNode
    adopt_node(node: DomNode): DomNode
    create_event(interface: string): DomEvent
    create_range(): DomRange
    create_node_iterator(root: DomNode, whatToShow: number): DomNodeIterator
    create_tree_walker(root: DomNode, what_to_show: number): DomTreeWalker
    write_file(file: Gio.File, cancellable: Gio.Cancellable | null): void
    write_file_async(file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    write_file_finish(_res_: Gio.AsyncResult): void
    write_stream(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): void
    write_stream_async(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    write_stream_finish(_res_: Gio.AsyncResult): void
    create_stream(): Gio.InputStream
    create_stream_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream
    write_string(cancellable: Gio.Cancellable | null): string
    write_string_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    write_string_finish(_res_: Gio.AsyncResult): string
    read_from_file(file: Gio.File, cancellable: Gio.Cancellable | null): void
    read_from_file_async(file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    read_from_file_finish(_res_: Gio.AsyncResult): void
    read_from_string(str: string, cancellable?: Gio.Cancellable | null): void
    read_from_string_async(str: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    read_from_string_finish(_res_: Gio.AsyncResult): void
    read_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): void
    read_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    read_from_stream_finish(_res_: Gio.AsyncResult): void
    get_xml_parser(): Parser
    set_xml_parser(parser: Parser): void

    // Own virtual methods of GXml-0.20.GXml.DomDocument

    vfunc_get_implementation(): DomImplementation
    vfunc_get_url(): string
    vfunc_get_document_uri(): string
    vfunc_get_origin(): string
    vfunc_get_compat_mode(): string
    vfunc_get_character_set(): string
    vfunc_get_content_type(): string
    vfunc_get_doctype(): DomDocumentType | null
    vfunc_get_document_element(): DomElement | null
    vfunc_get_elements_by_tag_name(local_name: string): DomHTMLCollection
    vfunc_get_elements_by_tag_name_ns(namespace: string | null, local_name: string): DomHTMLCollection
    vfunc_get_elements_by_class_name(classNames: string): DomHTMLCollection
    vfunc_create_element(local_name: string): DomElement
    vfunc_create_element_ns(namespace: string | null, qualified_name: string): DomElement
    vfunc_create_document_fragment(): DomDocumentFragment
    vfunc_create_text_node(data: string): DomText
    vfunc_create_comment(data: string): DomComment
    vfunc_create_processing_instruction(target: string, data: string): DomProcessingInstruction
    vfunc_import_node(node: DomNode, deep: boolean): DomNode
    vfunc_adopt_node(node: DomNode): DomNode
    vfunc_create_event(interface: string): DomEvent
    vfunc_create_range(): DomRange
    vfunc_create_node_iterator(root: DomNode, whatToShow: number): DomNodeIterator
    vfunc_create_tree_walker(root: DomNode, what_to_show: number): DomTreeWalker
    vfunc_write_file(file: Gio.File, cancellable: Gio.Cancellable | null): void
    vfunc_write_file_async(file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_write_file_finish(_res_: Gio.AsyncResult): void
    vfunc_write_stream(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): void
    vfunc_write_stream_async(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_write_stream_finish(_res_: Gio.AsyncResult): void
    vfunc_create_stream(): Gio.InputStream
    vfunc_create_stream_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream
    vfunc_write_string(cancellable: Gio.Cancellable | null): string
    vfunc_write_string_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_write_string_finish(_res_: Gio.AsyncResult): string
    vfunc_read_from_file(file: Gio.File, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_file_async(file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_read_from_file_finish(_res_: Gio.AsyncResult): void
    vfunc_read_from_string(str: string, cancellable?: Gio.Cancellable | null): void
    vfunc_read_from_string_async(str: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_read_from_string_finish(_res_: Gio.AsyncResult): void
    vfunc_read_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_read_from_stream_finish(_res_: Gio.AsyncResult): void
    vfunc_get_xml_parser(): Parser
    vfunc_set_xml_parser(parser: Parser): void

    // Class property signals of GXml-0.20.GXml.DomDocument

    connect(sigName: "notify::implementation", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-uri", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat-mode", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-set", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomDocument {

    // Own properties of GXml-0.20.GXml.DomDocument

    static name: string
    static $gtype: GObject.GType<DomDocument>

    // Constructors of GXml-0.20.GXml.DomDocument

    constructor(config?: DomDocument_ConstructProps) 
    _init(config?: DomDocument_ConstructProps): void
}

interface DomXMLDocument_ConstructProps extends GObject.Object_ConstructProps, DomDocument_ConstructProps {
}

interface DomXMLDocument extends GObject.Object, DomDocument {

    // Class property signals of GXml-0.20.GXml.DomXMLDocument

    connect(sigName: "notify::implementation", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-uri", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat-mode", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-set", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomXMLDocument {

    // Own properties of GXml-0.20.GXml.DomXMLDocument

    static name: string
    static $gtype: GObject.GType<DomXMLDocument>

    // Constructors of GXml-0.20.GXml.DomXMLDocument

    constructor(config?: DomXMLDocument_ConstructProps) 
    _init(config?: DomXMLDocument_ConstructProps): void
}

interface DomImplementation_ConstructProps extends GObject.Object_ConstructProps {
}

interface DomImplementation extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomImplementation

    create_document_type(qualified_name: string, public_id: string, system_id: string): DomDocumentType
    create_document(nspace: string | null, qualified_name: string | null, doctype: DomDocumentType | null): DomXMLDocument
    create_html_document(title: string): DomDocument
    has_feature(): boolean

    // Own virtual methods of GXml-0.20.GXml.DomImplementation

    vfunc_create_document_type(qualified_name: string, public_id: string, system_id: string): DomDocumentType
    vfunc_create_document(nspace: string | null, qualified_name: string | null, doctype: DomDocumentType | null): DomXMLDocument
    vfunc_create_html_document(title: string): DomDocument
    vfunc_has_feature(): boolean

    // Class property signals of GXml-0.20.GXml.DomImplementation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomImplementation {

    // Own properties of GXml-0.20.GXml.DomImplementation

    static name: string
    static $gtype: GObject.GType<DomImplementation>

    // Constructors of GXml-0.20.GXml.DomImplementation

    constructor(config?: DomImplementation_ConstructProps) 
    _init(config?: DomImplementation_ConstructProps): void
}

interface DomDocumentFragment_ConstructProps extends GObject.Object_ConstructProps, DomNode_ConstructProps, DomParentNode_ConstructProps, DomNonElementParentNode_ConstructProps {
}

interface DomDocumentFragment extends GObject.Object, DomNode, DomParentNode, DomNonElementParentNode {

    // Class property signals of GXml-0.20.GXml.DomDocumentFragment

    connect(sigName: "notify::node-type", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomDocumentFragment {

    // Own properties of GXml-0.20.GXml.DomDocumentFragment

    static name: string
    static $gtype: GObject.GType<DomDocumentFragment>

    // Constructors of GXml-0.20.GXml.DomDocumentFragment

    constructor(config?: DomDocumentFragment_ConstructProps) 
    _init(config?: DomDocumentFragment_ConstructProps): void
}

interface DomDocumentType_ConstructProps extends GObject.Object_ConstructProps, DomNode_ConstructProps, DomChildNode_ConstructProps {
}

interface DomDocumentType extends GObject.Object, DomNode, DomChildNode {

    // Own properties of GXml-0.20.GXml.DomDocumentType

    readonly name: string
    readonly public_id: string
    readonly system_id: string

    // Owm methods of GXml-0.20.GXml.DomDocumentType

    get_name(): string
    get_public_id(): string
    get_system_id(): string

    // Own virtual methods of GXml-0.20.GXml.DomDocumentType

    vfunc_get_name(): string
    vfunc_get_public_id(): string
    vfunc_get_system_id(): string

    // Class property signals of GXml-0.20.GXml.DomDocumentType

    connect(sigName: "notify::name", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::public-id", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::public-id", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::public-id", ...args: any[]): void
    connect(sigName: "notify::system-id", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-id", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::system-id", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomDocumentType {

    // Own properties of GXml-0.20.GXml.DomDocumentType

    static name: string
    static $gtype: GObject.GType<DomDocumentType>

    // Constructors of GXml-0.20.GXml.DomDocumentType

    constructor(config?: DomDocumentType_ConstructProps) 
    _init(config?: DomDocumentType_ConstructProps): void
}

interface DomHtmlDocument_ConstructProps extends GObject.Object_ConstructProps, DomDocument_ConstructProps {
}

interface DomHtmlDocument extends GObject.Object, DomDocument {

    // Owm methods of GXml-0.20.GXml.DomHtmlDocument

    read_from_string(str: string): void

    // Overloads of read_from_string

    read_from_string(str: string, cancellable?: Gio.Cancellable | null): void
    read_from_string(...args: any[]): any
    read_from_string(args_or_str: any[] | string, cancellable?: Gio.Cancellable | null): void | any
    read_from_string_tolerant(str: string): void
    to_html(): string

    // Own virtual methods of GXml-0.20.GXml.DomHtmlDocument

    vfunc_read_from_string(str: string): void

    // Overloads of vfunc_read_from_string

    vfunc_read_from_string(str: string, cancellable?: Gio.Cancellable | null): void
    vfunc_read_from_string(...args: any[]): any
    vfunc_read_from_string(args_or_str: any[] | string, cancellable?: Gio.Cancellable | null): void | any
    vfunc_read_from_string_tolerant(str: string): void
    vfunc_to_html(): string

    // Class property signals of GXml-0.20.GXml.DomHtmlDocument

    connect(sigName: "notify::implementation", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-uri", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat-mode", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-set", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomHtmlDocument {

    // Own properties of GXml-0.20.GXml.DomHtmlDocument

    static name: string
    static $gtype: GObject.GType<DomHtmlDocument>

    // Constructors of GXml-0.20.GXml.DomHtmlDocument

    constructor(config?: DomHtmlDocument_ConstructProps) 
    _init(config?: DomHtmlDocument_ConstructProps): void
}

interface DomElement_ConstructProps extends GObject.Object_ConstructProps, DomNode_ConstructProps, DomChildNode_ConstructProps, DomNonDocumentTypeChildNode_ConstructProps, DomParentNode_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.DomElement

    id?: string | null
    class_name?: string | null
}

interface DomElement extends GObject.Object, DomNode, DomChildNode, DomNonDocumentTypeChildNode, DomParentNode {

    // Own properties of GXml-0.20.GXml.DomElement

    readonly namespace_uri: string
    readonly prefix: string
    readonly local_name: string
    readonly tag_name: string
    id: string
    class_name: string
    readonly class_list: DomTokenList
    readonly attributes: DomNamedNodeMap

    // Owm methods of GXml-0.20.GXml.DomElement

    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string
    get_tag_name(): string
    get_id(): string | null
    set_id(value: string | null): void
    get_class_name(): string | null
    set_class_name(value: string | null): void
    get_class_list(): DomTokenList
    get_attributes(): DomNamedNodeMap
    get_attribute(name: string): string | null
    get_attribute_ns(namespace: string | null, local_name: string): string | null
    set_attribute(name: string, value?: string): void
    set_attribute_ns(namespace: string | null, name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute_ns(namespace: string | null, local_name: string): void
    has_attribute(name: string): boolean
    has_attribute_ns(namespace: string | null, local_name: string): boolean
    get_elements_by_tag_name(local_name: string): DomHTMLCollection
    get_elements_by_tag_name_ns(namespace: string | null, local_name: string): DomHTMLCollection
    get_elements_by_class_name(class_names: string): DomHTMLCollection
    matches(selectors: string): boolean
    read_from_uri(uri: string): void
    read_from_uri_async(uri: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    read_from_uri_finish(_res_: Gio.AsyncResult): void
    read_from_file(f: Gio.File, cancellable: Gio.Cancellable | null): void
    read_from_file_async(f: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    read_from_file_finish(_res_: Gio.AsyncResult): void
    read_from_stream(istream: Gio.InputStream, cancellable: Gio.Cancellable | null): void
    read_from_stream_async(istream: Gio.InputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    read_from_stream_finish(_res_: Gio.AsyncResult): void
    read_from_string(str: string, cancellable: Gio.Cancellable | null): void
    read_from_string_async(str: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    read_from_string_finish(_res_: Gio.AsyncResult): void
    write_string(cancellable: Gio.Cancellable | null): string
    write_string_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    write_string_finish(_res_: Gio.AsyncResult): string
    write_file(f: Gio.File, cancellable: Gio.Cancellable | null): void
    write_file_async(f: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    write_file_finish(_res_: Gio.AsyncResult): void
    write_stream(stream: Gio.OutputStream): void
    write_stream_async(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    write_stream_finish(_res_: Gio.AsyncResult): void
    create_stream(): Gio.InputStream
    create_stream_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream

    // Own virtual methods of GXml-0.20.GXml.DomElement

    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string
    vfunc_get_tag_name(): string
    vfunc_get_id(): string | null
    vfunc_set_id(value: string | null): void
    vfunc_get_class_name(): string | null
    vfunc_set_class_name(value: string | null): void
    vfunc_get_class_list(): DomTokenList
    vfunc_get_attributes(): DomNamedNodeMap
    vfunc_get_attribute(name: string): string | null
    vfunc_get_attribute_ns(namespace: string | null, local_name: string): string | null
    vfunc_set_attribute(name: string, value?: string): void
    vfunc_set_attribute_ns(namespace: string | null, name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute_ns(namespace: string | null, local_name: string): void
    vfunc_has_attribute(name: string): boolean
    vfunc_has_attribute_ns(namespace: string | null, local_name: string): boolean
    vfunc_get_elements_by_tag_name(local_name: string): DomHTMLCollection
    vfunc_get_elements_by_tag_name_ns(namespace: string | null, local_name: string): DomHTMLCollection
    vfunc_get_elements_by_class_name(class_names: string): DomHTMLCollection
    vfunc_matches(selectors: string): boolean
    vfunc_read_from_uri(uri: string): void
    vfunc_read_from_uri_async(uri: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_read_from_uri_finish(_res_: Gio.AsyncResult): void
    vfunc_read_from_file(f: Gio.File, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_file_async(f: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_read_from_file_finish(_res_: Gio.AsyncResult): void
    vfunc_read_from_stream(istream: Gio.InputStream, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_stream_async(istream: Gio.InputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_read_from_stream_finish(_res_: Gio.AsyncResult): void
    vfunc_read_from_string(str: string, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_string_async(str: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_read_from_string_finish(_res_: Gio.AsyncResult): void
    vfunc_write_string(cancellable: Gio.Cancellable | null): string
    vfunc_write_string_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_write_string_finish(_res_: Gio.AsyncResult): string
    vfunc_write_file(f: Gio.File, cancellable: Gio.Cancellable | null): void
    vfunc_write_file_async(f: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_write_file_finish(_res_: Gio.AsyncResult): void
    vfunc_write_stream(stream: Gio.OutputStream): void
    vfunc_write_stream_async(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_write_stream_finish(_res_: Gio.AsyncResult): void
    vfunc_create_stream(): Gio.InputStream
    vfunc_create_stream_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream

    // Class property signals of GXml-0.20.GXml.DomElement

    connect(sigName: "notify::namespace-uri", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomElement {

    // Own properties of GXml-0.20.GXml.DomElement

    static name: string
    static $gtype: GObject.GType<DomElement>

    // Constructors of GXml-0.20.GXml.DomElement

    constructor(config?: DomElement_ConstructProps) 
    _init(config?: DomElement_ConstructProps): void
}

interface DomEventTarget_ConstructProps extends GObject.Object_ConstructProps {
}

interface DomEventTarget extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomEventTarget

    add_event_listener(type: string, callback: DomEventListener | null, capture: boolean): void
    remove_event_listener(type: string, callback: DomEventListener | null, capture: boolean): void
    dispatch_event(event: DomEvent): boolean

    // Own virtual methods of GXml-0.20.GXml.DomEventTarget

    vfunc_add_event_listener(type: string, callback: DomEventListener | null, capture: boolean): void
    vfunc_remove_event_listener(type: string, callback: DomEventListener | null, capture: boolean): void
    vfunc_dispatch_event(event: DomEvent): boolean

    // Class property signals of GXml-0.20.GXml.DomEventTarget

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomEventTarget {

    // Own properties of GXml-0.20.GXml.DomEventTarget

    static name: string
    static $gtype: GObject.GType<DomEventTarget>

    // Constructors of GXml-0.20.GXml.DomEventTarget

    constructor(config?: DomEventTarget_ConstructProps) 
    _init(config?: DomEventTarget_ConstructProps): void
}

interface DomEventListener_ConstructProps extends GObject.Object_ConstructProps {
}

interface DomEventListener extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomEventListener

    handle_event(event: DomEvent): void

    // Own virtual methods of GXml-0.20.GXml.DomEventListener

    vfunc_handle_event(event: DomEvent): void

    // Class property signals of GXml-0.20.GXml.DomEventListener

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomEventListener {

    // Own properties of GXml-0.20.GXml.DomEventListener

    static name: string
    static $gtype: GObject.GType<DomEventListener>

    // Constructors of GXml-0.20.GXml.DomEventListener

    constructor(config?: DomEventListener_ConstructProps) 
    _init(config?: DomEventListener_ConstructProps): void
}

interface DomEvent_ConstructProps extends GObject.Object_ConstructProps {
}

interface DomEvent extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomEvent

    readonly etype: string
    readonly event_target: DomEventTarget
    readonly current_target: DomEventTarget
    readonly bubbles: boolean
    readonly cancelable: boolean
    readonly is_trusted: boolean
    readonly time_stamp: DomTimeStamp
    readonly default_prevented: boolean
    readonly event_phase: DomEventPhase

    // Owm methods of GXml-0.20.GXml.DomEvent

    get_etype(): string
    get_event_target(): DomEventTarget | null
    get_current_target(): DomEventTarget | null
    get_bubbles(): boolean
    get_cancelable(): boolean
    get_is_trusted(): boolean
    get_time_stamp(): DomTimeStamp
    get_default_prevented(): boolean
    get_event_phase(): DomEventPhase
    stop_propagation(): void
    stop_immediate_propagation(): void
    prevent_default(): void
    init_event(type: string, bubbles: boolean, cancelable: boolean): void

    // Own virtual methods of GXml-0.20.GXml.DomEvent

    vfunc_get_etype(): string
    vfunc_get_event_target(): DomEventTarget | null
    vfunc_get_current_target(): DomEventTarget | null
    vfunc_get_bubbles(): boolean
    vfunc_get_cancelable(): boolean
    vfunc_get_is_trusted(): boolean
    vfunc_get_time_stamp(): DomTimeStamp
    vfunc_get_default_prevented(): boolean
    vfunc_get_event_phase(): DomEventPhase
    vfunc_stop_propagation(): void
    vfunc_stop_immediate_propagation(): void
    vfunc_prevent_default(): void
    vfunc_init_event(type: string, bubbles: boolean, cancelable: boolean): void

    // Class property signals of GXml-0.20.GXml.DomEvent

    connect(sigName: "notify::etype", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etype", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etype", ...args: any[]): void
    connect(sigName: "notify::event-target", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-target", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-target", ...args: any[]): void
    connect(sigName: "notify::current-target", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-target", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-target", ...args: any[]): void
    connect(sigName: "notify::bubbles", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bubbles", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::is-trusted", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-trusted", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-trusted", ...args: any[]): void
    connect(sigName: "notify::time-stamp", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-stamp", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-stamp", ...args: any[]): void
    connect(sigName: "notify::default-prevented", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-prevented", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-prevented", ...args: any[]): void
    connect(sigName: "notify::event-phase", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-phase", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-phase", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomEvent {

    // Own properties of GXml-0.20.GXml.DomEvent

    static name: string
    static $gtype: GObject.GType<DomEvent>

    // Constructors of GXml-0.20.GXml.DomEvent

    constructor(config?: DomEvent_ConstructProps) 
    _init(config?: DomEvent_ConstructProps): void
}

interface DomCustomEvent_ConstructProps extends GObject.Object_ConstructProps, DomEvent_ConstructProps {
}

interface DomCustomEvent extends GObject.Object, DomEvent {

    // Own properties of GXml-0.20.GXml.DomCustomEvent

    readonly detail: any

    // Owm methods of GXml-0.20.GXml.DomCustomEvent

    get_detail(): /* result */ any
    init_custom_event(type: string, bubbles: boolean, cancelable: boolean, detail: any): void

    // Own virtual methods of GXml-0.20.GXml.DomCustomEvent

    vfunc_get_detail(): /* result */ any
    vfunc_init_custom_event(type: string, bubbles: boolean, cancelable: boolean, detail: any): void

    // Class property signals of GXml-0.20.GXml.DomCustomEvent

    connect(sigName: "notify::detail", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::detail", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::detail", ...args: any[]): void
    connect(sigName: "notify::etype", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etype", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etype", ...args: any[]): void
    connect(sigName: "notify::event-target", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-target", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-target", ...args: any[]): void
    connect(sigName: "notify::current-target", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-target", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-target", ...args: any[]): void
    connect(sigName: "notify::bubbles", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bubbles", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::is-trusted", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-trusted", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-trusted", ...args: any[]): void
    connect(sigName: "notify::time-stamp", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-stamp", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-stamp", ...args: any[]): void
    connect(sigName: "notify::default-prevented", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-prevented", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-prevented", ...args: any[]): void
    connect(sigName: "notify::event-phase", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-phase", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-phase", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomCustomEvent {

    // Own properties of GXml-0.20.GXml.DomCustomEvent

    static name: string
    static $gtype: GObject.GType<DomCustomEvent>

    // Constructors of GXml-0.20.GXml.DomCustomEvent

    constructor(config?: DomCustomEvent_ConstructProps) 
    _init(config?: DomCustomEvent_ConstructProps): void
}

interface DomMutationObserver_ConstructProps extends GObject.Object_ConstructProps {
}

interface DomMutationObserver extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomMutationObserver

    observe(target: Node, options: DomMutationObserverInit): void
    disconnect(): void
    take_records(): Gee.List

    // Own virtual methods of GXml-0.20.GXml.DomMutationObserver

    vfunc_observe(target: Node, options: DomMutationObserverInit): void
    vfunc_disconnect(): void
    vfunc_take_records(): Gee.List

    // Class property signals of GXml-0.20.GXml.DomMutationObserver

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomMutationObserver {

    // Own properties of GXml-0.20.GXml.DomMutationObserver

    static name: string
    static $gtype: GObject.GType<DomMutationObserver>

    // Constructors of GXml-0.20.GXml.DomMutationObserver

    constructor(config?: DomMutationObserver_ConstructProps) 
    _init(config?: DomMutationObserver_ConstructProps): void
}

interface DomMutationRecord_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.DomMutationRecord

    added_nodes?: DomNodeList | null
    removed_nodes?: DomNodeList | null
}

interface DomMutationRecord extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomMutationRecord

    readonly mtype: string
    readonly target: DomNode
    added_nodes: DomNodeList
    removed_nodes: DomNodeList
    readonly previous_sibling: DomNode
    readonly next_sibling: DomNode
    readonly attribute_name: string
    readonly attribute_namespace: string
    readonly old_value: string

    // Owm methods of GXml-0.20.GXml.DomMutationRecord

    get_mtype(): string
    get_target(): DomNode
    get_added_nodes(): DomNodeList
    set_added_nodes(value: DomNodeList): void
    get_removed_nodes(): DomNodeList
    set_removed_nodes(value: DomNodeList): void
    get_previous_sibling(): DomNode | null
    get_next_sibling(): DomNode | null
    get_attribute_name(): string | null
    get_attribute_namespace(): string | null
    get_old_value(): string | null

    // Own virtual methods of GXml-0.20.GXml.DomMutationRecord

    vfunc_get_mtype(): string
    vfunc_get_target(): DomNode
    vfunc_get_added_nodes(): DomNodeList
    vfunc_set_added_nodes(value: DomNodeList): void
    vfunc_get_removed_nodes(): DomNodeList
    vfunc_set_removed_nodes(value: DomNodeList): void
    vfunc_get_previous_sibling(): DomNode | null
    vfunc_get_next_sibling(): DomNode | null
    vfunc_get_attribute_name(): string | null
    vfunc_get_attribute_namespace(): string | null
    vfunc_get_old_value(): string | null

    // Class property signals of GXml-0.20.GXml.DomMutationRecord

    connect(sigName: "notify::mtype", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtype", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mtype", ...args: any[]): void
    connect(sigName: "notify::target", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::added-nodes", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::added-nodes", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::added-nodes", ...args: any[]): void
    connect(sigName: "notify::removed-nodes", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removed-nodes", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::removed-nodes", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::attribute-name", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-name", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-name", ...args: any[]): void
    connect(sigName: "notify::attribute-namespace", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-namespace", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-namespace", ...args: any[]): void
    connect(sigName: "notify::old-value", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old-value", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::old-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomMutationRecord {

    // Own properties of GXml-0.20.GXml.DomMutationRecord

    static name: string
    static $gtype: GObject.GType<DomMutationRecord>

    // Constructors of GXml-0.20.GXml.DomMutationRecord

    constructor(config?: DomMutationRecord_ConstructProps) 
    _init(config?: DomMutationRecord_ConstructProps): void
}

interface DomNode_ConstructProps extends GObject.Object_ConstructProps, DomEventTarget_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.DomNode

    owner_document?: DomDocument | null
    node_value?: string | null
    text_content?: string | null
}

interface DomNode extends GObject.Object, DomEventTarget {

    // Own properties of GXml-0.20.GXml.DomNode

    readonly node_type: DomNodeNodeType
    readonly node_name: string
    readonly base_uri: string
    owner_document: DomDocument
    readonly parent_node: DomNode
    readonly parent_element: DomElement
    readonly child_nodes: DomNodeList
    readonly first_child: DomNode
    readonly last_child: DomNode
    readonly previous_sibling: DomNode
    readonly next_sibling: DomNode
    node_value: string
    text_content: string

    // Owm methods of GXml-0.20.GXml.DomNode

    get_node_type(): DomNodeNodeType
    get_node_name(): string
    get_base_uri(): string | null
    get_owner_document(): DomDocument | null
    set_owner_document(value: DomDocument | null): void
    get_parent_node(): DomNode | null
    get_parent_element(): DomElement | null
    get_child_nodes(): DomNodeList
    get_first_child(): DomNode | null
    get_last_child(): DomNode | null
    get_previous_sibling(): DomNode | null
    get_next_sibling(): DomNode | null
    get_node_value(): string | null
    set_node_value(value: string | null): void
    get_text_content(): string | null
    set_text_content(value: string | null): void
    has_child_nodes(): boolean
    normalize(): void
    is_equal_node(node: DomNode | null): boolean
    compare_document_position(other: DomNode): DomNodeDocumentPosition
    contains(other: DomNode | null): boolean
    lookup_prefix(nspace: string | null): string | null
    lookup_namespace_uri(prefix: string | null): string | null
    is_default_namespace(nspace: string | null): boolean
    insert_before(node: DomNode, child: DomNode | null): DomNode
    append_child(node: DomNode): DomNode
    replace_child(node: DomNode, child: DomNode): DomNode
    remove_child(child: DomNode): DomNode

    // Own virtual methods of GXml-0.20.GXml.DomNode

    vfunc_get_node_type(): DomNodeNodeType
    vfunc_get_node_name(): string
    vfunc_get_base_uri(): string | null
    vfunc_get_owner_document(): DomDocument | null
    vfunc_set_owner_document(value: DomDocument | null): void
    vfunc_get_parent_node(): DomNode | null
    vfunc_get_parent_element(): DomElement | null
    vfunc_get_child_nodes(): DomNodeList
    vfunc_get_first_child(): DomNode | null
    vfunc_get_last_child(): DomNode | null
    vfunc_get_previous_sibling(): DomNode | null
    vfunc_get_next_sibling(): DomNode | null
    vfunc_get_node_value(): string | null
    vfunc_set_node_value(value: string | null): void
    vfunc_get_text_content(): string | null
    vfunc_set_text_content(value: string | null): void
    vfunc_has_child_nodes(): boolean
    vfunc_normalize(): void
    vfunc_is_equal_node(node: DomNode | null): boolean
    vfunc_compare_document_position(other: DomNode): DomNodeDocumentPosition
    vfunc_contains(other: DomNode | null): boolean
    vfunc_lookup_prefix(nspace: string | null): string | null
    vfunc_lookup_namespace_uri(prefix: string | null): string | null
    vfunc_is_default_namespace(nspace: string | null): boolean
    vfunc_insert_before(node: DomNode, child: DomNode | null): DomNode
    vfunc_append_child(node: DomNode): DomNode
    vfunc_replace_child(node: DomNode, child: DomNode): DomNode
    vfunc_remove_child(child: DomNode): DomNode

    // Class property signals of GXml-0.20.GXml.DomNode

    connect(sigName: "notify::node-type", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomNode {

    // Own properties of GXml-0.20.GXml.DomNode

    static name: string
    static $gtype: GObject.GType<DomNode>

    // Constructors of GXml-0.20.GXml.DomNode

    constructor(config?: DomNode_ConstructProps) 
    _init(config?: DomNode_ConstructProps): void
    static copy(doc: DomDocument, node: DomNode, source: DomNode, deep: boolean): boolean
}

interface DomRange_ConstructProps extends GObject.Object_ConstructProps {
}

interface DomRange extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomRange

    readonly start_container: DomNode
    readonly start_offset: number
    readonly end_container: DomNode
    readonly end_offset: number
    readonly collapsed: boolean
    readonly common_ancestor_container: DomNode

    // Owm methods of GXml-0.20.GXml.DomRange

    get_start_container(): DomNode
    get_start_offset(): number
    get_end_container(): DomNode
    get_end_offset(): number
    get_collapsed(): boolean
    get_common_ancestor_container(): DomNode
    set_start(node: DomNode, offset: number): void
    set_end(node: DomNode, offset: number): void
    set_start_before(node: DomNode): void
    set_start_after(node: DomNode): void
    set_end_before(node: DomNode): void
    set_end_after(node: DomNode): void
    collapse(to_start: boolean): void
    select_node(node: DomNode): void
    select_node_contents(node: DomNode): void
    compare_boundary_points(how: DomRangeBoundaryPoints, sourceRange: DomRange): number
    delete_contents(): void
    extract_contents(): DomDocumentFragment | null
    clone_contents(): DomDocumentFragment | null
    insert_node(node: DomNode): void
    surround_contents(newParent: DomNode): void
    clone_range(): DomRange
    detach(): void
    is_point_in_range(node: DomNode, offset: number): boolean
    compare_point(node: DomNode, offset: number): number
    intersects_node(node: DomNode): boolean
    to_string(): string

    // Own virtual methods of GXml-0.20.GXml.DomRange

    vfunc_get_start_container(): DomNode
    vfunc_get_start_offset(): number
    vfunc_get_end_container(): DomNode
    vfunc_get_end_offset(): number
    vfunc_get_collapsed(): boolean
    vfunc_get_common_ancestor_container(): DomNode
    vfunc_set_start(node: DomNode, offset: number): void
    vfunc_set_end(node: DomNode, offset: number): void
    vfunc_set_start_before(node: DomNode): void
    vfunc_set_start_after(node: DomNode): void
    vfunc_set_end_before(node: DomNode): void
    vfunc_set_end_after(node: DomNode): void
    vfunc_collapse(to_start: boolean): void
    vfunc_select_node(node: DomNode): void
    vfunc_select_node_contents(node: DomNode): void
    vfunc_compare_boundary_points(how: DomRangeBoundaryPoints, sourceRange: DomRange): number
    vfunc_delete_contents(): void
    vfunc_extract_contents(): DomDocumentFragment | null
    vfunc_clone_contents(): DomDocumentFragment | null
    vfunc_insert_node(node: DomNode): void
    vfunc_surround_contents(newParent: DomNode): void
    vfunc_clone_range(): DomRange
    vfunc_detach(): void
    vfunc_is_point_in_range(node: DomNode, offset: number): boolean
    vfunc_compare_point(node: DomNode, offset: number): number
    vfunc_intersects_node(node: DomNode): boolean
    vfunc_to_string(): string

    // Class property signals of GXml-0.20.GXml.DomRange

    connect(sigName: "notify::start-container", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-container", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-container", ...args: any[]): void
    connect(sigName: "notify::start-offset", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-offset", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-offset", ...args: any[]): void
    connect(sigName: "notify::end-container", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-container", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-container", ...args: any[]): void
    connect(sigName: "notify::end-offset", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-offset", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-offset", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::common-ancestor-container", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::common-ancestor-container", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::common-ancestor-container", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomRange {

    // Own properties of GXml-0.20.GXml.DomRange

    static name: string
    static $gtype: GObject.GType<DomRange>

    // Constructors of GXml-0.20.GXml.DomRange

    constructor(config?: DomRange_ConstructProps) 
    _init(config?: DomRange_ConstructProps): void
}

interface IXsdSchema_ConstructProps extends GObject.Object_ConstructProps, DomElement_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.IXsdSchema

    element_definitions?: IXsdListElements | null
    simple_type_definitions?: IXsdListSimpleTypes | null
    complex_type_definitions?: IXsdListComplexTypes | null
}

interface IXsdSchema extends GObject.Object, DomElement {

    // Own properties of GXml-0.20.GXml.IXsdSchema

    element_definitions: IXsdListElements
    simple_type_definitions: IXsdListSimpleTypes
    complex_type_definitions: IXsdListComplexTypes

    // Owm methods of GXml-0.20.GXml.IXsdSchema

    get_element_definitions(): IXsdListElements
    set_element_definitions(value: IXsdListElements): void
    get_simple_type_definitions(): IXsdListSimpleTypes
    set_simple_type_definitions(value: IXsdListSimpleTypes): void
    get_complex_type_definitions(): IXsdListComplexTypes
    set_complex_type_definitions(value: IXsdListComplexTypes): void

    // Own virtual methods of GXml-0.20.GXml.IXsdSchema

    vfunc_get_element_definitions(): IXsdListElements
    vfunc_set_element_definitions(value: IXsdListElements): void
    vfunc_get_simple_type_definitions(): IXsdListSimpleTypes
    vfunc_set_simple_type_definitions(value: IXsdListSimpleTypes): void
    vfunc_get_complex_type_definitions(): IXsdListComplexTypes
    vfunc_set_complex_type_definitions(value: IXsdListComplexTypes): void

    // Class property signals of GXml-0.20.GXml.IXsdSchema

    connect(sigName: "notify::element-definitions", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-definitions", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-definitions", ...args: any[]): void
    connect(sigName: "notify::simple-type-definitions", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type-definitions", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type-definitions", ...args: any[]): void
    connect(sigName: "notify::complex-type-definitions", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::complex-type-definitions", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::complex-type-definitions", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdSchema {

    // Own properties of GXml-0.20.GXml.IXsdSchema

    static name: string
    static $gtype: GObject.GType<IXsdSchema>

    // Constructors of GXml-0.20.GXml.IXsdSchema

    constructor(config?: IXsdSchema_ConstructProps) 
    _init(config?: IXsdSchema_ConstructProps): void
}

interface IXsdBaseType_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.IXsdBaseType

    anotation?: IXsdAnnotation | null
}

interface IXsdBaseType extends GObject.Object {

    // Own properties of GXml-0.20.GXml.IXsdBaseType

    anotation: IXsdAnnotation

    // Owm methods of GXml-0.20.GXml.IXsdBaseType

    get_anotation(): IXsdAnnotation
    set_anotation(value: IXsdAnnotation): void

    // Own virtual methods of GXml-0.20.GXml.IXsdBaseType

    vfunc_get_anotation(): IXsdAnnotation
    vfunc_set_anotation(value: IXsdAnnotation): void

    // Class property signals of GXml-0.20.GXml.IXsdBaseType

    connect(sigName: "notify::anotation", callback: (($obj: IXsdBaseType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdBaseType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdBaseType {

    // Own properties of GXml-0.20.GXml.IXsdBaseType

    static name: string
    static $gtype: GObject.GType<IXsdBaseType>

    // Constructors of GXml-0.20.GXml.IXsdBaseType

    constructor(config?: IXsdBaseType_ConstructProps) 
    _init(config?: IXsdBaseType_ConstructProps): void
}

interface IXsdSimpleType_ConstructProps extends GObject.Object_ConstructProps, DomElement_ConstructProps, IXsdBaseType_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.IXsdSimpleType

    final?: string | null
    id?: string | null
    name?: string | null
    annotation?: IXsdAnnotation | null
    list?: IXsdTypeList | null
    union?: IXsdTypeUnion | null
    restriction?: IXsdTypeRestriction | null
}

interface IXsdSimpleType extends GObject.Object, DomElement, IXsdBaseType {

    // Own properties of GXml-0.20.GXml.IXsdSimpleType

    final: string
    id: string
    name: string
    annotation: IXsdAnnotation
    list: IXsdTypeList
    union: IXsdTypeUnion
    restriction: IXsdTypeRestriction

    // Owm methods of GXml-0.20.GXml.IXsdSimpleType

    get_final(): string
    set_final(value: string): void
    get_id(): string

    // Overloads of get_id

    get_id(): string | null
    get_id(...args: any[]): any
    get_id(...args: any[]): string | string | null | any
    set_id(value: string): void

    // Overloads of set_id

    set_id(value: string | null): void
    set_id(...args: any[]): any
    set_id(args_or_value: any[] | string | null): void | any
    get_name(): string
    set_name(value: string): void
    get_annotation(): IXsdAnnotation
    set_annotation(value: IXsdAnnotation): void
    get_list(): IXsdTypeList
    set_list(value: IXsdTypeList): void
    get_union(): IXsdTypeUnion
    set_union(value: IXsdTypeUnion): void
    get_restriction(): IXsdTypeRestriction
    set_restriction(value: IXsdTypeRestriction): void

    // Own virtual methods of GXml-0.20.GXml.IXsdSimpleType

    vfunc_get_final(): string
    vfunc_set_final(value: string): void
    vfunc_get_id(): string

    // Overloads of vfunc_get_id

    vfunc_get_id(): string | null
    vfunc_get_id(...args: any[]): any
    vfunc_get_id(...args: any[]): string | string | null | any
    vfunc_set_id(value: string): void

    // Overloads of vfunc_set_id

    vfunc_set_id(value: string | null): void
    vfunc_set_id(...args: any[]): any
    vfunc_set_id(args_or_value: any[] | string | null): void | any
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_annotation(): IXsdAnnotation
    vfunc_set_annotation(value: IXsdAnnotation): void
    vfunc_get_list(): IXsdTypeList
    vfunc_set_list(value: IXsdTypeList): void
    vfunc_get_union(): IXsdTypeUnion
    vfunc_set_union(value: IXsdTypeUnion): void
    vfunc_get_restriction(): IXsdTypeRestriction
    vfunc_set_restriction(value: IXsdTypeRestriction): void

    // Class property signals of GXml-0.20.GXml.IXsdSimpleType

    connect(sigName: "notify::final", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::final", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::list", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::list", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::list", ...args: any[]): void
    connect(sigName: "notify::union", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::union", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::union", ...args: any[]): void
    connect(sigName: "notify::restriction", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::restriction", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdSimpleType {

    // Own properties of GXml-0.20.GXml.IXsdSimpleType

    static name: string
    static $gtype: GObject.GType<IXsdSimpleType>

    // Constructors of GXml-0.20.GXml.IXsdSimpleType

    constructor(config?: IXsdSimpleType_ConstructProps) 
    _init(config?: IXsdSimpleType_ConstructProps): void
}

interface IXsdTypeDef_ConstructProps extends GObject.Object_ConstructProps {
}

interface IXsdTypeDef extends GObject.Object {

    // Class property signals of GXml-0.20.GXml.IXsdTypeDef

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeDef

    static name: string
    static $gtype: GObject.GType<IXsdTypeDef>

    // Constructors of GXml-0.20.GXml.IXsdTypeDef

    constructor(config?: IXsdTypeDef_ConstructProps) 
    _init(config?: IXsdTypeDef_ConstructProps): void
}

interface IXsdTypeRestriction_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeDef_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.IXsdTypeRestriction

    base?: string | null
    id?: string | null
    simple_type?: IXsdSimpleType | null
    enumerations?: IXsdListTypeRestrictionEnumerations | null
    white_spaces?: IXsdListTypeRestrictionWhiteSpaces | null
}

interface IXsdTypeRestriction extends GObject.Object, IXsdTypeDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestriction

    base: string
    id: string
    simple_type: IXsdSimpleType
    enumerations: IXsdListTypeRestrictionEnumerations
    white_spaces: IXsdListTypeRestrictionWhiteSpaces

    // Owm methods of GXml-0.20.GXml.IXsdTypeRestriction

    get_base(): string
    set_base(value: string): void
    get_id(): string
    set_id(value: string): void
    get_simple_type(): IXsdSimpleType
    set_simple_type(value: IXsdSimpleType): void
    get_enumerations(): IXsdListTypeRestrictionEnumerations
    set_enumerations(value: IXsdListTypeRestrictionEnumerations): void
    get_white_spaces(): IXsdListTypeRestrictionWhiteSpaces
    set_white_spaces(value: IXsdListTypeRestrictionWhiteSpaces): void

    // Own virtual methods of GXml-0.20.GXml.IXsdTypeRestriction

    vfunc_get_base(): string
    vfunc_set_base(value: string): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_simple_type(): IXsdSimpleType
    vfunc_set_simple_type(value: IXsdSimpleType): void
    vfunc_get_enumerations(): IXsdListTypeRestrictionEnumerations
    vfunc_set_enumerations(value: IXsdListTypeRestrictionEnumerations): void
    vfunc_get_white_spaces(): IXsdListTypeRestrictionWhiteSpaces
    vfunc_set_white_spaces(value: IXsdListTypeRestrictionWhiteSpaces): void

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestriction

    connect(sigName: "notify::base", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::simple-type", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::enumerations", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enumerations", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enumerations", ...args: any[]): void
    connect(sigName: "notify::white-spaces", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::white-spaces", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::white-spaces", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestriction {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestriction

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestriction>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestriction

    constructor(config?: IXsdTypeRestriction_ConstructProps) 
    _init(config?: IXsdTypeRestriction_ConstructProps): void
}

interface IXsdTypeList_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeDef_ConstructProps {
}

interface IXsdTypeList extends GObject.Object, IXsdTypeDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeList

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeList {

    // Own properties of GXml-0.20.GXml.IXsdTypeList

    static name: string
    static $gtype: GObject.GType<IXsdTypeList>

    // Constructors of GXml-0.20.GXml.IXsdTypeList

    constructor(config?: IXsdTypeList_ConstructProps) 
    _init(config?: IXsdTypeList_ConstructProps): void
}

interface IXsdTypeUnion_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeDef_ConstructProps {
}

interface IXsdTypeUnion extends GObject.Object, IXsdTypeDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeUnion

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeUnion {

    // Own properties of GXml-0.20.GXml.IXsdTypeUnion

    static name: string
    static $gtype: GObject.GType<IXsdTypeUnion>

    // Constructors of GXml-0.20.GXml.IXsdTypeUnion

    constructor(config?: IXsdTypeUnion_ConstructProps) 
    _init(config?: IXsdTypeUnion_ConstructProps): void
}

interface IXsdTypeRestrictionDef_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.IXsdTypeRestrictionDef

    annotation?: IXsdAnnotation | null
}

interface IXsdTypeRestrictionDef extends GObject.Object {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionDef

    annotation: IXsdAnnotation

    // Owm methods of GXml-0.20.GXml.IXsdTypeRestrictionDef

    get_annotation(): IXsdAnnotation
    set_annotation(value: IXsdAnnotation): void

    // Own virtual methods of GXml-0.20.GXml.IXsdTypeRestrictionDef

    vfunc_get_annotation(): IXsdAnnotation
    vfunc_set_annotation(value: IXsdAnnotation): void

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionDef

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionDef

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionDef>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionDef

    constructor(config?: IXsdTypeRestrictionDef_ConstructProps) 
    _init(config?: IXsdTypeRestrictionDef_ConstructProps): void
}

interface IXsdTypeRestrictionMinExclusive_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {
}

interface IXsdTypeRestrictionMinExclusive extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMinExclusive

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionMinExclusive {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinExclusive

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionMinExclusive>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMinExclusive

    constructor(config?: IXsdTypeRestrictionMinExclusive_ConstructProps) 
    _init(config?: IXsdTypeRestrictionMinExclusive_ConstructProps): void
}

interface IXsdTypeRestrictionMinInclusive_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {
}

interface IXsdTypeRestrictionMinInclusive extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMinInclusive

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionMinInclusive {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinInclusive

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionMinInclusive>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMinInclusive

    constructor(config?: IXsdTypeRestrictionMinInclusive_ConstructProps) 
    _init(config?: IXsdTypeRestrictionMinInclusive_ConstructProps): void
}

interface IXsdTypeRestrictionMaxExclusive_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {
}

interface IXsdTypeRestrictionMaxExclusive extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMaxExclusive

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionMaxExclusive {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxExclusive

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionMaxExclusive>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMaxExclusive

    constructor(config?: IXsdTypeRestrictionMaxExclusive_ConstructProps) 
    _init(config?: IXsdTypeRestrictionMaxExclusive_ConstructProps): void
}

interface IXsdTypeRestrictionMaxInclusive_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {
}

interface IXsdTypeRestrictionMaxInclusive extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMaxInclusive

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionMaxInclusive {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxInclusive

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionMaxInclusive>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMaxInclusive

    constructor(config?: IXsdTypeRestrictionMaxInclusive_ConstructProps) 
    _init(config?: IXsdTypeRestrictionMaxInclusive_ConstructProps): void
}

interface IXsdTypeRestrictionTotalDigits_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {
}

interface IXsdTypeRestrictionTotalDigits extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionTotalDigits

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionTotalDigits {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionTotalDigits

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionTotalDigits>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionTotalDigits

    constructor(config?: IXsdTypeRestrictionTotalDigits_ConstructProps) 
    _init(config?: IXsdTypeRestrictionTotalDigits_ConstructProps): void
}

interface IXsdTypeRestrictionFractionDigits_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {
}

interface IXsdTypeRestrictionFractionDigits extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionFractionDigits

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionFractionDigits {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionFractionDigits

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionFractionDigits>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionFractionDigits

    constructor(config?: IXsdTypeRestrictionFractionDigits_ConstructProps) 
    _init(config?: IXsdTypeRestrictionFractionDigits_ConstructProps): void
}

interface IXsdTypeRestrictionLength_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {
}

interface IXsdTypeRestrictionLength extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionLength

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionLength {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionLength

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionLength>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionLength

    constructor(config?: IXsdTypeRestrictionLength_ConstructProps) 
    _init(config?: IXsdTypeRestrictionLength_ConstructProps): void
}

interface IXsdTypeRestrictionMinLength_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {
}

interface IXsdTypeRestrictionMinLength extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMinLength

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionMinLength {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinLength

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionMinLength>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMinLength

    constructor(config?: IXsdTypeRestrictionMinLength_ConstructProps) 
    _init(config?: IXsdTypeRestrictionMinLength_ConstructProps): void
}

interface IXsdTypeRestrictionMaxLength_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {
}

interface IXsdTypeRestrictionMaxLength extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMaxLength

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionMaxLength {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxLength

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionMaxLength>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMaxLength

    constructor(config?: IXsdTypeRestrictionMaxLength_ConstructProps) 
    _init(config?: IXsdTypeRestrictionMaxLength_ConstructProps): void
}

interface IXsdTypeRestrictionEnumeration_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    id?: string | null
    value?: string | null
}

interface IXsdTypeRestrictionEnumeration extends GObject.Object, IXsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    id: string
    value: string

    // Owm methods of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    get_id(): string
    set_id(value: string): void
    get_value(): string
    set_value(value: string): void

    // Own virtual methods of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_value(): string
    vfunc_set_value(value: string): void

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    connect(sigName: "notify::id", callback: (($obj: IXsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: IXsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: IXsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionEnumeration {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionEnumeration>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    constructor(config?: IXsdTypeRestrictionEnumeration_ConstructProps) 
    _init(config?: IXsdTypeRestrictionEnumeration_ConstructProps): void
}

interface IXsdTypeRestrictionWhiteSpace_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    fixed?: boolean | null
    id?: string | null
    value?: string | null
}

interface IXsdTypeRestrictionWhiteSpace extends GObject.Object, IXsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    fixed: boolean
    id: string
    value: string

    // Owm methods of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    get_fixed(): boolean
    set_fixed(value: boolean): void
    get_id(): string
    set_id(value: string): void
    get_value(): string
    set_value(value: string): void

    // Own virtual methods of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    vfunc_get_fixed(): boolean
    vfunc_set_fixed(value: boolean): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_value(): string
    vfunc_set_value(value: string): void

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    connect(sigName: "notify::fixed", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionWhiteSpace {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionWhiteSpace>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    constructor(config?: IXsdTypeRestrictionWhiteSpace_ConstructProps) 
    _init(config?: IXsdTypeRestrictionWhiteSpace_ConstructProps): void
}

interface IXsdTypeRestrictionPattern_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {
}

interface IXsdTypeRestrictionPattern extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionPattern

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionPattern {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionPattern

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionPattern>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionPattern

    constructor(config?: IXsdTypeRestrictionPattern_ConstructProps) 
    _init(config?: IXsdTypeRestrictionPattern_ConstructProps): void
}

interface IXsdTypeRestrictionAssertion_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {
}

interface IXsdTypeRestrictionAssertion extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionAssertion

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionAssertion {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionAssertion

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionAssertion>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionAssertion

    constructor(config?: IXsdTypeRestrictionAssertion_ConstructProps) 
    _init(config?: IXsdTypeRestrictionAssertion_ConstructProps): void
}

interface IXsdTypeRestrictionExplicitTimezone_ConstructProps extends GObject.Object_ConstructProps, IXsdTypeRestrictionDef_ConstructProps {
}

interface IXsdTypeRestrictionExplicitTimezone extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionExplicitTimezone

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdTypeRestrictionExplicitTimezone {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionExplicitTimezone

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionExplicitTimezone>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionExplicitTimezone

    constructor(config?: IXsdTypeRestrictionExplicitTimezone_ConstructProps) 
    _init(config?: IXsdTypeRestrictionExplicitTimezone_ConstructProps): void
}

interface IXsdComplexType_ConstructProps extends GObject.Object_ConstructProps, DomElement_ConstructProps, IXsdBaseType_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.IXsdComplexType

    abstract?: boolean | null
    block?: string | null
    final?: string | null
    mixed?: boolean | null
    name?: string | null
    default_attributes_apply?: boolean | null
    content_type?: IXsdBaseContent | null
}

interface IXsdComplexType extends GObject.Object, DomElement, IXsdBaseType {

    // Own properties of GXml-0.20.GXml.IXsdComplexType

    abstract: boolean
    block: string
    final: string
    mixed: boolean
    name: string
    default_attributes_apply: boolean
    content_type: IXsdBaseContent
    readonly type_attributes: IXsdListAttributes
    readonly group_attributes: IXsdListAttributesGroup

    // Owm methods of GXml-0.20.GXml.IXsdComplexType

    get_abstract(): boolean
    set_abstract(value: boolean): void
    get_block(): string
    set_block(value: string): void
    get_final(): string
    set_final(value: string): void
    get_mixed(): boolean
    set_mixed(value: boolean): void
    get_name(): string
    set_name(value: string): void
    get_default_attributes_apply(): boolean
    set_default_attributes_apply(value: boolean): void
    get_content_type(): IXsdBaseContent
    set_content_type(value: IXsdBaseContent): void
    get_type_attributes(): IXsdListAttributes
    get_group_attributes(): IXsdListAttributesGroup

    // Own virtual methods of GXml-0.20.GXml.IXsdComplexType

    vfunc_get_abstract(): boolean
    vfunc_set_abstract(value: boolean): void
    vfunc_get_block(): string
    vfunc_set_block(value: string): void
    vfunc_get_final(): string
    vfunc_set_final(value: string): void
    vfunc_get_mixed(): boolean
    vfunc_set_mixed(value: boolean): void
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_default_attributes_apply(): boolean
    vfunc_set_default_attributes_apply(value: boolean): void
    vfunc_get_content_type(): IXsdBaseContent
    vfunc_set_content_type(value: IXsdBaseContent): void
    vfunc_get_type_attributes(): IXsdListAttributes
    vfunc_get_group_attributes(): IXsdListAttributesGroup

    // Class property signals of GXml-0.20.GXml.IXsdComplexType

    connect(sigName: "notify::abstract", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abstract", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abstract", ...args: any[]): void
    connect(sigName: "notify::block", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::final", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::final", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::mixed", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mixed", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mixed", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::default-attributes-apply", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-attributes-apply", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-attributes-apply", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::type-attributes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-attributes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-attributes", ...args: any[]): void
    connect(sigName: "notify::group-attributes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-attributes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-attributes", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdComplexType {

    // Own properties of GXml-0.20.GXml.IXsdComplexType

    static name: string
    static $gtype: GObject.GType<IXsdComplexType>

    // Constructors of GXml-0.20.GXml.IXsdComplexType

    constructor(config?: IXsdComplexType_ConstructProps) 
    _init(config?: IXsdComplexType_ConstructProps): void
}

interface IXsdExtension_ConstructProps extends GObject.Object_ConstructProps, DomElement_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.IXsdExtension

    base?: string | null
}

interface IXsdExtension extends GObject.Object, DomElement {

    // Own properties of GXml-0.20.GXml.IXsdExtension

    base: string

    // Owm methods of GXml-0.20.GXml.IXsdExtension

    get_base(): string
    set_base(value: string): void

    // Own virtual methods of GXml-0.20.GXml.IXsdExtension

    vfunc_get_base(): string
    vfunc_set_base(value: string): void

    // Class property signals of GXml-0.20.GXml.IXsdExtension

    connect(sigName: "notify::base", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdExtension {

    // Own properties of GXml-0.20.GXml.IXsdExtension

    static name: string
    static $gtype: GObject.GType<IXsdExtension>

    // Constructors of GXml-0.20.GXml.IXsdExtension

    constructor(config?: IXsdExtension_ConstructProps) 
    _init(config?: IXsdExtension_ConstructProps): void
}

interface IXsdElement_ConstructProps extends GObject.Object_ConstructProps, DomElement_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.IXsdElement

    abstract?: boolean | null
    block?: string | null
    "default"?: string | null
    final?: string | null
    fixed?: string | null
    form?: string | null
    id?: string | null
    maxOccurs?: string | null
    minOccurs?: string | null
    name?: string | null
    nillable?: boolean | null
    ref?: string | null
    substitution_group?: DomTokenList | null
    target_namespace?: string | null
    object_type?: string | null
    anotation?: IXsdAnnotation | null
    simple_type?: IXsdSimpleType | null
    complex_type?: IXsdComplexType | null
}

interface IXsdElement extends GObject.Object, DomElement {

    // Own properties of GXml-0.20.GXml.IXsdElement

    abstract: boolean
    block: string
    "default": string
    final: string
    fixed: string
    form: string
    id: string
    maxOccurs: string
    minOccurs: string
    name: string
    nillable: boolean
    // TODO fix conflict: ref: string
    substitution_group: DomTokenList
    target_namespace: string
    object_type: string
    anotation: IXsdAnnotation
    simple_type: IXsdSimpleType
    complex_type: IXsdComplexType

    // Owm methods of GXml-0.20.GXml.IXsdElement

    get_abstract(): boolean
    set_abstract(value: boolean): void
    get_block(): string
    set_block(value: string): void
    get_default(): string
    set_default(value: string): void
    get_final(): string
    set_final(value: string): void
    get_fixed(): string
    set_fixed(value: string): void
    get_form(): string
    set_form(value: string): void
    get_id(): string | null
    set_id(value: string | null): void
    get_maxOccurs(): string
    set_maxOccurs(value: string): void
    get_minOccurs(): string
    set_minOccurs(value: string): void
    get_name(): string
    set_name(value: string): void
    get_nillable(): boolean
    set_nillable(value: boolean): void
    get_ref(): string
    set_ref(value: string): void
    get_substitution_group(): DomTokenList
    set_substitution_group(value: DomTokenList): void
    get_target_namespace(): string
    set_target_namespace(value: string): void
    get_object_type(): string
    set_object_type(value: string): void
    get_anotation(): IXsdAnnotation
    set_anotation(value: IXsdAnnotation): void
    get_simple_type(): IXsdSimpleType
    set_simple_type(value: IXsdSimpleType): void
    get_complex_type(): IXsdComplexType
    set_complex_type(value: IXsdComplexType): void

    // Own virtual methods of GXml-0.20.GXml.IXsdElement

    vfunc_get_abstract(): boolean
    vfunc_set_abstract(value: boolean): void
    vfunc_get_block(): string
    vfunc_set_block(value: string): void
    vfunc_get_default(): string
    vfunc_set_default(value: string): void
    vfunc_get_final(): string
    vfunc_set_final(value: string): void
    vfunc_get_fixed(): string
    vfunc_set_fixed(value: string): void
    vfunc_get_form(): string
    vfunc_set_form(value: string): void
    vfunc_get_id(): string | null
    vfunc_set_id(value: string | null): void
    vfunc_get_maxOccurs(): string
    vfunc_set_maxOccurs(value: string): void
    vfunc_get_minOccurs(): string
    vfunc_set_minOccurs(value: string): void
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_nillable(): boolean
    vfunc_set_nillable(value: boolean): void
    vfunc_get_ref(): string
    vfunc_set_ref(value: string): void
    vfunc_get_substitution_group(): DomTokenList
    vfunc_set_substitution_group(value: DomTokenList): void
    vfunc_get_target_namespace(): string
    vfunc_set_target_namespace(value: string): void
    vfunc_get_object_type(): string
    vfunc_set_object_type(value: string): void
    vfunc_get_anotation(): IXsdAnnotation
    vfunc_set_anotation(value: IXsdAnnotation): void
    vfunc_get_simple_type(): IXsdSimpleType
    vfunc_set_simple_type(value: IXsdSimpleType): void
    vfunc_get_complex_type(): IXsdComplexType
    vfunc_set_complex_type(value: IXsdComplexType): void

    // Class property signals of GXml-0.20.GXml.IXsdElement

    connect(sigName: "notify::abstract", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abstract", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abstract", ...args: any[]): void
    connect(sigName: "notify::block", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::default", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default", ...args: any[]): void
    connect(sigName: "notify::final", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::final", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::fixed", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed", ...args: any[]): void
    connect(sigName: "notify::form", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::form", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::maxOccurs", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxOccurs", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maxOccurs", ...args: any[]): void
    connect(sigName: "notify::minOccurs", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minOccurs", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minOccurs", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::nillable", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nillable", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nillable", ...args: any[]): void
    connect(sigName: "notify::ref", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref", ...args: any[]): void
    connect(sigName: "notify::substitution-group", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::substitution-group", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::substitution-group", ...args: any[]): void
    connect(sigName: "notify::target-namespace", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target-namespace", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target-namespace", ...args: any[]): void
    connect(sigName: "notify::object-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::simple-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::complex-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::complex-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::complex-type", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdElement {

    // Own properties of GXml-0.20.GXml.IXsdElement

    static name: string
    static $gtype: GObject.GType<IXsdElement>

    // Constructors of GXml-0.20.GXml.IXsdElement

    constructor(config?: IXsdElement_ConstructProps) 
    _init(config?: IXsdElement_ConstructProps): void
}

interface IXsdAnnotation_ConstructProps extends GObject.Object_ConstructProps {
}

interface IXsdAnnotation extends GObject.Object {

    // Class property signals of GXml-0.20.GXml.IXsdAnnotation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdAnnotation {

    // Own properties of GXml-0.20.GXml.IXsdAnnotation

    static name: string
    static $gtype: GObject.GType<IXsdAnnotation>

    // Constructors of GXml-0.20.GXml.IXsdAnnotation

    constructor(config?: IXsdAnnotation_ConstructProps) 
    _init(config?: IXsdAnnotation_ConstructProps): void
}

interface IXsdBaseContent_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.IXsdBaseContent

    anotation?: IXsdAnnotation | null
}

interface IXsdBaseContent extends GObject.Object {

    // Own properties of GXml-0.20.GXml.IXsdBaseContent

    anotation: IXsdAnnotation

    // Owm methods of GXml-0.20.GXml.IXsdBaseContent

    get_anotation(): IXsdAnnotation
    set_anotation(value: IXsdAnnotation): void

    // Own virtual methods of GXml-0.20.GXml.IXsdBaseContent

    vfunc_get_anotation(): IXsdAnnotation
    vfunc_set_anotation(value: IXsdAnnotation): void

    // Class property signals of GXml-0.20.GXml.IXsdBaseContent

    connect(sigName: "notify::anotation", callback: (($obj: IXsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdBaseContent {

    // Own properties of GXml-0.20.GXml.IXsdBaseContent

    static name: string
    static $gtype: GObject.GType<IXsdBaseContent>

    // Constructors of GXml-0.20.GXml.IXsdBaseContent

    constructor(config?: IXsdBaseContent_ConstructProps) 
    _init(config?: IXsdBaseContent_ConstructProps): void
}

interface IXsdSimpleContent_ConstructProps extends GObject.Object_ConstructProps, IXsdBaseContent_ConstructProps {
}

interface IXsdSimpleContent extends GObject.Object, IXsdBaseContent {

    // Class property signals of GXml-0.20.GXml.IXsdSimpleContent

    connect(sigName: "notify::anotation", callback: (($obj: IXsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdSimpleContent {

    // Own properties of GXml-0.20.GXml.IXsdSimpleContent

    static name: string
    static $gtype: GObject.GType<IXsdSimpleContent>

    // Constructors of GXml-0.20.GXml.IXsdSimpleContent

    constructor(config?: IXsdSimpleContent_ConstructProps) 
    _init(config?: IXsdSimpleContent_ConstructProps): void
}

interface IXsdComplexContent_ConstructProps extends GObject.Object_ConstructProps, IXsdBaseContent_ConstructProps {
}

interface IXsdComplexContent extends GObject.Object, IXsdBaseContent {

    // Class property signals of GXml-0.20.GXml.IXsdComplexContent

    connect(sigName: "notify::anotation", callback: (($obj: IXsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdComplexContent {

    // Own properties of GXml-0.20.GXml.IXsdComplexContent

    static name: string
    static $gtype: GObject.GType<IXsdComplexContent>

    // Constructors of GXml-0.20.GXml.IXsdComplexContent

    constructor(config?: IXsdComplexContent_ConstructProps) 
    _init(config?: IXsdComplexContent_ConstructProps): void
}

interface IXsdOpenContent_ConstructProps extends GObject.Object_ConstructProps, IXsdBaseContent_ConstructProps {
}

interface IXsdOpenContent extends GObject.Object, IXsdBaseContent {

    // Class property signals of GXml-0.20.GXml.IXsdOpenContent

    connect(sigName: "notify::anotation", callback: (($obj: IXsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdOpenContent {

    // Own properties of GXml-0.20.GXml.IXsdOpenContent

    static name: string
    static $gtype: GObject.GType<IXsdOpenContent>

    // Constructors of GXml-0.20.GXml.IXsdOpenContent

    constructor(config?: IXsdOpenContent_ConstructProps) 
    _init(config?: IXsdOpenContent_ConstructProps): void
}

interface IXsdBaseAttribute_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.IXsdBaseAttribute

    anotation?: IXsdAnnotation | null
}

interface IXsdBaseAttribute extends GObject.Object {

    // Own properties of GXml-0.20.GXml.IXsdBaseAttribute

    anotation: IXsdAnnotation

    // Owm methods of GXml-0.20.GXml.IXsdBaseAttribute

    get_anotation(): IXsdAnnotation
    set_anotation(value: IXsdAnnotation): void

    // Own virtual methods of GXml-0.20.GXml.IXsdBaseAttribute

    vfunc_get_anotation(): IXsdAnnotation
    vfunc_set_anotation(value: IXsdAnnotation): void

    // Class property signals of GXml-0.20.GXml.IXsdBaseAttribute

    connect(sigName: "notify::anotation", callback: (($obj: IXsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdBaseAttribute {

    // Own properties of GXml-0.20.GXml.IXsdBaseAttribute

    static name: string
    static $gtype: GObject.GType<IXsdBaseAttribute>

    // Constructors of GXml-0.20.GXml.IXsdBaseAttribute

    constructor(config?: IXsdBaseAttribute_ConstructProps) 
    _init(config?: IXsdBaseAttribute_ConstructProps): void
}

interface IXsdAttribute_ConstructProps extends GObject.Object_ConstructProps {
}

interface IXsdAttribute extends GObject.Object {

    // Class property signals of GXml-0.20.GXml.IXsdAttribute

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdAttribute {

    // Own properties of GXml-0.20.GXml.IXsdAttribute

    static name: string
    static $gtype: GObject.GType<IXsdAttribute>

    // Constructors of GXml-0.20.GXml.IXsdAttribute

    constructor(config?: IXsdAttribute_ConstructProps) 
    _init(config?: IXsdAttribute_ConstructProps): void
}

interface IXsdAttributeGroup_ConstructProps extends GObject.Object_ConstructProps {
}

interface IXsdAttributeGroup extends GObject.Object {

    // Class property signals of GXml-0.20.GXml.IXsdAttributeGroup

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdAttributeGroup {

    // Own properties of GXml-0.20.GXml.IXsdAttributeGroup

    static name: string
    static $gtype: GObject.GType<IXsdAttributeGroup>

    // Constructors of GXml-0.20.GXml.IXsdAttributeGroup

    constructor(config?: IXsdAttributeGroup_ConstructProps) 
    _init(config?: IXsdAttributeGroup_ConstructProps): void
}

interface IXsdList_ConstructProps extends GObject.Object_ConstructProps, Collection_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.IXsdList

    element?: DomElement | null
    items_type?: GObject.GType | null
    items_name?: GObject.GType | null
}

interface IXsdList extends GObject.Object, Collection {

    // Own properties of GXml-0.20.GXml.IXsdList

    element: DomElement
    items_type: GObject.GType
    items_name: GObject.GType
    readonly length: number

    // Owm methods of GXml-0.20.GXml.IXsdList

    get_element(): DomElement
    set_element(value: DomElement): void
    get_items_type(): GObject.GType
    set_items_type(value: GObject.GType): void
    get_items_name(): GObject.GType

    // Overloads of get_items_name

    get_items_name(): string
    get_items_name(...args: any[]): any
    get_items_name(...args: any[]): GObject.GType | string | any
    set_items_name(value: GObject.GType): void
    get_length(): number
    get_item(index: number): DomElement | null
    append(element: DomElement): void
    remove(index: number): void
    index_of(element: DomElement): number

    // Own virtual methods of GXml-0.20.GXml.IXsdList

    vfunc_get_element(): DomElement
    vfunc_set_element(value: DomElement): void
    vfunc_get_items_type(): GObject.GType
    vfunc_set_items_type(value: GObject.GType): void
    vfunc_get_items_name(): GObject.GType

    // Overloads of vfunc_get_items_name

    vfunc_get_items_name(): string
    vfunc_get_items_name(...args: any[]): any
    vfunc_get_items_name(...args: any[]): GObject.GType | string | any
    vfunc_set_items_name(value: GObject.GType): void
    vfunc_get_length(): number
    vfunc_get_item(index: number): DomElement | null
    vfunc_append(element: DomElement): void
    vfunc_remove(index: number): void
    vfunc_index_of(element: DomElement): number

    // Class property signals of GXml-0.20.GXml.IXsdList

    connect(sigName: "notify::element", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdList {

    // Own properties of GXml-0.20.GXml.IXsdList

    static name: string
    static $gtype: GObject.GType<IXsdList>

    // Constructors of GXml-0.20.GXml.IXsdList

    constructor(config?: IXsdList_ConstructProps) 
    _init(config?: IXsdList_ConstructProps): void
}

interface IXsdListElements_ConstructProps extends GObject.Object_ConstructProps, IXsdList_ConstructProps {
}

interface IXsdListElements extends GObject.Object, IXsdList {

    // Conflicting properties

    items_name: any

    // Conflicting methods

    get_items_name(...args: any[]): any
    vfunc_get_items_name(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.IXsdListElements

    connect(sigName: "notify::element", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdListElements {

    // Own properties of GXml-0.20.GXml.IXsdListElements

    static name: string
    static $gtype: GObject.GType<IXsdListElements>

    // Constructors of GXml-0.20.GXml.IXsdListElements

    constructor(config?: IXsdListElements_ConstructProps) 
    _init(config?: IXsdListElements_ConstructProps): void
}

interface IXsdListSimpleTypes_ConstructProps extends GObject.Object_ConstructProps, IXsdList_ConstructProps {
}

interface IXsdListSimpleTypes extends GObject.Object, IXsdList {

    // Conflicting properties

    items_name: any

    // Conflicting methods

    get_items_name(...args: any[]): any
    vfunc_get_items_name(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.IXsdListSimpleTypes

    connect(sigName: "notify::element", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdListSimpleTypes {

    // Own properties of GXml-0.20.GXml.IXsdListSimpleTypes

    static name: string
    static $gtype: GObject.GType<IXsdListSimpleTypes>

    // Constructors of GXml-0.20.GXml.IXsdListSimpleTypes

    constructor(config?: IXsdListSimpleTypes_ConstructProps) 
    _init(config?: IXsdListSimpleTypes_ConstructProps): void
}

interface IXsdListComplexTypes_ConstructProps extends GObject.Object_ConstructProps, IXsdList_ConstructProps {
}

interface IXsdListComplexTypes extends GObject.Object, IXsdList {

    // Conflicting properties

    items_name: any

    // Conflicting methods

    get_items_name(...args: any[]): any
    vfunc_get_items_name(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.IXsdListComplexTypes

    connect(sigName: "notify::element", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdListComplexTypes {

    // Own properties of GXml-0.20.GXml.IXsdListComplexTypes

    static name: string
    static $gtype: GObject.GType<IXsdListComplexTypes>

    // Constructors of GXml-0.20.GXml.IXsdListComplexTypes

    constructor(config?: IXsdListComplexTypes_ConstructProps) 
    _init(config?: IXsdListComplexTypes_ConstructProps): void
}

interface IXsdListAttributes_ConstructProps extends GObject.Object_ConstructProps, IXsdList_ConstructProps {
}

interface IXsdListAttributes extends GObject.Object, IXsdList {

    // Conflicting properties

    items_name: any

    // Conflicting methods

    get_items_name(...args: any[]): any
    vfunc_get_items_name(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.IXsdListAttributes

    connect(sigName: "notify::element", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdListAttributes {

    // Own properties of GXml-0.20.GXml.IXsdListAttributes

    static name: string
    static $gtype: GObject.GType<IXsdListAttributes>

    // Constructors of GXml-0.20.GXml.IXsdListAttributes

    constructor(config?: IXsdListAttributes_ConstructProps) 
    _init(config?: IXsdListAttributes_ConstructProps): void
}

interface IXsdListAttributesGroup_ConstructProps extends GObject.Object_ConstructProps, IXsdList_ConstructProps {
}

interface IXsdListAttributesGroup extends GObject.Object, IXsdList {

    // Conflicting properties

    items_name: any

    // Conflicting methods

    get_items_name(...args: any[]): any
    vfunc_get_items_name(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.IXsdListAttributesGroup

    connect(sigName: "notify::element", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdListAttributesGroup {

    // Own properties of GXml-0.20.GXml.IXsdListAttributesGroup

    static name: string
    static $gtype: GObject.GType<IXsdListAttributesGroup>

    // Constructors of GXml-0.20.GXml.IXsdListAttributesGroup

    constructor(config?: IXsdListAttributesGroup_ConstructProps) 
    _init(config?: IXsdListAttributesGroup_ConstructProps): void
}

interface IXsdListTypeRestrictionEnumerations_ConstructProps extends GObject.Object_ConstructProps, IXsdList_ConstructProps {
}

interface IXsdListTypeRestrictionEnumerations extends GObject.Object, IXsdList {

    // Conflicting properties

    items_name: any

    // Conflicting methods

    get_items_name(...args: any[]): any
    vfunc_get_items_name(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.IXsdListTypeRestrictionEnumerations

    connect(sigName: "notify::element", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdListTypeRestrictionEnumerations {

    // Own properties of GXml-0.20.GXml.IXsdListTypeRestrictionEnumerations

    static name: string
    static $gtype: GObject.GType<IXsdListTypeRestrictionEnumerations>

    // Constructors of GXml-0.20.GXml.IXsdListTypeRestrictionEnumerations

    constructor(config?: IXsdListTypeRestrictionEnumerations_ConstructProps) 
    _init(config?: IXsdListTypeRestrictionEnumerations_ConstructProps): void
}

interface IXsdListTypeRestrictionWhiteSpaces_ConstructProps extends GObject.Object_ConstructProps, IXsdList_ConstructProps {
}

interface IXsdListTypeRestrictionWhiteSpaces extends GObject.Object, IXsdList {

    // Conflicting properties

    items_name: any

    // Conflicting methods

    get_items_name(...args: any[]): any
    vfunc_get_items_name(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.IXsdListTypeRestrictionWhiteSpaces

    connect(sigName: "notify::element", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IXsdListTypeRestrictionWhiteSpaces {

    // Own properties of GXml-0.20.GXml.IXsdListTypeRestrictionWhiteSpaces

    static name: string
    static $gtype: GObject.GType<IXsdListTypeRestrictionWhiteSpaces>

    // Constructors of GXml-0.20.GXml.IXsdListTypeRestrictionWhiteSpaces

    constructor(config?: IXsdListTypeRestrictionWhiteSpaces_ConstructProps) 
    _init(config?: IXsdListTypeRestrictionWhiteSpaces_ConstructProps): void
}

interface Object_ConstructProps extends GObject.Object_ConstructProps, DomNode_ConstructProps, DomElement_ConstructProps {
}

interface Object extends GObject.Object, DomNode, DomElement {

    // Owm methods of GXml-0.20.GXml.Object

    get_properties_list(): GObject.ParamSpec[]
    find_property_name(nick: string): GObject.ParamSpec | null
    find_object_property_name(pname: string): GObject.ParamSpec | null
    get_property_element_list(): GObject.ParamSpec[]
    get_property_string(prop: GObject.ParamSpec): string | null
    get_attribute(name: string): string | null
    find_property(name: string): Property | null
    set_attribute(name: string, val?: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value?: string): void
    set_attribute(...args: any[]): any
    set_attribute(args_or_name: any[] | string, value?: string): boolean | void | any
    get_child(name: string): DomElement | null
    find_elements(name: string): DomElementList
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    remove_attribute(...args: any[]): any
    remove_attribute(args_or_name: any[] | string): boolean | void | any
    set_instance_property(name: string): boolean
    clean_property_elements(name: string): void

    // Own virtual methods of GXml-0.20.GXml.Object

    vfunc_get_properties_list(): GObject.ParamSpec[]
    vfunc_find_property_name(nick: string): GObject.ParamSpec | null
    vfunc_find_object_property_name(pname: string): GObject.ParamSpec | null
    vfunc_get_property_element_list(): GObject.ParamSpec[]
    vfunc_get_property_string(prop: GObject.ParamSpec): string | null
    vfunc_get_attribute(name: string): string | null
    vfunc_find_property(name: string): Property | null
    vfunc_set_attribute(name: string, val?: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value?: string): void
    vfunc_set_attribute(...args: any[]): any
    vfunc_set_attribute(args_or_name: any[] | string, value?: string): boolean | void | any
    vfunc_get_child(name: string): DomElement | null
    vfunc_find_elements(name: string): DomElementList
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(...args: any[]): any
    vfunc_remove_attribute(args_or_name: any[] | string): boolean | void | any
    vfunc_set_instance_property(name: string): boolean
    vfunc_clean_property_elements(name: string): void

    // Class property signals of GXml-0.20.GXml.Object

    connect(sigName: "notify::node-type", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Object {

    // Own properties of GXml-0.20.GXml.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of GXml-0.20.GXml.Object

    constructor(config?: Object_ConstructProps) 
    _init(config?: Object_ConstructProps): void
}

interface Parser_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.Parser

    backup?: boolean | null
    indent?: boolean | null
    cancellable?: Gio.Cancellable | null
}

interface Parser extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Parser

    backup: boolean
    indent: boolean
    cancellable: Gio.Cancellable
    readonly node: DomNode
    readonly types: GLib.HashTable

    // Owm methods of GXml-0.20.GXml.Parser

    get_backup(): boolean
    set_backup(value: boolean): void
    get_indent(): boolean
    set_indent(value: boolean): void
    get_cancellable(): Gio.Cancellable | null
    set_cancellable(value: Gio.Cancellable | null): void
    get_node(): DomNode
    get_types(): GLib.HashTable
    write_file(file: Gio.File): void
    write_file_async(file: Gio.File, _callback_: Gio.AsyncReadyCallback | null): void
    write_file_finish(_res_: Gio.AsyncResult): void
    write_string(): string
    write_string_async(_callback_: Gio.AsyncReadyCallback | null): void
    write_string_finish(_res_: Gio.AsyncResult): string
    write_stream(stream: Gio.OutputStream): void
    write_stream_async(stream: Gio.OutputStream, _callback_: Gio.AsyncReadyCallback | null): void
    write_stream_finish(_res_: Gio.AsyncResult): void
    read_file(file: Gio.File): void
    read_file_async(file: Gio.File, _callback_: Gio.AsyncReadyCallback | null): void
    read_file_finish(_res_: Gio.AsyncResult): void
    read_stream(stream: Gio.InputStream): void
    read_stream_async(stream: Gio.InputStream, _callback_: Gio.AsyncReadyCallback | null): void
    read_stream_finish(_res_: Gio.AsyncResult): void
    read_string(str: string): void
    read_string_async(str: string, _callback_: Gio.AsyncReadyCallback | null): void
    read_string_finish(_res_: Gio.AsyncResult): void
    create_stream(): Gio.InputStream
    create_stream_async(_callback_: Gio.AsyncReadyCallback | null): void
    create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream
    read_child_nodes(parent: DomNode): void
    read_child_nodes_async(parent: DomNode, _callback_: Gio.AsyncReadyCallback | null): void
    read_child_nodes_finish(_res_: Gio.AsyncResult): void
    read_child_node(parent: DomNode): boolean
    read_child_element(parent: DomNode): boolean
    read_element_property(parent: DomNode): [ /* returnType */ boolean, /* element */ DomNode ]
    add_element_collection(parent: DomNode): [ /* returnType */ boolean, /* element */ DomNode ]
    read_child_nodes_stream(istream: Gio.InputStream): void
    read_child_nodes_string(str: string): void
    read_unparsed(): string
    move_next_node(): boolean
    current_is_empty_element(): boolean
    current_is_element(): boolean
    current_is_document(): boolean
    current_node_name(): string
    create_element(parent: DomNode): DomElement | null
    read_element(element: DomElement): void

    // Own virtual methods of GXml-0.20.GXml.Parser

    vfunc_get_backup(): boolean
    vfunc_set_backup(value: boolean): void
    vfunc_get_indent(): boolean
    vfunc_set_indent(value: boolean): void
    vfunc_get_cancellable(): Gio.Cancellable | null
    vfunc_set_cancellable(value: Gio.Cancellable | null): void
    vfunc_get_node(): DomNode
    vfunc_get_types(): GLib.HashTable
    vfunc_write_file(file: Gio.File): void
    vfunc_write_file_async(file: Gio.File, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_write_file_finish(_res_: Gio.AsyncResult): void
    vfunc_write_string(): string
    vfunc_write_string_async(_callback_: Gio.AsyncReadyCallback | null): void
    vfunc_write_string_finish(_res_: Gio.AsyncResult): string
    vfunc_write_stream(stream: Gio.OutputStream): void
    vfunc_write_stream_async(stream: Gio.OutputStream, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_write_stream_finish(_res_: Gio.AsyncResult): void
    vfunc_read_file(file: Gio.File): void
    vfunc_read_file_async(file: Gio.File, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_read_file_finish(_res_: Gio.AsyncResult): void
    vfunc_read_stream(stream: Gio.InputStream): void
    vfunc_read_stream_async(stream: Gio.InputStream, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_read_stream_finish(_res_: Gio.AsyncResult): void
    vfunc_read_string(str: string): void
    vfunc_read_string_async(str: string, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_read_string_finish(_res_: Gio.AsyncResult): void
    vfunc_create_stream(): Gio.InputStream
    vfunc_create_stream_async(_callback_: Gio.AsyncReadyCallback | null): void
    vfunc_create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream
    vfunc_read_child_nodes(parent: DomNode): void
    vfunc_read_child_nodes_async(parent: DomNode, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_read_child_nodes_finish(_res_: Gio.AsyncResult): void
    vfunc_read_child_node(parent: DomNode): boolean
    vfunc_read_child_element(parent: DomNode): boolean
    vfunc_read_element_property(parent: DomNode): [ /* returnType */ boolean, /* element */ DomNode ]
    vfunc_add_element_collection(parent: DomNode): [ /* returnType */ boolean, /* element */ DomNode ]
    vfunc_read_child_nodes_stream(istream: Gio.InputStream): void
    vfunc_read_child_nodes_string(str: string): void
    vfunc_read_unparsed(): string
    vfunc_move_next_node(): boolean
    vfunc_current_is_empty_element(): boolean
    vfunc_current_is_element(): boolean
    vfunc_current_is_document(): boolean
    vfunc_current_node_name(): string
    vfunc_create_element(parent: DomNode): DomElement | null
    vfunc_read_element(element: DomElement): void

    // Class property signals of GXml-0.20.GXml.Parser

    connect(sigName: "notify::backup", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backup", ...args: any[]): void
    connect(sigName: "notify::indent", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::node", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::types", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::types", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::types", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Parser {

    // Own properties of GXml-0.20.GXml.Parser

    static name: string
    static $gtype: GObject.GType<Parser>

    // Constructors of GXml-0.20.GXml.Parser

    constructor(config?: Parser_ConstructProps) 
    _init(config?: Parser_ConstructProps): void
}

interface Property_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.Property

    value?: string | null
}

interface Property extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Property

    value: string

    // Owm methods of GXml-0.20.GXml.Property

    get_value(): string | null
    set_value(value: string | null): void
    validate_value(val: string | null): boolean

    // Own virtual methods of GXml-0.20.GXml.Property

    vfunc_get_value(): string | null
    vfunc_set_value(value: string | null): void
    vfunc_validate_value(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.Property

    connect(sigName: "notify::value", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Property {

    // Own properties of GXml-0.20.GXml.Property

    static name: string
    static $gtype: GObject.GType<Property>

    // Constructors of GXml-0.20.GXml.Property

    constructor(config?: Property_ConstructProps) 
    _init(config?: Property_ConstructProps): void
}

interface XPathContext_ConstructProps extends GObject.Object_ConstructProps {
}

interface XPathContext extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.XPathContext

    evaluate(expression: string, resolver: Gee.Map | null): XPathObject

    // Own virtual methods of GXml-0.20.GXml.XPathContext

    vfunc_evaluate(expression: string, resolver: Gee.Map | null): XPathObject

    // Class property signals of GXml-0.20.GXml.XPathContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XPathContext {

    // Own properties of GXml-0.20.GXml.XPathContext

    static name: string
    static $gtype: GObject.GType<XPathContext>

    // Constructors of GXml-0.20.GXml.XPathContext

    constructor(config?: XPathContext_ConstructProps) 
    _init(config?: XPathContext_ConstructProps): void
}

interface XPathObject_ConstructProps extends GObject.Object_ConstructProps {
}

interface XPathObject extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XPathObject

    readonly object_type: XPathObjectType
    readonly boolean_value: boolean
    readonly string_value: string
    readonly number_value: number
    readonly nodeset: DomHTMLCollection

    // Owm methods of GXml-0.20.GXml.XPathObject

    get_object_type(): XPathObjectType
    get_boolean_value(): boolean
    get_string_value(): string
    get_number_value(): number
    get_nodeset(): DomHTMLCollection

    // Own virtual methods of GXml-0.20.GXml.XPathObject

    vfunc_get_object_type(): XPathObjectType
    vfunc_get_boolean_value(): boolean
    vfunc_get_string_value(): string
    vfunc_get_number_value(): number
    vfunc_get_nodeset(): DomHTMLCollection

    // Class property signals of GXml-0.20.GXml.XPathObject

    connect(sigName: "notify::object-type", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-type", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::boolean-value", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::boolean-value", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::boolean-value", ...args: any[]): void
    connect(sigName: "notify::string-value", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string-value", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::string-value", ...args: any[]): void
    connect(sigName: "notify::number-value", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number-value", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number-value", ...args: any[]): void
    connect(sigName: "notify::nodeset", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodeset", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodeset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XPathObject {

    // Own properties of GXml-0.20.GXml.XPathObject

    static name: string
    static $gtype: GObject.GType<XPathObject>

    // Constructors of GXml-0.20.GXml.XPathObject

    constructor(config?: XPathObject_ConstructProps) 
    _init(config?: XPathObject_ConstructProps): void
}

interface ArrayList_ConstructProps extends List_ConstructProps, BaseCollection_ConstructProps {
}

interface ArrayList extends List {

    // Class property signals of GXml-0.20.GXml.ArrayList

    connect(sigName: "notify::nodes-index", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ArrayList extends BaseCollection {

    // Own properties of GXml-0.20.GXml.ArrayList

    static name: string
    static $gtype: GObject.GType<ArrayList>

    // Constructors of GXml-0.20.GXml.ArrayList

    constructor(config?: ArrayList_ConstructProps) 
    constructor() 
    static new(): ArrayList
    _init(config?: ArrayList_ConstructProps): void
}

interface Attr_ConstructProps extends DomAttr_ConstructProps, Node_ConstructProps {
}

interface Attr extends DomAttr {

    // Own properties of GXml-0.20.GXml.Attr

    readonly is_referenced: boolean

    // Own fields of GXml-0.20.GXml.Attr

    _namespace_uri: string
    prop: Property

    // Owm methods of GXml-0.20.GXml.Attr

    get_is_referenced(): boolean

    // Class property signals of GXml-0.20.GXml.Attr

    connect(sigName: "notify::is-referenced", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-referenced", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-referenced", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Attr extends Node {

    // Own properties of GXml-0.20.GXml.Attr

    static name: string
    static $gtype: GObject.GType<Attr>

    // Constructors of GXml-0.20.GXml.Attr

    constructor(config?: Attr_ConstructProps) 
    constructor(element: DomElement, name: string, val: string) 
    static new(element: DomElement, name: string, val: string): Attr

    // Overloads of new

    static new(): Node
    static namespace(element: DomElement, namespace_uri: string, prefix: string | null, name: string, val: string): Attr
    static reference(element: DomElement, name: string): Attr
    _init(config?: Attr_ConstructProps): void
}

interface BaseCollection_ConstructProps extends Gee.Traversable_ConstructProps, Gee.Iterable_ConstructProps, Collection_ConstructProps, GObject.Object_ConstructProps {
}

interface BaseCollection extends Gee.Traversable, Gee.Iterable, Collection {

    // Own fields of GXml-0.20.GXml.BaseCollection

    _nodes_index: GLib.Queue
    _element: Element
    _items_name: string
    _items_type: GObject.GType

    // Owm methods of GXml-0.20.GXml.BaseCollection

    initialize_element(e: Element): void
    validate_append(index: number, element: DomElement): boolean
    clear(): void

    // Own virtual methods of GXml-0.20.GXml.BaseCollection

    vfunc_validate_append(index: number, element: DomElement): boolean
    vfunc_clear(): void

    // Class property signals of GXml-0.20.GXml.BaseCollection

    connect(sigName: "notify::nodes-index", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BaseCollection extends GObject.Object {

    // Own properties of GXml-0.20.GXml.BaseCollection

    static name: string
    static $gtype: GObject.GType<BaseCollection>

    // Constructors of GXml-0.20.GXml.BaseCollection

    constructor(config?: BaseCollection_ConstructProps) 
    _init(config?: BaseCollection_ConstructProps): void
}

interface CssSelector_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.CssSelector

    selector_type?: CssSelectorType | null
    name?: string | null
    value?: string | null
    combiner?: CssCombiner | null
}

interface CssSelector {

    // Own properties of GXml-0.20.GXml.CssSelector

    selector_type: CssSelectorType
    name: string
    value: string
    combiner: CssCombiner

    // Owm methods of GXml-0.20.GXml.CssSelector

    get_selector_type(): CssSelectorType
    set_selector_type(value: CssSelectorType): void
    get_name(): string
    set_name(value: string): void
    get_value(): string
    set_value(value: string): void
    get_combiner(): CssCombiner
    set_combiner(value: CssCombiner): void

    // Class property signals of GXml-0.20.GXml.CssSelector

    connect(sigName: "notify::selector-type", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selector-type", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selector-type", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::combiner", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::combiner", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::combiner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CssSelector extends GObject.Object {

    // Own properties of GXml-0.20.GXml.CssSelector

    static name: string
    static $gtype: GObject.GType<CssSelector>

    // Constructors of GXml-0.20.GXml.CssSelector

    constructor(config?: CssSelector_ConstructProps) 
    constructor(t: CssSelectorType, name: string) 
    static new(t: CssSelectorType, name: string): CssSelector
    static with_value(t: CssSelectorType, name: string, value: string): CssSelector
    _init(config?: CssSelector_ConstructProps): void
}

interface CssElementSelector_ConstructProps extends CssSelector_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.CssElementSelector

    prefix?: string | null
    local_name?: string | null
}

interface CssElementSelector {

    // Own properties of GXml-0.20.GXml.CssElementSelector

    readonly prefixed: boolean
    prefix: string
    local_name: string

    // Owm methods of GXml-0.20.GXml.CssElementSelector

    get_prefixed(): boolean
    get_prefix(): string | null
    set_prefix(value: string | null): void
    get_local_name(): string
    set_local_name(value: string): void

    // Class property signals of GXml-0.20.GXml.CssElementSelector

    connect(sigName: "notify::prefixed", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefixed", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefixed", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::selector-type", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selector-type", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selector-type", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::combiner", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::combiner", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::combiner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CssElementSelector extends CssSelector {

    // Own properties of GXml-0.20.GXml.CssElementSelector

    static name: string
    static $gtype: GObject.GType<CssElementSelector>

    // Constructors of GXml-0.20.GXml.CssElementSelector

    constructor(config?: CssElementSelector_ConstructProps) 
    constructor(prefix: string | null, local_name: string) 
    static new(prefix: string | null, local_name: string): CssElementSelector

    // Overloads of new

    static new(t: CssSelectorType, name: string): CssSelector
    _init(config?: CssElementSelector_ConstructProps): void
}

interface CssAttributeSelector_ConstructProps extends CssSelector_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.CssAttributeSelector

    prefix?: string | null
    local_name?: string | null
}

interface CssAttributeSelector {

    // Own properties of GXml-0.20.GXml.CssAttributeSelector

    prefix: string
    local_name: string

    // Owm methods of GXml-0.20.GXml.CssAttributeSelector

    get_prefix(): string | null
    set_prefix(value: string | null): void
    get_local_name(): string
    set_local_name(value: string): void

    // Class property signals of GXml-0.20.GXml.CssAttributeSelector

    connect(sigName: "notify::prefix", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::selector-type", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selector-type", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selector-type", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::combiner", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::combiner", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::combiner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CssAttributeSelector extends CssSelector {

    // Own properties of GXml-0.20.GXml.CssAttributeSelector

    static name: string
    static $gtype: GObject.GType<CssAttributeSelector>

    // Constructors of GXml-0.20.GXml.CssAttributeSelector

    constructor(config?: CssAttributeSelector_ConstructProps) 
    constructor(prefix: string | null, local_name: string) 
    static new(prefix: string | null, local_name: string): CssAttributeSelector

    // Overloads of new

    static new(t: CssSelectorType, name: string): CssSelector
    _init(config?: CssAttributeSelector_ConstructProps): void
}

interface CssNotSelector_ConstructProps extends CssSelector_ConstructProps {
}

interface CssNotSelector {

    // Own properties of GXml-0.20.GXml.CssNotSelector

    readonly selectors: Gee.List

    // Owm methods of GXml-0.20.GXml.CssNotSelector

    get_selectors(): Gee.List

    // Class property signals of GXml-0.20.GXml.CssNotSelector

    connect(sigName: "notify::selectors", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectors", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectors", ...args: any[]): void
    connect(sigName: "notify::selector-type", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selector-type", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selector-type", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::combiner", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::combiner", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::combiner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CssNotSelector extends CssSelector {

    // Own properties of GXml-0.20.GXml.CssNotSelector

    static name: string
    static $gtype: GObject.GType<CssNotSelector>

    // Constructors of GXml-0.20.GXml.CssNotSelector

    constructor(config?: CssNotSelector_ConstructProps) 
    constructor() 
    static new(): CssNotSelector

    // Overloads of new

    static new(t: CssSelectorType, name: string): CssSelector
    _init(config?: CssNotSelector_ConstructProps): void
}

interface CssSelectorParser_ConstructProps extends GObject.Object_ConstructProps {
}

interface CssSelectorParser {

    // Own properties of GXml-0.20.GXml.CssSelectorParser

    readonly selectors: Gee.List

    // Owm methods of GXml-0.20.GXml.CssSelectorParser

    parse(selectors: string): void
    get_selectors(): Gee.List
    match(element: DomElement): boolean
    query_selector_all(element: DomElement): DomNodeList

    // Class property signals of GXml-0.20.GXml.CssSelectorParser

    connect(sigName: "notify::selectors", callback: (($obj: CssSelectorParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectors", callback: (($obj: CssSelectorParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectors", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CssSelectorParser extends GObject.Object {

    // Own properties of GXml-0.20.GXml.CssSelectorParser

    static name: string
    static $gtype: GObject.GType<CssSelectorParser>

    // Constructors of GXml-0.20.GXml.CssSelectorParser

    constructor(config?: CssSelectorParser_ConstructProps) 
    constructor() 
    static new(): CssSelectorParser
    _init(config?: CssSelectorParser_ConstructProps): void
}

interface Document_ConstructProps extends DomParentNode_ConstructProps, DomNonElementParentNode_ConstructProps, DomDocument_ConstructProps, DomXMLDocument_ConstructProps, Node_ConstructProps {
}

interface Document extends DomParentNode, DomNonElementParentNode, DomDocument, DomXMLDocument {

    // Own fields of GXml-0.20.GXml.Document

    _implementation: DomImplementation
    _url: string
    _origin: string
    _compat_mode: string
    _character_set: string
    _content_type: string
    _constructor: DomEvent
    _parser: Parser

    // Owm methods of GXml-0.20.GXml.Document

    search_root_element_property(): Element

    // Class property signals of GXml-0.20.GXml.Document

    connect(sigName: "notify::children", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::implementation", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-uri", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat-mode", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-set", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Document extends Node {

    // Own properties of GXml-0.20.GXml.Document

    static name: string
    static $gtype: GObject.GType<Document>

    // Constructors of GXml-0.20.GXml.Document

    constructor(config?: Document_ConstructProps) 
    constructor() 
    static new(): Document

    // Overloads of new

    static new(): Node
    static from_path(path: string): Document
    static from_uri(uri: string): Document
    static from_file(file: Gio.File): Document
    static from_stream(stream: Gio.InputStream): Document
    static from_string(str: string): Document
    _init(config?: Document_ConstructProps): void
}

interface Implementation_ConstructProps extends DomImplementation_ConstructProps, GObject.Object_ConstructProps {
}

interface Implementation extends DomImplementation {

    // Class property signals of GXml-0.20.GXml.Implementation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Implementation extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Implementation

    static name: string
    static $gtype: GObject.GType<Implementation>

    // Constructors of GXml-0.20.GXml.Implementation

    constructor(config?: Implementation_ConstructProps) 
    constructor() 
    static new(): Implementation
    _init(config?: Implementation_ConstructProps): void
}

interface DocumentType_ConstructProps extends DomChildNode_ConstructProps, DomDocumentType_ConstructProps, Node_ConstructProps {
}

interface DocumentType extends DomChildNode, DomDocumentType {

    // Own fields of GXml-0.20.GXml.DocumentType

    _name: string
    _public_id: string
    _system_id: string

    // Class property signals of GXml-0.20.GXml.DocumentType

    connect(sigName: "notify::name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::public-id", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::public-id", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::public-id", ...args: any[]): void
    connect(sigName: "notify::system-id", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-id", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::system-id", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentType extends Node {

    // Own properties of GXml-0.20.GXml.DocumentType

    static name: string
    static $gtype: GObject.GType<DocumentType>

    // Constructors of GXml-0.20.GXml.DocumentType

    constructor(config?: DocumentType_ConstructProps) 
    constructor(doc: DomDocument, name: string, public_id: string | null, system_id: string | null) 
    static new(doc: DomDocument, name: string, public_id: string | null, system_id: string | null): DocumentType

    // Overloads of new

    static new(): Node
    static with_name(doc: DomDocument, name: string): DocumentType
    static with_ids(doc: DomDocument, name: string, public_id: string, system_id: string): DocumentType
    _init(config?: DocumentType_ConstructProps): void
}

interface DocumentFragment_ConstructProps extends DomParentNode_ConstructProps, DomNonElementParentNode_ConstructProps, DomDocumentFragment_ConstructProps, Node_ConstructProps {
}

interface DocumentFragment extends DomParentNode, DomNonElementParentNode, DomDocumentFragment {

    // Class property signals of GXml-0.20.GXml.DocumentFragment

    connect(sigName: "notify::children", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentFragment extends Node {

    // Own properties of GXml-0.20.GXml.DocumentFragment

    static name: string
    static $gtype: GObject.GType<DocumentFragment>

    // Constructors of GXml-0.20.GXml.DocumentFragment

    constructor(config?: DocumentFragment_ConstructProps) 
    constructor(doc: DomDocument) 
    static new(doc: DomDocument): DocumentFragment

    // Overloads of new

    static new(): Node
    _init(config?: DocumentFragment_ConstructProps): void
}

interface DomNodeFilter_ConstructProps extends GObject.Object_ConstructProps {
}

interface DomNodeFilter {

    // Class property signals of GXml-0.20.GXml.DomNodeFilter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomNodeFilter extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomNodeFilter

    static name: string
    static $gtype: GObject.GType<DomNodeFilter>

    // Constructors of GXml-0.20.GXml.DomNodeFilter

    constructor(config?: DomNodeFilter_ConstructProps) 
    constructor() 
    static new(): DomNodeFilter
    _init(config?: DomNodeFilter_ConstructProps): void
}

interface DomElementList_ConstructProps extends DomHTMLCollection_ConstructProps, Gee.ArrayList_ConstructProps {
}

interface DomElementList extends DomHTMLCollection {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    to_array(...args: any[]): any
    get_read_only_view(...args: any[]): any
    vfunc_to_array(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.DomElementList

    connect(sigName: "notify::g-type", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomElementList extends Gee.ArrayList {

    // Own properties of GXml-0.20.GXml.DomElementList

    static name: string
    static $gtype: GObject.GType<DomElementList>

    // Constructors of GXml-0.20.GXml.DomElementList

    constructor(config?: DomElementList_ConstructProps) 
    constructor() 
    static new(): DomElementList

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: DomElementList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface DomEventInit_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.DomEventInit

    bubbles?: boolean | null
    cancelable?: boolean | null
}

interface DomEventInit {

    // Own properties of GXml-0.20.GXml.DomEventInit

    bubbles: boolean
    cancelable: boolean

    // Owm methods of GXml-0.20.GXml.DomEventInit

    get_bubbles(): boolean
    set_bubbles(value: boolean): void
    get_cancelable(): boolean
    set_cancelable(value: boolean): void

    // Class property signals of GXml-0.20.GXml.DomEventInit

    connect(sigName: "notify::bubbles", callback: (($obj: DomEventInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bubbles", callback: (($obj: DomEventInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (($obj: DomEventInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: DomEventInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomEventInit extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomEventInit

    static name: string
    static $gtype: GObject.GType<DomEventInit>

    // Constructors of GXml-0.20.GXml.DomEventInit

    constructor(config?: DomEventInit_ConstructProps) 
    constructor() 
    static new(): DomEventInit
    _init(config?: DomEventInit_ConstructProps): void
}

interface DomCustomEventInit_ConstructProps extends DomEventInit_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.DomCustomEventInit

    detail?: any | null
}

interface DomCustomEventInit {

    // Own properties of GXml-0.20.GXml.DomCustomEventInit

    detail: any

    // Owm methods of GXml-0.20.GXml.DomCustomEventInit

    get_detail(): /* result */ any
    set_detail(value: any): void

    // Class property signals of GXml-0.20.GXml.DomCustomEventInit

    connect(sigName: "notify::detail", callback: (($obj: DomCustomEventInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::detail", callback: (($obj: DomCustomEventInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::detail", ...args: any[]): void
    connect(sigName: "notify::bubbles", callback: (($obj: DomCustomEventInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bubbles", callback: (($obj: DomCustomEventInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (($obj: DomCustomEventInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: DomCustomEventInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomCustomEventInit extends DomEventInit {

    // Own properties of GXml-0.20.GXml.DomCustomEventInit

    static name: string
    static $gtype: GObject.GType<DomCustomEventInit>

    // Constructors of GXml-0.20.GXml.DomCustomEventInit

    constructor(config?: DomCustomEventInit_ConstructProps) 
    constructor() 
    static new(): DomCustomEventInit

    // Overloads of new

    static new(): DomEventInit
    _init(config?: DomCustomEventInit_ConstructProps): void
}

interface DomTimeStamp_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.DomTimeStamp

    time?: GLib.DateTime | null
}

interface DomTimeStamp {

    // Own properties of GXml-0.20.GXml.DomTimeStamp

    time: GLib.DateTime

    // Owm methods of GXml-0.20.GXml.DomTimeStamp

    get_time(): GLib.DateTime
    set_time(value: GLib.DateTime): void
    to_string(): string

    // Class property signals of GXml-0.20.GXml.DomTimeStamp

    connect(sigName: "notify::time", callback: (($obj: DomTimeStamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: DomTimeStamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomTimeStamp extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomTimeStamp

    static name: string
    static $gtype: GObject.GType<DomTimeStamp>

    // Constructors of GXml-0.20.GXml.DomTimeStamp

    constructor(config?: DomTimeStamp_ConstructProps) 
    constructor() 
    static new(): DomTimeStamp
    _init(config?: DomTimeStamp_ConstructProps): void
}

interface DomMutationObserverInit_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.DomMutationObserverInit

    child_list?: boolean | null
    attributes?: boolean | null
    character_data?: boolean | null
    subtree?: boolean | null
    attribute_old_value?: boolean | null
    character_data_old_value?: boolean | null
    attribute_filter?: Gee.List | null
}

interface DomMutationObserverInit {

    // Own properties of GXml-0.20.GXml.DomMutationObserverInit

    child_list: boolean
    attributes: boolean
    character_data: boolean
    subtree: boolean
    attribute_old_value: boolean
    character_data_old_value: boolean
    attribute_filter: Gee.List

    // Owm methods of GXml-0.20.GXml.DomMutationObserverInit

    get_child_list(): boolean
    set_child_list(value: boolean): void
    get_attributes(): boolean
    set_attributes(value: boolean): void
    get_character_data(): boolean
    set_character_data(value: boolean): void
    get_subtree(): boolean
    set_subtree(value: boolean): void
    get_attribute_old_value(): boolean
    set_attribute_old_value(value: boolean): void
    get_character_data_old_value(): boolean
    set_character_data_old_value(value: boolean): void
    get_attribute_filter(): Gee.List
    set_attribute_filter(value: Gee.List): void

    // Class property signals of GXml-0.20.GXml.DomMutationObserverInit

    connect(sigName: "notify::child-list", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-list", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::character-data", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-data", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-data", ...args: any[]): void
    connect(sigName: "notify::subtree", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtree", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtree", ...args: any[]): void
    connect(sigName: "notify::attribute-old-value", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-old-value", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-old-value", ...args: any[]): void
    connect(sigName: "notify::character-data-old-value", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-data-old-value", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-data-old-value", ...args: any[]): void
    connect(sigName: "notify::attribute-filter", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-filter", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-filter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomMutationObserverInit extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomMutationObserverInit

    static name: string
    static $gtype: GObject.GType<DomMutationObserverInit>

    // Constructors of GXml-0.20.GXml.DomMutationObserverInit

    constructor(config?: DomMutationObserverInit_ConstructProps) 
    constructor() 
    static new(): DomMutationObserverInit
    _init(config?: DomMutationObserverInit_ConstructProps): void
}

interface DomErrorName_ConstructProps extends GObject.Object_ConstructProps {
}

interface DomErrorName {

    // Owm methods of GXml-0.20.GXml.DomErrorName

    get_name(error_code: number): string
    get_code(error_name: string): number

    // Class property signals of GXml-0.20.GXml.DomErrorName

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomErrorName extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomErrorName

    static name: string
    static $gtype: GObject.GType<DomErrorName>

    // Constructors of GXml-0.20.GXml.DomErrorName

    constructor(config?: DomErrorName_ConstructProps) 
    constructor() 
    static new(): DomErrorName
    _init(config?: DomErrorName_ConstructProps): void
}

interface Element_ConstructProps extends DomChildNode_ConstructProps, DomNonDocumentTypeChildNode_ConstructProps, DomParentNode_ConstructProps, DomElement_ConstructProps, Object_ConstructProps, Node_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.Element

    parse_children?: boolean | null
    unparsed?: string | null
    read_buffer?: Gio.MemoryOutputStream | null
}

interface Element extends DomChildNode, DomNonDocumentTypeChildNode, DomParentNode, DomElement, Object {

    // Own properties of GXml-0.20.GXml.Element

    parse_children: boolean
    unparsed: string
    read_buffer: Gio.MemoryOutputStream

    // Own fields of GXml-0.20.GXml.Element

    _attributes: ElementAttributes
    _namespace_uri: string

    // Owm methods of GXml-0.20.GXml.Element

    lookup_prefix(nspace: string | null): string | null
    lookup_namespace_uri(prefix: string | null): string | null
    initialize(local_name: string): void
    initialize_document(doc: DomDocument, local_name: string): void
    initialize_with_namespace(namespace_uri: string | null, prefix: string | null, local_name: string): void
    initialize_document_with_namespace(doc: DomDocument, namespace_uri: string | null, prefix: string | null, local_name: string): void
    get_parse_children(): boolean
    set_parse_children(value: boolean): void
    get_unparsed(): string
    set_unparsed(value: string): void
    read_unparsed(): void
    get_read_buffer(): Gio.MemoryOutputStream
    set_read_buffer(value: Gio.MemoryOutputStream): void
    parse_buffer(): void
    parse_pending(): number
    parse_buffer_async(_callback_: Gio.AsyncReadyCallback | null): void
    parse_buffer_finish(_res_: Gio.AsyncResult): void

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.Element

    connect(sigName: "notify::parse-children", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Element extends Node {

    // Own properties of GXml-0.20.GXml.Element

    static name: string
    static $gtype: GObject.GType<Element>

    // Constructors of GXml-0.20.GXml.Element

    constructor(config?: Element_ConstructProps) 
    constructor() 
    static new(): Element

    // Overloads of new

    static new(): Node
    _init(config?: Element_ConstructProps): void
}

interface ElementAttributes_ConstructProps extends DomNamedNodeMap_ConstructProps, Gee.HashMap_ConstructProps {
}

interface ElementAttributes extends DomNamedNodeMap {

    // Own fields of GXml-0.20.GXml.ElementAttributes

    _element: Element

    // Owm methods of GXml-0.20.GXml.ElementAttributes

    add_reference(name: string): void

    // Class property signals of GXml-0.20.GXml.ElementAttributes

    connect(sigName: "notify::k-type", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ElementAttributes extends Gee.HashMap {

    // Own properties of GXml-0.20.GXml.ElementAttributes

    static name: string
    static $gtype: GObject.GType<ElementAttributes>

    // Constructors of GXml-0.20.GXml.ElementAttributes

    constructor(config?: ElementAttributes_ConstructProps) 
    constructor(element: Element) 
    static new(element: Element): ElementAttributes

    // Overloads of new

    static new(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: Gee.HashDataFunc | null, key_equal_func: Gee.EqualDataFunc | null, value_equal_func: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: ElementAttributes_ConstructProps): void
}

interface Enumeration {

    // Own fields of GXml-0.20.GXml.Enumeration

    ref_count: number
}

class Enumeration {

    // Own properties of GXml-0.20.GXml.Enumeration

    static name: string

    // Constructors of GXml-0.20.GXml.Enumeration

    constructor() 
    static new(): Enumeration
    static get_nick(enumeration: GObject.GType, val: number): string
    static get_nick_camelcase(enumeration: GObject.GType, val: number): string
    static get_string(enumeration: GObject.GType, val: number, use_nick: boolean, camelcase: boolean): string
    static parse(enumeration: GObject.GType, val: string): GObject.EnumValue | null
    static to_array(enumeration: GObject.GType): GObject.EnumValue[]
    static parse_integer(enumeration: GObject.GType, val: number): GObject.EnumValue | null
    static to_string_array(enumeration: GObject.GType): string[]
}

interface Event_ConstructProps extends DomEvent_ConstructProps, GObject.Object_ConstructProps {
}

interface Event extends DomEvent {

    // Own fields of GXml-0.20.GXml.Event

    _etype: string
    _event_target: DomEventTarget
    _current_target: DomEventTarget
    _bubbles: boolean
    _cancelable: boolean
    _is_trusted: boolean
    _time_stamp: DomTimeStamp
    _default_prevented: boolean
    _event_phase: DomEventPhase
    _flags: DomEventFlags

    // Class property signals of GXml-0.20.GXml.Event

    connect(sigName: "notify::etype", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etype", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etype", ...args: any[]): void
    connect(sigName: "notify::event-target", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-target", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-target", ...args: any[]): void
    connect(sigName: "notify::current-target", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-target", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-target", ...args: any[]): void
    connect(sigName: "notify::bubbles", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bubbles", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::is-trusted", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-trusted", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-trusted", ...args: any[]): void
    connect(sigName: "notify::time-stamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-stamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-stamp", ...args: any[]): void
    connect(sigName: "notify::default-prevented", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-prevented", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-prevented", ...args: any[]): void
    connect(sigName: "notify::event-phase", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-phase", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-phase", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Event extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Event

    static name: string
    static $gtype: GObject.GType<Event>

    // Constructors of GXml-0.20.GXml.Event

    constructor(config?: Event_ConstructProps) 
    constructor() 
    static new(): Event
    _init(config?: Event_ConstructProps): void
}

interface CustomEvent_ConstructProps extends Event_ConstructProps {
}

interface CustomEvent {

    // Own properties of GXml-0.20.GXml.CustomEvent

    readonly detail: any

    // Own fields of GXml-0.20.GXml.CustomEvent

    _detail: any

    // Owm methods of GXml-0.20.GXml.CustomEvent

    get_detail(): /* result */ any
    init_custom_event(type: string, bubbles: boolean, cancelable: boolean, detail: any | null): void

    // Class property signals of GXml-0.20.GXml.CustomEvent

    connect(sigName: "notify::detail", callback: (($obj: CustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::detail", callback: (($obj: CustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::detail", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CustomEvent extends Event {

    // Own properties of GXml-0.20.GXml.CustomEvent

    static name: string
    static $gtype: GObject.GType<CustomEvent>

    // Constructors of GXml-0.20.GXml.CustomEvent

    constructor(config?: CustomEvent_ConstructProps) 
    constructor() 
    static new(): CustomEvent

    // Overloads of new

    static new(): Event
    _init(config?: CustomEvent_ConstructProps): void
}

interface HashMap_ConstructProps extends Map_ConstructProps, BaseCollection_ConstructProps {
}

interface HashMap extends Map {

    // Own fields of GXml-0.20.GXml.HashMap

    _hashtable: Gee.HashMap
    _attribute_key: string

    // Owm methods of GXml-0.20.GXml.HashMap

    initialize_element_with_key(element: Element, items_type: GObject.GType, attribute_key: string): void
    initialize_with_key(items_type: GObject.GType, attribute_key: string): void
    get(key: string): DomElement | null
    get_keys(): string[]

    // Class property signals of GXml-0.20.GXml.HashMap

    connect(sigName: "notify::attribute-key", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-key", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-key", ...args: any[]): void
    connect(sigName: "notify::keys-set", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys-set", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HashMap extends BaseCollection {

    // Own properties of GXml-0.20.GXml.HashMap

    static name: string
    static $gtype: GObject.GType<HashMap>

    // Constructors of GXml-0.20.GXml.HashMap

    constructor(config?: HashMap_ConstructProps) 
    constructor() 
    static new(): HashMap
    _init(config?: HashMap_ConstructProps): void
}

interface HashPairedMap_ConstructProps extends PairedMap_ConstructProps, BaseCollection_ConstructProps {
}

interface HashPairedMap extends PairedMap {

    // Own fields of GXml-0.20.GXml.HashPairedMap

    _hashtable: Gee.HashMap
    _attribute_primary_key: string
    _attribute_secondary_key: string

    // Owm methods of GXml-0.20.GXml.HashPairedMap

    initialize_element_with_keys(element: Element, items_type: GObject.GType, attribute_primary_key: string, attribute_secondary_key: string): void
    initialize_with_keys(items_type: GObject.GType, attribute_primary_key: string, attribute_secondary_key: string): void
    get(primary_key: string, secondary_key: string): DomElement | null
    get_primary_keys(): string[]
    get_secondary_keys(pkey: string): string[]

    // Class property signals of GXml-0.20.GXml.HashPairedMap

    connect(sigName: "notify::attribute-primary-key", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-primary-key", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-primary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-secondary-key", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-secondary-key", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-secondary-key", ...args: any[]): void
    connect(sigName: "notify::primary-keys-set", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-keys-set", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HashPairedMap extends BaseCollection {

    // Own properties of GXml-0.20.GXml.HashPairedMap

    static name: string
    static $gtype: GObject.GType<HashPairedMap>

    // Constructors of GXml-0.20.GXml.HashPairedMap

    constructor(config?: HashPairedMap_ConstructProps) 
    constructor() 
    static new(): HashPairedMap
    _init(config?: HashPairedMap_ConstructProps): void
}

interface HashThreeMap_ConstructProps extends ThreeMap_ConstructProps, BaseCollection_ConstructProps {
}

interface HashThreeMap extends ThreeMap {

    // Own fields of GXml-0.20.GXml.HashThreeMap

    _hashtable: Gee.HashMap
    _attribute_primary_key: string
    _attribute_secondary_key: string
    _attribute_third_key: string

    // Owm methods of GXml-0.20.GXml.HashThreeMap

    initialize_element_with_keys(element: Element, items_type: GObject.GType, attribute_primary_key: string, attribute_secondary_key: string, attribute_third_key: string): void
    initialize_with_keys(items_type: GObject.GType, attribute_primary_key: string, attribute_secondary_key: string, attribute_third_key: string): void
    get(primary_key: string, secondary_key: string, third_key: string): DomElement | null
    get_primary_keys(): string[]
    get_secondary_keys(pkey: string): string[]
    get_third_keys(pkey: string, skey: string): string[]

    // Class property signals of GXml-0.20.GXml.HashThreeMap

    connect(sigName: "notify::attribute-primary-key", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-primary-key", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-primary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-secondary-key", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-secondary-key", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-secondary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-third-key", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-third-key", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-third-key", ...args: any[]): void
    connect(sigName: "notify::primary-keys-set", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-keys-set", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HashThreeMap extends BaseCollection {

    // Own properties of GXml-0.20.GXml.HashThreeMap

    static name: string
    static $gtype: GObject.GType<HashThreeMap>

    // Constructors of GXml-0.20.GXml.HashThreeMap

    constructor(config?: HashThreeMap_ConstructProps) 
    constructor() 
    static new(): HashThreeMap
    _init(config?: HashThreeMap_ConstructProps): void
}

interface HTMLCollection_ConstructProps extends DomHTMLCollection_ConstructProps, Gee.ArrayList_ConstructProps {
}

interface HTMLCollection extends DomHTMLCollection {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    to_array(...args: any[]): any
    get_read_only_view(...args: any[]): any
    vfunc_to_array(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.HTMLCollection

    connect(sigName: "notify::g-type", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTMLCollection extends Gee.ArrayList {

    // Own properties of GXml-0.20.GXml.HTMLCollection

    static name: string
    static $gtype: GObject.GType<HTMLCollection>

    // Constructors of GXml-0.20.GXml.HTMLCollection

    constructor(config?: HTMLCollection_ConstructProps) 
    constructor() 
    static new(): HTMLCollection

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: HTMLCollection_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface HtmlDocument_ConstructProps extends Document_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.HtmlDocument

    html?: DomElement | null
}

interface HtmlDocument {

    // Own properties of GXml-0.20.GXml.HtmlDocument

    html: DomElement

    // Owm methods of GXml-0.20.GXml.HtmlDocument

    get_html(): DomElement
    set_html(value: DomElement): void

    // Class property signals of GXml-0.20.GXml.HtmlDocument

    connect(sigName: "notify::html", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::html", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::html", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HtmlDocument extends Document {

    // Own properties of GXml-0.20.GXml.HtmlDocument

    static name: string
    static $gtype: GObject.GType<HtmlDocument>

    // Constructors of GXml-0.20.GXml.HtmlDocument

    constructor(config?: HtmlDocument_ConstructProps) 
    constructor() 
    static new(): HtmlDocument

    // Overloads of new

    static new(): Document
    static new(): Node
    _init(config?: HtmlDocument_ConstructProps): void
}

interface HtmlElement_ConstructProps extends Element_ConstructProps {
}

interface HtmlElement {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.HtmlElement

    connect(sigName: "notify::parse-children", callback: (($obj: HtmlElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: HtmlElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: HtmlElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: HtmlElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: HtmlElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: HtmlElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HtmlElement extends Element {

    // Own properties of GXml-0.20.GXml.HtmlElement

    static name: string
    static $gtype: GObject.GType<HtmlElement>

    // Constructors of GXml-0.20.GXml.HtmlElement

    constructor(config?: HtmlElement_ConstructProps) 
    constructor() 
    static new(): HtmlElement

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: HtmlElement_ConstructProps): void
}

interface LXPathObject_ConstructProps extends XPathObject_ConstructProps, GObject.Object_ConstructProps {
}

interface LXPathObject extends XPathObject {

    // Class property signals of GXml-0.20.GXml.LXPathObject

    connect(sigName: "notify::object-type", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-type", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::boolean-value", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::boolean-value", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::boolean-value", ...args: any[]): void
    connect(sigName: "notify::string-value", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string-value", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::string-value", ...args: any[]): void
    connect(sigName: "notify::number-value", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number-value", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number-value", ...args: any[]): void
    connect(sigName: "notify::nodeset", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodeset", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodeset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LXPathObject extends GObject.Object {

    // Own properties of GXml-0.20.GXml.LXPathObject

    static name: string
    static $gtype: GObject.GType<LXPathObject>

    // Constructors of GXml-0.20.GXml.LXPathObject

    constructor(config?: LXPathObject_ConstructProps) 
    constructor(document: XDocument, pointer: object | null) 
    static new(document: XDocument, pointer: object | null): LXPathObject
    _init(config?: LXPathObject_ConstructProps): void
}

interface Node_ConstructProps extends DomEventTarget_ConstructProps, DomNode_ConstructProps, GObject.Object_ConstructProps {
}

interface Node extends DomEventTarget, DomNode {

    // Own fields of GXml-0.20.GXml.Node

    _local_name: string
    _prefix: string
    _base_uri: string
    _node_value: string
    _parent: DomNode
    _node_type: DomNodeNodeType
    _child_nodes: NodeList
    _document: DomDocument

    // Class property signals of GXml-0.20.GXml.Node

    connect(sigName: "notify::node-type", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Node extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Node

    static name: string
    static $gtype: GObject.GType<Node>

    // Constructors of GXml-0.20.GXml.Node

    constructor(config?: Node_ConstructProps) 
    constructor() 
    static new(): Node
    _init(config?: Node_ConstructProps): void
}

interface NodeList_ConstructProps extends DomNodeList_ConstructProps, Gee.ArrayList_ConstructProps {
}

interface NodeList extends DomNodeList {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.NodeList

    connect(sigName: "notify::g-type", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NodeList extends Gee.ArrayList {

    // Own properties of GXml-0.20.GXml.NodeList

    static name: string
    static $gtype: GObject.GType<NodeList>

    // Constructors of GXml-0.20.GXml.NodeList

    constructor(config?: NodeList_ConstructProps) 
    constructor() 
    static new(): NodeList

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: NodeList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface NodeIterator_ConstructProps extends DomNodeIterator_ConstructProps, GObject.Object_ConstructProps {
}

interface NodeIterator extends DomNodeIterator {

    // Own fields of GXml-0.20.GXml.NodeIterator

    _root: DomNode
    _reference_node: DomNode
    _pointer_before_reference_node: boolean
    _what_to_show: number

    // Class property signals of GXml-0.20.GXml.NodeIterator

    connect(sigName: "notify::root", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::reference-node", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reference-node", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reference-node", ...args: any[]): void
    connect(sigName: "notify::pointer-before-reference-node", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-before-reference-node", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-before-reference-node", ...args: any[]): void
    connect(sigName: "notify::what-to-show", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::what-to-show", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::what-to-show", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NodeIterator extends GObject.Object {

    // Own properties of GXml-0.20.GXml.NodeIterator

    static name: string
    static $gtype: GObject.GType<NodeIterator>

    // Constructors of GXml-0.20.GXml.NodeIterator

    constructor(config?: NodeIterator_ConstructProps) 
    constructor(n: DomNode, what_to_show: number) 
    static new(n: DomNode, what_to_show: number): NodeIterator
    _init(config?: NodeIterator_ConstructProps): void
}

interface BaseProperty_ConstructProps extends Property_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.BaseProperty

    value?: string | null
}

interface BaseProperty extends Property {

    // Own properties of GXml-0.20.GXml.BaseProperty

    value: string

    // Owm methods of GXml-0.20.GXml.BaseProperty

    get_value(): string | null
    set_value(value: string | null): void
    validate_value(val: string | null): boolean

    // Own virtual methods of GXml-0.20.GXml.BaseProperty

    vfunc_get_value(): string | null
    vfunc_set_value(value: string | null): void
    vfunc_validate_value(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.BaseProperty

    connect(sigName: "notify::value", callback: (($obj: BaseProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: BaseProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BaseProperty extends GObject.Object {

    // Own properties of GXml-0.20.GXml.BaseProperty

    static name: string
    static $gtype: GObject.GType<BaseProperty>

    // Constructors of GXml-0.20.GXml.BaseProperty

    constructor(config?: BaseProperty_ConstructProps) 
    _init(config?: BaseProperty_ConstructProps): void
}

interface String_ConstructProps extends BaseProperty_ConstructProps {
}

interface String {

    // Own fields of GXml-0.20.GXml.String

    _value: string

    // Class property signals of GXml-0.20.GXml.String

    connect(sigName: "notify::value", callback: (($obj: String, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: String, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class String extends BaseProperty {

    // Own properties of GXml-0.20.GXml.String

    static name: string
    static $gtype: GObject.GType<String>

    // Constructors of GXml-0.20.GXml.String

    constructor(config?: String_ConstructProps) 
    static with_string(str: string): String
    constructor() 
    static new(): String
    _init(config?: String_ConstructProps): void
}

interface ArrayString_ConstructProps extends BaseProperty_ConstructProps {
}

interface ArrayString {

    // Own fields of GXml-0.20.GXml.ArrayString

    _value: string
    _values: string[]
    _values_length1: number

    // Owm methods of GXml-0.20.GXml.ArrayString

    get_values(): string[]
    initialize_strings(strs: string[]): void
    is_valid_value(): boolean
    select(index: number): void
    search(str: string): boolean

    // Class property signals of GXml-0.20.GXml.ArrayString

    connect(sigName: "notify::value", callback: (($obj: ArrayString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ArrayString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ArrayString extends BaseProperty {

    // Own properties of GXml-0.20.GXml.ArrayString

    static name: string
    static $gtype: GObject.GType<ArrayString>

    // Constructors of GXml-0.20.GXml.ArrayString

    constructor(config?: ArrayString_ConstructProps) 
    constructor() 
    static new(): ArrayString
    _init(config?: ArrayString_ConstructProps): void
}

interface XsdArrayString_ConstructProps extends ArrayString_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdArrayString

    simple_type?: string | null
    source?: Gio.File | null
}

interface XsdArrayString {

    // Own properties of GXml-0.20.GXml.XsdArrayString

    simple_type: string
    source: Gio.File

    // Own fields of GXml-0.20.GXml.XsdArrayString

    _source: Gio.File
    _simple_type: string

    // Owm methods of GXml-0.20.GXml.XsdArrayString

    get_simple_type(): string
    set_simple_type(value: string): void
    get_source(): Gio.File
    set_source(value: Gio.File): void
    load(): void

    // Class property signals of GXml-0.20.GXml.XsdArrayString

    connect(sigName: "notify::simple-type", callback: (($obj: XsdArrayString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type", callback: (($obj: XsdArrayString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: XsdArrayString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: XsdArrayString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XsdArrayString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XsdArrayString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdArrayString extends ArrayString {

    // Own properties of GXml-0.20.GXml.XsdArrayString

    static name: string
    static $gtype: GObject.GType<XsdArrayString>

    // Constructors of GXml-0.20.GXml.XsdArrayString

    constructor(config?: XsdArrayString_ConstructProps) 
    constructor() 
    static new(): XsdArrayString

    // Overloads of new

    static new(): ArrayString
    _init(config?: XsdArrayString_ConstructProps): void
}

interface Double_ConstructProps extends BaseProperty_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.Double

    decimals?: number | null
}

interface Double {

    // Own properties of GXml-0.20.GXml.Double

    decimals: number

    // Own fields of GXml-0.20.GXml.Double

    _value: number

    // Owm methods of GXml-0.20.GXml.Double

    get_decimals(): number
    set_decimals(value: number): void
    get_double(): number
    set_double(value: number): void

    // Class property signals of GXml-0.20.GXml.Double

    connect(sigName: "notify::decimals", callback: (($obj: Double, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decimals", callback: (($obj: Double, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decimals", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Double, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Double, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Double extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Double

    static name: string
    static $gtype: GObject.GType<Double>

    // Constructors of GXml-0.20.GXml.Double

    constructor(config?: Double_ConstructProps) 
    constructor() 
    static new(): Double
    _init(config?: Double_ConstructProps): void
}

interface Float_ConstructProps extends Double_ConstructProps {
}

interface Float {

    // Owm methods of GXml-0.20.GXml.Float

    get_float(): number
    set_float(value: number): void

    // Class property signals of GXml-0.20.GXml.Float

    connect(sigName: "notify::decimals", callback: (($obj: Float, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decimals", callback: (($obj: Float, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decimals", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Float, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Float, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Float extends Double {

    // Own properties of GXml-0.20.GXml.Float

    static name: string
    static $gtype: GObject.GType<Float>

    // Constructors of GXml-0.20.GXml.Float

    constructor(config?: Float_ConstructProps) 
    constructor() 
    static new(): Float

    // Overloads of new

    static new(): Double
    _init(config?: Float_ConstructProps): void
}

interface Int_ConstructProps extends BaseProperty_ConstructProps {
}

interface Int {

    // Own fields of GXml-0.20.GXml.Int

    _value: number

    // Owm methods of GXml-0.20.GXml.Int

    get_integer(): number
    set_integer(value: number): void

    // Class property signals of GXml-0.20.GXml.Int

    connect(sigName: "notify::value", callback: (($obj: Int, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Int, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Int

    static name: string
    static $gtype: GObject.GType<Int>

    // Constructors of GXml-0.20.GXml.Int

    constructor(config?: Int_ConstructProps) 
    constructor() 
    static new(): Int
    _init(config?: Int_ConstructProps): void
}

interface Boolean_ConstructProps extends BaseProperty_ConstructProps {
}

interface Boolean {

    // Own fields of GXml-0.20.GXml.Boolean

    _value: boolean

    // Owm methods of GXml-0.20.GXml.Boolean

    get_boolean(): boolean
    set_boolean(value: boolean): void

    // Class property signals of GXml-0.20.GXml.Boolean

    connect(sigName: "notify::value", callback: (($obj: Boolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Boolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Boolean extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Boolean

    static name: string
    static $gtype: GObject.GType<Boolean>

    // Constructors of GXml-0.20.GXml.Boolean

    constructor(config?: Boolean_ConstructProps) 
    constructor() 
    static new(): Boolean
    _init(config?: Boolean_ConstructProps): void
}

interface Enum_ConstructProps extends BaseProperty_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.Enum

    use_nick?: boolean | null
    camel_case?: boolean | null
    upper_case?: boolean | null
    enum_type?: GObject.GType | null
}

interface Enum {

    // Own properties of GXml-0.20.GXml.Enum

    use_nick: boolean
    camel_case: boolean
    upper_case: boolean
    enum_type: GObject.GType

    // Own fields of GXml-0.20.GXml.Enum

    _value: number
    _enum_type: GObject.GType
    _val: string

    // Owm methods of GXml-0.20.GXml.Enum

    get_use_nick(): boolean
    set_use_nick(value: boolean): void
    get_camel_case(): boolean
    set_camel_case(value: boolean): void
    get_upper_case(): boolean
    set_upper_case(value: boolean): void
    get_enum_type(): GObject.GType
    set_enum_type(value: GObject.GType): void
    initialize_enum(enum_type: GObject.GType): void
    get_enum(): number
    set_enum(value: number): void
    is_valid(): boolean

    // Class property signals of GXml-0.20.GXml.Enum

    connect(sigName: "notify::use-nick", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-nick", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-nick", ...args: any[]): void
    connect(sigName: "notify::camel-case", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::camel-case", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::camel-case", ...args: any[]): void
    connect(sigName: "notify::upper-case", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upper-case", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upper-case", ...args: any[]): void
    connect(sigName: "notify::enum-type", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enum-type", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enum-type", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Enum extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Enum

    static name: string
    static $gtype: GObject.GType<Enum>

    // Constructors of GXml-0.20.GXml.Enum

    constructor(config?: Enum_ConstructProps) 
    constructor() 
    static new(): Enum
    _init(config?: Enum_ConstructProps): void
}

interface Date_ConstructProps extends BaseProperty_ConstructProps {
}

interface Date {

    // Own fields of GXml-0.20.GXml.Date

    _value: GLib.Date

    // Owm methods of GXml-0.20.GXml.Date

    get_date(): /* result */ GLib.Date
    set_date(date: GLib.Date): void

    // Class property signals of GXml-0.20.GXml.Date

    connect(sigName: "notify::value", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Date extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Date

    static name: string
    static $gtype: GObject.GType<Date>

    // Constructors of GXml-0.20.GXml.Date

    constructor(config?: Date_ConstructProps) 
    constructor() 
    static new(): Date
    _init(config?: Date_ConstructProps): void
}

interface DateTime_ConstructProps extends BaseProperty_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.DateTime

    format?: string | null
}

interface DateTime {

    // Own properties of GXml-0.20.GXml.DateTime

    format: string

    // Own fields of GXml-0.20.GXml.DateTime

    _value: GLib.DateTime

    // Owm methods of GXml-0.20.GXml.DateTime

    get_format(): string
    set_format(value: string): void
    get_datetime(): GLib.DateTime
    set_datetime(dt: GLib.DateTime): void

    // Class property signals of GXml-0.20.GXml.DateTime

    connect(sigName: "notify::format", callback: (($obj: DateTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: DateTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: DateTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DateTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DateTime extends BaseProperty {

    // Own properties of GXml-0.20.GXml.DateTime

    static name: string
    static $gtype: GObject.GType<DateTime>

    // Constructors of GXml-0.20.GXml.DateTime

    constructor(config?: DateTime_ConstructProps) 
    constructor() 
    static new(): DateTime
    _init(config?: DateTime_ConstructProps): void
}

interface Range_ConstructProps extends DomRange_ConstructProps, GObject.Object_ConstructProps {
}

interface Range extends DomRange {

    // Own fields of GXml-0.20.GXml.Range

    _document: DomDocument
    _start_container: DomNode
    _start_offset: number
    _end_container: DomNode
    _end_offset: number
    _collapse: boolean
    _common_ancestor_container: DomNode

    // Class property signals of GXml-0.20.GXml.Range

    connect(sigName: "notify::start-container", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-container", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-container", ...args: any[]): void
    connect(sigName: "notify::start-offset", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-offset", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-offset", ...args: any[]): void
    connect(sigName: "notify::end-container", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-container", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-container", ...args: any[]): void
    connect(sigName: "notify::end-offset", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-offset", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-offset", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::common-ancestor-container", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::common-ancestor-container", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::common-ancestor-container", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Range extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Range

    static name: string
    static $gtype: GObject.GType<Range>

    // Constructors of GXml-0.20.GXml.Range

    constructor(config?: Range_ConstructProps) 
    constructor(doc: DomDocument) 
    static new(doc: DomDocument): Range
    _init(config?: Range_ConstructProps): void
}

interface SettableTokenList_ConstructProps extends DomSettableTokenList_ConstructProps, TokenList_ConstructProps {
}

interface SettableTokenList extends DomSettableTokenList {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    contains(...args: any[]): any
    add(...args: any[]): any
    remove(...args: any[]): any
    get_read_only_view(...args: any[]): any
    vfunc_contains(...args: any[]): any
    vfunc_add(...args: any[]): any
    vfunc_remove(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.SettableTokenList

    connect(sigName: "notify::g-type", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SettableTokenList extends TokenList {

    // Own properties of GXml-0.20.GXml.SettableTokenList

    static name: string
    static $gtype: GObject.GType<SettableTokenList>

    // Constructors of GXml-0.20.GXml.SettableTokenList

    constructor(config?: SettableTokenList_ConstructProps) 
    constructor(e: DomElement, attr: string | null) 
    static new(e: DomElement, attr: string | null): SettableTokenList

    // Overloads of new

    static new(e: DomElement, attr: string | null): TokenList
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: SettableTokenList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface StringRef_ConstructProps extends Property_ConstructProps, GObject.Object_ConstructProps {
}

interface StringRef extends Property {

    // Class property signals of GXml-0.20.GXml.StringRef

    connect(sigName: "notify::value", callback: (($obj: StringRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: StringRef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StringRef extends GObject.Object {

    // Own properties of GXml-0.20.GXml.StringRef

    static name: string
    static $gtype: GObject.GType<StringRef>

    // Constructors of GXml-0.20.GXml.StringRef

    constructor(config?: StringRef_ConstructProps) 
    constructor(obj: Object, name: string) 
    static new(obj: Object, name: string): StringRef
    _init(config?: StringRef_ConstructProps): void
}

interface CharacterData_ConstructProps extends DomNonDocumentTypeChildNode_ConstructProps, DomChildNode_ConstructProps, DomCharacterData_ConstructProps, Node_ConstructProps {
}

interface CharacterData extends DomNonDocumentTypeChildNode, DomChildNode, DomCharacterData {

    // Conflicting methods

    get_data(...args: any[]): any
    set_data(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.CharacterData

    connect(sigName: "notify::previous-element-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CharacterData extends Node {

    // Own properties of GXml-0.20.GXml.CharacterData

    static name: string
    static $gtype: GObject.GType<CharacterData>

    // Constructors of GXml-0.20.GXml.CharacterData

    constructor(config?: CharacterData_ConstructProps) 
    constructor() 
    static new(): CharacterData

    // Overloads of new

    static new(): Node
    _init(config?: CharacterData_ConstructProps): void
}

interface Text_ConstructProps extends DomText_ConstructProps, CharacterData_ConstructProps {
}

interface Text extends DomText {

    // Conflicting methods

    get_data(...args: any[]): any
    set_data(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.Text

    connect(sigName: "notify::data", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Text extends CharacterData {

    // Own properties of GXml-0.20.GXml.Text

    static name: string
    static $gtype: GObject.GType<Text>

    // Constructors of GXml-0.20.GXml.Text

    constructor(config?: Text_ConstructProps) 
    constructor(doc: DomDocument, data: string) 
    static new(doc: DomDocument, data: string): Text

    // Overloads of new

    static new(): CharacterData
    static new(): Node
    _init(config?: Text_ConstructProps): void
}

interface ProcessingInstruction_ConstructProps extends DomProcessingInstruction_ConstructProps, CharacterData_ConstructProps {
}

interface ProcessingInstruction extends DomProcessingInstruction {

    // Conflicting methods

    get_data(...args: any[]): any
    set_data(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.ProcessingInstruction

    connect(sigName: "notify::target", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProcessingInstruction extends CharacterData {

    // Own properties of GXml-0.20.GXml.ProcessingInstruction

    static name: string
    static $gtype: GObject.GType<ProcessingInstruction>

    // Constructors of GXml-0.20.GXml.ProcessingInstruction

    constructor(config?: ProcessingInstruction_ConstructProps) 
    constructor(doc: DomDocument, target: string, data: string) 
    static new(doc: DomDocument, target: string, data: string): ProcessingInstruction

    // Overloads of new

    static new(): CharacterData
    static new(): Node
    _init(config?: ProcessingInstruction_ConstructProps): void
}

interface Comment_ConstructProps extends DomComment_ConstructProps, CharacterData_ConstructProps {
}

interface Comment extends DomComment {

    // Conflicting methods

    get_data(...args: any[]): any
    set_data(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.Comment

    connect(sigName: "notify::data", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Comment extends CharacterData {

    // Own properties of GXml-0.20.GXml.Comment

    static name: string
    static $gtype: GObject.GType<Comment>

    // Constructors of GXml-0.20.GXml.Comment

    constructor(config?: Comment_ConstructProps) 
    constructor(doc: DomDocument, data: string) 
    static new(doc: DomDocument, data: string): Comment

    // Overloads of new

    static new(): CharacterData
    static new(): Node
    _init(config?: Comment_ConstructProps): void
}

interface TokenList_ConstructProps extends DomTokenList_ConstructProps, Gee.ArrayList_ConstructProps {
}

interface TokenList extends DomTokenList {

    // Conflicting properties

    read_only_view: any

    // Own fields of GXml-0.20.GXml.TokenList

    _element: DomElement
    _attr: string

    // Owm methods of GXml-0.20.GXml.TokenList

    update(): void

    // Conflicting methods

    contains(...args: any[]): any
    add(...args: any[]): any
    remove(...args: any[]): any
    get_read_only_view(...args: any[]): any
    vfunc_contains(...args: any[]): any
    vfunc_add(...args: any[]): any
    vfunc_remove(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.TokenList

    connect(sigName: "notify::g-type", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TokenList extends Gee.ArrayList {

    // Own properties of GXml-0.20.GXml.TokenList

    static name: string
    static $gtype: GObject.GType<TokenList>

    // Constructors of GXml-0.20.GXml.TokenList

    constructor(config?: TokenList_ConstructProps) 
    constructor(e: DomElement, attr: string | null) 
    static new(e: DomElement, attr: string | null): TokenList

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: TokenList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface TreeWalker_ConstructProps extends DomTreeWalker_ConstructProps, GObject.Object_ConstructProps {
}

interface TreeWalker extends DomTreeWalker {

    // Own fields of GXml-0.20.GXml.TreeWalker

    _root: DomNode
    _what_to_show: number
    _current_node: DomNode

    // Class property signals of GXml-0.20.GXml.TreeWalker

    connect(sigName: "notify::root", callback: (($obj: TreeWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: TreeWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::what-to-show", callback: (($obj: TreeWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::what-to-show", callback: (($obj: TreeWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::what-to-show", ...args: any[]): void
    connect(sigName: "notify::current-node", callback: (($obj: TreeWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-node", callback: (($obj: TreeWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeWalker extends GObject.Object {

    // Own properties of GXml-0.20.GXml.TreeWalker

    static name: string
    static $gtype: GObject.GType<TreeWalker>

    // Constructors of GXml-0.20.GXml.TreeWalker

    constructor(config?: TreeWalker_ConstructProps) 
    constructor(root: DomNode, w: number) 
    static new(root: DomNode, w: number): TreeWalker
    _init(config?: TreeWalker_ConstructProps): void
}

interface XAttribute_ConstructProps extends DomAttr_ConstructProps, XNode_ConstructProps {
}

interface XAttribute extends DomAttr {

    // Class property signals of GXml-0.20.GXml.XAttribute

    connect(sigName: "notify::attrs", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XAttribute extends XNode {

    // Own properties of GXml-0.20.GXml.XAttribute

    static name: string
    static $gtype: GObject.GType<XAttribute>

    // Constructors of GXml-0.20.GXml.XAttribute

    constructor(config?: XAttribute_ConstructProps) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XAttribute
    _init(config?: XAttribute_ConstructProps): void
}

interface XCharacterData_ConstructProps extends DomCharacterData_ConstructProps, XNonDocumentChildNode_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XCharacterData

    str?: string | null
}

interface XCharacterData extends DomCharacterData {

    // Own properties of GXml-0.20.GXml.XCharacterData

    str: string

    // Owm methods of GXml-0.20.GXml.XCharacterData

    get_str(): string
    set_str(value: string): void

    // Conflicting methods

    get_data(...args: any[]): any
    set_data(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XCharacterData

    connect(sigName: "notify::str", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::str", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XCharacterData extends XNonDocumentChildNode {

    // Own properties of GXml-0.20.GXml.XCharacterData

    static name: string
    static $gtype: GObject.GType<XCharacterData>

    // Constructors of GXml-0.20.GXml.XCharacterData

    constructor(config?: XCharacterData_ConstructProps) 
    constructor() 
    static new(): XCharacterData

    // Overloads of new

    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XCharacterData_ConstructProps): void
}

interface XChildNode_ConstructProps extends DomChildNode_ConstructProps, XNode_ConstructProps {
}

interface XChildNode extends DomChildNode {

    // Class property signals of GXml-0.20.GXml.XChildNode

    connect(sigName: "notify::attrs", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XChildNode extends XNode {

    // Own properties of GXml-0.20.GXml.XChildNode

    static name: string
    static $gtype: GObject.GType<XChildNode>

    // Constructors of GXml-0.20.GXml.XChildNode

    constructor(config?: XChildNode_ConstructProps) 
    constructor() 
    static new(): XChildNode
    _init(config?: XChildNode_ConstructProps): void
}

interface XNonDocumentChildNode_ConstructProps extends DomNonDocumentTypeChildNode_ConstructProps, XChildNode_ConstructProps {
}

interface XNonDocumentChildNode extends DomNonDocumentTypeChildNode {

    // Class property signals of GXml-0.20.GXml.XNonDocumentChildNode

    connect(sigName: "notify::attrs", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XNonDocumentChildNode extends XChildNode {

    // Own properties of GXml-0.20.GXml.XNonDocumentChildNode

    static name: string
    static $gtype: GObject.GType<XNonDocumentChildNode>

    // Constructors of GXml-0.20.GXml.XNonDocumentChildNode

    constructor(config?: XNonDocumentChildNode_ConstructProps) 
    constructor() 
    static new(): XNonDocumentChildNode

    // Overloads of new

    static new(): XChildNode
    _init(config?: XNonDocumentChildNode_ConstructProps): void
}

interface XComment_ConstructProps extends DomComment_ConstructProps, XCharacterData_ConstructProps {
}

interface XComment extends DomComment {

    // Conflicting methods

    get_data(...args: any[]): any
    set_data(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XComment

    connect(sigName: "notify::str", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::str", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XComment extends XCharacterData {

    // Own properties of GXml-0.20.GXml.XComment

    static name: string
    static $gtype: GObject.GType<XComment>

    // Constructors of GXml-0.20.GXml.XComment

    constructor(config?: XComment_ConstructProps) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XComment

    // Overloads of new

    static new(): XCharacterData
    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XComment_ConstructProps): void
}

interface XDocument_ConstructProps extends DomParentNode_ConstructProps, DomNonElementParentNode_ConstructProps, DomDocument_ConstructProps, DomXMLDocument_ConstructProps, XPathContext_ConstructProps, XNode_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XDocument

    indent?: boolean | null
    ns_top?: boolean | null
    prefix_default_ns?: boolean | null
    backup?: boolean | null
    file?: Gio.File | null
}

interface XDocument extends DomParentNode, DomNonElementParentNode, DomDocument, DomXMLDocument, XPathContext {

    // Own properties of GXml-0.20.GXml.XDocument

    indent: boolean
    ns_top: boolean
    prefix_default_ns: boolean
    backup: boolean
    file: Gio.File
    readonly root: DomNode

    // Own fields of GXml-0.20.GXml.XDocument

    doc: object | null
    _buffer: any
    _parser: Parser
    _implementation: DomImplementation
    _url: string
    _origin: string
    _compat_mode: string
    _character_set: string
    _content_type: string
    _constructor: DomEvent

    // Owm methods of GXml-0.20.GXml.XDocument

    get_indent(): boolean
    set_indent(value: boolean): void
    get_ns_top(): boolean
    set_ns_top(value: boolean): void
    get_prefix_default_ns(): boolean
    set_prefix_default_ns(value: boolean): void
    get_backup(): boolean
    set_backup(value: boolean): void
    get_file(): Gio.File
    set_file(value: Gio.File): void
    get_root(): DomNode
    create_pi(target: string, data: string): DomNode
    create_text(text: string): DomNode
    libxml_to_string(): string
    save(cancellable: Gio.Cancellable | null): boolean
    save_as(f: Gio.File, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of GXml-0.20.GXml.XDocument

    vfunc_save(cancellable: Gio.Cancellable | null): boolean
    vfunc_save_as(f: Gio.File, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of GXml-0.20.GXml.XDocument

    connect(sigName: "notify::indent", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::ns-top", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ns-top", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ns-top", ...args: any[]): void
    connect(sigName: "notify::prefix-default-ns", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix-default-ns", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix-default-ns", ...args: any[]): void
    connect(sigName: "notify::backup", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backup", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::implementation", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-uri", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat-mode", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-set", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XDocument extends XNode {

    // Own properties of GXml-0.20.GXml.XDocument

    static name: string
    static $gtype: GObject.GType<XDocument>

    // Constructors of GXml-0.20.GXml.XDocument

    constructor(config?: XDocument_ConstructProps) 
    constructor() 
    static new(): XDocument
    static from_path(path: string, options: number): XDocument
    static from_uri(uri: string, options: number): XDocument
    static from_file(file: Gio.File, options: number, cancel: Gio.Cancellable | null): XDocument
    static from_string(str: string, options: number): XDocument
    static from_stream(istream: Gio.InputStream): XDocument
    static from_doc(doc: libxml2.Doc): XDocument
    _init(config?: XDocument_ConstructProps): void
}

interface XElement_ConstructProps extends DomParentNode_ConstructProps, DomElement_ConstructProps, XPathContext_ConstructProps, XNonDocumentChildNode_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XElement

    content?: string | null
}

interface XElement extends DomParentNode, DomElement, XPathContext {

    // Own properties of GXml-0.20.GXml.XElement

    content: string

    // Owm methods of GXml-0.20.GXml.XElement

    set_attr(aname: string, avalue: string): void
    get_attr(name: string): DomNode | null
    set_ns_attr(ns: string, aname: string, value: string): void
    get_ns_attr(name: string, uri: string): DomNode | null
    normalize(): void
    get_content(): string
    set_content(value: string): void
    remove_attr(name: string): void
    remove_ns_attr(name: string, uri: string): void

    // Class property signals of GXml-0.20.GXml.XElement

    connect(sigName: "notify::content", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XElement extends XNonDocumentChildNode {

    // Own properties of GXml-0.20.GXml.XElement

    static name: string
    static $gtype: GObject.GType<XElement>

    // Constructors of GXml-0.20.GXml.XElement

    constructor(config?: XElement_ConstructProps) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XElement

    // Overloads of new

    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XElement_ConstructProps): void
}

interface XHashMapAttr_ConstructProps extends DomNamedNodeMap_ConstructProps, Gee.AbstractMap_ConstructProps {
}

interface XHashMapAttr extends DomNamedNodeMap {

    // Class property signals of GXml-0.20.GXml.XHashMapAttr

    connect(sigName: "notify::k-type", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XHashMapAttr extends Gee.AbstractMap {

    // Own properties of GXml-0.20.GXml.XHashMapAttr

    static name: string
    static $gtype: GObject.GType<XHashMapAttr>

    // Constructors of GXml-0.20.GXml.XHashMapAttr

    constructor(config?: XHashMapAttr_ConstructProps) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XHashMapAttr
    _init(config?: XHashMapAttr_ConstructProps): void
}

interface XHashMapAttrEntry_ConstructProps extends Gee.MapEntry_ConstructProps {
}

interface XHashMapAttrEntry {

    // Class property signals of GXml-0.20.GXml.XHashMapAttrEntry

    connect(sigName: "notify::k-type", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::key", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XHashMapAttrEntry extends Gee.MapEntry {

    // Own properties of GXml-0.20.GXml.XHashMapAttrEntry

    static name: string
    static $gtype: GObject.GType<XHashMapAttrEntry>

    // Constructors of GXml-0.20.GXml.XHashMapAttrEntry

    constructor(config?: XHashMapAttrEntry_ConstructProps) 
    constructor(doc: XDocument, attr: object | null) 
    static new(doc: XDocument, attr: object | null): XHashMapAttrEntry
    _init(config?: XHashMapAttrEntry_ConstructProps): void
}

interface XHashMapAttrIterator_ConstructProps extends Gee.MapIterator_ConstructProps, GObject.Object_ConstructProps {
}

interface XHashMapAttrIterator extends Gee.MapIterator {

    // Class property signals of GXml-0.20.GXml.XHashMapAttrIterator

    connect(sigName: "notify::valid", callback: (($obj: XHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: XHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::mutable", callback: (($obj: XHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutable", callback: (($obj: XHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mutable", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: XHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: XHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XHashMapAttrIterator extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XHashMapAttrIterator

    static name: string
    static $gtype: GObject.GType<XHashMapAttrIterator>

    // Constructors of GXml-0.20.GXml.XHashMapAttrIterator

    constructor(config?: XHashMapAttrIterator_ConstructProps) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XHashMapAttrIterator
    _init(config?: XHashMapAttrIterator_ConstructProps): void
}

interface XHtmlDocument_ConstructProps extends DomHtmlDocument_ConstructProps, XDocument_ConstructProps {
}

interface XHtmlDocument extends DomHtmlDocument {

    // Conflicting methods

    read_from_string(...args: any[]): any
    vfunc_read_from_string(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XHtmlDocument

    connect(sigName: "notify::indent", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::ns-top", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ns-top", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ns-top", ...args: any[]): void
    connect(sigName: "notify::prefix-default-ns", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix-default-ns", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix-default-ns", ...args: any[]): void
    connect(sigName: "notify::backup", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backup", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::implementation", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-uri", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat-mode", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-set", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XHtmlDocument extends XDocument {

    // Own properties of GXml-0.20.GXml.XHtmlDocument

    static name: string
    static $gtype: GObject.GType<XHtmlDocument>

    // Constructors of GXml-0.20.GXml.XHtmlDocument

    constructor(config?: XHtmlDocument_ConstructProps) 
    static from_path(path: string, options: number): XHtmlDocument

    // Overloads of from_path

    static from_path(path: string, options: number): XDocument
    static from_uri(uri: string, options: number): XHtmlDocument

    // Overloads of from_uri

    static from_uri(uri: string, options: number): XDocument
    static from_file(file: Gio.File, options: number, cancel: Gio.Cancellable | null): XHtmlDocument

    // Overloads of from_file

    static from_file(file: Gio.File, options: number, cancel: Gio.Cancellable | null): XDocument
    static from_string(html: string, options: number): XHtmlDocument

    // Overloads of from_string

    static from_string(str: string, options: number): XDocument
    static from_string_context(html: string, options: number): XHtmlDocument
    static from_string_doc(html: string, options: number): XHtmlDocument
    constructor() 
    static new(): XHtmlDocument

    // Overloads of new

    static new(): XDocument
    _init(config?: XHtmlDocument_ConstructProps): void
    static get_default_options(): number
}

interface XListChildren_ConstructProps extends DomNodeList_ConstructProps, DomHTMLCollection_ConstructProps, Gee.AbstractBidirList_ConstructProps {
}

interface XListChildren extends DomNodeList, DomHTMLCollection {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    item(...args: any[]): any
    get_read_only_view(...args: any[]): any
    to_array(...args: any[]): any
    vfunc_item(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any
    vfunc_to_array(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XListChildren

    connect(sigName: "notify::g-type", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XListChildren extends Gee.AbstractBidirList {

    // Own properties of GXml-0.20.GXml.XListChildren

    static name: string
    static $gtype: GObject.GType<XListChildren>

    // Constructors of GXml-0.20.GXml.XListChildren

    constructor(config?: XListChildren_ConstructProps) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XListChildren
    _init(config?: XListChildren_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface XListChildrenIterator_ConstructProps extends Gee.Traversable_ConstructProps, Gee.Iterator_ConstructProps, Gee.BidirIterator_ConstructProps, Gee.ListIterator_ConstructProps, Gee.BidirListIterator_ConstructProps, GObject.Object_ConstructProps {
}

interface XListChildrenIterator extends Gee.Traversable, Gee.Iterator, Gee.BidirIterator, Gee.ListIterator, Gee.BidirListIterator {

    // Class property signals of GXml-0.20.GXml.XListChildrenIterator

    connect(sigName: "notify::valid", callback: (($obj: XListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: XListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: XListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: XListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XListChildrenIterator extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XListChildrenIterator

    static name: string
    static $gtype: GObject.GType<XListChildrenIterator>

    // Constructors of GXml-0.20.GXml.XListChildrenIterator

    constructor(config?: XListChildrenIterator_ConstructProps) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XListChildrenIterator
    _init(config?: XListChildrenIterator_ConstructProps): void
}

interface XNode_ConstructProps extends DomEventTarget_ConstructProps, DomNode_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XNode

    value?: string | null
}

interface XNode extends DomEventTarget, DomNode {

    // Own properties of GXml-0.20.GXml.XNode

    readonly attrs: Gee.Map
    readonly children_nodes: Gee.BidirList
    readonly document: DomDocument
    readonly parent: DomNode
    readonly type_node: NodeType
    readonly name: string
    value: string

    // Own fields of GXml-0.20.GXml.XNode

    _doc: XDocument
    _node: object | null
    owned_node: boolean
    _base_uri: string

    // Owm methods of GXml-0.20.GXml.XNode

    set_namespace(uri: string, prefix: string | null): boolean
    get_attrs(): Gee.Map
    get_children_nodes(): Gee.BidirList
    get_document(): DomDocument
    get_parent(): DomNode
    get_type_node(): NodeType
    get_name(): string
    get_value(): string
    set_value(value: string): void
    to_string(): string
    get_internal_node(): object | null
    clone_node(deep: boolean): DomNode

    // Own virtual methods of GXml-0.20.GXml.XNode

    vfunc_set_namespace(uri: string, prefix: string | null): boolean
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children_nodes(): Gee.BidirList
    vfunc_get_document(): DomDocument
    vfunc_get_parent(): DomNode
    vfunc_get_type_node(): NodeType
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_to_string(): string

    // Class property signals of GXml-0.20.GXml.XNode

    connect(sigName: "notify::attrs", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XNode extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XNode

    static name: string
    static $gtype: GObject.GType<XNode>

    // Constructors of GXml-0.20.GXml.XNode

    constructor(config?: XNode_ConstructProps) 
    _init(config?: XNode_ConstructProps): void
    static to_gnode(doc: XDocument, node: object | null, take_node: boolean): DomNode
}

interface XParser_ConstructProps extends Parser_ConstructProps, GObject.Object_ConstructProps {
}

interface XParser extends Parser {

    // Owm methods of GXml-0.20.GXml.XParser

    read_node(node: DomNode): void
    read_child_nodes_stream_async(istream: Gio.InputStream, _callback_: Gio.AsyncReadyCallback | null): void
    read_child_nodes_stream_finish(_res_: Gio.AsyncResult): void

    // Class property signals of GXml-0.20.GXml.XParser

    connect(sigName: "notify::backup", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backup", ...args: any[]): void
    connect(sigName: "notify::indent", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::node", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::types", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::types", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::types", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XParser extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XParser

    static name: string
    static $gtype: GObject.GType<XParser>

    // Constructors of GXml-0.20.GXml.XParser

    constructor(config?: XParser_ConstructProps) 
    constructor(node: DomNode) 
    static new(node: DomNode): XParser
    _init(config?: XParser_ConstructProps): void
}

interface XProcessingInstruction_ConstructProps extends DomProcessingInstruction_ConstructProps, XCharacterData_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XProcessingInstruction

    data?: string | null
}

interface XProcessingInstruction extends DomProcessingInstruction {

    // Own properties of GXml-0.20.GXml.XProcessingInstruction

    data: string

    // Owm methods of GXml-0.20.GXml.XProcessingInstruction

    get_data(): string

    // Overloads of get_data

    get_data(): string
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key?: string): object | null
    get_data(...args: any[]): any
    get_data(args_or_key?: any[] | string): string | object | null | any
    set_data(value: string): void

    // Overloads of set_data

    set_data(value: string): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    set_data(...args: any[]): any
    set_data(args_or_key: any[] | string, data?: object | null): void | any

    // Class property signals of GXml-0.20.GXml.XProcessingInstruction

    connect(sigName: "notify::data", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::str", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::str", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::target", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XProcessingInstruction extends XCharacterData {

    // Own properties of GXml-0.20.GXml.XProcessingInstruction

    static name: string
    static $gtype: GObject.GType<XProcessingInstruction>

    // Constructors of GXml-0.20.GXml.XProcessingInstruction

    constructor(config?: XProcessingInstruction_ConstructProps) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XProcessingInstruction

    // Overloads of new

    static new(): XCharacterData
    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XProcessingInstruction_ConstructProps): void
}

interface XsdSchema_ConstructProps extends Element_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdSchema

    element_definitions?: XsdListElements | null
    simple_type_definitions?: XsdListSimpleTypes | null
    complex_type_definitions?: XsdListComplexTypes | null
}

interface XsdSchema {

    // Own properties of GXml-0.20.GXml.XsdSchema

    element_definitions: XsdListElements
    simple_type_definitions: XsdListSimpleTypes
    complex_type_definitions: XsdListComplexTypes

    // Owm methods of GXml-0.20.GXml.XsdSchema

    get_element_definitions(): XsdListElements
    set_element_definitions(value: XsdListElements): void
    get_simple_type_definitions(): XsdListSimpleTypes
    set_simple_type_definitions(value: XsdListSimpleTypes): void
    get_complex_type_definitions(): XsdListComplexTypes
    set_complex_type_definitions(value: XsdListComplexTypes): void

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdSchema

    connect(sigName: "notify::element-definitions", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-definitions", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-definitions", ...args: any[]): void
    connect(sigName: "notify::simple-type-definitions", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type-definitions", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type-definitions", ...args: any[]): void
    connect(sigName: "notify::complex-type-definitions", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::complex-type-definitions", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::complex-type-definitions", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdSchema extends Element {

    // Own properties of GXml-0.20.GXml.XsdSchema

    static name: string
    static $gtype: GObject.GType<XsdSchema>

    // Constructors of GXml-0.20.GXml.XsdSchema

    constructor(config?: XsdSchema_ConstructProps) 
    constructor() 
    static new(): XsdSchema

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdSchema_ConstructProps): void
}

interface XsdSimpleType_ConstructProps extends Element_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdSimpleType

    final?: string | null
    name?: string | null
    annotation?: XsdAnnotation | null
    list?: XsdTypeList | null
    union?: XsdTypeUnion | null
    restriction?: XsdTypeRestriction | null
}

interface XsdSimpleType {

    // Own properties of GXml-0.20.GXml.XsdSimpleType

    final: string
    name: string
    annotation: XsdAnnotation
    list: XsdTypeList
    union: XsdTypeUnion
    restriction: XsdTypeRestriction

    // Owm methods of GXml-0.20.GXml.XsdSimpleType

    get_final(): string
    set_final(value: string): void
    get_name(): string
    set_name(value: string): void
    get_annotation(): XsdAnnotation
    set_annotation(value: XsdAnnotation): void
    get_list(): XsdTypeList
    set_list(value: XsdTypeList): void
    get_union(): XsdTypeUnion
    set_union(value: XsdTypeUnion): void
    get_restriction(): XsdTypeRestriction
    set_restriction(value: XsdTypeRestriction): void

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdSimpleType

    connect(sigName: "notify::final", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::final", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::list", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::list", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::list", ...args: any[]): void
    connect(sigName: "notify::union", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::union", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::union", ...args: any[]): void
    connect(sigName: "notify::restriction", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::restriction", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdSimpleType extends Element {

    // Own properties of GXml-0.20.GXml.XsdSimpleType

    static name: string
    static $gtype: GObject.GType<XsdSimpleType>

    // Constructors of GXml-0.20.GXml.XsdSimpleType

    constructor(config?: XsdSimpleType_ConstructProps) 
    constructor() 
    static new(): XsdSimpleType

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdSimpleType_ConstructProps): void
}

interface XsdTypeDefinition_ConstructProps extends Element_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdTypeDefinition

    annotation?: XsdAnnotation | null
}

interface XsdTypeDefinition {

    // Own properties of GXml-0.20.GXml.XsdTypeDefinition

    annotation: XsdAnnotation

    // Owm methods of GXml-0.20.GXml.XsdTypeDefinition

    get_annotation(): XsdAnnotation
    set_annotation(value: XsdAnnotation): void

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeDefinition

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeDefinition extends Element {

    // Own properties of GXml-0.20.GXml.XsdTypeDefinition

    static name: string
    static $gtype: GObject.GType<XsdTypeDefinition>

    // Constructors of GXml-0.20.GXml.XsdTypeDefinition

    constructor(config?: XsdTypeDefinition_ConstructProps) 
    constructor() 
    static new(): XsdTypeDefinition

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdTypeDefinition_ConstructProps): void
}

interface XsdTypeList_ConstructProps extends XsdTypeDefinition_ConstructProps {
}

interface XsdTypeList {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeList

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeList extends XsdTypeDefinition {

    // Own properties of GXml-0.20.GXml.XsdTypeList

    static name: string
    static $gtype: GObject.GType<XsdTypeList>

    // Constructors of GXml-0.20.GXml.XsdTypeList

    constructor(config?: XsdTypeList_ConstructProps) 
    constructor() 
    static new(): XsdTypeList

    // Overloads of new

    static new(): XsdTypeDefinition
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeList_ConstructProps): void
}

interface XsdTypeUnion_ConstructProps extends XsdTypeDefinition_ConstructProps {
}

interface XsdTypeUnion {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeUnion

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeUnion extends XsdTypeDefinition {

    // Own properties of GXml-0.20.GXml.XsdTypeUnion

    static name: string
    static $gtype: GObject.GType<XsdTypeUnion>

    // Constructors of GXml-0.20.GXml.XsdTypeUnion

    constructor(config?: XsdTypeUnion_ConstructProps) 
    constructor() 
    static new(): XsdTypeUnion

    // Overloads of new

    static new(): XsdTypeDefinition
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeUnion_ConstructProps): void
}

interface XsdTypeRestriction_ConstructProps extends XsdTypeDefinition_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdTypeRestriction

    base?: string | null
    simple_type?: XsdSimpleType | null
    enumerations?: XsdListTypeRestrictionEnumerations | null
    white_spaces?: XsdListTypeRestrictionWhiteSpaces | null
}

interface XsdTypeRestriction {

    // Own properties of GXml-0.20.GXml.XsdTypeRestriction

    base: string
    simple_type: XsdSimpleType
    enumerations: XsdListTypeRestrictionEnumerations
    white_spaces: XsdListTypeRestrictionWhiteSpaces

    // Owm methods of GXml-0.20.GXml.XsdTypeRestriction

    get_base(): string
    set_base(value: string): void
    get_simple_type(): XsdSimpleType
    set_simple_type(value: XsdSimpleType): void
    get_enumerations(): XsdListTypeRestrictionEnumerations
    set_enumerations(value: XsdListTypeRestrictionEnumerations): void
    get_white_spaces(): XsdListTypeRestrictionWhiteSpaces
    set_white_spaces(value: XsdListTypeRestrictionWhiteSpaces): void

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestriction

    connect(sigName: "notify::base", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::simple-type", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::enumerations", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enumerations", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enumerations", ...args: any[]): void
    connect(sigName: "notify::white-spaces", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::white-spaces", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::white-spaces", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestriction extends XsdTypeDefinition {

    // Own properties of GXml-0.20.GXml.XsdTypeRestriction

    static name: string
    static $gtype: GObject.GType<XsdTypeRestriction>

    // Constructors of GXml-0.20.GXml.XsdTypeRestriction

    constructor(config?: XsdTypeRestriction_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestriction

    // Overloads of new

    static new(): XsdTypeDefinition
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestriction_ConstructProps): void
}

interface XsdTypeRestrictionDef_ConstructProps extends Element_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdTypeRestrictionDef

    annotation?: XsdAnnotation | null
}

interface XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionDef

    annotation: XsdAnnotation

    // Owm methods of GXml-0.20.GXml.XsdTypeRestrictionDef

    get_annotation(): XsdAnnotation
    set_annotation(value: XsdAnnotation): void

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionDef

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionDef extends Element {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionDef

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionDef>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionDef

    constructor(config?: XsdTypeRestrictionDef_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionDef

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionDef_ConstructProps): void
}

interface XsdTypeRestrictionMinExclusive_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {
}

interface XsdTypeRestrictionMinExclusive {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMinExclusive

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionMinExclusive extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinExclusive

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionMinExclusive>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMinExclusive

    constructor(config?: XsdTypeRestrictionMinExclusive_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionMinExclusive

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMinExclusive_ConstructProps): void
}

interface XsdTypeRestrictionMinInclusive_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {
}

interface XsdTypeRestrictionMinInclusive {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMinInclusive

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionMinInclusive extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinInclusive

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionMinInclusive>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMinInclusive

    constructor(config?: XsdTypeRestrictionMinInclusive_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionMinInclusive

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMinInclusive_ConstructProps): void
}

interface XsdTypeRestrictionMaxExclusive_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {
}

interface XsdTypeRestrictionMaxExclusive {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusive

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionMaxExclusive extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusive

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionMaxExclusive>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusive

    constructor(config?: XsdTypeRestrictionMaxExclusive_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionMaxExclusive

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMaxExclusive_ConstructProps): void
}

interface XsdTypeRestrictionMaxInclusive_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {
}

interface XsdTypeRestrictionMaxInclusive {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusive

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionMaxInclusive extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusive

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionMaxInclusive>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusive

    constructor(config?: XsdTypeRestrictionMaxInclusive_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionMaxInclusive

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMaxInclusive_ConstructProps): void
}

interface XsdTypeRestrictionTotalDigits_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {
}

interface XsdTypeRestrictionTotalDigits {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionTotalDigits

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionTotalDigits extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionTotalDigits

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionTotalDigits>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionTotalDigits

    constructor(config?: XsdTypeRestrictionTotalDigits_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionTotalDigits

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionTotalDigits_ConstructProps): void
}

interface XsdTypeRestrictionFractionDigits_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {
}

interface XsdTypeRestrictionFractionDigits {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionFractionDigits

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionFractionDigits extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionFractionDigits

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionFractionDigits>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionFractionDigits

    constructor(config?: XsdTypeRestrictionFractionDigits_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionFractionDigits

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionFractionDigits_ConstructProps): void
}

interface XsdTypeRestrictionLength_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {
}

interface XsdTypeRestrictionLength {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionLength

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionLength extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionLength

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionLength>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionLength

    constructor(config?: XsdTypeRestrictionLength_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionLength

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionLength_ConstructProps): void
}

interface XsdTypeRestrictionMinLength_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {
}

interface XsdTypeRestrictionMinLength {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMinLength

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionMinLength extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinLength

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionMinLength>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMinLength

    constructor(config?: XsdTypeRestrictionMinLength_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionMinLength

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMinLength_ConstructProps): void
}

interface XsdTypeRestrictionMaxLength_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {
}

interface XsdTypeRestrictionMaxLength {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMaxLength

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionMaxLength extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxLength

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionMaxLength>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMaxLength

    constructor(config?: XsdTypeRestrictionMaxLength_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionMaxLength

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMaxLength_ConstructProps): void
}

interface XsdTypeRestrictionEnumeration_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    value?: string | null
}

interface XsdTypeRestrictionEnumeration {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    value: string

    // Owm methods of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    get_value(): string
    set_value(value: string): void

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    connect(sigName: "notify::value", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionEnumeration extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionEnumeration>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    constructor(config?: XsdTypeRestrictionEnumeration_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionEnumeration

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionEnumeration_ConstructProps): void
}

interface XsdTypeRestrictionWhiteSpace_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    fixed?: XsdTypeRestrictionWhiteSpaceFixed | null
    value?: string | null
}

interface XsdTypeRestrictionWhiteSpace {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    fixed: XsdTypeRestrictionWhiteSpaceFixed
    value: string

    // Owm methods of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    get_fixed(): XsdTypeRestrictionWhiteSpaceFixed
    set_fixed(value: XsdTypeRestrictionWhiteSpaceFixed): void
    get_value(): string
    set_value(value: string): void

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    connect(sigName: "notify::fixed", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionWhiteSpace extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionWhiteSpace>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    constructor(config?: XsdTypeRestrictionWhiteSpace_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionWhiteSpace

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionWhiteSpace_ConstructProps): void
}

interface XsdTypeRestrictionWhiteSpaceFixed_ConstructProps extends Boolean_ConstructProps {
}

interface XsdTypeRestrictionWhiteSpaceFixed {

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixed

    connect(sigName: "notify::value", callback: (($obj: XsdTypeRestrictionWhiteSpaceFixed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XsdTypeRestrictionWhiteSpaceFixed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionWhiteSpaceFixed extends Boolean {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixed

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionWhiteSpaceFixed>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixed

    constructor(config?: XsdTypeRestrictionWhiteSpaceFixed_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionWhiteSpaceFixed

    // Overloads of new

    static new(): Boolean
    _init(config?: XsdTypeRestrictionWhiteSpaceFixed_ConstructProps): void
}

interface XsdTypeRestrictionPattern_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {
}

interface XsdTypeRestrictionPattern {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionPattern

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionPattern extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionPattern

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionPattern>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionPattern

    constructor(config?: XsdTypeRestrictionPattern_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionPattern

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionPattern_ConstructProps): void
}

interface XsdTypeRestrictionAssertion_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {
}

interface XsdTypeRestrictionAssertion {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionAssertion

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionAssertion extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionAssertion

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionAssertion>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionAssertion

    constructor(config?: XsdTypeRestrictionAssertion_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionAssertion

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionAssertion_ConstructProps): void
}

interface XsdTypeRestrictionExplicitTimezone_ConstructProps extends XsdTypeRestrictionDef_ConstructProps {
}

interface XsdTypeRestrictionExplicitTimezone {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezone

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdTypeRestrictionExplicitTimezone extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezone

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionExplicitTimezone>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezone

    constructor(config?: XsdTypeRestrictionExplicitTimezone_ConstructProps) 
    constructor() 
    static new(): XsdTypeRestrictionExplicitTimezone

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionExplicitTimezone_ConstructProps): void
}

interface XsdComplexType_ConstructProps extends XsdBaseType_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdComplexType

    abstract?: boolean | null
    block?: string | null
    final?: string | null
    mixed?: boolean | null
    name?: string | null
    default_attributes_apply?: boolean | null
    content_type?: XsdBaseContent | null
}

interface XsdComplexType {

    // Own properties of GXml-0.20.GXml.XsdComplexType

    abstract: boolean
    block: string
    final: string
    mixed: boolean
    name: string
    default_attributes_apply: boolean
    content_type: XsdBaseContent
    readonly type_attributes: XsdList
    readonly group_attributes: XsdList

    // Own fields of GXml-0.20.GXml.XsdComplexType

    _type_attributes: XsdList
    _group_attributes: XsdList

    // Owm methods of GXml-0.20.GXml.XsdComplexType

    get_abstract(): boolean
    set_abstract(value: boolean): void
    get_block(): string
    set_block(value: string): void
    get_final(): string
    set_final(value: string): void
    get_mixed(): boolean
    set_mixed(value: boolean): void
    get_name(): string
    set_name(value: string): void
    get_default_attributes_apply(): boolean
    set_default_attributes_apply(value: boolean): void
    get_content_type(): XsdBaseContent
    set_content_type(value: XsdBaseContent): void
    get_type_attributes(): XsdList
    get_group_attributes(): XsdList

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdComplexType

    connect(sigName: "notify::abstract", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abstract", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abstract", ...args: any[]): void
    connect(sigName: "notify::block", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::final", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::final", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::mixed", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mixed", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mixed", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::default-attributes-apply", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-attributes-apply", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-attributes-apply", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::type-attributes", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-attributes", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-attributes", ...args: any[]): void
    connect(sigName: "notify::group-attributes", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-attributes", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-attributes", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdComplexType extends XsdBaseType {

    // Own properties of GXml-0.20.GXml.XsdComplexType

    static name: string
    static $gtype: GObject.GType<XsdComplexType>

    // Constructors of GXml-0.20.GXml.XsdComplexType

    constructor(config?: XsdComplexType_ConstructProps) 
    constructor() 
    static new(): XsdComplexType

    // Overloads of new

    static new(): XsdBaseType
    static new(): Element
    static new(): Node
    _init(config?: XsdComplexType_ConstructProps): void
}

interface XsdExtension_ConstructProps extends Element_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdExtension

    base?: string | null
}

interface XsdExtension {

    // Own properties of GXml-0.20.GXml.XsdExtension

    base: string

    // Owm methods of GXml-0.20.GXml.XsdExtension

    get_base(): string
    set_base(value: string): void

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdExtension

    connect(sigName: "notify::base", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdExtension extends Element {

    // Own properties of GXml-0.20.GXml.XsdExtension

    static name: string
    static $gtype: GObject.GType<XsdExtension>

    // Constructors of GXml-0.20.GXml.XsdExtension

    constructor(config?: XsdExtension_ConstructProps) 
    constructor() 
    static new(): XsdExtension

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdExtension_ConstructProps): void
}

interface XsdElement_ConstructProps extends Element_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdElement

    abstract?: boolean | null
    block?: string | null
    "default"?: string | null
    final?: string | null
    fixed?: string | null
    form?: string | null
    max_occurs?: string | null
    min_occurs?: string | null
    name?: string | null
    nillable?: boolean | null
    ref?: string | null
    substitution_group?: DomTokenList | null
    target_namespace?: string | null
    object_type?: string | null
    anotation?: XsdAnnotation | null
    simple_type?: XsdSimpleType | null
    complex_type?: XsdComplexType | null
}

interface XsdElement {

    // Own properties of GXml-0.20.GXml.XsdElement

    abstract: boolean
    block: string
    "default": string
    final: string
    fixed: string
    form: string
    max_occurs: string
    min_occurs: string
    name: string
    nillable: boolean
    // TODO fix conflict: ref: string
    substitution_group: DomTokenList
    target_namespace: string
    object_type: string
    anotation: XsdAnnotation
    simple_type: XsdSimpleType
    complex_type: XsdComplexType

    // Owm methods of GXml-0.20.GXml.XsdElement

    get_abstract(): boolean
    set_abstract(value: boolean): void
    get_block(): string
    set_block(value: string): void
    get_default(): string
    set_default(value: string): void
    get_final(): string
    set_final(value: string): void
    get_fixed(): string
    set_fixed(value: string): void
    get_form(): string
    set_form(value: string): void
    get_max_occurs(): string
    set_max_occurs(value: string): void
    get_min_occurs(): string
    set_min_occurs(value: string): void
    get_name(): string
    set_name(value: string): void
    get_nillable(): boolean
    set_nillable(value: boolean): void
    get_ref(): string
    set_ref(value: string): void
    get_substitution_group(): DomTokenList
    set_substitution_group(value: DomTokenList): void
    get_target_namespace(): string
    set_target_namespace(value: string): void
    get_object_type(): string
    set_object_type(value: string): void
    get_anotation(): XsdAnnotation
    set_anotation(value: XsdAnnotation): void
    get_simple_type(): XsdSimpleType
    set_simple_type(value: XsdSimpleType): void
    get_complex_type(): XsdComplexType
    set_complex_type(value: XsdComplexType): void

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdElement

    connect(sigName: "notify::abstract", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abstract", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abstract", ...args: any[]): void
    connect(sigName: "notify::block", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::default", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default", ...args: any[]): void
    connect(sigName: "notify::final", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::final", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::fixed", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed", ...args: any[]): void
    connect(sigName: "notify::form", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::form", ...args: any[]): void
    connect(sigName: "notify::max-occurs", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-occurs", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-occurs", ...args: any[]): void
    connect(sigName: "notify::min-occurs", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-occurs", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-occurs", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::nillable", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nillable", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nillable", ...args: any[]): void
    connect(sigName: "notify::ref", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref", ...args: any[]): void
    connect(sigName: "notify::substitution-group", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::substitution-group", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::substitution-group", ...args: any[]): void
    connect(sigName: "notify::target-namespace", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target-namespace", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target-namespace", ...args: any[]): void
    connect(sigName: "notify::object-type", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-type", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::simple-type", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::complex-type", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::complex-type", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::complex-type", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdElement extends Element {

    // Own properties of GXml-0.20.GXml.XsdElement

    static name: string
    static $gtype: GObject.GType<XsdElement>

    // Constructors of GXml-0.20.GXml.XsdElement

    constructor(config?: XsdElement_ConstructProps) 
    constructor() 
    static new(): XsdElement

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdElement_ConstructProps): void
}

interface XsdAnnotation_ConstructProps extends Element_ConstructProps {
}

interface XsdAnnotation {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdAnnotation

    connect(sigName: "notify::parse-children", callback: (($obj: XsdAnnotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdAnnotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdAnnotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdAnnotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdAnnotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdAnnotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdAnnotation extends Element {

    // Own properties of GXml-0.20.GXml.XsdAnnotation

    static name: string
    static $gtype: GObject.GType<XsdAnnotation>

    // Constructors of GXml-0.20.GXml.XsdAnnotation

    constructor(config?: XsdAnnotation_ConstructProps) 
    constructor() 
    static new(): XsdAnnotation

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdAnnotation_ConstructProps): void
}

interface XsdBaseType_ConstructProps extends Element_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdBaseType

    anotation?: XsdAnnotation | null
}

interface XsdBaseType {

    // Own properties of GXml-0.20.GXml.XsdBaseType

    anotation: XsdAnnotation

    // Owm methods of GXml-0.20.GXml.XsdBaseType

    get_anotation(): XsdAnnotation
    set_anotation(value: XsdAnnotation): void

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdBaseType

    connect(sigName: "notify::anotation", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdBaseType extends Element {

    // Own properties of GXml-0.20.GXml.XsdBaseType

    static name: string
    static $gtype: GObject.GType<XsdBaseType>

    // Constructors of GXml-0.20.GXml.XsdBaseType

    constructor(config?: XsdBaseType_ConstructProps) 
    constructor() 
    static new(): XsdBaseType

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdBaseType_ConstructProps): void
}

interface XsdBaseContent_ConstructProps extends Element_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdBaseContent

    anotation?: XsdAnnotation | null
}

interface XsdBaseContent {

    // Own properties of GXml-0.20.GXml.XsdBaseContent

    anotation: XsdAnnotation

    // Owm methods of GXml-0.20.GXml.XsdBaseContent

    get_anotation(): XsdAnnotation
    set_anotation(value: XsdAnnotation): void

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdBaseContent

    connect(sigName: "notify::anotation", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdBaseContent extends Element {

    // Own properties of GXml-0.20.GXml.XsdBaseContent

    static name: string
    static $gtype: GObject.GType<XsdBaseContent>

    // Constructors of GXml-0.20.GXml.XsdBaseContent

    constructor(config?: XsdBaseContent_ConstructProps) 
    constructor() 
    static new(): XsdBaseContent

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdBaseContent_ConstructProps): void
}

interface XsdSimpleContent_ConstructProps extends XsdBaseContent_ConstructProps {
}

interface XsdSimpleContent {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdSimpleContent

    connect(sigName: "notify::anotation", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdSimpleContent extends XsdBaseContent {

    // Own properties of GXml-0.20.GXml.XsdSimpleContent

    static name: string
    static $gtype: GObject.GType<XsdSimpleContent>

    // Constructors of GXml-0.20.GXml.XsdSimpleContent

    constructor(config?: XsdSimpleContent_ConstructProps) 
    constructor() 
    static new(): XsdSimpleContent

    // Overloads of new

    static new(): XsdBaseContent
    static new(): Element
    static new(): Node
    _init(config?: XsdSimpleContent_ConstructProps): void
}

interface XsdComplexContent_ConstructProps extends XsdBaseContent_ConstructProps {
}

interface XsdComplexContent {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdComplexContent

    connect(sigName: "notify::anotation", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdComplexContent extends XsdBaseContent {

    // Own properties of GXml-0.20.GXml.XsdComplexContent

    static name: string
    static $gtype: GObject.GType<XsdComplexContent>

    // Constructors of GXml-0.20.GXml.XsdComplexContent

    constructor(config?: XsdComplexContent_ConstructProps) 
    constructor() 
    static new(): XsdComplexContent

    // Overloads of new

    static new(): XsdBaseContent
    static new(): Element
    static new(): Node
    _init(config?: XsdComplexContent_ConstructProps): void
}

interface XsdOpenContent_ConstructProps extends XsdBaseContent_ConstructProps {
}

interface XsdOpenContent {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdOpenContent

    connect(sigName: "notify::anotation", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdOpenContent extends XsdBaseContent {

    // Own properties of GXml-0.20.GXml.XsdOpenContent

    static name: string
    static $gtype: GObject.GType<XsdOpenContent>

    // Constructors of GXml-0.20.GXml.XsdOpenContent

    constructor(config?: XsdOpenContent_ConstructProps) 
    constructor() 
    static new(): XsdOpenContent

    // Overloads of new

    static new(): XsdBaseContent
    static new(): Element
    static new(): Node
    _init(config?: XsdOpenContent_ConstructProps): void
}

interface XsdBaseAttribute_ConstructProps extends Element_ConstructProps {

    // Own constructor properties of GXml-0.20.GXml.XsdBaseAttribute

    anotation?: XsdAnnotation | null
}

interface XsdBaseAttribute {

    // Own properties of GXml-0.20.GXml.XsdBaseAttribute

    anotation: XsdAnnotation

    // Owm methods of GXml-0.20.GXml.XsdBaseAttribute

    get_anotation(): XsdAnnotation
    set_anotation(value: XsdAnnotation): void

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdBaseAttribute

    connect(sigName: "notify::anotation", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdBaseAttribute extends Element {

    // Own properties of GXml-0.20.GXml.XsdBaseAttribute

    static name: string
    static $gtype: GObject.GType<XsdBaseAttribute>

    // Constructors of GXml-0.20.GXml.XsdBaseAttribute

    constructor(config?: XsdBaseAttribute_ConstructProps) 
    constructor() 
    static new(): XsdBaseAttribute

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdBaseAttribute_ConstructProps): void
}

interface XsdAttribute_ConstructProps extends XsdBaseAttribute_ConstructProps {
}

interface XsdAttribute {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdAttribute

    connect(sigName: "notify::anotation", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdAttribute extends XsdBaseAttribute {

    // Own properties of GXml-0.20.GXml.XsdAttribute

    static name: string
    static $gtype: GObject.GType<XsdAttribute>

    // Constructors of GXml-0.20.GXml.XsdAttribute

    constructor(config?: XsdAttribute_ConstructProps) 
    constructor() 
    static new(): XsdAttribute

    // Overloads of new

    static new(): XsdBaseAttribute
    static new(): Element
    static new(): Node
    _init(config?: XsdAttribute_ConstructProps): void
}

interface XsdAttributeGroup_ConstructProps extends XsdBaseAttribute_ConstructProps {
}

interface XsdAttributeGroup {

    // Conflicting methods

    set_attribute(...args: any[]): any
    remove_attribute(...args: any[]): any
    vfunc_set_attribute(...args: any[]): any
    vfunc_remove_attribute(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XsdAttributeGroup

    connect(sigName: "notify::anotation", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdAttributeGroup extends XsdBaseAttribute {

    // Own properties of GXml-0.20.GXml.XsdAttributeGroup

    static name: string
    static $gtype: GObject.GType<XsdAttributeGroup>

    // Constructors of GXml-0.20.GXml.XsdAttributeGroup

    constructor(config?: XsdAttributeGroup_ConstructProps) 
    constructor() 
    static new(): XsdAttributeGroup

    // Overloads of new

    static new(): XsdBaseAttribute
    static new(): Element
    static new(): Node
    _init(config?: XsdAttributeGroup_ConstructProps): void
}

interface XsdList_ConstructProps extends ArrayList_ConstructProps {
}

interface XsdList {

    // Own properties of GXml-0.20.GXml.XsdList

    readonly length: number

    // Owm methods of GXml-0.20.GXml.XsdList

    get_length(): number
    remove(index: number): void
    index_of(element: DomElement): number

    // Class property signals of GXml-0.20.GXml.XsdList

    connect(sigName: "notify::length", callback: (($obj: XsdList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XsdList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdList extends ArrayList {

    // Own properties of GXml-0.20.GXml.XsdList

    static name: string
    static $gtype: GObject.GType<XsdList>

    // Constructors of GXml-0.20.GXml.XsdList

    constructor(config?: XsdList_ConstructProps) 
    constructor() 
    static new(): XsdList

    // Overloads of new

    static new(): ArrayList
    _init(config?: XsdList_ConstructProps): void
}

interface XsdListElements_ConstructProps extends XsdList_ConstructProps {
}

interface XsdListElements {

    // Class property signals of GXml-0.20.GXml.XsdListElements

    connect(sigName: "notify::length", callback: (($obj: XsdListElements, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XsdListElements, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdListElements extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListElements

    static name: string
    static $gtype: GObject.GType<XsdListElements>

    // Constructors of GXml-0.20.GXml.XsdListElements

    constructor(config?: XsdListElements_ConstructProps) 
    constructor() 
    static new(): XsdListElements

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListElements_ConstructProps): void
}

interface XsdListSimpleTypes_ConstructProps extends XsdList_ConstructProps {
}

interface XsdListSimpleTypes {

    // Class property signals of GXml-0.20.GXml.XsdListSimpleTypes

    connect(sigName: "notify::length", callback: (($obj: XsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdListSimpleTypes extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListSimpleTypes

    static name: string
    static $gtype: GObject.GType<XsdListSimpleTypes>

    // Constructors of GXml-0.20.GXml.XsdListSimpleTypes

    constructor(config?: XsdListSimpleTypes_ConstructProps) 
    constructor() 
    static new(): XsdListSimpleTypes

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListSimpleTypes_ConstructProps): void
}

interface XsdListComplexTypes_ConstructProps extends XsdList_ConstructProps {
}

interface XsdListComplexTypes {

    // Class property signals of GXml-0.20.GXml.XsdListComplexTypes

    connect(sigName: "notify::length", callback: (($obj: XsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdListComplexTypes extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListComplexTypes

    static name: string
    static $gtype: GObject.GType<XsdListComplexTypes>

    // Constructors of GXml-0.20.GXml.XsdListComplexTypes

    constructor(config?: XsdListComplexTypes_ConstructProps) 
    constructor() 
    static new(): XsdListComplexTypes

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListComplexTypes_ConstructProps): void
}

interface XsdListTypeRestrictionEnumerations_ConstructProps extends XsdList_ConstructProps {
}

interface XsdListTypeRestrictionEnumerations {

    // Class property signals of GXml-0.20.GXml.XsdListTypeRestrictionEnumerations

    connect(sigName: "notify::length", callback: (($obj: XsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdListTypeRestrictionEnumerations extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionEnumerations

    static name: string
    static $gtype: GObject.GType<XsdListTypeRestrictionEnumerations>

    // Constructors of GXml-0.20.GXml.XsdListTypeRestrictionEnumerations

    constructor(config?: XsdListTypeRestrictionEnumerations_ConstructProps) 
    constructor() 
    static new(): XsdListTypeRestrictionEnumerations

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListTypeRestrictionEnumerations_ConstructProps): void
}

interface XsdListTypeRestrictionWhiteSpaces_ConstructProps extends XsdList_ConstructProps {
}

interface XsdListTypeRestrictionWhiteSpaces {

    // Class property signals of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpaces

    connect(sigName: "notify::length", callback: (($obj: XsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XsdListTypeRestrictionWhiteSpaces extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpaces

    static name: string
    static $gtype: GObject.GType<XsdListTypeRestrictionWhiteSpaces>

    // Constructors of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpaces

    constructor(config?: XsdListTypeRestrictionWhiteSpaces_ConstructProps) 
    constructor() 
    static new(): XsdListTypeRestrictionWhiteSpaces

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListTypeRestrictionWhiteSpaces_ConstructProps): void
}

interface XText_ConstructProps extends DomText_ConstructProps, XCharacterData_ConstructProps {
}

interface XText extends DomText {

    // Conflicting methods

    get_data(...args: any[]): any
    set_data(...args: any[]): any

    // Class property signals of GXml-0.20.GXml.XText

    connect(sigName: "notify::str", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::str", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XText extends XCharacterData {

    // Own properties of GXml-0.20.GXml.XText

    static name: string
    static $gtype: GObject.GType<XText>

    // Constructors of GXml-0.20.GXml.XText

    constructor(config?: XText_ConstructProps) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XText

    // Overloads of new

    static new(): XCharacterData
    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XText_ConstructProps): void
}

interface ArrayListClass {
}

abstract class ArrayListClass {

    // Own properties of GXml-0.20.GXml.ArrayListClass

    static name: string
}

interface ArrayListPrivate {
}

class ArrayListPrivate {

    // Own properties of GXml-0.20.GXml.ArrayListPrivate

    static name: string
}

interface AttrClass {
}

abstract class AttrClass {

    // Own properties of GXml-0.20.GXml.AttrClass

    static name: string
}

interface AttrPrivate {
}

class AttrPrivate {

    // Own properties of GXml-0.20.GXml.AttrPrivate

    static name: string
}

interface BaseCollectionClass {

    // Own fields of GXml-0.20.GXml.BaseCollectionClass

    validate_append: (self: BaseCollection, index: number, element: DomElement) => boolean
    clear: (self: BaseCollection) => void
}

abstract class BaseCollectionClass {

    // Own properties of GXml-0.20.GXml.BaseCollectionClass

    static name: string
}

interface BaseCollectionPrivate {
}

class BaseCollectionPrivate {

    // Own properties of GXml-0.20.GXml.BaseCollectionPrivate

    static name: string
}

interface CssSelectorClass {
}

abstract class CssSelectorClass {

    // Own properties of GXml-0.20.GXml.CssSelectorClass

    static name: string
}

interface CssSelectorPrivate {
}

class CssSelectorPrivate {

    // Own properties of GXml-0.20.GXml.CssSelectorPrivate

    static name: string
}

interface CssElementSelectorClass {
}

abstract class CssElementSelectorClass {

    // Own properties of GXml-0.20.GXml.CssElementSelectorClass

    static name: string
}

interface CssElementSelectorPrivate {
}

class CssElementSelectorPrivate {

    // Own properties of GXml-0.20.GXml.CssElementSelectorPrivate

    static name: string
}

interface CssAttributeSelectorClass {
}

abstract class CssAttributeSelectorClass {

    // Own properties of GXml-0.20.GXml.CssAttributeSelectorClass

    static name: string
}

interface CssAttributeSelectorPrivate {
}

class CssAttributeSelectorPrivate {

    // Own properties of GXml-0.20.GXml.CssAttributeSelectorPrivate

    static name: string
}

interface CssNotSelectorClass {
}

abstract class CssNotSelectorClass {

    // Own properties of GXml-0.20.GXml.CssNotSelectorClass

    static name: string
}

interface CssNotSelectorPrivate {
}

class CssNotSelectorPrivate {

    // Own properties of GXml-0.20.GXml.CssNotSelectorPrivate

    static name: string
}

interface CssSelectorParserClass {
}

abstract class CssSelectorParserClass {

    // Own properties of GXml-0.20.GXml.CssSelectorParserClass

    static name: string
}

interface CssSelectorParserPrivate {
}

class CssSelectorParserPrivate {

    // Own properties of GXml-0.20.GXml.CssSelectorParserPrivate

    static name: string
}

interface DocumentClass {
}

abstract class DocumentClass {

    // Own properties of GXml-0.20.GXml.DocumentClass

    static name: string
}

interface DocumentPrivate {
}

class DocumentPrivate {

    // Own properties of GXml-0.20.GXml.DocumentPrivate

    static name: string
}

interface ImplementationClass {
}

abstract class ImplementationClass {

    // Own properties of GXml-0.20.GXml.ImplementationClass

    static name: string
}

interface ImplementationPrivate {
}

class ImplementationPrivate {

    // Own properties of GXml-0.20.GXml.ImplementationPrivate

    static name: string
}

interface DocumentTypeClass {
}

abstract class DocumentTypeClass {

    // Own properties of GXml-0.20.GXml.DocumentTypeClass

    static name: string
}

interface DocumentTypePrivate {
}

class DocumentTypePrivate {

    // Own properties of GXml-0.20.GXml.DocumentTypePrivate

    static name: string
}

interface DocumentFragmentClass {
}

abstract class DocumentFragmentClass {

    // Own properties of GXml-0.20.GXml.DocumentFragmentClass

    static name: string
}

interface DocumentFragmentPrivate {
}

class DocumentFragmentPrivate {

    // Own properties of GXml-0.20.GXml.DocumentFragmentPrivate

    static name: string
}

interface DomNodeFilterClass {
}

abstract class DomNodeFilterClass {

    // Own properties of GXml-0.20.GXml.DomNodeFilterClass

    static name: string
}

interface DomNodeFilterPrivate {
}

class DomNodeFilterPrivate {

    // Own properties of GXml-0.20.GXml.DomNodeFilterPrivate

    static name: string
}

interface DomElementListClass {
}

abstract class DomElementListClass {

    // Own properties of GXml-0.20.GXml.DomElementListClass

    static name: string
}

interface DomElementListPrivate {
}

class DomElementListPrivate {

    // Own properties of GXml-0.20.GXml.DomElementListPrivate

    static name: string
}

interface DomEventInitClass {
}

abstract class DomEventInitClass {

    // Own properties of GXml-0.20.GXml.DomEventInitClass

    static name: string
}

interface DomEventInitPrivate {
}

class DomEventInitPrivate {

    // Own properties of GXml-0.20.GXml.DomEventInitPrivate

    static name: string
}

interface DomCustomEventInitClass {
}

abstract class DomCustomEventInitClass {

    // Own properties of GXml-0.20.GXml.DomCustomEventInitClass

    static name: string
}

interface DomCustomEventInitPrivate {
}

class DomCustomEventInitPrivate {

    // Own properties of GXml-0.20.GXml.DomCustomEventInitPrivate

    static name: string
}

interface DomTimeStampClass {
}

abstract class DomTimeStampClass {

    // Own properties of GXml-0.20.GXml.DomTimeStampClass

    static name: string
}

interface DomTimeStampPrivate {
}

class DomTimeStampPrivate {

    // Own properties of GXml-0.20.GXml.DomTimeStampPrivate

    static name: string
}

interface DomMutationObserverInitClass {
}

abstract class DomMutationObserverInitClass {

    // Own properties of GXml-0.20.GXml.DomMutationObserverInitClass

    static name: string
}

interface DomMutationObserverInitPrivate {
}

class DomMutationObserverInitPrivate {

    // Own properties of GXml-0.20.GXml.DomMutationObserverInitPrivate

    static name: string
}

interface DomErrorNameClass {
}

abstract class DomErrorNameClass {

    // Own properties of GXml-0.20.GXml.DomErrorNameClass

    static name: string
}

interface DomErrorNamePrivate {
}

class DomErrorNamePrivate {

    // Own properties of GXml-0.20.GXml.DomErrorNamePrivate

    static name: string
}

interface ElementClass {
}

abstract class ElementClass {

    // Own properties of GXml-0.20.GXml.ElementClass

    static name: string
}

interface ElementPrivate {
}

class ElementPrivate {

    // Own properties of GXml-0.20.GXml.ElementPrivate

    static name: string
}

interface ElementAttributesClass {
}

abstract class ElementAttributesClass {

    // Own properties of GXml-0.20.GXml.ElementAttributesClass

    static name: string
}

interface ElementAttributesPrivate {
}

class ElementAttributesPrivate {

    // Own properties of GXml-0.20.GXml.ElementAttributesPrivate

    static name: string
}

interface EnumerationClass {
}

abstract class EnumerationClass {

    // Own properties of GXml-0.20.GXml.EnumerationClass

    static name: string
}

interface EnumerationPrivate {
}

class EnumerationPrivate {

    // Own properties of GXml-0.20.GXml.EnumerationPrivate

    static name: string
}

interface EventClass {
}

abstract class EventClass {

    // Own properties of GXml-0.20.GXml.EventClass

    static name: string
}

interface EventPrivate {
}

class EventPrivate {

    // Own properties of GXml-0.20.GXml.EventPrivate

    static name: string
}

interface CustomEventClass {
}

abstract class CustomEventClass {

    // Own properties of GXml-0.20.GXml.CustomEventClass

    static name: string
}

interface CustomEventPrivate {
}

class CustomEventPrivate {

    // Own properties of GXml-0.20.GXml.CustomEventPrivate

    static name: string
}

interface HashMapClass {
}

abstract class HashMapClass {

    // Own properties of GXml-0.20.GXml.HashMapClass

    static name: string
}

interface HashMapPrivate {
}

class HashMapPrivate {

    // Own properties of GXml-0.20.GXml.HashMapPrivate

    static name: string
}

interface HashPairedMapClass {
}

abstract class HashPairedMapClass {

    // Own properties of GXml-0.20.GXml.HashPairedMapClass

    static name: string
}

interface HashPairedMapPrivate {
}

class HashPairedMapPrivate {

    // Own properties of GXml-0.20.GXml.HashPairedMapPrivate

    static name: string
}

interface HashThreeMapClass {
}

abstract class HashThreeMapClass {

    // Own properties of GXml-0.20.GXml.HashThreeMapClass

    static name: string
}

interface HashThreeMapPrivate {
}

class HashThreeMapPrivate {

    // Own properties of GXml-0.20.GXml.HashThreeMapPrivate

    static name: string
}

interface HTMLCollectionClass {
}

abstract class HTMLCollectionClass {

    // Own properties of GXml-0.20.GXml.HTMLCollectionClass

    static name: string
}

interface HTMLCollectionPrivate {
}

class HTMLCollectionPrivate {

    // Own properties of GXml-0.20.GXml.HTMLCollectionPrivate

    static name: string
}

interface HtmlDocumentClass {
}

abstract class HtmlDocumentClass {

    // Own properties of GXml-0.20.GXml.HtmlDocumentClass

    static name: string
}

interface HtmlDocumentPrivate {
}

class HtmlDocumentPrivate {

    // Own properties of GXml-0.20.GXml.HtmlDocumentPrivate

    static name: string
}

interface HtmlElementClass {
}

abstract class HtmlElementClass {

    // Own properties of GXml-0.20.GXml.HtmlElementClass

    static name: string
}

interface HtmlElementPrivate {
}

class HtmlElementPrivate {

    // Own properties of GXml-0.20.GXml.HtmlElementPrivate

    static name: string
}

interface LXPathObjectClass {
}

abstract class LXPathObjectClass {

    // Own properties of GXml-0.20.GXml.LXPathObjectClass

    static name: string
}

interface LXPathObjectPrivate {
}

class LXPathObjectPrivate {

    // Own properties of GXml-0.20.GXml.LXPathObjectPrivate

    static name: string
}

interface NodeClass {
}

abstract class NodeClass {

    // Own properties of GXml-0.20.GXml.NodeClass

    static name: string
}

interface NodePrivate {
}

class NodePrivate {

    // Own properties of GXml-0.20.GXml.NodePrivate

    static name: string
}

interface NodeListClass {
}

abstract class NodeListClass {

    // Own properties of GXml-0.20.GXml.NodeListClass

    static name: string
}

interface NodeListPrivate {
}

class NodeListPrivate {

    // Own properties of GXml-0.20.GXml.NodeListPrivate

    static name: string
}

interface NodeIteratorClass {
}

abstract class NodeIteratorClass {

    // Own properties of GXml-0.20.GXml.NodeIteratorClass

    static name: string
}

interface NodeIteratorPrivate {
}

class NodeIteratorPrivate {

    // Own properties of GXml-0.20.GXml.NodeIteratorPrivate

    static name: string
}

interface BasePropertyClass {

    // Own fields of GXml-0.20.GXml.BasePropertyClass

    validate_value: (self: BaseProperty, val: string | null) => boolean
}

abstract class BasePropertyClass {

    // Own properties of GXml-0.20.GXml.BasePropertyClass

    static name: string
}

interface BasePropertyPrivate {
}

class BasePropertyPrivate {

    // Own properties of GXml-0.20.GXml.BasePropertyPrivate

    static name: string
}

interface StringClass {
}

abstract class StringClass {

    // Own properties of GXml-0.20.GXml.StringClass

    static name: string
}

interface StringPrivate {
}

class StringPrivate {

    // Own properties of GXml-0.20.GXml.StringPrivate

    static name: string
}

interface ArrayStringClass {
}

abstract class ArrayStringClass {

    // Own properties of GXml-0.20.GXml.ArrayStringClass

    static name: string
}

interface ArrayStringPrivate {
}

class ArrayStringPrivate {

    // Own properties of GXml-0.20.GXml.ArrayStringPrivate

    static name: string
}

interface XsdArrayStringClass {
}

abstract class XsdArrayStringClass {

    // Own properties of GXml-0.20.GXml.XsdArrayStringClass

    static name: string
}

interface XsdArrayStringPrivate {
}

class XsdArrayStringPrivate {

    // Own properties of GXml-0.20.GXml.XsdArrayStringPrivate

    static name: string
}

interface DoubleClass {
}

abstract class DoubleClass {

    // Own properties of GXml-0.20.GXml.DoubleClass

    static name: string
}

interface DoublePrivate {
}

class DoublePrivate {

    // Own properties of GXml-0.20.GXml.DoublePrivate

    static name: string
}

interface FloatClass {
}

abstract class FloatClass {

    // Own properties of GXml-0.20.GXml.FloatClass

    static name: string
}

interface FloatPrivate {
}

class FloatPrivate {

    // Own properties of GXml-0.20.GXml.FloatPrivate

    static name: string
}

interface IntClass {
}

abstract class IntClass {

    // Own properties of GXml-0.20.GXml.IntClass

    static name: string
}

interface IntPrivate {
}

class IntPrivate {

    // Own properties of GXml-0.20.GXml.IntPrivate

    static name: string
}

interface BooleanClass {
}

abstract class BooleanClass {

    // Own properties of GXml-0.20.GXml.BooleanClass

    static name: string
}

interface BooleanPrivate {
}

class BooleanPrivate {

    // Own properties of GXml-0.20.GXml.BooleanPrivate

    static name: string
}

interface EnumClass {
}

abstract class EnumClass {

    // Own properties of GXml-0.20.GXml.EnumClass

    static name: string
}

interface EnumPrivate {
}

class EnumPrivate {

    // Own properties of GXml-0.20.GXml.EnumPrivate

    static name: string
}

interface DateClass {
}

abstract class DateClass {

    // Own properties of GXml-0.20.GXml.DateClass

    static name: string
}

interface DatePrivate {
}

class DatePrivate {

    // Own properties of GXml-0.20.GXml.DatePrivate

    static name: string
}

interface DateTimeClass {
}

abstract class DateTimeClass {

    // Own properties of GXml-0.20.GXml.DateTimeClass

    static name: string
}

interface DateTimePrivate {
}

class DateTimePrivate {

    // Own properties of GXml-0.20.GXml.DateTimePrivate

    static name: string
}

interface RangeClass {
}

abstract class RangeClass {

    // Own properties of GXml-0.20.GXml.RangeClass

    static name: string
}

interface RangePrivate {
}

class RangePrivate {

    // Own properties of GXml-0.20.GXml.RangePrivate

    static name: string
}

interface SettableTokenListClass {
}

abstract class SettableTokenListClass {

    // Own properties of GXml-0.20.GXml.SettableTokenListClass

    static name: string
}

interface SettableTokenListPrivate {
}

class SettableTokenListPrivate {

    // Own properties of GXml-0.20.GXml.SettableTokenListPrivate

    static name: string
}

interface StringRefClass {
}

abstract class StringRefClass {

    // Own properties of GXml-0.20.GXml.StringRefClass

    static name: string
}

interface StringRefPrivate {
}

class StringRefPrivate {

    // Own properties of GXml-0.20.GXml.StringRefPrivate

    static name: string
}

interface CharacterDataClass {
}

abstract class CharacterDataClass {

    // Own properties of GXml-0.20.GXml.CharacterDataClass

    static name: string
}

interface CharacterDataPrivate {
}

class CharacterDataPrivate {

    // Own properties of GXml-0.20.GXml.CharacterDataPrivate

    static name: string
}

interface TextClass {
}

abstract class TextClass {

    // Own properties of GXml-0.20.GXml.TextClass

    static name: string
}

interface TextPrivate {
}

class TextPrivate {

    // Own properties of GXml-0.20.GXml.TextPrivate

    static name: string
}

interface ProcessingInstructionClass {
}

abstract class ProcessingInstructionClass {

    // Own properties of GXml-0.20.GXml.ProcessingInstructionClass

    static name: string
}

interface ProcessingInstructionPrivate {
}

class ProcessingInstructionPrivate {

    // Own properties of GXml-0.20.GXml.ProcessingInstructionPrivate

    static name: string
}

interface CommentClass {
}

abstract class CommentClass {

    // Own properties of GXml-0.20.GXml.CommentClass

    static name: string
}

interface CommentPrivate {
}

class CommentPrivate {

    // Own properties of GXml-0.20.GXml.CommentPrivate

    static name: string
}

interface TokenListClass {
}

abstract class TokenListClass {

    // Own properties of GXml-0.20.GXml.TokenListClass

    static name: string
}

interface TokenListPrivate {
}

class TokenListPrivate {

    // Own properties of GXml-0.20.GXml.TokenListPrivate

    static name: string
}

interface TreeWalkerClass {
}

abstract class TreeWalkerClass {

    // Own properties of GXml-0.20.GXml.TreeWalkerClass

    static name: string
}

interface TreeWalkerPrivate {
}

class TreeWalkerPrivate {

    // Own properties of GXml-0.20.GXml.TreeWalkerPrivate

    static name: string
}

interface XAttributeClass {
}

abstract class XAttributeClass {

    // Own properties of GXml-0.20.GXml.XAttributeClass

    static name: string
}

interface XAttributePrivate {
}

class XAttributePrivate {

    // Own properties of GXml-0.20.GXml.XAttributePrivate

    static name: string
}

interface XCharacterDataClass {
}

abstract class XCharacterDataClass {

    // Own properties of GXml-0.20.GXml.XCharacterDataClass

    static name: string
}

interface XCharacterDataPrivate {
}

class XCharacterDataPrivate {

    // Own properties of GXml-0.20.GXml.XCharacterDataPrivate

    static name: string
}

interface XChildNodeClass {
}

abstract class XChildNodeClass {

    // Own properties of GXml-0.20.GXml.XChildNodeClass

    static name: string
}

interface XChildNodePrivate {
}

class XChildNodePrivate {

    // Own properties of GXml-0.20.GXml.XChildNodePrivate

    static name: string
}

interface XNonDocumentChildNodeClass {
}

abstract class XNonDocumentChildNodeClass {

    // Own properties of GXml-0.20.GXml.XNonDocumentChildNodeClass

    static name: string
}

interface XNonDocumentChildNodePrivate {
}

class XNonDocumentChildNodePrivate {

    // Own properties of GXml-0.20.GXml.XNonDocumentChildNodePrivate

    static name: string
}

interface XCommentClass {
}

abstract class XCommentClass {

    // Own properties of GXml-0.20.GXml.XCommentClass

    static name: string
}

interface XCommentPrivate {
}

class XCommentPrivate {

    // Own properties of GXml-0.20.GXml.XCommentPrivate

    static name: string
}

interface XDocumentClass {

    // Own fields of GXml-0.20.GXml.XDocumentClass

    save: (self: XDocument, cancellable: Gio.Cancellable | null) => boolean
    save_as: (self: XDocument, f: Gio.File, cancellable: Gio.Cancellable | null) => boolean
}

abstract class XDocumentClass {

    // Own properties of GXml-0.20.GXml.XDocumentClass

    static name: string
}

interface XDocumentPrivate {
}

class XDocumentPrivate {

    // Own properties of GXml-0.20.GXml.XDocumentPrivate

    static name: string
}

interface XElementClass {
}

abstract class XElementClass {

    // Own properties of GXml-0.20.GXml.XElementClass

    static name: string
}

interface XElementPrivate {
}

class XElementPrivate {

    // Own properties of GXml-0.20.GXml.XElementPrivate

    static name: string
}

interface XHashMapAttrClass {
}

abstract class XHashMapAttrClass {

    // Own properties of GXml-0.20.GXml.XHashMapAttrClass

    static name: string
}

interface XHashMapAttrPrivate {
}

class XHashMapAttrPrivate {

    // Own properties of GXml-0.20.GXml.XHashMapAttrPrivate

    static name: string
}

interface XHashMapAttrEntryClass {
}

abstract class XHashMapAttrEntryClass {

    // Own properties of GXml-0.20.GXml.XHashMapAttrEntryClass

    static name: string
}

interface XHashMapAttrEntryPrivate {
}

class XHashMapAttrEntryPrivate {

    // Own properties of GXml-0.20.GXml.XHashMapAttrEntryPrivate

    static name: string
}

interface XHashMapAttrIteratorClass {
}

abstract class XHashMapAttrIteratorClass {

    // Own properties of GXml-0.20.GXml.XHashMapAttrIteratorClass

    static name: string
}

interface XHashMapAttrIteratorPrivate {
}

class XHashMapAttrIteratorPrivate {

    // Own properties of GXml-0.20.GXml.XHashMapAttrIteratorPrivate

    static name: string
}

interface XHtmlDocumentClass {
}

abstract class XHtmlDocumentClass {

    // Own properties of GXml-0.20.GXml.XHtmlDocumentClass

    static name: string
}

interface XHtmlDocumentPrivate {
}

class XHtmlDocumentPrivate {

    // Own properties of GXml-0.20.GXml.XHtmlDocumentPrivate

    static name: string
}

interface XListChildrenClass {
}

abstract class XListChildrenClass {

    // Own properties of GXml-0.20.GXml.XListChildrenClass

    static name: string
}

interface XListChildrenPrivate {
}

class XListChildrenPrivate {

    // Own properties of GXml-0.20.GXml.XListChildrenPrivate

    static name: string
}

interface XListChildrenIteratorClass {
}

abstract class XListChildrenIteratorClass {

    // Own properties of GXml-0.20.GXml.XListChildrenIteratorClass

    static name: string
}

interface XListChildrenIteratorPrivate {
}

class XListChildrenIteratorPrivate {

    // Own properties of GXml-0.20.GXml.XListChildrenIteratorPrivate

    static name: string
}

interface XNodeClass {

    // Own fields of GXml-0.20.GXml.XNodeClass

    set_namespace: (self: XNode, uri: string, prefix: string | null) => boolean
    to_string: (self: XNode) => string
}

abstract class XNodeClass {

    // Own properties of GXml-0.20.GXml.XNodeClass

    static name: string
}

interface XNodePrivate {
}

class XNodePrivate {

    // Own properties of GXml-0.20.GXml.XNodePrivate

    static name: string
}

interface XParserClass {
}

abstract class XParserClass {

    // Own properties of GXml-0.20.GXml.XParserClass

    static name: string
}

interface XParserPrivate {
}

class XParserPrivate {

    // Own properties of GXml-0.20.GXml.XParserPrivate

    static name: string
}

interface XProcessingInstructionClass {
}

abstract class XProcessingInstructionClass {

    // Own properties of GXml-0.20.GXml.XProcessingInstructionClass

    static name: string
}

interface XProcessingInstructionPrivate {
}

class XProcessingInstructionPrivate {

    // Own properties of GXml-0.20.GXml.XProcessingInstructionPrivate

    static name: string
}

interface XsdSchemaClass {
}

abstract class XsdSchemaClass {

    // Own properties of GXml-0.20.GXml.XsdSchemaClass

    static name: string
}

interface XsdSchemaPrivate {
}

class XsdSchemaPrivate {

    // Own properties of GXml-0.20.GXml.XsdSchemaPrivate

    static name: string
}

interface XsdSimpleTypeClass {
}

abstract class XsdSimpleTypeClass {

    // Own properties of GXml-0.20.GXml.XsdSimpleTypeClass

    static name: string
}

interface XsdSimpleTypePrivate {
}

class XsdSimpleTypePrivate {

    // Own properties of GXml-0.20.GXml.XsdSimpleTypePrivate

    static name: string
}

interface XsdTypeDefinitionClass {
}

abstract class XsdTypeDefinitionClass {

    // Own properties of GXml-0.20.GXml.XsdTypeDefinitionClass

    static name: string
}

interface XsdTypeDefinitionPrivate {
}

class XsdTypeDefinitionPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeDefinitionPrivate

    static name: string
}

interface XsdTypeListClass {
}

abstract class XsdTypeListClass {

    // Own properties of GXml-0.20.GXml.XsdTypeListClass

    static name: string
}

interface XsdTypeListPrivate {
}

class XsdTypeListPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeListPrivate

    static name: string
}

interface XsdTypeUnionClass {
}

abstract class XsdTypeUnionClass {

    // Own properties of GXml-0.20.GXml.XsdTypeUnionClass

    static name: string
}

interface XsdTypeUnionPrivate {
}

class XsdTypeUnionPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeUnionPrivate

    static name: string
}

interface XsdTypeRestrictionClass {
}

abstract class XsdTypeRestrictionClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionClass

    static name: string
}

interface XsdTypeRestrictionPrivate {
}

class XsdTypeRestrictionPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionPrivate

    static name: string
}

interface XsdTypeRestrictionDefClass {
}

abstract class XsdTypeRestrictionDefClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionDefClass

    static name: string
}

interface XsdTypeRestrictionDefPrivate {
}

class XsdTypeRestrictionDefPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionDefPrivate

    static name: string
}

interface XsdTypeRestrictionMinExclusiveClass {
}

abstract class XsdTypeRestrictionMinExclusiveClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinExclusiveClass

    static name: string
}

interface XsdTypeRestrictionMinExclusivePrivate {
}

class XsdTypeRestrictionMinExclusivePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinExclusivePrivate

    static name: string
}

interface XsdTypeRestrictionMinInclusiveClass {
}

abstract class XsdTypeRestrictionMinInclusiveClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinInclusiveClass

    static name: string
}

interface XsdTypeRestrictionMinInclusivePrivate {
}

class XsdTypeRestrictionMinInclusivePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinInclusivePrivate

    static name: string
}

interface XsdTypeRestrictionMaxExclusiveClass {
}

abstract class XsdTypeRestrictionMaxExclusiveClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusiveClass

    static name: string
}

interface XsdTypeRestrictionMaxExclusivePrivate {
}

class XsdTypeRestrictionMaxExclusivePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusivePrivate

    static name: string
}

interface XsdTypeRestrictionMaxInclusiveClass {
}

abstract class XsdTypeRestrictionMaxInclusiveClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusiveClass

    static name: string
}

interface XsdTypeRestrictionMaxInclusivePrivate {
}

class XsdTypeRestrictionMaxInclusivePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusivePrivate

    static name: string
}

interface XsdTypeRestrictionTotalDigitsClass {
}

abstract class XsdTypeRestrictionTotalDigitsClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionTotalDigitsClass

    static name: string
}

interface XsdTypeRestrictionTotalDigitsPrivate {
}

class XsdTypeRestrictionTotalDigitsPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionTotalDigitsPrivate

    static name: string
}

interface XsdTypeRestrictionFractionDigitsClass {
}

abstract class XsdTypeRestrictionFractionDigitsClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionFractionDigitsClass

    static name: string
}

interface XsdTypeRestrictionFractionDigitsPrivate {
}

class XsdTypeRestrictionFractionDigitsPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionFractionDigitsPrivate

    static name: string
}

interface XsdTypeRestrictionLengthClass {
}

abstract class XsdTypeRestrictionLengthClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionLengthClass

    static name: string
}

interface XsdTypeRestrictionLengthPrivate {
}

class XsdTypeRestrictionLengthPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionLengthPrivate

    static name: string
}

interface XsdTypeRestrictionMinLengthClass {
}

abstract class XsdTypeRestrictionMinLengthClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinLengthClass

    static name: string
}

interface XsdTypeRestrictionMinLengthPrivate {
}

class XsdTypeRestrictionMinLengthPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinLengthPrivate

    static name: string
}

interface XsdTypeRestrictionMaxLengthClass {
}

abstract class XsdTypeRestrictionMaxLengthClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxLengthClass

    static name: string
}

interface XsdTypeRestrictionMaxLengthPrivate {
}

class XsdTypeRestrictionMaxLengthPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxLengthPrivate

    static name: string
}

interface XsdTypeRestrictionEnumerationClass {
}

abstract class XsdTypeRestrictionEnumerationClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionEnumerationClass

    static name: string
}

interface XsdTypeRestrictionEnumerationPrivate {
}

class XsdTypeRestrictionEnumerationPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionEnumerationPrivate

    static name: string
}

interface XsdTypeRestrictionWhiteSpaceClass {
}

abstract class XsdTypeRestrictionWhiteSpaceClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceClass

    static name: string
}

interface XsdTypeRestrictionWhiteSpacePrivate {
}

class XsdTypeRestrictionWhiteSpacePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpacePrivate

    static name: string
}

interface XsdTypeRestrictionWhiteSpaceFixedClass {
}

abstract class XsdTypeRestrictionWhiteSpaceFixedClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixedClass

    static name: string
}

interface XsdTypeRestrictionWhiteSpaceFixedPrivate {
}

class XsdTypeRestrictionWhiteSpaceFixedPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixedPrivate

    static name: string
}

interface XsdTypeRestrictionPatternClass {
}

abstract class XsdTypeRestrictionPatternClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionPatternClass

    static name: string
}

interface XsdTypeRestrictionPatternPrivate {
}

class XsdTypeRestrictionPatternPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionPatternPrivate

    static name: string
}

interface XsdTypeRestrictionAssertionClass {
}

abstract class XsdTypeRestrictionAssertionClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionAssertionClass

    static name: string
}

interface XsdTypeRestrictionAssertionPrivate {
}

class XsdTypeRestrictionAssertionPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionAssertionPrivate

    static name: string
}

interface XsdTypeRestrictionExplicitTimezoneClass {
}

abstract class XsdTypeRestrictionExplicitTimezoneClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezoneClass

    static name: string
}

interface XsdTypeRestrictionExplicitTimezonePrivate {
}

class XsdTypeRestrictionExplicitTimezonePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezonePrivate

    static name: string
}

interface XsdComplexTypeClass {
}

abstract class XsdComplexTypeClass {

    // Own properties of GXml-0.20.GXml.XsdComplexTypeClass

    static name: string
}

interface XsdComplexTypePrivate {
}

class XsdComplexTypePrivate {

    // Own properties of GXml-0.20.GXml.XsdComplexTypePrivate

    static name: string
}

interface XsdExtensionClass {
}

abstract class XsdExtensionClass {

    // Own properties of GXml-0.20.GXml.XsdExtensionClass

    static name: string
}

interface XsdExtensionPrivate {
}

class XsdExtensionPrivate {

    // Own properties of GXml-0.20.GXml.XsdExtensionPrivate

    static name: string
}

interface XsdElementClass {
}

abstract class XsdElementClass {

    // Own properties of GXml-0.20.GXml.XsdElementClass

    static name: string
}

interface XsdElementPrivate {
}

class XsdElementPrivate {

    // Own properties of GXml-0.20.GXml.XsdElementPrivate

    static name: string
}

interface XsdAnnotationClass {
}

abstract class XsdAnnotationClass {

    // Own properties of GXml-0.20.GXml.XsdAnnotationClass

    static name: string
}

interface XsdAnnotationPrivate {
}

class XsdAnnotationPrivate {

    // Own properties of GXml-0.20.GXml.XsdAnnotationPrivate

    static name: string
}

interface XsdBaseTypeClass {
}

abstract class XsdBaseTypeClass {

    // Own properties of GXml-0.20.GXml.XsdBaseTypeClass

    static name: string
}

interface XsdBaseTypePrivate {
}

class XsdBaseTypePrivate {

    // Own properties of GXml-0.20.GXml.XsdBaseTypePrivate

    static name: string
}

interface XsdBaseContentClass {
}

abstract class XsdBaseContentClass {

    // Own properties of GXml-0.20.GXml.XsdBaseContentClass

    static name: string
}

interface XsdBaseContentPrivate {
}

class XsdBaseContentPrivate {

    // Own properties of GXml-0.20.GXml.XsdBaseContentPrivate

    static name: string
}

interface XsdSimpleContentClass {
}

abstract class XsdSimpleContentClass {

    // Own properties of GXml-0.20.GXml.XsdSimpleContentClass

    static name: string
}

interface XsdSimpleContentPrivate {
}

class XsdSimpleContentPrivate {

    // Own properties of GXml-0.20.GXml.XsdSimpleContentPrivate

    static name: string
}

interface XsdComplexContentClass {
}

abstract class XsdComplexContentClass {

    // Own properties of GXml-0.20.GXml.XsdComplexContentClass

    static name: string
}

interface XsdComplexContentPrivate {
}

class XsdComplexContentPrivate {

    // Own properties of GXml-0.20.GXml.XsdComplexContentPrivate

    static name: string
}

interface XsdOpenContentClass {
}

abstract class XsdOpenContentClass {

    // Own properties of GXml-0.20.GXml.XsdOpenContentClass

    static name: string
}

interface XsdOpenContentPrivate {
}

class XsdOpenContentPrivate {

    // Own properties of GXml-0.20.GXml.XsdOpenContentPrivate

    static name: string
}

interface XsdBaseAttributeClass {
}

abstract class XsdBaseAttributeClass {

    // Own properties of GXml-0.20.GXml.XsdBaseAttributeClass

    static name: string
}

interface XsdBaseAttributePrivate {
}

class XsdBaseAttributePrivate {

    // Own properties of GXml-0.20.GXml.XsdBaseAttributePrivate

    static name: string
}

interface XsdAttributeClass {
}

abstract class XsdAttributeClass {

    // Own properties of GXml-0.20.GXml.XsdAttributeClass

    static name: string
}

interface XsdAttributePrivate {
}

class XsdAttributePrivate {

    // Own properties of GXml-0.20.GXml.XsdAttributePrivate

    static name: string
}

interface XsdAttributeGroupClass {
}

abstract class XsdAttributeGroupClass {

    // Own properties of GXml-0.20.GXml.XsdAttributeGroupClass

    static name: string
}

interface XsdAttributeGroupPrivate {
}

class XsdAttributeGroupPrivate {

    // Own properties of GXml-0.20.GXml.XsdAttributeGroupPrivate

    static name: string
}

interface XsdListClass {
}

abstract class XsdListClass {

    // Own properties of GXml-0.20.GXml.XsdListClass

    static name: string
}

interface XsdListPrivate {
}

class XsdListPrivate {

    // Own properties of GXml-0.20.GXml.XsdListPrivate

    static name: string
}

interface XsdListElementsClass {
}

abstract class XsdListElementsClass {

    // Own properties of GXml-0.20.GXml.XsdListElementsClass

    static name: string
}

interface XsdListElementsPrivate {
}

class XsdListElementsPrivate {

    // Own properties of GXml-0.20.GXml.XsdListElementsPrivate

    static name: string
}

interface XsdListSimpleTypesClass {
}

abstract class XsdListSimpleTypesClass {

    // Own properties of GXml-0.20.GXml.XsdListSimpleTypesClass

    static name: string
}

interface XsdListSimpleTypesPrivate {
}

class XsdListSimpleTypesPrivate {

    // Own properties of GXml-0.20.GXml.XsdListSimpleTypesPrivate

    static name: string
}

interface XsdListComplexTypesClass {
}

abstract class XsdListComplexTypesClass {

    // Own properties of GXml-0.20.GXml.XsdListComplexTypesClass

    static name: string
}

interface XsdListComplexTypesPrivate {
}

class XsdListComplexTypesPrivate {

    // Own properties of GXml-0.20.GXml.XsdListComplexTypesPrivate

    static name: string
}

interface XsdListTypeRestrictionEnumerationsClass {
}

abstract class XsdListTypeRestrictionEnumerationsClass {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionEnumerationsClass

    static name: string
}

interface XsdListTypeRestrictionEnumerationsPrivate {
}

class XsdListTypeRestrictionEnumerationsPrivate {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionEnumerationsPrivate

    static name: string
}

interface XsdListTypeRestrictionWhiteSpacesClass {
}

abstract class XsdListTypeRestrictionWhiteSpacesClass {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpacesClass

    static name: string
}

interface XsdListTypeRestrictionWhiteSpacesPrivate {
}

class XsdListTypeRestrictionWhiteSpacesPrivate {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpacesPrivate

    static name: string
}

interface XTextClass {
}

abstract class XTextClass {

    // Own properties of GXml-0.20.GXml.XTextClass

    static name: string
}

interface XTextPrivate {
}

class XTextPrivate {

    // Own properties of GXml-0.20.GXml.XTextPrivate

    static name: string
}

interface CollectionIface {

    // Own fields of GXml-0.20.GXml.CollectionIface

    search: (self: Collection) => void
    get_item: (self: Collection, index: number) => DomElement | null
    append: (self: Collection, node: DomElement) => void
    initialize: (self: Collection, t: GObject.GType) => void
    create_item: (self: Collection) => DomElement | null
    validate_append: (self: Collection, index: number, element: DomElement) => boolean
    clear: (self: Collection) => void
    get_nodes_index: (self: Collection) => GLib.Queue
    get_element: (self: Collection) => DomElement
    set_element: (self: Collection, value: DomElement) => void
    get_items_name: (self: Collection) => string
    get_items_type: (self: Collection) => GObject.GType
    set_items_type: (self: Collection, value: GObject.GType) => void
    get_length: (self: Collection) => number
}

abstract class CollectionIface {

    // Own properties of GXml-0.20.GXml.CollectionIface

    static name: string
}

interface ListIface {
}

abstract class ListIface {

    // Own properties of GXml-0.20.GXml.ListIface

    static name: string
}

interface MappeableElementIface {

    // Own fields of GXml-0.20.GXml.MappeableElementIface

    get_map_key: (self: MappeableElement) => string
}

abstract class MappeableElementIface {

    // Own properties of GXml-0.20.GXml.MappeableElementIface

    static name: string
}

interface MapIface {

    // Own fields of GXml-0.20.GXml.MapIface

    item: (self: Map, key: string) => DomElement | null
    has_key: (self: Map, key: string) => boolean
    get_attribute_key: (self: Map) => string
    set_attribute_key: (self: Map, value: string) => void
    get_keys_set: (self: Map) => Gee.Set
}

abstract class MapIface {

    // Own properties of GXml-0.20.GXml.MapIface

    static name: string
}

interface MappeableElementPairKeyIface {

    // Own fields of GXml-0.20.GXml.MappeableElementPairKeyIface

    get_map_primary_key: (self: MappeableElementPairKey) => string
    get_map_secondary_key: (self: MappeableElementPairKey) => string
}

abstract class MappeableElementPairKeyIface {

    // Own properties of GXml-0.20.GXml.MappeableElementPairKeyIface

    static name: string
}

interface PairedMapIface {

    // Own fields of GXml-0.20.GXml.PairedMapIface

    item: (self: PairedMap, primary_key: string, secondary_key: string) => DomElement | null
    has_primary_key: (self: PairedMap, key: string) => boolean
    has_secondary_key: (self: PairedMap, pkey: string, key: string) => boolean
    secondary_keys_set: (self: PairedMap, pkey: string) => Gee.Set
    get_attribute_primary_key: (self: PairedMap) => string
    set_attribute_primary_key: (self: PairedMap, value: string) => void
    get_attribute_secondary_key: (self: PairedMap) => string
    set_attribute_secondary_key: (self: PairedMap, value: string) => void
    get_primary_keys_set: (self: PairedMap) => Gee.Set
}

abstract class PairedMapIface {

    // Own properties of GXml-0.20.GXml.PairedMapIface

    static name: string
}

interface MappeableElementThreeKeyIface {

    // Own fields of GXml-0.20.GXml.MappeableElementThreeKeyIface

    get_map_pkey: (self: MappeableElementThreeKey) => string
    get_map_skey: (self: MappeableElementThreeKey) => string
    get_map_tkey: (self: MappeableElementThreeKey) => string
}

abstract class MappeableElementThreeKeyIface {

    // Own properties of GXml-0.20.GXml.MappeableElementThreeKeyIface

    static name: string
}

interface ThreeMapIface {

    // Own fields of GXml-0.20.GXml.ThreeMapIface

    item: (self: ThreeMap, primary_key: string, secondary_key: string, third_key: string) => DomElement | null
    has_primary_key: (self: ThreeMap, key: string) => boolean
    has_secondary_key: (self: ThreeMap, pkey: string, key: string) => boolean
    has_third_key: (self: ThreeMap, pkey: string, skey: string, key: string) => boolean
    secondary_keys_set: (self: ThreeMap, pkey: string) => Gee.Set
    third_keys_set: (self: ThreeMap, pkey: string, skey: string) => Gee.Set
    get_attribute_primary_key: (self: ThreeMap) => string
    set_attribute_primary_key: (self: ThreeMap, value: string) => void
    get_attribute_secondary_key: (self: ThreeMap) => string
    set_attribute_secondary_key: (self: ThreeMap, value: string) => void
    get_attribute_third_key: (self: ThreeMap) => string
    set_attribute_third_key: (self: ThreeMap, value: string) => void
    get_primary_keys_set: (self: ThreeMap) => Gee.Set
}

abstract class ThreeMapIface {

    // Own properties of GXml-0.20.GXml.ThreeMapIface

    static name: string
}

interface CollectionParentIface {

    // Own fields of GXml-0.20.GXml.CollectionParentIface

    get_types: (self: CollectionParent) => GLib.HashTable
}

abstract class CollectionParentIface {

    // Own properties of GXml-0.20.GXml.CollectionParentIface

    static name: string
}

interface DomAttrIface {

    // Own fields of GXml-0.20.GXml.DomAttrIface

    get_namespace_uri: (self: DomAttr) => string | null
    get_prefix: (self: DomAttr) => string | null
    get_local_name: (self: DomAttr) => string
    get_name: (self: DomAttr) => string
    get_value: (self: DomAttr) => string
    set_value: (self: DomAttr, value: string) => void
    get_specified: (self: DomAttr) => boolean
}

abstract class DomAttrIface {

    // Own properties of GXml-0.20.GXml.DomAttrIface

    static name: string
}

interface DomCharacterDataIface {

    // Own fields of GXml-0.20.GXml.DomCharacterDataIface

    substring_data: (self: DomCharacterData, offset: number, count: number) => string
    append_data: (self: DomCharacterData, data: string) => void
    insert_data: (self: DomCharacterData, offset: number, data: string) => void
    delete_data: (self: DomCharacterData, offset: number, count: number) => void
    replace_data: (self: DomCharacterData, offset: number, count: number, data: string) => void
    get_data: (self: DomCharacterData) => string
    set_data: (self: DomCharacterData, value: string) => void
    get_length: (self: DomCharacterData) => number
}

abstract class DomCharacterDataIface {

    // Own properties of GXml-0.20.GXml.DomCharacterDataIface

    static name: string
}

interface DomTextIface {

    // Own fields of GXml-0.20.GXml.DomTextIface

    split_text: (self: DomText, offset: number) => DomText
    get_whole_text: (self: DomText) => string
}

abstract class DomTextIface {

    // Own properties of GXml-0.20.GXml.DomTextIface

    static name: string
}

interface DomProcessingInstructionIface {

    // Own fields of GXml-0.20.GXml.DomProcessingInstructionIface

    get_target: (self: DomProcessingInstruction) => string
}

abstract class DomProcessingInstructionIface {

    // Own properties of GXml-0.20.GXml.DomProcessingInstructionIface

    static name: string
}

interface DomCommentIface {
}

abstract class DomCommentIface {

    // Own properties of GXml-0.20.GXml.DomCommentIface

    static name: string
}

interface DomNonElementParentNodeIface {

    // Own fields of GXml-0.20.GXml.DomNonElementParentNodeIface

    get_element_by_id: (self: DomNonElementParentNode, element_id: string) => DomElement | null
}

abstract class DomNonElementParentNodeIface {

    // Own properties of GXml-0.20.GXml.DomNonElementParentNodeIface

    static name: string
}

interface DomParentNodeIface {

    // Own fields of GXml-0.20.GXml.DomParentNodeIface

    query_selector: (self: DomParentNode, selectors: string) => DomElement | null
    query_selector_all: (self: DomParentNode, selectors: string) => DomNodeList
    get_elements_by_property_value: (self: DomParentNode, property: string, value: string) => DomElementList
    get_children: (self: DomParentNode) => DomHTMLCollection
    get_first_element_child: (self: DomParentNode) => DomElement | null
    get_last_element_child: (self: DomParentNode) => DomElement | null
    get_child_element_count: (self: DomParentNode) => number
}

abstract class DomParentNodeIface {

    // Own properties of GXml-0.20.GXml.DomParentNodeIface

    static name: string
}

interface DomNonDocumentTypeChildNodeIface {

    // Own fields of GXml-0.20.GXml.DomNonDocumentTypeChildNodeIface

    get_previous_element_sibling: (self: DomNonDocumentTypeChildNode) => DomElement | null
    get_next_element_sibling: (self: DomNonDocumentTypeChildNode) => DomElement | null
}

abstract class DomNonDocumentTypeChildNodeIface {

    // Own properties of GXml-0.20.GXml.DomNonDocumentTypeChildNodeIface

    static name: string
}

interface DomChildNodeIface {

    // Own fields of GXml-0.20.GXml.DomChildNodeIface

    remove: (self: DomChildNode) => void
}

abstract class DomChildNodeIface {

    // Own properties of GXml-0.20.GXml.DomChildNodeIface

    static name: string
}

interface DomNodeListIface {

    // Own fields of GXml-0.20.GXml.DomNodeListIface

    item: (self: DomNodeList, index: number) => DomNode | null
    get_length: (self: DomNodeList) => number
}

abstract class DomNodeListIface {

    // Own properties of GXml-0.20.GXml.DomNodeListIface

    static name: string
}

interface DomHTMLCollectionIface {

    // Own fields of GXml-0.20.GXml.DomHTMLCollectionIface

    get_element: (self: DomHTMLCollection, index: number) => DomElement | null
    to_array: () => [ /* returnType */ DomElement[], /* result_length1 */ number ]
    item: (self: DomHTMLCollection, index: number) => DomElement | null
    named_item: (self: DomHTMLCollection, name: string) => DomElement | null
    get_length: (self: DomHTMLCollection) => number
}

abstract class DomHTMLCollectionIface {

    // Own properties of GXml-0.20.GXml.DomHTMLCollectionIface

    static name: string
}

interface DomNodeIteratorIface {

    // Own fields of GXml-0.20.GXml.DomNodeIteratorIface

    next_node: (self: DomNodeIterator) => DomNode | null
    previous_node: (self: DomNodeIterator) => DomNode | null
    detach: (self: DomNodeIterator) => void
    get_root: (self: DomNodeIterator) => DomNode
    get_reference_node: (self: DomNodeIterator) => DomNode
    get_pointer_before_reference_node: (self: DomNodeIterator) => boolean
    get_what_to_show: (self: DomNodeIterator) => number
}

abstract class DomNodeIteratorIface {

    // Own properties of GXml-0.20.GXml.DomNodeIteratorIface

    static name: string
}

interface DomTreeWalkerIface {

    // Own fields of GXml-0.20.GXml.DomTreeWalkerIface

    parent_node: (self: DomTreeWalker) => DomNode | null
    first_child: (self: DomTreeWalker) => DomNode | null
    last_child: (self: DomTreeWalker) => DomNode | null
    previous_sibling: (self: DomTreeWalker) => DomNode | null
    next_sibling: (self: DomTreeWalker) => DomNode | null
    previous_node: (self: DomTreeWalker) => DomNode | null
    next_node: (self: DomTreeWalker) => DomNode | null
    get_root: (self: DomTreeWalker) => DomNode
    get_what_to_show: (self: DomTreeWalker) => number
    get_current_node: (self: DomTreeWalker) => DomNode
}

abstract class DomTreeWalkerIface {

    // Own properties of GXml-0.20.GXml.DomTreeWalkerIface

    static name: string
}

interface DomNamedNodeMapIface {

    // Own fields of GXml-0.20.GXml.DomNamedNodeMapIface

    item: (self: DomNamedNodeMap, index: number) => DomNode | null
    get_named_item: (self: DomNamedNodeMap, name: string) => DomNode | null
    set_named_item: (self: DomNamedNodeMap, node: DomNode) => DomNode | null
    remove_named_item: (self: DomNamedNodeMap, name: string) => DomNode | null
    remove_named_item_ns: (self: DomNamedNodeMap, namespace_uri: string, localName: string) => DomNode | null
    get_named_item_ns: (self: DomNamedNodeMap, namespace_uri: string, local_name: string) => DomNode | null
    set_named_item_ns: (self: DomNamedNodeMap, node: DomNode) => DomNode | null
    get_length: (self: DomNamedNodeMap) => number
}

abstract class DomNamedNodeMapIface {

    // Own properties of GXml-0.20.GXml.DomNamedNodeMapIface

    static name: string
}

interface DomTokenListIface {

    // Own fields of GXml-0.20.GXml.DomTokenListIface

    item: (self: DomTokenList, index: number) => string | null
    contains: (self: DomTokenList, token: string) => boolean
    add: (self: DomTokenList, tokens: string[]) => void
    remove: (self: DomTokenList, tokens: string[]) => void
    toggle: (self: DomTokenList, token: string, force: boolean, _auto_: boolean) => boolean
    to_string: (self: DomTokenList) => string
    get_length: (self: DomTokenList) => number
}

abstract class DomTokenListIface {

    // Own properties of GXml-0.20.GXml.DomTokenListIface

    static name: string
}

interface DomSettableTokenListIface {

    // Own fields of GXml-0.20.GXml.DomSettableTokenListIface

    get_value: (self: DomSettableTokenList) => string
    set_value: (self: DomSettableTokenList, value: string) => void
}

abstract class DomSettableTokenListIface {

    // Own properties of GXml-0.20.GXml.DomSettableTokenListIface

    static name: string
}

interface DomDocumentIface {

    // Own fields of GXml-0.20.GXml.DomDocumentIface

    get_elements_by_tag_name: (self: DomDocument, local_name: string) => DomHTMLCollection
    get_elements_by_tag_name_ns: (self: DomDocument, namespace: string | null, local_name: string) => DomHTMLCollection
    get_elements_by_class_name: (self: DomDocument, classNames: string) => DomHTMLCollection
    create_element: (self: DomDocument, local_name: string) => DomElement
    create_element_ns: (self: DomDocument, namespace: string | null, qualified_name: string) => DomElement
    create_document_fragment: (self: DomDocument) => DomDocumentFragment
    create_text_node: (self: DomDocument, data: string) => DomText
    create_comment: (self: DomDocument, data: string) => DomComment
    create_processing_instruction: (self: DomDocument, target: string, data: string) => DomProcessingInstruction
    import_node: (self: DomDocument, node: DomNode, deep: boolean) => DomNode
    adopt_node: (self: DomDocument, node: DomNode) => DomNode
    create_event: (self: DomDocument, interface: string) => DomEvent
    create_range: (self: DomDocument) => DomRange
    create_node_iterator: (self: DomDocument, root: DomNode, whatToShow: number) => DomNodeIterator
    create_tree_walker: (self: DomDocument, root: DomNode, what_to_show: number) => DomTreeWalker
    write_file: (self: DomDocument, file: Gio.File, cancellable: Gio.Cancellable | null) => void
    write_file_async: (self: DomDocument, file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    write_file_finish: (self: DomDocument, _res_: Gio.AsyncResult) => void
    write_stream: (self: DomDocument, stream: Gio.OutputStream, cancellable: Gio.Cancellable | null) => void
    write_stream_async: (self: DomDocument, stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    write_stream_finish: (self: DomDocument, _res_: Gio.AsyncResult) => void
    create_stream: (self: DomDocument) => Gio.InputStream
    create_stream_async: (self: DomDocument, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    create_stream_finish: (self: DomDocument, _res_: Gio.AsyncResult) => Gio.InputStream
    write_string: (self: DomDocument, cancellable: Gio.Cancellable | null) => string
    write_string_async: (self: DomDocument, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    write_string_finish: (self: DomDocument, _res_: Gio.AsyncResult) => string
    read_from_file: (self: DomDocument, file: Gio.File, cancellable: Gio.Cancellable | null) => void
    read_from_file_async: (self: DomDocument, file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_file_finish: (self: DomDocument, _res_: Gio.AsyncResult) => void
    read_from_string: (self: DomDocument, str: string, cancellable: Gio.Cancellable | null) => void
    read_from_string_async: (self: DomDocument, str: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_string_finish: (self: DomDocument, _res_: Gio.AsyncResult) => void
    read_from_stream: (self: DomDocument, stream: Gio.InputStream, cancellable: Gio.Cancellable | null) => void
    read_from_stream_async: (self: DomDocument, stream: Gio.InputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_stream_finish: (self: DomDocument, _res_: Gio.AsyncResult) => void
    get_xml_parser: (self: DomDocument) => Parser
    set_xml_parser: (self: DomDocument, parser: Parser) => void
    get_implementation: (self: DomDocument) => DomImplementation
    get_url: (self: DomDocument) => string
    get_document_uri: (self: DomDocument) => string
    get_origin: (self: DomDocument) => string
    get_compat_mode: (self: DomDocument) => string
    get_character_set: (self: DomDocument) => string
    get_content_type: (self: DomDocument) => string
    get_doctype: (self: DomDocument) => DomDocumentType | null
    get_document_element: (self: DomDocument) => DomElement | null
}

abstract class DomDocumentIface {

    // Own properties of GXml-0.20.GXml.DomDocumentIface

    static name: string
}

interface DomXMLDocumentIface {
}

abstract class DomXMLDocumentIface {

    // Own properties of GXml-0.20.GXml.DomXMLDocumentIface

    static name: string
}

interface DomImplementationIface {

    // Own fields of GXml-0.20.GXml.DomImplementationIface

    create_document_type: (self: DomImplementation, qualified_name: string, public_id: string, system_id: string) => DomDocumentType
    create_document: (self: DomImplementation, nspace: string | null, qualified_name: string | null, doctype: DomDocumentType | null) => DomXMLDocument
    create_html_document: (self: DomImplementation, title: string) => DomDocument
    has_feature: (self: DomImplementation) => boolean
}

abstract class DomImplementationIface {

    // Own properties of GXml-0.20.GXml.DomImplementationIface

    static name: string
}

interface DomDocumentFragmentIface {
}

abstract class DomDocumentFragmentIface {

    // Own properties of GXml-0.20.GXml.DomDocumentFragmentIface

    static name: string
}

interface DomDocumentTypeIface {

    // Own fields of GXml-0.20.GXml.DomDocumentTypeIface

    get_name: (self: DomDocumentType) => string
    get_public_id: (self: DomDocumentType) => string
    get_system_id: (self: DomDocumentType) => string
}

abstract class DomDocumentTypeIface {

    // Own properties of GXml-0.20.GXml.DomDocumentTypeIface

    static name: string
}

interface DomHtmlDocumentIface {

    // Own fields of GXml-0.20.GXml.DomHtmlDocumentIface

    read_from_string: (self: DomHtmlDocument, str: string) => void
    read_from_string_tolerant: (self: DomHtmlDocument, str: string) => void
    to_html: (self: DomHtmlDocument) => string
}

abstract class DomHtmlDocumentIface {

    // Own properties of GXml-0.20.GXml.DomHtmlDocumentIface

    static name: string
}

interface DomElementIface {

    // Own fields of GXml-0.20.GXml.DomElementIface

    get_attribute: (self: DomElement, name: string) => string | null
    get_attribute_ns: (self: DomElement, namespace: string | null, local_name: string) => string | null
    set_attribute: (self: DomElement, name: string, value: string) => void
    set_attribute_ns: (self: DomElement, namespace: string | null, name: string, value: string) => void
    remove_attribute: (self: DomElement, name: string) => void
    remove_attribute_ns: (self: DomElement, namespace: string | null, local_name: string) => void
    has_attribute: (self: DomElement, name: string) => boolean
    has_attribute_ns: (self: DomElement, namespace: string | null, local_name: string) => boolean
    get_elements_by_tag_name: (self: DomElement, local_name: string) => DomHTMLCollection
    get_elements_by_tag_name_ns: (self: DomElement, namespace: string | null, local_name: string) => DomHTMLCollection
    get_elements_by_class_name: (self: DomElement, class_names: string) => DomHTMLCollection
    matches: (self: DomElement, selectors: string) => boolean
    read_from_uri: (self: DomElement, uri: string) => void
    read_from_uri_async: (self: DomElement, uri: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_uri_finish: (self: DomElement, _res_: Gio.AsyncResult) => void
    read_from_file: (self: DomElement, f: Gio.File, cancellable: Gio.Cancellable | null) => void
    read_from_file_async: (self: DomElement, f: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_file_finish: (self: DomElement, _res_: Gio.AsyncResult) => void
    read_from_stream: (self: DomElement, istream: Gio.InputStream, cancellable: Gio.Cancellable | null) => void
    read_from_stream_async: (self: DomElement, istream: Gio.InputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_stream_finish: (self: DomElement, _res_: Gio.AsyncResult) => void
    read_from_string: (self: DomElement, str: string, cancellable: Gio.Cancellable | null) => void
    read_from_string_async: (self: DomElement, str: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_string_finish: (self: DomElement, _res_: Gio.AsyncResult) => void
    write_string: (self: DomElement, cancellable: Gio.Cancellable | null) => string
    write_string_async: (self: DomElement, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    write_string_finish: (self: DomElement, _res_: Gio.AsyncResult) => string
    write_file: (self: DomElement, f: Gio.File, cancellable: Gio.Cancellable | null) => void
    write_file_async: (self: DomElement, f: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    write_file_finish: (self: DomElement, _res_: Gio.AsyncResult) => void
    write_stream: (self: DomElement, stream: Gio.OutputStream) => void
    write_stream_async: (self: DomElement, stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    write_stream_finish: (self: DomElement, _res_: Gio.AsyncResult) => void
    create_stream: (self: DomElement) => Gio.InputStream
    create_stream_async: (self: DomElement, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    create_stream_finish: (self: DomElement, _res_: Gio.AsyncResult) => Gio.InputStream
    get_namespace_uri: (self: DomElement) => string | null
    get_prefix: (self: DomElement) => string | null
    get_local_name: (self: DomElement) => string
    get_tag_name: (self: DomElement) => string
    get_id: (self: DomElement) => string | null
    set_id: (self: DomElement, value: string | null) => void
    get_class_name: (self: DomElement) => string | null
    set_class_name: (self: DomElement, value: string | null) => void
    get_class_list: (self: DomElement) => DomTokenList
    get_attributes: (self: DomElement) => DomNamedNodeMap
}

abstract class DomElementIface {

    // Own properties of GXml-0.20.GXml.DomElementIface

    static name: string
}

interface DomEventTargetIface {

    // Own fields of GXml-0.20.GXml.DomEventTargetIface

    add_event_listener: (self: DomEventTarget, type: string, callback: DomEventListener | null, capture: boolean) => void
    remove_event_listener: (self: DomEventTarget, type: string, callback: DomEventListener | null, capture: boolean) => void
    dispatch_event: (self: DomEventTarget, event: DomEvent) => boolean
}

abstract class DomEventTargetIface {

    // Own properties of GXml-0.20.GXml.DomEventTargetIface

    static name: string
}

interface DomEventListenerIface {

    // Own fields of GXml-0.20.GXml.DomEventListenerIface

    handle_event: (self: DomEventListener, event: DomEvent) => void
}

abstract class DomEventListenerIface {

    // Own properties of GXml-0.20.GXml.DomEventListenerIface

    static name: string
}

interface DomEventIface {

    // Own fields of GXml-0.20.GXml.DomEventIface

    stop_propagation: (self: DomEvent) => void
    stop_immediate_propagation: (self: DomEvent) => void
    prevent_default: (self: DomEvent) => void
    init_event: (self: DomEvent, type: string, bubbles: boolean, cancelable: boolean) => void
    get_etype: (self: DomEvent) => string
    get_event_target: (self: DomEvent) => DomEventTarget | null
    get_current_target: (self: DomEvent) => DomEventTarget | null
    get_bubbles: (self: DomEvent) => boolean
    get_cancelable: (self: DomEvent) => boolean
    get_is_trusted: (self: DomEvent) => boolean
    get_time_stamp: (self: DomEvent) => DomTimeStamp
    get_default_prevented: (self: DomEvent) => boolean
    get_event_phase: (self: DomEvent) => DomEventPhase
}

abstract class DomEventIface {

    // Own properties of GXml-0.20.GXml.DomEventIface

    static name: string
}

interface DomCustomEventIface {

    // Own fields of GXml-0.20.GXml.DomCustomEventIface

    init_custom_event: (self: DomCustomEvent, type: string, bubbles: boolean, cancelable: boolean, detail: any) => void
    get_detail: (self: DomCustomEvent) => /* result */ any
}

abstract class DomCustomEventIface {

    // Own properties of GXml-0.20.GXml.DomCustomEventIface

    static name: string
}

interface DomMutationObserverIface {

    // Own fields of GXml-0.20.GXml.DomMutationObserverIface

    observe: (self: DomMutationObserver, target: Node, options: DomMutationObserverInit) => void
    // TODO fix conflict: disconnect: (self: DomMutationObserver) => void
    take_records: (self: DomMutationObserver) => Gee.List
}

abstract class DomMutationObserverIface {

    // Own properties of GXml-0.20.GXml.DomMutationObserverIface

    static name: string
}

interface DomMutationRecordIface {

    // Own fields of GXml-0.20.GXml.DomMutationRecordIface

    get_mtype: (self: DomMutationRecord) => string
    get_target: (self: DomMutationRecord) => DomNode
    get_added_nodes: (self: DomMutationRecord) => DomNodeList
    set_added_nodes: (self: DomMutationRecord, value: DomNodeList) => void
    get_removed_nodes: (self: DomMutationRecord) => DomNodeList
    set_removed_nodes: (self: DomMutationRecord, value: DomNodeList) => void
    get_previous_sibling: (self: DomMutationRecord) => DomNode | null
    get_next_sibling: (self: DomMutationRecord) => DomNode | null
    get_attribute_name: (self: DomMutationRecord) => string | null
    get_attribute_namespace: (self: DomMutationRecord) => string | null
    get_old_value: (self: DomMutationRecord) => string | null
}

abstract class DomMutationRecordIface {

    // Own properties of GXml-0.20.GXml.DomMutationRecordIface

    static name: string
}

interface DomNodeIface {

    // Own fields of GXml-0.20.GXml.DomNodeIface

    has_child_nodes: (self: DomNode) => boolean
    normalize: (self: DomNode) => void
    is_equal_node: (self: DomNode, node: DomNode | null) => boolean
    compare_document_position: (self: DomNode, other: DomNode) => DomNodeDocumentPosition
    contains: (self: DomNode, other: DomNode | null) => boolean
    lookup_prefix: (self: DomNode, nspace: string | null) => string | null
    lookup_namespace_uri: (self: DomNode, prefix: string | null) => string | null
    is_default_namespace: (self: DomNode, nspace: string | null) => boolean
    insert_before: (self: DomNode, node: DomNode, child: DomNode | null) => DomNode
    append_child: (self: DomNode, node: DomNode) => DomNode
    replace_child: (self: DomNode, node: DomNode, child: DomNode) => DomNode
    remove_child: (self: DomNode, child: DomNode) => DomNode
    get_node_type: (self: DomNode) => DomNodeNodeType
    get_node_name: (self: DomNode) => string
    get_base_uri: (self: DomNode) => string | null
    get_owner_document: (self: DomNode) => DomDocument | null
    set_owner_document: (self: DomNode, value: DomDocument | null) => void
    get_parent_node: (self: DomNode) => DomNode | null
    get_parent_element: (self: DomNode) => DomElement | null
    get_child_nodes: (self: DomNode) => DomNodeList
    get_first_child: (self: DomNode) => DomNode | null
    get_last_child: (self: DomNode) => DomNode | null
    get_previous_sibling: (self: DomNode) => DomNode | null
    get_next_sibling: (self: DomNode) => DomNode | null
    get_node_value: (self: DomNode) => string | null
    set_node_value: (self: DomNode, value: string | null) => void
    get_text_content: (self: DomNode) => string | null
    set_text_content: (self: DomNode, value: string | null) => void
}

abstract class DomNodeIface {

    // Own properties of GXml-0.20.GXml.DomNodeIface

    static name: string
}

interface DomRangeIface {

    // Own fields of GXml-0.20.GXml.DomRangeIface

    set_start: (self: DomRange, node: DomNode, offset: number) => void
    set_end: (self: DomRange, node: DomNode, offset: number) => void
    set_start_before: (self: DomRange, node: DomNode) => void
    set_start_after: (self: DomRange, node: DomNode) => void
    set_end_before: (self: DomRange, node: DomNode) => void
    set_end_after: (self: DomRange, node: DomNode) => void
    collapse: (self: DomRange, to_start: boolean) => void
    select_node: (self: DomRange, node: DomNode) => void
    select_node_contents: (self: DomRange, node: DomNode) => void
    compare_boundary_points: (self: DomRange, how: DomRangeBoundaryPoints, sourceRange: DomRange) => number
    delete_contents: (self: DomRange) => void
    extract_contents: (self: DomRange) => DomDocumentFragment | null
    clone_contents: (self: DomRange) => DomDocumentFragment | null
    insert_node: (self: DomRange, node: DomNode) => void
    surround_contents: (self: DomRange, newParent: DomNode) => void
    clone_range: (self: DomRange) => DomRange
    detach: (self: DomRange) => void
    is_point_in_range: (self: DomRange, node: DomNode, offset: number) => boolean
    compare_point: (self: DomRange, node: DomNode, offset: number) => number
    intersects_node: (self: DomRange, node: DomNode) => boolean
    to_string: (self: DomRange) => string
    get_start_container: (self: DomRange) => DomNode
    get_start_offset: (self: DomRange) => number
    get_end_container: (self: DomRange) => DomNode
    get_end_offset: (self: DomRange) => number
    get_collapsed: (self: DomRange) => boolean
    get_common_ancestor_container: (self: DomRange) => DomNode
}

abstract class DomRangeIface {

    // Own properties of GXml-0.20.GXml.DomRangeIface

    static name: string
}

interface IXsdSchemaIface {

    // Own fields of GXml-0.20.GXml.IXsdSchemaIface

    get_element_definitions: (self: IXsdSchema) => IXsdListElements
    set_element_definitions: (self: IXsdSchema, value: IXsdListElements) => void
    get_simple_type_definitions: (self: IXsdSchema) => IXsdListSimpleTypes
    set_simple_type_definitions: (self: IXsdSchema, value: IXsdListSimpleTypes) => void
    get_complex_type_definitions: (self: IXsdSchema) => IXsdListComplexTypes
    set_complex_type_definitions: (self: IXsdSchema, value: IXsdListComplexTypes) => void
}

abstract class IXsdSchemaIface {

    // Own properties of GXml-0.20.GXml.IXsdSchemaIface

    static name: string
}

interface IXsdBaseTypeIface {

    // Own fields of GXml-0.20.GXml.IXsdBaseTypeIface

    get_anotation: (self: IXsdBaseType) => IXsdAnnotation
    set_anotation: (self: IXsdBaseType, value: IXsdAnnotation) => void
}

abstract class IXsdBaseTypeIface {

    // Own properties of GXml-0.20.GXml.IXsdBaseTypeIface

    static name: string
}

interface IXsdSimpleTypeIface {

    // Own fields of GXml-0.20.GXml.IXsdSimpleTypeIface

    get_final: (self: IXsdSimpleType) => string
    set_final: (self: IXsdSimpleType, value: string) => void
    get_id: (self: IXsdSimpleType) => string
    set_id: (self: IXsdSimpleType, value: string) => void
    get_name: (self: IXsdSimpleType) => string
    set_name: (self: IXsdSimpleType, value: string) => void
    get_annotation: (self: IXsdSimpleType) => IXsdAnnotation
    set_annotation: (self: IXsdSimpleType, value: IXsdAnnotation) => void
    get_list: (self: IXsdSimpleType) => IXsdTypeList
    set_list: (self: IXsdSimpleType, value: IXsdTypeList) => void
    get_union: (self: IXsdSimpleType) => IXsdTypeUnion
    set_union: (self: IXsdSimpleType, value: IXsdTypeUnion) => void
    get_restriction: (self: IXsdSimpleType) => IXsdTypeRestriction
    set_restriction: (self: IXsdSimpleType, value: IXsdTypeRestriction) => void
}

abstract class IXsdSimpleTypeIface {

    // Own properties of GXml-0.20.GXml.IXsdSimpleTypeIface

    static name: string
}

interface IXsdTypeDefIface {
}

abstract class IXsdTypeDefIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeDefIface

    static name: string
}

interface IXsdTypeRestrictionIface {

    // Own fields of GXml-0.20.GXml.IXsdTypeRestrictionIface

    get_base: (self: IXsdTypeRestriction) => string
    set_base: (self: IXsdTypeRestriction, value: string) => void
    get_id: (self: IXsdTypeRestriction) => string
    set_id: (self: IXsdTypeRestriction, value: string) => void
    get_simple_type: (self: IXsdTypeRestriction) => IXsdSimpleType
    set_simple_type: (self: IXsdTypeRestriction, value: IXsdSimpleType) => void
    get_enumerations: (self: IXsdTypeRestriction) => IXsdListTypeRestrictionEnumerations
    set_enumerations: (self: IXsdTypeRestriction, value: IXsdListTypeRestrictionEnumerations) => void
    get_white_spaces: (self: IXsdTypeRestriction) => IXsdListTypeRestrictionWhiteSpaces
    set_white_spaces: (self: IXsdTypeRestriction, value: IXsdListTypeRestrictionWhiteSpaces) => void
}

abstract class IXsdTypeRestrictionIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionIface

    static name: string
}

interface IXsdTypeListIface {
}

abstract class IXsdTypeListIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeListIface

    static name: string
}

interface IXsdTypeUnionIface {
}

abstract class IXsdTypeUnionIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeUnionIface

    static name: string
}

interface IXsdTypeRestrictionDefIface {

    // Own fields of GXml-0.20.GXml.IXsdTypeRestrictionDefIface

    get_annotation: (self: IXsdTypeRestrictionDef) => IXsdAnnotation
    set_annotation: (self: IXsdTypeRestrictionDef, value: IXsdAnnotation) => void
}

abstract class IXsdTypeRestrictionDefIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionDefIface

    static name: string
}

interface IXsdTypeRestrictionMinExclusiveIface {
}

abstract class IXsdTypeRestrictionMinExclusiveIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinExclusiveIface

    static name: string
}

interface IXsdTypeRestrictionMinInclusiveIface {
}

abstract class IXsdTypeRestrictionMinInclusiveIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinInclusiveIface

    static name: string
}

interface IXsdTypeRestrictionMaxExclusiveIface {
}

abstract class IXsdTypeRestrictionMaxExclusiveIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxExclusiveIface

    static name: string
}

interface IXsdTypeRestrictionMaxInclusiveIface {
}

abstract class IXsdTypeRestrictionMaxInclusiveIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxInclusiveIface

    static name: string
}

interface IXsdTypeRestrictionTotalDigitsIface {
}

abstract class IXsdTypeRestrictionTotalDigitsIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionTotalDigitsIface

    static name: string
}

interface IXsdTypeRestrictionFractionDigitsIface {
}

abstract class IXsdTypeRestrictionFractionDigitsIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionFractionDigitsIface

    static name: string
}

interface IXsdTypeRestrictionLengthIface {
}

abstract class IXsdTypeRestrictionLengthIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionLengthIface

    static name: string
}

interface IXsdTypeRestrictionMinLengthIface {
}

abstract class IXsdTypeRestrictionMinLengthIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinLengthIface

    static name: string
}

interface IXsdTypeRestrictionMaxLengthIface {
}

abstract class IXsdTypeRestrictionMaxLengthIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxLengthIface

    static name: string
}

interface IXsdTypeRestrictionEnumerationIface {

    // Own fields of GXml-0.20.GXml.IXsdTypeRestrictionEnumerationIface

    get_id: (self: IXsdTypeRestrictionEnumeration) => string
    set_id: (self: IXsdTypeRestrictionEnumeration, value: string) => void
    get_value: (self: IXsdTypeRestrictionEnumeration) => string
    set_value: (self: IXsdTypeRestrictionEnumeration, value: string) => void
}

abstract class IXsdTypeRestrictionEnumerationIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionEnumerationIface

    static name: string
}

interface IXsdTypeRestrictionWhiteSpaceIface {

    // Own fields of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpaceIface

    get_fixed: (self: IXsdTypeRestrictionWhiteSpace) => boolean
    set_fixed: (self: IXsdTypeRestrictionWhiteSpace, value: boolean) => void
    get_id: (self: IXsdTypeRestrictionWhiteSpace) => string
    set_id: (self: IXsdTypeRestrictionWhiteSpace, value: string) => void
    get_value: (self: IXsdTypeRestrictionWhiteSpace) => string
    set_value: (self: IXsdTypeRestrictionWhiteSpace, value: string) => void
}

abstract class IXsdTypeRestrictionWhiteSpaceIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpaceIface

    static name: string
}

interface IXsdTypeRestrictionPatternIface {
}

abstract class IXsdTypeRestrictionPatternIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionPatternIface

    static name: string
}

interface IXsdTypeRestrictionAssertionIface {
}

abstract class IXsdTypeRestrictionAssertionIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionAssertionIface

    static name: string
}

interface IXsdTypeRestrictionExplicitTimezoneIface {
}

abstract class IXsdTypeRestrictionExplicitTimezoneIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionExplicitTimezoneIface

    static name: string
}

interface IXsdComplexTypeIface {

    // Own fields of GXml-0.20.GXml.IXsdComplexTypeIface

    get_abstract: (self: IXsdComplexType) => boolean
    set_abstract: (self: IXsdComplexType, value: boolean) => void
    get_block: (self: IXsdComplexType) => string
    set_block: (self: IXsdComplexType, value: string) => void
    get_final: (self: IXsdComplexType) => string
    set_final: (self: IXsdComplexType, value: string) => void
    get_mixed: (self: IXsdComplexType) => boolean
    set_mixed: (self: IXsdComplexType, value: boolean) => void
    get_name: (self: IXsdComplexType) => string
    set_name: (self: IXsdComplexType, value: string) => void
    get_default_attributes_apply: (self: IXsdComplexType) => boolean
    set_default_attributes_apply: (self: IXsdComplexType, value: boolean) => void
    get_content_type: (self: IXsdComplexType) => IXsdBaseContent
    set_content_type: (self: IXsdComplexType, value: IXsdBaseContent) => void
    get_type_attributes: (self: IXsdComplexType) => IXsdListAttributes
    get_group_attributes: (self: IXsdComplexType) => IXsdListAttributesGroup
}

abstract class IXsdComplexTypeIface {

    // Own properties of GXml-0.20.GXml.IXsdComplexTypeIface

    static name: string
}

interface IXsdExtensionIface {

    // Own fields of GXml-0.20.GXml.IXsdExtensionIface

    get_base: (self: IXsdExtension) => string
    set_base: (self: IXsdExtension, value: string) => void
}

abstract class IXsdExtensionIface {

    // Own properties of GXml-0.20.GXml.IXsdExtensionIface

    static name: string
}

interface IXsdElementIface {

    // Own fields of GXml-0.20.GXml.IXsdElementIface

    get_abstract: (self: IXsdElement) => boolean
    set_abstract: (self: IXsdElement, value: boolean) => void
    get_block: (self: IXsdElement) => string
    set_block: (self: IXsdElement, value: string) => void
    get_default: (self: IXsdElement) => string
    set_default: (self: IXsdElement, value: string) => void
    get_final: (self: IXsdElement) => string
    set_final: (self: IXsdElement, value: string) => void
    get_fixed: (self: IXsdElement) => string
    set_fixed: (self: IXsdElement, value: string) => void
    get_form: (self: IXsdElement) => string
    set_form: (self: IXsdElement, value: string) => void
    get_id: (self: IXsdElement) => string | null
    set_id: (self: IXsdElement, value: string | null) => void
    get_maxOccurs: (self: IXsdElement) => string
    set_maxOccurs: (self: IXsdElement, value: string) => void
    get_minOccurs: (self: IXsdElement) => string
    set_minOccurs: (self: IXsdElement, value: string) => void
    get_name: (self: IXsdElement) => string
    set_name: (self: IXsdElement, value: string) => void
    get_nillable: (self: IXsdElement) => boolean
    set_nillable: (self: IXsdElement, value: boolean) => void
    get_ref: (self: IXsdElement) => string
    set_ref: (self: IXsdElement, value: string) => void
    get_substitution_group: (self: IXsdElement) => DomTokenList
    set_substitution_group: (self: IXsdElement, value: DomTokenList) => void
    get_target_namespace: (self: IXsdElement) => string
    set_target_namespace: (self: IXsdElement, value: string) => void
    get_object_type: (self: IXsdElement) => string
    set_object_type: (self: IXsdElement, value: string) => void
    get_anotation: (self: IXsdElement) => IXsdAnnotation
    set_anotation: (self: IXsdElement, value: IXsdAnnotation) => void
    get_simple_type: (self: IXsdElement) => IXsdSimpleType
    set_simple_type: (self: IXsdElement, value: IXsdSimpleType) => void
    get_complex_type: (self: IXsdElement) => IXsdComplexType
    set_complex_type: (self: IXsdElement, value: IXsdComplexType) => void
}

abstract class IXsdElementIface {

    // Own properties of GXml-0.20.GXml.IXsdElementIface

    static name: string
}

interface IXsdAnnotationIface {
}

abstract class IXsdAnnotationIface {

    // Own properties of GXml-0.20.GXml.IXsdAnnotationIface

    static name: string
}

interface IXsdBaseContentIface {

    // Own fields of GXml-0.20.GXml.IXsdBaseContentIface

    get_anotation: (self: IXsdBaseContent) => IXsdAnnotation
    set_anotation: (self: IXsdBaseContent, value: IXsdAnnotation) => void
}

abstract class IXsdBaseContentIface {

    // Own properties of GXml-0.20.GXml.IXsdBaseContentIface

    static name: string
}

interface IXsdSimpleContentIface {
}

abstract class IXsdSimpleContentIface {

    // Own properties of GXml-0.20.GXml.IXsdSimpleContentIface

    static name: string
}

interface IXsdComplexContentIface {
}

abstract class IXsdComplexContentIface {

    // Own properties of GXml-0.20.GXml.IXsdComplexContentIface

    static name: string
}

interface IXsdOpenContentIface {
}

abstract class IXsdOpenContentIface {

    // Own properties of GXml-0.20.GXml.IXsdOpenContentIface

    static name: string
}

interface IXsdBaseAttributeIface {

    // Own fields of GXml-0.20.GXml.IXsdBaseAttributeIface

    get_anotation: (self: IXsdBaseAttribute) => IXsdAnnotation
    set_anotation: (self: IXsdBaseAttribute, value: IXsdAnnotation) => void
}

abstract class IXsdBaseAttributeIface {

    // Own properties of GXml-0.20.GXml.IXsdBaseAttributeIface

    static name: string
}

interface IXsdAttributeIface {
}

abstract class IXsdAttributeIface {

    // Own properties of GXml-0.20.GXml.IXsdAttributeIface

    static name: string
}

interface IXsdAttributeGroupIface {
}

abstract class IXsdAttributeGroupIface {

    // Own properties of GXml-0.20.GXml.IXsdAttributeGroupIface

    static name: string
}

interface IXsdListIface {

    // Own fields of GXml-0.20.GXml.IXsdListIface

    get_item: (self: IXsdList, index: number) => DomElement | null
    append: (self: IXsdList, element: DomElement) => void
    remove: (self: IXsdList, index: number) => void
    index_of: (self: IXsdList, element: DomElement) => number
    get_element: (self: IXsdList) => DomElement
    set_element: (self: IXsdList, value: DomElement) => void
    get_items_type: (self: IXsdList) => GObject.GType
    set_items_type: (self: IXsdList, value: GObject.GType) => void
    get_items_name: (self: IXsdList) => GObject.GType
    set_items_name: (self: IXsdList, value: GObject.GType) => void
    get_length: (self: IXsdList) => number
}

abstract class IXsdListIface {

    // Own properties of GXml-0.20.GXml.IXsdListIface

    static name: string
}

interface IXsdListElementsIface {
}

abstract class IXsdListElementsIface {

    // Own properties of GXml-0.20.GXml.IXsdListElementsIface

    static name: string
}

interface IXsdListSimpleTypesIface {
}

abstract class IXsdListSimpleTypesIface {

    // Own properties of GXml-0.20.GXml.IXsdListSimpleTypesIface

    static name: string
}

interface IXsdListComplexTypesIface {
}

abstract class IXsdListComplexTypesIface {

    // Own properties of GXml-0.20.GXml.IXsdListComplexTypesIface

    static name: string
}

interface IXsdListAttributesIface {
}

abstract class IXsdListAttributesIface {

    // Own properties of GXml-0.20.GXml.IXsdListAttributesIface

    static name: string
}

interface IXsdListAttributesGroupIface {
}

abstract class IXsdListAttributesGroupIface {

    // Own properties of GXml-0.20.GXml.IXsdListAttributesGroupIface

    static name: string
}

interface IXsdListTypeRestrictionEnumerationsIface {
}

abstract class IXsdListTypeRestrictionEnumerationsIface {

    // Own properties of GXml-0.20.GXml.IXsdListTypeRestrictionEnumerationsIface

    static name: string
}

interface IXsdListTypeRestrictionWhiteSpacesIface {
}

abstract class IXsdListTypeRestrictionWhiteSpacesIface {

    // Own properties of GXml-0.20.GXml.IXsdListTypeRestrictionWhiteSpacesIface

    static name: string
}

interface ObjectIface {

    // Own fields of GXml-0.20.GXml.ObjectIface

    get_properties_list: (self: Object) => GObject.ParamSpec[]
    find_property_name: (self: Object, nick: string) => GObject.ParamSpec | null
    find_object_property_name: (self: Object, pname: string) => GObject.ParamSpec | null
    get_property_element_list: (self: Object) => GObject.ParamSpec[]
    get_property_string: (self: Object, prop: GObject.ParamSpec) => string | null
    get_attribute: (self: Object, name: string) => string | null
    find_property: (self: Object, name: string) => Property | null
    set_attribute: (self: Object, name: string, val: string) => boolean
    get_child: (self: Object, name: string) => DomElement | null
    find_elements: (self: Object, name: string) => DomElementList
    remove_attribute: (self: Object, name: string) => boolean
    set_instance_property: (self: Object, name: string) => boolean
    clean_property_elements: (self: Object, name: string) => void
}

abstract class ObjectIface {

    // Own properties of GXml-0.20.GXml.ObjectIface

    static name: string
}

interface ParserIface {

    // Own fields of GXml-0.20.GXml.ParserIface

    write_file: (self: Parser, file: Gio.File) => void
    write_file_async: (self: Parser, file: Gio.File, _callback_: Gio.AsyncReadyCallback | null) => void
    write_file_finish: (self: Parser, _res_: Gio.AsyncResult) => void
    write_string: (self: Parser) => string
    write_string_async: (self: Parser, _callback_: Gio.AsyncReadyCallback | null) => void
    write_string_finish: (self: Parser, _res_: Gio.AsyncResult) => string
    write_stream: (self: Parser, stream: Gio.OutputStream) => void
    write_stream_async: (self: Parser, stream: Gio.OutputStream, _callback_: Gio.AsyncReadyCallback | null) => void
    write_stream_finish: (self: Parser, _res_: Gio.AsyncResult) => void
    read_file: (self: Parser, file: Gio.File) => void
    read_file_async: (self: Parser, file: Gio.File, _callback_: Gio.AsyncReadyCallback | null) => void
    read_file_finish: (self: Parser, _res_: Gio.AsyncResult) => void
    read_stream: (self: Parser, stream: Gio.InputStream) => void
    read_stream_async: (self: Parser, stream: Gio.InputStream, _callback_: Gio.AsyncReadyCallback | null) => void
    read_stream_finish: (self: Parser, _res_: Gio.AsyncResult) => void
    read_string: (self: Parser, str: string) => void
    read_string_async: (self: Parser, str: string, _callback_: Gio.AsyncReadyCallback | null) => void
    read_string_finish: (self: Parser, _res_: Gio.AsyncResult) => void
    create_stream: (self: Parser) => Gio.InputStream
    create_stream_async: (self: Parser, _callback_: Gio.AsyncReadyCallback | null) => void
    create_stream_finish: (self: Parser, _res_: Gio.AsyncResult) => Gio.InputStream
    read_child_nodes: (self: Parser, parent: DomNode) => void
    read_child_nodes_async: (self: Parser, parent: DomNode, _callback_: Gio.AsyncReadyCallback | null) => void
    read_child_nodes_finish: (self: Parser, _res_: Gio.AsyncResult) => void
    read_child_node: (self: Parser, parent: DomNode) => boolean
    read_child_element: (self: Parser, parent: DomNode) => boolean
    read_element_property: (self: Parser, parent: DomNode) => [ /* returnType */ boolean, /* element */ DomNode ]
    add_element_collection: (self: Parser, parent: DomNode) => [ /* returnType */ boolean, /* element */ DomNode ]
    read_child_nodes_stream: (self: Parser, istream: Gio.InputStream) => void
    read_child_nodes_string: (self: Parser, str: string) => void
    read_unparsed: (self: Parser) => string
    move_next_node: (self: Parser) => boolean
    current_is_empty_element: (self: Parser) => boolean
    current_is_element: (self: Parser) => boolean
    current_is_document: (self: Parser) => boolean
    current_node_name: (self: Parser) => string
    create_element: (self: Parser, parent: DomNode) => DomElement | null
    read_element: (self: Parser, element: DomElement) => void
    get_backup: (self: Parser) => boolean
    set_backup: (self: Parser, value: boolean) => void
    get_indent: (self: Parser) => boolean
    set_indent: (self: Parser, value: boolean) => void
    get_cancellable: (self: Parser) => Gio.Cancellable | null
    set_cancellable: (self: Parser, value: Gio.Cancellable | null) => void
    get_node: (self: Parser) => DomNode
    get_types: (self: Parser) => GLib.HashTable
}

abstract class ParserIface {

    // Own properties of GXml-0.20.GXml.ParserIface

    static name: string
}

interface PropertyIface {

    // Own fields of GXml-0.20.GXml.PropertyIface

    validate_value: (self: Property, val: string | null) => boolean
    get_value: (self: Property) => string | null
    set_value: (self: Property, value: string | null) => void
}

abstract class PropertyIface {

    // Own properties of GXml-0.20.GXml.PropertyIface

    static name: string
}

interface XPathContextIface {

    // Own fields of GXml-0.20.GXml.XPathContextIface

    evaluate: (self: XPathContext, expression: string, resolver: Gee.Map | null) => XPathObject
}

abstract class XPathContextIface {

    // Own properties of GXml-0.20.GXml.XPathContextIface

    static name: string
}

interface XPathObjectIface {

    // Own fields of GXml-0.20.GXml.XPathObjectIface

    get_object_type: (self: XPathObject) => XPathObjectType
    get_boolean_value: (self: XPathObject) => boolean
    get_string_value: (self: XPathObject) => string
    get_number_value: (self: XPathObject) => number
    get_nodeset: (self: XPathObject) => DomHTMLCollection
}

abstract class XPathObjectIface {

    // Own properties of GXml-0.20.GXml.XPathObjectIface

    static name: string
}

}
export default GXml;