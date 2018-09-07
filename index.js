/**
 * index.js
 functionAll our useful JS goes here, awesome!
Server side performance	Y	2
End to-End performance	Y	4
Network Virtualization	Y	2
Web Services	N	2
Mobile App performance	Y	4
Database performance	N	2
Infrastructure validation	N	2
Capacity Planning	Y	3
Test Data Generation	N	3
Test Report	Y	3
 */
function getEstimateOnTextChange(){
  var changeBillingRate;
  var changeTaxRate;
  var personHours;
  changeBillingRate = parseFloat(document.getElementById("billingRate").value);
  changeTaxRate= parseFloat(document.getElementById("taxRate").value);
  personHours = parseInt(document.getElementById("perfEsteemate").innerHTML);
  document.getElementById("finalEsteemate").innerHTML = parseFloat ( (personHours * changeBillingRate) * (changeTaxRate/100)  + (personHours * changeBillingRate));
}
function myFunction() {

//Validate Form
    var loadCheck = document.getElementById("load").checked;
    var stressCheck = document.getElementById("stress").checked;
    var enduranceCheck = document.getElementById("endurance").checked;
    var spikeCheck = document.getElementById("spike").checked;

    var sspCheck = document.getElementById("ssp").checked;
    var eepCheck = document.getElementById("eep").checked;
    var nvCheck = document.getElementById("nv").checked;
    var wsCheck = document.getElementById("ws").checked;
    var mapCheck = document.getElementById("map").checked;
    var dbpCheck = document.getElementById("dbp").checked;
    var infrapCheck = document.getElementById("infrap").checked;
    var cpCheck = document.getElementById("cp").checked;
   

 
if (loadCheck == false && stressCheck == false && enduranceCheck == false && spikeCheck == false) {
    document.getElementById('showOutput').style.display = "none";
    document.getElementById("load").focus();
    alert("Please select at least one type of performance testing.");

if (sspCheck == false && eepCheck == false && nvCheck == false && wsCheck == false && mapCheck == false && dbpCheck == false && infrapCheck == false && cpCheck == false ) {
    document.getElementById('showOutput').style.display = "none";
    document.getElementById("ssp").focus();
    alert("Please select at least one in-scope item.");
}
return;
}



//Showoutput
   document.getElementById('showOutput').style.display = "block";
  //Get Scripts Count
  var s, m, c;
  var individualSimpleEffort;
  var individualMediumEffort;
  var individualComplexEffort;
  var t;
  var stressEffort, enduranceEffort,spikeEffort;
  var simpleEffort, mediumEffort, complexEffort;
  //In scope Performance Testing
  var sspEffort,eepEffort,nvEffort,wsEffort,mapEffort,dbpEffort,infrapEffort,cpEffort,testdataEffort,testreportEffort;
  var inscopeTotalEffort;
  var totalEffort;
  var defaultBillingRate;
  var defaultTaxRate;

  defaultBillingRate = "30";
  defaultTaxRate = "15.0";
  totalEffort = 0;

  s = document.getElementById("simple").value;
  m = document.getElementById("medium").value;
  c = document.getElementById("complex").value;

  //If s,m,c is empty assign 0
  if (s == '') {
    s=0;
  }
  if (m == '') {
    m=0;
  }
  if (c == '') {
    c=0;
  }
  t = parseInt(s) + parseInt(m) + parseInt(c);
  individualSimpleEffort = 12;
  individualMediumEffort = 17;
  individualComplexEffort = 29;
  stressEffort = 17;
  enduranceEffort = 23;
  spikeEffort = 12;

  //Load Testing
  if (document.getElementById("load").checked) {
    simpleEffort = parseInt(s) * (individualSimpleEffort);
    mediumEffort = parseInt(m) * (individualMediumEffort);
    complexEffort = parseInt(c) * (individualComplexEffort);
    totalEffort = simpleEffort + mediumEffort+ complexEffort;

  }

  //Stress Testing
  if (document.getElementById("stress").checked) {
    stressEffort = parseInt(t) * (stressEffort);
    totalEffort = stressEffort + totalEffort;

  }
  //Endurance Testing
   if (document.getElementById("endurance").checked) {
    enduranceEffort = parseInt(t) * (enduranceEffort);
     totalEffort = totalEffort + enduranceEffort;
  }
  //Spike Testing
   if (document.getElementById("spike").checked) {
    spikeEffort = parseInt(t) * (spikeEffort);
     totalEffort = totalEffort + spikeEffort;
  }
  //Server side performance
  if (document.getElementById("ssp").checked){


    sspEffort = t * 2;
    totalEffort = totalEffort + sspEffort;

  }
  else{
    sspEffort = 0;

  }
  //End-to-End performance
  if (document.getElementById("eep").checked){
    eepEffort = t * 4;
    totalEffort = totalEffort + eepEffort;
  }
  else{
    eepEffort = 0;
  }
    //NV performance
  if (document.getElementById("nv").checked){
    nvEffort = t * 2;
    totalEffort = totalEffort + nvEffort;
  }
  else{
    nvEffort = 0;
  }
  //WS performance
  if (document.getElementById("ws").checked){
    wsEffort = t * 2;
    totalEffort = totalEffort + wsEffort;
  }
  else{
    wsEffort = 0;
  }
  //MAP performance
  if (document.getElementById("map").checked){
    mapEffort = t * 4;
    totalEffort = totalEffort + mapEffort;
  }
  else{
    mapEffort = 0;
  }
  //DB performance
  if (document.getElementById("dbp").checked){
    dbpEffort = t * 2;
    totalEffort = totalEffort + dbpEffort;
  }
  else{
    dbpEffort = 0;
  }
   //Infra performance
  if (document.getElementById("infrap").checked){
    infrapEffort = t * 2;
    totalEffort = totalEffort + infrapEffort;
  }
  else{
    infrapEffort = 0;
  }
     //Capacity Planning
  if (document.getElementById("cp").checked){
    cpEffort = t * 2;
    totalEffort = totalEffort + cpEffort;
  }
  else{
    cpEffort = 0;
  }
  //Test Data Generation
  if (document.getElementById("yes").checked){
    totalEffort = totalEffort + (t * 3);
  }
  //Test Data Generation
  if (document.getElementById("customreportyes").checked){
    totalEffort = totalEffort + (t * 3);
  }
  document.getElementById("perfEsteemate").innerHTML = totalEffort;
  document.getElementById("billingRate").value = parseInt(defaultBillingRate);
  document.getElementById("taxRate").value = parseFloat(defaultTaxRate);

  var changeBillingRate;
  var changeTaxRate;
  var personHours;

  changeBillingRate = parseFloat(document.getElementById("billingRate").value);
  changeTaxRate= parseFloat(document.getElementById("taxRate").value);

  personHours = parseInt(document.getElementById("perfEsteemate").innerHTML);

  document.getElementById("finalEsteemate").innerHTML = parseFloat ( (personHours * changeBillingRate) * (changeTaxRate/100)  + (personHours * changeBillingRate));
  //Validate Script
if (s < 1 && m < 1 && c < 1) {
     document.getElementById('showOutput').style.display = "none";
     alert("Please enter at least one script count to generate the esteemate.");
     document.getElementById("simple").focus();
}
if (totalEffort < 1){
     document.getElementById('showOutput').style.display = "none";

}
return false;
}
