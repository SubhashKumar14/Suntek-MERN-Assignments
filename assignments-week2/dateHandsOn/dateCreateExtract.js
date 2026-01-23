/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss
*/
//1.create a Date object for current date & time.
let currentDate=new Date();
console.log("current date&time is:",currentDate.toString());

//2.Extract and display:
//* Year
let year=currentDate.getFullYear();
console.log("year is:",year);
//* Month (human readable)
let month=currentDate.getMonth()+1;
console.log("month is:",month);
//* Date
let date=currentDate.getDate();
console.log("date is:",date);
//* Day of week
let dayOfWeek=currentDate.getDay();
console.log("day of week is:",dayOfWeek);
//* Hours, minutes, seconds
let hours=currentDate.getHours();
let minutes=currentDate.getMinutes();
let seconds=currentDate.getSeconds();
console.log("hours:",hours," minutes:",minutes," seconds:",seconds);

//3.Display the date in this format: DD-MM-YYYY HH:mm:ss
console.log(date.getDate()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getFullYear()+" "+
hours+":"+minutes+":"+seconds);
