import { FFIType, dlopen } from "bun:ffi";
import { homedir } from "node:os";

// https://github.com/oven-sh/bun/blob/main/src/bun.js/node/node_os.zig#L349
// relies on HOME env variable
// but doesn't cover for unset HOME
const { symbols: lib } = dlopen("/lib64/libc.so.6", {
    unsetenv: {
        args: [FFIType.cstring],
        returns: FFIType.void
    }
});

const cstr = (s: string) => Buffer.from(s + '\0');

// @ts-ignore broken types
lib.unsetenv(cstr("HOME"));

console.log(homedir());
