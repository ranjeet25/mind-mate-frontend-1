"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quiz",{

/***/ "./src/pages/quiz/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/quiz/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_QuestionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/QuestionCard */ \"./src/components/QuestionCard.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _s = $RefreshSig$();\nvar questions = [\n    // {\n    //   _id: \"63b871fd3d731b590637c0dc\",\n    //   question:\n    //     \"Do you experience intense or excessive worry that interferes with your daily life?\",\n    //   d_id: \"63b874073d731b590637c0dd\",\n    // },\n    // {\n    //   _id: \"63b87b483d731b590637c0e4\",\n    //   question: \"Do you have difficulty controlling your worry?\",\n    //   d_id: \"63b874073d731b590637c0dd\",\n    // },\n    // {\n    //   _id: \"63b87b723d731b590637c0e5\",\n    //   question:\n    //     \"Do you experience physical symptoms such as heart palpitations or difficulty breathing when you are anxious?\",\n    //   d_id: \"63b874073d731b590637c0dd\",\n    // },\n    // {\n    //   _id: \"63b87b9c3d731b590637c0e6\",\n    //   question:\n    //     \"Do you experience persistent feelings of sadness or hopelessness?\",\n    //   d_id: \"63b87a7d3d731b590637c0df\",\n    // },\n    // {\n    //   _id: \"63b87bbf3d731b590637c0e7\",\n    //   question:\n    //     \"Do you have difficulty finding enjoyment in activities that you used to enjoy?\",\n    //   d_id: \"63b87a7d3d731b590637c0df\",\n    // },\n    // {\n    //   _id: \"63b87bd63d731b590637c0e8\",\n    //   question:\n    //     \"Do you experience significant changes in appetite or sleep patterns?\",\n    //   d_id: \"63b87a7d3d731b590637c0df\",\n    // },\n    // {\n    //   _id: \"63b87bf23d731b590637c0e9\",\n    //   question:\n    //     \"Do you experience flashbacks or intrusive memories related to a traumatic event?\",\n    //   d_id: \"63b87a9b3d731b590637c0e0\",\n    // },\n    // {\n    //   _id: \"63b87c1c3d731b590637c0ea\",\n    //   question:\n    //     \"Do you avoid activities or situations that remind you of the traumatic event?\",\n    //   d_id: \"63b87a9b3d731b590637c0e0\",\n    // },\n    // {\n    //   _id: \"63b87c343d731b590637c0eb\",\n    //   question:\n    //     \"Do you have physical symptoms such as increased heart rate or difficulty breathing when you are reminded of the traumatic event?\",\n    //   d_id: \"63b87a9b3d731b590637c0e0\",\n    // },\n    // {\n    //   _id: \"63b87c6a3d731b590637c0ec\",\n    //   question:\n    //     \"Do you use substances such as drugs or alcohol in a way that causes problems in your daily life?\",\n    //   d_id: \"63b87aaf3d731b590637c0e1\",\n    // },\n    // {\n    //   _id: \"63b87c9a3d731b590637c0ed\",\n    //   question:\n    //     \"Do you have difficulty stopping or controlling your substance use?\",\n    //   d_id: \"63b87aaf3d731b590637c0e1\",\n    // },\n    // {\n    //   _id: \"63b87cb13d731b590637c0ee\",\n    //   question:\n    //     \"Do you experience withdrawal symptoms when you stop using substances?\",\n    //   d_id: \"63b87aaf3d731b590637c0e1\",\n    // },\n    {\n        _id: \"63b87cef3d731b590637c0ef\",\n        question: \"Do you have difficulty maintaining stable and healthy relationships?\",\n        d_id: \"63b87abe3d731b590637c0e2\"\n    },\n    {\n        _id: \"63b87d0c3d731b590637c0f0\",\n        question: \"Do you have a distorted sense of self or difficulty identifying your own emotions?\",\n        d_id: \"63b87abe3d731b590637c0e2\"\n    },\n    {\n        _id: \"63b87d1b3d731b590637c0f1\",\n        question: \"Do you engage in impulsive or risky behaviors that cause problems in your daily life?\",\n        d_id: \"63b87abe3d731b590637c0e2\"\n    }, \n];\nfunction Quiz() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), currentQuestionIndex = ref[0], setCurrentQuestionIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), selectedQuestions = ref1[0], setSelectedQuestions = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // Get the current question based on the current question index\n    var currentQuestion = questions[currentQuestionIndex];\n    var onNext = function(answer, qid) {\n        if (answer == \"yes\") {\n            setSelectedQuestions(function(prev) {\n                return _toConsumableArray(prev).concat([\n                    qid\n                ]);\n            });\n        // console.log(selectedQuestions);\n        }\n        setCurrentQuestionIndex(function(prevIndex) {\n            return prevIndex + 1;\n        });\n    };\n    var handleSubmit = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"https://mind-mate.onrender.com/api/disorder/get\", {\n                        questionIds: selectedQuestions\n                    }, {\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        }\n                    });\n                case 3:\n                    data = _ctx.sent.data;\n                    console.log(data);\n                    router.push({\n                        pathname: \"/result\",\n                        query: data\n                    });\n                    _ctx.next = 11;\n                    break;\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                8\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/home/manav/Desktop/mind-mate-frontend/src/pages/quiz/index.tsx\",\n            lineNumber: 139\n        },\n        __self: this,\n        children: currentQuestionIndex < questions.length - 1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_QuestionCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                question: currentQuestion,\n                onNext: onNext,\n                __source: {\n                    fileName: \"/home/manav/Desktop/mind-mate-frontend/src/pages/quiz/index.tsx\",\n                    lineNumber: 143\n                },\n                __self: this\n            })\n        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n            href: {\n                pathname: \"result\",\n                query: {\n                    selectedQuestions: selectedQuestions\n                }\n            },\n            __source: {\n                fileName: \"/home/manav/Desktop/mind-mate-frontend/src/pages/quiz/index.tsx\",\n                lineNumber: 146\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                onClick: handleSubmit,\n                __source: {\n                    fileName: \"/home/manav/Desktop/mind-mate-frontend/src/pages/quiz/index.tsx\",\n                    lineNumber: 154\n                },\n                __self: this,\n                children: \"Submit\"\n            })\n        })\n    }));\n}\n_s(Quiz, \"cxbLbC8idO25APhvbA0QYcomIYg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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X0UvLi9zcmMvcGFnZXMvcXVpei9pbmRleC50c3g/NzUyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBRdWVzdGlvbkNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUXVlc3Rpb25DYXJkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgcXVlc3Rpb25zID0gW1xuICAvLyB7XG4gIC8vICAgX2lkOiBcIjYzYjg3MWZkM2Q3MzFiNTkwNjM3YzBkY1wiLFxuICAvLyAgIHF1ZXN0aW9uOlxuICAvLyAgICAgXCJEbyB5b3UgZXhwZXJpZW5jZSBpbnRlbnNlIG9yIGV4Y2Vzc2l2ZSB3b3JyeSB0aGF0IGludGVyZmVyZXMgd2l0aCB5b3VyIGRhaWx5IGxpZmU/XCIsXG4gIC8vICAgZF9pZDogXCI2M2I4NzQwNzNkNzMxYjU5MDYzN2MwZGRcIixcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIF9pZDogXCI2M2I4N2I0ODNkNzMxYjU5MDYzN2MwZTRcIixcbiAgLy8gICBxdWVzdGlvbjogXCJEbyB5b3UgaGF2ZSBkaWZmaWN1bHR5IGNvbnRyb2xsaW5nIHlvdXIgd29ycnk/XCIsXG4gIC8vICAgZF9pZDogXCI2M2I4NzQwNzNkNzMxYjU5MDYzN2MwZGRcIixcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIF9pZDogXCI2M2I4N2I3MjNkNzMxYjU5MDYzN2MwZTVcIixcbiAgLy8gICBxdWVzdGlvbjpcbiAgLy8gICAgIFwiRG8geW91IGV4cGVyaWVuY2UgcGh5c2ljYWwgc3ltcHRvbXMgc3VjaCBhcyBoZWFydCBwYWxwaXRhdGlvbnMgb3IgZGlmZmljdWx0eSBicmVhdGhpbmcgd2hlbiB5b3UgYXJlIGFueGlvdXM/XCIsXG4gIC8vICAgZF9pZDogXCI2M2I4NzQwNzNkNzMxYjU5MDYzN2MwZGRcIixcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIF9pZDogXCI2M2I4N2I5YzNkNzMxYjU5MDYzN2MwZTZcIixcbiAgLy8gICBxdWVzdGlvbjpcbiAgLy8gICAgIFwiRG8geW91IGV4cGVyaWVuY2UgcGVyc2lzdGVudCBmZWVsaW5ncyBvZiBzYWRuZXNzIG9yIGhvcGVsZXNzbmVzcz9cIixcbiAgLy8gICBkX2lkOiBcIjYzYjg3YTdkM2Q3MzFiNTkwNjM3YzBkZlwiLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgX2lkOiBcIjYzYjg3YmJmM2Q3MzFiNTkwNjM3YzBlN1wiLFxuICAvLyAgIHF1ZXN0aW9uOlxuICAvLyAgICAgXCJEbyB5b3UgaGF2ZSBkaWZmaWN1bHR5IGZpbmRpbmcgZW5qb3ltZW50IGluIGFjdGl2aXRpZXMgdGhhdCB5b3UgdXNlZCB0byBlbmpveT9cIixcbiAgLy8gICBkX2lkOiBcIjYzYjg3YTdkM2Q3MzFiNTkwNjM3YzBkZlwiLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgX2lkOiBcIjYzYjg3YmQ2M2Q3MzFiNTkwNjM3YzBlOFwiLFxuICAvLyAgIHF1ZXN0aW9uOlxuICAvLyAgICAgXCJEbyB5b3UgZXhwZXJpZW5jZSBzaWduaWZpY2FudCBjaGFuZ2VzIGluIGFwcGV0aXRlIG9yIHNsZWVwIHBhdHRlcm5zP1wiLFxuICAvLyAgIGRfaWQ6IFwiNjNiODdhN2QzZDczMWI1OTA2MzdjMGRmXCIsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBfaWQ6IFwiNjNiODdiZjIzZDczMWI1OTA2MzdjMGU5XCIsXG4gIC8vICAgcXVlc3Rpb246XG4gIC8vICAgICBcIkRvIHlvdSBleHBlcmllbmNlIGZsYXNoYmFja3Mgb3IgaW50cnVzaXZlIG1lbW9yaWVzIHJlbGF0ZWQgdG8gYSB0cmF1bWF0aWMgZXZlbnQ/XCIsXG4gIC8vICAgZF9pZDogXCI2M2I4N2E5YjNkNzMxYjU5MDYzN2MwZTBcIixcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIF9pZDogXCI2M2I4N2MxYzNkNzMxYjU5MDYzN2MwZWFcIixcbiAgLy8gICBxdWVzdGlvbjpcbiAgLy8gICAgIFwiRG8geW91IGF2b2lkIGFjdGl2aXRpZXMgb3Igc2l0dWF0aW9ucyB0aGF0IHJlbWluZCB5b3Ugb2YgdGhlIHRyYXVtYXRpYyBldmVudD9cIixcbiAgLy8gICBkX2lkOiBcIjYzYjg3YTliM2Q3MzFiNTkwNjM3YzBlMFwiLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgX2lkOiBcIjYzYjg3YzM0M2Q3MzFiNTkwNjM3YzBlYlwiLFxuICAvLyAgIHF1ZXN0aW9uOlxuICAvLyAgICAgXCJEbyB5b3UgaGF2ZSBwaHlzaWNhbCBzeW1wdG9tcyBzdWNoIGFzIGluY3JlYXNlZCBoZWFydCByYXRlIG9yIGRpZmZpY3VsdHkgYnJlYXRoaW5nIHdoZW4geW91IGFyZSByZW1pbmRlZCBvZiB0aGUgdHJhdW1hdGljIGV2ZW50P1wiLFxuICAvLyAgIGRfaWQ6IFwiNjNiODdhOWIzZDczMWI1OTA2MzdjMGUwXCIsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBfaWQ6IFwiNjNiODdjNmEzZDczMWI1OTA2MzdjMGVjXCIsXG4gIC8vICAgcXVlc3Rpb246XG4gIC8vICAgICBcIkRvIHlvdSB1c2Ugc3Vic3RhbmNlcyBzdWNoIGFzIGRydWdzIG9yIGFsY29ob2wgaW4gYSB3YXkgdGhhdCBjYXVzZXMgcHJvYmxlbXMgaW4geW91ciBkYWlseSBsaWZlP1wiLFxuICAvLyAgIGRfaWQ6IFwiNjNiODdhYWYzZDczMWI1OTA2MzdjMGUxXCIsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBfaWQ6IFwiNjNiODdjOWEzZDczMWI1OTA2MzdjMGVkXCIsXG4gIC8vICAgcXVlc3Rpb246XG4gIC8vICAgICBcIkRvIHlvdSBoYXZlIGRpZmZpY3VsdHkgc3RvcHBpbmcgb3IgY29udHJvbGxpbmcgeW91ciBzdWJzdGFuY2UgdXNlP1wiLFxuICAvLyAgIGRfaWQ6IFwiNjNiODdhYWYzZDczMWI1OTA2MzdjMGUxXCIsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBfaWQ6IFwiNjNiODdjYjEzZDczMWI1OTA2MzdjMGVlXCIsXG4gIC8vICAgcXVlc3Rpb246XG4gIC8vICAgICBcIkRvIHlvdSBleHBlcmllbmNlIHdpdGhkcmF3YWwgc3ltcHRvbXMgd2hlbiB5b3Ugc3RvcCB1c2luZyBzdWJzdGFuY2VzP1wiLFxuICAvLyAgIGRfaWQ6IFwiNjNiODdhYWYzZDczMWI1OTA2MzdjMGUxXCIsXG4gIC8vIH0sXG4gIHtcbiAgICBfaWQ6IFwiNjNiODdjZWYzZDczMWI1OTA2MzdjMGVmXCIsXG4gICAgcXVlc3Rpb246XG4gICAgICBcIkRvIHlvdSBoYXZlIGRpZmZpY3VsdHkgbWFpbnRhaW5pbmcgc3RhYmxlIGFuZCBoZWFsdGh5IHJlbGF0aW9uc2hpcHM/XCIsXG4gICAgZF9pZDogXCI2M2I4N2FiZTNkNzMxYjU5MDYzN2MwZTJcIixcbiAgfSxcbiAge1xuICAgIF9pZDogXCI2M2I4N2QwYzNkNzMxYjU5MDYzN2MwZjBcIixcbiAgICBxdWVzdGlvbjpcbiAgICAgIFwiRG8geW91IGhhdmUgYSBkaXN0b3J0ZWQgc2Vuc2Ugb2Ygc2VsZiBvciBkaWZmaWN1bHR5IGlkZW50aWZ5aW5nIHlvdXIgb3duIGVtb3Rpb25zP1wiLFxuICAgIGRfaWQ6IFwiNjNiODdhYmUzZDczMWI1OTA2MzdjMGUyXCIsXG4gIH0sXG4gIHtcbiAgICBfaWQ6IFwiNjNiODdkMWIzZDczMWI1OTA2MzdjMGYxXCIsXG4gICAgcXVlc3Rpb246XG4gICAgICBcIkRvIHlvdSBlbmdhZ2UgaW4gaW1wdWxzaXZlIG9yIHJpc2t5IGJlaGF2aW9ycyB0aGF0IGNhdXNlIHByb2JsZW1zIGluIHlvdXIgZGFpbHkgbGlmZT9cIixcbiAgICBkX2lkOiBcIjYzYjg3YWJlM2Q3MzFiNTkwNjM3YzBlMlwiLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gUXVpeigpIHtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbkluZGV4LCBzZXRDdXJyZW50UXVlc3Rpb25JbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbc2VsZWN0ZWRRdWVzdGlvbnMsIHNldFNlbGVjdGVkUXVlc3Rpb25zXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIEdldCB0aGUgY3VycmVudCBxdWVzdGlvbiBiYXNlZCBvbiB0aGUgY3VycmVudCBxdWVzdGlvbiBpbmRleFxuICBjb25zdCBjdXJyZW50UXVlc3Rpb24gPSBxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdO1xuXG4gIGNvbnN0IG9uTmV4dCA9IChhbnN3ZXI6IHN0cmluZywgcWlkOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoYW5zd2VyID09IFwieWVzXCIpIHtcbiAgICAgIHNldFNlbGVjdGVkUXVlc3Rpb25zKChwcmV2KSA9PiBbLi4ucHJldiwgcWlkXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZFF1ZXN0aW9ucyk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFF1ZXN0aW9uSW5kZXgoKHByZXZJbmRleCkgPT4gcHJldkluZGV4ICsgMSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiaHR0cHM6Ly9taW5kLW1hdGUub25yZW5kZXIuY29tL2FwaS9kaXNvcmRlci9nZXRcIixcbiAgICAgICAgeyBxdWVzdGlvbklkczogc2VsZWN0ZWRRdWVzdGlvbnMgfSwgLy8gYm9keSBvYmplY3Qgd2l0aCBhbiBcImFycmF5XCIgcHJvcGVydHlcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6IFwiL3Jlc3VsdFwiLFxuICAgICAgICBxdWVyeTogZGF0YSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiBSZW5kZXIgdGhlIFwiTmV4dFwiIGJ1dHRvbiBpZiB0aGVyZSBhcmUgbW9yZSBxdWVzdGlvbnMsIG90aGVyd2lzZSByZW5kZXIgdGhlIFwiU3VibWl0XCIgYnV0dG9uICovfVxuICAgICAge2N1cnJlbnRRdWVzdGlvbkluZGV4IDwgcXVlc3Rpb25zLmxlbmd0aCAtIDEgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFF1ZXN0aW9uQ2FyZCBxdWVzdGlvbj17Y3VycmVudFF1ZXN0aW9ufSBvbk5leHQ9e29uTmV4dH0gLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8TGlua1xuICAgICAgICBocmVmPXt7XG4gICAgICAgICAgcGF0aG5hbWU6IFwicmVzdWx0XCIsXG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkUXVlc3Rpb25zOiBzZWxlY3RlZFF1ZXN0aW9ucyxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBRdWl6O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJRdWVzdGlvbkNhcmQiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkxpbmsiLCJxdWVzdGlvbnMiLCJfaWQiLCJxdWVzdGlvbiIsImRfaWQiLCJRdWl6IiwiY3VycmVudFF1ZXN0aW9uSW5kZXgiLCJzZXRDdXJyZW50UXVlc3Rpb25JbmRleCIsInNlbGVjdGVkUXVlc3Rpb25zIiwic2V0U2VsZWN0ZWRRdWVzdGlvbnMiLCJyb3V0ZXIiLCJjdXJyZW50UXVlc3Rpb24iLCJvbk5leHQiLCJhbnN3ZXIiLCJxaWQiLCJwcmV2IiwicHJldkluZGV4IiwiaGFuZGxlU3VibWl0IiwiZGF0YSIsInBvc3QiLCJxdWVzdGlvbklkcyIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJkaXYiLCJsZW5ndGgiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.tsx\n");

/***/ })

});