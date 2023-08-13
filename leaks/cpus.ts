import { cpus } from "node:os";

// after some time, memory usage will increase
// but not rapidly
while (true) cpus();
