import { prisma } from "../../prisma";
import {
  FeedbacksRepository,
  FeedbackCreateData,
  FeedbackIndexData,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }

  async index(): Promise<{ feedbacks: FeedbackIndexData[] }> {
    const feedbacks = await prisma.feedback.findMany() as FeedbackIndexData[];

    return {
      feedbacks
    }
  }
}
