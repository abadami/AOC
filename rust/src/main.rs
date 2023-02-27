mod AOC_22;

use AOC_22::*;

fn main() {
    let day_problems: [fn(); 8] = [run_problem1, run_problem2, run_problem3, run_problem4, run_problem5, run_problem6, run_problem7, run_problem8];

    day_problems[6]();

}
