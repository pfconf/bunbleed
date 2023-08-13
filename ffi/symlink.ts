import { dlopen, FFIType } from "bun:ffi";

const { symbols: lib } = dlopen("libc.so", {
    puts: {
        args: [FFIType.cstring],
        returns: FFIType.void
    }
});

// @ts-ignore smh
lib.puts(Buffer.from("haha\0"));
