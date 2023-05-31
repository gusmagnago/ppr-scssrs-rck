# Paper - Rock - Scissor Game :collision:

A scissors, rock, paper game, with the ability to bet on the winning position.

## Setup

### Install dependencies

Once you've cloned the repository install the required dependencies:

```sh
npm install
```

## Run

### Development server

To run the project in development mode run:

```sh
npm start
```


## To Visit App:

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Project structure

The directory structure is the following:

```sh

├── public
├── src
│   ├── components
│   │   └──── game
|   |   └──── game-message
|   |   |   └──── GameMessage.styles.tsx
|   |   |   └──── GameMessage.tsx
|   |   |   └──── GameMessage.types.ts
|   |   └──── header
|   |   └──── play-button
|   |   └──── player
│   ├── context
│   │   └──── appContext.tsx
│   ├── theme
│   │   └──── palette.ts
│   │   └──── theme.type.ts
│   ├── utils
|   |   |   └──── types
|   |   |   |     └──── game.d.ts
│   ├── App.tsx

```

## General Information

Goal: The goal of this project is to demonstrate:


- There should be three betting positions, rock, paper, scissors.
- Player starts with a balance of 5000.
- Player can bet on rock, paper, or scissors, but not on all three at the same :me.
- The bet is reduced from the balance.
- When betting done button is clicked, the computer runs a random paper, scissors, rock match.
- Player choice should be compared to computers choice and only one bet can win – every tie counts as loss
- If player bets on one of them and wins, the return is 14 times the bet.
- If player bets on two of them and wins the return is 3 times the bet.
- AJer round ends the return adds to the balance
- Player cannot bet if player has less balance than available for bet.
- Each bet should be 500 (player can place several bets on one position: 500, 1000, 1500 etc)


## Technologies Used

- JavaScript
- React
- React Context
- Typescript
- Styled-Components

## Try it out!

<a href="https://ppr-scssrs-rck-game.vercel.app/" target="_blank">Rock - Paper - Scissor</a>

#### Thank you!

###
