goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3576__auto____2076 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____2076))
{return or__3576__auto____2076;
} else
{var or__3576__auto____2077 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____2077))
{return or__3576__auto____2077;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return goog.global['Error'].call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2078 = coll;

if(cljs.core.truth_(and__3574__auto____2078))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____2078;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____2079 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2079))
{return or__3576__auto____2079;
} else
{var or__3576__auto____2080 = (_count["_"]);

if(cljs.core.truth_(or__3576__auto____2080))
{return or__3576__auto____2080;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2081 = coll;

if(cljs.core.truth_(and__3574__auto____2081))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____2081;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____2082 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2082))
{return or__3576__auto____2082;
} else
{var or__3576__auto____2083 = (_empty["_"]);

if(cljs.core.truth_(or__3576__auto____2083))
{return or__3576__auto____2083;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____2084 = coll;

if(cljs.core.truth_(and__3574__auto____2084))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____2084;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____2085 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2085))
{return or__3576__auto____2085;
} else
{var or__3576__auto____2086 = (_conj["_"]);

if(cljs.core.truth_(or__3576__auto____2086))
{return or__3576__auto____2086;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2093 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____2087 = coll;

if(cljs.core.truth_(and__3574__auto____2087))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2087;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____2088 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2088))
{return or__3576__auto____2088;
} else
{var or__3576__auto____2089 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2089))
{return or__3576__auto____2089;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2094 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2090 = coll;

if(cljs.core.truth_(and__3574__auto____2090))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2090;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____2091 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2091))
{return or__3576__auto____2091;
} else
{var or__3576__auto____2092 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2092))
{return or__3576__auto____2092;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2093.call(this,coll,n);
case  3 :
return _nth__2094.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2096 = coll;

if(cljs.core.truth_(and__3574__auto____2096))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____2096;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____2097 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2097))
{return or__3576__auto____2097;
} else
{var or__3576__auto____2098 = (_first["_"]);

if(cljs.core.truth_(or__3576__auto____2098))
{return or__3576__auto____2098;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2099 = coll;

if(cljs.core.truth_(and__3574__auto____2099))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____2099;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____2100 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2100))
{return or__3576__auto____2100;
} else
{var or__3576__auto____2101 = (_rest["_"]);

if(cljs.core.truth_(or__3576__auto____2101))
{return or__3576__auto____2101;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2108 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____2102 = o;

if(cljs.core.truth_(and__3574__auto____2102))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2102;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____2103 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2103))
{return or__3576__auto____2103;
} else
{var or__3576__auto____2104 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2104))
{return or__3576__auto____2104;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2109 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2105 = o;

if(cljs.core.truth_(and__3574__auto____2105))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2105;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____2106 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2106))
{return or__3576__auto____2106;
} else
{var or__3576__auto____2107 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2107))
{return or__3576__auto____2107;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2108.call(this,o,k);
case  3 :
return _lookup__2109.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2111 = coll;

if(cljs.core.truth_(and__3574__auto____2111))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____2111;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____2112 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2112))
{return or__3576__auto____2112;
} else
{var or__3576__auto____2113 = (_contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2113))
{return or__3576__auto____2113;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____2114 = coll;

if(cljs.core.truth_(and__3574__auto____2114))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____2114;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____2115 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2115))
{return or__3576__auto____2115;
} else
{var or__3576__auto____2116 = (_assoc["_"]);

if(cljs.core.truth_(or__3576__auto____2116))
{return or__3576__auto____2116;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2117 = coll;

if(cljs.core.truth_(and__3574__auto____2117))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____2117;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____2118 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2118))
{return or__3576__auto____2118;
} else
{var or__3576__auto____2119 = (_dissoc["_"]);

if(cljs.core.truth_(or__3576__auto____2119))
{return or__3576__auto____2119;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____2120 = coll;

if(cljs.core.truth_(and__3574__auto____2120))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____2120;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____2121 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2121))
{return or__3576__auto____2121;
} else
{var or__3576__auto____2122 = (_disjoin["_"]);

if(cljs.core.truth_(or__3576__auto____2122))
{return or__3576__auto____2122;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2123 = coll;

if(cljs.core.truth_(and__3574__auto____2123))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____2123;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____2124 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2124))
{return or__3576__auto____2124;
} else
{var or__3576__auto____2125 = (_peek["_"]);

if(cljs.core.truth_(or__3576__auto____2125))
{return or__3576__auto____2125;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2126 = coll;

if(cljs.core.truth_(and__3574__auto____2126))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____2126;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____2127 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2127))
{return or__3576__auto____2127;
} else
{var or__3576__auto____2128 = (_pop["_"]);

if(cljs.core.truth_(or__3576__auto____2128))
{return or__3576__auto____2128;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____2129 = coll;

if(cljs.core.truth_(and__3574__auto____2129))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____2129;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____2130 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2130))
{return or__3576__auto____2130;
} else
{var or__3576__auto____2131 = (_assoc_n["_"]);

if(cljs.core.truth_(or__3576__auto____2131))
{return or__3576__auto____2131;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____2132 = o;

if(cljs.core.truth_(and__3574__auto____2132))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____2132;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____2133 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2133))
{return or__3576__auto____2133;
} else
{var or__3576__auto____2134 = (_deref["_"]);

if(cljs.core.truth_(or__3576__auto____2134))
{return or__3576__auto____2134;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____2135 = o;

if(cljs.core.truth_(and__3574__auto____2135))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____2135;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____2136 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2136))
{return or__3576__auto____2136;
} else
{var or__3576__auto____2137 = (_deref_with_timeout["_"]);

if(cljs.core.truth_(or__3576__auto____2137))
{return or__3576__auto____2137;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____2138 = o;

if(cljs.core.truth_(and__3574__auto____2138))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____2138;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____2139 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2139))
{return or__3576__auto____2139;
} else
{var or__3576__auto____2140 = (_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2140))
{return or__3576__auto____2140;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____2141 = o;

if(cljs.core.truth_(and__3574__auto____2141))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____2141;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____2142 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2142))
{return or__3576__auto____2142;
} else
{var or__3576__auto____2143 = (_with_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2143))
{return or__3576__auto____2143;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2150 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____2144 = coll;

if(cljs.core.truth_(and__3574__auto____2144))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2144;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____2145 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2145))
{return or__3576__auto____2145;
} else
{var or__3576__auto____2146 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2146))
{return or__3576__auto____2146;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2151 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____2147 = coll;

if(cljs.core.truth_(and__3574__auto____2147))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2147;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____2148 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2148))
{return or__3576__auto____2148;
} else
{var or__3576__auto____2149 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2149))
{return or__3576__auto____2149;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2150.call(this,coll,f);
case  3 :
return _reduce__2151.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____2153 = o;

if(cljs.core.truth_(and__3574__auto____2153))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____2153;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____2154 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2154))
{return or__3576__auto____2154;
} else
{var or__3576__auto____2155 = (_equiv["_"]);

if(cljs.core.truth_(or__3576__auto____2155))
{return or__3576__auto____2155;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____2156 = o;

if(cljs.core.truth_(and__3574__auto____2156))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____2156;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____2157 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2157))
{return or__3576__auto____2157;
} else
{var or__3576__auto____2158 = (_hash["_"]);

if(cljs.core.truth_(or__3576__auto____2158))
{return or__3576__auto____2158;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2159 = o;

if(cljs.core.truth_(and__3574__auto____2159))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2159;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2160 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2160))
{return or__3576__auto____2160;
} else
{var or__3576__auto____2161 = (_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2161))
{return or__3576__auto____2161;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____2162 = o;

if(cljs.core.truth_(and__3574__auto____2162))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2162;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2163 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2163))
{return or__3576__auto____2163;
} else
{var or__3576__auto____2164 = (_pr_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2164))
{return or__3576__auto____2164;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2165 = d;

if(cljs.core.truth_(and__3574__auto____2165))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2165;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2166 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2166))
{return or__3576__auto____2166;
} else
{var or__3576__auto____2167 = (_realized_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2167))
{return or__3576__auto____2167;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2168 = null;
var G__2168__2169 = (function (_,n){
return null;
});
var G__2168__2170 = (function (_,n,not_found){
return not_found;
});
G__2168 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2168__2169.call(this,_,n);
case  3 :
return G__2168__2170.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2168;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2172 = null;
var G__2172__2173 = (function (_,f){
return f.call(null);
});
var G__2172__2174 = (function (_,f,start){
return start;
});
G__2172 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2172__2173.call(this,_,f);
case  3 :
return G__2172__2174.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2172;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2176 = null;
var G__2176__2177 = (function (o,k){
return null;
});
var G__2176__2178 = (function (o,k,not_found){
return not_found;
});
G__2176 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2176__2177.call(this,o,k);
case  3 :
return G__2176__2178.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2176;
})()
);
goog.global['Date'].prototype.cljs$core$IEquiv$ = true;
goog.global['Date'].prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2186 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2180 = cljs.core._nth.call(null,cicoll,0);
var n__2181 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2181,cljs.core._count.call(null,cicoll))))
{{
var G__2190 = f.call(null,val__2180,cljs.core._nth.call(null,cicoll,n__2181));
var G__2191 = cljs.core.inc.call(null,n__2181);
val__2180 = G__2190;
n__2181 = G__2191;
continue;
}
} else
{return val__2180;
}
break;
}
}
});
var ci_reduce__2187 = (function (cicoll,f,val){
var val__2182 = val;
var n__2183 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2183,cljs.core._count.call(null,cicoll))))
{{
var G__2192 = f.call(null,val__2182,cljs.core._nth.call(null,cicoll,n__2183));
var G__2193 = cljs.core.inc.call(null,n__2183);
val__2182 = G__2192;
n__2183 = G__2193;
continue;
}
} else
{return val__2182;
}
break;
}
});
var ci_reduce__2188 = (function (cicoll,f,val,idx){
var val__2184 = val;
var n__2185 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2185,cljs.core._count.call(null,cicoll))))
{{
var G__2194 = f.call(null,val__2184,cljs.core._nth.call(null,cicoll,n__2185));
var G__2195 = cljs.core.inc.call(null,n__2185);
val__2184 = G__2194;
n__2185 = G__2195;
continue;
}
} else
{return val__2184;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2186.call(this,cicoll,f);
case  3 :
return ci_reduce__2187.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2188.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2202 = null;
var G__2202__2203 = (function (_,f){
var this__2196 = this;
return cljs.core.ci_reduce.call(null,this__2196.a,f,(this__2196.a[this__2196.i]),cljs.core.inc.call(null,this__2196.i));
});
var G__2202__2204 = (function (_,f,start){
var this__2197 = this;
return cljs.core.ci_reduce.call(null,this__2197.a,f,start,this__2197.i);
});
G__2202 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2202__2203.call(this,_,f);
case  3 :
return G__2202__2204.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2202;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2198 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2199 = this;
return (this__2199.a[this__2199.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2200 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2200.i),this__2200.a.length)))
{return (new cljs.core.IndexedSeq(this__2200.a,cljs.core.inc.call(null,this__2200.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2201 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2206 = null;
var G__2206__2207 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2206__2208 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2206 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2206__2207.call(this,array,f);
case  3 :
return G__2206__2208.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2206;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2210 = null;
var G__2210__2211 = (function (array,k){
return (array[k]);
});
var G__2210__2212 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2210 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2210__2211.call(this,array,k);
case  3 :
return G__2210__2212.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2210;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2214 = null;
var G__2214__2215 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2214__2216 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2214 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2214__2215.call(this,array,n);
case  3 :
return G__2214__2216.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2214;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3726__auto____2218 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2218))
{var s__2219 = temp__3726__auto____2218;

return cljs.core._first.call(null,s__2219);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2220 = cljs.core.next.call(null,s);
s = G__2220;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2221 = cljs.core.seq.call(null,x);
var n__2222 = 0;

while(true){
if(cljs.core.truth_(s__2221))
{{
var G__2223 = cljs.core.next.call(null,s__2221);
var G__2224 = cljs.core.inc.call(null,n__2222);
s__2221 = G__2223;
n__2222 = G__2224;
continue;
}
} else
{return n__2222;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2225 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2226 = (function() { 
var G__2228__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2229 = conj.call(null,coll,x);
var G__2230 = cljs.core.first.call(null,xs);
var G__2231 = cljs.core.next.call(null,xs);
coll = G__2229;
x = G__2230;
xs = G__2231;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2228 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2228__delegate.call(this, coll, x, xs);
};
G__2228.cljs$lang$maxFixedArity = 2;
G__2228.cljs$lang$applyTo = (function (arglist__2232){
var coll = cljs.core.first(arglist__2232);
var x = cljs.core.first(cljs.core.next(arglist__2232));
var xs = cljs.core.rest(cljs.core.next(arglist__2232));
return G__2228__delegate.call(this, coll, x, xs);
});
return G__2228;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2225.call(this,coll,x);
default:
return conj__2226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2226.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2233 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2234 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2233.call(this,coll,n);
case  3 :
return nth__2234.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2236 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2237 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2236.call(this,o,k);
case  3 :
return get__2237.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2240 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2241 = (function() { 
var G__2243__delegate = function (coll,k,v,kvs){
while(true){
var ret__2239 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2244 = ret__2239;
var G__2245 = cljs.core.first.call(null,kvs);
var G__2246 = cljs.core.second.call(null,kvs);
var G__2247 = cljs.core.nnext.call(null,kvs);
coll = G__2244;
k = G__2245;
v = G__2246;
kvs = G__2247;
continue;
}
} else
{return ret__2239;
}
break;
}
};
var G__2243 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2243__delegate.call(this, coll, k, v, kvs);
};
G__2243.cljs$lang$maxFixedArity = 3;
G__2243.cljs$lang$applyTo = (function (arglist__2248){
var coll = cljs.core.first(arglist__2248);
var k = cljs.core.first(cljs.core.next(arglist__2248));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2248)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2248)));
return G__2243__delegate.call(this, coll, k, v, kvs);
});
return G__2243;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2240.call(this,coll,k,v);
default:
return assoc__2241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2241.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2250 = (function (coll){
return coll;
});
var dissoc__2251 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2252 = (function() { 
var G__2254__delegate = function (coll,k,ks){
while(true){
var ret__2249 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2255 = ret__2249;
var G__2256 = cljs.core.first.call(null,ks);
var G__2257 = cljs.core.next.call(null,ks);
coll = G__2255;
k = G__2256;
ks = G__2257;
continue;
}
} else
{return ret__2249;
}
break;
}
};
var G__2254 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2254__delegate.call(this, coll, k, ks);
};
G__2254.cljs$lang$maxFixedArity = 2;
G__2254.cljs$lang$applyTo = (function (arglist__2258){
var coll = cljs.core.first(arglist__2258);
var k = cljs.core.first(cljs.core.next(arglist__2258));
var ks = cljs.core.rest(cljs.core.next(arglist__2258));
return G__2254__delegate.call(this, coll, k, ks);
});
return G__2254;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2250.call(this,coll);
case  2 :
return dissoc__2251.call(this,coll,k);
default:
return dissoc__2252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2252.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__177__auto____2259 = o;

