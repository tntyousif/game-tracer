# Game Tracer

## Application Idea  
 GameTracker is a web application that enables users to register and manage their video games. Users can update the status of their games (e.g., Completed, Playing, Paused, Planing to play) using a dropdown menu and add notes for each game. The application tracks relationships between users and their games, providing a comprehensive view of their gaming experiences. 

## Website link
<a href="https://gametracker-5509d0d72b7b.herokuapp.com/games/671f5e7a98699919af7c044b"class="button">Game Tracker</a>
## Tools used:
- javascript
- EJS
- CSS
- MongoDB


## User stories
 

1.  User Registration: 
- As a new user, I want to create an account (Create) so that I can track my games. 
- As a returning user, I want to log in to my account (Read) to access my game list. 

2. Games Management: 
- As a user, I want to add a new game to my collection (Create) so that I can keep track of it. 
- As a user, I want to view a list of all my games (Read) along with their statuses and notes. 
- As a user, I want to update the status of my game (Update) to reflect my current progress. 
- As a user, I want to add or edit notes for each game (Update) to remember my thoughts or experiences. 
- As a user, I want to delete games from my list (Delete) that I no longer want to track. 
- As a user, I want to like the games from all game's lists. 

3. User Interaction 
- As a user, I want to see all the games stored in the database along with their statuses and notes so that I can review my complete collection and compare it with others. 


## Mock-up
- Sign-up page
<img src="/plan/imgs/signup.png"></img>

- Sign-in page
<img src="/plan/imgs/signin.png"></img>

- index page
<img src="/plan/imgs/index.png"></img>

- New page
<img src="/plan/imgs/new.png"></img>

- Show page
<img src="/plan/imgs/show.png"></img>

- Edit page
<img src="/plan/imgs/edit.png"></img>

## Game Logic (pseudo code) 
1. Adding a New Game: 
- When a user wants to add a new game, they provide the game name, status (selected from a dropdown), and notes. 
- The system creates a new game entry in the database, associating it with the user's ID. 
- The system confirms that the game has been successfully added. 

<img src="/plan/imgs/myCode/new.png" >

2. Viewing All Games: 
- When a user wants to see all games stored in the database, the system retrieves all game entries. 
- The system displays the complete list, including each game’s name, status, and notes, allowing users to review their whole collection. 

<img src="/plan/imgs/myCode/show.png" >

3. Updating Game Information: 
- When a user wants to update a game, they select the game and provide new status and notes. 
- The system searches for the game in the database using its ID. 
- If the game exists, the system updates the status (selected from a dropdown) and notes. 
- The system confirms that the update was successful. 
- If the game does not exist, the system returns an error message. 
- The users can like games on the viewing page. 

<img src="/plan/imgs/myCode/edit.png" >

4.  Deleting a Game 
- When a user wants to delete a game, they select the game from their list. 
- The system searches for the game in the database using its ID. 
- If the game is found, the system removes it from the database. 
- The system confirms that the game has been successfully deleted. 
- If the game does not exist, the system returns an error message. 

<img src="/plan/imgs/myCode/delete.png" >


## final product
Thank you For 