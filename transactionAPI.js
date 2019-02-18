// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//const apiKey = "YY574DJ8E18WZYZP1JM32NCBHGX7GUUG77"

const request = require('request')

var getTransactionsByAddress = (type, address) => {

  numbers_transactions = 100;
  console.log(numbers_transactions + ' ' + address)
  let answer = [];

  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=${numbers_transactions}&sort=desc&apikey=YY574DJ8E18WZYZP1JM32NCBHGX7GUUG77%22`;

  request(url, (error, response, rs) => {
    if (error) {
      console.log(error);
    } else {
      //console.log(response)
      let result = JSON.parse(response)
      let data = result["result"]
      console.log(result)
      for (let i = 0; i < data.length; i++) {
        data
        let tempData = [];
        if (data[i][type] == address) {
          console.log(`From : ${data[i]["from"]}`)
          console.log(`To : ${data[i]["to"]}`)
          console.log(`Hash : ${data[i]["hash"]}`)
          console.log(`Value : ${data[i]["value"]}`)
          console.log()
          tempData["from"] = data[i]["from"]
          tempData["to"] = data[i]["to"]
          tempData["hash"] = data[i]["hash"]
          tempData["value"] = data[i]["value"]
          answer.push(tempData);
        }
        if (i > 10) return answer;
      }
    }
  })

  

    // result = JSON.parse(result)
    // let data = result["result"]
    // console.log(result)
    // for (let i = 0; i < data.length; i++) {
    //   data
    //   let tempData = [];
    //   if (data[i][type] == address) {
    //     console.log(`From : ${data[i]["from"]}`)
    //     console.log(`To : ${data[i]["to"]}`)
    //     console.log(`Hash : ${data[i]["hash"]}`)
    //     console.log(`Value : ${data[i]["value"]}`)
    //     console.log()
    //     tempData["from"] = data[i]["from"]
    //     tempData["to"] = data[i]["to"]
    //     tempData["hash"] = data[i]["hash"]
    //     tempData["value"] = data[i]["value"]
    //     answer.push(tempData);
    //   }
    //   if (i > 10) return answer;
    // }

  //let request = new XMLHttpRequest();
  // request.open('GET', url, true)
  // request.onload = function () {
  //   if (request.status == 200) {
  //     //let address_content = JSON.parse(this.response)
  //     let result = JSON.parse(this.responseText)

  //     let data = result["result"]
  //     console.log(result)
  //     for (let i = 0; i < data.length; i++) {
  //       data
  //       let tempData = [];
  //       if (data[i][type] == address) {
  //         console.log(`From : ${data[i]["from"]}`)
  //         console.log(`To : ${data[i]["to"]}`)
  //         console.log(`Hash : ${data[i]["hash"]}`)
  //         console.log(`Value : ${data[i]["value"]}`)
  //         console.log()
  //         tempData["from"]=data[i]["from"]
  //         tempData["to"] = data[i]["to"]
  //         tempData["hash"]=data[i]["hash"]
  //         tempData["value"]=data[i]["value"]
  //         answer.push(tempData);
  //       }
  //       if(i>10) return answer;
  //     }
  //   }
  //   else console.log("error");
  // }
  // request.send()
}





























// https://api.etherscan.io/api?module=account&action=txlist&address=0x3333a037c9A9f9716F169884b7B3C65dc7776A10&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=YY574DJ8E18WZYZP1JM32NCBHGX7GUUG77%22;

// "https://api.etherscan.io/api?module=account&action=txlist&address=" + address + 
//   "&startblock=0&endblock=99999999&page=1&offset=" +
//     numbers_transactions + "&sort=desc&apikey=YY574DJ8E18WZYZP1JM32NCBHGX7GUUG77";

//address1 = getTransactionsByAddress("0x3333a037c9A9f9716F169884b7B3C65dc7776A10", 10)
//print(address1)

// address2 = get_transactions_by_address("0x88ee279af2e5ea4389ef88eebc4f8e1ad3001238", 500)
// print(address2)console.log(result["result"].length)

module.exports = getTransactionsByAddress;