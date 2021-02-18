Plan <br/>

Aim <br/>
-To build a fully functioning but simple crud application using local storage <br/>

Structure <br/>
-App.js for main functionality <br/>
-List.js for the list layout <br/>
-Alert.js for to handle types of alerts - types passed from App.js as props. <br/>

Functionality <br/>
-useState for functionality <br/>
-Adding items, deleting items, editing items, deleting list & updating list depending on what users actions <br/>

Alerts <br/>
-useState to recognize when to show an alert and useEffect to display alert <br/>
-Prevent user from entering an empty value to the list <br/>
-Deleted item from the list <br/>
-Cleared list <br/>
-Added item to the list <br/>
-Edited item <br/>

Local Storage <br/>
-Want to be able to use local storage so the user doesn't lose list items when browser refreshes <br/>
-useEffect to whipe out old values and save latest values in the list; key value pairs <br/>
-Need to get values from local storage if there is any and use them when browser is refreshed <br/>
-Stringify and parse JSON as necessary <br/>

Future improvements <br/>
-Implement categories and dynamic routing (axios) and possibly hook up to a back end with authentication (maybe firebase) to make the user experience fully customizable <br/>
-Could use data visualization (D3.js) to show progress and completed tasks in a visually appealing manner
