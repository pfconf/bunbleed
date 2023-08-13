import { FFIType, dlopen } from "bun:ffi";
import { homedir } from "node:os";

// https://github.com/oven-sh/bun/blob/main/src/bun.js/node/node_os.zig#L349
// relies on HOME env variable
// process.env is useless
const { symbols: lib } = dlopen("/lib64/libcap.so", {
    putenv: {
        args: [FFIType.cstring],
        returns: FFIType.void
    }
});

const cstr = (s: string) => Buffer.from(s + '\0');

// @ts-ignore broken types
lib.putenv(cstr("HOME=Hey bun! Suck on deez nuts"));

console.log(homedir());
