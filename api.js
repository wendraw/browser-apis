// Chrome Version 83.0.4103.116 (Official Build) (64-bit)
// 在 Chrome 中打开 about:blank 页面
// 然后再执行下面的代码。

let names = Object.getOwnPropertyNames(window);

function filterOut(names, props) {
  let set = new Set();
  props.forEach((o) => set.add(o));
  return names.filter((e) => !set.has(e));
}

// ---------------------------------- webkit ---------------------------------------
names = names.filter((e) => !e.match(/^webkit|^WebKit/));

// ---------------------------------- ECMA ---------------------------------------
{
  {
    // http://www.ecma-international.org/ecma-262/
    let js = new Set();
    let objects = [
      "BigInt",
      "BigInt64Array",
      "BigUint64Array",
      "Infinity",
      "NaN",
      "undefined",
      "eval",
      "isFinite",
      "isNaN",
      "parseFloat",
      "parseInt",
      "decodeURI",
      "decodeURIComponent",
      "encodeURI",
      "encodeURIComponent",
      "Array",
      "Date",
      "RegExp",
      "Promise",
      "Proxy",
      "Map",
      "WeakMap",
      "Set",
      "WeakSet",
      "Function",
      "Boolean",
      "String",
      "Number",
      "Symbol",
      "Object",
      "Error",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
      "ArrayBuffer",
      "SharedArrayBuffer",
      "DataView",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Uint8Array",
      "Uint16Array",
      "Uint32Array",
      "Uint8ClampedArray",
      "Atomics",
      "JSON",
      "Math",
      "Reflect",
      "escape",
      "unescape",
    ];
    objects.forEach((o) => js.add(o));
    names = names.filter((e) => !js.has(e));
  }

  // https://tc39.github.io/proposal-global/
  names = names.filter((e) => e !== "globalThis");

  // https://tc39.es/ecma402/#intl-object
  names = names.filter((e) => e !== "Intl");
}