if(cljs.core.truth_((function (){var and__3574__auto____2260 = x__177__auto____2259;

if(cljs.core.truth_(and__3574__auto____2260))
{return x__177__auto____2259.cljs$core$IMeta$;
} else
{return and__3574__auto____2260;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__177__auto____2259);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2262 = (function (coll){
return coll;
});
var disj__2263 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2264 = (function() { 
var G__2266__delegate = function (coll,k,ks){
while(true){
var ret__2261 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2267 = ret__2261;
var G__2268 = cljs.core.first.call(null,ks);
var G__2269 = cljs.core.next.call(null,ks);
coll = G__2267;
k = G__2268;
ks = G__2269;
continue;
}
} else
{return ret__2261;
}
break;
}
};
var G__2266 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2266__delegate.call(this, coll, k, ks);
};
G__2266.cljs$lang$maxFixedArity = 2;
G__2266.cljs$lang$applyTo = (function (arglist__2270){
var coll = cljs.core.first(arglist__2270);
var k = cljs.core.first(cljs.core.next(arglist__2270));
var ks = cljs.core.rest(cljs.core.next(arglist__2270));
return G__2266__delegate.call(this, coll, k, ks);
});
return G__2266;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2262.call(this,coll);
case  2 :
return disj__2263.call(this,coll,k);
default:
return disj__2264.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2264.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__177__auto____2271 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2272 = x__177__auto____2271;

if(cljs.core.truth_(and__3574__auto____2272))
{return x__177__auto____2271.cljs$core$ICollection$;
} else
{return and__3574__auto____2272;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__177__auto____2271);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__177__auto____2273 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2274 = x__177__auto____2273;

if(cljs.core.truth_(and__3574__auto____2274))
{return x__177__auto____2273.cljs$core$ISet$;
} else
{return and__3574__auto____2274;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__177__auto____2273);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__177__auto____2275 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2276 = x__177__auto____2275;

if(cljs.core.truth_(and__3574__auto____2276))
{return x__177__auto____2275.cljs$core$IAssociative$;
} else
{return and__3574__auto____2276;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__177__auto____2275);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__177__auto____2277 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2278 = x__177__auto____2277;

if(cljs.core.truth_(and__3574__auto____2278))
{return x__177__auto____2277.cljs$core$ISequential$;
} else
{return and__3574__auto____2278;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__177__auto____2277);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__177__auto____2279 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2280 = x__177__auto____2279;

if(cljs.core.truth_(and__3574__auto____2280))
{return x__177__auto____2279.cljs$core$ICounted$;
} else
{return and__3574__auto____2280;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__177__auto____2279);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__177__auto____2281 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2282 = x__177__auto____2281;

if(cljs.core.truth_(and__3574__auto____2282))
{return x__177__auto____2281.cljs$core$IMap$;
} else
{return and__3574__auto____2282;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__177__auto____2281);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__177__auto____2283 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2284 = x__177__auto____2283;

if(cljs.core.truth_(and__3574__auto____2284))
{return x__177__auto____2283.cljs$core$IVector$;
} else
{return and__3574__auto____2284;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__177__auto____2283);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2285 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2285.push(key);
}));
return keys__2285;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__177__auto____2286 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2287 = x__177__auto____2286;

