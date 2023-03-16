// Import required modules
import * as fs from "fs";

// Define Card and Hand types
type Card = [number, string];
export type Hand = Card[];

// Define HandRank interface
interface HandRank {
  rank: number;
  cards: Hand;
}

// Function to determine the rank of a hand
export function handRank(hand: Hand): HandRank {
  // Extract values and suits from the hand
  const values = hand.map(([value]) => value);
  const suits = hand.map(([, suit]) => suit);
  const valueCounts = new Map<number, number>();
  let flush = true;
  let straight = true;

  // Iterate through the hand and update value counts, flush and straight flags
  for (let i = 0; i < hand.length; i += 1) {
    // Update the count of card values
    valueCounts.set(values[i], (valueCounts.get(values[i]) || 0) + 1);

    // Check for flush (all cards have the same suit)
    if (suits[i] !== suits[0]) {
      flush = false;
    }

    // Check for straight (consecutive card values)
    if (i > 0 && values[i - 1] + 1 !== values[i]) {
      straight = false;
    }
  }

  // Determine the maximum card value and maximum value count in the hand
  const maxValue = Math.max(...values);
  const maxCount = Math.max(...Array.from(valueCounts.values()));

  let rank = 0;

  // Assign the rank based on the combination of cards in the hand
  if (flush && straight) {
    rank = maxValue === 12 ? 10 : 9; // Royal flush or straight flush
  } else if (maxCount === 4) {
    rank = 8; // Four of a kind
  } else if (maxCount === 3 && Array.from(valueCounts.values()).includes(2)) {
    rank = 7; // Full house
  } else if (flush) {
    rank = 6; // Flush
  } else if (straight) {
    rank = 5; // Straight
  } else if (maxCount === 3) {
    rank = 4; // Three of a kind
  } else if (
    maxCount === 2 &&
    Array.from(valueCounts.values()).filter((count) => count === 2).length === 2
  ) {
    rank = 3; // Two pair
  } else if (maxCount === 2) {
    rank = 2; // One pair
  } else {
    rank = 1; // High card
  }

  // Sort cards for comparison
  const sortedCards = Array.from(valueCounts.entries())
    .sort((a, b) => b[1] - a[1] || b[0] - a[0]) // Sort by count first, then by value
    .map(([value]) => [value, ""] as Card);

  // Return the hand rank and sorted cards
  return { rank, cards: sortedCards };
}

// Function to compare two hands and determine the winner
export function compareHands(hand1: Hand, hand2: Hand): number {}

// Function to parse a hand from an array of card strings and return a Hand object
export function parseHand(cards: string[]): Hand {}

// Main function to execute the poker hand comparison
function main() {
  // Read input from the poker-hands.txt file and split it into lines
  const input = fs
    .readFileSync("./bin/poker-hands.txt", "utf-8")
    .trim()
    .split("\n");
}

// Run
main();
