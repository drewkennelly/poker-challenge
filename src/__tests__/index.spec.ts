import { handRank, compareHands, parseHand, Hand } from "../index";

describe("parseHand", () => {});

describe("handRank", () => {
  it("calculates the rank of a hand", () => {
    const input: Hand = [
      [0, "D"],
      [1, "C"],
      [2, "S"],
      [3, "H"],
      [4, "C"],
    ];
    const expected = {
      rank: 5,
      cards: [
        [4, ""],
        [3, ""],
        [2, ""],
        [1, ""],
        [0, ""],
      ],
    };

    expect(handRank(input)).toEqual(expected);
  });
});

describe("compareHands", () => {});