if(cljs.core.truth_(and__3574__auto____2287))
{return x__177__auto____2286.cljs$core$ISeq$;
} else
{return and__3574__auto____2287;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__177__auto____2286);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3574__auto____2288 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2288))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2289 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2289))
{return or__3576__auto____2289;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2288;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2290 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2290))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2290;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2291 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2291))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2291;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3574__auto____2292 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2292))
{return (n == n.toFixed());
} else
{return and__3574__auto____2292;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2293 = coll;

if(cljs.core.truth_(and__3574__auto____2293))
{var and__3574__auto____2294 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2294))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2294;
}
} else
{return and__3574__auto____2293;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2299 = (function (x){
return true;
});
var distinct_QMARK___2300 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2301 = (function() { 
var G__2303__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2295 = cljs.core.set([y,x]);
var xs__2296 = more;

while(true){
var x__2297 = cljs.core.first.call(null,xs__2296);
var etc__2298 = cljs.core.next.call(null,xs__2296);

if(cljs.core.truth_(xs__2296))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2295,x__2297)))
{return false;
} else
{{
var G__2304 = cljs.core.conj.call(null,s__2295,x__2297);
var G__2305 = etc__2298;
s__2295 = G__2304;
xs__2296 = G__2305;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2303 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2303__delegate.call(this, x, y, more);
};
G__2303.cljs$lang$maxFixedArity = 2;
G__2303.cljs$lang$applyTo = (function (arglist__2306){
var x = cljs.core.first(arglist__2306);
var y = cljs.core.first(cljs.core.next(arglist__2306));
var more = cljs.core.rest(cljs.core.next(arglist__2306));
return G__2303__delegate.call(this, x, y, more);
});
return G__2303;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2299.call(this,x);
case  2 :
return distinct_QMARK___2300.call(this,x,y);
default:
return distinct_QMARK___2301.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2301.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2307 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2307)))
{return r__2307;
} else
{if(cljs.core.truth_(r__2307))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2309 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2310 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2308 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2308,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2308);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2309.call(this,comp);
case  2 :
return sort__2310.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2312 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2313 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2312.call(this,keyfn,comp);
case  3 :
return sort_by__2313.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2315 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2316 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2315.call(this,f,val);
case  3 :
return reduce__2316.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2322 = (function (f,coll){
var temp__3723__auto____2318 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2318))
{var s__2319 = temp__3723__auto____2318;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2319),cljs.core.next.call(null,s__2319));
} else
{return f.call(null);
}
});
var seq_reduce__2323 = (function (f,val,coll){
var val__2320 = val;
var coll__2321 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2321))
{{
var G__2325 = f.call(null,val__2320,cljs.core.first.call(null,coll__2321));
var G__2326 = cljs.core.next.call(null,coll__2321);
val__2320 = G__2325;
coll__2321 = G__2326;
continue;
}
} else
{return val__2320;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2322.call(this,f,val);
case  3 :
return seq_reduce__2323.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2327 = null;
var G__2327__2328 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2327__2329 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2327 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2327__2328.call(this,coll,f);
case  3 :
return G__2327__2329.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2327;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2331 = (function (){
return 0;
});
var _PLUS___2332 = (function (x){
return x;
});
var _PLUS___2333 = (function (x,y){
return (x + y);
});
var _PLUS___2334 = (function() { 
var G__2336__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2336 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2336__delegate.call(this, x, y, more);
};
G__2336.cljs$lang$maxFixedArity = 2;
G__2336.cljs$lang$applyTo = (function (arglist__2337){
var x = cljs.core.first(arglist__2337);
var y = cljs.core.first(cljs.core.next(arglist__2337));
var more = cljs.core.rest(cljs.core.next(arglist__2337));
return G__2336__delegate.call(this, x, y, more);
});
return G__2336;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2331.call(this);
case  1 :
return _PLUS___2332.call(this,x);
case  2 :
return _PLUS___2333.call(this,x,y);
default:
return _PLUS___2334.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2334.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2338 = (function (x){
return (- x);
});
var ___2339 = (function (x,y){
return (x - y);
});
var ___2340 = (function() { 
var G__2342__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2342 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2342__delegate.call(this, x, y, more);
};
G__2342.cljs$lang$maxFixedArity = 2;
G__2342.cljs$lang$applyTo = (function (arglist__2343){
var x = cljs.core.first(arglist__2343);
var y = cljs.core.first(cljs.core.next(arglist__2343));
var more = cljs.core.rest(cljs.core.next(arglist__2343));
return G__2342__delegate.call(this, x, y, more);
});
return G__2342;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2338.call(this,x);
case  2 :
return ___2339.call(this,x,y);
default:
return ___2340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2340.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2344 = (function (){
return 1;
});
var _STAR___2345 = (function (x){
return x;
});
var _STAR___2346 = (function (x,y){
return (x * y);
});
var _STAR___2347 = (function() { 
var G__2349__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2349 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2349__delegate.call(this, x, y, more);
};
G__2349.cljs$lang$maxFixedArity = 2;
G__2349.cljs$lang$applyTo = (function (arglist__2350){
var x = cljs.core.first(arglist__2350);
var y = cljs.core.first(cljs.core.next(arglist__2350));
var more = cljs.core.rest(cljs.core.next(arglist__2350));
return G__2349__delegate.call(this, x, y, more);
});
return G__2349;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2344.call(this);
case  1 :
return _STAR___2345.call(this,x);
case  2 :
return _STAR___2346.call(this,x,y);
default:
return _STAR___2347.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2347.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2351 = (function (x){
return (1 / x);
});
var _SLASH___2352 = (function (x,y){
return (x / y);
});
var _SLASH___2353 = (function() { 
var G__2355__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2355 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2355__delegate.call(this, x, y, more);
};
G__2355.cljs$lang$maxFixedArity = 2;
G__2355.cljs$lang$applyTo = (function (arglist__2356){
var x = cljs.core.first(arglist__2356);
var y = cljs.core.first(cljs.core.next(arglist__2356));
var more = cljs.core.rest(cljs.core.next(arglist__2356));
return G__2355__delegate.call(this, x, y, more);
});
return G__2355;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2351.call(this,x);
case  2 :
return _SLASH___2352.call(this,x,y);
default:
return _SLASH___2353.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2353.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2357 = (function (x){
return true;
});
var _LT___2358 = (function (x,y){
return (x < y);
});
var _LT___2359 = (function() { 
var G__2361__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2362 = y;
var G__2363 = cljs.core.first.call(null,more);
var G__2364 = cljs.core.next.call(null,more);
x = G__2362;
y = G__2363;
more = G__2364;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2361 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2361__delegate.call(this, x, y, more);
};
G__2361.cljs$lang$maxFixedArity = 2;
G__2361.cljs$lang$applyTo = (function (arglist__2365){
var x = cljs.core.first(arglist__2365);
var y = cljs.core.first(cljs.core.next(arglist__2365));
var more = cljs.core.rest(cljs.core.next(arglist__2365));
return G__2361__delegate.call(this, x, y, more);
});
return G__2361;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2357.call(this,x);
case  2 :
return _LT___2358.call(this,x,y);
default:
return _LT___2359.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2359.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2366 = (function (x){
return true;
});
var _LT__EQ___2367 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2368 = (function() { 
var G__2370__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2371 = y;
var G__2372 = cljs.core.first.call(null,more);
var G__2373 = cljs.core.next.call(null,more);
x = G__2371;
y = G__2372;
more = G__2373;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2370 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2370__delegate.call(this, x, y, more);
};
G__2370.cljs$lang$maxFixedArity = 2;
G__2370.cljs$lang$applyTo = (function (arglist__2374){
var x = cljs.core.first(arglist__2374);
var y = cljs.core.first(cljs.core.next(arglist__2374));
var more = cljs.core.rest(cljs.core.next(arglist__2374));
return G__2370__delegate.call(this, x, y, more);
});
return G__2370;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2366.call(this,x);
case  2 :
return _LT__EQ___2367.call(this,x,y);
default:
return _LT__EQ___2368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2368.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2375 = (function (x){
return true;
});
var _GT___2376 = (function (x,y){
return (x > y);
});
var _GT___2377 = (function() { 
var G__2379__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2380 = y;
var G__2381 = cljs.core.first.call(null,more);
var G__2382 = cljs.core.next.call(null,more);
x = G__2380;
y = G__2381;
more = G__2382;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2379 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2379__delegate.call(this, x, y, more);
};
G__2379.cljs$lang$maxFixedArity = 2;
G__2379.cljs$lang$applyTo = (function (arglist__2383){
var x = cljs.core.first(arglist__2383);
var y = cljs.core.first(cljs.core.next(arglist__2383));
var more = cljs.core.rest(cljs.core.next(arglist__2383));
return G__2379__delegate.call(this, x, y, more);
});
return G__2379;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2375.call(this,x);
case  2 :
return _GT___2376.call(this,x,y);
default:
return _GT___2377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2377.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2384 = (function (x){
return true;
});
var _GT__EQ___2385 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2386 = (function() { 
var G__2388__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2389 = y;
var G__2390 = cljs.core.first.call(null,more);
var G__2391 = cljs.core.next.call(null,more);
x = G__2389;
y = G__2390;
more = G__2391;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2388 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2388__delegate.call(this, x, y, more);
};
G__2388.cljs$lang$maxFixedArity = 2;
G__2388.cljs$lang$applyTo = (function (arglist__2392){
var x = cljs.core.first(arglist__2392);
var y = cljs.core.first(cljs.core.next(arglist__2392));
var more = cljs.core.rest(cljs.core.next(arglist__2392));
return G__2388__delegate.call(this, x, y, more);
});
return G__2388;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2384.call(this,x);
case  2 :
return _GT__EQ___2385.call(this,x,y);
default:
return _GT__EQ___2386.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2386.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2393 = (function (x){
return x;
});
var max__2394 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2395 = (function() { 
var G__2397__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2397 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2397__delegate.call(this, x, y, more);
};
G__2397.cljs$lang$maxFixedArity = 2;
G__2397.cljs$lang$applyTo = (function (arglist__2398){
var x = cljs.core.first(arglist__2398);
var y = cljs.core.first(cljs.core.next(arglist__2398));
var more = cljs.core.rest(cljs.core.next(arglist__2398));
return G__2397__delegate.call(this, x, y, more);
});
return G__2397;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2393.call(this,x);
case  2 :
return max__2394.call(this,x,y);
default:
return max__2395.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2395.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2399 = (function (x){
return x;
});
var min__2400 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2401 = (function() { 
var G__2403__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2403 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2403__delegate.call(this, x, y, more);
};
G__2403.cljs$lang$maxFixedArity = 2;
G__2403.cljs$lang$applyTo = (function (arglist__2404){
var x = cljs.core.first(arglist__2404);
var y = cljs.core.first(cljs.core.next(arglist__2404));
var more = cljs.core.rest(cljs.core.next(arglist__2404));
return G__2403__delegate.call(this, x, y, more);
});
return G__2403;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2399.call(this,x);
case  2 :
return min__2400.call(this,x,y);
default:
return min__2401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2401.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2405 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2405) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2406 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2406));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2407 = (function (){
return Math.random.call(null);
});
var rand__2408 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2407.call(this);
case  1 :
return rand__2408.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2410 = (function (x){
return true;
});
var _EQ__EQ___2411 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2412 = (function() { 
var G__2414__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2415 = y;
var G__2416 = cljs.core.first.call(null,more);
var G__2417 = cljs.core.next.call(null,more);
x = G__2415;
y = G__2416;
more = G__2417;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2414 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2414__delegate.call(this, x, y, more);
};
G__2414.cljs$lang$maxFixedArity = 2;
G__2414.cljs$lang$applyTo = (function (arglist__2418){
var x = cljs.core.first(arglist__2418);
var y = cljs.core.first(cljs.core.next(arglist__2418));
var more = cljs.core.rest(cljs.core.next(arglist__2418));
return G__2414__delegate.call(this, x, y, more);
});
return G__2414;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2410.call(this,x);
case  2 :
return _EQ__EQ___2411.call(this,x,y);
default:
return _EQ__EQ___2412.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2412.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2419 = n;
var xs__2420 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2421 = xs__2420;

if(cljs.core.truth_(and__3574__auto____2421))
{return cljs.core.pos_QMARK_.call(null,n__2419);
} else
{return and__3574__auto____2421;
}
})()))
{{
var G__2422 = cljs.core.dec.call(null,n__2419);
var G__2423 = cljs.core.next.call(null,xs__2420);
n__2419 = G__2422;
xs__2420 = G__2423;
continue;
}
} else
{return xs__2420;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2428 = null;
var G__2428__2429 = (function (coll,n){
var temp__3723__auto____2424 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2424))
{var xs__2425 = temp__3723__auto____2424;

return cljs.core.first.call(null,xs__2425);
} else
{throw "Index out of bounds";
}
});
var G__2428__2430 = (function (coll,n,not_found){
var temp__3723__auto____2426 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2426))
{var xs__2427 = temp__3723__auto____2426;

return cljs.core.first.call(null,xs__2427);
} else
{return not_found;
}
});
G__2428 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2428__2429.call(this,coll,n);
case  3 :
return G__2428__2430.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2428;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2432 = (function (){
return "";
});
var str__2433 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2434 = (function() { 
var G__2436__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2437 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2438 = cljs.core.next.call(null,more);
sb = G__2437;
more = G__2438;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2436 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2436__delegate.call(this, x, ys);
};
G__2436.cljs$lang$maxFixedArity = 1;
G__2436.cljs$lang$applyTo = (function (arglist__2439){
var x = cljs.core.first(arglist__2439);
var ys = cljs.core.rest(arglist__2439);
return G__2436__delegate.call(this, x, ys);
});
return G__2436;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2432.call(this);
case  1 :
return str__2433.call(this,x);
default:
return str__2434.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2434.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2440 = (function (s,start){
return s.substring(start);
});
var subs__2441 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2440.call(this,s,start);
case  3 :
return subs__2441.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2443 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2444 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2443.call(this,ns);
case  2 :
return symbol__2444.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2446 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2447 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2446.call(this,ns);
case  2 :
return keyword__2447.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2449 = cljs.core.seq.call(null,x);
var ys__2450 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2449)))
{return cljs.core.nil_QMARK_.call(null,ys__2450);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2450)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2449),cljs.core.first.call(null,ys__2450))))
{{
var G__2451 = cljs.core.next.call(null,xs__2449);
var G__2452 = cljs.core.next.call(null,ys__2450);
xs__2449 = G__2451;
ys__2450 = G__2452;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2453_SHARP_,p2__2454_SHARP_){
return cljs.core.hash_combine.call(null,p1__2453_SHARP_,cljs.core.hash.call(null,p2__2454_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2455 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2456 = this;
return (new cljs.core.List(this__2456.meta,o,coll,cljs.core.inc.call(null,this__2456.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2457 = this;
return this__2457.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2458 = this;
return this__2458.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2459 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2460 = this;
return this__2460.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2461 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2462 = this;
return (new cljs.core.List(meta,this__2462.first,this__2462.rest,this__2462.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2463 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2464 = this;
return this__2464.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2465 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2466 = this;
return this__2466.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2467 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2468 = this;
return (new cljs.core.List(this__2468.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2469 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2470 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2471 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2472 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2473 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2474 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2475 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2476 = this;
return this__2476.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2477 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2478 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2479){
var items = cljs.core.seq( arglist__2479 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2480 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2481 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2482 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2483 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2483.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2484 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2485 = this;
return this__2485.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2486 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2486.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2486.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2487 = this;
return this__2487.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2488 = this;
return (new cljs.core.Cons(meta,this__2488.first,this__2488.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2489 = null;
var G__2489__2490 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2489__2491 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2489 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2489__2490.call(this,string,f);
case  3 :
return G__2489__2491.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2489;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2493 = null;
var G__2493__2494 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2493__2495 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2493 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2493__2494.call(this,string,k);
case  3 :
return G__2493__2495.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2493;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2497 = null;
var G__2497__2498 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2497__2499 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2497 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2497__2498.call(this,string,n);
case  3 :
return G__2497__2499.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2497;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
goog.global['String']['prototype']['call'] = (function() {
var G__2501 = null;
var G__2501__2502 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2501__2503 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2501 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2501__2502.call(this,_,coll);
case  3 :
return G__2501__2503.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2501;
})()
;
goog.global['String']['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2505 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2505;
} else
{lazy_seq.x = x__2505.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2506 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2507 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2508 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2509 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2509.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2510 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2511 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2512 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2513 = this;
return this__2513.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2514 = this;
return (new cljs.core.LazySeq(meta,this__2514.realized,this__2514.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2515 = cljs.core.array.call(null);

var s__2516 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2516)))
{ary__2515.push(cljs.core.first.call(null,s__2516));
{
var G__2517 = cljs.core.next.call(null,s__2516);
s__2516 = G__2517;
continue;
}
} else
{return ary__2515;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2518 = s;
var i__2519 = n;
var sum__2520 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2521 = cljs.core.pos_QMARK_.call(null,i__2519);

if(cljs.core.truth_(and__3574__auto____2521))
{return cljs.core.seq.call(null,s__2518);
} else
{return and__3574__auto____2521;
}
})()))
{{
var G__2522 = cljs.core.next.call(null,s__2518);
var G__2523 = cljs.core.dec.call(null,i__2519);
var G__2524 = cljs.core.inc.call(null,sum__2520);
s__2518 = G__2522;
i__2519 = G__2523;
sum__2520 = G__2524;
continue;
}
} else
{return sum__2520;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2528 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2529 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2530 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2525 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2525))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2525),concat.call(null,cljs.core.rest.call(null,s__2525),y));
} else
{return y;
}
})));
});
var concat__2531 = (function() { 
var G__2533__delegate = function (x,y,zs){
var cat__2527 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2526 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2526))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2526),cat.call(null,cljs.core.rest.call(null,xys__2526),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2527.call(null,concat.call(null,x,y),zs);
};
var G__2533 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2533__delegate.call(this, x, y, zs);
};
G__2533.cljs$lang$maxFixedArity = 2;
G__2533.cljs$lang$applyTo = (function (arglist__2534){
var x = cljs.core.first(arglist__2534);
var y = cljs.core.first(cljs.core.next(arglist__2534));
var zs = cljs.core.rest(cljs.core.next(arglist__2534));
return G__2533__delegate.call(this, x, y, zs);
});
return G__2533;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2528.call(this);
case  1 :
return concat__2529.call(this,x);
case  2 :
return concat__2530.call(this,x,y);
default:
return concat__2531.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2531.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2535 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2536 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2537 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2538 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2539 = (function() { 
var G__2541__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2541 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2541__delegate.call(this, a, b, c, d, more);
};
G__2541.cljs$lang$maxFixedArity = 4;
G__2541.cljs$lang$applyTo = (function (arglist__2542){
var a = cljs.core.first(arglist__2542);
var b = cljs.core.first(cljs.core.next(arglist__2542));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2542)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2542))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2542))));
return G__2541__delegate.call(this, a, b, c, d, more);
});
return G__2541;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2535.call(this,a);
case  2 :
return list_STAR___2536.call(this,a,b);
case  3 :
return list_STAR___2537.call(this,a,b,c);
case  4 :
return list_STAR___2538.call(this,a,b,c,d);
default:
return list_STAR___2539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2539.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2552 = (function (f,args){
var fixed_arity__2543 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__2543)),fixed_arity__2543)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2553 = (function (f,x,args){
var arglist__2544 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2545 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2544,fixed_arity__2545),fixed_arity__2545)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2544));
} else
{return f.cljs$lang$applyTo(arglist__2544);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2544));
}
});
var apply__2554 = (function (f,x,y,args){
var arglist__2546 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2547 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2546,fixed_arity__2547),fixed_arity__2547)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2546));
} else
{return f.cljs$lang$applyTo(arglist__2546);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2546));
}
});
var apply__2555 = (function (f,x,y,z,args){
var arglist__2548 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2549 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2548,fixed_arity__2549),fixed_arity__2549)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2548));
} else
{return f.cljs$lang$applyTo(arglist__2548);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2548));
}
});
var apply__2556 = (function() { 
var G__2558__delegate = function (f,a,b,c,d,args){
var arglist__2550 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2551 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2550,fixed_arity__2551),fixed_arity__2551)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2550));
} else
{return f.cljs$lang$applyTo(arglist__2550);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2550));
}
};
var G__2558 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2558__delegate.call(this, f, a, b, c, d, args);
};
G__2558.cljs$lang$maxFixedArity = 5;
G__2558.cljs$lang$applyTo = (function (arglist__2559){
var f = cljs.core.first(arglist__2559);
var a = cljs.core.first(cljs.core.next(arglist__2559));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2559)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2559))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2559)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2559)))));
return G__2558__delegate.call(this, f, a, b, c, d, args);
});
return G__2558;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2552.call(this,f,a);
case  3 :
return apply__2553.call(this,f,a,b);
case  4 :
return apply__2554.call(this,f,a,b,c);
case  5 :
return apply__2555.call(this,f,a,b,c,d);
default:
return apply__2556.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2556.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2560){
var obj = cljs.core.first(arglist__2560);
var f = cljs.core.first(cljs.core.next(arglist__2560));
var args = cljs.core.rest(cljs.core.next(arglist__2560));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2561 = (function (x){
return false;
});
var not_EQ___2562 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2563 = (function() { 
var G__2565__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2565 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2565__delegate.call(this, x, y, more);
};
G__2565.cljs$lang$maxFixedArity = 2;
G__2565.cljs$lang$applyTo = (function (arglist__2566){
var x = cljs.core.first(arglist__2566);
var y = cljs.core.first(cljs.core.next(arglist__2566));
var more = cljs.core.rest(cljs.core.next(arglist__2566));
return G__2565__delegate.call(this, x, y, more);
});
return G__2565;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2561.call(this,x);
case  2 :
return not_EQ___2562.call(this,x,y);
default:
return not_EQ___2563.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2563.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2567 = pred;
var G__2568 = cljs.core.next.call(null,coll);
pred = G__2567;
coll = G__2568;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3576__auto____2569 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2569))
{return or__3576__auto____2569;
} else
{{
var G__2570 = pred;
var G__2571 = cljs.core.next.call(null,coll);
pred = G__2570;
coll = G__2571;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2572 = null;
var G__2572__2573 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2572__2574 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2572__2575 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2572__2576 = (function() { 
var G__2578__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2578 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2578__delegate.call(this, x, y, zs);
};
G__2578.cljs$lang$maxFixedArity = 2;
G__2578.cljs$lang$applyTo = (function (arglist__2579){
var x = cljs.core.first(arglist__2579);
var y = cljs.core.first(cljs.core.next(arglist__2579));
var zs = cljs.core.rest(cljs.core.next(arglist__2579));
return G__2578__delegate.call(this, x, y, zs);
});
return G__2578;
})()
;
G__2572 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2572__2573.call(this);
case  1 :
return G__2572__2574.call(this,x);
case  2 :
return G__2572__2575.call(this,x,y);
default:
return G__2572__2576.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2572.cljs$lang$maxFixedArity = 2;
G__2572.cljs$lang$applyTo = G__2572__2576.cljs$lang$applyTo;
return G__2572;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2580__delegate = function (args){
return x;
};
var G__2580 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2580__delegate.call(this, args);
};
G__2580.cljs$lang$maxFixedArity = 0;
G__2580.cljs$lang$applyTo = (function (arglist__2581){
var args = cljs.core.seq( arglist__2581 );;
return G__2580__delegate.call(this, args);
});
return G__2580;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2585 = (function (){
return cljs.core.identity;
});
var comp__2586 = (function (f){
return f;
});
var comp__2587 = (function (f,g){
return (function() {
var G__2591 = null;
var G__2591__2592 = (function (){
return f.call(null,g.call(null));
});
var G__2591__2593 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2591__2594 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2591__2595 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2591__2596 = (function() { 
var G__2598__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2598 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2598__delegate.call(this, x, y, z, args);
};
G__2598.cljs$lang$maxFixedArity = 3;
G__2598.cljs$lang$applyTo = (function (arglist__2599){
var x = cljs.core.first(arglist__2599);
var y = cljs.core.first(cljs.core.next(arglist__2599));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2599)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2599)));
return G__2598__delegate.call(this, x, y, z, args);
});
return G__2598;
})()
;
G__2591 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2591__2592.call(this);
case  1 :
return G__2591__2593.call(this,x);
case  2 :
return G__2591__2594.call(this,x,y);
case  3 :
return G__2591__2595.call(this,x,y,z);
default:
return G__2591__2596.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2591.cljs$lang$maxFixedArity = 3;
G__2591.cljs$lang$applyTo = G__2591__2596.cljs$lang$applyTo;
return G__2591;
})()
});
var comp__2588 = (function (f,g,h){
return (function() {
var G__2600 = null;
var G__2600__2601 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2600__2602 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2600__2603 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2600__2604 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2600__2605 = (function() { 
var G__2607__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2607 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2607__delegate.call(this, x, y, z, args);
};
G__2607.cljs$lang$maxFixedArity = 3;
G__2607.cljs$lang$applyTo = (function (arglist__2608){
var x = cljs.core.first(arglist__2608);
var y = cljs.core.first(cljs.core.next(arglist__2608));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2608)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2608)));
return G__2607__delegate.call(this, x, y, z, args);
});
return G__2607;
})()
;
G__2600 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2600__2601.call(this);
case  1 :
return G__2600__2602.call(this,x);
case  2 :
return G__2600__2603.call(this,x,y);
case  3 :
return G__2600__2604.call(this,x,y,z);
default:
return G__2600__2605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2600.cljs$lang$maxFixedArity = 3;
G__2600.cljs$lang$applyTo = G__2600__2605.cljs$lang$applyTo;
return G__2600;
})()
});
var comp__2589 = (function() { 
var G__2609__delegate = function (f1,f2,f3,fs){
var fs__2582 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2610__delegate = function (args){
var ret__2583 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2582),args);
var fs__2584 = cljs.core.next.call(null,fs__2582);

while(true){
if(cljs.core.truth_(fs__2584))
{{
var G__2611 = cljs.core.first.call(null,fs__2584).call(null,ret__2583);
var G__2612 = cljs.core.next.call(null,fs__2584);
ret__2583 = G__2611;
fs__2584 = G__2612;
continue;
}
} else
{return ret__2583;
}
break;
}
};
var G__2610 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2610__delegate.call(this, args);
};
G__2610.cljs$lang$maxFixedArity = 0;
G__2610.cljs$lang$applyTo = (function (arglist__2613){
var args = cljs.core.seq( arglist__2613 );;
return G__2610__delegate.call(this, args);
});
return G__2610;
})()
;
};
var G__2609 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2609__delegate.call(this, f1, f2, f3, fs);
};
G__2609.cljs$lang$maxFixedArity = 3;
G__2609.cljs$lang$applyTo = (function (arglist__2614){
var f1 = cljs.core.first(arglist__2614);
var f2 = cljs.core.first(cljs.core.next(arglist__2614));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2614)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2614)));
return G__2609__delegate.call(this, f1, f2, f3, fs);
});
return G__2609;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2585.call(this);
case  1 :
return comp__2586.call(this,f1);
case  2 :
return comp__2587.call(this,f1,f2);
case  3 :
return comp__2588.call(this,f1,f2,f3);
default:
return comp__2589.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2589.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2615 = (function (f,arg1){
return (function() { 
var G__2620__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2620 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2620__delegate.call(this, args);
};
G__2620.cljs$lang$maxFixedArity = 0;
G__2620.cljs$lang$applyTo = (function (arglist__2621){
var args = cljs.core.seq( arglist__2621 );;
return G__2620__delegate.call(this, args);
});
return G__2620;
})()
;
});
var partial__2616 = (function (f,arg1,arg2){
return (function() { 
var G__2622__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2622 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2622__delegate.call(this, args);
};
G__2622.cljs$lang$maxFixedArity = 0;
G__2622.cljs$lang$applyTo = (function (arglist__2623){
var args = cljs.core.seq( arglist__2623 );;
return G__2622__delegate.call(this, args);
});
return G__2622;
})()
;
});
var partial__2617 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2624__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2624 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2624__delegate.call(this, args);
};
G__2624.cljs$lang$maxFixedArity = 0;
G__2624.cljs$lang$applyTo = (function (arglist__2625){
var args = cljs.core.seq( arglist__2625 );;
return G__2624__delegate.call(this, args);
});
return G__2624;
})()
;
});
var partial__2618 = (function() { 
var G__2626__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2627__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2627 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2627__delegate.call(this, args);
};
G__2627.cljs$lang$maxFixedArity = 0;
G__2627.cljs$lang$applyTo = (function (arglist__2628){
var args = cljs.core.seq( arglist__2628 );;
return G__2627__delegate.call(this, args);
});
return G__2627;
})()
;
};
var G__2626 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2626__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2626.cljs$lang$maxFixedArity = 4;
G__2626.cljs$lang$applyTo = (function (arglist__2629){
var f = cljs.core.first(arglist__2629);
var arg1 = cljs.core.first(cljs.core.next(arglist__2629));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2629)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2629))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2629))));
return G__2626__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2626;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2615.call(this,f,arg1);
case  3 :
return partial__2616.call(this,f,arg1,arg2);
case  4 :
return partial__2617.call(this,f,arg1,arg2,arg3);
default:
return partial__2618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2618.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2630 = (function (f,x){
return (function() {
var G__2634 = null;
var G__2634__2635 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2634__2636 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2634__2637 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2634__2638 = (function() { 
var G__2640__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2640 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2640__delegate.call(this, a, b, c, ds);
};
G__2640.cljs$lang$maxFixedArity = 3;
G__2640.cljs$lang$applyTo = (function (arglist__2641){
var a = cljs.core.first(arglist__2641);
var b = cljs.core.first(cljs.core.next(arglist__2641));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2641)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2641)));
return G__2640__delegate.call(this, a, b, c, ds);
});
return G__2640;
})()
;
G__2634 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2634__2635.call(this,a);
case  2 :
return G__2634__2636.call(this,a,b);
case  3 :
return G__2634__2637.call(this,a,b,c);
default:
return G__2634__2638.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2634.cljs$lang$maxFixedArity = 3;
G__2634.cljs$lang$applyTo = G__2634__2638.cljs$lang$applyTo;
return G__2634;
})()
});
var fnil__2631 = (function (f,x,y){
return (function() {
var G__2642 = null;
var G__2642__2643 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2642__2644 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2642__2645 = (function() { 
var G__2647__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2647 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2647__delegate.call(this, a, b, c, ds);
};
G__2647.cljs$lang$maxFixedArity = 3;
G__2647.cljs$lang$applyTo = (function (arglist__2648){
var a = cljs.core.first(arglist__2648);
var b = cljs.core.first(cljs.core.next(arglist__2648));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2648)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2648)));
return G__2647__delegate.call(this, a, b, c, ds);
});
return G__2647;
})()
;
G__2642 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2642__2643.call(this,a,b);
case  3 :
return G__2642__2644.call(this,a,b,c);
default:
return G__2642__2645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2642.cljs$lang$maxFixedArity = 3;
G__2642.cljs$lang$applyTo = G__2642__2645.cljs$lang$applyTo;
return G__2642;
})()
});
var fnil__2632 = (function (f,x,y,z){
return (function() {
var G__2649 = null;
var G__2649__2650 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2649__2651 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2649__2652 = (function() { 
var G__2654__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2654 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2654__delegate.call(this, a, b, c, ds);
};
G__2654.cljs$lang$maxFixedArity = 3;
G__2654.cljs$lang$applyTo = (function (arglist__2655){
var a = cljs.core.first(arglist__2655);
var b = cljs.core.first(cljs.core.next(arglist__2655));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2655)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2655)));
return G__2654__delegate.call(this, a, b, c, ds);
});
return G__2654;
})()
;
G__2649 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2649__2650.call(this,a,b);
case  3 :
return G__2649__2651.call(this,a,b,c);
default:
return G__2649__2652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2649.cljs$lang$maxFixedArity = 3;
G__2649.cljs$lang$applyTo = G__2649__2652.cljs$lang$applyTo;
return G__2649;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2630.call(this,f,x);
case  3 :
return fnil__2631.call(this,f,x,y);
case  4 :
return fnil__2632.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__2658 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2656 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2656))
{var s__2657 = temp__3726__auto____2656;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2657)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2657)));
} else
{return null;
}
})));
});

