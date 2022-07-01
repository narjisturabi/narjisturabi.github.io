/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  
  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". . I am opposed to the Better Care Reconciliation Act and the defunding of Planned Parenthood, I encourage the senator to please vote 'no' on this bill. I also strongly encourage the senator to take a stand against the Supreme Court's Roe v. Wade ruling and support women's rights. Thank you!";
}


//Move these variables to the top
var factList = [
  "The CDC reported just over 1 million abortions in 1991 and 629,898 in 2019, looking at just the District of Columbia and the 47 states that reported figures in both years.", 
  "As of 2017, the rate of legal abortions sits at 13.5 per 1,000 women, the lowest rate ever recorded, according to the Guttmacher Institute.", 
  "Between 2013 and 2018, the CDC reported the national case-fatality rate was 0.41 abortion-related deaths per 100,000 legal abortions. This represents a nearly 8-fold decrease from the case-fatality rate of 3.2 deaths per 100,000 legally induced abortions in 1972, the year before abortion was legalized nationwide.", 
  "In 2020 there were 14.4 abortions in the U.S. per 1,000 women ages 15 to 44. Its data shows that the rate of abortions among women has generally been declining in the U.S. since 1981, when it reported there were 29.3 abortions per 1,000 women in that age range.", 
  "70% of those polled said the decision on whether a woman can have an abortion should be left to the woman and her doctor while 24% said it should be regulated by law."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
