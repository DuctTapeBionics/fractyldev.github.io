/*Quick Intro:
All vectors are defined as two-celled arrays, in the form [x, y]
All vector functions return the result of the operation, and don't edit the array itself.
This increases how "compressible" the code is. Rather than:

a.add(b);
a.mult(c);

we can write

a = vectMult(vectAdd(a, b), c);

which can compress two or more lines into one
*/

var M = function(a, b) {
  return (a[1] - b[1])/(a[0] - b[0]);
};//M returns the slope of a line defined by the two points a and b
var B = function(a, b) {
  return  a[1] - M(a, b) * a[0];   
};//B returns the y-intercept of a line defined by the two points a and b
var PM = function(a, b) {
  return -1/M(a, b);
};//PM returns the perpendicular slope of the given line.
var TB = function(m, a) {
  return a[1] - (m * a[0]);
};//TB finds the B value of a line with a given slope that goes through a given point.

var vectAdd = function(v, a) {
  return[v[0] + a[0], v[1] + a[1]];
};//vectAdd adds two vectors
var vectSub = function(v, s) {
  return[v[0] - s[0], v[1] - s[1]];
};//vectSub subtracts two vectors
var vectMult = function(v, f) {
  return[v[0] * f, v[1] * f];
};//vectMult scales a vector by a constant
var vectDiv = function(v, d) {
  return vectMult(v, 1/d);
};//vectDiv scales a vector by the reciprocal of the given constant
var vectMag = function(v) {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
};//vectMag returns the magnitude of the vector
var vectNorm = function(v) {
  return vectDiv(v, vectMag(v));
};//vectNorm normalizes the vector
var vectRot = function(v, t) {
  return[v[0] * Math.cos(t) - v[1] * Math.sin(t), v[1] * Math.cos(t) + v[0] * Math.sin(t)];
};//vectRot rotates a vector by a constant
var vectMid = function(v1, v2) {
  return[v1[0]/2 + v2[0]/2, v1[1]/2 + v2[1]/2];
};//vectMid finds the midpoint of two points
var vectDist = function(a, b) {
  return vectMag(vectSub(a, b));
};//vectDist finds the distance between two points
var vectHead = function(v1, v2){
  return Math.atan2(v2[1] - v1[1], v2[0] - v1[0]);
};//vectHead returns the heading of the line that goes through two given points
var vectRefl = function(v, a, b) {
  return vectSub(v, vectMult(vectSub(v, [(B(a, b) - TB(PM(a, b), v))/(PM(a, b) - M(a, b)), M(a, b) * (B(a, b) - TB(PM(a, b), v))/(PM(a, b) - M(a, b)) + B(a, b)]), 2));
};//vectRefl reflects a point over a given line

var colliding = function(x1, y1, w1, h1, x2, y2, w2, h2, priority) {
    return priority ? (Math.abs(x1 - x2) * 2 <= w1 + w2) && (Math.abs(y1 - y2) * 2 <= h1 + h2) : (Math.abs(x1 - x2) * 2 < w1 + w2) && (Math.abs(y1 - y2) * 2 < h1 + h2)
}
