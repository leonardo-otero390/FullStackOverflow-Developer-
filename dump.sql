CREATE TABLE "questions" (
	"id" serial NOT NULL,
	"question" TEXT NOT NULL,
	"student" varchar(255) NOT NULL,
	"class" varchar(255) NOT NULL,
	"tags" TEXT,
	"submitedAt" TIME NOT NULL DEFAULT 'NOW()',
	"answered" BOOLEAN DEFAULT FALSE,
	"answeredAt" TIME,
	"answer" TEXT,
	"answerner_id" integer,
	CONSTRAINT "questions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"class" varchar(255) NOT NULL,
	"token" varchar(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "questions" ADD CONSTRAINT "questions_fk0" FOREIGN KEY ("answerner_id") REFERENCES "users"("id");