const { jwtDecode } = require("jwt-decode");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjJmODc5OGYwNDg2NDNhYTRiYWRjMiIsImVtYWlsIjoiYWRtaW5mYWN1bmRvQHRlc3QuZXMiLCJpYXQiOjE3MTA0MjI1ODQsImV4cCI6MTcxMDUwODk4NH0.El9sLPOQIHidEWGVInpt8WlkRPi60vsh6a0HWLJVNfA";
const decoded = jwtDecode(token);

console.log(decoded.id);
