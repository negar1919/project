/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      height:{"menu": "92px" , "h1" : "25" , "h3" : "30px" , "h4" : "30px" , "h5" : "50px"},
      backgroundColor: {"sait" : "#1C1E53"},
      width : {"aitem" : "40%" , "menuitem" : "60%" , "w1" : "88px" , "w2" : "90px" , "w3" : "165px" },
      padding : {"p1" : "33" , "p2" : "160" , "p3" : "32px", "p4" : "32px" ,},
      textColor : {"c1" : "#FFFFFF" , "c2" : "#BBBBCB"},
      fontFamily : { "iran" : "./fonts"},
      borderRadius : {"b1" : "41px"}, 
      borderColor : {"clogin" : "#F4F6FC33"}
    },
  },
  plugins: [],
}

