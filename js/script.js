/* myInfoJSON = '{"name":"Yuliia Voitsekhovska", "age":26, "hobbies":["programming", "swimming"], "isStudent":false, "bankAccount":null, "address":{"country":"Ukraine", "city":"Sumy", "street":"Street 1"}}';
$("#personalInfo").append(`<p>${myInfoJSON}</p>`);
myInfo = JSON.parse(myInfoJSON);
$("#personalInfo").append(`<ul>
    <li><b>Name:</b> ${myInfo.name}</li>
    <li><b>Age:</b> ${myInfo.age}</li>
    <li><b>Hobbies:</b> ${myInfo.hobbies}</li>
    <li><b>Is Student:</b> ${myInfo.isStudent}</li>
    <li><b>Bank Account:</b> ${myInfo.bankAccount ? myInfo.bankAccount : "No information" }</li>
    <li><b>Address:</b> ${myInfo.address.country}, ${myInfo.address.city} city, ${myInfo.address.street}</li>
    </ul>`);
 */

myInfoJSON = '{"name":"Yuliia Voitsekhovska", "age":26, "hobbies":["programming", "swimming"], "isStudent":false, "bankAccount":null, "address":{"country":"Ukraine", "city":"Sumy", "street":"Street 1"}}';
$("#personalInfo").append(`<p>${myInfoJSON}</p>`);
myInfo = JSON.parse(myInfoJSON);
$("#personalInfo").append(`<ul>
    <li><b>Name:</b> ${myInfo.name}</li>
    <li><b>Age:</b> ${myInfo.age}</li>
    <li><b>Hobbies:</b> ${myInfo.hobbies}</li>
    <li><b>Is Student:</b> ${myInfo.isStudent}</li>
    <li><b>Bank Account:</b> ${myInfo.bankAccount ? myInfo.bankAccount : "No information" }</li>
    <li><b>Address:</b> ${myInfo.address.country}, ${myInfo.address.city} city, ${myInfo.address.street}</li>
    </ul>`);
