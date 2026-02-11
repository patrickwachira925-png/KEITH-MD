/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VV2bKiSBD9l3rVaGVxjbgRI6gsIi6IAhPzUEKBhaxVJYgd/vsE3r59+2Gm5w5PRVbGyZOZJ7O+gyzHFK1QA6bfQUFwBRlqj6wpEJgC6RaGiIAuCCCDYApk2SnjzXE+2Crj7ery4PtOT2jOnqiZjeFlXLJdSiuVGXPHfQPPLihu5wT7vwG8NDsp75GKrheBoR3328ws0iwOeg83Wu3VQSxFWBjcDmTnv4FniwgxwVm0KC4oRQQmK9RsISZfo7/QmBJpReSRfWza+9FM0Yt7rBW15lHBnRnmOa60rFAKtf4afa4qM+3IkLNT5FHi2Jao1tXCehycq4uHHul4YVFYu4Mr5e/0KY4yFGgByhhmzZfrrsyq64LbSvoi5XJxUeyuZSc99RrbUmq0f/g3KjgnSTbMq/814tmogB3abO1L7lTDjc9Z/GrfNP2gv7eTWi0e1+vEOhj9Ayf+SnxLPrRy/T91HxowUNKsHnr3Ve8uppqxzLz1erTya/V29hs0Ki3JT46CEn2N/qA2g57DXSdNWj7mTNyGJe9eBTF8GO48uStjbYwO+NjROfeTPmQ38juWYUj4tTPgY0MzA3E2hnEw5NRtXTkKmtOVW5pR48ZSPsS26Qo95kUxWg7TIn9MdrGeJpI4vtSHbBktLJG/F8kgjhO5fntldEWNFoAp9+wCgiJMGYEM51lr4wWuC2BQWcgniL3KC/a1ZR0FL6USPQ+QpQ36UKww04/zYbRk0mHSNKKcz3JH0N5AFxQk9xGlKFAxZTlp1ohSGCEKpn/+1QUZurP3xrXh2mghJpTZ2a1Ichh8dPXjEvp+fsuY1WS+3B4QAdP+pxkxhrOItnW8ZZD4F1wh+QIZBdMQJhT9zBARFIApIzf0c2rlPGgL37d2grbkeNAF6ashOABTwA9Ers/xYn8wEqbC4A/6rW5hYVF8yxADXZC83MYCx4ncsD8QJiOx9WvNz5/8WrgAMYgT2u4rnS9zdy0vNpVF17WizLRoJkcz8JnPhzDeC7847oJdU570ZaJ4otEn5ak6GYLhdnx3jzur48hXL5sEl7z99g8grarGvfWmccaVWV2ESI023F4Lj3fzYN4ll+n3oYs3ahX0qJp3ci+sssUkX1mbe2mfN/Upzk3juK4C/Xa59k9y5XR2oR1Iu7c2WoAq7KNfg+nX43Xhj8PTspPpB7Ue2518403MpXjOJCfXpXiZrPy5fhgPHpJb6GWNT5vZXKpOt7PdxOWmuj0mkWJpRgSJTnW6HW9fwT5GJvmxqvBLTG2n2t8Qo9fkZ7Dt33937p14K7D+s/sLxo9d8i/zKO2XtmqvywTvvX2K5MlqmBAOTxp+mykLt8IJEiTxULglS8Dz+VcXFAlkYU5SMAUwC0iOA9AFJL+1itWyMP/dyzaLNGkXWW3mCaRs9jkFB5wiymBagCk3GvVHE0EQ+HevLckLFdJL+xSsxIsqtpJuZkVhMcg+hgrM2k/GE/D8Gz8HhlVwBwAA';
const dev = process.env.OWNER_NUMBER || '254101240573';
const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 
const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,  
  dev,
  session,
};

//must run
