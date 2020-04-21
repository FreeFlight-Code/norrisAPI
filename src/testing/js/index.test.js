import {
  handleJokeClick,
  truncString,
  getJokesBySearchTerm,
  getCategories,
  getRandomJoke,
  sort,
  simulatedAuthenticationCall
} from "../../js";

describe("Checks common js functions", () => {
  describe("handleJokeClick", () => {
    const tempJoke = handleJokeClick({});
    expect(tempJoke.hasOwnProperty("viewed_at") === true);
  });

  describe("truncString", () => {
    it("limits string to specified characters - 10", () => {
      const string =
        "There is no way to know how things work or where things go";
      expect(truncString(string, 10)).toEqual("There i...");
    });
    it("limits string to specified characters - 30", () => {
      const string =
        "There is no way to know how things work or where things go";
      expect(truncString(string, 30)).toEqual("There is no way to know how...");
    });
  });
  describe("getJokesBySearchTerm", () => {
    it("gets jokes from a search term", async () => {
      const jokes = await getJokesBySearchTerm("japan");
      expect(jokes.length).toBeTruthy();
    });
  });
  describe("getCategories", () => {
    it("get categories", async () => {
      const categories = await getCategories();
      expect(categories).toEqual(
        expect.arrayContaining([
          "animal",
          "career",
          "celebrity",
          "dev",
          "explicit",
          "fashion",
          "food",
          "history",
          "money",
          "movie",
          "music",
          "political",
          "religion",
          "science",
          "sport",
          "travel",
        ])
      );
    });
  });
  describe("get Random joke", () => {
    it("", () => {
      getRandomJoke();
    });
  });
  describe("sort function", () => {
    it("if key/value is array sorts alphabetically", () => {
      const array1 = [
        { simpleProperty: ["apple"] },
        { simpleProperty: ["zebra"] }
      ];
      const array2 = [
        { simpleProperty: ["zebra"] },
        { simpleProperty: ["apple"] }
      ];
      const sorted = sort(array2)("simpleProperty");
      const sortedReverse = sort(array1)("simpleProperty", 1);
      expect(sorted).toEqual(array1);
      expect(sortedReverse).toEqual(array2);
    });
    it("if key/value is array sorts numerically", () => {
      const array1 = [
        { simpleProperty: [1] },
        { simpleProperty: [2] },
        { simpleProperty: [3] },
      ];
      const array2 = [
        { simpleProperty: [3] },
        { simpleProperty: [2] },
        { simpleProperty: [1] },
      ];
      const sorted = sort(array2)("simpleProperty");
      const sortedReverse = sort(array1)("simpleProperty", 1);
      expect(sorted).toEqual(array1);
      expect(sortedReverse).toEqual(array2);
    });
    it("sorts value low to high", () => {
      const array1 = [
        { simpleProperty: 1 },
        { simpleProperty: 2 },
        { simpleProperty: 3 }
      ];
      const array2 = [
        { simpleProperty: 3 },
        { simpleProperty: 2 },
        { simpleProperty: 1 }
      ];
      const sorted = sort(array2)("simpleProperty");
      const sortedReverse = sort(array1)("simpleProperty", 1);
      expect(sorted).toEqual(array1);
      expect(sortedReverse).toEqual(array2);
    });
    it("sorts value alphabetically", () => {
      const array1 = [
        { simpleProperty: "a" },
        { simpleProperty: "a" },
        { simpleProperty: "b" },
        { simpleProperty: "c" }
      ];
      const array2 = [
        { simpleProperty: "c" },
        { simpleProperty: "b" },
        { simpleProperty: "a" },
        { simpleProperty: "a" }
      ];
      const sorted = sort(array2)("simpleProperty");
      const sortedReverse = sort(array1)("simpleProperty", 1);
      expect(sorted).toEqual(array1);
      expect(sortedReverse).toEqual(array2);
    });
  });
  describe (' simulatedAuthenticationCall ', () => {
    it(' fails ', async () => {
      const result = await simulatedAuthenticationCall("test")
      .then(res=>res)
      .catch(err=>{
        expect(err).toEqual({ message: "User information not valid" });
      })
    })
    it(' passes ', async () => {
      const result = await simulatedAuthenticationCall({name: "david"})
      .then(res=>{
        expect(res).toEqual({ name: "david" });
      })
    })
  })
});
