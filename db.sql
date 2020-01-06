#功能一:创建用户登录用户并且添加二个用#户
#1:进入指定库 
SET NAMES UTF8;
DROP DATABASE IF EXISTS tt; 
CREATE DATABASE tt;
USE tt;
#2:创建表 Tz_login
CREATE TABLE Tz_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50),
  upwd  VARCHAR(32)
);
#3:添加二条合法用户
INSERT INTO Tz_login VALUES(null,'tom',md5('123456'));
INSERT INTO Tz_login VALUES(null,'jerry',md5('123456'));
#4：创建轮播图表
DROP TABLE IF EXISTS `Tz_index_carousel`;
CREATE TABLE `Tz_index_carousel` (
  `cid` int(11) NOT NULL,
  `img` varchar(128) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL
) ;
TRUNCATE TABLE `Tz_index_carousel`;
INSERT INTO `Tz_index_carousel` (`cid`, `img`, `title`) VALUES
(1, 'img/tu1.jpg', '轮播广告商品1'),
(2, 'img/tu2.jpg', '轮播广告商品2'),
(3, 'img/tu3.jpg', '轮播广告商品3'),
(4, 'img/tu4.jpg', '轮播广告商品4'),
(5, 'img/tu5.jpg', '轮播广告商品5'),
(6, 'img/tu6.jpg', '轮播广告商品6'),
(7, 'img/tu7.jpg', '轮播广告商品7');
