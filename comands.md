
--comado para criar novo model--
npx sequelize-cli model:generate --name [ nome em plural ] --attributes [ chave:valor,chave:valor ]

npx sequelize-cli model:generate --name Users --attributes name:string,email:string,password_hash:string

npx sequelize-cli model:generate --name Project --attributes name:string,description:string,status:enum,user_id:integer

npx sequelize-cli model:generate --name Task --attributes due_date:date,effort:integer,title:string,description:text,order:integer,status:enum,path:string,folder:string,type:string,filename:string,size:string,user_id:integer,project_id:integer



--comando para conectar com o banco de dados--
npx sequelize-cli db:migrate