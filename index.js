// code your solution here


function superbowlWin(array) {
    const arrObj = array.find(element => element.result === `W`)
  if (!!arrObj === true) {
    return arrObj.year
} else return undefined
}

superbowlWin(record)