Node.js + express 來建立 REST API 服務，同時為提高網路安全性採取了 JWT JSON Web Token）來實作使用者驗證機制。資料庫的部份是使用 PostgresSQL，為方便起見，採用 Docker 來執行 PostgresSQL。

Technology:
- NodeJs 17.6.0
- Express 4.17.1
- cors 
- crypto-js             // 加密套件
- jsonwebtoken 8.5.1    // 支援 Json Web Token　的功能套件
- Sequelize 6.20.1      // ORM 套件
- pg 8.7.3
- pg-hstore 2.3.4
- PostgreSQL 14.3

## 專案完成後的檔案結構

```
./專案目錄
├── app/
│	├── config/
│   │	└── db.config.js
│	├── middleware/
│   │	├── auth.jwt.js
│   │	├── index.js
│   │	└── verify.signup.js
│	├── models/
│   │	├── index.js
│   │	├── role.model.js
│   │	└── user.model.js
│	├── routes/
│   │	├── auth.routes.js
│   │	└── user.routes.js
│   └── services/
│   	├── auth.service.js
│   	└── user.service.js
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── README.md
├── server.js
└── yarn-lock
```

## 專案完成後所提供的 API 端點

|Methods|Urls|Actions|
|-------|-----------------------------|-------------------------------------------------|
|POST| /api/auth/signup|註冊新使用者帳號|
|POST| /api/auth/signin|使用者帳號登入|
|GET| /api/users/test/all|造訪公開內容區|
|GET| /api/users/test/user|造訪｀一般使用者｀內容區|
|GET| /api/users/test/moderator| 造訪｀版主｀內容區|
|GET| /api/users/test/admin| 造訪一般｀管理者｀內容區|
