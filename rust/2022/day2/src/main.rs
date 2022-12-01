use day2::{part1, part2};
use std::fs;

fn main() {
    println!("--2022 day 02 solution--");

    let input = fs::read_to_string("./input.txt")
      .expect("Should have been able to read the file");

    println!("Part 1: {}", part1(&input));

    println!("Part 2: {}", part2(&input));
}
