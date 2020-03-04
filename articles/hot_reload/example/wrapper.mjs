// hot will call:
reactHotLoader.register(
  WrappedComponent,
  getComponentDisplayName(WrappedComponent),
  'RHL' + moduleId
);

// register => createClassProxy =>
// defineProxyMethods => fakeBasePrototype =>

/* Each method is going to be wrapped now */
function methodWrapperFactory(wrapperName, realMethod) {
  return copyMethodDescriptors(function wrappedMethod() {
    for (var _len2 = arguments.length,
      rest = Array(_len2),
      _key2 = 0; _key2 < _len2; _key2++
    ) {
      rest[_key2] = arguments[_key2];
    }

    return realMethod.apply(this, rest);
  }, realMethod);
}