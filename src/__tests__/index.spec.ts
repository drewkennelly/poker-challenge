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

describe("compareHands", () => {
  it("compares two hands and returns the winner", () => {
    const hand1: Hand = [
      [1, "D"],
      [8, "C"],
      [13, "S"],
      [13, "H"],
      [13, "C"],
    ];
    const hand2: Hand = [
      [2, "D"],
      [3, "D"],
      [4, "D"],
      [10, "D"],
      [11, "D"],
    ];

    expect(compareHands(hand1, hand2)).toBe(2);
  });
});
