create database MasterEmail;

create table TemplateData(
    tamplate_id int  auto_increment primary key,
    templateName varchar(100) not null,
    templateCode varchar(50) not null ,
    scenario varchar(255) null,
    providers varchar(100) not null,
    tier varchar(100) not null,
    emailType varchar(255) not null,
    activity varchar(100) null,
    status varchar(10) not null,
    targetAudience varchar(255) not null,
    lang varchar(30) null
);
insert into TemplateData(
templateName,templateCode,scenario,providers,tier,emailType,activity,
status,targetAudience,lang)
values('xx',"happy diwali","sce",'87483311212',"pranay@gmail.com","+91",'enghh',
"com","+91",'eng'),
('xx',"happy diwali","sce",'87483311212',"pranay@gmail.com","+91",'enghh',
"com","+91",'hin'),
('xx',"happy diwali","sce",'87483311212',"pranay@gmail.com","+91",'enghh',
"com","+91",'mar');
use MasterEmail;
select * from TemplateData;
truncate table TemplateData;
drop  table TemplateData;
	
create table lang(
	lang_id int auto_increment primary key,
    tamplate_id int,
    templateCode varchar(50) not null,
    language varchar(30) null,
    subject varchar (255) not null,
    body text not null,
	foreign key (tamplate_id) references TemplateData(tamplate_id)

    );
insert into lang(
templateCode,language,subject,body)
values
("happy diwali","eng",'hello',"eng body"),
("happy diwali","hin",'namaste',"hindi body"),
("happy diwali","mar",'marathi',"marathi body");


truncate table lang;
select * from lang;	
drop  table lang;

select lang.language,subject,body from lang inner join 
TemplateData on lang.templateCode = TemplateData.templateCode where 
TemplateData.lang = 'hin';