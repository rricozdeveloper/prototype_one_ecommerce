// __  __  __  __  \__/  __  __  __  __
// \__/\__/\__/\__/  )(  \__/\__/\__/\__/
//  )(  )(  )(  )(   )(   )(  )(  )(  )(
//  )(  )(  )(   \\__)(__//   )(  )(  )(
//  )(   \\  \\   `--)(--'   //  //   )(
//   \\   \\  \\_____)(_____//  //   //
//    \\   \\  `-----)(-----'  //   //
//     \\   \\_______)(_______//   //
//      \\   `-------)(-------'   //
//       \\__________)(__________//
//        `----------)(.---------'
//                   )(
//                  _/\_
//                  >()<
//                   \/
//                   )(
//                  (())
//             ___.-"^^"-.___
//            '==============` am Israel Jaí!

require("./seedDb");
const app = require("./src/app");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ Alter: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
});


/*Application programmed by :

1. programador5781 https://www.linkedin.com/in/ricardo-ricoz/,
2. Santiago Malagón
3. Leidy Nuñez
*/