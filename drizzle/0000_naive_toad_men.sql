CREATE TABLE `urls` (
	`id` text PRIMARY KEY NOT NULL,
	`short_url` text NOT NULL,
	`original_url` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `urls_id_unique` ON `urls` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `urls_short_url_unique` ON `urls` (`short_url`);