// ---------------------------------- WHATWG ---------------------------------------
{
  //---------- DOM https://dom.spec.whatwg.org/
  {
    names = names
      .filter((e) => {
        try {
          return !(window[e].prototype instanceof Node);
        } catch (err) {
          return true;
        }
      })
      .filter((e) => e != "Node");
  }
  // https://dom.spec.whatwg.org/#interface-domerror
  names = filterOut(names, ["DOMError"]);

  // https://dom.spec.whatwg.org/
  // Array.from(new Set(document.body.innerText.match(/interface ([A-Z]\w+)/gm).map(e => e.replace("interface ", ""))))
  names = filterOut(names, [
    "Event",
    "Window",
    "CustomEvent",
    "EventTarget",
    "EventListener",
    "AbortController",
    "AbortSignal",
    "NodeList",
    "HTMLCollection",
    "MutationObserver",
    "MutationRecord",
    "Node",
    "Document",
    "XMLDocument",
    "TouchEvent",
    "DOMImplementation",
    "DocumentType",
    "DocumentFragment",
    "ShadowRoot",
    "Element",
    "NamedNodeMap",
    "Attr",
    "CharacterData",
    "Text",
    "CDATASection",
    "ProcessingInstruction",
    "Comment",
    "AbstractRange",
    "StaticRange",
    "Range",
    "NodeIterator",
    "TreeWalker",
    "NodeFilter",
    "DOMTokenList",
    "XPathResult",
    "XPathExpression",
    "XPathNSResolver",
    "XPathEvaluator",
  ]);

  //---------- HTML https://html.spec.whatwg.org
  // Events
  // https://html.spec.whatwg.org/#events 找到 86 个
  // 总共有 101 个，剩下的应该是浏览器自定义的
  names = names.filter((e) => !e.match(/^on/));

  // window 对象上的属性
  // https://html.spec.whatwg.org/#the-window-object
  {
    let windowprops = new Set();
    let objects = [
      "window",
      "self",
      "document",
      "name",
      "location",
      "customElements",
      "locationbar",
      "menubar",
      "personalbar",
      "scrollbars",
      "statusbar",
      "toolbar",
      "status",
      "close",
      "closed",
      "stop",
      "focus",
      "blur",
      "frames",
      "length",
      "top",
      "opener",
      "parent",
      "frameElement",
      "open",
      "navigator",
      "applicationCache",
      "alert",
      "confirm",
      "prompt",
      "print",
      "postMessage",
    ];
    objects.forEach((o) => windowprops.add(o));
    names = names.filter((e) => !windowprops.has(e));
  }
  // 最后还有一些小写字母开头的 window 对象上属性、方法
  names = names.filter((e) => !e.match(/^[$a-z]\w*/));

  // html interface
  // https://html.spec.whatwg.org/
  {
    let interfaces = new Set();
    let objects = [
      "HTMLAllCollection",
      "HTMLFormControlsCollection",
      "RadioNodeList",
      "HTMLOptionsCollection",
      "DOMStringList",
      "Document",
      "HTMLElement",
      "HTMLUnknownElement",
      "DOMStringMap",
      "HTMLHtmlElement",
      "HTMLHeadElement",
      "HTMLTitleElement",
      "HTMLBaseElement",
      "HTMLLinkElement",
      "HTMLMetaElement",
      "HTMLStyleElement",
      "HTMLBodyElement",
      "HTMLHeadingElement",
      "HTMLParagraphElement",
      "HTMLHRElement",
      "HTMLPreElement",
      "HTMLQuoteElement",
      "HTMLOListElement",
      "HTMLUListElement",
      "HTMLMenuElement",
      "HTMLLIElement",
      "HTMLDListElement",
      "HTMLDivElement",
      "HTMLAnchorElement",
      "HTMLDataElement",
      "HTMLTimeElement",
      "HTMLSpanElement",
      "HTMLBRElement",
      "HTMLModElement",
      "HTMLPictureElement",
      "HTMLSourceElement",
      "HTMLImageElement",
      "HTMLIFrameElement",
      "HTMLEmbedElement",
      "HTMLObjectElement",
      "HTMLParamElement",
      "HTMLVideoElement",
      "HTMLAudioElement",
      "HTMLTrackElement",
      "HTMLMediaElement",
      "MediaError",
      "AudioTrackList",
      "AudioTrack",
      "VideoTrackList",
      "VideoTrack",
      "TextTrackList",
      "TextTrack",
      "TextTrackCueList",
      "TextTrackCue",
      "TimeRanges",
      "TrackEvent",
      "HTMLMapElement",
      "HTMLAreaElement",
      "HTMLTableElement",
      "HTMLTableCaptionElement",
      "HTMLTableColElement",
      "HTMLTableSectionElement",
      "HTMLTableRowElement",
      "HTMLTableCellElement",
      "HTMLFormElement",
      "HTMLLabelElement",
      "HTMLInputElement",
      "HTMLButtonElement",
      "HTMLSelectElement",
      "HTMLDataListElement",
      "HTMLOptGroupElement",
      "HTMLOptionElement",
      "HTMLTextAreaElement",
      "HTMLOutputElement",
      "HTMLProgressElement",
      "HTMLMeterElement",
      "HTMLFieldSetElement",
      "HTMLLegendElement",
      "ValidityState",
      "SubmitEvent",
      "FormDataEvent",
      "HTMLDetailsElement",
      "HTMLDialogElement",
      "HTMLScriptElement",
      "HTMLTemplateElement",
      "HTMLSlotElement",
      "HTMLCanvasElement",
      "CanvasRenderingContext2D",
      "CanvasGradient",
      "CanvasPattern",
      "TextMetrics",
      "ImageData",
      "Path2D",
      "ImageBitmapRenderingContext",
      "OffscreenCanvas",
      "OffscreenCanvasRenderingContext2D",
      "CustomElementRegistry",
      "ElementInternals",
      "DataTransfer",
      "DataTransferItemList",
      "DataTransferItem",
      "DragEvent",
      "Window",
      "BarProp",
      "History",
      "Location",
      "PopStateEvent",
      "HashChangeEvent",
      "PageTransitionEvent",
      "BeforeUnloadEvent",
      "ApplicationCache",
      "ErrorEvent",
      "PromiseRejectionEvent",
      "DOMParser",
      "Navigator",
      "PluginArray",
      "MimeTypeArray",
      "Plugin",
      "MimeType",
      "ImageBitmap",
      "MessageEvent",
      "EventSource",
      "WebSocket",
      "CloseEvent",
      "MessageChannel",
      "MessagePort",
      "BroadcastChannel",
      "WorkerGlobalScope",
      "DedicatedWorkerGlobalScope",
      "SharedWorkerGlobalScope",
      "Worker",
      "SharedWorker",
      "WorkerNavigator",
      "WorkerLocation",
      "Storage",
      "StorageEvent",
      "HTMLMarqueeElement",
      "HTMLFrameSetElement",
      "HTMLFrameElement",
      "HTMLDirectoryElement",
      "HTMLFontElement",
      "External",
    ];
    objects.forEach((o) => interfaces.add(o));
    names = names.filter((e) => !interfaces.has(e));
  }

  //---------- Encoding https://encoding.spec.whatwg.org/
  names = filterOut(names, [
    "TextDecoder",
    "TextEncoder",
    "TextDecoderStream",
    "TextEncoderStream",
  ]);

  // --------- XMLHttpRequest https://xhr.spec.whatwg.org/
  names = filterOut(names, [
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload",
    "XMLHttpRequest",
    "FormData",
    "ProgressEvent",
  ]);

  // --------- Streams https://streams.spec.whatwg.org/
  names = filterOut(names, [
    "ReadableStream",
    "ReadableStreamDefaultReader",
    "ReadableStreamBYOBReader",
    "ReadableStreamDefaultController",
    "ReadableByteStreamController",
    "ReadableStreamBYOBRequest",
    "WritableStream",
    "WritableStreamDefaultWriter",
    "WritableStreamDefaultController",
    "TransformStream",
    "TransformStreamDefaultController",
    "ByteLengthQueuingStrategy",
    "CountQueuingStrategy",
  ]);

  // --------- URL https://url.spec.whatwg.org/
  names = filterOut(names, ["URL", "URLSearchParams"]);

  // --------- Fetch https://fetch.spec.whatwg.org/
  names = filterOut(names, ["Headers", "Request", "Response"]);

  // --------- Notifications API https://notifications.spec.whatwg.org/
  names = filterOut(names, ["Notification", "NotificationEvent"]);

  // --------- Console https://console.spec.whatwg.org/
  names = filterOut(names, ["console"]);
}

