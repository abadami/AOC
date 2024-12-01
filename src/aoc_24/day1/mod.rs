use std::{env, fs};
use std::collections::HashMap;

pub fn run_problem_1() {
    let path = env::current_dir().unwrap();

    println!("The current directory is {}", path.display());

    let input = fs::read_to_string("./src/aoc_24/day1/input.txt")
        .expect("Should have been able to read the file for day 1");

    println!("Day 1 Results");
    println!("---");

    println!("Part 1: {0}", crate::aoc_24::day1::part1(&input));
    println!("Part 2: {0}", crate::aoc_24::day1::part2(&input));
}

fn part1(input: &str) -> i32 {
    let mut list_a = Vec::<i32>::new();
    let mut list_b = Vec::<i32>::new();

    for line in input.lines() {
        let values: Vec<i32> = line.split_whitespace().map(|value| value.parse::<i32>().unwrap()).collect();

        list_a.push(values[0]);
        list_b.push(values[1]);
    }

    list_a.sort();
    list_b.sort();

    let mut distance_values = Vec::<i32>::new();

    for i in 0..list_a.len() {
        let raw_distance = list_a[i] - list_b[i];

        let distance = raw_distance.abs();

        distance_values.push(distance);
    }

    distance_values.iter().sum()
}

fn part2(input: &str) -> i32 {
    let mut list_a = Vec::<i32>::new();
    let mut frequency_map = HashMap::new();

    for line in input.lines() {
        let values: Vec<i32> = line.split_whitespace().map(|value| value.parse::<i32>().unwrap()).collect();

        list_a.push(values[0]);

        if let Some(value) = frequency_map.get_mut(&values[1]) {
            *value += 1;
        } else {
            frequency_map.insert(values[1], 1);
        }
    }

    let mut similarity_values = Vec::<i32>::new();

    for item in list_a.iter() {
        if let Some(value) = frequency_map.get(item) {
            similarity_values.push(item * *value);
        } else {
            similarity_values.push(0);
        }
    }

    similarity_values.iter().sum()
}

mod test {
    use crate::aoc_24::day1::{part1, part2};

    #[test]
    fn test_part1() {
        let input = "3   4
4   3
2   5
1   3
3   9
3   3";

        assert_eq!(part1(input), 11);
    }

    #[test]
    fn test_part2() {
        let input = "3   4
4   3
2   5
1   3
3   9
3   3";

        assert_eq!(part2(input), 31);
    }
}