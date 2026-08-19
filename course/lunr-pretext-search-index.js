var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ch--2",
  "level": "1",
  "url": "ch--2.html",
  "type": "Worksheet",
  "number": "",
  "title": "Recitation 1",
  "body": " Recitation 1    Instructions: fill in the appropriate answers in the spaces based on the figure below. If there is no answer, write DNE .  Clearly write first and last names of each member on the top of the pages.      Fill in the answers for the limit, left limit, right limit, and value for the function for .   Graph of   Plot of a piecewise defined function.         "
},
{
  "id": "ch--2-3-1",
  "level": "2",
  "url": "ch--2.html#ch--2-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Fill in the answers for the limit, left limit, right limit, and value for the function for .   Graph of   Plot of a piecewise defined function.       "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
