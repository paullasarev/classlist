import { classlist } from "./classlist";

describe("classlist", () => {
  it("should get empty for no args", () => {
    expect(classlist()).toBe("");
  });
  it("should get empty for empty args", () => {
    expect(classlist("")).toBe("");
  });
  it("should get empty for null args", () => {
    expect(classlist(null)).toBe("");
  });
  it("should get empty for two empty args", () => {
    expect(classlist("", "")).toBe("");
  });
  it("should get single name", () => {
    expect(classlist("name")).toBe("name");
  });
  it("should get two names", () => {
    expect(classlist("name", "second")).toBe("name second");
  });
  it("should get rid of bool", () => {
    expect(classlist("name", true)).toBe("name");
  });

  it("should add array content", () => {
    expect(classlist("name", ["second"])).toBe("name second");
  });
  it("should not add empty array content", () => {
    expect(classlist("name", [])).toBe("name");
  });
  it("should not add array boolean content", () => {
    expect(classlist("name", [true])).toBe("name");
  });

  it("should add array item if predicate is true", () => {
    expect(classlist("name", [true, "second"])).toBe("name second");
  });
  it("should not add array item if predicate is false", () => {
    expect(classlist("name", [false, "second"])).toBe("name");
  });

  it("should add args item if predicate is true", () => {
    expect(classlist(true, "second")).toBe("second");
  });
  it("should not add args item if predicate is false", () => {
    expect(classlist(false, "second")).toBe("");
  });

  it("should add array items if predicate is true", () => {
    expect(classlist("name", [true, "second", "third"])).toBe(
      "name second third"
    );
  });
  it("should not add array items if predicate is false", () => {
    expect(classlist("name", [false, "second", "third"])).toBe("name");
  });

  it("should nod add undefined items if predicate is true", () => {
    expect(classlist("name", [true, undefined, "third"])).toBe("name third");
  });

  it("should add nested plain array items if predicate is true", () => {
    expect(classlist("name", [true, ["second", "third"]])).toBe(
      "name second third"
    );
  });
  it("should not add nested plain array items if predicate is false", () => {
    expect(classlist("name", [false, ["second", "third"]])).toBe("name");
  });

  it("should add nested array items if predicate is true", () => {
    expect(classlist("name", [true, [true, "second", "third"]])).toBe(
      "name second third"
    );
  });
  it("should not add nested array items if predicate is true and nested predicate is false", () => {
    expect(classlist("name", [true, [false, "second", "third"]])).toBe("name");
  });
  it("should not add nested array items if predicate is false and nested predicate is true", () => {
    expect(classlist("name", [false, [true, "second", "third"]])).toBe("name");
  });
});
