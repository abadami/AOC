pub fn part1(input: &String) -> i64 {
  let split_values: Vec<&str> = input.split("\n").collect();

  let mut highest: i64 = 0;

  let mut total: i64 = 0;

  for value_string in split_values {
    if value_string == "" {
      if total > highest {
        highest = total;
      }

      total = 0;
    } else {
      let value: i64 = value_string.parse().unwrap();

      total = total + value;
    }
  }

  return highest;
}

pub fn part2(input: &String) -> i64 {
  let split_values: Vec<&str> = input.split("\n").collect();

  let mut totals: Vec<i64> = vec![];

  let mut total: i64 = 0;

  for value_string in split_values {
    if value_string == "" {
      totals.push(total);

      total = 0;
    } else {
      let value: i64 = value_string.parse().unwrap();

      total = total + value;
    }
  }
  
  totals.sort_by(|a, b| b.cmp(a));

  return totals[0] + totals[1] + totals[2];
}