seventeen.addEventListener("click",function(){
    console.log("seven");
    document.getElementById("story_image").src="picture2.jpg"; 
    story_period.innerHTML="17th Century";
    story_description.innerHTML= "The 17th century saw the early use of maple sugar, with indigenous knowledge shaping its production and consumption. Exportation to Europe, also began during this period. This led to collection of the sap that the cuts caused to flow from the trees, which could have been used to cook game, corn, beans, and others. The maple sap, also known as maple water, was red and silver sugar. The freezing temperatures of the Québec winter are followed by the warmth of spring, causing the sap to flow in the trees.";
    document.body.classList.add("seventeen");
    document.body.classList.remove("eighteen");
    document.body.classList.remove("nineteen");
    document.body.classList.remove("twenty");
    })

eighteen.addEventListener("click",function(){
    console.log("eight");
    document.getElementById("story_image").src="picture3.jpg";
    story_period.innerHTML="18th Century";
    story_description.innerHTML="In the 18th century, some techniques were improved during the process. For example, instead of using an axe to cut the trees, they began fashioning wooden taps to drive into the trees—one of the first examples of innovation in maple syrup production. Later in the 18th century, metal boilers and taps were invented, along with the evaporator, which was adapted for maple syrup production. This invention replaced the iron pot, improving the quality of the syrup and increasing production." ;
    document.body.classList.add("eighteen");
    document.body.classList.remove("seventeen");
    document.body.classList.remove("nineteen");
    document.body.classList.remove("twenty");
    })

 nineteen.addEventListener("click",function(){
    console.log("nine");
    document.getElementById("story_image").src="picture4.jpg"; 
    story_period.innerHTML="19th Century";
    story_description.innerHTML= "In the 19th century, products made from syrup began to be created for sale. On one hand, in 1930, maple butter was invented, made by boiling syrup to 120 degrees. On the other hand, with the commercialization of this product, the first jar of maple syrup appeared in 1950. Lastly, collection techniques were also modernized, as maple syrup producers started using connected tubing systems to collect sap, replacing the traditional bucket and barrel method.";
    document.body.classList.add("nineteen");
    document.body.classList.remove("seventeen");
    document.body.classList.remove("eighteen");
    document.body.classList.remove("twenty");
    })
    

twenty.addEventListener("click",function(){
    console.log("twenty");
    document.getElementById("story_image").src="picture5.jpg"; 
    story_period.innerHTML="20s Century";
    story_description.innerHTML= "In 2005 scientists identify the presence of vitamins and minerals in maple syrup. Researchers discover that maple syrup contains a molecule that is found nowhere else in nature. It is a polyphenol, considered beneficial to human health. They call it Quebecol. In 2013 Maple water appears as a beverage, made of 100% pure Québec maple. Québec produce the 72% of world maple syrup and maple products are now being exported to more than 60 countries.";
    document.body.classList.add("twenty");
    document.body.classList.remove("seventeen");
    document.body.classList.remove("eighteen");
    document.body.classList.remove("nineteen");
    })


