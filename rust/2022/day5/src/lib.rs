/* Only issue with this solution is the hard coded "crates" size. Would like it to be dynamic, but it's a little tricky with my limited Rust knowledge. */
/* Shoutouts to reddit user furman82, whose Kotlin solution gave me some inspiration for mine. (Mostly the tidbit of using index to determine stack placement)  */
/* https://www.reddit.com/r/adventofcode/comments/zcxid5/comment/iyz4bro/?utm_source=share&utm_medium=web2x&context=3 */

fn parse_input(input: &String) -> (Vec<Vec<char>>, Vec<[usize; 3]>) {
  let mut crates: Vec<Vec<char>> = vec![Vec::<char>::new(), Vec::<char>::new(), Vec::<char>::new(), Vec::<char>::new(), Vec::<char>::new(), Vec::<char>::new(), Vec::<char>::new(), Vec::<char>::new(), Vec::<char>::new()];
  let mut instructions: Vec<[usize; 3]> = Vec::new();

  for line in input.lines().into_iter() {
    if line.contains("[") {
      let mut i = 1;

      while i < line.len() {
        let character = line.chars().nth(i).unwrap();

        if (character.is_alphabetic()) {
          crates[(i - 1) / 4].insert(0, character);
        }

        i = i + 4;
      }
    } else if line.contains("move") {
      let split: Vec<&str> = line.split(" ").collect();

      instructions.push([split[1].parse().unwrap(), split[3].parse().unwrap(), split[5].parse().unwrap()]);
    }
  }

  return (crates, instructions)
}

pub fn part1(input: &String) -> String {
  let (mut crates, instructions) = parse_input(input);

  let mut result = String::from("");

  for instruction in instructions {
    let quantity = instruction[0];
    let from = instruction[1] - 1;
    let to = instruction[2] - 1;

    println!("Move {} from {} to {}", quantity, from, to);

    for i in 0..quantity {
      let character = crates[from].pop().unwrap();
      crates[to].push(character);
    }
  }

  for mut stack in crates {
    let character = stack.pop().unwrap();

    result.push(character);
  }

  return result;
}

pub fn part2(input: &String) -> String {
  let (mut crates, instructions) = parse_input(input);

  let mut result = String::from("");

  for instruction in instructions {
    let quantity = instruction[0];
    let from = instruction[1] - 1;
    let to = instruction[2] - 1;

    let mut crates_to_move: Vec<char> = Vec::new();

    for i in 0..quantity {
      let character = crates[from].pop().unwrap();
      crates_to_move.insert(0, character);
    }

    for character in crates_to_move {
      crates[to].push(character);
    }
  }

  for mut stack in crates {
    let character = stack.pop().unwrap();

    result.push(character);
  }

  return result;
}