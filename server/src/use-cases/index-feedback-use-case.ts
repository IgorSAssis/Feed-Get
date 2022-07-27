import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export class IndexFeedbackUseCase {

  constructor(
    private feedbacksRepository: FeedbacksRepository
  ) {}

    async execute() {

      const feedbacks = await this.feedbacksRepository.index();

      return feedbacks;
    }

}