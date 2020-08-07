// JavaScript Document



function vcount(str)
{
  var vlist = 'aeiouAEIOU';
  //var str;
  var vstring = "";
  var x;
  
  for(x = 0; x < str.length; x++)
  {
    if (vlist.indexOf(str[x]) >= 0)
    {
      vstring = vstring + str[x];
    }
  
  }
  return vstring;
}
console.log(vcount("Umuzi"));