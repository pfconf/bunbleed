import { dlopen } from "bun:ffi";

// Error doesn't know if the library is invalid or the path 
// it should check first for path and then the lib
// The error message is also not at right place
let _ = dlopen("/lib64/liblol.so", {
    deezNuts: {}
});
