type LogType = "jsx" | "pixi";

function isDebugEnabled(type: LogType): boolean {
  const value = window.localStorage.getItem("pixi-solid");
  return value === "*" || value === type;
}

export const createLogger = (type: LogType) => {
  const namespace = `pixi-solid:${type}`;
  return {
    log: (...args: unknown[]) => {
      if (isDebugEnabled(type)) {
        console.log(`[${namespace}]`, ...args);
      }
    },
    error: (...args: unknown[]) => {
      if (isDebugEnabled(type)) {
        console.error(`[${namespace}]`, ...args);
      }
    },
  };
};
