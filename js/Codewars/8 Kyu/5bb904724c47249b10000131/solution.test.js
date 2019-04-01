const { point, points } = require("./solution");

describe("placeholder", () => {
  describe("For one match", () => {
    it("should return three points if our team wins one match", () => {
      expect(point("3:2")).toBe(3);
    });

    it("should return 1 points if our team draws in one match", () => {
      expect(point("2:2")).toBe(1);
    });

    it("should return 0 points if our team loses one match", () => {
      expect(point("0:1")).toBe(0);
    });
  });

  describe("For multiple matches", () => {
    it("should return correct score for all matches", () => {
      const matches = ["1:0", "2:0", "3:0", "4:0"];
      expect(points(matches)).toBe(12);
    });
  });
});
