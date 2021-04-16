

val


//JSON file connections

jsonFile = footage("fileName.json").sourceData;  //first establish variable and Location

//then extract information from it

//each piece of the AE layering can be used as a variable name for example
compName = thisComp.name;
layerName = thisLayer.name;
propertyName = thisProperty.name;
effectName = thisProperty.propertyGroup(1).name

//you can split the name by using a split NAME = Grill_Cheese
Grill = thisComp.name.split("_")[0];
Cheese = thisComp.name.split("_")[1];

//extracting information 
//use . for hard code label
//use []  for inderect expression code label
//use (" ") for direct expression code label
//use (" ") for strings

addr = jsonFile.mainLabel.secondaryLabel.etc;
addr = jsonFile[compName][layerName][etc];
addr = jsonFile("thisComp.name")("thislayer.name")("thisEtc.name");
addr = jsonFile("thisComp.name" + "_" + "thisComp.name")("etc");


//hardcoded value for AE is 

value[0] = //the value you manually put
value[1] = //the second value you put if it is an array
value[2] = //the thrid value you put if it is a 3d Point for example

//you can use linear expression for keyframes
nameVar = linear(time, t1, t2, v1, v2);
nameVar = easeIn(time, 2, 10, 0, 100); //t1 and t2 is in Seconds


//you can use conditional statement for specific keyframe areas

