# Password Generator
## User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Challenge Work Done
This challenge involved using Javascript to create a password generator that users can 
interact with. I created functions that recorded the users preferences in which types of
characters they would like to include in their randomly generated passwords. They could
choose from a combination of lowercase letters, uppercase letters, numbers, and special
characters. Another function was used to randomly generate the users password based on 
the preferences they entered. User password is then generated and displayed on page.


![passgen.png](https://github.com/briannalbo/Password-Generator/blob/main/passgen.png)
