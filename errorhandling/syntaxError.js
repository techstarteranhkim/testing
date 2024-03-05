// Folgender Code wirft einen SyntaxError

try {
  throw new SyntaxError("The Evil Syntaxerror");
} catch (error) {
  console.log(error.message);
}
