const quiz = require("./Quiz");

describe("Testing Quiz", () => {
  //if (!question) throw ReferenceError("No such question");
  test("if question exists", () => {
    const questionKey = "frage_99";
    const answer = "Weil er immer kalt gelötet ist.";
    expect(() => quiz.isRightSolutionForQuestion(questionKey, answer)).toThrow(
      ReferenceError
    );
  });
  //if (typeof answer !== "string")
  test("if type of answer isnt string", () => {
    const questionKey = "frage_2";
    const answer = 42;
    expect(() => quiz.isRightSolutionForQuestion(questionKey, answer)).toThrow(
      TypeError
    );
  });
  //if (answer === question.Antwort)return true
  test("if answer is correct", () => {
    const questionKey = "frage_3";
    const answer = "Weil er einen Virus hatte.";
    expect(quiz.isRightSolutionForQuestion(questionKey, answer)).toBeTruthy();
  });

  // return false
  test("if answer is correct", () => {
    const questionKey = "frage_4";
    const answer = "RandomFalseAnswer";
    expect(quiz.isRightSolutionForQuestion(questionKey, answer)).toBeFalsy();
  });
});
