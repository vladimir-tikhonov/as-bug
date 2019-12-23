(async () => {
    const importObject = {
        env: {
            abort(_msg, _file, line, column) {
                console.error("abort called at index.ts:" + line + ":" + column);
            }
        }
    };
    const module = await WebAssembly.instantiateStreaming(
        fetch("build/untouched.wasm"),
        importObject
    );
    module.instance.exports.willNotFail();
    module.instance.exports.willFail();
  })();