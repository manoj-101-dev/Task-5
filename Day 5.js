// For Loop

var detail = [
    {
    "firstName": "Surya",
    "lastName": "Kumar",
    "age": 30,
    "street": "123 Main St",
    "city": "Chennai",
    "state": "TN"
    }
]
for(let i = 0; i < detail.length; i++){
    console.log(detail[i]);
}

//For in
for (var i = 0; i < detail.length; i++) {
  var obj = detail[i];
  for (var key in obj) {
      console.log(`
          Key: ${key}
          Value: ${obj[key]}
          `);
      }
  };
  

    //for Each
    console.log("For each loop------------")
    var details = 
      {
      firstName : "Surya",
      lastName : "Kumar",
      age: 30,
      street : "123 Main St",
      city: "Chennai",
      state: "TN"
      }

 const objectkeys = Object.keys(details);
 console.log(objectkeys);
 for(let i = 0; i < objectkeys.length; i++){
    console.log(objectkeys[i]);
 } 
const objectvalues = Object.values(details);
 console.log(objectvalues);
 for(let i = 0; i < objectvalues.length; i++){
    console.log(objectvalues[i]);
 } 
 objectkeys.forEach((value) => {
  console.log(`
        key : ${value}
        value : ${details[value]}
  `)
}) 

//For of
console.log("for of-------------")
for (key of objectkeys) {
    console.log(`
     Key: ${key}
     Value: ${details[key]}
     `);
  }

  // Resume Data in JSON format
  const resumedata = {
    "personalInformation": {
      "firstName": "Manoj",
      "lastName": "K",
      "email": "manoj19545@gmail.com",
      "phone": "9025819545",
      "address": "123 hosur",
       "githubProfile": "https://github.com/manoj-dev-001"
    },
    "summary": "Fresher with a passion for building web applications and a strong background in front-end development. Skilled in HTML, CSS, JavaScript, and React.",
    "education": [
      {
        "degree": "Bachelor of  Computer Applications",
        "Passed year": "2023"
      },
      {
        "school": "Govt High School",
        "Passed year": "2020"
      }
    ],
    "skills": [
      "HTML",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "Responsive Web Design",
    ],
    "languages": ["English", "Tamil","Kannada", "Telugu"],
  }

  console.log(resumedata);