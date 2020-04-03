CREATE TABLE `customer` (
	`company_name`	TEXT NOT NULL,
	`owner_name`	TEXT NOT NULL,
	`email`	TEXT NOT NULL,
	`state`	TEXT NOT NULL,
	`phone`	TEXT NOT NULL,
	`status`	INTEGER NOT NULL DEFAULT 0,
	PRIMARY KEY(`email`,`phone`,`company_name`)
);

CREATE TABLE `history` (
	`company_name`	TEXT NOT NULL,
	`phone`	TEXT NOT NULL,
	`sms_template`	TEXT NOT NULL,
	`sms_status`	TEXT,
	`scheduled_sms`	TEXT,
	`voice_template`	TEXT,
	`scheduled_voice`	TEXT,
	`voice_status`	TEXT,
	PRIMARY KEY(`company_name`)
);

CREATE TABLE `reminders` (
	`company_name`	TEXT NOT NULL,
	`phone`	TEXT NOT NULL,
	`sms_template`	TEXT,
	`scheduled_sms`	TEXT,
	`voice_template`	TEXT,
	`scheduled_voice`	TEXT,
	PRIMARY KEY(`company_name`,`phone`)
);

CREATE TABLE `users` (
	`user_id`	TEXT NOT NULL,
	`name`	TEXT NOT NULL,
	`p_hash`	TEXT NOT NULL,
	`u_hash`	TEXT NOT NULL,
	PRIMARY KEY(`user_id`)
);