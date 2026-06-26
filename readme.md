#Snake Game#Snake Game#Snake Game

The Project is a snake game built to run on the browser, no framewroks or libraries were required.

It’s built with vanilla JavaScript using ES modules and HTML/CSS for the layout and styling.

Since the project uses ES modules, it can’t be opened directly as a file. The simplest way to open it is by using the Live Server extension in VSCode. Download the project, open the folder on VSCode and right click on the HTML file and click “Open with Live Server” and the game should automatically open on the browser.

The project has been split across multiple files, snek.js handles the snake movement and growth, khabar.js handles the food spawning and grid.js defines the grid boundaries so on and so forth.

As for Key Features the game grows by 5 segments each time it eats, the game ends if the snake hits itself or a wall.

And as a fun little easter egg the food item has been rendered as the BUCC logo.

The main challenge here was handling the input correctly such that the snake cannot reverse into itself, which was solved by tracking the last input direction and ignoring any input that would cause a reversal.

