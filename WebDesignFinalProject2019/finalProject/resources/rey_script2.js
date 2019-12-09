/*


   Filename: rey_script2.js

   Purpose: The purpose of this script is to keep copywrite year updated automatically.

*/


showDate();

function showDate() {
   var today = new Date();
   var thisYear = today.getFullYear();
   document.getElementById('myYear').innerHTML = "<span>" + thisYear + "</span>";
}