// ---------------------------------- Khronos ---------------------------------------
{
  // --------- WebGL https://www.khronos.org/registry/webgl/specs/latest/2.0/
  names = filterOut(names, [
    "WebGLShaderPrecisionFormat",
    "WebGLShader",
    "WebGLContextEvent",
    "WebGLQuery",
    "WebGLSampler",
    "WebGLSync",
    "WebGLTransformFeedback",
    "WebGLVertexArrayObject",
    "WebGLRenderingContext",
    "WebGL2RenderingContext",
    "WebGLContextAttributes",
    "WebGLObject",
    "WebGL2RenderingContextBase",
    "WebGLTexture",
    "WebGLHandlesContextLoss",
    "WebGLProgram",
    "WebGLUniformLocation",
    "WebGLActiveInfo",
    "WebGLBuffer",
    "WebGL2RenderingContextOverloads",
    "WebGLRenderingContextBase",
    "WebGLFramebuffer",
    "WebGLRenderbuffer",
  ]);
}

// ---------------------------------- W3C ---------------------------------------
{
  // --------- Web Audio API https://www.w3.org/TR/webaudio/
  // Array.from(new Set(document.body.innerText.match(/^interface ([A-Z]\w+)/gm).map(e => e.replace("interface ", ""))))
  names = filterOut(names, [
    "BaseAudioContext",
    "AudioContext",
    "OfflineAudioContext",
    "OfflineAudioCompletionEvent",
    "AudioBuffer",
    "AudioNode",
    "AudioParam",
    "AudioScheduledSourceNode",
    "AnalyserNode",
    "AudioBufferSourceNode",
    "AudioDestinationNode",
    "AudioListener",
    "AudioProcessingEvent",
    "BiquadFilterNode",
    "ChannelMergerNode",
    "ChannelSplitterNode",
    "ConstantSourceNode",
    "ConvolverNode",
    "DelayNode",
    "DynamicsCompressorNode",
    "GainNode",
    "IIRFilterNode",
    "MediaElementAudioSourceNode",
    "MediaStreamAudioDestinationNode",
    "MediaStreamAudioSourceNode",
    "MediaStreamTrackAudioSourceNode",
    "OscillatorNode",
    "PannerNode",
    "PeriodicWave",
    "ScriptProcessorNode",
    "StereoPannerNode",
    "WaveShaperNode",
    "AudioWorklet",
    "AudioWorkletGlobalScope",
    "AudioParamMap",
    "AudioWorkletNode",
    "AudioWorkletProcessor",
  ]);

  // --------- Web Background Synchronization https://wicg.github.io/background-sync/spec/#sync-manager-interface
  names = filterOut(names, ["SyncManager"]);

  // --------- Media Source Extensions https://www.w3.org/TR/media-source/
  names = filterOut(names, ["MediaSource", "SourceBuffer", "SourceBufferList"]);

  // --------- The Screen Orientation API https://www.w3.org/TR/screen-orientation/
  names = filterOut(names, ["ScreenOrientation"]);

  // --------- WebRTC https://www.w3.org/TR/webrtc/
  names = filterOut(names, [
    "RTCPeerConnection",
    "RTCSessionDescription",
    "RTCIceCandidate",
    "RTCPeerConnectionIceEvent",
    "RTCPeerConnectionIceErrorEvent",
    "RTCCertificate",
    "RTCRtpSender",
    "RTCRtpReceiver",
    "RTCRtpTransceiver",
    "RTCDtlsTransport",
    "RTCIceTransport",
    "RTCTrackEvent",
    "RTCSctpTransport",
    "RTCDataChannel",
    "RTCDataChannelEvent",
    "RTCDTMFSender",
    "RTCDTMFToneChangeEvent",
    "RTCStatsReport",
    "RTCError",
    "RTCErrorEvent",
  ]);

  // --------- MediaStream Image Capture https://www.w3.org/TR/image-capture/
  names = filterOut(names, [
    "ImageCapture",
    "PhotoCapabilities",
    "MediaSettingsRange",
  ]);

  // --------- Media Capture and Streams https://www.w3.org/TR/mediacapture-streams/
  names = filterOut(names, [
    "OverconstrainedError",
    "MediaStream",
    "MediaStreamTrack",
    "MediaStreamTrackEvent",
    "MediaDevices",
    "MediaDeviceInfo",
    "InputDeviceInfo",
    "ConstrainablePattern",
  ]);

  // --------- MediaStream Recording https://www.w3.org/TR/mediastream-recording/
  names = filterOut(names, [
    "MediaRecorder",
    "BlobEvent",
    "MediaRecorderErrorEvent",
  ]);

  // --------- Encrypted Media Extensions https://www.w3.org/TR/encrypted-media/
  names = filterOut(names, [
    "MediaKeySystemAccess",
    "MediaKeys",
    "MediaKeySession",
    "MediaKeyStatusMap",
    "MediaKeyMessageEvent",
    "MediaEncryptedEvent",
  ]);

  // --------- Media Capabilities https://w3c.github.io/media-capabilities/
  names = filterOut(names, ["MediaCapabilities"]);

  // --------- Indexed Database API https://www.w3.org/TR/IndexedDB/
  names = filterOut(names, [
    "IDBRequest",
    "IDBOpenDBRequest",
    "IDBVersionChangeEvent",
    "IDBFactory",
    "IDBDatabase",
    "IDBObjectStore",
    "IDBIndex",
    "IDBKeyRange",
    "IDBCursor",
    "IDBCursorWithValue",
    "IDBTransaction",
  ]);

  // --------- Geolocation API https://w3c.github.io/geolocation-api/
  names = filterOut(names, [
    "Geolocation",
    "GeolocationPosition",
    "GeolocationCoordinates",
    "GeolocationPositionError",
  ]);

  // --------- Gamepad https://www.w3.org/TR/gamepad/
  names = filterOut(names, ["Gamepad", "GamepadButton", "GamepadEvent"]);

  // --------- Gamepad Extensions https://w3c.github.io/gamepad/extensions.html
  names = filterOut(names, ["GamepadHapticActuator", "GamepadPose"]);

  // --------- Web Cryptography API https://www.w3.org/TR/WebCryptoAPI/
  names = filterOut(names, ["crypto", "Crypto"]);

  // --------- Clipboard API and events https://www.w3.org/TR/clipboard-apis/
  names = filterOut(names, ["ClipboardEvent", "ClipboardItem"]);

  // --------- Media Capture from DOM Elements https://www.w3.org/TR/mediacapture-fromelement/
  names = filterOut(names, ["CanvasCaptureMediaStreamTrack"]);

  // --------- Web App Manifest https://www.w3.org/TR/2018/WD-appmanifest-20180220/#beforeinstallpromptevent-interface
  names = filterOut(names, ["BeforeInstallPromptEvent"]);

  // --------- Battery Status API https://www.w3.org/TR/battery-status/
  names = filterOut(names, ["BatteryManager"]);

  // --------- Document Object Model XPath https://www.w3.org/TR/DOM-Level-3-XPath/xpath.html
  names = filterOut(names, [
    "XPathEvaluator",
    "XPathExpression",
    "XPathNSResolver",
    "XPathResult",
    "XPathNamespace",
  ]);

  // --------- DOM Parsing and Serialization https://www.w3.org/TR/DOM-Parsing/
  names = filterOut(names, ["XMLSerializer", "DOMParser"]);

  // --------- UI Events https://www.w3.org/TR/uievents/
  names = filterOut(names, [
    "UIEvent",
    "FocusEvent",
    "MouseEvent",
    "WheelEvent",
    "InputEvent",
    "KeyboardEvent",
    "CompositionEvent",
    "MutationEvent",
  ]);

  // --------- WebVTT: The Web Video Text Tracks Format https://www.w3.org/TR/webvtt1/
  names = filterOut(names, ["VTTCue", "VTTRegion"]);

  // --------- CSS Transitions https://www.w3.org/TR/css-transitions-1/
  names = filterOut(names, ["TransitionEvent"]);

  // --------- Touch Events https://www.w3.org/TR/touch-events/
  names = filterOut(names, ["Touch", "TouchList", "TouchEvent"]);

  // --------- Document Object Model Events https://www.w3.org/TR/2002/WD-DOM-Level-3-Events-20020208/events
  names = filterOut(names, [
    "EventTarget",
    "EventGroup",
    "EventListener",
    "Event",
    "DocumentEvent",
    "CustomEvent",
    "UIEvent",
    "MouseEvent",
    "TextEvent",
    "MutationEvent",
  ]);

  // --------- Long Tasks API https://w3c.github.io/longtasks/
  names = filterOut(names, [
    "PerformanceLongTaskTiming",
    "TaskAttributionTiming",
  ]);

  // --------- CSS Object Model (CSSOM) https://www.w3.org/TR/cssom-1
  names = filterOut(names, [
    "MediaList",
    "StyleSheet",
    "CSSStyleSheet",
    "StyleSheetList",
    "LinkStyle",
    "CSSRuleList",
    "CSSRule",
    "CSSStyleRule",
    "CSSImportRule",
    "CSSGroupingRule",
    "CSSMediaRule",
    "CSSPageRule",
    "CSSMarginRule",
    "CSSNamespaceRule",
    "CSSStyleDeclaration",
    "ElementCSSInlineStyle",
    "CSS",
  ]);

  // --------- CSS Typed OM Level 1 https://www.w3.org/TR/css-typed-om-1/
  names = filterOut(names, [
    "CSSStyleValue",
    "StylePropertyMapReadOnly",
    "StylePropertyMap",
    "CSSUnparsedValue",
    "CSSVariableReferenceValue",
    "CSSKeywordValue",
    "CSSNumericValue",
    "CSSUnitValue",
    "CSSMathValue",
    "CSSMathSum",
    "CSSMathProduct",
    "CSSMathNegate",
    "CSSMathInvert",
    "CSSMathMin",
    "CSSMathMax",
    "CSSNumericArray",
    "CSSTransformValue",
    "CSSTransformComponent",
    "CSSTranslate",
    "CSSRotate",
    "CSSScale",
    "CSSSkew",
    "CSSSkewX",
    "CSSSkewY",
    "CSSPerspective",
    "CSSMatrixComponent",
    "CSSPositionValue",
    "CSSImageValue",
  ]);

  // --------- Selection API https://www.w3.org/TR/selection-api/
  names = filterOut(names, ["Selection"]);

  // --------- Content Security Policy Level 3 https://www.w3.org/TR/CSP3/
  names = filterOut(names, ["SecurityPolicyViolationEvent"]);

  // --------- CSSOM View Module https://www.w3.org/TR/cssom-view-1/
  names = filterOut(names, [
    "MediaQueryList",
    "MediaQueryListEvent",
    "Screen",
    "CaretPosition",
    "GeometryUtils",
  ]);

  // --------- Scalable Vector Graphics (SVG)
  // https://svgwg.org/svg2-draft/Overview.html
  // https://www.w3.org/TR/SVG11/
  // let names = Object.getOwnPropertyNames(window);
  // names.filter(e => e.match(/^SVG/))
  names = filterOut(names, [
    "SVGViewElement",
    "SVGUseElement",
    "SVGUnitTypes",
    "SVGTransformList",
    "SVGTransform",
    "SVGTitleElement",
    "SVGTextPositioningElement",
    "SVGTextPathElement",
    "SVGTextElement",
    "SVGTextContentElement",
    "SVGTSpanElement",
    "SVGSymbolElement",
    "SVGSwitchElement",
    "SVGStyleElement",
    "SVGStringList",
    "SVGStopElement",
    "SVGSetElement",
    "SVGScriptElement",
    "SVGSVGElement",
    "SVGRectElement",
    "SVGRect",
    "SVGRadialGradientElement",
    "SVGPreserveAspectRatio",
    "SVGPolylineElement",
    "SVGPolygonElement",
    "SVGPointList",
    "SVGPoint",
    "SVGPatternElement",
    "SVGPathElement",
    "SVGNumberList",
    "SVGNumber",
    "SVGMetadataElement",
    "SVGMatrix",
    "SVGMaskElement",
    "SVGMarkerElement",
    "SVGMPathElement",
    "SVGLinearGradientElement",
    "SVGLineElement",
    "SVGLengthList",
    "SVGLength",
    "SVGImageElement",
    "SVGGraphicsElement",
    "SVGGradientElement",
    "SVGGeometryElement",
    "SVGGElement",
    "SVGForeignObjectElement",
    "SVGFilterElement",
    "SVGFETurbulenceElement",
    "SVGFETileElement",
    "SVGFESpotLightElement",
    "SVGFESpecularLightingElement",
    "SVGFEPointLightElement",
    "SVGFEOffsetElement",
    "SVGFEMorphologyElement",
    "SVGFEMergeNodeElement",
    "SVGFEMergeElement",
    "SVGFEImageElement",
    "SVGFEGaussianBlurElement",
    "SVGFEFuncRElement",
    "SVGFEFuncGElement",
    "SVGFEFuncBElement",
    "SVGFEFuncAElement",
    "SVGFEFloodElement",
    "SVGFEDropShadowElement",
    "SVGFEDistantLightElement",
    "SVGFEDisplacementMapElement",
    "SVGFEDiffuseLightingElement",
    "SVGFEConvolveMatrixElement",
    "SVGFECompositeElement",
    "SVGFEComponentTransferElement",
    "SVGFEColorMatrixElement",
    "SVGFEBlendElement",
    "SVGEllipseElement",
    "SVGElement",
    "SVGDescElement",
    "SVGDefsElement",
    "SVGComponentTransferFunctionElement",
    "SVGClipPathElement",
    "SVGCircleElement",
    "SVGAnimationElement",
    "SVGAnimatedTransformList",
    "SVGAnimatedString",
    "SVGAnimatedRect",
    "SVGAnimatedPreserveAspectRatio",
    "SVGAnimatedNumberList",
    "SVGAnimatedNumber",
    "SVGAnimatedLengthList",
    "SVGAnimatedLength",
    "SVGAnimatedInteger",
    "SVGAnimatedEnumeration",
    "SVGAnimatedBoolean",
    "SVGAnimatedAngle",
    "SVGAnimateTransformElement",
    "SVGAnimateMotionElement",
    "SVGAnimateElement",
    "SVGAngle",
    "SVGAElement",
  ]);

  // --------- Resize Observer https://www.w3.org/TR/resize-observer/
  names = filterOut(names, [
    "ResizeObserver",
    "ResizeObserverEntry",
    "ResizeObserverSize",
    "ResizeObservation",
  ]);

  // --------- Reporting API https://w3c.github.io/reporting/#idl-index
  names = filterOut(names, ["ReportBody", "Report", "ReportingObserver"]);

  // --------- Pointer Events https://www.w3.org/TR/pointerevents3/
  names = filterOut(names, ["PointerEvent"]);

  // --------- Navigation Timing
  // https://www.w3.org/TR/navigation-timing/
  // https://www.w3.org/TR/navigation-timing-2/
  names = filterOut(names, [
    "PerformanceTiming",
    "PerformanceNavigation",
    "Performance",
    "PerformanceNavigationTiming",
  ]);

  // --------- Server Timing https://www.w3.org/TR/server-timing/
  names = filterOut(names, [
    "PerformanceServerTiming",
    "PerformanceResourceTiming",
  ]);

  // --------- Paint Timing https://www.w3.org/TR/paint-timing/
  names = filterOut(names, ["PerformancePaintTiming"]);

  // --------- Performance Timeline Level 2 https://www.w3.org/TR/performance-timeline-2/
  names = filterOut(names, [
    "PerformanceEntry",
    "PerformanceObserver",
    "PerformanceObserverEntryList",
  ]);

  // --------- User Timing Level 3 https://www.w3.org/TR/user-timing-3/
  names = filterOut(names, ["PerformanceMark", "PerformanceMeasure"]);

  // --------- Web Animations https://www.w3.org/TR/web-animations-1/#idl-index
  names = filterOut(names, [
    "AnimationTimeline",
    "DocumentTimeline",
    "Animation",
    "AnimationEffect",
    "KeyframeEffect",
    "AnimationPlaybackEvent",
  ]);

  // --------- Intersection Observer https://www.w3.org/TR/intersection-observer/
  names = filterOut(names, [
    "IntersectionObserver",
    "IntersectionObserverEntry",
  ]);

  // --------- Cooperative Scheduling of Background Tasks https://www.w3.org/TR/requestidlecallback/
  names = filterOut(names, ["IdleDeadline"]);

  // --------- CSS Font Loading Module Level 3 https://drafts.csswg.org/css-font-loading/
  names = filterOut(names, ["FontFace", "FontFaceSetLoadEvent", "FontFaceSet"]);

  // --------- File API https://www.w3.org/TR/FileAPI/
  names = filterOut(names, [
    "Blob",
    "File",
    "FileList",
    "FileReader",
    "FileReaderSync",
  ]);

  // --------- Geometry Interfaces Module Level 1 https://www.w3.org/TR/geometry-1/
  names = filterOut(names, [
    "WebKitCSSMatrix",
    "DOMPointReadOnly",
    "DOMPoint",
    "DOMRectReadOnly",
    "DOMRect",
    "DOMRectList",
    "DOMQuad",
    "DOMMatrixReadOnly",
    "DOMMatrix",
  ]);

  // --------- Web IDL https://heycam.github.io/webidl/
  names = filterOut(names, ["DOMException"]);

  // --------- CSS Conditional Rules Module Level 3 https://www.w3.org/TR/css3-conditional/
  names = filterOut(names, [
    "CSSGroupingRule",
    "CSSConditionRule",
    "CSSMediaRule",
    "CSSSupportsRule",
    "CSS",
  ]);

  // --------- CSS Animations Level 1 https://www.w3.org/TR/css-animations-1/
  names = filterOut(names, [
    "AnimationEvent",
    "CSSKeyframeRule",
    "CSSKeyframesRule",
  ]);

  // --------- Document Object Model CSS https://www.w3.org/TR/DOM-Level-2-Style/css.html
  names = filterOut(names, ["CSSFontFaceRule"]);

  // --------- WebAssembly JavaScript Interface https://webassembly.github.io/spec/js-api/
  names = filterOut(names, ["WebAssembly"]);

  // --------- Permissions Policy https://w3c.github.io/webappsec-feature-policy/
  names = filterOut(names, ["FeaturePolicy"]);

  // --------- Media Session Standard https://www.w3.org/TR/mediasession/
  names = filterOut(names, ["MediaSession", "MediaMetadata"]);

  // --------- Payment Handler API https://www.w3.org/TR/payment-handler/
  names = filterOut(names, [
    "PaymentManager",
    "PaymentInstruments",
    "CanMakePaymentEvent",
    "PaymentRequestEvent",
  ]);

  // --------- Payment Request API https://www.w3.org/TR/payment-request/
  names = filterOut(names, [
    "PaymentRequest",
    "PaymentAddress",
    "PaymentResponse",
    "MerchantValidationEvent",
    "PaymentMethodChangeEvent",
    "PaymentRequestUpdateEvent",
  ]);

  // --------- Permissions https://www.w3.org/TR/permissions/
  names = filterOut(names, ["PermissionStatus", "Permissions"]);

  // --------- Picture-in-Picture https://www.w3.org/TR/picture-in-picture/
  names = filterOut(names, [
    "PictureInPictureWindow",
    "EnterPictureInPictureEvent",
  ]);

  // --------- Push API https://www.w3.org/TR/push-api/#idl-index
  names = filterOut(names, [
    "PushManager",
    "PushSubscriptionOptions",
    "PushSubscription",
    "PushMessageData",
    "PushEvent",
    "PushSubscriptionChangeEvent",
  ]);

  // --------- Remote Playback API https://www.w3.org/TR/remote-playback/
  names = filterOut(names, ["RemotePlayback"]);

  // --------- Media Playback Quality https://w3c.github.io/media-playback-quality/
  names = filterOut(names, ["VideoPlaybackQuality"]);
}

