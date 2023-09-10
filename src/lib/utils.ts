const shuffleArray = <T>(array: T[]) => {
  const output: T[] = Array.from(array);

  for (let i = output.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const tmp = output[i];
    output[i] = output[random];
    output[random] = tmp;
  }

  return output;
};

export { shuffleArray };
