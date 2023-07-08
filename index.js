const express = require('express');
const {google} = require('googleapis');
const cron = require('node-cron');
const moment = require('moment');
const app = express();

const spreadsheetId = "1UWvuKUg6m6JRBbZPx4dgKl1u5rYZoXdEW1y40lG1H5k"
var names = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday'];

const getDaysArray = function(year, month) {
    var monthIndex = month - 1; // 0..11 instead of 1..12
    var names = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];
    var date = new Date(year, monthIndex, 1);
    var result = [];
    while (date.getMonth() == monthIndex) {
      result.push(date.getDate() + '-' + names[date.getDay()]);
      date.setDate(date.getDate() + 1);
    }
    return result;
}
const dates = getDaysArray(moment().year(),moment().month()+1);
const dateNumber = []
for (let i = 0; i < dates.length; i++) {
    if (names.includes(dates[i].split("-")[1])) {
        dateNumber.push(dates[i].split("-")[0]);
    }
}




app.get("/",(req, res) => {
        
    alert("Hello Kame hhhhh :) ");
    res.send("Yes !");
})

app.listen(5050,(req, res) => {
    console.log("Server is running on port 3000");
})











/*


// cron.schedule('* * * * *', async()=>{    
//     const auth = new google.auth.GoogleAuth({
//         keyFile : "credentials.json",
//         scopes : "https://www.googleapis.com/auth/spreadsheets"
//     });

//     const client = await auth.getClient();

//     const googleSheets = google.sheets({version:"v4" , auth: client});

//     const metadata = await googleSheets.spreadsheets.get({
//         auth,
//         spreadsheetId,
//     });

//     // const getRows = await googleSheets.spreadsheets.values.get({
//     //     auth,
//     //     spreadsheetId,
//     //     range :"work!A2:B2"
//     // })

//     await googleSheets.spreadsheets.values.append({
//         auth,
//         spreadsheetId,
//         range : "work!B:B",
//         valueInputOption : "USER_ENTERED",
//         resource :{
//             values : [
//                 ["test 1 minute"]
//             ],
            
//         }
//     })
// })


*/
