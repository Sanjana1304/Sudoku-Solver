# Sudoku-Solver
A sudoku game where users can either PLAY SUDOKU OR PROVIDE THE QUESTION AND GET THE SOLUTION.

I am here to share the implementation details of Sudoku puzzle. Sudoku is a number-placement puzzle played on a 9x9 grid divided into 3x3 sub grids called regions. The objective is to fill in the grid so that each row, column, and region contains all the numbers from 1 to 9 without repetition.

The time complexity of the backtracking algorithm used to solve Sudoku puzzles is exponential. In the worst-case scenario, where the puzzle is extremely difficult and requires exhaustive search, the algorithm may need to explore a large number of possibilities before finding a solution.

Let's analyze the time complexity of the backtracking algorithm:
->For each empty cell in the Sudoku grid (there are a maximum of 81 cells) The algorithm tries all numbers from 1 to 9 to fill the cell.
->For each number, it checks if the placement is valid (involving checks for the row, column, and the 3x3 sub grid).
->If valid, it proceeds to the next empty cell recursively.
->If not valid, it backtracks and tries the next number.

In the worst case, the algorithm will have to try all possible numbers for each empty cell, resulting in a branching factor of 9 for each cell. This leads to a branching factor of 9^81 overall possibilities. However, due to constraints, the actual number of possibilities explored is much less than this, as invalid placements are pruned early in the search process.
To enhance performance of the puzzle, various optimization techniques can be applied.
