// JavaScript Document



function vcount(str)
{
  var vlist = 'aeiouAEIOU';
  var vcount = 0;
  var x;
  
  for(x = 0; x < str.length; x++)
  {
    if (vlist.indexOf(str[x]) != -1)
    {
      vcount = vcount + 1;
    }
  
  }
  return vcount;
}
console.log(vcount("Umuzi"));