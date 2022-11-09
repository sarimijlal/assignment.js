  var name = "Sarim Ijlal"; //used in first two types
//lower case
  console.log(name.toLowerCase());
//upper case
  console.log(name.toUpperCase());
//title case
  function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
  String.prototype.capitalizeWords = function() {
    return this.replace(/\w\S*/g, capitalizeFirstLetter);
};

  let str = "saRiM ijLAl"
  console.log(str.capitalizeWords())
