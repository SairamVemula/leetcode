
export const withExecutionTime = <TArgs extends any[], TReturn>(
  functionName: string,
  func: (...args: TArgs) => TReturn
): ((...args: TArgs) => TReturn) => {
  return (...args: TArgs): TReturn => {
    const start = performance.now(); // Get the starting timestamp.
    const result = func(...args); // Execute the original function.
    const end = performance.now(); // Get the ending timestamp.
    const duration = end - start; // Calculate the duration.

    console.log(`Function '${functionName}' executed in ${duration.toFixed(2)}ms`);

    return result; // Return the original result.
  };
};