return mapi__2658.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2659 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2659))
{var s__2660 = temp__3726__auto____2659;

var x__2661 = f.call(null,cljs.core.first.call(null,s__2660));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2661)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2660));
} else
{return cljs.core.cons.call(null,x__2661,keep.call(null,f,cljs.core.rest.call(null,s__2660)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__2671 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2668 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2668))
{var s__2669 = temp__3726__auto____2668;

var x__2670 = f.call(null,idx,cljs.core.first.call(null,s__2669));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2670)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2669));
} else
{return cljs.core.cons.call(null,x__2670,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2669)));
}
} else
{return null;
}
})));
});

return keepi__2671.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__2716 = (function (p){
return (function() {
var ep1 = null;
var ep1__2721 = (function (){
return true;
});
var ep1__2722 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2723 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2678 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2678))
{return p.call(null,y);
} else
{return and__3574__auto____2678;
}
})());
});
var ep1__2724 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2679 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2679))
{var and__3574__auto____2680 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____2680))
{return p.call(null,z);
} else
{return and__3574__auto____2680;
}
} else
{return and__3574__auto____2679;
}
})());
});
var ep1__2725 = (function() { 
var G__2727__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2681 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2681))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____2681;
}
})());
};
var G__2727 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2727__delegate.call(this, x, y, z, args);
};
G__2727.cljs$lang$maxFixedArity = 3;
G__2727.cljs$lang$applyTo = (function (arglist__2728){
var x = cljs.core.first(arglist__2728);
var y = cljs.core.first(cljs.core.next(arglist__2728));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2728)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2728)));
return G__2727__delegate.call(this, x, y, z, args);
});
return G__2727;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2721.call(this);
case  1 :
return ep1__2722.call(this,x);
case  2 :
return ep1__2723.call(this,x,y);
case  3 :
return ep1__2724.call(this,x,y,z);
default:
return ep1__2725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2725.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2717 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2729 = (function (){
return true;
});
var ep2__2730 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2682 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2682))
{return p2.call(null,x);
} else
{return and__3574__auto____2682;
}
})());
});
var ep2__2731 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2683 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2683))
{var and__3574__auto____2684 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2684))
{var and__3574__auto____2685 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2685))
{return p2.call(null,y);
} else
{return and__3574__auto____2685;
}
} else
{return and__3574__auto____2684;
}
} else
{return and__3574__auto____2683;
}
})());
});
var ep2__2732 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2686 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2686))
{var and__3574__auto____2687 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2687))
{var and__3574__auto____2688 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2688))
{var and__3574__auto____2689 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2689))
{var and__3574__auto____2690 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2690))
{return p2.call(null,z);
} else
{return and__3574__auto____2690;
}
} else
{return and__3574__auto____2689;
}
} else
{return and__3574__auto____2688;
}
} else
{return and__3574__auto____2687;
}
} else
{return and__3574__auto____2686;
}
})());
});
var ep2__2733 = (function() { 
var G__2735__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2691 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2691))
{return cljs.core.every_QMARK_.call(null,(function (p1__2662_SHARP_){
var and__3574__auto____2692 = p1.call(null,p1__2662_SHARP_);

if(cljs.core.truth_(and__3574__auto____2692))
{return p2.call(null,p1__2662_SHARP_);
} else
{return and__3574__auto____2692;
}
}),args);
} else
{return and__3574__auto____2691;
}
})());
};
var G__2735 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2735__delegate.call(this, x, y, z, args);
};
G__2735.cljs$lang$maxFixedArity = 3;
G__2735.cljs$lang$applyTo = (function (arglist__2736){
var x = cljs.core.first(arglist__2736);
var y = cljs.core.first(cljs.core.next(arglist__2736));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2736)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2736)));
return G__2735__delegate.call(this, x, y, z, args);
});
return G__2735;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2729.call(this);
case  1 :
return ep2__2730.call(this,x);
case  2 :
return ep2__2731.call(this,x,y);
case  3 :
return ep2__2732.call(this,x,y,z);
default:
return ep2__2733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__2733.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2718 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2737 = (function (){
return true;
});
var ep3__2738 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2693 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2693))
{var and__3574__auto____2694 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2694))
{return p3.call(null,x);
} else
{return and__3574__auto____2694;
}
} else
{return and__3574__auto____2693;
}
})());
});
var ep3__2739 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2695 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2695))
{var and__3574__auto____2696 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2696))
{var and__3574__auto____2697 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2697))
{var and__3574__auto____2698 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2698))
{var and__3574__auto____2699 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2699))
{return p3.call(null,y);
} else
{return and__3574__auto____2699;
}
} else
{return and__3574__auto____2698;
}
} else
{return and__3574__auto____2697;
}
} else
{return and__3574__auto____2696;
}
} else
{return and__3574__auto____2695;
}
})());
});
var ep3__2740 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2700 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2700))
{var and__3574__auto____2701 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2701))
{var and__3574__auto____2702 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2702))
{var and__3574__auto____2703 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2703))
{var and__3574__auto____2704 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2704))
{var and__3574__auto____2705 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____2705))
{var and__3574__auto____2706 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2706))
{var and__3574__auto____2707 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____2707))
{return p3.call(null,z);
} else
{return and__3574__auto____2707;
}
} else
{return and__3574__auto____2706;
}
} else
{return and__3574__auto____2705;
}
} else
{return and__3574__auto____2704;
}
} else
{return and__3574__auto____2703;
}
} else
{return and__3574__auto____2702;
}
} else
{return and__3574__auto____2701;
}
} else
{return and__3574__auto____2700;
}
})());
});
var ep3__2741 = (function() { 
var G__2743__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2708 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2708))
{return cljs.core.every_QMARK_.call(null,(function (p1__2663_SHARP_){
var and__3574__auto____2709 = p1.call(null,p1__2663_SHARP_);

if(cljs.core.truth_(and__3574__auto____2709))
{var and__3574__auto____2710 = p2.call(null,p1__2663_SHARP_);

if(cljs.core.truth_(and__3574__auto____2710))
{return p3.call(null,p1__2663_SHARP_);
} else
{return and__3574__auto____2710;
}
} else
{return and__3574__auto____2709;
}
}),args);
} else
{return and__3574__auto____2708;
}
})());
};
var G__2743 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2743__delegate.call(this, x, y, z, args);
};
G__2743.cljs$lang$maxFixedArity = 3;
G__2743.cljs$lang$applyTo = (function (arglist__2744){
var x = cljs.core.first(arglist__2744);
var y = cljs.core.first(cljs.core.next(arglist__2744));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2744)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2744)));
return G__2743__delegate.call(this, x, y, z, args);
});
return G__2743;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2737.call(this);
case  1 :
return ep3__2738.call(this,x);
case  2 :
return ep3__2739.call(this,x,y);
case  3 :
return ep3__2740.call(this,x,y,z);
default:
return ep3__2741.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__2741.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2719 = (function() { 
var G__2745__delegate = function (p1,p2,p3,ps){
var ps__2711 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2746 = (function (){
return true;
});
var epn__2747 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2664_SHARP_){
return p1__2664_SHARP_.call(null,x);
}),ps__2711);
});
var epn__2748 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2665_SHARP_){
var and__3574__auto____2712 = p1__2665_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2712))
{return p1__2665_SHARP_.call(null,y);
} else
{return and__3574__auto____2712;
}
}),ps__2711);
});
var epn__2749 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2666_SHARP_){
var and__3574__auto____2713 = p1__2666_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2713))
{var and__3574__auto____2714 = p1__2666_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____2714))
{return p1__2666_SHARP_.call(null,z);
} else
{return and__3574__auto____2714;
}
} else
{return and__3574__auto____2713;
}
}),ps__2711);
});
var epn__2750 = (function() { 
var G__2752__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2715 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2715))
{return cljs.core.every_QMARK_.call(null,(function (p1__2667_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2667_SHARP_,args);
}),ps__2711);
} else
{return and__3574__auto____2715;
}
})());
};
var G__2752 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2752__delegate.call(this, x, y, z, args);
};
G__2752.cljs$lang$maxFixedArity = 3;
G__2752.cljs$lang$applyTo = (function (arglist__2753){
var x = cljs.core.first(arglist__2753);
var y = cljs.core.first(cljs.core.next(arglist__2753));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2753)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2753)));
return G__2752__delegate.call(this, x, y, z, args);
});
return G__2752;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2746.call(this);
case  1 :
return epn__2747.call(this,x);
case  2 :
return epn__2748.call(this,x,y);
case  3 :
return epn__2749.call(this,x,y,z);
default:
return epn__2750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__2750.cljs$lang$applyTo;
return epn;
})()
};
var G__2745 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2745__delegate.call(this, p1, p2, p3, ps);
};
G__2745.cljs$lang$maxFixedArity = 3;
G__2745.cljs$lang$applyTo = (function (arglist__2754){
var p1 = cljs.core.first(arglist__2754);
var p2 = cljs.core.first(cljs.core.next(arglist__2754));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2754)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2754)));
return G__2745__delegate.call(this, p1, p2, p3, ps);
});
return G__2745;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2716.call(this,p1);
case  2 :
return every_pred__2717.call(this,p1,p2);
case  3 :
return every_pred__2718.call(this,p1,p2,p3);
default:
return every_pred__2719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2719.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__2794 = (function (p){
return (function() {
var sp1 = null;
var sp1__2799 = (function (){
return null;
});
var sp1__2800 = (function (x){
return p.call(null,x);
});
var sp1__2801 = (function (x,y){
var or__3576__auto____2756 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2756))
{return or__3576__auto____2756;
} else
{return p.call(null,y);
}
});
var sp1__2802 = (function (x,y,z){
var or__3576__auto____2757 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2757))
{return or__3576__auto____2757;
} else
{var or__3576__auto____2758 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____2758))
{return or__3576__auto____2758;
} else
{return p.call(null,z);
}
}
});
var sp1__2803 = (function() { 
var G__2805__delegate = function (x,y,z,args){
var or__3576__auto____2759 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2759))
{return or__3576__auto____2759;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__2805 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2805__delegate.call(this, x, y, z, args);
};
G__2805.cljs$lang$maxFixedArity = 3;
G__2805.cljs$lang$applyTo = (function (arglist__2806){
var x = cljs.core.first(arglist__2806);
var y = cljs.core.first(cljs.core.next(arglist__2806));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2806)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2806)));
return G__2805__delegate.call(this, x, y, z, args);
});
return G__2805;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2799.call(this);
case  1 :
return sp1__2800.call(this,x);
case  2 :
return sp1__2801.call(this,x,y);
case  3 :
return sp1__2802.call(this,x,y,z);
default:
return sp1__2803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__2803.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__2795 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2807 = (function (){
return null;
});
var sp2__2808 = (function (x){
var or__3576__auto____2760 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2760))
{return or__3576__auto____2760;
} else
{return p2.call(null,x);
}
});
var sp2__2809 = (function (x,y){
var or__3576__auto____2761 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2761))
{return or__3576__auto____2761;
} else
{var or__3576__auto____2762 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2762))
{return or__3576__auto____2762;
} else
{var or__3576__auto____2763 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2763))
{return or__3576__auto____2763;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2810 = (function (x,y,z){
var or__3576__auto____2764 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2764))
{return or__3576__auto____2764;
} else
{var or__3576__auto____2765 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2765))
{return or__3576__auto____2765;
} else
{var or__3576__auto____2766 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2766))
{return or__3576__auto____2766;
} else
{var or__3576__auto____2767 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2767))
{return or__3576__auto____2767;
} else
{var or__3576__auto____2768 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2768))
{return or__3576__auto____2768;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2811 = (function() { 
var G__2813__delegate = function (x,y,z,args){
var or__3576__auto____2769 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2769))
{return or__3576__auto____2769;
} else
{return cljs.core.some.call(null,(function (p1__2672_SHARP_){
var or__3576__auto____2770 = p1.call(null,p1__2672_SHARP_);

if(cljs.core.truth_(or__3576__auto____2770))
{return or__3576__auto____2770;
} else
{return p2.call(null,p1__2672_SHARP_);
}
}),args);
}
};
var G__2813 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2813__delegate.call(this, x, y, z, args);
};
G__2813.cljs$lang$maxFixedArity = 3;
G__2813.cljs$lang$applyTo = (function (arglist__2814){
var x = cljs.core.first(arglist__2814);
var y = cljs.core.first(cljs.core.next(arglist__2814));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2814)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2814)));
return G__2813__delegate.call(this, x, y, z, args);
});
return G__2813;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2807.call(this);
case  1 :
return sp2__2808.call(this,x);
case  2 :
return sp2__2809.call(this,x,y);
case  3 :
return sp2__2810.call(this,x,y,z);
default:
return sp2__2811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__2811.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__2796 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2815 = (function (){
return null;
});
var sp3__2816 = (function (x){
var or__3576__auto____2771 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2771))
{return or__3576__auto____2771;
} else
{var or__3576__auto____2772 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2772))
{return or__3576__auto____2772;
} else
{return p3.call(null,x);
}
}
});
var sp3__2817 = (function (x,y){
var or__3576__auto____2773 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2773))
{return or__3576__auto____2773;
} else
{var or__3576__auto____2774 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2774))
{return or__3576__auto____2774;
} else
{var or__3576__auto____2775 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2775))
{return or__3576__auto____2775;
} else
{var or__3576__auto____2776 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2776))
{return or__3576__auto____2776;
} else
{var or__3576__auto____2777 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2777))
{return or__3576__auto____2777;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2818 = (function (x,y,z){
var or__3576__auto____2778 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2778))
{return or__3576__auto____2778;
} else
{var or__3576__auto____2779 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2779))
{return or__3576__auto____2779;
} else
{var or__3576__auto____2780 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2780))
{return or__3576__auto____2780;
} else
{var or__3576__auto____2781 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2781))
{return or__3576__auto____2781;
} else
{var or__3576__auto____2782 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2782))
{return or__3576__auto____2782;
} else
{var or__3576__auto____2783 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____2783))
{return or__3576__auto____2783;
} else
{var or__3576__auto____2784 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2784))
{return or__3576__auto____2784;
} else
{var or__3576__auto____2785 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____2785))
{return or__3576__auto____2785;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__2819 = (function() { 
var G__2821__delegate = function (x,y,z,args){
var or__3576__auto____2786 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2786))
{return or__3576__auto____2786;
} else
{return cljs.core.some.call(null,(function (p1__2673_SHARP_){
var or__3576__auto____2787 = p1.call(null,p1__2673_SHARP_);

if(cljs.core.truth_(or__3576__auto____2787))
{return or__3576__auto____2787;
} else
{var or__3576__auto____2788 = p2.call(null,p1__2673_SHARP_);

if(cljs.core.truth_(or__3576__auto____2788))
{return or__3576__auto____2788;
} else
{return p3.call(null,p1__2673_SHARP_);
}
}
}),args);
}
};
var G__2821 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2821__delegate.call(this, x, y, z, args);
};
G__2821.cljs$lang$maxFixedArity = 3;
G__2821.cljs$lang$applyTo = (function (arglist__2822){
var x = cljs.core.first(arglist__2822);
var y = cljs.core.first(cljs.core.next(arglist__2822));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2822)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2822)));
return G__2821__delegate.call(this, x, y, z, args);
});
return G__2821;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2815.call(this);
case  1 :
return sp3__2816.call(this,x);
case  2 :
return sp3__2817.call(this,x,y);
case  3 :
return sp3__2818.call(this,x,y,z);
default:
return sp3__2819.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__2819.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__2797 = (function() { 
var G__2823__delegate = function (p1,p2,p3,ps){
var ps__2789 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2824 = (function (){
return null;
});
var spn__2825 = (function (x){
return cljs.core.some.call(null,(function (p1__2674_SHARP_){
return p1__2674_SHARP_.call(null,x);
}),ps__2789);
});
var spn__2826 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2675_SHARP_){
var or__3576__auto____2790 = p1__2675_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2790))
{return or__3576__auto____2790;
} else
{return p1__2675_SHARP_.call(null,y);
}
}),ps__2789);
});
var spn__2827 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2676_SHARP_){
var or__3576__auto____2791 = p1__2676_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2791))
{return or__3576__auto____2791;
} else
{var or__3576__auto____2792 = p1__2676_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____2792))
{return or__3576__auto____2792;
} else
{return p1__2676_SHARP_.call(null,z);
}
}
}),ps__2789);
});
var spn__2828 = (function() { 
var G__2830__delegate = function (x,y,z,args){
var or__3576__auto____2793 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2793))
{return or__3576__auto____2793;
} else
{return cljs.core.some.call(null,(function (p1__2677_SHARP_){
return cljs.core.some.call(null,p1__2677_SHARP_,args);
}),ps__2789);
}
};
var G__2830 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2830__delegate.call(this, x, y, z, args);
};
G__2830.cljs$lang$maxFixedArity = 3;
G__2830.cljs$lang$applyTo = (function (arglist__2831){
var x = cljs.core.first(arglist__2831);
var y = cljs.core.first(cljs.core.next(arglist__2831));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2831)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2831)));
return G__2830__delegate.call(this, x, y, z, args);
});
return G__2830;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2824.call(this);
case  1 :
return spn__2825.call(this,x);
case  2 :
return spn__2826.call(this,x,y);
case  3 :
return spn__2827.call(this,x,y,z);
default:
return spn__2828.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__2828.cljs$lang$applyTo;
return spn;
})()
};
var G__2823 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2823__delegate.call(this, p1, p2, p3, ps);
};
G__2823.cljs$lang$maxFixedArity = 3;
G__2823.cljs$lang$applyTo = (function (arglist__2832){
var p1 = cljs.core.first(arglist__2832);
var p2 = cljs.core.first(cljs.core.next(arglist__2832));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2832)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2832)));
return G__2823__delegate.call(this, p1, p2, p3, ps);
});
return G__2823;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2794.call(this,p1);
case  2 :
return some_fn__2795.call(this,p1,p2);
case  3 :
return some_fn__2796.call(this,p1,p2,p3);
default:
return some_fn__2797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__2797.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2845 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2833 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2833))
{var s__2834 = temp__3726__auto____2833;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2834)),map.call(null,f,cljs.core.rest.call(null,s__2834)));
} else
{return null;
}
})));
});
var map__2846 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2835 = cljs.core.seq.call(null,c1);
var s2__2836 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2837 = s1__2835;

