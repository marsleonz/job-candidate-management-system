CREATE TABLE `candidates` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`phone_number` text,
	`email` text NOT NULL,
	`call_time_interval` text,
	`linkedin_url` text,
	`github_url` text,
	`comment` text,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
CREATE UNIQUE INDEX `candidates_email_unique` ON `candidates` (`email`);