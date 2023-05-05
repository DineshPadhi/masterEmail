create database MasterEmail;
create table TemplateData(
    id int not null auto_increment primary key,
    templateName varchar(100) not null,
    templateCode varchar(50) not null,
    scenario varchar(255) null,
    providers varchar(100) not null,
    user varchar(30) not null,
    tier varchar(100) not null,
    emailType varchar(255) not null,
    activity varchar(100) null,
    status varchar(10) not null,
    targetAudience varchar(255) not null,
    lang varchar(30) null,
    subject varchar(255) not null,
    body text not null
);
use MasterEmail;
select *
from TemplateData;
drop table TemplateData;
truncate table TemplateData;
INSERT INTO TemplateData (
        TemplateName,
        Template_Code,
        Scenario,
        Providers,
        User,
        Tier,
        Email_Type,
        Activity,
        Status,
        Target_Audience,
        Subject,
        Body
    )
VALUES (
        'sushant',
        '72100618990',
        'sushant',
        '0989',
        'user',
        '1',
        'flat',
        'true',
        '0',
        'xyz',
        'sda',
        'dd'
    );