if(cljs.core.truth_(and__3574__auto____2837))
{return s2__2836;
} else
{return and__3574__auto____2837;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2835),cljs.core.first.call(null,s2__2836)),map.call(null,f,cljs.core.rest.call(null,s1__2835),cljs.core.rest.call(null,s2__2836)));
} else
{return null;
}
})));
});
var map__2847 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2838 = cljs.core.seq.call(null,c1);
var s2__2839 = cljs.core.seq.call(null,c2);
var s3__2840 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____2841 = s1__2838;

if(cljs.core.truth_(and__3574__auto____2841))
{var and__3574__auto____2842 = s2__2839;

if(cljs.core.truth_(and__3574__auto____2842))
{return s3__2840;
} else
{return and__3574__auto____2842;
}
} else
{return and__3574__auto____2841;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2838),cljs.core.first.call(null,s2__2839),cljs.core.first.call(null,s3__2840)),map.call(null,f,cljs.core.rest.call(null,s1__2838),cljs.core.rest.call(null,s2__2839),cljs.core.rest.call(null,s3__2840)));
} else
{return null;
}
})));
});
var map__2848 = (function() { 
var G__2850__delegate = function (f,c1,c2,c3,colls){
var step__2844 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2843 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2843)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2843),step.call(null,map.call(null,cljs.core.rest,ss__2843)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2755_SHARP_){
return cljs.core.apply.call(null,f,p1__2755_SHARP_);
}),step__2844.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__2850 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2850__delegate.call(this, f, c1, c2, c3, colls);
};
G__2850.cljs$lang$maxFixedArity = 4;
G__2850.cljs$lang$applyTo = (function (arglist__2851){
var f = cljs.core.first(arglist__2851);
var c1 = cljs.core.first(cljs.core.next(arglist__2851));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2851)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2851))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2851))));
return G__2850__delegate.call(this, f, c1, c2, c3, colls);
});
return G__2850;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2845.call(this,f,c1);
case  3 :
return map__2846.call(this,f,c1,c2);
case  4 :
return map__2847.call(this,f,c1,c2,c3);
default:
return map__2848.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__2848.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____2852 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2852))
{var s__2853 = temp__3726__auto____2852;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2853),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2853)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__2856 = (function (n,coll){
while(true){
var s__2854 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2855 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2855))
{return s__2854;
} else
{return and__3574__auto____2855;
}
})()))
{{
var G__2857 = cljs.core.dec.call(null,n);
var G__2858 = cljs.core.rest.call(null,s__2854);
n = G__2857;
coll = G__2858;
continue;
}
} else
{return s__2854;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2856.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2859 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2860 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2859.call(this,n);
case  2 :
return drop_last__2860.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__2862 = cljs.core.seq.call(null,coll);
var lead__2863 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2863))
{{
var G__2864 = cljs.core.next.call(null,s__2862);
var G__2865 = cljs.core.next.call(null,lead__2863);
s__2862 = G__2864;
lead__2863 = G__2865;
continue;
}
} else
{return s__2862;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2868 = (function (pred,coll){
while(true){
var s__2866 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2867 = s__2866;

if(cljs.core.truth_(and__3574__auto____2867))
{return pred.call(null,cljs.core.first.call(null,s__2866));
} else
{return and__3574__auto____2867;
}
})()))
{{
var G__2869 = pred;
var G__2870 = cljs.core.rest.call(null,s__2866);
pred = G__2869;
coll = G__2870;
continue;
}
} else
{return s__2866;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2868.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2871 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2871))
{var s__2872 = temp__3726__auto____2871;

return cljs.core.concat.call(null,s__2872,cycle.call(null,s__2872));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__2873 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2874 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2873.call(this,n);
case  2 :
return repeat__2874.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__2876 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2877 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2876.call(this,n);
case  2 :
return repeatedly__2877.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2883 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2879 = cljs.core.seq.call(null,c1);
var s2__2880 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2881 = s1__2879;

if(cljs.core.truth_(and__3574__auto____2881))
{return s2__2880;
} else
{return and__3574__auto____2881;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2879),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2880),interleave.call(null,cljs.core.rest.call(null,s1__2879),cljs.core.rest.call(null,s2__2880))));
} else
{return null;
}
})));
});
var interleave__2884 = (function() { 
var G__2886__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2882 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2882)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2882),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2882)));
} else
{return null;
}
})));
};
var G__2886 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2886__delegate.call(this, c1, c2, colls);
};
G__2886.cljs$lang$maxFixedArity = 2;
G__2886.cljs$lang$applyTo = (function (arglist__2887){
var c1 = cljs.core.first(arglist__2887);
var c2 = cljs.core.first(cljs.core.next(arglist__2887));
var colls = cljs.core.rest(cljs.core.next(arglist__2887));
return G__2886__delegate.call(this, c1, c2, colls);
});
return G__2886;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2883.call(this,c1,c2);
default:
return interleave__2884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__2884.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__2890 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____2888 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2888))
{var coll__2889 = temp__3723__auto____2888;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2889),cat.call(null,cljs.core.rest.call(null,coll__2889),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2890.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2891 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2892 = (function() { 
var G__2894__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__2894 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2894__delegate.call(this, f, coll, colls);
};
G__2894.cljs$lang$maxFixedArity = 2;
G__2894.cljs$lang$applyTo = (function (arglist__2895){
var f = cljs.core.first(arglist__2895);
var coll = cljs.core.first(cljs.core.next(arglist__2895));
var colls = cljs.core.rest(cljs.core.next(arglist__2895));
return G__2894__delegate.call(this, f, coll, colls);
});
return G__2894;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2891.call(this,f,coll);
default:
return mapcat__2892.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__2892.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2896 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2896))
{var s__2897 = temp__3726__auto____2896;

var f__2898 = cljs.core.first.call(null,s__2897);
var r__2899 = cljs.core.rest.call(null,s__2897);

if(cljs.core.truth_(pred.call(null,f__2898)))
{return cljs.core.cons.call(null,f__2898,filter.call(null,pred,r__2899));
} else
{return filter.call(null,pred,r__2899);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__2901 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2901.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2900_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2900_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2908 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__2909 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2902 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2902))
{var s__2903 = temp__3726__auto____2902;

var p__2904 = cljs.core.take.call(null,n,s__2903);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2904))))
{return cljs.core.cons.call(null,p__2904,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2903)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__2910 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2905 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2905))
{var s__2906 = temp__3726__auto____2905;

var p__2907 = cljs.core.take.call(null,n,s__2906);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2907))))
{return cljs.core.cons.call(null,p__2907,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__2906)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__2907,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2908.call(this,n,step);
case  3 :
return partition__2909.call(this,n,step,pad);
case  4 :
return partition__2910.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2916 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__2917 = (function (m,ks,not_found){
var sentinel__2912 = cljs.core.lookup_sentinel;
var m__2913 = m;
var ks__2914 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__2914))
{var m__2915 = cljs.core.get.call(null,m__2913,cljs.core.first.call(null,ks__2914),sentinel__2912);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__2912,m__2915)))
{return not_found;
} else
{{
var G__2919 = sentinel__2912;
var G__2920 = m__2915;
var G__2921 = cljs.core.next.call(null,ks__2914);
sentinel__2912 = G__2919;
m__2913 = G__2920;
ks__2914 = G__2921;
continue;
}
}
} else
{return m__2913;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2916.call(this,m,ks);
case  3 :
return get_in__2917.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__2922,v){
var vec__2923__2924 = p__2922;
var k__2925 = cljs.core.nth.call(null,vec__2923__2924,0,null);
var ks__2926 = cljs.core.nthnext.call(null,vec__2923__2924,1);

if(cljs.core.truth_(ks__2926))
{return cljs.core.assoc.call(null,m,k__2925,assoc_in.call(null,cljs.core.get.call(null,m,k__2925),ks__2926,v));
} else
{return cljs.core.assoc.call(null,m,k__2925,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__2927,f,args){
var vec__2928__2929 = p__2927;
var k__2930 = cljs.core.nth.call(null,vec__2928__2929,0,null);
var ks__2931 = cljs.core.nthnext.call(null,vec__2928__2929,1);

if(cljs.core.truth_(ks__2931))
{return cljs.core.assoc.call(null,m,k__2930,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__2930),ks__2931,f,args));
} else
{return cljs.core.assoc.call(null,m,k__2930,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__2930),args));
}
};
var update_in = function (m,p__2927,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__2927, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__2932){
var m = cljs.core.first(arglist__2932);
var p__2927 = cljs.core.first(cljs.core.next(arglist__2932));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2932)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2932)));
return update_in__delegate.call(this, m, p__2927, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2933 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2934 = this;
var new_array__2935 = cljs.core.aclone.call(null,this__2934.array);

new_array__2935.push(o);
return (new cljs.core.Vector(this__2934.meta,new_array__2935));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2936 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2936.array.length,0)))
{var vector_seq__2937 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__2936.array.length)))
{return cljs.core.cons.call(null,(this__2936.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__2937.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__2938 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2939 = this;
var count__2940 = this__2939.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__2940,0)))
{return (this__2939.array[cljs.core.dec.call(null,count__2940)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2941 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2941.array.length,0)))
{var new_array__2942 = cljs.core.aclone.call(null,this__2941.array);

new_array__2942.pop();
return (new cljs.core.Vector(this__2941.meta,new_array__2942));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2943 = this;
return (new cljs.core.Vector(meta,this__2943.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2944 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__2944.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2958 = null;
var G__2958__2959 = (function (coll,n){
var this__2945 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2946 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2946))
{return cljs.core._LT_.call(null,n,this__2945.array.length);
} else
{return and__3574__auto____2946;
}
})()))
{return (this__2945.array[n]);
} else
{return null;
}
});
var G__2958__2960 = (function (coll,n,not_found){
var this__2947 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2948 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2948))
{return cljs.core._LT_.call(null,n,this__2947.array.length);
} else
{return and__3574__auto____2948;
}
})()))
{return (this__2947.array[n]);
} else
{return not_found;
}
});
G__2958 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2958__2959.call(this,coll,n);
case  3 :
return G__2958__2960.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2958;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2949 = this;
return this__2949.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2962 = null;
var G__2962__2963 = (function (v,f){
var this__2950 = this;
return cljs.core.ci_reduce.call(null,this__2950.array,f);
});
var G__2962__2964 = (function (v,f,start){
var this__2951 = this;
return cljs.core.ci_reduce.call(null,this__2951.array,f,start);
});
G__2962 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__2962__2963.call(this,v,f);
case  3 :
return G__2962__2964.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2962;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2952 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2953 = this;
return this__2953.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2954 = this;
var new_array__2955 = cljs.core.aclone.call(null,this__2954.array);

