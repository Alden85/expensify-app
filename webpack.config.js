const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/*we have access to path.join and we can use it to join our obsolute
   path(where project resides ) and local path in public folder.
    */

/* we must define where entry point is and where to output final bundle file.
  we set module.exports to an object, and on this object we will define all our configuration details for our webpack build.
  module.exports is a way to expose something, in this case  an object to another file.
  webpack will grab this file and have access to whatever we put on this object.
*/
/*console.log(path.join(__dirname,'public')); contains the path to the current location, for us, the path to the indecsion app project folder. */

/*we don't want to put bundle in root of project instead we want to put it in the public folder of the project so we can serve it up to the browser.
  we will join together the absolute path that __dirname returns to the local path of the public folder.
*/

module.exports = (env) => {
  const isProduction = env === 'production';
 
  return {
    entry: "./src/app.js", //webpack is running this file.
    output: {
      path: path.join(
        __dirname,
        "public"
      ) /*absolute path on your machine to where you want to output your webpack file (bundle.js )file and we want to put it in the public folder of the project*/,
      filename:
        "bundle.js" /*filename can be anything you like, but common filename is bundle.js */
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test:/\.s?css$/,
          use:[
            MiniCssExtractPlugin.loader,
            {
              loader:'css-loader',
              options:{
                sourceMap:true
              }
            },
            {
              loader:'sass-loader',
              options:{
                sourceMap:true
              }
            }
          ]
          //use allows us to define an array of loaders.
        }
      ]
    },

    plugins:[
      new MiniCssExtractPlugin({
        filename:'styles.css'
      })
    ],

    devtool: isProduction ? 'source-map' : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true // tells the dev server we are handling routing via client side code and that it shoudl return index.html for all 404 routes.
    }
  };
};
