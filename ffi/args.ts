import { FFIType, dlopen } from "bun:ffi";

const { symbols: lib, close } = dlopen("/lib64/libc.so.6", {
    puts: {
        args: [],
        returns: FFIType.void
    }
});

close(); // should close the library and functions should stop to work

// tsserver complains but not bun
lib.puts(Buffer.from("hm\0"));
