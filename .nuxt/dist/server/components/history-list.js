exports.ids = [1];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HistoryList.vue?vue&type=template&id=7ab726d8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._ssrNode("<ul>"+(_vm._ssrList((_vm.historyList),function(item){return ("<li>"+_vm._ssrEscape("\n      "+_vm._s(item)+"\n    ")+"</li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HistoryList.vue?vue&type=template&id=7ab726d8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HistoryList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HistoryListvue_type_script_lang_js_ = ({
  computed: {
    historyList() {
      return this.$store.getters.history;
    }

  },
  methods: {
    printItem(event) {
      this.$store.dispatch("fetchHistoryWeather", event.target.innerText);
    }

  }
});
// CONCATENATED MODULE: ./components/HistoryList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HistoryListvue_type_script_lang_js_ = (HistoryListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HistoryList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HistoryListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "13171bad"
  
)

/* harmony default export */ var HistoryList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=history-list.js.map