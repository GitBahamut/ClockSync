let log = [];
let counter = 0;
let timer = 0;
setInterval(function(){ timer+=0.005; }, 5);
setInterval(function(){ if(log.length<41){getServerTime();}}, 1500);

async function getServerTime(){
  const oldTime = timer;
  const timeSent = new Date();
  const response = await fetch('/api/sync');
  const result = await response.json();
  timer = result;
  const roundTripTime = (new Date() - timeSent) / 1000;
  const diff = Math.abs(result - (oldTime));
  console.log("time diff: " + diff);
  console.log("local time: " + oldTime);
  console.log("server time: " + result);
  console.log("RTT: " + roundTripTime);
  log.push([counter+=1, diff, roundTripTime]);
  return result;
}

function printData(){
  console.log(log.join("\n"));
}