(new_array__2955[k] = v);
return (new cljs.core.Vector(this__2954.meta,new_array__2955));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2966 = null;
var G__2966__2967 = (function (coll,k){
var this__2956 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__2966__2968 = (function (coll,k,not_found){
var this__2957 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__2966 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2966__2967.call(this,coll,k);
case  3 :
return G__2966__2968.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2966;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__2970 = null;
var G__2970__2971 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2970__2972 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2970 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2970__2971.call(this,_,k);
case  3 :
return G__2970__2972.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2970;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__2974){
var args = cljs.core.seq( arglist__2974 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__2975 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__2976 = array.length;

var i__2977 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2977,len__2976)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__2977]))))
{return i__2977;
} else
{{
var G__2978 = cljs.core._PLUS_.call(null,i__2977,incr);
i__2977 = G__2978;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___2980 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___2981 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____2979 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2979))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2979;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___2980.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___2981.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2984 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2985 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2986 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2986.keys.length)))
{return cljs.core.map.call(null,(function (p1__2983_SHARP_){
return cljs.core.vector.call(null,p1__2983_SHARP_,(this__2986.strobj[p1__2983_SHARP_]));
}),this__2986.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2987 = this;
return (new cljs.core.ObjMap(meta,this__2987.keys,this__2987.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2988 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2989 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2989))
{return this__2988.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2989;
}
})()))
{var new_keys__2990 = cljs.core.aclone.call(null,this__2988.keys);
var new_strobj__2991 = goog.object.clone.call(null,this__2988.strobj);

new_keys__2990.splice(cljs.core.scan_array.call(null,1,k,new_keys__2990),1);
cljs.core.js_delete.call(null,new_strobj__2991,k);
return (new cljs.core.ObjMap(this__2988.meta,new_keys__2990,new_strobj__2991));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2992 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__2992.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2993 = this;
return this__2993.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2994 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2995 = this;
return this__2995.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2996 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__2997 = goog.object.clone.call(null,this__2996.strobj);
var overwrite_QMARK___2998 = new_strobj__2997.hasOwnProperty(k);

(new_strobj__2997[k] = v);
if(cljs.core.truth_(overwrite_QMARK___2998))
{return (new cljs.core.ObjMap(this__2996.meta,this__2996.keys,new_strobj__2997));
} else
{var new_keys__2999 = cljs.core.aclone.call(null,this__2996.keys);

new_keys__2999.push(k);
return (new cljs.core.ObjMap(this__2996.meta,new_keys__2999,new_strobj__2997));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__2996.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3000 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3000.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3003 = null;
var G__3003__3004 = (function (coll,k){
var this__3001 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3003__3005 = (function (coll,k,not_found){
var this__3002 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3002.strobj,(this__3002.strobj[k]),not_found);
});
G__3003 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3003__3004.call(this,coll,k);
case  3 :
return G__3003__3005.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3003;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3008 = null;
var G__3008__3009 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3008__3010 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3008 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3008__3009.call(this,_,k);
case  3 :
return G__3008__3010.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3008;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3012 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3013 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3014 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3014.count)))
{var hashes__3015 = cljs.core.js_keys.call(null,this__3014.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3007_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3014.hashobj[p1__3007_SHARP_])));
}),hashes__3015);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3016 = this;
return (new cljs.core.HashMap(meta,this__3016.count,this__3016.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3017 = this;
var h__3018 = cljs.core.hash.call(null,k);
var bucket__3019 = (this__3017.hashobj[h__3018]);
var i__3020 = (cljs.core.truth_(bucket__3019)?cljs.core.scan_array.call(null,2,k,bucket__3019):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3020)))
{return coll;
} else
{var new_hashobj__3021 = goog.object.clone.call(null,this__3017.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__3019.length)))
{cljs.core.js_delete.call(null,new_hashobj__3021,h__3018);
} else
{var new_bucket__3022 = cljs.core.aclone.call(null,bucket__3019);

new_bucket__3022.splice(i__3020,2);
(new_hashobj__3021[h__3018] = new_bucket__3022);
}
return (new cljs.core.HashMap(this__3017.meta,cljs.core.dec.call(null,this__3017.count),new_hashobj__3021));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3023 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3023.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3024 = this;
return this__3024.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3025 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3026 = this;
return this__3026.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3027 = this;
var h__3028 = cljs.core.hash.call(null,k);
var bucket__3029 = (this__3027.hashobj[h__3028]);

if(cljs.core.truth_(bucket__3029))
{var new_bucket__3030 = cljs.core.aclone.call(null,bucket__3029);
var new_hashobj__3031 = goog.object.clone.call(null,this__3027.hashobj);

(new_hashobj__3031[h__3028] = new_bucket__3030);
var temp__3723__auto____3032 = cljs.core.scan_array.call(null,2,k,new_bucket__3030);

if(cljs.core.truth_(temp__3723__auto____3032))
{var i__3033 = temp__3723__auto____3032;

(new_bucket__3030[cljs.core.inc.call(null,i__3033)] = v);
return (new cljs.core.HashMap(this__3027.meta,this__3027.count,new_hashobj__3031));
} else
{new_bucket__3030.push(k,v);
return (new cljs.core.HashMap(this__3027.meta,cljs.core.inc.call(null,this__3027.count),new_hashobj__3031));
}
} else
{var new_hashobj__3034 = goog.object.clone.call(null,this__3027.hashobj);

(new_hashobj__3034[h__3028] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3027.meta,cljs.core.inc.call(null,this__3027.count),new_hashobj__3034));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3035 = this;
var bucket__3036 = (this__3035.hashobj[cljs.core.hash.call(null,k)]);
var i__3037 = (cljs.core.truth_(bucket__3036)?cljs.core.scan_array.call(null,2,k,bucket__3036):null);

