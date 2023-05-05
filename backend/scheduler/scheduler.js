// const cron = require("node-cron");
// const { User } = require("../connections/Conn");

// async function updateTemplateData() {
//   console.log("cron exicuted");

//   let creater = await User.find({
//     status: "true",
//     created_at: {
//       // 20 minutes ago (from now)
//       $lt: new Date().getTime() - 01 * 60 * 1000,
//     },
//   });

//   for (let updater of creater) {
//     updater.status = "false";
//     updater.save();
//   }
// }

// cron.schedule("* * * * * *", updateTemplateData);
