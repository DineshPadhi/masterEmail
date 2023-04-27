create database MasterEmail;
create table TemplateData(
    id int not null auto_increment primary key,
    TemplateName varchar(100) not null,
    Template_Code varchar(50) not null,
    Scenario varchar(255) not null,
    Providers varchar(100) not null,
    User varchar(100) not null,
    Tier varchar(100) not null,
    Email_Type varchar(255) not null,
    Activity varchar(100) not null,
    Status varchar(10),
    Target_Audience varchar(255),
    Subject varchar(255),
    Body text
);
use MasterEmail;
select *
from TemplateData;
drop table TemplateData;
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
create database MasterEmail;
create table TemplateData(
    id int not null auto_increment primary key,
    templateName varchar(100) not null,
    templateCode varchar(50) not null,
    scenario varchar(255) not null,
    providers varchar(100) not null,
    user varchar(100) not null,
    tier varchar(100) not null,
    emailType varchar(255) not null,
    activity varchar(100) not null,
    status varchar(10),
    targetAudience varchar(255),
    subject varchar(255),
    body text
);
use MasterEmail;
select *
from TemplateData;
drop table TemplateData;
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