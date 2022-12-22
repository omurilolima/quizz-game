# Quizz Game

[View deployed site here](https://omurilolima.github.io/quizz-game/)

## Introduction

A comprehensive website the presents a quiz game with 15 questions about general knowledge.

 The website features a header with the game title and a dragon icon, a game area with the question on top and four buttons showing possible answers. The score area indicates how many questions there are in total, how many remain, the total question correct and the total question incorrect.

![website in different screen sizes](/assets/images/website-in-different-screen-sizes.png)

### Business goals addressed with this site:

- Build brand awareness;
- Catch customers' attention and entertain them;

### Customer needs:

- To have some fun with a quiz game.
- Challenge your knowledge about general knowledge.
- Learn about general knowledge.

## UX

### Ideal client:

- English speaking;
- Has interest about general knowledge.;
- Enjoy quizz;

### Visitors to this website are searching for:

- A good game to challenge your knowledge while having some fun.

### This project is the best way to help them achieve these things because:

- Feature the questions and possible answers in a direct and fun way.
- Delivery of all the main info through a clear and easy-to-navigate experience.

### Player stories:
1. As a player, I want to view the first random question and options of the quiz.
2. As a player, I want to answer the question with random ordered options.
3. As a player, I want to know if my answer is correct.
4. As a player, I want to know if my answer is incorrect.
5. As a player, I want to know how many questions the game has.
6. As a player, I want to know how many questions I answered in total.
7. As a player, I want to know how many questions I answered correcly.
8. As a player, I want to know how many questions I answered incorrectly.
9. As a player, I want to see my final score and know that the game has finished.


### Wireframes
- <strong>Home</strong>

![Wireframe](/assets/images/Wireframe.png)

### Colour Scheme
I used [mycolor.space](https://mycolor.space/) to choose a colour scheme that would be easily readable and visually appealing to users.

![Colour Scheme](/assets/images/colour-scheme.png)

### Typography
I used Google Fonts to select and import the fonts Raleway 

![Raleway Google Fonts](/assets/images/typography.png)


## Features

The page features a responsive navigation with the conventional placing of <strong>logo</strong> on top.
The game starts with the loadpage, showing the first question. If the user refresh the page, the game restart.
The <strong>footer</strong> show the author section.

### Answer feedback

Once the user clicks in any of the four buttons to choose it option to answer, a pop-up is displayed with the result. The user can click on the "OK" button to see the next question or after 3 seconds the pop-up disappears.

![Answer feedback](/assets/images/answer-feedback.png)


### End Game

Once the user answers all the questions, the final score is featured. There is a button called "play again" which allows the user to restart the game.

![End Game screen](/assets/images/end-game.png)

## Technologies Used
- This project uses HTML and CSS programming languages.
- <strong>Git hub</strong> for version control and host: https://github.com/omurilolima/the-wine-bar  
- <strong>Gitpod</strong> for coding: https://gitpod.io/ 
- <strong>W3C HTML</strong> valitadion service: https://validator.w3.org/  
- <strong>W3C CSS</strong> valitadion service: https://jigsaw.w3.org/css-validator/  
- <strong>JS Hint</strong> - Javascritpt valitadion service: https://jshint.com/
- <strong>Lighthouse</strong> for test site performance on desktop and mobile devices.
- <strong>Balsamiq</strong> for create wireframes: https://balsamiq.com/ 
- <strong>My Color</strong> for choosing a color pallete: https://mycolor.space/
- <strong>Google fonts</strong>: https://fonts.google.com/
- <strong>Google Drive</strong> and <strong>Notion</strong> for documenting.
- <strong>Favicon</strong> for create a favicon: https://favicon.io/
- <strong>Pomodoro Tracker</strong> for measure my effort: https://pomodoro-tracker.com/

## Testing

Testing information can be found in separate [TESTING.md file](/documentation/testing.md)

### Code Validator Testing
- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fomurilolima.github.io%2Fquizz-game%2F). 
    
    ![W3C validator](/assets/images/html-validator.png).

- CSS
    - No errors were found when passing through the official [W3C validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fomurilolima.github.io%2Fquizz-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
    
    ![W3C validator](/assets/images/css-validator.png).

- JSHint
    - No errors were found when passing through the official JSHint validator.
    
    ![JSHint validator](/assets/images/js-hint-.png).

### Performance, Responsiveness and Best Practices Testing

- According to [Google PageSpeed Insights](https://pagespeed.web.dev/report?url=https%3A%2F%2Fomurilolima.github.io%2Fquizz-game%2F&form_factor=mobile).

![Google pagespeed results](/assets/images/pagespeed-insights.png)

- Responsiveness was also tested with [Am I responsive?](https://ui.dev/amiresponsive?url=https://omurilolima.github.io/quizz-game/)

## Deployment

This project was developed using the [Gitpod IDE](https://gitpod.io/), committed to git and pushed to [GitHub](https://github.com).

To <strong>deploy this page to GitHub Pages</strong> from its [GitHub repository](https://github.com/omurilolima/the-wine-bar), the following steps were taken:

1. Log into GitHub.
2. From the list of repositories on the screen, select AJGreaves/portrait-artist.
3. From the menu items near the top of the page, select Settings.
4. Scroll down to the GitHub Pages section.
5. Under Source click the drop-down menu labelled None and select Master Branch
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed.
7. Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.

The live link can be found here - https://omurilolima.github.io/quizz-game/

### How to run this project locally
To clone this project into Gitpod you will need:

1. Create a Github account at https://github.com/
2. Use the Chrome browser

Then follow these steps:
1. Install the [Gitpod Browser Extentions for Chrome](https://www.gitpod.io/docs/browser-extension/)
2. After installation, restart the browser
3. Log into [Gitpod](https://gitpod.com/) with your gitpod account.
4. Navigate to the Project GitHub repository
5. Click the green "Gitpod" button in the top right corner of the respository
6. This will trigger a new gitpod workspace to be created from the code in github where you can work locally.

### How to commit and push changes

To commit and push changes you need to follow these steps:
1. Run the "git add ." command on the terminal to add a change in the working directory to the staging area.
2. Run the "git commit" command on the terminal and add a message to help indentifing what this commit is about.
3. Run the "git push" command on the terminal to upload local repository content to a remote repository. Note that any new commits to the main branch will automatically update the site.

## Credits

### Code

In addition to the knowledge acquired in the [Professional Academy Diploma in Full Stack Software Development](https://www.ucd.ie/professionalacademy/findyourcourse/professional_diploma_in_software_development/) by [University College Dublin](https://www.ucd.ie/) and [Code Institute](https://codeinstitute.net/ie/), I also used the following sources to deal with specific points of this project:

- Picking a colour scheme: [Tutorial by Kevin Powell](https://www.youtube.com/watch?v=mq8LYj6kRyE)
- CSS tutorials at [W3School](https://www.w3schools.com/howto/default.asp)
- Responsive Design: [Tutorial by Kevin Powell - 1](https://www.youtube.com/watch?v=VQraviuwbzU) and [Tutorial by Kevin Powell - 2](https://www.youtube.com/watch?v=2KL-z9A56SQ)
- Markdown Guide: [Basic syntax](https://www.markdownguide.org/basic-syntax/) for create the README file.
- CSS Flexbox: [A Visual Reference](https://www.reddit.com/r/webdev/comments/usln38/a_visual_reference_of_css_flexbox/).

### Content

- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/icons).
- Images were taken from https://www.shutterstock.com/ and https://www.vivino.com/.

### Acknowledgments

- This project was inspired by my own experience of building digital products for tech companies as a Product Manager / Product Owner for the previous 10 years.

## Disclaimer

The content of this Website is for educational purposes only.