// ---------------------------------- WICG ---------------------------------------
{
  // --------- Web Background Synchronization https://wicg.github.io/background-sync/spec/#sync-manager-interface
  names = filterOut(names, ["SyncManager"]);

  // --------- Network Information API https://wicg.github.io/netinfo/#networkinformation-interface
  names = filterOut(names, ["NetworkInformation"]);

  // --------- Compression Streams https://wicg.github.io/compression/
  names = filterOut(names, ["CompressionStream", "DecompressionStream"]);

  // --------- Visual Viewport API https://wicg.github.io/visual-viewport/#the-visualviewport-interface
  names = filterOut(names, ["VisualViewport"]);

  // --------- Event Timing API https://wicg.github.io/event-timing/
  names = filterOut(names, ["PerformanceEventTiming"]);

  // --------- Element Timing API https://wicg.github.io/element-timing/
  names = filterOut(names, ["PerformanceElementTiming"]);

  // --------- Layout Instability API https://wicg.github.io/layout-instability/
  names = filterOut(names, ["LayoutShift", "LayoutShiftAttribution"]);

  // --------- Largest Contentful Paint https://wicg.github.io/largest-contentful-paint/
  names = filterOut(names, ["LargestContentfulPaint"]);

  // --------- Input Device Capabilities https://wicg.github.io/input-device-capabilities/
  names = filterOut(names, ["InputDeviceCapabilities"]);

  // --------- Background Fetch https://wicg.github.io/background-fetch/
  names = filterOut(names, [
    "BackgroundFetchManager",
    "BackgroundFetchRegistration",
    "BackgroundFetchRecord",
    "BackgroundFetchEvent",
    "BackgroundFetchUpdateUIEvent",
  ]);

  // --------- Web Periodic Background Synchronization https://wicg.github.io/background-sync/spec/PeriodicBackgroundSync-index.html
  names = filterOut(names, ["PeriodicSyncManager"]);

  // --------- Web Speech API https://wicg.github.io/speech-api/
  names = filterOut(names, [
    "SpeechRecognition",
    "SpeechRecognitionErrorEvent",
    "SpeechRecognitionAlternative",
    "SpeechRecognitionResult",
    "SpeechRecognitionResultList",
    "SpeechRecognitionEvent",
    "SpeechGrammar",
    "SpeechGrammarList",
    "SpeechSynthesis",
    "SpeechSynthesisUtterance",
    "SpeechSynthesisEvent",
    "SpeechSynthesisErrorEvent",
    "SpeechSynthesisVoice",
  ]);
}

// ---------------------------------- Web Bluetooth Community Group ---------------------------------------
{
  // --------- Web Bluetooth https://webbluetoothcg.github.io/web-bluetooth/
  names = filterOut(names, [
    "Bluetooth",
    "BluetoothPermissionResult",
    "ValueEvent",
    "BluetoothDevice",
    "BluetoothManufacturerDataMap",
    "BluetoothServiceDataMap",
    "BluetoothAdvertisingEvent",
    "BluetoothRemoteGATTServer",
    "BluetoothRemoteGATTService",
    "BluetoothRemoteGATTCharacteristic",
    "BluetoothCharacteristicProperties",
    "BluetoothRemoteGATTDescriptor",
    "BluetoothUUID",
  ]);
}

// ---------------------------------- 没有标准 ---------------------------------------
{
  // --------- MediaStreamEvent https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamEvent
  names = filterOut(names, ["MediaStreamEvent"]);

  // --------- XSLTProcessor https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor
  names = filterOut(names, ["XSLTProcessor"]);
}

// ---------------------------------- Unknown ---------------------------------------
{
  names = filterOut(names, ["FragmentDirective", "UserActivation"]);
}
