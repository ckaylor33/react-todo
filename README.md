Plan

Structure
-App.js for main functionality
-List.js for the list layout
-Alert.js for to handle types of alerts - types passed from App.js as props.

Functionality
-useState for functionality - adding items, deleting items, editing items, deleting list & updating list depending on what users actions

Alerts
-useState to recognize when to show an alert and useEffect to display alert
-Prevent user from entering an empty value to the list
-Deleted item from the list
-Cleared list
-Added item to the list
-Edited item

Local Storage
-Want to be able to use local storage so the user doesn't lose list items when browser refreshes
-useEffect to whipe out old values and save latest values in the list; key value pairs
-need to get values from local storage if there is any and use them when browser is refreshed
-stringify and parse JSON as necessary
