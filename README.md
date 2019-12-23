```bash
npm i
npm run asbuild
npx http-server
```

Stack trace:
```
index.js:5 abort called at index.ts:243:13
    abort	@	index.js:5
    ~lib/rt/tlsf/insertBlock	@	wasm-a0e76066:3
    ~lib/rt/tlsf/reallocateBlock	@	wasm-a0e76066:29
    ~lib/rt/tlsf/__realloc	@	wasm-a0e76066:30
    ~lib/array/ensureSize	@	wasm-a0e76066:32
    ~lib/array/Array<i32>#push	@	wasm-a0e76066:33
    assembly/index/willFail	@	wasm-a0e76066:35
    (anonymous)	@	index.js:14
    async function (async)		
    (anonymous)	@	index.js:9
    (anonymous)	@	index.js:15
```