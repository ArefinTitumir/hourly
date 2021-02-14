
function Cal(){
var hourlySalary = document.getElementById("HS").value;
var totalWorkingHour = document.getElementById("TH").value;
var totalWorkingMinute = document.getElementById("TM").value;
var salaryPerMin=hourlySalary/60;
var totalWorkingMinutes =Number(( totalWorkingHour*60 )+ Number(totalWorkingMinute));

if(isNaN(hourlySalary) || hourlySalary == ''){

alert("Input Data First");
return;

}
const nf=Intl.NumberFormat('en-US',{
  minimumFractionDigits:0,
  maximumFractionDigits:0

});
var totalPayableSalary = salaryPerMin * totalWorkingMinutes;

document.getElementById("PS").value= nf.format(totalPayableSalary);

Swal.fire({
  title: 'Payable SALARY!',
  text:nf.format(totalPayableSalary),
  type:'success',
  icon: 'success',
  imageUrl: 'https://i.postimg.cc/6pgFry0M/logo.jpg',
  imageWidth:150,
  imageHeight:150,
  imageAlt: 'Custom image',
})
}
