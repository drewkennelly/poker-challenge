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

}

// Function to compare two hands and determine the winner
export function compareHands(hand1: Hand, hand2: Hand): number {
  
}

// Function to parse a hand from an array of card strings and return a Hand object
export function parseHand(cards: string[]): Hand {
  
}

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
