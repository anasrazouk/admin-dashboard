import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";
import { Database, Resource } from "@adminjs/sequelize";
import { sequelize } from "./index.js";
import { Category } from "./category.entity.js";

AdminJS.registerAdapter({
  Database,
  Resource,
});

const PORT = 3000;

const start = async () => {
  // Ensure the database tables are created
  // await sequelize.sync();

  const app = express();

  // Correctly pass the adminOptions directly to the AdminJS constructor
  const admin = new AdminJS({
    resources: [Category],
  });

  const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);

  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();

// import AdminJS from "adminjs";
// import AdminJSExpress from "@adminjs/express";
// import express from "express";
// import * as AdminJSSequelize from "@adminjs/sequelize";
// import { Sequelize } from "sequelize";
// import { Category } from "./category.entity.js";

// AdminJS.registerAdapter({
//   Resource: AdminJSSequelize.Resource,
//   Database: AdminJSSequelize.Database,
// });

// const PORT = 3000;

// const start = async () => {
//   const app = express();

//   const adminOptions = {
//     // We pass Category to `resources`
//     resources: [Category],
//   };

//   const admin = new AdminJS({ adminOptions });

//   const adminRouter = AdminJSExpress.buildRouter(admin);
//   app.use(admin.options.rootPath, adminRouter);

//   app.listen(PORT, () => {
//     console.log(
//       `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
//     );
//   });
// };

// start();
