-- CreateTable
CREATE TABLE "flashcard" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "flashcard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "flashcard" ADD CONSTRAINT "flashcard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
