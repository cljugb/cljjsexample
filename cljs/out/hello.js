goog.provide('hello');
goog.require('cljs.core');
hello.greet = (function greet(n){
return cljs.core.str.call(null,"Hello ",n);
});
goog.exportSymbol('hello.greet', hello.greet);
