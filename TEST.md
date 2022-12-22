# Quizz game - Manual Testing

## Functionality

<table>
  <tr>
   <td>
<strong>Test Label</strong>
</li>
</ol>
   </td>
   <td><strong>Test Action</strong>
   </td>
   <td colspan="2" ><strong>Expected Outcome</strong>
   </td>
   <td><strong>Test Outcome </strong>
   </td>
  </tr>
  <tr>
   <td>Site loading
   </td>
   <td>Navigate to the home
   </td>
   <td colspan="2" >A random quiz question is loaded with options.
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>Access homepage
   </td>
   <td>Question loaded
   </td>
   <td colspan="2" >Question is loaded and options are randomly ordered 
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>Answer question 1
   </td>
   <td>Click right answer option
   </td>
   <td colspan="2" >Open right answer pop with green check icon and showing “It is right” message. Right answer count is incremented.
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>Answer question 2
   </td>
   <td>Click some wrong answer option.
   </td>
   <td colspan="2" >Open wrong answer pop with red cross icon and showing “The correct answer is A” message where A is the correct option. Wrong answer count is incremented.
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>Question count
   </td>
   <td>Navigate to any question
   </td>
   <td colspan="2" >Current question number with total question is showed
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>Load next question
   </td>
   <td>Answer some question
   </td>
   <td colspan="2" >The next random question is loaded if it is not the last question
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>End game
   </td>
   <td>Answered the last question
   </td>
   <td colspan="2" >The end game message is showed with total of right answer
   </td>
   <td>PASS
   </td>
  </tr>
  <tr>
   <td>Play again pop
   </td>
   <td>End of game pop is open
   </td>
   <td colspan="2" >Play again option button is showed
   </td>
  <tr>
   <td>Play again
   </td>
   <td>Click play again
   </td>
   <td colspan="2" >Quiz is reset with all counts zeroed
   </td>
   <td>PASS
   </td>
  </tr>
</table>
<ol>

## Browser Compatibility

The website works on different browsers: <strong>Chrome, Firefox and Edge.</strong>

## Code Validator Testing

### HTML 
 
- No errors were returned when passing through the official <a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fomurilolima.github.io%2Ftquizz-game%2Findex.html">W3C validator</a>.

### CSS 

- No errors were found when passing through the official <a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fomurilolima.github.io%2Fquizz-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en">(Jigsaw) validator</a>.<br>

### Responsiveness

- According to [Google PageSpeed Insights](https://pagespeed.web.dev/report?url=https%3A%2F%2Fomurilolima.github.io%2Fquizz-game%2F&form_factor=desktop).

- Responsiveness was also tested with the site: <a href="https://ui.dev/amiresponsive?url=https://omurilolima.github.io/quizz-game/">Am I responsive?</a>

## User Stories 

All user stories were successfully performed.

1. As a player, I want to view the first random question and options of the quiz.
2. As a player, I want to answer the question with random ordered options.
3. As a player, I want to know if my answer is correct.
4. As a player, I want to know if my answer is incorrect.
5. As a player, I want to know how many questions the game has.
6. As a player, I want to know how many questions I answered in total.
7. As a player, I want to know how many questions I answered correcly.
8. As a player, I want to know how many questions I answered incorrectly.
9. As a player, I want to see my final score and know that the game has finished.

