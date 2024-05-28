# sudoku-app

Suduku web app and api built using next.js

## Project Design

### Requirements

1. Multi-page website
2. User interaction (buttons, input, etc)
3. Fetch data from an api
4. Animations
5. CSS library/framework
6. Use graphs to display data

### Specifications

- Api [3]
  - /api/generate - generate soduku puzzle
  - /api/user - get user data
- Home page [1, 3, 6]
  - display bar graph of games completed over time
  - display list of games (completed and in-progress)
  - resume in-progress games
  - start new game form (optional seed and numClues fields)
- Sudoku page [1, 2, 3]
  - soduku puzzle using html grid
  - input answers into grid cells
  - can only make legal moves
  - check for solution
  - save games to database
- Animated user interations [2, 4, 5]
  - button/input animations
  - graph animations
  - soduku solved animation

## Running Tests

```bash
npm test
```
