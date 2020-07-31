$(document).ready(() => {

    
    changeNumFormat();
    changeDateFormat();
    showDate();

    // Convert json object data into string then into number with commas
    function changeNumFormat () {
         
        let dataNums = document.getElementsByClassName("tableNumData");
    
        for (let index = 0; index < dataNums.length; index++) {
            let newNum = JSON.stringify(dataNums[index].innerHTML);
            let newNums = newNum.slice(1,-1);
            console.log(newNums);
            if(newNums !== ""){
                dataNums[index].innerHTML = parseInt(newNums).toLocaleString();
            } else {
                dataNums[index].innerHTML = "Not Available";
            }
            
        }
    }
    // Convert json object data into string then date object as localeDateString
    function changeDateFormat() {

        let dataDate = document.getElementById("tableDate");
        let newData = JSON.stringify(dataDate.innerHTML);
        let newDate = newData.slice(1,-1);
        let realDate = new Date(newDate).toLocaleDateString();
        dataDate.innerHTML = realDate;
    }

    

    function showDate() {
    var today = new Date();
    var thisYear = today.getFullYear();
    document.getElementById('myYear').innerHTML = "<span>" + thisYear + "</span>";
    }

});

