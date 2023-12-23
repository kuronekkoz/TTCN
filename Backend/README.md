npx sequelize-cli db:migrage // migrate table in database
npx sequelize-cli db:migrage:undo // undo migrate data
npx sequelize-cli db:seed:all // seed all data into database
npx sequelize-cli db:seed:undo // undo file seed
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string // Create model
npx sequelize-cli seed:generate --name demo-user // create file seeder
