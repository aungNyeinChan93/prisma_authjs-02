-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('guest', 'user', 'admin', 'owner');

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "role" "public"."Role" DEFAULT 'guest';