if(cljs.core.truth_(i__3037))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3042 = null;
var G__3042__3043 = (function (coll,k){
var this__3038 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3042__3044 = (function (coll,k,not_found){
var this__3039 = this;
var bucket__3040 = (this__3039.hashobj[cljs.core.hash.call(null,k)]);
var i__3041 = (cljs.core.truth_(bucket__3040)?cljs.core.scan_array.call(null,2,k,bucket__3040):null);

if(cljs.core.truth_(i__3041))
{return (bucket__3040[cljs.core.inc.call(null,i__3041)]);
} else
{return not_found;
}
});
G__3042 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3042__3043.call(this,coll,k);
case  3 :
return G__3042__3044.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3042;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3046 = ks.length;

var i__3047 = 0;
var out__3048 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3047,len__3046)))
{{
var G__3049 = cljs.core.inc.call(null,i__3047);
var G__3050 = cljs.core.assoc.call(null,out__3048,(ks[i__3047]),(vs[i__3047]));
i__3047 = G__3049;
out__3048 = G__3050;
continue;
}
} else
{return out__3048;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3051 = null;
var G__3051__3052 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3051__3053 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3051 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3051__3052.call(this,_,k);
case  3 :
return G__3051__3053.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3051;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3055 = cljs.core.seq.call(null,keyvals);
var out__3056 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3055))
{{
var G__3057 = cljs.core.nnext.call(null,in$__3055);
var G__3058 = cljs.core.assoc.call(null,out__3056,cljs.core.first.call(null,in$__3055),cljs.core.second.call(null,in$__3055));
in$__3055 = G__3057;
out__3056 = G__3058;
continue;
}
} else
{return out__3056;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3059){
var keyvals = cljs.core.seq( arglist__3059 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3060_SHARP_,p2__3061_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____3062 = p1__3060_SHARP_;

if(cljs.core.truth_(or__3576__auto____3062))
{return or__3576__auto____3062;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3061_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3063){
var maps = cljs.core.seq( arglist__3063 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3066 = (function (m,e){
var k__3064 = cljs.core.first.call(null,e);
var v__3065 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3064)))
{return cljs.core.assoc.call(null,m,k__3064,f.call(null,cljs.core.get.call(null,m,k__3064),v__3065));
} else
{return cljs.core.assoc.call(null,m,k__3064,v__3065);
}
});
var merge2__3068 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3066,(function (){var or__3576__auto____3067 = m1;

if(cljs.core.truth_(or__3576__auto____3067))
{return or__3576__auto____3067;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3068,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3069){
var f = cljs.core.first(arglist__3069);
var maps = cljs.core.rest(arglist__3069);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3071 = cljs.core.ObjMap.fromObject([],{});
var keys__3072 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3072))
{var key__3073 = cljs.core.first.call(null,keys__3072);
var entry__3074 = cljs.core.get.call(null,map,key__3073);

{
var G__3075 = (cljs.core.truth_(entry__3074)?cljs.core.assoc.call(null,ret__3071,key__3073,entry__3074):ret__3071);
var G__3076 = cljs.core.next.call(null,keys__3072);
ret__3071 = G__3075;
keys__3072 = G__3076;
continue;
}
} else
{return ret__3071;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3077 = this;
return (new cljs.core.Set(this__3077.meta,cljs.core.dissoc.call(null,this__3077.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3078 = this;
var and__3574__auto____3079 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____3079))
{var and__3574__auto____3080 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____3080))
{return cljs.core.every_QMARK_.call(null,(function (p1__3070_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3070_SHARP_);
}),other);
} else
{return and__3574__auto____3080;
}
} else
{return and__3574__auto____3079;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3081 = this;
return (new cljs.core.Set(this__3081.meta,cljs.core.assoc.call(null,this__3081.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3082 = this;
return cljs.core.keys.call(null,this__3082.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3083 = this;
return (new cljs.core.Set(meta,this__3083.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3084 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3084.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3085 = this;
return this__3085.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3086 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3087 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3090 = null;
var G__3090__3091 = (function (coll,v){
var this__3088 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3090__3092 = (function (coll,v,not_found){
var this__3089 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3089.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3090 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3090__3091.call(this,coll,v);
case  3 :
return G__3090__3092.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3090;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3094 = null;
var G__3094__3095 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3094__3096 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3094 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3094__3095.call(this,_,k);
case  3 :
return G__3094__3096.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3094;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3099 = cljs.core.seq.call(null,coll);
var out__3100 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3099))))
{{
var G__3101 = cljs.core.rest.call(null,in$__3099);
var G__3102 = cljs.core.conj.call(null,out__3100,cljs.core.first.call(null,in$__3099));
in$__3099 = G__3101;
out__3100 = G__3102;
continue;
}
} else
{return out__3100;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3103 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____3104 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____3104))
{var e__3105 = temp__3723__auto____3104;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3105));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3103,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3098_SHARP_){
var temp__3723__auto____3106 = cljs.core.find.call(null,smap,p1__3098_SHARP_);

if(cljs.core.truth_(temp__3723__auto____3106))
{var e__3107 = temp__3723__auto____3106;

return cljs.core.second.call(null,e__3107);
} else
{return p1__3098_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3115 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3108,seen){
while(true){
var vec__3109__3110 = p__3108;
var f__3111 = cljs.core.nth.call(null,vec__3109__3110,0,null);
var xs__3112 = vec__3109__3110;

var temp__3726__auto____3113 = cljs.core.seq.call(null,xs__3112);

if(cljs.core.truth_(temp__3726__auto____3113))
{var s__3114 = temp__3726__auto____3113;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3111)))
{{
var G__3116 = cljs.core.rest.call(null,s__3114);
var G__3117 = seen;
p__3108 = G__3116;
seen = G__3117;
continue;
}
} else
{return cljs.core.cons.call(null,f__3111,step.call(null,cljs.core.rest.call(null,s__3114),cljs.core.conj.call(null,seen,f__3111)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3115.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3118 = cljs.core.Vector.fromArray([]);
var s__3119 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3119)))
{{
var G__3120 = cljs.core.conj.call(null,ret__3118,cljs.core.first.call(null,s__3119));
var G__3121 = cljs.core.next.call(null,s__3119);
ret__3118 = G__3120;
s__3119 = G__3121;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3118);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____3122 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3122))
{return or__3576__auto____3122;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3123 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3123,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3123));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3576__auto____3124 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3124))
{return or__3576__auto____3124;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3125 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3125,-1)))
{return cljs.core.subs.call(null,x,2,i__3125);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3128 = cljs.core.ObjMap.fromObject([],{});
var ks__3129 = cljs.core.seq.call(null,keys);
var vs__3130 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3131 = ks__3129;

if(cljs.core.truth_(and__3574__auto____3131))
{return vs__3130;
} else
{return and__3574__auto____3131;
}
})()))
{{
var G__3132 = cljs.core.assoc.call(null,map__3128,cljs.core.first.call(null,ks__3129),cljs.core.first.call(null,vs__3130));
var G__3133 = cljs.core.next.call(null,ks__3129);
var G__3134 = cljs.core.next.call(null,vs__3130);
map__3128 = G__3132;
ks__3129 = G__3133;
vs__3130 = G__3134;
continue;
}
} else
{return map__3128;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3137 = (function (k,x){
return x;
});
var max_key__3138 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3139 = (function() { 
var G__3141__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3126_SHARP_,p2__3127_SHARP_){
return max_key.call(null,k,p1__3126_SHARP_,p2__3127_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3141 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3141__delegate.call(this, k, x, y, more);
};
G__3141.cljs$lang$maxFixedArity = 3;
G__3141.cljs$lang$applyTo = (function (arglist__3142){
var k = cljs.core.first(arglist__3142);
var x = cljs.core.first(cljs.core.next(arglist__3142));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3142)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3142)));
return G__3141__delegate.call(this, k, x, y, more);
});
return G__3141;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3137.call(this,k,x);
case  3 :
return max_key__3138.call(this,k,x,y);
default:
return max_key__3139.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3139.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3143 = (function (k,x){
return x;
});
var min_key__3144 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3145 = (function() { 
var G__3147__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3135_SHARP_,p2__3136_SHARP_){
return min_key.call(null,k,p1__3135_SHARP_,p2__3136_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3147 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3147__delegate.call(this, k, x, y, more);
};
G__3147.cljs$lang$maxFixedArity = 3;
G__3147.cljs$lang$applyTo = (function (arglist__3148){
var k = cljs.core.first(arglist__3148);
var x = cljs.core.first(cljs.core.next(arglist__3148));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3148)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3148)));
return G__3147__delegate.call(this, k, x, y, more);
});
return G__3147;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3143.call(this,k,x);
case  3 :
return min_key__3144.call(this,k,x,y);
default:
return min_key__3145.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3145.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3151 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3152 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3149 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3149))
{var s__3150 = temp__3726__auto____3149;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3150),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3150)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3151.call(this,n,step);
case  3 :
return partition_all__3152.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3154 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3154))
{var s__3155 = temp__3726__auto____3154;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3155))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3155),take_while.call(null,pred,cljs.core.rest.call(null,s__3155)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1, and end
* to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3156 = (function (){
return cljs.core.iterate.call(null,cljs.core.inc,0);
});
var range__3157 = (function (end){
return range.call(null,0,end,1);
});
var range__3158 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3159 = (function (start,end,step){
return cljs.core.take_while.call(null,(function (n){
return cljs.core._LT_.call(null,n,end);
}),cljs.core.iterate.call(null,(function (x){
return cljs.core._PLUS_.call(null,x,step);
}),start));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3156.call(this);
case  1 :
return range__3157.call(this,start);
case  2 :
return range__3158.call(this,start,end);
case  3 :
return range__3159.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3161 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3161))
{var s__3162 = temp__3726__auto____3161;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3162),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3162)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3164 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3164))
{var s__3165 = temp__3726__auto____3164;

var fst__3166 = cljs.core.first.call(null,s__3165);
var fv__3167 = f.call(null,fst__3166);
var run__3168 = cljs.core.cons.call(null,fst__3166,cljs.core.take_while.call(null,(function (p1__3163_SHARP_){
return cljs.core._EQ_.call(null,fv__3167,f.call(null,p1__3163_SHARP_));
}),cljs.core.next.call(null,s__3165)));

return cljs.core.cons.call(null,run__3168,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3168),s__3165))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3183 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3179 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3179))
{var s__3180 = temp__3723__auto____3179;

return reductions.call(null,f,cljs.core.first.call(null,s__3180),cljs.core.rest.call(null,s__3180));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3184 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3181 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3181))
{var s__3182 = temp__3726__auto____3181;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3182)),cljs.core.rest.call(null,s__3182));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3183.call(this,f,init);
case  3 :
return reductions__3184.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3187 = (function (f){
return (function() {
var G__3192 = null;
var G__3192__3193 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3192__3194 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3192__3195 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3192__3196 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3192__3197 = (function() { 
var G__3199__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3199 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3199__delegate.call(this, x, y, z, args);
};
G__3199.cljs$lang$maxFixedArity = 3;
G__3199.cljs$lang$applyTo = (function (arglist__3200){
var x = cljs.core.first(arglist__3200);
var y = cljs.core.first(cljs.core.next(arglist__3200));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3200)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3200)));
return G__3199__delegate.call(this, x, y, z, args);
});
return G__3199;
})()
;
G__3192 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3192__3193.call(this);
case  1 :
return G__3192__3194.call(this,x);
case  2 :
return G__3192__3195.call(this,x,y);
case  3 :
return G__3192__3196.call(this,x,y,z);
default:
return G__3192__3197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3192.cljs$lang$maxFixedArity = 3;
G__3192.cljs$lang$applyTo = G__3192__3197.cljs$lang$applyTo;
return G__3192;
})()
});
var juxt__3188 = (function (f,g){
return (function() {
var G__3201 = null;
var G__3201__3202 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3201__3203 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3201__3204 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3201__3205 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3201__3206 = (function() { 
var G__3208__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3208 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3208__delegate.call(this, x, y, z, args);
};
G__3208.cljs$lang$maxFixedArity = 3;
G__3208.cljs$lang$applyTo = (function (arglist__3209){
var x = cljs.core.first(arglist__3209);
var y = cljs.core.first(cljs.core.next(arglist__3209));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3209)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3209)));
return G__3208__delegate.call(this, x, y, z, args);
});
return G__3208;
})()
;
G__3201 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3201__3202.call(this);
case  1 :
return G__3201__3203.call(this,x);
case  2 :
return G__3201__3204.call(this,x,y);
case  3 :
return G__3201__3205.call(this,x,y,z);
default:
return G__3201__3206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3201.cljs$lang$maxFixedArity = 3;
G__3201.cljs$lang$applyTo = G__3201__3206.cljs$lang$applyTo;
return G__3201;
})()
});
var juxt__3189 = (function (f,g,h){
return (function() {
var G__3210 = null;
var G__3210__3211 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3210__3212 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3210__3213 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3210__3214 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3210__3215 = (function() { 
var G__3217__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3217 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3217__delegate.call(this, x, y, z, args);
};
G__3217.cljs$lang$maxFixedArity = 3;
G__3217.cljs$lang$applyTo = (function (arglist__3218){
var x = cljs.core.first(arglist__3218);
var y = cljs.core.first(cljs.core.next(arglist__3218));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3218)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3218)));
return G__3217__delegate.call(this, x, y, z, args);
});
return G__3217;
})()
;
G__3210 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3210__3211.call(this);
case  1 :
return G__3210__3212.call(this,x);
case  2 :
return G__3210__3213.call(this,x,y);
case  3 :
return G__3210__3214.call(this,x,y,z);
default:
return G__3210__3215.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3210.cljs$lang$maxFixedArity = 3;
G__3210.cljs$lang$applyTo = G__3210__3215.cljs$lang$applyTo;
return G__3210;
})()
});
var juxt__3190 = (function() { 
var G__3219__delegate = function (f,g,h,fs){
var fs__3186 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3220 = null;
var G__3220__3221 = (function (){
return cljs.core.reduce.call(null,(function (p1__3169_SHARP_,p2__3170_SHARP_){
return cljs.core.conj.call(null,p1__3169_SHARP_,p2__3170_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3186);
});
var G__3220__3222 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3171_SHARP_,p2__3172_SHARP_){
return cljs.core.conj.call(null,p1__3171_SHARP_,p2__3172_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3186);
});
var G__3220__3223 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3173_SHARP_,p2__3174_SHARP_){
return cljs.core.conj.call(null,p1__3173_SHARP_,p2__3174_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3186);
});
var G__3220__3224 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3175_SHARP_,p2__3176_SHARP_){
return cljs.core.conj.call(null,p1__3175_SHARP_,p2__3176_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3186);
});
var G__3220__3225 = (function() { 
var G__3227__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3177_SHARP_,p2__3178_SHARP_){
return cljs.core.conj.call(null,p1__3177_SHARP_,cljs.core.apply.call(null,p2__3178_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3186);
};
var G__3227 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3227__delegate.call(this, x, y, z, args);
};
G__3227.cljs$lang$maxFixedArity = 3;
G__3227.cljs$lang$applyTo = (function (arglist__3228){
var x = cljs.core.first(arglist__3228);
var y = cljs.core.first(cljs.core.next(arglist__3228));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3228)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3228)));
return G__3227__delegate.call(this, x, y, z, args);
});
return G__3227;
})()
;
G__3220 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3220__3221.call(this);
case  1 :
return G__3220__3222.call(this,x);
case  2 :
return G__3220__3223.call(this,x,y);
case  3 :
return G__3220__3224.call(this,x,y,z);
default:
return G__3220__3225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3220.cljs$lang$maxFixedArity = 3;
G__3220.cljs$lang$applyTo = G__3220__3225.cljs$lang$applyTo;
return G__3220;
})()
};
var G__3219 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3219__delegate.call(this, f, g, h, fs);
};
G__3219.cljs$lang$maxFixedArity = 3;
G__3219.cljs$lang$applyTo = (function (arglist__3229){
var f = cljs.core.first(arglist__3229);
var g = cljs.core.first(cljs.core.next(arglist__3229));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3229)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3229)));
return G__3219__delegate.call(this, f, g, h, fs);
});
return G__3219;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3187.call(this,f);
case  2 :
return juxt__3188.call(this,f,g);
case  3 :
return juxt__3189.call(this,f,g,h);
default:
return juxt__3190.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3190.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3231 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3234 = cljs.core.next.call(null,coll);
coll = G__3234;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3232 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3230 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3230))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3230;
}
})()))
{{
var G__3235 = cljs.core.dec.call(null,n);
var G__3236 = cljs.core.next.call(null,coll);
n = G__3235;
coll = G__3236;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3231.call(this,n);
case  2 :
return dorun__3232.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3237 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3238 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3237.call(this,n);
case  2 :
return doall__3238.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3240 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3240),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3240),1)))
{return cljs.core.first.call(null,matches__3240);
} else
{return cljs.core.vec.call(null,matches__3240);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3241 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3241)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3241),1)))
{return cljs.core.first.call(null,matches__3241);
} else
{return cljs.core.vec.call(null,matches__3241);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3242 = cljs.core.re_find.call(null,re,s);
var match_idx__3243 = s.search(re);
var match_str__3244 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3242))?cljs.core.first.call(null,match_data__3242):match_data__3242);
var post_match__3245 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3243,cljs.core.count.call(null,match_str__3244)));

if(cljs.core.truth_(match_data__3242))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3242,re_seq.call(null,re,post_match__3245));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new goog.global['RegExp'](s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3246_SHARP_){
return print_one.call(null,p1__3246_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
goog.global['print'].call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3247 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3247))
{var and__3574__auto____3250 = (function (){var x__177__auto____3248 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3249 = x__177__auto____3248;

if(cljs.core.truth_(and__3574__auto____3249))
{return x__177__auto____3248.cljs$core$IMeta$;
} else
{return and__3574__auto____3249;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__177__auto____3248);
}
})();

if(cljs.core.truth_(and__3574__auto____3250))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3250;
}
} else
{return and__3574__auto____3247;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__177__auto____3251 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3252 = x__177__auto____3251;

if(cljs.core.truth_(and__3574__auto____3252))
{return x__177__auto____3251.cljs$core$IPrintable$;
} else
{return and__3574__auto____3252;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__177__auto____3251);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3253 = cljs.core.first.call(null,objs);
var sb__3254 = (new goog.string.StringBuffer());

var G__3255__3256 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3255__3256))
{var obj__3257 = cljs.core.first.call(null,G__3255__3256);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3257,first_obj__3253)))
{} else
{sb__3254.append(" ");
}
var G__3258__3259 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3257,opts));

while(true){
if(cljs.core.truth_(G__3258__3259))
{var string__3260 = cljs.core.first.call(null,G__3258__3259);

sb__3254.append(string__3260);
{
var G__3261 = cljs.core.next.call(null,G__3258__3259);
G__3258__3259 = G__3261;
continue;
}
} else
{}
break;
}
{
var G__3262 = cljs.core.next.call(null,G__3255__3256);
G__3255__3256 = G__3262;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3254);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3263 = cljs.core.first.call(null,objs);

var G__3264__3265 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3264__3265))
{var obj__3266 = cljs.core.first.call(null,G__3264__3265);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3266,first_obj__3263)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3267__3268 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3266,opts));

