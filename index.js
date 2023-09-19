// code your solution here
const mondayWork = function(work='go to the office'){   
 return(`This Monday, I will ${work}.`)};

const saturdayFun = function(fun='roller-skate') {
  return(`This Saturday, I want to ${fun}!`);
}                   

function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
