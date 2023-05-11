create database MasterEmail;

create table TemplateData(
    id int  auto_increment primary key,
    templateName varchar(100) not null,
    templateCode varchar(50) not null unique ,
    scenario varchar(255) null,
    providers varchar(100) not null,
    tier varchar(100) not null,
    emailType varchar(255) not null,
    activity varchar(100) null,
    status varchar(10) not null,
    targetAudience varchar(255) not null,
    lang varchar(30) null
)ENGINE=InnoDB CHARACTER SET=utf8;
insert into TemplateData(
templateName,templateCode,scenario,providers,tier,emailType,activity,
status,targetAudience,lang)
values('xx',"happy diwali","sce",'87483311212',"pranay@gmail.com","+91",'english, hindi',
"com","+91",'eng'),
('xx',"happy_diwali","sce",'87483311212',"pranay@gmail.com","+91",'enghh',
"com","+91",'hin');
-- ('xx',"happy diwali","sce",'87483311212',"pranay@gmail.com","+91",'enghh',
-- "com","+91",'mar');
use MasterEmail;
select * from TemplateData;
truncate table TemplateData;
drop  table TemplateData;
	
create table lang(
	id int auto_increment primary key,
    tamplate_id int not null,
    templateCode varchar(50) not null,
    language varchar(30) not null default('English'),
    subject varchar (255) not null,
    body text not null,
	foreign key (tamplate_id) references TemplateData(id)
    );
insert into lang(tamplate_id,
templateCode,subject,body)
values
(3,"happy diwali",'aksa',"english body");


truncate table lang;
select * from lang;	
drop  table lang;

select lang.tamplate_id, lang.templateCode, lang.subject, lang.body from lang inner join 
TemplateData on lang.tamplate_id = TemplateData.id where 
lang.language = 'hin';