while(true){
if(cljs.core.truth_(G__3267__3268))
{var string__3269 = cljs.core.first.call(null,G__3267__3268);

cljs.core.string_print.call(null,string__3269);
{
var G__3270 = cljs.core.next.call(null,G__3267__3268);
G__3267__3268 = G__3270;
continue;
}
} else
{}
break;
}
{
var G__3271 = cljs.core.next.call(null,G__3264__3265);
G__3264__3265 = G__3271;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3272){
var objs = cljs.core.seq( arglist__3272 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3273){
var objs = cljs.core.seq( arglist__3273 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3274){
var objs = cljs.core.seq( arglist__3274 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3275){
var objs = cljs.core.seq( arglist__3275 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3276){
var objs = cljs.core.seq( arglist__3276 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3277 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3277,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3278 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3278))
{var nspc__3279 = temp__3726__auto____3278;

return cljs.core.str.call(null,nspc__3279,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3280 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3280))
{var nspc__3281 = temp__3726__auto____3280;

return cljs.core.str.call(null,nspc__3281,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3282 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3282,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3283 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3283.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3284 = this;
return this__3284.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3285 = this;
return this__3285.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3286 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3293 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3294 = (function() { 
var G__3296__delegate = function (x,p__3287){
var map__3288__3289 = p__3287;
var map__3288__3290 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3288__3289))?cljs.core.apply.call(null,cljs.core.hash_map,map__3288__3289):map__3288__3289);
var validator__3291 = cljs.core.get.call(null,map__3288__3290,"﷐'validator");
var meta__3292 = cljs.core.get.call(null,map__3288__3290,"﷐'meta");

return (new cljs.core.Atom(x,meta__3292,validator__3291));
};
var G__3296 = function (x,var_args){
var p__3287 = null;
if (goog.isDef(var_args)) {
  p__3287 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3296__delegate.call(this, x, p__3287);
};
G__3296.cljs$lang$maxFixedArity = 1;
G__3296.cljs$lang$applyTo = (function (arglist__3297){
var x = cljs.core.first(arglist__3297);
var p__3287 = cljs.core.rest(arglist__3297);
return G__3296__delegate.call(this, x, p__3287);
});
return G__3296;
})()
;
atom = function(x,var_args){
var p__3287 = var_args;
switch(arguments.length){
case  1 :
return atom__3293.call(this,x);
default:
return atom__3294.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3294.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3298 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3298))
{var v__3299 = temp__3726__auto____3298;

if(cljs.core.truth_(v__3299.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3300 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3301 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3302 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3303 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3304 = (function() { 
var G__3306__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3306 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3306__delegate.call(this, a, f, x, y, z, more);
};
G__3306.cljs$lang$maxFixedArity = 5;
G__3306.cljs$lang$applyTo = (function (arglist__3307){
var a = cljs.core.first(arglist__3307);
var f = cljs.core.first(cljs.core.next(arglist__3307));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3307)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3307))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3307)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3307)))));
return G__3306__delegate.call(this, a, f, x, y, z, more);
});
return G__3306;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3300.call(this,a,f);
case  3 :
return swap_BANG___3301.call(this,a,f,x);
case  4 :
return swap_BANG___3302.call(this,a,f,x,y);
case  5 :
return swap_BANG___3303.call(this,a,f,x,y,z);
default:
return swap_BANG___3304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3304.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3308){
var iref = cljs.core.first(arglist__3308);
var f = cljs.core.first(cljs.core.next(arglist__3308));
var args = cljs.core.rest(cljs.core.next(arglist__3308));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3309 = (function (){
return gensym.call(null,"G__");
});
var gensym__3310 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3309.call(this);
case  1 :
return gensym__3310.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3312 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3312.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3313 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3313.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3313.state,this__3313.f);
}
return cljs.core.deref.call(null,this__3313.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3314){
var body = cljs.core.seq( arglist__3314 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3315__3316 = options;
var map__3315__3317 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3315__3316))?cljs.core.apply.call(null,cljs.core.hash_map,map__3315__3316):map__3315__3316);
var keywordize_keys__3318 = cljs.core.get.call(null,map__3315__3317,"﷐'keywordize-keys");
var keyfn__3319 = (cljs.core.truth_(keywordize_keys__3318)?cljs.core.keyword:cljs.core.str);
var f__3325 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__231__auto____3324 = (function iter__3320(s__3321){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3321__3322 = s__3321;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3321__3322)))
{var k__3323 = cljs.core.first.call(null,s__3321__3322);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3319.call(null,k__3323),thisfn.call(null,(x[k__3323]))]),iter__3320.call(null,cljs.core.rest.call(null,s__3321__3322)));
} else
{return null;
}
break;
}
})));
});

return iter__231__auto____3324.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3325.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3326){
var x = cljs.core.first(arglist__3326);
var options = cljs.core.rest(arglist__3326);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3327 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3331__delegate = function (args){
var temp__3723__auto____3328 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3327),args);

if(cljs.core.truth_(temp__3723__auto____3328))
{var v__3329 = temp__3723__auto____3328;

return v__3329;
} else
{var ret__3330 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3327,cljs.core.assoc,args,ret__3330);
return ret__3330;
}
};
var G__3331 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3331__delegate.call(this, args);
};
G__3331.cljs$lang$maxFixedArity = 0;
G__3331.cljs$lang$applyTo = (function (arglist__3332){
var args = cljs.core.seq( arglist__3332 );;
return G__3331__delegate.call(this, args);
});
return G__3331;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3334 = (function (f){
while(true){
var ret__3333 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3333)))
{{
var G__3337 = ret__3333;
f = G__3337;
continue;
}
} else
{return ret__3333;
}
break;
}
});
var trampoline__3335 = (function() { 
var G__3338__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3338 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3338__delegate.call(this, f, args);
};
G__3338.cljs$lang$maxFixedArity = 1;
G__3338.cljs$lang$applyTo = (function (arglist__3339){
var f = cljs.core.first(arglist__3339);
var args = cljs.core.rest(arglist__3339);
return G__3338__delegate.call(this, f, args);
});
return G__3338;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3334.call(this,f);
default:
return trampoline__3335.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3335.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3340 = (function (){
return rand.call(null,1);
});
var rand__3341 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3340.call(this);
case  1 :
return rand__3341.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3343 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3343,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3343,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3352 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3353 = (function (h,child,parent){
var or__3576__auto____3344 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3576__auto____3344))
{return or__3576__auto____3344;
} else
{var or__3576__auto____3345 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3576__auto____3345))
{return or__3576__auto____3345;
} else
{var and__3574__auto____3346 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3574__auto____3346))
{var and__3574__auto____3347 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3574__auto____3347))
{var and__3574__auto____3348 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3574__auto____3348))
{var ret__3349 = true;
var i__3350 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____3351 = cljs.core.not.call(null,ret__3349);

if(cljs.core.truth_(or__3576__auto____3351))
{return or__3576__auto____3351;
} else
{return cljs.core._EQ_.call(null,i__3350,cljs.core.count.call(null,parent));
}
})()))
{return ret__3349;
} else
{{
var G__3355 = isa_QMARK_.call(null,h,child.call(null,i__3350),parent.call(null,i__3350));
var G__3356 = cljs.core.inc.call(null,i__3350);
ret__3349 = G__3355;
i__3350 = G__3356;
continue;
}
}
break;
}
} else
{return and__3574__auto____3348;
}
} else
{return and__3574__auto____3347;
}
} else
{return and__3574__auto____3346;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3352.call(this,h,child);
case  3 :
return isa_QMARK___3353.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3357 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3358 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3357.call(this,h);
case  2 :
return parents__3358.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3360 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3361 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3360.call(this,h);
case  2 :
return ancestors__3361.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3363 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3364 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3363.call(this,h);
case  2 :
return descendants__3364.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3374 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3375 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3369 = "﷐'parents".call(null,h);
var td__3370 = "﷐'descendants".call(null,h);
var ta__3371 = "﷐'ancestors".call(null,h);
var tf__3372 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3576__auto____3373 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3369.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3371.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3371.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3369,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3372.call(null,"﷐'ancestors".call(null,h),tag,td__3370,parent,ta__3371),"﷐'descendants":tf__3372.call(null,"﷐'descendants".call(null,h),parent,ta__3371,tag,td__3370)});
})());

if(cljs.core.truth_(or__3576__auto____3373))
{return or__3576__auto____3373;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3374.call(this,h,tag);
case  3 :
return derive__3375.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3381 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3382 = (function (h,tag,parent){
var parentMap__3377 = "﷐'parents".call(null,h);
var childsParents__3378 = (cljs.core.truth_(parentMap__3377.call(null,tag))?cljs.core.disj.call(null,parentMap__3377.call(null,tag),parent):cljs.core.set([]));
var newParents__3379 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3378))?cljs.core.assoc.call(null,parentMap__3377,tag,childsParents__3378):cljs.core.dissoc.call(null,parentMap__3377,tag));
var deriv_seq__3380 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3366_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3366_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3366_SHARP_),cljs.core.second.call(null,p1__3366_SHARP_)));
}),cljs.core.seq.call(null,newParents__3379)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3377.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3367_SHARP_,p2__3368_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3367_SHARP_,p2__3368_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3380));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3381.call(this,h,tag);
case  3 :
return underive__3382.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3384 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3576__auto____3386 = (cljs.core.truth_((function (){var and__3574__auto____3385 = xprefs__3384;

if(cljs.core.truth_(and__3574__auto____3385))
{return xprefs__3384.call(null,y);
} else
{return and__3574__auto____3385;
}
})())?true:null);

if(cljs.core.truth_(or__3576__auto____3386))
{return or__3576__auto____3386;
} else
{var or__3576__auto____3388 = (function (){var ps__3387 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3387))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3387),prefer_table)))
{} else
{}
{
var G__3391 = cljs.core.rest.call(null,ps__3387);
ps__3387 = G__3391;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3388))
{return or__3576__auto____3388;
} else
{var or__3576__auto____3390 = (function (){var ps__3389 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3389))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3389),y,prefer_table)))
{} else
{}
{
var G__3392 = cljs.core.rest.call(null,ps__3389);
ps__3389 = G__3392;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3390))
{return or__3576__auto____3390;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3576__auto____3393 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3576__auto____3393))
{return or__3576__auto____3393;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3402 = cljs.core.reduce.call(null,(function (be,p__3394){
var vec__3395__3396 = p__3394;
var k__3397 = cljs.core.nth.call(null,vec__3395__3396,0,null);
var ___3398 = cljs.core.nth.call(null,vec__3395__3396,1,null);
var e__3399 = vec__3395__3396;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3397)))
{var be2__3401 = (cljs.core.truth_((function (){var or__3576__auto____3400 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3576__auto____3400))
{return or__3576__auto____3400;
} else
{return cljs.core.dominates.call(null,k__3397,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3399:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3401),k__3397,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3397," and ",cljs.core.first.call(null,be2__3401),", and neither is preferred");
}
return be2__3401;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3402))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3402));
return cljs.core.second.call(null,best_entry__3402);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3403 = mf;

if(cljs.core.truth_(and__3574__auto____3403))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3574__auto____3403;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3576__auto____3404 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3404))
{return or__3576__auto____3404;
} else
{var or__3576__auto____3405 = (_reset["_"]);

if(cljs.core.truth_(or__3576__auto____3405))
{return or__3576__auto____3405;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3574__auto____3406 = mf;

if(cljs.core.truth_(and__3574__auto____3406))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3574__auto____3406;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3576__auto____3407 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3407))
{return or__3576__auto____3407;
} else
{var or__3576__auto____3408 = (_add_method["_"]);

if(cljs.core.truth_(or__3576__auto____3408))
{return or__3576__auto____3408;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3409 = mf;

if(cljs.core.truth_(and__3574__auto____3409))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3574__auto____3409;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3410 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3410))
{return or__3576__auto____3410;
} else
{var or__3576__auto____3411 = (_remove_method["_"]);

if(cljs.core.truth_(or__3576__auto____3411))
{return or__3576__auto____3411;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3574__auto____3412 = mf;

if(cljs.core.truth_(and__3574__auto____3412))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3574__auto____3412;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3576__auto____3413 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3413))
{return or__3576__auto____3413;
} else
{var or__3576__auto____3414 = (_prefer_method["_"]);

if(cljs.core.truth_(or__3576__auto____3414))
{return or__3576__auto____3414;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3415 = mf;

if(cljs.core.truth_(and__3574__auto____3415))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3574__auto____3415;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3416 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3416))
{return or__3576__auto____3416;
} else
{var or__3576__auto____3417 = (_get_method["_"]);

if(cljs.core.truth_(or__3576__auto____3417))
{return or__3576__auto____3417;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3418 = mf;

if(cljs.core.truth_(and__3574__auto____3418))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3574__auto____3418;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3576__auto____3419 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3419))
{return or__3576__auto____3419;
} else
{var or__3576__auto____3420 = (_methods["_"]);

if(cljs.core.truth_(or__3576__auto____3420))
{return or__3576__auto____3420;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3421 = mf;

if(cljs.core.truth_(and__3574__auto____3421))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3574__auto____3421;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3576__auto____3422 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3422))
{return or__3576__auto____3422;
} else
{var or__3576__auto____3423 = (_prefers["_"]);

if(cljs.core.truth_(or__3576__auto____3423))
{return or__3576__auto____3423;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3574__auto____3424 = mf;

if(cljs.core.truth_(and__3574__auto____3424))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3574__auto____3424;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3576__auto____3425 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3425))
{return or__3576__auto____3425;
} else
{var or__3576__auto____3426 = (_invoke["_"]);

if(cljs.core.truth_(or__3576__auto____3426))
{return or__3576__auto____3426;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3427 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3428 = cljs.core._get_method.call(null,mf,dispatch_val__3427);

if(cljs.core.truth_(target_fn__3428))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3427);
}
return cljs.core.apply.call(null,target_fn__3428,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3429 = this;
cljs.core.swap_BANG_.call(null,this__3429.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3429.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3429.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3429.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3430 = this;
cljs.core.swap_BANG_.call(null,this__3430.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3430.method_cache,this__3430.method_table,this__3430.cached_hierarchy,this__3430.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3431 = this;
cljs.core.swap_BANG_.call(null,this__3431.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3431.method_cache,this__3431.method_table,this__3431.cached_hierarchy,this__3431.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3432 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3432.cached_hierarchy),cljs.core.deref.call(null,this__3432.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3432.method_cache,this__3432.method_table,this__3432.cached_hierarchy,this__3432.hierarchy);
}
var temp__3723__auto____3433 = cljs.core.deref.call(null,this__3432.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3723__auto____3433))
{var target_fn__3434 = temp__3723__auto____3433;

return target_fn__3434;
} else
{var temp__3723__auto____3435 = cljs.core.find_and_cache_best_method.call(null,this__3432.name,dispatch_val,this__3432.hierarchy,this__3432.method_table,this__3432.prefer_table,this__3432.method_cache,this__3432.cached_hierarchy);

if(cljs.core.truth_(temp__3723__auto____3435))
{var target_fn__3436 = temp__3723__auto____3435;

return target_fn__3436;
} else
{return cljs.core.deref.call(null,this__3432.method_table).call(null,this__3432.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3437 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3437.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__3437.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__3437.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3437.method_cache,this__3437.method_table,this__3437.cached_hierarchy,this__3437.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3438 = this;
return cljs.core.deref.call(null,this__3438.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3439 = this;
return cljs.core.deref.call(null,this__3439.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3440 = this;
return cljs.core.do_invoke.call(null,mf,this__3440.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3441__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3441 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3441__delegate.call(this, _, args);
};
G__3441.cljs$lang$maxFixedArity = 1;
G__3441.cljs$lang$applyTo = (function (arglist__3442){
var _ = cljs.core.first(arglist__3442);
var args = cljs.core.rest(arglist__3442);
return G__3441__delegate.call(this, _, args);
});
return G__3441;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
