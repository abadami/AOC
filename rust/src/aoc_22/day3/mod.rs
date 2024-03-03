/* Using some stuff I learned from this comment (and explicitly taking the value function) (thanks /u/SuperSmurfen) https://www.reddit.com/r/adventofcode/comments/zb865p/comment/iypv6q5/?utm_source=share&utm_medium=web2x&context=3 */

use std::fs;

fn find_intersection(a: &[u8], b: &[u8]) -> Vec<u8> {
  a.into_iter().copied().filter(|c| b.contains(c)).collect()
}

fn value(c: u8) -> usize {
  match c {
    b'a'..=b'z' => c as usize - b'a' as usize + 1,
    b'A'..=b'Z' => c as usize - b'A' as usize + 27,
    _ => unreachable!(),
  }
}

fn part1(input: &String) -> usize {
  return input.lines().map(|l| l.as_bytes()).map(|l| find_intersection(&l[..l.len()/2], &l[l.len()/2..])).map(|c| value(c[0])).sum();
}

fn part2(input: &String) -> usize {
  return input.lines().map(|l| l.as_bytes()).collect::<Vec<_>>().chunks(3).map(|a| find_intersection(a[0], &find_intersection(a[1], a[2]))).map(|c| value(c[0])).sum();
}

pub fn run_problem3() {
  let input = fs::read_to_string("../day3/input.txt")
  .expect("Should have been able to read the file for Day 3");

  println!("Day 3 Results");
  println!("---");
  println!("Part 1: {0}", part1(&input));
  println!("Part 2: {0}", part2(&input));
}