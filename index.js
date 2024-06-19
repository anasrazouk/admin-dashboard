import { Sequelize } from 'sequelize'

// export const sequelize = new Sequelize('test', 'root', ']Mb5£9^10Qdf', {
//     host: '127.0.0.1',
//     dialect:'mysql',
//   });


export const sequelize = new Sequelize('mysql://adminjs:test@localhost:3306/adminjs', {
  host: '127.0.0.1',
  dialect: 'mysql',
})

// export default sequelize
  

