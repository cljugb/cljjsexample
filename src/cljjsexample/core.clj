(ns cljjsexample.core
  (:use
    ring.adapter.jetty
    net.cgrand.moustache
    ring.util.response
    ring.middleware.clojurescript))

(def index
  "<html>
  <head></head>
  <body>
    <script type=\"text/javascript\" src=\"cljs/bootstrap.js\"></script>
    <script type=\"text/javascript\" src=\"cljs/hello.js\"></script>
    <script>
      alert(hello.greet(\"ClojureScript\"));
    </script>
  </body>
</html>")

(defn hello-js []
  "alert('foo');")

(def router
  (app
    [""] (-> index response constantly)
    ["cljs" file] ()))

(def cljsc-app (wrap-clojurescript router "cljs"))

(defn -main []
  (run-jetty cljsc-app {:port 8080}))
